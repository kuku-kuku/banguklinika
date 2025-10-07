// /api/send-email.mjs  (Vercel Serverless, ESM)
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const ct = req.headers['content-type'] || '';
    if (!ct.includes('application/json')) {
      return res.status(415).json({ error: 'Unsupported Media Type' });
    }

    const { name, email, phone, message, hp } = req.body || {};
    if (hp) return res.status(200).json({ ok: true });                        // honeypot
    if (!email || !message) return res.status(400).json({ error: 'Trūksta laukų: email ir message privalomi' });

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.FROM_EMAIL;     // pvz. "Bangų Klinika <info@banguklinika.lt>"
    const to   = process.env.CONTACT_TO;     // pvz. "info@banguklinika.lt"

    if (!host || !port || !user || !pass || !from || !to) {
      console.error('CONFIG_ERROR', { hasHost: !!host, hasPort: !!port, hasUser: !!user, hasPass: !!pass, hasFrom: !!from, hasTo: !!to });
      return res.status(500).json({ error: 'CONFIG_ERROR' });
    }

    const transporter = nodemailer.createTransport({
      host, port, secure: port === 465,      // 465 → SSL, 587 → STARTTLS
      auth: { user, pass },
      logger: true, debug: true,             // matysi Function logs’e
    });

    // Aiški autentikacijos/SSL klaida čia, jei kažkas neteisinga
    await transporter.verify();

    const html = `
      <h2>Nauja užklausa iš svetainės</h2>
      <p><b>Vardas:</b> ${name || '—'}</p>
      <p><b>El. paštas:</b> ${email}</p>
      <p><b>Telefonas:</b> ${phone || '—'}</p>
      <p><b>Žinutė:</b></p>
      <div>${String(message || '').replace(/\n/g, '<br>')}</div>
      <hr><p style="font-size:12px;color:#888;">Bangų klinikos kontaktų forma</p>
    `;

    const info = await transporter.sendMail({
      from, to,
      subject: `Kontaktas iš svetainės – ${name || 'Anonimas'}`,
      html,
      replyTo: email, // atsakymai eis lankytojui
    });

    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error('SMTP send error:', err?.stack || err?.message || err);
    return res.status(500).json({ error: 'SEND_FAILED', details: String(err?.message || err) });
  }
}
