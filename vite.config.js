import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from '@prerenderer/rollup-plugin';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';
import fs from 'fs';
import path from 'path';

/**
 * getDynamicRoutes
 *
 * Reads all appData*.jsx files in src/data using regex to extract 'id' slugs.
 * Avoids JSX imports — plain Node-safe file scanning only.
 * Returns a merged array of static + dynamic /app/:id routes for the prerenderer.
 */
const getDynamicRoutes = () => {
  const DATA_DIR = path.resolve('./src/data');
  const staticRoutes = ['/', '/extensions', '/themes', '/misc', '/google-apps'];

  if (!fs.existsSync(DATA_DIR)) return staticRoutes;

  const files = fs.readdirSync(DATA_DIR).filter(
    file => file.startsWith('appData') && file.endsWith('.jsx')
  );
  const dynamicRoutes = [];

  for (const file of files) {
    const filePath = path.join(DATA_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /id:\s*(["'])(.*?)\1/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      dynamicRoutes.push(`/app/${match[2]}`);
    }
  }

  return [...staticRoutes, ...dynamicRoutes];
};

const BASE_URL = 'https://apps.suryaraj.com';

/**
 * canonicalInjectorPlugin
 *
 * Custom Vite plugin that runs after the bundle is closed (post-prerender).
 * react-helmet-async runs client-side and Puppeteer snapshots the DOM before
 * Helmet can flush tags into <head>. This plugin walks the dist/ tree and
 * injects <link rel="canonical"> into the <head> of each prerendered HTML file
 * based on its file path — guaranteed and timing-independent.
 */
const canonicalInjectorPlugin = () => ({
  name: 'canonical-injector',
  closeBundle() {
    const DIST_DIR = path.resolve('./dist');
    if (!fs.existsSync(DIST_DIR)) return;

    const walkDir = (dir) => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walkDir(fullPath);
        } else if (entry.name === 'index.html') {
          // Derive canonical URL from the file's location relative to dist/
          const relativePath = path.relative(DIST_DIR, dir);
          const routePath = relativePath === '' ? '/' : `/${relativePath.replace(/\\/g, '/')}`;
          const canonicalUrl = `${BASE_URL}${routePath}`;

          let html = fs.readFileSync(fullPath, 'utf8');

          // Idempotent: only inject if not already present
          if (!html.includes('rel="canonical"')) {
            html = html.replace(
              '</head>',
              `  <link rel="canonical" href="${canonicalUrl}">\n</head>`
            );
            fs.writeFileSync(fullPath, html, 'utf8');
            console.log(`[canonical] Injected: ${canonicalUrl}`);
          }
        }
      }
    };

    walkDir(DIST_DIR);
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: getDynamicRoutes(),
      renderer: new PuppeteerRenderer({
        // Allow enough time for React + react-helmet-async to fully mount
        maxConcurrentRoutes: 4,
        renderAfterTime: 2000,
      }),
      fallback: 'index.html',
    }),
    // Inject canonical links into all static HTML files after prerendering completes
    canonicalInjectorPlugin(),
  ],
});
