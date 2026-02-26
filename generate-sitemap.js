import fs from 'fs';
import path from 'path';

// Define the static routes in our App
const STATIC_URLS = [
    '/',
    '/extensions',
    '/themes',
    '/misc',
    '/google-apps'
];

// Configuration
const BASE_URL = 'https://apps.suryaraj.com';
const DATA_DIR = path.resolve('./src/data');
const PUBLIC_DIR = path.resolve('./public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

async function generateSitemap() {
    console.log('Generating sitemap.xml...');

    // 1. Find all JSX files containing App Data (Starts with appData)
    const files = fs.readdirSync(DATA_DIR).filter(file => file.startsWith('appData') && file.endsWith('.jsx'));

    // 2. We will use Regex to extract all unique "id" fields from these appData files since they are JSX
    const appIds = new Set();

    for (const file of files) {
        const filePath = path.join(DATA_DIR, file);
        const content = fs.readFileSync(filePath, 'utf8');

        // Simple regex to pull out `id: "some-slug",` or `id: 'some-slug'`
        // Handles spaces and different quote marks universally
        const regex = /id:\s*(["'])(.*?)\1/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            appIds.add(match[2]);
        }
    }

    console.log(`Discovered ${appIds.size} dynamic apps from data configs.`);

    // 3. Construct the Sitemap XML string
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Write exact static URLs
    for (const route of STATIC_URLS) {
        xml += `  <url>\n    <loc>${BASE_URL}${route}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
    }

    // Write dynamic app detail & privacy URLs
    for (const id of appIds) {
        xml += `  <url>\n    <loc>${BASE_URL}/app/${id}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
        xml += `  <url>\n    <loc>${BASE_URL}/app/${id}/privacy</loc>\n    <changefreq>yearly</changefreq>\n    <priority>0.3</priority>\n  </url>\n`;
    }

    xml += `</urlset>\n`;

    // 4. Ensure public exists
    if (!fs.existsSync(PUBLIC_DIR)) {
        fs.mkdirSync(PUBLIC_DIR);
    }

    // 5. Write the file out precisely into the public directory so Vite bundles it automatically
    fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
    console.log(`Sitemap successfully written to ${SITEMAP_PATH}`);
}

generateSitemap();
