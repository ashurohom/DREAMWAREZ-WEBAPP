<?php
/**
 * Dreamwarez Standalone Email Dispatch API (PHP / Apache for BigRock cPanel Hosting)
 * Handles Contact Form inquiries and Career Opportunities applications.
 * Sends emails via Gmail SMTP with automatic fallback to PHP mail().
 */

// 1. CORS and Response Headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['success' => true]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed. Use POST.']);
    exit;
}

// 2. Parse Incoming JSON or Form Data
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data) || empty($data)) {
    $data = $_POST;
}

$name = trim($data['name'] ?? $data['user_name'] ?? '');
$email = trim($data['email'] ?? $data['user_email'] ?? '');
$phone = trim($data['phone'] ?? $data['user_phone'] ?? '');
$company = trim($data['company'] ?? $data['company_name'] ?? '');
$serviceArea = trim($data['serviceArea'] ?? $data['service_area'] ?? '');
$designation = trim($data['designation'] ?? '');
$message = trim($data['message'] ?? '');
$fileName = trim($data['fileName'] ?? '');
$fileAttachment = $data['fileAttachment'] ?? null;
$formType = trim($data['formType'] ?? 'Website Inquiry Form');

// 3. Validation
if (empty($name) || strlen($name) < 2) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid full name (minimum 2 characters).']);
    exit;
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid email address.']);
    exit;
}

$digitsOnly = preg_replace('/\D/', '', $phone);
if (strlen($digitsOnly) < 10 || strlen($digitsOnly) > 15) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid phone number (at least 10 digits).']);
    exit;
}

// 4. Configuration (reads from .env if present, otherwise uses production defaults)
$hostUser = 'ashitosh.rohom@gmail.com';
$hostPass = 'crwwheesfikpxikr'; // Gmail App Password without spaces
$adminEmail = 'ashitosh@dreamwarez.in';

// Try loading credentials from .env in current or parent directories
$envPaths = [
    __DIR__ . '/.env',
    __DIR__ . '/../.env',
    __DIR__ . '/../../.env',
    dirname(__DIR__) . '/.env'
];

foreach ($envPaths as $envPath) {
    if (file_exists($envPath) && is_readable($envPath)) {
        $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            $line = trim($line);
            if (empty($line) || strpos($line, '#') === 0) continue;
            if (strpos($line, '=') !== false) {
                list($key, $val) = explode('=', $line, 2);
                $key = trim($key);
                $val = trim($val, " \t\n\r\0\x0B\"'");
                if ($key === 'EMAIL_HOST_USER' && !empty($val)) $hostUser = $val;
                if ($key === 'EMAIL_HOST_PASSWORD' && !empty($val)) $hostPass = preg_replace('/\s+/', '', $val);
                if ($key === 'ADMIN_NOTIFICATION_EMAIL' && !empty($val)) $adminEmail = $val;
            }
        }
        break;
    }
}

date_default_timezone_set('Asia/Kolkata');
$submittedAt = date('l, d F Y, h:i A') . ' IST';

$isCareer = (stripos($formType, 'career') !== false) || (stripos($formType, 'job') !== false) || !empty($fileName);

$subject = $isCareer
    ? "[Job Application] " . ($name ?: 'Candidate') . " - " . ($serviceArea ?: $designation ?: 'Career Opportunity')
    : "[New Website Inquiry] " . ($name ?: 'Prospective Client') . " - " . ($serviceArea ?: 'General Inquiry');

$headerBadge = $isCareer ? 'Dreamwarez Career Application' : 'Dreamwarez Website Lead';
$headerTitle = $isCareer ? 'New Job Application' : 'New Client Inquiry';
$headerSubtitle = $isCareer
    ? "A candidate has submitted a job application via the website {$formType}."
    : "A visitor has submitted a new inquiry via the website {$formType}.";

