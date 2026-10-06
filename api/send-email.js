import { sendEnquiryEmail } from '../server/emailHandler.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const data = req.body;
    if (!data || !data.email) {
      return res.status(400).json({ success: false, error: 'Missing required field: email' });
    }

    const result = await sendEnquiryEmail(data);
    return res.status(200).json({ success: true, messageId: result.messageId });
  } catch (err) {
    console.error('Email sending error:', err);
    return res.status(500).json({ success: false, error: err.message || 'Failed to send email' });
  }
}
