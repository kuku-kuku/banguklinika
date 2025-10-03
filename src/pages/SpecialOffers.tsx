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
        title="Ypatingi pasiūlymai"
        description="Akcijos ir nuolaidos: pilna burnos higiena + BEYOND® balinimas už 249 € ir bendra nuolaida tęstiniam gydymui po pirminės apžiūros."
      />

      {/* Svarbu: suformuojam aukštesnį sluoksnį virš bangos */}
      <motion.div
        className="container-narrow relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.header className="mb-6" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700">
            Ypatingi pasiūlymai
          </h1>
        </motion.header>

        {/* Bendra akcija tęstiniam gydymui */}
        <motion.section
          variants={item}
          className="mb-6 relative z-10 rounded-2xl border border-brand bg-brand-50 p-5 shadow-soft"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-darkblue-700">
            Bendra akcija tęstiniam gydymui
          </h2>
          <p className="mt-2 text-slate-700">
            Po nemokamos pirminės apžiūros taikomos{' '}
            <span className="font-medium">nuolaidos tęstiniam gydymui</span>, pereinant į pilną gydymo planą.
            Konkrečias nuolaidas ir sąlygas sužinosite registracijos metu.
          </p>
        </motion.section>

        {/* Spotlight pasiūlymas */}
        <motion.section
          variants={item}
          className="relative overflow-hidden rounded-2xl ring-1 ring-brand bg-white shadow-sm"
        >
          {/* Dekoratyvūs švytėjimai – visada fone */}
          <div className="pointer-events-none absolute -top-16 -left-20 -z-10 w-72 h-72 rounded-full bg-brand-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-16 -z-10 w-80 h-80 rounded-full bg-brand-100/40 blur-3xl" />

          <div className="relative grid gap-6 p-6 sm:p-8 md:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-wide text-brand font-semibold">
                Specialus pasiūlymas tobulai šypsenai
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold leading-snug text-darkblue-700">
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
                  <span className="text-3xl sm:text-4xl font-extrabold text-darkblue-700">280&nbsp;Eur</span>
                  <span className="text-slate-400 line-through">330&nbsp;Eur</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="btn-primary rounded-full px-6 py-3 font-semibold"
                  aria-label="Skambinti dėl pasiūlymo"
                >
                  Skambinti: {CLINIC.phone}
                </a>
                <Link
                  to="/kontaktai#registracija"
                  className="btn-primary rounded-full px-6 py-3 font-semibold"
                >
                  Rašyti mums
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Maža pastaba apačioje */}
        <motion.p className="text-xs text-slate-500 mt-4" variants={item}>
          * Pasiūlymai galioja kol nurodyta svetainėje. Daugiau informacijos – registracijos metu.
        </motion.p>
      </motion.div>
    </AnimatedSection>
  )
}