if ($isCareer) {
    $detailsRows = "
        <tr><td style=\"font-weight:600;color:#64748b;width:35%;background-color:#f8fafc;padding:12px 16px;border-bottom:1px solid #f1f5f9;\">Candidate Name</td><td style=\"font-weight:500;color:#0f172a;padding:12px 16px;border-bottom:1px solid #f1f5f9;\"><strong>" . htmlspecialchars($name) . "</strong></td></tr>
        <tr><td style=\"font-weight:600;color:#64748b;background-color:#f8fafc;padding:12px 16px;border-bottom:1px solid #f1f5f9;\">Email Address</td><td style=\"padding:12px 16px;border-bottom:1px solid #f1f5f9;\"><a href=\"mailto:" . htmlspecialchars($email) . "\" style=\"color:#0284c7;text-decoration:none;font-weight:600;\">" . htmlspecialchars($email) . "</a></td></tr>
        <tr><td style=\"font-weight:600;color:#64748b;background-color:#f8fafc;padding:12px 16px;border-bottom:1px solid #f1f5f9;\">Phone Number</td><td style=\"padding:12px 16px;border-bottom:1px solid #f1f5f9;\"><a href=\"tel:" . htmlspecialchars($phone) . "\" style=\"color:#0284c7;text-decoration:none;font-weight:600;\">" . htmlspecialchars($phone) . "</a></td></tr>
        <tr><td style=\"font-weight:600;color:#64748b;background-color:#f8fafc;padding:12px 16px;border-bottom:1px solid #f1f5f9;\">Position Applied For</td><td style=\"padding:12px 16px;border-bottom:1px solid #f1f5f9;\"><span style=\"background:#e0f2fe;color:#0369a1;padding:2px 8px;border-radius:6px;font-weight:600;font-size:13px;\">" . htmlspecialchars($serviceArea ?: $designation ?: 'Career Opportunity') . "</span></td></tr>
        <tr><td style=\"font-weight:600;color:#64748b;background-color:#f8fafc;padding:12px 16px;border-bottom:1px solid #f1f5f9;\">Resume / CV File</td><td style=\"padding:12px 16px;border-bottom:1px solid #f1f5f9;\"><strong>" . htmlspecialchars($fileName ?: 'Attached') . "</strong></td></tr>
        <tr><td style=\"font-weight:600;color:#64748b;background-color:#f8fafc;padding:12px 16px;\">Submission Date</td><td style=\"padding:12px 16px;\">" . htmlspecialchars($submittedAt) . "</td></tr>
    ";
    $messageBoxTitle = 'Candidate Cover / Position Note:';
    $defaultMessage = 'No additional note provided.';
} else {
    $detailsRows = "
        <tr><td style=\"font-weight:600;color:#64748b;width:35%;background-color:#f8fafc;padding:12px 16px;border-bottom:1px solid #f1f5f9;\">Full Name</td><td style=\"font-weight:500;color:#0f172a;padding:12px 16px;border-bottom:1px solid #f1f5f9;\"><strong>" . htmlspecialchars($name) . "</strong></td></tr>
        <tr><td style=\"font-weight:600;color:#64748b;background-color:#f8fafc;padding:12px 16px;border-bottom:1px solid #f1f5f9;\">Email Address</td><td style=\"padding:12px 16px;border-bottom:1px solid #f1f5f9;\"><a href=\"mailto:" . htmlspecialchars($email) . "\" style=\"color:#0284c7;text-decoration:none;font-weight:600;\">" . htmlspecialchars($email) . "</a></td></tr>
        <tr><td style=\"font-weight:600;color:#64748b;background-color:#f8fafc;padding:12px 16px;border-bottom:1px solid #f1f5f9;\">Phone Number</td><td style=\"padding:12px 16px;border-bottom:1px solid #f1f5f9;\"><a href=\"tel:" . htmlspecialchars($phone) . "\" style=\"color:#0284c7;text-decoration:none;font-weight:600;\">" . htmlspecialchars($phone) . "</a></td></tr>
        <tr><td style=\"font-weight:600;color:#64748b;background-color:#f8fafc;padding:12px 16px;border-bottom:1px solid #f1f5f9;\">Company Name</td><td style=\"padding:12px 16px;border-bottom:1px solid #f1f5f9;\">" . htmlspecialchars($company ?: 'N/A') . "</td></tr>
        <tr><td style=\"font-weight:600;color:#64748b;background-color:#f8fafc;padding:12px 16px;border-bottom:1px solid #f1f5f9;\">Service Area</td><td style=\"padding:12px 16px;border-bottom:1px solid #f1f5f9;\"><span style=\"background:#e0f2fe;color:#0369a1;padding:2px 8px;border-radius:6px;font-weight:600;font-size:13px;\">" . htmlspecialchars($serviceArea ?: 'General') . "</span></td></tr>
        <tr><td style=\"font-weight:600;color:#64748b;background-color:#f8fafc;padding:12px 16px;border-bottom:1px solid #f1f5f9;\">Designation / Role</td><td style=\"padding:12px 16px;border-bottom:1px solid #f1f5f9;\">" . htmlspecialchars($designation ?: 'N/A') . "</td></tr>
        <tr><td style=\"font-weight:600;color:#64748b;background-color:#f8fafc;padding:12px 16px;\">Submission Date</td><td style=\"padding:12px 16px;\">" . htmlspecialchars($submittedAt) . "</td></tr>
    ";
    $messageBoxTitle = 'Project Requirements & Scope:';
    $defaultMessage = 'No additional message provided.';
}

