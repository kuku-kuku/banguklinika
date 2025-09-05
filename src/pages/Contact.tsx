// src/pages/Contact.tsx
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import { CLINIC } from '../data/clinic'
import AnimatedSection from '../components/AnimatedSection'
import { motion } from 'framer-motion'

export default function Contact() {
  const container = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.06, ease: 'easeOut', duration: 0.45 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.4 } },
  }

  const mapItem = {
    hidden: { opacity: 0, y: 8, scale: 0.985 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { ease: 'easeOut', duration: 0.5 } },
  }

  return (
    <AnimatedSection>
      <SEO
        title="Kontaktai – Bangų klinika"
        description="Bangų g. 7-3, Klaipėda • +370 671 91399 • info@banguklinika.lt"
      />

      <motion.div
        className="container-narrow grid md:grid-cols-2 gap-8 items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-4" variants={item}>
          <motion.h1 className="text-3xl font-bold" variants={item}>
            Kontaktai
          </motion.h1>

          <motion.ul className="text-sm text-gray-700 space-y-2" variants={item}>
            <li>
              <strong>Adresas:</strong> {CLINIC.address}
            </li>
            <li>
              <strong>Telefonas:</strong>{' '}
              <a className="hover:text-primary-700" href={`tel:${CLINIC.phone}`}>
                {CLINIC.phone}
              </a>
            </li>
            <li>
              <strong>El. paštas:</strong>{' '}
              <a className="hover:text-primary-700" href={`mailto:${CLINIC.email}`}>
                {CLINIC.email}
              </a>
            </li>
          </motion.ul>

          <motion.h2 className="font-semibold" variants={item}>
            Parašykite mums
          </motion.h2>

          <motion.div variants={item}>
            <ContactForm />
          </motion.div>
        </motion.div>

        <motion.div variants={mapItem} className="rounded-2xl overflow-hidden ring-1 ring-slate-200">
          <Map />
        </motion.div>
      </motion.div>
    </AnimatedSection>
  )
}
