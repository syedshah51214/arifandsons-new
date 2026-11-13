import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import '@fontsource/big-shoulders-display/latin-700';
import '@fontsource/big-shoulders-display/latin-800';
import '@fontsource/big-shoulders-display/latin-900';
import '@fontsource-variable/hanken-grotesk/wght';
import './index.css';

const root = document.getElementById('root')!;

// Old links looked like /#/services. Send them to the real page address.
const legacy = window.location.hash.startsWith('#/');
if (legacy) window.history.replaceState(null, '', window.location.hash.slice(1));

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Pages are generated as HTML at build time; attach to that HTML when it is there.
if (root.hasChildNodes() && !legacy) hydrateRoot(root, app);
else {
  root.innerHTML = '';
  createRoot(root).render(app);
}