$safeMessage = nl2br(htmlspecialchars($message ?: $defaultMessage));

$htmlBody = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{$subject}</title>
</head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background-color:#f8fafc;margin:0;padding:24px;color:#1e293b;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 4px 16px rgba(15,23,42,0.05);">
    <div style="background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);color:#ffffff;padding:32px 28px;text-align:left;">
      <div style="display:inline-block;background:rgba(14,165,233,0.2);color:#38bdf8;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;padding:4px 10px;border-radius:9999px;margin-bottom:12px;">{$headerBadge}</div>
      <h1 style="margin:0 0 8px 0;font-size:22px;font-weight:800;color:#ffffff;">{$headerTitle}</h1>
      <p style="margin:0;font-size:13px;color:#94a3b8;">{$headerSubtitle}</p>
    </div>
    <div style="padding:28px;">
      <table style="width:100%;border-collapse:separate;border-spacing:0;margin-bottom:24px;border:1px solid #f1f5f9;border-radius:12px;overflow:hidden;font-size:14px;">
        {$detailsRows}
      </table>
      <div style="background-color:#f8fafc;border-left:4px solid #0ea5e9;border-radius:0 12px 12px 0;padding:16px 20px;margin-top:8px;">
        <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#0369a1;margin:0 0 6px 0;">{$messageBoxTitle}</p>
        <p style="font-size:14px;line-height:1.6;color:#334155;margin:0;white-space:pre-wrap;">{$safeMessage}</p>
      </div>
    </div>
    <div style="padding:20px 28px;background-color:#f8fafc;border-top:1px solid #f1f5f9;text-align:center;font-size:12px;color:#94a3b8;">
      <p style="margin:0 0 4px 0;">This email was sent automatically from <strong>Dreamwarez Website {$formType}</strong>.</p>
      <p style="margin:0;">Hit "Reply" to respond directly to <a href="mailto:{$email}" style="color:#0284c7;text-decoration:none;">{$name}</a>.</p>
    </div>
  </div>
</body>
</html>
HTML;

$textBody = $isCareer
    ? "NEW JOB APPLICATION - DREAMWAREZ\nCandidate: {$name}\nEmail: {$email}\nPhone: {$phone}\nPosition: " . ($serviceArea ?: $designation) . "\nCV: {$fileName}\nDate: {$submittedAt}\n\nNote:\n" . ($message ?: 'N/A')
    : "NEW WEBSITE INQUIRY - DREAMWAREZ\nName: {$name}\nEmail: {$email}\nPhone: {$phone}\nCompany: {$company}\nService: {$serviceArea}\nRole: {$designation}\nDate: {$submittedAt}\n\nRequirements:\n" . ($message ?: 'N/A');

