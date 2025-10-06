// src/pages/SpecialOffers.tsx
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { CLINIC } from '../data/clinic'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export default function SpecialOffers() {
  const [showPoster, setShowPoster] = useState(false)
  const [hoverPreview, setHoverPreview] = useState(false) // desktop hover peržiūra

  // Uždarymas su ESC
  useEffect(() => {
    if (!showPoster) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setShowPoster(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showPoster])

  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 },
    },
  }
  const item = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  }

  return (
    <AnimatedSection>
      <SEO
        title="Ypatingi pasiūlymai"
        description="Akcijos ir nuolaidos: burnos higiena + mineralų terapija už 60 €, BEYOND® balinimo pasiūlymas ir daugiau specialių pasiūlymų jūsų šypsenai."
      />

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

        {/* 1️⃣ NAUJASIAUSIS — Mineralų terapijos pasiūlymas (viršuje) */}
        <motion.section
          variants={item}
          className="relative overflow-hidden rounded-2xl ring-1 ring-brand bg-white shadow-sm mb-10"
        >
          <div className="pointer-events-none absolute -top-12 -left-10 -z-10 w-72 h-72 rounded-full bg-brand-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-14 -right-12 -z-10 w-72 h-72 rounded-full bg-brand-100/40 blur-3xl" />

          <div className="relative grid gap-6 p-6 sm:p-8 md:grid-cols-2">
            {/* KAIRĖ – tekstas */}
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-wide text-brand font-semibold">
                Naujausias pasiūlymas
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold leading-snug text-darkblue-700">
                Pilna burnos higiena + mineralų terapija
              </h2>

              <p className="text-slate-700">
                Reguliari burnos higiena palaiko sveikas dantenas ir gaivų burnos kvapą, o
                <span className="font-medium"> mineralų terapija</span> atstato emalį, mažina jautrumą ir suteikia
                dantims natūralaus stiprumo bei blizgesio.
              </p>

              <ul className="text-slate-700 space-y-1">
                <li>• Procedūra trunka apie 1 valandą.</li>
                <li>• Tinka profilaktikai ir jautrumo mažinimui.</li>
                <li>• Puikus pasiruošimas dantų balinimui ar kasmetinei higienai.</li>
              </ul>
            </div>

            {/* DEŠINĖ – posteris: hover peržiūra (desktop) + modalas (mobile/click) */}
            <div className="relative flex flex-col justify-between gap-4 md:items-end">
              {/* Thumbnail (be tarpų, pilnai užpildo bloką) */}
              <div
                className="w-full h-60 md:h-72 overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setShowPoster(true)}
                onMouseEnter={() => setHoverPreview(true)}
                onMouseLeave={() => setHoverPreview(false)}
              >
                <img
                  src="/poster.png"
                  alt="Burnos higiena ir mineralų terapija"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Kainos apačioje */}
              <div className="md:text-right mt-auto">
                <div className="text-sm text-slate-500">Dabar tik</div>
                <div className="flex items-baseline gap-3 md:justify-end">
                  <span className="text-3xl sm:text-4xl font-extrabold text-darkblue-700">60&nbsp;Eur</span>
                  <span className="text-slate-400 line-through">100&nbsp;Eur</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href={`tel:${CLINIC.phone}`} className="btn-primary rounded-full px-6 py-3 font-semibold">
                  Skambinti: {CLINIC.phone}
                </a>
                <Link to="/kontaktai#registracija" className="btn-primary rounded-full px-6 py-3 font-semibold">
                  Rašyti mums
                </Link>
              </div>
            </div>
          </div>

          {/* Hover peržiūra — tik desktop (md+) */}
          <AnimatePresence>
            {hoverPreview && (
              <motion.div
                className="hidden md:flex fixed inset-0 z-[160] pointer-events-none items-center justify-center p-6"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
              >
                <img
                  src="/poster.png"
                  alt="Burnos higiena ir mineralų terapija – peržiūra"
                  className="max-w-3xl max-h-[80vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* 2️⃣ BEYOND pasiūlymas (kainos apačioje prieš mygtukus) */}
        <motion.section
          variants={item}
          className="relative overflow-hidden rounded-2xl ring-1 ring-brand bg-white shadow-sm mb-10"
        >
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

            <div className="relative flex flex-col justify-between gap-4 md:items-end">
              <div className="md:text-right mt-auto">
                <div className="text-sm text-slate-500">Dabar tik</div>
                <div className="flex items-baseline gap-3 md:justify-end">
                  <span className="text-3xl sm:text-4xl font-extrabold text-darkblue-700">280&nbsp;Eur</span>
                  <span className="text-slate-400 line-through">330&nbsp;Eur</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href={`tel:${CLINIC.phone}`} className="btn-primary rounded-full px-6 py-3 font-semibold">
                  Skambinti: {CLINIC.phone}
                </a>
                <Link to="/kontaktai#registracija" className="btn-primary rounded-full px-6 py-3 font-semibold">
                  Rašyti mums
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3️⃣ Bendra akcija tęstiniam gydymui */}
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

        {/* Modalas — mobilui ar paspaudimui (kai nėra hover) */}
        <AnimatePresence>
          {showPoster && (
            <motion.div
              className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPoster(false)}
            >
              <motion.div
                className="relative w-full max-w-3xl mx-auto"
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.97, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* X mygtukas — prilipęs prie posterio kampo */}
                <button
                  onClick={() => setShowPoster(false)}
                  className="absolute top-3 right-3 z-10 bg-black/40 backdrop-blur-sm rounded-full p-1.5 hover:bg-black/60 transition"
                  aria-label="Uždaryti"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                <img
                  src="/poster.png"
                  alt="Burnos higiena ir mineralų terapija"
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                  style={{ maxHeight: 'calc(100vh - 140px)' }} // nelenda po navbaru, be vidinio scroll
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p className="text-xs text-slate-500 mt-4" variants={item}>
          * Pasiūlymai galioja kol nurodyta svetainėje. Daugiau informacijos – registracijos metu.
        </motion.p>
      </motion.div>
    </AnimatedSection>
  )
}
