import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from '@prerenderer/rollup-plugin';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';
import fs from 'fs';
import path from 'path';

// Extract dynamic routes via regex parsing to strictly avoid JSX syntax errors in Node environment
const getDynamicRoutes = () => {
  const DATA_DIR = path.resolve('./src/data');
  const staticRoutes = ['/', '/extensions', '/themes', '/misc', '/google-apps'];

  if (!fs.existsSync(DATA_DIR)) return staticRoutes;

  const files = fs.readdirSync(DATA_DIR).filter(file => file.startsWith('appData') && file.endsWith('.jsx'));
  const dynamicRoutes = [];

  for (const file of files) {
    const filePath = path.join(DATA_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /id:\s*(["'])(.*?)\1/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      dynamicRoutes.push(`/app/${match[2]}`);
      // Note: Omitting privacy policy prerender if not explicitly requested, or we can include it.
      // Requirement asks to dynamically read appsData to also prerender the /app/:id routes.
    }
  }

  return [...staticRoutes, ...dynamicRoutes];
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: getDynamicRoutes(),
      renderer: new PuppeteerRenderer({
        // Prevent memory leaks and force exit on headless build
        maxConcurrentRoutes: 4,
        renderAfterTime: 500, // Small latency to assure react-router completes mount
      }),
      // Prevents 404 router errors inside static deployment if a route gets missed
      fallback: 'index.html',
    })
  ],
});
