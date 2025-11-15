import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

try {
  const root = document.getElementById('root');
  if (!root) {
    document.body.innerHTML = '<h1 style="color:red;padding:20px;">ERROR: root element not found!</h1>';
    throw new Error('root element not found');
  }
  
  createRoot(root).render(
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>
  );
} catch (err) {
  console.error('Fatal error:', err);
  document.body.innerHTML = `<div style="color:red;padding:20px;font-family:monospace;background:#222;white-space:pre-wrap;">${String(err)}</div>`;
}
