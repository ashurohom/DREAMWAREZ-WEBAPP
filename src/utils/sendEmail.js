/**
 * Dreamwarez Form Email Dispatcher
 * Submits form data directly to the server email dispatch API.
 * Automatically tries live BigRock Apache PHP endpoint and local/Vite Node endpoints.
 * Never redirects the user to external email clients or mailto links.
 */

export async function submitFormEmail(formData) {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  // Candidate URLs in priority order:
  // 1. Live PHP script at active base path (e.g. https://dreamwarez.in/send-email.php)
  // 2. Live PHP script in api subfolder (e.g. https://dreamwarez.in/api/send-email.php)
  // 3. Root PHP script (/send-email.php)
  // 4. API endpoint relative to base (/api/send-email)
  // 5. Default Node/Vite endpoint (/api/send-email)
  const candidateUrls = [
    `${base}send-email.php`,
    `${base}api/send-email.php`,
    '/send-email.php',
    `${base}api/send-email`,
    '/api/send-email',
  ];

  const urls = [...new Set(candidateUrls)];

  let lastErrorMessage = '';

  for (const url of urls) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Ensure response is JSON (and not an HTML SPA fallback)
      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        continue;
      }

      const result = await response.json();
      if (response.ok && result && result.success) {
        return { success: true, result };
      }

      if (result && result.error) {
        lastErrorMessage = result.error;
      }
    } catch (err) {
      // Try next endpoint candidate
      lastErrorMessage = err?.message || 'Network error';
    }
  }

  throw new Error(
    lastErrorMessage ||
    'Unable to send message directly to email. Please check your internet connection or try again.'
  );
}
