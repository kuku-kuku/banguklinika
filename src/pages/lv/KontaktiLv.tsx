import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import ContactFormLv from '../../components/ContactFormLv'
import Map from '../../components/Map'
import { CLINIC } from '../../data/clinic'
import { SITE_URL } from '../../i18n/lv'

export default function KontaktiLv() {
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
    if (hash === '#kontakti') {
      const el = document.getElementById('kontakti')
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
        lang="lv"
        title="Kontakti — Bangų zobārstniecības klīnika Klaipēdā"
        description="Sazinieties ar Bangų zobārstniecības klīniku Klaipēdā. Pierakstieties vizītei pa tālruni vai e-pastu."
        keywords="kontakti, Bangų klīnika, zobārstniecība Klaipēda, reģistrācija"
        canonical={`${SITE_URL}/lv/kontakti`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/kontaktai` },
          { lang: 'lv', url: `${SITE_URL}/lv/kontakti` },
          { lang: 'x-default', url: `${SITE_URL}/kontaktai` },
        ]}
      />

      <motion.div className="container-narrow space-y-10" variants={container} initial="hidden" animate="visible">
        {/* Karte */}
        <motion.div variants={mapItem} className="flex justify-center" aria-label="Bangų klīnikas karte">
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-soft">
            <Map />
          </div>
        </motion.div>

        {/* Kontakti + forma */}
        <motion.div className="grid md:grid-cols-2 gap-8 items-stretch" variants={container}>
          <motion.div className="h-full" variants={item}>
            <div id="kontakti" className="scroll-mt-28 md:scroll-mt-32" aria-hidden />
            <div className="card p-6 h-full flex flex-col">
              <h1 className="text-2xl font-bold text-darkblue-600 mb-4">Kontakti</h1>
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
                <h2 className="text-lg font-semibold text-darkblue-600 mb-2">Darba laiks</h2>
                <ul className="space-y-1 text-sm text-gray-700">
                  {[
                    { day: "Pr–Ct", time: "9:00–18:00" },
                    { day: "Pk", time: "9:00–16:00" },
                    { day: "Se–Sv", time: "Slēgts" },
                  ].map(h => (
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
                  <Phone size={18} className="-ml-1 mr-1" /> Zvanīt
                </a>
                <a href={`mailto:${CLINIC.email}`} className="btn btn-primary rounded-xl">
                  <Mail size={18} className="-ml-1 mr-1" /> E-pasts
                </a>
                <a href={mapsHref} target="_blank" rel="noreferrer" className="btn btn-primary rounded-xl">
                  <Navigation size={18} className="-ml-1 mr-1" /> Maršruts
                </a>
              </div>

              <div className="mt-auto" />
            </div>
          </motion.div>

          <motion.div className="h-full" variants={item}>
            <div id="registracija" ref={formAnchorRef} className="scroll-mt-28 md:scroll-mt-32" tabIndex={-1} aria-hidden />
            <div className="card p-6 h-full flex flex-col">
              <h2 className="text-lg font-semibold text-darkblue-600 mb-3">Rakstiet mums</h2>
              <div className="flex-1">
                <ContactFormLv />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="p-5 rounded-2xl border border-primary-100 bg-primary-50" variants={item}>
          <p className="text-sm text-gray-800">
            Ja Jums ir jautājumi par cenām vai ārstniecības plānu — labprāt konsultēsim.
          </p>
          <div className="mt-3">
            <Link to="/lv/cenas" className="btn btn-primary rounded-xl">
              Apskatīt cenas
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  )
}
