// /api/send-email.mjs  (Vercel Serverless, ESM, Resend)
import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const ct = req.headers["content-type"] || "";
    if (!ct.includes("application/json")) {
      return res.status(415).json({ error: "Unsupported Media Type: expected JSON" });
    }

    const { name, email, phone, message, hp } = req.body || {};
    if (hp) return res.status(200).json({ ok: true }); // honeypot
    if (!email || !message) {
      return res.status(400).json({ error: "Trūksta laukų: email ir message privalomi" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.FROM_EMAIL || "Bangų Klinika <onboarding@resend.dev>";
    const toRaw = process.env.CONTACT_TO;
    if (!apiKey || !from || !toRaw) {
      console.error("CONFIG_ERROR", { hasApiKey: !!apiKey, hasFrom: !!from, hasTo: !!toRaw });
      return res.status(500).json({ error: "CONFIG_ERROR" });
    }
    const to = toRaw.split(",").map(s => s.trim()).filter(Boolean);

    const resend = new Resend(apiKey);

    const html = `
      <h2>Nauja užklausa iš svetainės</h2>
      <p><b>Vardas:</b> ${name || "—"}</p>
      <p><b>El. paštas:</b> ${email}</p>
      <p><b>Telefonas:</b> ${phone || "—"}</p>
      <p><b>Žinutė:</b></p>
      <div>${String(message || "").replace(/\n/g, "<br>")}</div>
      <hr><p style="font-size:12px;color:#888;">Bangų klinikos kontaktų forma</p>
    `;

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: `Kontaktas iš svetainės – ${name || "Anonimas"}`,
      html,
      reply_to: email,     // atsakymas eis lankytojui
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "SEND_FAILED", details: error.message || String(error) });
    }

    return res.status(200).json({ ok: true, id: data?.id || null });
  } catch (err) {
    console.error("SEND error:", err?.stack || err?.message || err);
    return res.status(500).json({ error: "SEND_FAILED", details: String(err?.message || err) });
  }
}
