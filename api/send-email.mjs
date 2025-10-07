// /api/send-email.mjs  (Vercel Serverless, ESM)
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const ct = req.headers["content-type"] || "";
    if (!ct.includes("application/json"))
      return res
        .status(415)
        .json({ error: "Unsupported Media Type: expected JSON" });

    const { name, email, phone, message, hp } = req.body || {};
    if (hp) return res.status(200).json({ ok: true }); // honeypot
    if (!email || !message)
      return res
        .status(400)
        .json({ error: "Trūksta laukų: email ir message privalomi" });

    // --- ENV ---
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.FROM_EMAIL; // pvz. "Bangų Klinika <noreply@banguklinika.lt>"
    const to = process.env.CONTACT_TO; // pvz. "info@banguklinika.lt"

    if (!host || !user || !pass || !from || !to) {
      console.error("CONFIG_ERROR", {
        hasHost: !!host,
        hasUser: !!user,
        hasPass: !!pass,
        hasFrom: !!from,
        hasTo: !!to,
      });
      return res.status(500).json({ error: "CONFIG_ERROR" });
    }

    // --- TRANSPORTER su STARTTLS (587) ir fallback ---
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: false, // STARTTLS vietoj SSL
      auth: { user, pass },
      tls: {
        // leidžia jungtis net jei sertifikatas self-signed
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000,
      greetingTimeout: 8000,
      logger: true,
      debug: true,
    });

    try {
      await transporter.verify();
      console.log("✅ SMTP connection verified");
    } catch (verifyErr) {
      console.warn("⚠️ SMTP verify failed:", verifyErr.message || verifyErr);
      // fallback į 465 (SSL)
      transporter.options.port = 465;
      transporter.options.secure = true;
      console.log("Retrying with port 465 / SSL...");
      await transporter.verify();
    }

    // --- HTML turinys ---
    const html = `
      <h2>Nauja užklausa iš svetainės</h2>
      <p><b>Vardas:</b> ${name || "—"}</p>
      <p><b>El. paštas:</b> ${email}</p>
      <p><b>Telefonas:</b> ${phone || "—"}</p>
      <p><b>Žinutė:</b></p>
      <div>${String(message || "").replace(/\n/g, "<br>")}</div>
      <hr><p style="font-size:12px;color:#888;">Bangų klinikos kontaktų forma</p>
    `;

    // --- Siuntimas ---
    const info = await transporter.sendMail({
      from,
      to,
      subject: `Kontaktas iš svetainės – ${name || "Anonimas"}`,
      html,
      replyTo: email,
    });

    console.log("📨 Message sent:", info.messageId);
    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error("❌ SMTP send error:", err?.stack || err?.message || err);
    return res.status(500).json({
      error: "SEND_FAILED",
      details: String(err?.message || err),
    });
  }
}
