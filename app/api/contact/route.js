import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

function getEmailEnv() {
  const user = process.env.EMAIL_USER;
  const passRaw = process.env.EMAIL_PASS;
  // Gmail app passwords are often shown with spaces; SMTP expects the raw 16-char token.
  const pass = typeof passRaw === 'string' ? passRaw.replace(/\s+/g, '') : passRaw;

  if (!user || !pass) {
    return {
      ok: false,
      missing: [!user ? 'EMAIL_USER' : null, !pass ? 'EMAIL_PASS' : null].filter(Boolean),
    };
  }

  return { ok: true, user, pass };
}

export async function POST(req) {
  try {
    const env = getEmailEnv();
    if (!env.ok) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Email is not configured on the server. Set EMAIL_USER and EMAIL_PASS in environment variables.',
          missing: env.missing,
          hint:
            'Create `.env.local` in the project root (same folder as package.json) and add:\n\nEMAIL_USER=infovidehalaw@gmail.com\nEMAIL_PASS=<your_gmail_app_password>\n\nThen stop and restart `npm run dev`.',
        },
        { status: 500 },
      );
    }

    const body = await req.json().catch(() => null);
    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please fill out all fields.' },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "infovidehalaw@gmail.com",
        pass: env.pass,
      },
    });

    // Fail fast with a clearer error if SMTP auth/config is wrong.
    await transporter.verify();

    const safe = (s) =>
      String(s)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');

    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
        <h2 style="margin: 0 0 12px;">New Contact Form Message</h2>
        <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safe(name)}</p>
        <p style="margin: 0 0 8px;"><strong>Email:</strong> ${safe(email)}</p>
        <p style="margin: 0;"><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; margin: 6px 0 0;">${safe(message)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `Videha Law <${env.user}>`,
      to: env.user,
      replyTo: email,
      subject: `Contact form message from ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[api/contact] sendMail failed:', message);
    const hint =
      'Make sure you are using a Gmail App Password (not your normal password). Also ensure EMAIL_PASS has no spaces, then restart the dev server.';

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send email.',
        hint,
        details: process.env.NODE_ENV === 'production' ? undefined : message,
      },
      { status: 500 },
    );
  }
}

