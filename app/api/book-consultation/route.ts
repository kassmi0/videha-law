import {
  ConsultationSchema,
  logSmtpEnvDebug,
  sendConsultationMail,
} from '@/lib/email/consultation-mail';

const ROUTE = 'api/book-consultation';

export async function POST(req: Request) {
  logSmtpEnvDebug(ROUTE);

  try {
    const json = await req.json().catch(() => null);
    const parsed = ConsultationSchema.safeParse(json);
    if (!parsed.success) {
      return Response.json(
        { error: 'Invalid form data.', details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    await sendConsultationMail(parsed.data);
    return Response.json({ ok: true });
  } catch (err) {
    if (err instanceof Error && err.message === 'MISSING_EMAIL_ENV') {
      const missing = (err as Error & { missing?: string[] }).missing ?? [];
      return Response.json(
        {
          error:
            'Email is not configured on the server. Set EMAIL_USER and EMAIL_PASS in environment variables.',
          missing,
          hint:
            'Create a file named .env.local in the project root (same folder as package.json), add EMAIL_USER and EMAIL_PASS, then stop and restart `npm run dev`. For production (e.g. Vercel), add these variables in the host dashboard and redeploy.',
        },
        { status: 500 },
      );
    }

    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error(`[${ROUTE}] sendMail failed:`, message);
    return Response.json({ error: 'Failed to send email.', details: message }, { status: 500 });
  }
}
