import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Forced Vite HMR Reload to clear dynamically imported module cache
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';

window.onerror = function(message, source, lineno, colno, error) {
  document.body.innerHTML = `<div style="color:red;padding:20px;z-index:9999;position:relative;">
    <h1>Runtime Error</h1>
    <p>${message}</p>
    <pre>${error?.stack}</pre>
  </div>`;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)