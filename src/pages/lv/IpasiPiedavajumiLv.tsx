import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { CLINIC } from '../../data/clinic'
import { Link } from 'react-router-dom'
import { SITE_URL } from '../../i18n/lv'

const offers = [
  {
    label: 'Cirkonija keramikas kroņi ar īpašo piedāvājumu!',
    title: 'Cirkonija keramikas kroņi – estētika, kvalitāte un ilgmūžība!',
    subtitle: 'Klaipēdā tikai tagad – ekskluzīvā akcija cirkonija keramikas kroņiem.',
    intro: 'Viens cirkonija keramikas kronis (uz zoba) – tikai 299 €! Tas ir estētisks, izturīgs un ilgmūžīgs risinājums mūsdienīgam smaidam.',
    bulletsTop: [
      'Ļoti dabiska izskata – izskatās kā īsti zobi',
      'Bez metāla – nesatur melnās smaganas, piemērots pacientiem ar alerģiju',
      'Precīzs izgatavošanas process laboratorijā ar lielu pieredzi',
      'Ilgmūžīgs, izturīgs materiāls – smaids, kas paliek gadiem',
    ],
    priceNow: 299,
    priceWas: 400,
    suitableFor:
      'Lielisks risinājums pacientiem, kuri vēlas dabiska izskata, ilgmūžīgas un bezmetāla zobu restaurācijas.',
    ctaText: 'Uzzināt vairāk par cirkonija kroņiem',
    ctaHref: '/lv/kontakti#registracija',
    note: 'Bezmaksas sākotnējā konsultācija un ārsta sagatavots ārstniecības plāns. Iespēja maksāt pa daļām. Akcija ir spēkā līdz 2026-01-31.',
    poster: true,
  },
  {
    label: 'Pilna žokļa atjaunošana uz 4 implantiem',
    title: 'Atjaunojam visus žokļa zobus uz 4 implantiem – tikai 1 dienā!',
    intro:
      'Tā ir moderna ārstniecības metode, kad visi žokļa zobi tiek atjaunoti uz 4 implantiem. Mūsu klīnikā tas tiek veikts tikai 1 dienā.',
    bulletsTop: [
      '3D (CBCT) rentgena uzņēmums',
      '4 „Straumann" grupas implanti',
      'Oriģinālās protezēšanas daļas',
      'Neizņemama protēze',
    ],
    priceNow: 3800,
    priceWas: 4300,
    suitableFor:
      'Ieteicams risinājums pacientiem, kas zaudējuši lielāko daļu zobu, nēsā izņemamas protēzes vai kuriem pārējiem zobiem ir slikta prognoze.',
    ctaText: 'Uzzināt vairāk par pilnu žokļa atjaunošanu',
    ctaHref: '/lv/kontakti#registracija',
    poster1: true,
  },
  {
    label: 'Īpašais piedāvājums ideālam smaidam',
    title: 'Pilna mutes higiēna + BEYOND® zobu balināšana',
    bulletsTop: [
      'Mutes higiēnu iesakām veikt pirms zobu balināšanas.',
      'Zobu balināšanas procedūra – vienkārša, nesāpīga un ērta.',
      'Ar BEYOND® sistēmu rezultāts redzams uzreiz – parasti pietiek ar vienu procedūru.',
      'Balināšanas rezultāti parasti saglabājas pat līdz 2 gadiem.',
    ],
    priceNow: 280,
    priceWas: 330,
    ctaText: 'Uzzināt vairāk',
    ctaHref: '/lv/kontakti#registracija',
  },
]

const general = {
  treatmentDiscountTitle: 'Vispārīgā akcija turpinātai ārstniecībai',
  treatmentDiscountText:
    'Pēc bezmaksas sākotnējās apskates tiek piemērotas atlaides turpinātai ārstniecībai, pārejot uz pilnu ārstniecības plānu. Konkrētas atlaides un nosacījumus uzzināsiet reģistrācijas laikā.',
  note: '* Piedāvājumi ir spēkā, kamēr norādīts vietnē. Vairāk informācijas – reģistrācijas laikā.',
}

