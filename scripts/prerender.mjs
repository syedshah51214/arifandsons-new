// Runs after `vite build`. Writes a real HTML file for every page so search engines
// and link previews see the content without running JavaScript, plus sitemap.xml and robots.txt.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const { render, pages, SITE } = await import(pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href);

const template = readFileSync(resolve(dist, 'index.html'), 'utf8');
const headRe = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
if (!headRe.test(template) || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html is missing the seo markers or the empty #root element');
}

for (const page of pages) {
  const { html, head } = render(page.path);
  const out = template.replace(headRe, head).replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const file = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`;
  writeFileSync(resolve(dist, file), out);
  console.log(`prerendered ${page.path} -> dist/${file} (${Math.round(out.length / 1024)} KB)`);
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  resolve(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((p) => `  <url><loc>${SITE}${p.path === '/' ? '/' : p.path}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`
);
writeFileSync(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true });
console.log('wrote sitemap.xml and robots.txt');
