// /api/send-email.js
const nodemailer = require("nodemailer");

function bool(v) {
  if (v === true) return true;
  if (v === false) return false;
  if (typeof v === 'string') return ['1','true','yes','on'].includes(v.toLowerCase());
  return false;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    // Apsauga: leisk tik JSON
    const ct = req.headers['content-type'] || '';
    if (!ct.includes('application/json')) {
      return res.status(415).json({ error: "Unsupported Media Type" });
    }

    const { name, email, phone, message, hp } = req.body || {};
    if (hp) return res.status(200).json({ ok: true }); // honeypot

    if (!email || !message) {
      return res.status(400).json({ error: "Trūksta laukų: email ir message privalomi" });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.FROM_EMAIL;
    const to = process.env.CONTACT_TO;

    // Minimalus env patikrinimas (NELOGUOJAM reikšmių)
    if (!host || !port || !user || !pass || !from || !to) {
      console.error("ENV_MISSING", {
        hasHost: !!host, hasPort: !!port, hasUser: !!user, hasPass: !!pass,
        hasFrom: !!from, hasTo: !!to
      });
      return res.status(500).json({ error: "CONFIG_ERROR" });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // SSL ant 465
      auth: { user, pass },
      // Įjunk vidinį debug (matysis Vercel funkcijų loguose)
      logger: true,
      debug: true,
    });

    // Bandome SMTP rankos paspaudimą – duos aiškią klaidą (login/DNS/TLS)
    await transporter.verify().catch((e) => {
      console.error("SMTP_VERIFY_ERROR:", e && e.message);
      throw e;
    });

    const html = `
      <h2>Nauja užklausa iš svetainės</h2>
      <p><b>Vardas:</b> ${name || "—"}</p>
      <p><b>El. paštas:</b> ${email}</p>
      <p><b>Telefonas:</b> ${phone || "—"}</p>
      <p><b>Žinutė:</b></p>
      <div>${String(message || "").replace(/\n/g, "<br>")}</div>
      <hr><p style="font-size:12px;color:#888;">Bangų klinikos kontaktų forma</p>
    `;

    const info = await transporter.sendMail({
      from,             // TURI atitikti domeno/SMTP politiką (jei Gmail – Gmail adresas)
      to,               // Gavėjas klinikai
      subject: `Kontaktas iš svetainės – ${name || "Anonimas"}`,
      html,
      replyTo: email,   // atsakant nueis lankytojui
    });

    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    // Čia paliekam išsamų logą tik funkcijų loguose
    console.error("SMTP send error:", err && (err.stack || err.message || err));
    return res.status(500).json({ error: "Nepavyko išsiųsti laiško" });
  }
};
