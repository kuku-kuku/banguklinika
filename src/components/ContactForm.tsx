import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/send.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          vardas: name,
          email: email,
          phone: phone,
          zinute: message,
        }).toString(),
      })

      if (res.ok) {
        setStatus("sent")
        setName(""); setEmail(""); setPhone(""); setMessage("")
      } else {
        throw new Error("Siuntimo klaida")
      }
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Vardas</label>
          <input required value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium">El. paštas</label>
          <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium">Telefonas</label>
          <input required value={phone} onChange={e=>setPhone(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium">Žinutė</label>
        <textarea required value={message} onChange={e=>setMessage(e.target.value)} rows={3} className="mt-1 w-full rounded-xl border px-3 py-2 resize-none" placeholder="Trumpai aprašykite poreikį..." />
      </div>
      <div className="flex items-center gap-3">
        <button className="btn-primary" type="submit" disabled={status==="loading"}>
          {status === "loading" ? "Siunčiama..." : "Siųsti užklausą"}
        </button>
        {status === "sent" && <p className="text-sm text-green-600">Žinutė išsiųsta!</p>}
        {status === "error" && <p className="text-sm text-red-600">Įvyko klaida.</p>}
      </div>
    </form>
  )
}
