const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  try {
    const { name, email, phone, message, hp } = req.body || {};
    if (hp) return res.status(200).json({ ok: true }); // honeypot
    if (!email || !message) return res.status(400).json({ error: "Trūksta laukų: email ir message privalomi" });

    const port = Number(process.env.SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465, // SSL ant 465
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
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
      from: process.env.FROM_EMAIL,          // turi būti info@ domeno adresas
      to: process.env.CONTACT_TO,            // gavėjas (klinika)
      subject: `Kontaktas iš svetainės – ${name || "Anonimas"}`,
      html,
      replyTo: email,                        // atsakymai nueis lankytojui
    });

    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error("SMTP send error:", err);
    return res.status(500).json({ error: "Nepavyko išsiųsti laiško" });
  }
};
