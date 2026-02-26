/**
 * ping-indexnow.js
 *
 * Post-build script: Reads the generated sitemap.xml, extracts all URLs,
 * and fires an IndexNow API ping to notify search engines (Bing, Yandex,
 * and connected engines) of the updated content immediately after deployment.
 *
 * IndexNow Protocol: https://www.indexnow.org/documentation
 * Key file served at: https://apps.suryaraj.com/964366229ecf444ca62855837735ce9c.txt
 */

import fs from 'fs';
import path from 'path';
import https from 'https';

// ============================================================
// CONFIGURATION
// ============================================================
const HOST = 'apps.suryaraj.com';
const KEY = '964366229ecf444ca62855837735ce9c';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.resolve('./public/sitemap.xml');
const INDEXNOW_ENDPOINT = 'api.indexnow.org';

// ============================================================
// UTILITY: Extract all <loc> URLs from the sitemap XML
// ============================================================
function extractUrlsFromSitemap(xmlContent) {
    const matches = [...xmlContent.matchAll(/<loc>(.*?)<\/loc>/g)];
    return matches.map(m => m[1].trim());
}

// ============================================================
// UTILITY: POST JSON payload via Node https module (no fetch needed)
// ============================================================
function postJson(hostname, path, payload) {
    return new Promise((resolve, reject) => {
        const body = JSON.stringify(payload);
        const options = {
            hostname,
            path,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Content-Length': Buffer.byteLength(body),
            },
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ status: res.statusCode, body: data }));
        });

        req.on('error', reject);
        req.write(body);
        req.end();
    });
}

// ============================================================
// MAIN
// ============================================================
async function pingIndexNow() {
    console.log('\n🔔 IndexNow Ping Script Starting...\n');

    // 1. Ensure sitemap exists
    if (!fs.existsSync(SITEMAP_PATH)) {
        console.error('❌ sitemap.xml not found at:', SITEMAP_PATH);
        console.error('   Run `npm run build` first to generate the sitemap.');
        process.exit(1);
    }

    // 2. Parse URLs from sitemap
    const xmlContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
    const urlList = extractUrlsFromSitemap(xmlContent);

    if (urlList.length === 0) {
        console.warn('⚠️  No URLs found in sitemap.xml. Skipping ping.');
        process.exit(0);
    }

    console.log(`📄 Extracted ${urlList.length} URLs from sitemap.xml`);

    // 3. Build the IndexNow payload
    const payload = {
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList,
    };

    console.log('\n📦 Payload Preview:');
    console.log(JSON.stringify(payload, null, 2));

    // 4. POST to IndexNow
    try {
        console.log('\n🚀 Sending ping to IndexNow API...');
        const result = await postJson(INDEXNOW_ENDPOINT, '/indexnow', payload);

        if (result.status === 200 || result.status === 202) {
            console.log(`✅ Success! IndexNow responded with HTTP ${result.status}`);
            console.log('   Search engines have been notified of all updated URLs.');
        } else if (result.status === 400) {
            console.error('❌ Bad Request (400) — Check payload format or key configuration.');
        } else if (result.status === 403) {
            console.error('❌ Forbidden (403) — Key file not accessible at:', KEY_LOCATION);
        } else if (result.status === 422) {
            console.error('❌ Unprocessable (422) — URL list may contain invalid/non-matching domain URLs.');
        } else {
            console.warn(`⚠️  Unexpected response: HTTP ${result.status}`);
        }

        console.log('   Response body:', result.body || '(empty)');
    } catch (err) {
        console.error('❌ Network error while pinging IndexNow:', err.message);
        // Do not fail the build — indexing ping is best-effort, non-critical
        process.exit(0);
    }
}

pingIndexNow();
