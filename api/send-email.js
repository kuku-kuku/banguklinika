// /api/send-email.js  (Vercel serverless)
// Reikia env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL, REPLY_TO
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, phone, message, hp } = req.body || {};

    // Paprastas anti-bot honeypot: jei užpildyta – dropinam
    if (hp) return res.status(200).json({ ok: true });

    if (!email || !message) {
      return res.status(400).json({ error: "Trūksta laukų: email ir message privalomi" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,         // pvz. mail.serveriai.lt
      port: Number(process.env.SMTP_PORT), // 465 (SSL) arba 587 (STARTTLS)
      secure: Number(process.env.SMTP_PORT) === 465, // true jei 465
      auth: {
        user: process.env.SMTP_USER,       // pvz. info@banguklinika.lt
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <h2>Nauja užklausa iš svetainės</h2>
      <p><b>Vardas:</b> ${name || "—"}</p>
      <p><b>El. paštas:</b> ${email}</p>
      <p><b>Telefonas:</b> ${phone || "—"}</p>
      <p><b>Žinutė:</b></p>
      <div>${String(message || "").replace(/\n/g, "<br>")}</div>
      <hr>
      <p style="font-size:12px;color:#888;">Bangų klinikos kontaktų forma</p>
    `;

    await transporter.sendMail({
      from: process.env.FROM_EMAIL,       // pvz. info@banguklinika.lt
      to: process.env.REPLY_TO,           // kur gauni laiškus (gali sutapti su from)
      subject: `Kontaktas iš svetainės – ${name || "Anonimas"}`,
      html,
      replyTo: email,                     // atsakymas nueis žmogui
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("SMTP send error:", err);
    return res.status(500).json({ error: "Nepavyko išsiųsti laiško" });
  }
};
