import nodemailer from 'nodemailer';
import { z } from 'zod';

export const ConsultationSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export type ConsultationData = z.infer<typeof ConsultationSchema>;

export function logSmtpEnvDebug(route: string) {
  console.log(`[${route}] EMAIL_USER set:`, !!process.env.EMAIL_USER);
  console.log(`[${route}] EMAIL_PASS set:`, !!process.env.EMAIL_PASS);
}

export async function sendConsultationMail(data: ConsultationData) {
  const user = process.env.EMAIL_USER;
  const passRaw = process.env.EMAIL_PASS;
  const pass = typeof passRaw === 'string' ? passRaw.replace(/\s+/g, '') : passRaw;

  if (!user || !pass) {
    const missing = [!user ? 'EMAIL_USER' : null, !pass ? 'EMAIL_PASS' : null].filter(Boolean);
    const err = Object.assign(new Error('MISSING_EMAIL_ENV'), { missing });
    throw err;
  }

  const safe = (s: string) =>
    String(s)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `Videha Law <${user}>`,
    to: 'infovidehalaw@gmail.com',
    replyTo: data.email,
    subject: `New Consultation: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>New Consultation Booking</h2>
        <p><strong>Name:</strong> ${safe(data.name)}</p>
        <p><strong>Email:</strong> ${safe(data.email)}</p>
        <p><strong>Phone:</strong> ${safe(data.phone)}</p>
        <p><strong>Subject:</strong> ${safe(data.subject)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${safe(data.message)}</p>
      </div>
    `,
  });
}