import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import { CLINIC } from '../data/clinic'
import RevealLines from '../components/RevealLines'
import WaveDivider from '../components/WaveDivider'
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

// JSON tekstai (SEO ir antraštės)
import contact from '../content/contact.json'

export default function Contact() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC.address)}`
  const { hash } = useLocation()
  const formAnchorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!hash) return
    if (hash === '#kontaktai') {
      const el = document.getElementById('kontaktai')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    if (hash === '#registracija' || hash === '#contact-form') {
      const el = formAnchorRef.current || document.getElementById('registracija') || document.getElementById('contact-form')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  return (
    <>
      <SEO
        title={contact.seo?.title ?? 'Kontaktai'}
        description={contact.seo?.description}
        keywords={contact.seo?.keywords}
        canonical={contact.seo?.canonical}
      />

      {/* Hero. h1 stays the "Kontaktai" heading it has always been — only the
          type treatment changed. */}
      <section className="shell-bg">
        <div className="container-wide pb-section-tight pt-section">
          <div id="kontaktai" className="scroll-mt-28 md:scroll-mt-32" aria-hidden />
          <h1 className="max-w-3xl text-display font-black">
            <RevealLines lines={[contact.headings?.contact ?? 'Kontaktai']} />
          </h1>
        </div>

        {/* Details + form. Asymmetric 5/7: the form is the task, so it gets
            the wider column. */}
        <div className="container-wide grid gap-12 pb-section lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ul className="space-y-4 p-0 text-body">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-tide-text" aria-hidden />
                <span>{CLINIC.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-tide-text" aria-hidden />
                <a className="font-semibold" href={`tel:${CLINIC.phone}`}>{CLINIC.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-tide-text" aria-hidden />
                <a className="font-semibold" href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
              </li>
            </ul>

            <div className="mt-10 border-t border-hairline pt-8">
              <h2 className="text-h3 font-bold">{contact.headings?.hours ?? 'Darbo laikas'}</h2>
              <ul className="mt-4 space-y-2 p-0 text-small">
                {CLINIC.hours.map(h => (
                  <li key={h.day} className="flex items-center gap-3">
                    <Clock size={16} className="shrink-0 text-tide-text" aria-hidden />
                    <span className="inline-block w-28">{h.day}:</span>
                    <span className="muted">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`tel:${CLINIC.phone}`} className="btn-ink">
                <Phone size={18} aria-hidden /> Skambinti
              </a>
              <a href={`mailto:${CLINIC.email}`} className="btn-line">
                <Mail size={18} aria-hidden /> El. laiškas
              </a>
              <a href={mapsHref} target="_blank" rel="noreferrer" className="btn-line">
                <Navigation size={18} aria-hidden /> Maršrutas
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div id="registracija" ref={formAnchorRef} className="scroll-mt-28 md:scroll-mt-32" tabIndex={-1} aria-hidden />
            <div className="rounded-image bg-paper p-7 sm:p-10">
              <h2 className="text-h3 font-bold">{contact.headings?.writeUs ?? 'Parašykite mums'}</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider from="var(--shell)" to="var(--paper)" />

      <section className="container-wide pb-section pt-section-tight">
        <div aria-label="Bangų klinikos žemėlapis">
          <Map />
        </div>

        <div className="mt-12 flex flex-col items-start gap-5 border-t border-hairline pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="measure text-body">
            {contact.headings?.infoNote ?? 'Jei turite klausimų dėl kainų ar gydymo plano – mielai pakonsultuosime.'}
          </p>
          <Link to="/kainos" className="btn-ink shrink-0">
            {contact.headings?.pricesCta ?? 'Peržiūrėti kainas'}
          </Link>
        </div>
      </section>
    </>
  )
}