export default function IpasiPiedavajumiLv() {
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
        lang="lv"
        title="Īpašie piedāvājumi — Bangų zobārstniecības klīnika Klaipēdā"
        description="Cirkonija keramikas kroņi, ALL-ON-4 implantācija un zobu balināšana ar īpašiem piedāvājumiem Klaipēdā. Bezmaksas konsultācija."
        canonical={`${SITE_URL}/lv/ipasi-piedavajumi`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/ypatingi-pasiulymai` },
          { lang: 'lv', url: `${SITE_URL}/lv/ipasi-piedavajumi` },
          { lang: 'x-default', url: `${SITE_URL}/ypatingi-pasiulymai` },
        ]}
      />

      <motion.div className="container-narrow relative z-10" variants={container} initial="hidden" animate="visible">
        <motion.header className="mb-6" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700">
            Īpašie piedāvājumi
          </h1>
        </motion.header>

        {offers.map((o, idx) => {
          const showPoster = o?.poster === true || o?.poster1 === true
          const posterSrc = o?.poster1 ? '/poster1.png' : '/poster.png'
          const gridColsClass = showPoster ? 'md:grid-cols-2' : 'md:grid-cols-1'

          return (
            <motion.section
              key={idx}
              variants={item}
              className="relative overflow-hidden rounded-2xl ring-1 ring-brand bg-white shadow-sm mb-10"
            >
              <div className="pointer-events-none absolute -top-12 -left-10 -z-10 w-72 h-72 rounded-full bg-brand-100/50 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-14 -right-12 -z-10 w-72 h-72 rounded-full bg-brand-100/40 blur-3xl" />

              <div className={`relative grid gap-6 p-6 sm:p-8 ${gridColsClass} items-stretch`}>
                {/* LEFT */}
                <div className="flex flex-col justify-between">
                  <div className="space-y-3">
                    {o.label && <p className="text-sm uppercase tracking-wide text-brand font-semibold">{o.label}</p>}
                    <h2 className="text-2xl sm:text-3xl font-bold leading-snug text-darkblue-700">{o.title}</h2>

                    {o.subtitle && <p className="text-slate-700">{o.subtitle}</p>}
                    {o.intro && <p className="text-slate-700">{o.intro}</p>}

                    {Array.isArray(o.bulletsTop) && (
                      <ul className="text-slate-700 space-y-1 mt-2">
                        {o.bulletsTop.map((t, i) => <li key={i}>• {t}</li>)}
                      </ul>
                    )}

                    {o.suitableFor && <p className="text-slate-700 mt-3">{o.suitableFor}</p>}
                    {o.note && <p className="text-slate-500 text-sm mt-2">{o.note}</p>}
                  </div>

                  <div className="mt-6 pt-4">
                    {(o.priceNow || o.priceWas) && (
                      <>
                        <div className="text-sm text-slate-500">Tagad tikai</div>
                        <div className="flex items-baseline gap-3 mt-1">
                          {o.priceNow && (
                            <span className="text-3xl sm:text-4xl font-extrabold text-darkblue-700">
                              {o.priceNow}&nbsp;€
                            </span>
                          )}
                          {o.priceWas && (
                            <span className="text-slate-400 line-through">
                              {o.priceWas}&nbsp;€
                            </span>
                          )}
                        </div>
                      </>
                    )}

                    <div className="flex flex-wrap gap-3 mt-4">
                      <a href={`tel:${CLINIC.phone}`} className="btn-primary rounded-full px-6 py-3 font-semibold">
                        Zvanīt: {CLINIC.phone}
                      </a>
                      <Link
                        to={o.ctaHref ?? '/lv/kontakti#registracija'}
                        className="btn-primary rounded-full px-6 py-3 font-semibold"
                      >
                        {o.ctaText ?? 'Reģistrēties'}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* RIGHT: poster */}
                {showPoster && (
                  <div className="flex items-center justify-center md:pl-4">
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ minHeight: 220, height: '100%' }}
                      aria-hidden="true"
                    >
                      <img
                        src={posterSrc}
                        alt={o.title || 'Piedāvājums'}
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

        <motion.section
          variants={item}
          className="mb-6 relative z-10 rounded-2xl border border-brand bg-brand-50 p-5 shadow-soft"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-darkblue-700">
            {general.treatmentDiscountTitle}
          </h2>
          <p className="mt-2 text-slate-700">
            {general.treatmentDiscountText}
          </p>
        </motion.section>

        {general.note && (
          <motion.p className="text-xs text-slate-500 mt-4" variants={item}>
            {general.note}
          </motion.p>
        )}
      </motion.div>
    </AnimatedSection>
  )
}
