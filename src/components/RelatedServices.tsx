import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { getServiceContext, langFromPath } from '../data/serviceTree'

function ArrowIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}

/** Didesnė kortelė – tos pačios kategorijos paslaugoms. */
function RelatedCard({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="group relative flex h-full min-h-[92px] items-center justify-between gap-3 overflow-hidden rounded-2xl border border-[#043F42]/12 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0ABBB5]/50 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0ABBB5]"
    >
      <img
        src="/Asset 53@2x.png"
        alt=""
        aria-hidden
        draggable={false}
        className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 select-none opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.16]"
      />
      <span className="relative z-10 text-[15px] font-semibold leading-snug text-[#043F42] transition-colors duration-200 group-hover:text-[#0ABBB5]">
        {label}
      </span>
      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4F5F4] text-[#043F42] transition-all duration-300 group-hover:bg-[#0ABBB5] group-hover:text-white">
        <ArrowIcon />
      </span>
    </Link>
  )
}

/** Kompaktiška sąrašo eilutė – visų main paslaugų sąrašui. */
function ServiceRow({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="group flex items-center justify-between gap-3 border-b border-[#043F42]/10 py-3 pr-1 text-[15px] font-medium text-[#043F42] transition-colors duration-200 hover:text-[#0ABBB5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0ABBB5] sm:py-3.5"
    >
      <span className="leading-snug">{label}</span>
      <ArrowIcon className="h-4 w-4 shrink-0 text-[#043F42]/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#0ABBB5]" />
    </Link>
  )
}

const COPY = {
  lt: {
    related: 'Susijusios paslaugos',
    all: 'Kitos odontologijos paslaugos',
    category: 'Kategorija:',
    allLink: 'Visos paslaugos',
    allHref: '/paslaugos',
    showAll: (n: number) => `Rodyti visas (+${n})`,
    showLess: 'Rodyti mažiau',
    aria: 'Kitos klinikos paslaugos',
  },
  lv: {
    related: 'Saistītie pakalpojumi',
    all: 'Citi zobārstniecības pakalpojumi',
    category: 'Kategorija:',
    allLink: 'Visi pakalpojumi',
    allHref: '/lv/pakalpojumi',
    showAll: (n: number) => `Rādīt visus (+${n})`,
    showLess: 'Rādīt mazāk',
    aria: 'Citi klīnikas pakalpojumi',
  },
} as const

interface RelatedServicesProps {
  /** Antraštė pirmam blokui (pagal nutylėjimą – pagal kalbą). */
  relatedTitle?: string
  /** Antraštė antram blokui (pagal nutylėjimą – pagal kalbą). */
  allTitle?: string
  /** Kiek main paslaugų rodyti mobile prieš „Rodyti visas“. */
  mobilePreview?: number
  className?: string
}

/**
 * Du blokai paslaugos puslapio apačioje:
 *  1. „Susijusios paslaugos“ – tos pačios main kategorijos paslaugos (main + sub).
 *  2. „Kitos odontologijos paslaugos“ – visos main paslaugos, be sub kategorijų.
 *
 * Turinys išvedamas iš `src/data/serviceTree.ts` pagal dabartinį URL –
 * naujos paslaugos atsiranda automatiškai, rankomis dėlioti nereikia.
 */
export default function RelatedServices({
  relatedTitle,
  allTitle,
  mobilePreview = 6,
  className = '',
}: RelatedServicesProps) {
  const { pathname } = useLocation()
  const [expanded, setExpanded] = useState(false)
  const t = COPY[langFromPath(pathname)]

  const { parent, isMain, related, otherMain } = useMemo(
    () => getServiceContext(pathname),
    [pathname],
  )

  if (related.length === 0 && otherMain.length === 0) return null

  const hiddenCount = Math.max(0, otherMain.length - mobilePreview)
  const previewList = otherMain.slice(0, mobilePreview)
  const restList = otherMain.slice(mobilePreview)

  return (
    <section className={`mt-14 mb-4 ${className}`} aria-label={t.aria}>
      {/* ── Blokas 1: tos pačios kategorijos paslaugos ───────────────────── */}
      {related.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="rounded-3xl border border-[#043F42]/10 bg-[#F4F5F4] p-5 sm:p-7"
        >
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-xl font-bold tracking-tight text-[#043F42] sm:text-2xl">
              {relatedTitle ?? t.related}
            </h2>
            {parent && !isMain && (
              <p className="text-sm text-slate-500">
                {t.category} <span className="font-semibold text-[#043F42]">{parent.label}</span>
              </p>
            )}
          </div>

          {/* Mobile: horizontali karuselė (netaupo vietos vertikaliai) */}
          <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {related.map(s => (
              <div key={s.to} className="w-[78%] shrink-0 snap-start">
                <RelatedCard {...s} />
              </div>
            ))}
          </div>

          {/* Desktop / tablet: tinklelis */}
          <div className="hidden gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {related.map(s => (
              <RelatedCard key={s.to} {...s} />
            ))}
          </div>
        </motion.div>
      )}

      {/* ── Blokas 2: visos main paslaugos ───────────────────────────────── */}
      {otherMain.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className={`rounded-3xl border border-[#043F42]/10 bg-white p-5 sm:p-7 ${related.length > 0 ? 'mt-4' : ''}`}
        >
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-xl font-bold tracking-tight text-[#043F42] sm:text-2xl">
              {allTitle ?? t.all}
            </h2>
            <Link
              to={t.allHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0ABBB5] hover:underline"
            >
              {t.allLink}
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Sąrašas: 1 stulpelis mobile, 2 nuo sm, 3 nuo lg */}
          <div className="sm:columns-2 sm:gap-x-10 lg:columns-3">
            {previewList.map(s => (
              <div key={s.to} className="break-inside-avoid">
                <ServiceRow {...s} />
              </div>
            ))}

            {/* Likusios – desktop matomos visada, mobile po mygtuku */}
            {restList.length > 0 && (
              <div className="hidden sm:block">
                {restList.map(s => (
                  <div key={s.to} className="break-inside-avoid">
                    <ServiceRow {...s} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {restList.length > 0 && (
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="rest"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden sm:hidden"
                >
                  {restList.map(s => (
                    <ServiceRow key={s.to} {...s} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {hiddenCount > 0 && (
            <button
              type="button"
              onClick={() => setExpanded(v => !v)}
              className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-[#043F42]/15 px-4 py-2.5 text-sm font-semibold text-[#043F42] transition hover:border-[#0ABBB5] hover:text-[#0ABBB5] sm:hidden"
              aria-expanded={expanded}
            >
              {expanded ? t.showLess : t.showAll(hiddenCount)}
              <svg
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                className={`h-3.5 w-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                aria-hidden
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          )}
        </motion.div>
      )}
    </section>
  )
}
