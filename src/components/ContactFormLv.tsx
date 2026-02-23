import { useState } from 'react'

export default function ContactFormLv() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle")

  // Honeypot (neredzams lauks botiem)
  const [hp, setHp] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "loading") return
    setStatus("loading")

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, hp }),
      })

      if (!res.ok) throw new Error(await res.text())

      setStatus("sent")
      setName(''); setEmail(''); setPhone(''); setMessage('')
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-4">
      {/* Honeypot lauks (slēpts ar CSS) */}
      <div className="hidden">
        <label>Atstājiet tukšu</label>
        <input value={hp} onChange={e => setHp(e.target.value)} />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Vārds</label>
          <input required value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium">E-pasts</label>
          <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium">Tālrunis</label>
          <input required value={phone} onChange={e=>setPhone(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2" />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Ziņojums</label>
        <textarea required value={message} onChange={e=>setMessage(e.target.value)} rows={3} className="mt-1 w-full rounded-xl border px-3 py-2 resize-none" placeholder="Īsi aprakstiet savu vajadzību..." />
      </div>

      <div className="flex items-center gap-3">
        <button className="btn-primary" type="submit" disabled={status==="loading"}>
          {status === "loading" ? "Nosūta..." : "Nosūtīt pieteikumu"}
        </button>
        {status === "sent" && <p className="text-sm text-green-600">Ziņojums nosūtīts!</p>}
        {status === "error" && <p className="text-sm text-red-600">Radās kļūda.</p>}
      </div>
    </form>
  )
}
