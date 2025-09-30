// src/pages/Contact.tsx
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import { CLINIC } from '../data/clinic'
import AnimatedSection from '../components/AnimatedSection'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'
import { Link } from 'react-router-dom'

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

  return (
    <AnimatedSection>
      <SEO
        title="Kontaktai – Bangų klinika"
        description="Bangų g. 7-3, Klaipėda • +370 671 91399 • info@banguklinika.lt"
      />

      <motion.div className="container-narrow space-y-10" variants={container} initial="hidden" animate="visible">
        {/* ŽEMĖLAPIS PIRMAS */}
        <motion.div variants={mapItem} className="flex justify-center" aria-label="Bangų klinikos žemėlapis">
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-soft">
            <Map />
          </div>
        </motion.div>

        {/* Kontaktai + darbo laikas + forma */}
        <motion.div className="grid md:grid-cols-2 gap-8 items-start" variants={container}>
          {/* Kairė: informacija, darbo laikas, greitos nuorodos */}
          <motion.div className="space-y-6" variants={item}>
            <div className="card p-6">
              <h1 className="text-2xl font-bold text-darkblue-600 mb-4">Kontaktai</h1>

              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="text-primary-600 mt-0.5" />
                  <span>{CLINIC.address}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone size={18} className="text-primary-600 mt-0.5" />
                  <a className="hover:text-primary-700" href={`tel:${CLINIC.phone}`}>
                    {CLINIC.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={18} className="text-primary-600 mt-0.5" />
                  <a className="hover:text-primary-700" href={`mailto:${CLINIC.email}`}>
                    {CLINIC.email}
                  </a>
                </li>
              </ul>

              <div className="mt-5">
                <h2 className="text-lg font-semibold text-darkblue-600 mb-2">Darbo laikas</h2>
                <ul className="space-y-1 text-sm text-gray-700">
                  {CLINIC.hours.map((h) => (
                    <li key={h.day} className="flex items-center gap-2">
                      <Clock size={16} className="text-primary-600" />
                      <span className="inline-block w-28">{h.day}:</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Greitos nuorodos */}
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
            </div>

            {/* Alternatyvus CTA blokas (pasirinktinai) */}
            <div className="p-5 rounded-2xl border border-primary-100 bg-primary-50">
              <p className="text-sm text-gray-800">
                Jei turite klausimų dėl kainų ar gydymo plano – mielai pakonsultuosime.
              </p>
              <div className="mt-3">
                <Link to="/kainos" className="btn btn-primary rounded-xl">
                  Peržiūrėti kainas
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Dešinė: kontaktų forma */}
          <motion.div variants={item}>
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-darkblue-600 mb-3">Parašykite mums</h2>
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  )
}
