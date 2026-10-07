import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Creates and returns a Nodemailer transporter configured with environment credentials
 */
export function getMailTransporter() {
  const user = process.env.EMAIL_HOST_USER;
  const rawPass = process.env.EMAIL_HOST_PASSWORD || '';
  const pass = rawPass.replace(/\s+/g, '');

  if (!user || !pass) {
    throw new Error('EMAIL_HOST_USER and EMAIL_HOST_PASSWORD must be configured in environment variables');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Formats and sends an email notification to company admin when a user submits an inquiry
 */
export async function sendEnquiryEmail({
  name,
  email,
  phone,
  company,
  serviceArea,
  designation,
  message,
  fileName,
  fileAttachment,
  formType = 'Website Contact Form'
}) {
  const transporter = getMailTransporter();
  const hostUser = process.env.EMAIL_HOST_USER;
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || process.env.VITE_ADMIN_NOTIFICATION_EMAIL || hostUser;

  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const isCareer = formType?.toLowerCase().includes('career') || formType?.toLowerCase().includes('job') || Boolean(fileName);

  const subject = isCareer
    ? `[Job Application] ${name || 'Candidate'} - ${serviceArea || designation || 'Career Opportunity'}`
    : `[New Website Inquiry] ${name || 'Prospective Client'} - ${serviceArea || 'General Inquiry'}`;

  const headerBadge = isCareer ? 'Dreamwarez Career Application' : 'Dreamwarez Website Lead';
  const headerTitle = isCareer ? 'New Job Application' : 'New Client Inquiry';
  const headerSubtitle = isCareer
    ? `A candidate has submitted a job application via the website ${formType}.`
    : `A visitor has submitted a new inquiry via the website ${formType}.`;

  const detailsRows = isCareer
    ? `
        <tr>
          <td class="label">Candidate Name</td>
          <td class="value"><strong>${name || 'N/A'}</strong></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:${email || ''}">${email || 'N/A'}</a></td>
        </tr>
        <tr>
          <td class="label">Phone Number</td>
          <td class="value"><a href="tel:${phone || ''}">${phone || 'N/A'}</a></td>
        </tr>
        <tr>
          <td class="label">Position Applying For</td>
          <td class="value"><span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 6px; font-weight: 600; font-size: 13px;">${serviceArea || designation || 'Career Opportunity'}</span></td>
        </tr>
        <tr>
          <td class="label">Resume / CV File</td>
          <td class="value"><strong>${fileName || 'Attached'}</strong></td>
        </tr>
        <tr>
          <td class="label">Submission Date</td>
          <td class="value">${submittedAt}</td>
        </tr>
    `
    : `
        <tr>
          <td class="label">Full Name</td>
          <td class="value"><strong>${name || 'N/A'}</strong></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:${email || ''}">${email || 'N/A'}</a></td>
        </tr>
        <tr>
          <td class="label">Phone Number</td>
          <td class="value"><a href="tel:${phone || ''}">${phone || 'N/A'}</a></td>
        </tr>
        <tr>
          <td class="label">Company Name</td>
          <td class="value">${company || 'N/A'}</td>
        </tr>
        <tr>
          <td class="label">Service Area</td>
          <td class="value"><span style="background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 6px; font-weight: 600; font-size: 13px;">${serviceArea || 'General'}</span></td>
        </tr>
        <tr>
          <td class="label">Designation / Role</td>
          <td class="value">${designation || 'N/A'}</td>
        </tr>
        <tr>
          <td class="label">Submission Date</td>
          <td class="value">${submittedAt}</td>
        </tr>
    `;

  const messageBoxTitle = isCareer ? 'Candidate Cover / Position Note:' : 'Project Requirements & Scope:';
  const defaultMessage = isCareer ? 'No additional note provided.' : 'No additional message provided.';

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05); }
    .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; padding: 32px 28px; text-align: left; }
    .badge { display: inline-block; background: rgba(14, 165, 233, 0.2); color: #38bdf8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 10px; border-radius: 9999px; margin-bottom: 12px; }
    .title { margin: 0 0 8px 0; font-size: 22px; font-weight: 800; color: #ffffff; }
    .subtitle { margin: 0; font-size: 13px; color: #94a3b8; }
    .content { padding: 28px; }
    .table-container { width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 24px; border: 1px solid #f1f5f9; border-radius: 12px; overflow: hidden; }
    .table-container td { padding: 12px 16px; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
    .table-container tr:last-child td { border-bottom: none; }
    .label { font-weight: 600; color: #64748b; width: 35%; background-color: #f8fafc; }
    .value { font-weight: 500; color: #0f172a; }
    .value a { color: #0284c7; text-decoration: none; font-weight: 600; }
    .message-box { background-color: #f8fafc; border-left: 4px solid #0ea5e9; border-radius: 0 12px 12px 0; padding: 16px 20px; margin-top: 8px; }
    .message-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #0369a1; margin: 0 0 6px 0; }
    .message-text { font-size: 14px; line-height: 1.6; color: #334155; margin: 0; white-space: pre-wrap; }
    .footer { padding: 20px 28px; background-color: #f8fafc; border-top: 1px solid #f1f5f9; text-align: center; font-size: 12px; color: #94a3b8; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">${headerBadge}</div>
      <h1 class="title">${headerTitle}</h1>
      <p class="subtitle">${headerSubtitle}</p>
    </div>

    <div class="content">
      <table class="table-container">
        ${detailsRows}
      </table>

      <div class="message-box">
        <p class="message-title">${messageBoxTitle}</p>
        <p class="message-text">${message || defaultMessage}</p>
      </div>
    </div>

    <div class="footer">
      <p style="margin: 0 0 4px 0;">This email was sent automatically from <strong>Dreamwarez Website ${formType}</strong>.</p>
      <p style="margin: 0;">Hit "Reply" to respond directly to <a href="mailto:${email || ''}" style="color: #0284c7; text-decoration: none;">${name || 'the sender'}</a>.</p>
    </div>
  </div>
</body>
</html>
  `;

  const textContent = isCareer
    ? `
=============================================
NEW JOB APPLICATION - DREAMWAREZ
=============================================
Candidate Name: ${name || 'N/A'}
Email: ${email || 'N/A'}
Phone: ${phone || 'N/A'}
Position Applying For: ${serviceArea || designation || 'N/A'}
Resume / CV File: ${fileName || 'N/A'}
Submitted At: ${submittedAt}

Message / Note:
${message || 'N/A'}
=============================================
    `.trim()
    : `
=============================================
NEW WEBSITE INQUIRY - DREAMWAREZ
=============================================
Full Name: ${name || 'N/A'}
Email: ${email || 'N/A'}
Phone: ${phone || 'N/A'}
Company: ${company || 'N/A'}
Service Area: ${serviceArea || 'N/A'}
Designation: ${designation || 'N/A'}
Submitted At: ${submittedAt}

Message / Requirements:
${message || 'N/A'}
=============================================
    `.trim();

  const mailOptions = {
    from: `"Dreamwarez Website" <${hostUser}>`,
    to: adminEmail,
    replyTo: email ? `${name || (isCareer ? 'Candidate' : 'Client')} <${email}>` : hostUser,
    subject,
    text: textContent,
    html: htmlContent,
  };

  if (fileAttachment && fileAttachment.filename && fileAttachment.content) {
    try {
      const base64Data = fileAttachment.content.includes(';base64,')
        ? fileAttachment.content.split(';base64,')[1]
        : fileAttachment.content;
      mailOptions.attachments = [
        {
          filename: fileAttachment.filename,
          content: base64Data,
          encoding: 'base64'
        }
      ];
    } catch (attErr) {
      console.warn('Could not attach file to email:', attErr);
    }
  }

  const info = await transporter.sendMail(mailOptions);
  return { success: true, messageId: info.messageId };
}