// 5. Function to send email via SMTP Socket (SSL port 465)
function sendSmtpMail($host, $port, $user, $pass, $from, $to, $replyTo, $subject, $htmlBody, $textBody, $attachment = null) {
    $timeout = 15;
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true,
        ]
    ]);

    $socket = @stream_socket_client("ssl://{$host}:{$port}", $errno, $errstr, $timeout, STREAM_CLIENT_CONNECT, $context);
    if (!$socket) {
        throw new Exception("SMTP connection to {$host}:{$port} failed: {$errstr} ({$errno})");
    }

    stream_set_timeout($socket, $timeout);

    $getResponse = function() use ($socket) {
        $response = '';
        while ($line = fgets($socket, 515)) {
            $response .= $line;
            if (substr($line, 3, 1) === ' ') break;
        }
        return $response;
    };

    $sendCommand = function($cmd, $expectedCode) use ($socket, $getResponse) {
        fwrite($socket, $cmd . "\r\n");
        $res = $getResponse();
        $code = substr($res, 0, 3);
        if ($code != $expectedCode) {
            throw new Exception("SMTP command failed ({$cmd}): Expected {$expectedCode}, received: {$res}");
        }
        return $res;
    };

    // Greeting
    $res = $getResponse();
    if (substr($res, 0, 3) != '220') {
        throw new Exception("Unexpected SMTP greeting: {$res}");
    }

    $sendCommand("EHLO " . (gethostname() ?: 'localhost'), '250');
    $sendCommand("AUTH LOGIN", '334');
    $sendCommand(base64_encode($user), '334');
    $sendCommand(base64_encode($pass), '235');
    $sendCommand("MAIL FROM: <{$from}>", '250');
    $sendCommand("RCPT TO: <{$to}>", '250');
    $sendCommand("DATA", '354');

    // Build MIME message
    $boundaryMixed = "----=_Mixed_" . md5(uniqid(time()));
    $boundaryAlt = "----=_Alt_" . md5(uniqid(time()));

    $encodedSubject = "=?UTF-8?B?" . base64_encode($subject) . "?=";

    $headers = [];
    $headers[] = "From: \"Dreamwarez Website\" <{$from}>";
    $headers[] = "To: <{$to}>";
    $headers[] = "Reply-To: <{$replyTo}>";
    $headers[] = "Subject: {$encodedSubject}";
    $headers[] = "MIME-Version: 1.0";

    $hasAttachment = !empty($attachment) && !empty($attachment['filename']) && !empty($attachment['content']);

    if ($hasAttachment) {
        $headers[] = "Content-Type: multipart/mixed; boundary=\"{$boundaryMixed}\"";
        
        $body = "--{$boundaryMixed}\r\n";
        $body .= "Content-Type: multipart/alternative; boundary=\"{$boundaryAlt}\"\r\n\r\n";
        
        $body .= "--{$boundaryAlt}\r\n";
        $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= chunk_split(base64_encode($textBody)) . "\r\n";
        
        $body .= "--{$boundaryAlt}\r\n";
        $body .= "Content-Type: text/html; charset=UTF-8\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= chunk_split(base64_encode($htmlBody)) . "\r\n";
        $body .= "--{$boundaryAlt}--\r\n\r\n";

        // Attachment
        $attName = preg_replace('/[^a-zA-Z0-9_.-]/', '_', $attachment['filename']);
        $rawAttContent = $attachment['content'];
        if (strpos($rawAttContent, ';base64,') !== false) {
            $rawAttContent = explode(';base64,', $rawAttContent)[1];
        }

        $body .= "--{$boundaryMixed}\r\n";
        $body .= "Content-Type: application/octet-stream; name=\"{$attName}\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "Content-Disposition: attachment; filename=\"{$attName}\"\r\n\r\n";
        $body .= chunk_split($rawAttContent) . "\r\n";
        $body .= "--{$boundaryMixed}--\r\n";
    } else {
        $headers[] = "Content-Type: multipart/alternative; boundary=\"{$boundaryAlt}\"";
        
        $body = "--{$boundaryAlt}\r\n";
        $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= chunk_split(base64_encode($textBody)) . "\r\n";
        
        $body .= "--{$boundaryAlt}\r\n";
        $body .= "Content-Type: text/html; charset=UTF-8\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= chunk_split(base64_encode($htmlBody)) . "\r\n";
        $body .= "--{$boundaryAlt}--\r\n";
    }

    $emailData = implode("\r\n", $headers) . "\r\n\r\n" . $body . "\r\n.";
    $sendCommand($emailData, '250');
    $sendCommand("QUIT", '221');
    fclose($socket);

    return true;
}

// 6. Attempt Sending
$sent = false;
$lastError = null;

// Primary attempt: Gmail SMTP over SSL
try {
    $sent = sendSmtpMail(
        'smtp.gmail.com',
        465,
        $hostUser,
        $hostPass,
        $hostUser,
        $adminEmail,
        $email,
        $subject,
        $htmlBody,
        $textBody,
        $fileAttachment
    );
} catch (Exception $smtpErr) {
    $lastError = $smtpErr->getMessage();
}

// Secondary attempt if SMTP failed: PHP standard mail()
if (!$sent) {
    try {
        $mailHeaders = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=UTF-8',
            'From: ' . $hostUser,
            'Reply-To: ' . $email,
            'X-Mailer: PHP/' . phpversion()
        ];
        $sent = @mail($adminEmail, $subject, $htmlBody, implode("\r\n", $mailHeaders));
    } catch (Exception $mailErr) {
        $lastError = $mailErr->getMessage();
    }
}

if ($sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully!',
        'recipient' => $adminEmail
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to send email. Server error: ' . ($lastError ?: 'Unknown transport error.')
    ]);
}
