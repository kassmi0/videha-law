import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

function getEmailEnv() {
  const user = process.env.EMAIL_USER;
  const passRaw = process.env.EMAIL_PASS;

  // Remove spaces from app password
  const pass =
    typeof passRaw === 'string' ? passRaw.replace(/\s+/g, '') : passRaw;

  if (!user || !pass) {
    return {
      ok: false,
      missing: [!user ? 'EMAIL_USER' : null, !pass ? 'EMAIL_PASS' : null].filter(Boolean),
    };
  }

  return { ok: true, user, pass };
}

export async function POST(req: Request) {
  try {
    const env = getEmailEnv();

    if (!env.ok) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email is not configured on the server.',
          missing: env.missing,
        },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => null);

    const name =
      typeof body?.name === 'string' ? body.name.trim() : '';
    const email =
      typeof body?.email === 'string' ? body.email.trim() : '';
    const phone =
      typeof body?.phone === 'string' ? body.phone.trim() : '';
    const subject =
      typeof body?.subject === 'string' ? body.subject.trim() : '';
    const message =
      typeof body?.message === 'string' ? body.message.trim() : '';

    // Validation
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Please fill out all fields.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: env.user,
        pass: env.pass,
      },
    });

    // Debug: verify SMTP connection
    await transporter.verify();
    console.log('✅ SMTP READY');

    // Sanitize function
    const safe = (s: string) =>
      String(s)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');

    // HTML email
    const html = `
      <div style="font-family: Arial, sans-serif;">
        <h2>New Consultation Booking</h2>
        <p><strong>Name:</strong> ${safe(name)}</p>
        <p><strong>Email:</strong> ${safe(email)}</p>
        <p><strong>Phone:</strong> ${safe(phone)}</p>
        <p><strong>Subject:</strong> ${safe(subject)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${safe(message)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `Videha Law <${env.user}>`,
      to: "infovidehalaw@gmail.com", // or change to your firm email
      replyTo: email,
      subject: `New Consultation: ${subject}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[api/contact] sendMail failed:', message);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send email.',
        details: message,
      },
      { status: 500 }
    );
  }
}