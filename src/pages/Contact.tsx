import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import { CLINIC } from '../data/clinic'
import AnimatedSection from '../components/AnimatedSection'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

// JSON tekstai (SEO ir antraštės)
import contact from '../content/contact.json'

export default function Contact() {
  const container = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, ease: 'easeOut', duration: 0.45 } },
  }
  const item = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.4 } },
  }
  const mapItem = {
    hidden: { opacity: 0, y: 8, scale: 0.985 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { ease: 'easeOut', duration: 0.5 } },
  }

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
    <AnimatedSection>
      <SEO
        title={contact.seo?.title ?? 'Kontaktai'}
        description={contact.seo?.description}
        keywords={contact.seo?.keywords}
        canonical={contact.seo?.canonical}
      />

      <motion.div className="container-narrow space-y-10" variants={container} initial="hidden" animate="visible">
        {/* Žemėlapis */}
        <motion.div variants={mapItem} className="flex justify-center" aria-label="Bangų klinikos žemėlapis">
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-soft">
            <Map />
          </div>
        </motion.div>

        {/* Kontaktai + forma */}
        <motion.div className="grid md:grid-cols-2 gap-8 items-stretch" variants={container}>
          <motion.div className="h-full" variants={item}>
            <div id="kontaktai" className="scroll-mt-28 md:scroll-mt-32" aria-hidden />
            <div className="card p-6 h-full flex flex-col">
              <h1 className="text-2xl font-bold text-darkblue-600 mb-4">{contact.headings?.contact ?? 'Kontaktai'}</h1>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="text-primary-600 mt-0.5" />
                  <span>{CLINIC.address}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone size={18} className="text-primary-600 mt-0.5" />
                  <a className="hover:text-primary-700" href={`tel:${CLINIC.phone}`}>{CLINIC.phone}</a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={18} className="text-primary-600 mt-0.5" />
                  <a className="hover:text-primary-700" href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
                </li>
              </ul>

              <div className="mt-5">
                <h2 className="text-lg font-semibold text-darkblue-600 mb-2">{contact.headings?.hours ?? 'Darbo laikas'}</h2>
                <ul className="space-y-1 text-sm text-gray-700">
                  {CLINIC.hours.map(h => (
                    <li key={h.day} className="flex items-center gap-2">
                      <Clock size={16} className="text-primary-600" />
                      <span className="inline-block w-28">{h.day}:</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a href={`tel:${CLINIC.phone}`} className="btn btn-primary rounded-xl">
                  <Phone size={18} className="-ml-1 mr-1" /> Skambinti
                </a>
                <a href={`mailto:${CLINIC.email}`} className="btn btn-primary rounded-xl">
                  <Mail size={18} className="-ml-1 mr-1" /> El. laiškas
                </a>
                <a href={mapsHref} target="_blank" rel="noreferrer" className="btn btn-primary rounded-xl">
                  <Navigation size={18} className="-ml-1 mr-1" /> Maršrutas
                </a>
              </div>

              <div className="mt-auto" />
            </div>
          </motion.div>

          <motion.div className="h-full" variants={item}>
            <div id="registracija" ref={formAnchorRef} className="scroll-mt-28 md:scroll-mt-32" tabIndex={-1} aria-hidden />
            <div className="card p-6 h-full flex flex-col">
              <h2 className="text-lg font-semibold text-darkblue-600 mb-3">{contact.headings?.writeUs ?? 'Parašykite mums'}</h2>
              <div className="flex-1">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="p-5 rounded-2xl border border-primary-100 bg-primary-50" variants={item}>
          <p className="text-sm text-gray-800">
            {contact.headings?.infoNote ?? 'Jei turite klausimų dėl kainų ar gydymo plano – mielai pakonsultuosime.'}
          </p>
          <div className="mt-3">
            <Link to="/kainos" className="btn btn-primary rounded-xl">
              {contact.headings?.pricesCta ?? 'Peržiūrėti kainas'}
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  )
}
