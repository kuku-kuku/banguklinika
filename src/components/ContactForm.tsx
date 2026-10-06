import { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'

/* ----------------------------------------------------------------------------
 * ContactForm — same fields, same labels, same endpoint, same honeypot.
 *
 * What changed is the state handling. Previously the result appeared as a line
 * of green or red text beside the button and the form stayed put, so on a
 * phone a successful send could leave no visible feedback at all. Now the form
 * cross-fades to a confirmation panel, and errors appear in a live region
 * rather than as a colour-only signal.
 *
 * Motion is AnimatePresence with a height-free cross-fade: the two panels are
 * sized by the grid so nothing jumps. Reduced motion is honoured by the
 * MotionConfig in MotionProvider.
 * -------------------------------------------------------------------------- */

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle")

  // Honeypot (nematomas laukelis botams)
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

  const field =
    'mt-2 w-full rounded-ctl border border-hairline-strong bg-paper px-4 py-3 text-body ' +
    'transition-colors duration-fast placeholder:text-[var(--text-mute)] ' +
    'focus:border-tide-text focus:outline-none'
  const label = 'text-small font-semibold'

  return (
    <div className="grid">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'sent' ? (
          <m.div
            key="sent"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.2, 0.8, 0.25, 1] }}
            className="col-start-1 row-start-1"
          >
            <div
              role="status"
              className="flex flex-col items-start gap-4 rounded-card border border-hairline p-7"
            >
              <span
                aria-hidden
                className="flex h-11 w-11 items-center justify-center rounded-pill"
                style={{ background: 'var(--tide)' }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12.5 9 17.5 20 6.5" />
                </svg>
              </span>
              <p className="text-h3 font-bold">Žinutė išsiųsta!</p>
              <button type="button" className="btn-line" onClick={() => setStatus('idle')}>
                Siųsti dar vieną
              </button>
            </div>
          </m.div>
        ) : (
          <m.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.2, 0.8, 0.25, 1] }}
            className="col-start-1 row-start-1 space-y-5"
          >
            {/* Honeypot laukas (slėpti per CSS) */}
            <div className="hidden" aria-hidden>
              <label>Palikite tuščią</label>
              <input value={hp} onChange={e => setHp(e.target.value)} tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={label} htmlFor="cf-name">Vardas</label>
                <input id="cf-name" name="name" autoComplete="name" required value={name} onChange={e=>setName(e.target.value)} className={field} />
              </div>
              <div>
                <label className={label} htmlFor="cf-email">El. paštas</label>
                <input id="cf-email" name="email" type="email" autoComplete="email" required value={email} onChange={e=>setEmail(e.target.value)} className={field} />
              </div>
              <div className="md:col-span-2">
                <label className={label} htmlFor="cf-phone">Telefonas</label>
                <input id="cf-phone" name="phone" type="tel" autoComplete="tel" required value={phone} onChange={e=>setPhone(e.target.value)} className={field} />
              </div>
            </div>

            <div>
              <label className={label} htmlFor="cf-message">Žinutė</label>
              <textarea id="cf-message" name="message" required value={message} onChange={e=>setMessage(e.target.value)} rows={4} className={`${field} resize-none`} placeholder="Trumpai aprašykite poreikį..." />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="btn-ink" type="submit" disabled={status==="loading"} aria-busy={status==="loading"}>
                {status === "loading" ? "Siunčiama..." : "Siųsti užklausą"}
              </button>

              {/* Errors are announced, not signalled by colour alone. */}
              <p role="alert" aria-live="polite" className="text-small font-semibold text-danger">
                {status === "error" ? "Įvyko klaida." : ""}
              </p>
            </div>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  )
}
