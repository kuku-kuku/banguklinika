  import { useState } from 'react'
  import { CLINIC } from '../data/clinic'

  export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [sent, setSent] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      const mailto = `mailto:${CLINIC.email}?subject=Užklausa iš svetainės&body=` +
        encodeURIComponent(`Vardas: ${name}
El. paštas: ${email}
Telefonas: ${phone}

Žinutė:
${message}`)
      window.location.href = mailto
      setSent(true)
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
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-medium">Telefonas</label>
            <input required value={phone} onChange={e=>setPhone(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium">Žinutė</label>
          <textarea value={message} onChange={e=>setMessage(e.target.value)} rows={5} className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Trumpai aprašykite poreikį..." />
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-primary" type="submit">Siųsti užklausą</button>
          {sent && <p className="text-sm text-green-600">Atidaromas el. paštas su paruošta žinute.</p>}
        </div>
      </form>
    )
  }
