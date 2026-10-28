import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { sendEnquiryEmail } from './server/emailHandler.js'

function emailApiPlugin() {
  return {
    name: 'email-api-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0];
        const isEmailEndpoint =
          url === '/api/send-email' ||
          url === '/send-email.php' ||
          url === '/api/send-email.php' ||
          url.endsWith('/api/send-email') ||
          url.endsWith('/send-email.php') ||
          url.endsWith('/api/send-email.php');

        if (!isEmailEndpoint) {
          return next();
        }

        if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
          res.statusCode = 200;
          res.end();
          return;
        }

        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }));
          return;
        }

        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });

        req.on('end', async () => {
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', '*');
          try {
            const data = JSON.parse(body || '{}');
            const result = await sendEnquiryEmail(data);
            res.statusCode = 200;
            res.end(JSON.stringify(result));
          } catch (err) {
            console.error('Email API Error:', err);
            res.statusCode = 400;
            res.end(JSON.stringify({ success: false, error: err.message || 'Failed to send email' }));
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    emailApiPlugin(),
  ],
  base: '/',
})

