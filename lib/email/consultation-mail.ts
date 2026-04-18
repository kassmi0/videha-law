import nodemailer from 'nodemailer';
import { z } from 'zod';

export const ConsultationSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().min(3).max(40),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(5000),
});

export type ConsultationPayload = z.infer<typeof ConsultationSchema>;

const TO_ADDRESS = 'infovidehalaw@gmail.com';

/**
 * Reads Gmail SMTP credentials from the environment.
 * Trims whitespace — a common cause of "not configured" when values are copied with spaces.
 */
export function readSmtpCredentials(): {
  user: string;
  pass: string;
  missing: ('EMAIL_USER' | 'EMAIL_PASS')[];
} {
  const user = (process.env.EMAIL_USER ?? '').trim();
  const pass = (process.env.EMAIL_PASS ?? '').trim();
  const missing: ('EMAIL_USER' | 'EMAIL_PASS')[] = [];
  if (!user) missing.push('EMAIL_USER');
  if (!pass) missing.push('EMAIL_PASS');
  return { user, pass, missing };
}

/** Safe logs for debugging env loading (never logs the password). */
export function logSmtpEnvDebug(routeLabel: string): void {
  const { user, pass, missing } = readSmtpCredentials();
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    console.log(`[${routeLabel}] EMAIL_USER loaded:`, user ? user : '(empty — set EMAIL_USER in .env.local)');
    console.log(`[${routeLabel}] EMAIL_PASS present:`, pass ? `yes (length: ${pass.length})` : 'no');
  } else {
    console.log(`[${routeLabel}] EMAIL_USER set:`, Boolean(user));
    console.log(`[${routeLabel}] EMAIL_PASS set:`, Boolean(pass));
  }

  if (missing.length) {
    console.warn(
      `[${routeLabel}] Missing env: ${missing.join(', ')}. Add them to .env.local at the project root (next to package.json) and restart the dev server.`,
    );
  }
}

export async function sendConsultationMail(payload: ConsultationPayload): Promise<void> {
  const { user, pass, missing } = readSmtpCredentials();
  if (missing.length) {
    const err = new Error('MISSING_EMAIL_ENV');
    (err as Error & { missing: string[] }).missing = missing;
    throw err;
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: { user, pass },
  });

  const { name, email, phone, subject, message } = payload;

  await transporter.sendMail({
    from: user,
    to: TO_ADDRESS,
    replyTo: email,
    subject: `New Consultation Request - ${subject}`,
    text:
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Subject: ${subject}\n` +
      `Message: ${message}\n`,
  });
}
