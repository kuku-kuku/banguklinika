import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { CLINIC } from '../data/clinic'
import { Link } from 'react-router-dom'

import offers from '../content/offers.json'

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
      <SEO title={offers.seo?.title ?? 'Ypatingi pasiūlymai'} description={offers.seo?.description} />

      <motion.div className="container-narrow relative z-10" variants={container} initial="hidden" animate="visible">
        <motion.header className="mb-6" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700">
            {offers.seo?.title ?? 'Ypatingi pasiūlymai'}
          </h1>
        </motion.header>

        {(offers.offers as any[]).map((o, idx) => (
          <motion.section
            key={idx}
            variants={item}
            className="relative overflow-hidden rounded-2xl ring-1 ring-brand bg-white shadow-sm mb-10"
          >
            <div className="pointer-events-none absolute -top-12 -left-10 -z-10 w-72 h-72 rounded-full bg-brand-100/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-14 -right-12 -z-10 w-72 h-72 rounded-full bg-brand-100/40 blur-3xl" />

            <div className="relative grid gap-6 p-6 sm:p-8 md:grid-cols-2 items-stretch">
              {/* Tekstas */}
              <div className="space-y-3">
                {o.label && <p className="text-sm uppercase tracking-wide text-brand font-semibold">{o.label}</p>}
                <h2 className="text-2xl sm:text-3xl font-bold leading-snug text-darkblue-700">{o.title}</h2>

                {Array.isArray(o.bulletsTop) && (
                  <ul className="text-slate-700 space-y-1">
                    {o.bulletsTop.map((t: string, i: number) => <li key={i}>• {t}</li>)}
                  </ul>
                )}

                {o.midTitle && <p className="text-slate-700 font-medium">{o.midTitle}</p>}
                {o.midText && <p className="text-slate-700">{o.midText}</p>}

                {o.midTitle2 && <p className="text-slate-700 font-medium">{o.midTitle2}</p>}
                {Array.isArray(o.bulletsBottom) && (
                  <ul className="text-slate-700 space-y-1">
                    {o.bulletsBottom.map((t: string, i: number) => <li key={i}>• {t}</li>)}
                  </ul>
                )}
              </div>

              {/* Kaina + CTA */}
              <div className="flex flex-col justify-between md:items-end">
                <div className="md:text-right mt-auto">
                  <div className="text-sm text-slate-500">Dabar tik</div>
                  <div className="flex items-baseline gap-3 md:justify-end">
                    <span className="text-3xl sm:text-4xl font-extrabold text-darkblue-700">
                      {o.priceNow}&nbsp;Eur
                    </span>
                    {o.priceWas && <span className="text-slate-400 line-through">{o.priceWas}&nbsp;Eur</span>}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 md:justify-end mt-3">
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
        ))}

        <motion.section variants={item} className="mb-6 relative z-10 rounded-2xl border border-brand bg-brand-50 p-5 shadow-soft">
          <h2 className="text-lg sm:text-xl font-semibold text-darkblue-700">
            {offers.general?.treatmentDiscountTitle}
          </h2>
          <p className="mt-2 text-slate-700">
            {offers.general?.treatmentDiscountText}
          </p>
        </motion.section>

        {offers.general?.note && (
          <motion.p className="text-xs text-slate-500 mt-4" variants={item}>
            {offers.general.note}
          </motion.p>
        )}
      </motion.div>
    </AnimatedSection>
  )
}
