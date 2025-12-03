import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { CLINIC } from '../data/clinic'
import { Link } from 'react-router-dom'

import offers from '../content/offers.json'

// Pasiimam būtent pirmą pasiūlymą (cirkonį)
const cirkonis = (offers as any).offers[0]

export default function CirkonioOffer() {
  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } },
  }
  const item = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  }

  // jeigu kažkaip ateityje neliks duomenų – tiesiog guard
  if (!cirkonis) return null

  return (
    <AnimatedSection>
      {/* SEO BŪTENT ŠIAM PUSLAPIUI */}
      <SEO
        title="Cirkonio keramikos vainikėliai Klaipėdoje | Bangų klinika"
        description="Cirkonio keramikos vainikėliai Klaipėdoje – estetiškas, ilgaamžis ir be metalo sprendimas šypsenai. Ypatingas pasiūlymas Bangų klinikoje."
      />

      <motion.div
        className="container-narrow relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.header className="mb-6" variants={item}>
          <p className="text-sm uppercase tracking-wide text-brand font-semibold">
            Ypatingas pasiūlymas
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700">
            Cirkonio keramikos vainikėliai Klaipėdoje
          </h1>
          <p className="mt-2 text-slate-700 max-w-2xl">
            {cirkonis.subtitle ?? cirkonis.intro}
          </p>
        </motion.header>

        <motion.section
          variants={item}
          className="relative overflow-hidden rounded-2xl ring-1 ring-brand bg-white shadow-sm mb-10"
        >
          <div className="pointer-events-none absolute -top-12 -left-10 -z-10 w-72 h-72 rounded-full bg-brand-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-14 -right-12 -z-10 w-72 h-72 rounded-full bg-brand-100/40 blur-3xl" />

          <div className="relative grid gap-6 p-6 sm:p-8 md:grid-cols-2 items-stretch">
            {/* LEFT */}
            <div className="flex flex-col justify-between">
              <div className="space-y-3">
                {cirkonis.label && (
                  <p className="text-sm uppercase tracking-wide text-brand font-semibold">
                    {cirkonis.label}
                  </p>
                )}

                <h2 className="text-2xl sm:text-3xl font-bold leading-snug text-darkblue-700">
                  {cirkonis.title}
                </h2>

                {cirkonis.intro && (
                  <p className="text-slate-700">
                    {cirkonis.intro}
                  </p>
                )}

                {Array.isArray(cirkonis.bulletsTop) && (
                  <ul className="text-slate-700 space-y-1 mt-2">
                    {cirkonis.bulletsTop.map((t: string, i: number) => (
                      <li key={i}>• {t}</li>
                    ))}
                  </ul>
                )}

                {cirkonis.suitableFor && (
                  <p className="text-slate-700 mt-3">
                    {cirkonis.suitableFor}
                  </p>
                )}

                {cirkonis.note && (
                  <p className="text-slate-500 text-sm mt-2">
                    {cirkonis.note}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                {(cirkonis.priceNow || cirkonis.priceWas) && (
                  <>
                    <div className="text-sm text-slate-500">Dabar tik</div>
                    <div className="flex items-baseline gap-3 mt-1">
                      {cirkonis.priceNow && (
                        <span className="text-3xl sm:text-4xl font-extrabold text-darkblue-700">
                          {cirkonis.priceNow}&nbsp;€
                        </span>
                      )}
                      {cirkonis.priceWas && (
                        <span className="text-slate-400 line-through">
                          {cirkonis.priceWas}&nbsp;€
                        </span>
                      )}
                    </div>
                  </>
                )}

                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href={`tel:${CLINIC.phone}`}
                    className="btn-primary rounded-full px-6 py-3 font-semibold"
                  >
                    Skambinti: {CLINIC.phone}
                  </a>
                  <Link
                    to="/kontaktai#registracija"
                    className="btn-primary rounded-full px-6 py-3 font-semibold"
                  >
                    Registruotis konsultacijai
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT – tas pats plakatas kaip liste */}
            <div className="flex items-center justify-center md:pl-4">
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ minHeight: 220, height: '100%' }}
                aria-hidden="true"
              >
                <img
                  src="/poster.png"
                  alt={cirkonis.title || 'Pasiūlymas'}
                  decoding="async"
                  loading="eager"
                  draggable={false}
                  className="block select-none mx-auto"
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '60vh',
                    objectFit: 'contain',
                    borderRadius: 12,
                  }}
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.div variants={item} className="mt-4">
          <Link
            to="/ypatingi-pasiulymai"
            className="text-sm text-brand hover:text-darkblue-700 underline-offset-4 hover:underline"
          >
            ← Grįžti į visus ypatingus pasiūlymus
          </Link>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  )
}
