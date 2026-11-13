// Renders a page to HTML at build time (see scripts/prerender.mjs).
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { headTagsFor, pages, seoFor, SITE } from './seo';

export { pages, SITE };

export function render(path: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
  return { html, head: headTagsFor(seoFor(path)) };
}
