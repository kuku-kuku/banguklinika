// src/pages/SpecialOffers.tsx
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { CLINIC } from '../data/clinic'
import { Link } from 'react-router-dom'

export default function SpecialOffers() {
  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } },
  }
  const item = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  }

  return (
    <AnimatedSection>
      <SEO
        title="Ypatingi pasiūlymai – Bangų klinika"
        description="Pilna burnos higiena + BEYOND® dantų balinimas – 249 Eur. Registruokitės telefonu arba internetu."
      />

      <motion.div
        className="container-narrow"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.header className="mb-6" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#10394F]">
            Ypatingi pasiūlymai
          </h1>
        </motion.header>

        {/* Spotlight pasiūlymas */}
        <motion.section
          variants={item}
          className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm"
        >
          {/* Dekoratyvūs švytėjimai */}
          <div className="pointer-events-none absolute -top-16 -left-20 w-72 h-72 rounded-full bg-sky-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-16 w-80 h-80 rounded-full bg-sky-200/30 blur-3xl" />

          <div className="relative grid gap-6 p-6 sm:p-8 md:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-wide text-[#1E88E5] font-semibold">
                Specialus pasiūlymas tobulai šypsenai
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold leading-snug text-[#10394F]">
                Pilna burnos higiena + BEYOND® dantų balinimas
              </h2>

              <p className="text-slate-700">
                Ruošiatės vestuvėms ar kitai svarbiai šventei? Pasipuoškite spindinčia šypsena!
              </p>

              <ul className="text-slate-700 space-y-1">
                <li>• Burnos higieną rekomenduojame atlikti prieš dantų balinimą.</li>
                <li>• Dantų balinimo procedūra – paprasta, neskausminga ir nekelianti diskomforto.</li>
                <li>• Su BEYOND® sistema rezultatas matomas iškart – dažniausiai užtenka vienos procedūros.</li>
                <li>• Balinimo rezultatai dažniausiai išlieka net iki 2 metų.</li>
              </ul>
            </div>

            {/* Kainos/CTA blokas */}
            <div className="flex flex-col justify-between gap-4 md:items-end">
              <div className="md:text-right">
                <div className="text-sm text-slate-500">Dabar tik</div>
                <div className="flex items-baseline gap-3 md:justify-end">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#10394F]">249&nbsp;Eur</span>
                  <span className="text-slate-400 line-through">280&nbsp;Eur</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="inline-block rounded-full px-6 py-3 font-semibold bg-[#10394F] text-white hover:opacity-95 transition shadow-sm"
                  aria-label="Skambinti dėl pasiūlymo"
                >
                  Skambinti: {CLINIC.phone}
                </a>
                <Link
                  to="/kontaktai"
                  className="inline-block rounded-full px-6 py-3 font-semibold bg-[#10394F] text-white/90 hover:text-white hover:opacity-95 transition shadow-sm"
                >
                  Rašyti mums
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Maža pastaba apačioje */}
        <motion.p className="text-xs text-slate-500 mt-4" variants={item}>
          * Pasiūlymas galioja kol nurodyta svetainėje. Daugiau informacijos – registracijos metu.
        </motion.p>
      </motion.div>
    </AnimatedSection>
  )
}
