import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { CLINIC } from '../data/clinic'
import { Link } from 'react-router-dom'

import offers from '../content/offers.json'

const posterSrc = '/poster.png' // public/poster.png

export default function SpecialOffers() {
  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } },
  }
  const item = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  }

  const shouldShowPosterFor = (o: any) => {
    return !!(o && o.poster === true)
  }

  return (
    <AnimatedSection>
      <SEO title={offers.seo?.title ?? 'Ypatingi pasiūlymai'} description={offers.seo?.description} />

      <motion.div className="container-narrow relative z-10" variants={container} initial="hidden" animate="visible">
        <motion.header className="mb-6" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700">
            Ypatingi pasiūlymai
          </h1>
        </motion.header>

        {(offers.offers as any[]).map((o, idx) => {
          const showPoster = shouldShowPosterFor(o)

          // choose grid columns: two columns only when poster present
          const gridColsClass = showPoster ? 'md:grid-cols-2' : 'md:grid-cols-1'

          return (
            <motion.section
              key={idx}
              variants={item}
              className="relative overflow-hidden rounded-2xl ring-1 ring-brand bg-white shadow-sm mb-10"
            >
              <div className="pointer-events-none absolute -top-12 -left-10 -z-10 w-72 h-72 rounded-full bg-brand-100/50 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-14 -right-12 -z-10 w-72 h-72 rounded-full bg-brand-100/40 blur-3xl" />

              {/* grid adapts: if no poster -> single-column (text full width) */}
              <div className={`relative grid gap-6 p-6 sm:p-8 ${gridColsClass} items-stretch`}>
                {/* LEFT: when single-column this occupies full width */}
                <div className="flex flex-col justify-between">
                  <div className="space-y-3">
                    {o.label && <p className="text-sm uppercase tracking-wide text-brand font-semibold">{o.label}</p>}
                    <h2 className="text-2xl sm:text-3xl font-bold leading-snug text-darkblue-700">{o.title}</h2>

                    {o.subtitle && <p className="text-slate-700">{o.subtitle}</p>}
                    {o.intro && <p className="text-slate-700">{o.intro}</p>}

                    {Array.isArray(o.bulletsTop) && (
                      <ul className="text-slate-700 space-y-1 mt-2">
                        {o.bulletsTop.map((t: string, i: number) => <li key={i}>• {t}</li>)}
                      </ul>
                    )}

                    {o.midTitle && <p className="text-slate-700 font-medium mt-2">{o.midTitle}</p>}
                    {o.midText && <p className="text-slate-700">{o.midText}</p>}
                    {o.midTitle2 && <p className="text-slate-700 font-medium">{o.midTitle2}</p>}

                    {Array.isArray(o.bulletsBottom) && (
                      <ul className="text-slate-700 space-y-1">
                        {o.bulletsBottom.map((t: string, i: number) => <li key={i}>• {t}</li>)}
                      </ul>
                    )}

                    {o.suitableFor && <p className="text-slate-700 mt-3">{o.suitableFor}</p>}
                    {o.note && <p className="text-slate-500 text-sm mt-2">{o.note}</p>}
                  </div>

                  <div className="mt-6 pt-4">
                    <div className="text-sm text-slate-500">Dabar tik</div>
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-darkblue-700">
                        {o.priceNow}&nbsp;€
                      </span>
                      {o.priceWas && <span className="text-slate-400 line-through">{o.priceWas}&nbsp;€</span>}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4">
                      <a href={`tel:${CLINIC.phone}`} className="btn-primary rounded-full px-6 py-3 font-semibold">
                        Skambinti: {CLINIC.phone}
                      </a>
                      <Link to={o.ctaHref ?? '/kontaktai#registracija'} className="btn-primary rounded-full px-6 py-3 font-semibold">
                        {o.ctaText ?? 'Registruotis'}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* RIGHT: render ONLY when poster present */}
                {showPoster && (
                  <div className="flex items-center justify-center md:pl-4">
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ minHeight: 220, height: '100%' }}
                      aria-hidden="true"
                    >
                      <img
                        src={posterSrc}
                        alt={o.title || 'Pasiūlymas'}
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
                )}
              </div>
            </motion.section>
          )
        })}

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
