import { useMemo, useState, useEffect, useRef } from 'react'
import clsx from 'clsx'

/* ========= Types ========= */
type PriceItem = { name: string; from?: number; to?: number; note?: string; exact?: boolean }
type PriceGroup = { title: string; items: PriceItem[] }

/* ========= Timings / Easing ========= */
const OPEN_MS = 320
const CLOSE_MS = 260
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'
const ROW_BASE_DELAY = 200
const PER_ROW_DELAY = 120
const TEXT_DURATION = 800
const PRICE_DELAY = 300

/* ========= Latvian pricing data ========= */
const PRICING_LV: PriceGroup[] = [
  {
    title: "Zobu ārstniecība (pieaugušajiem)",
    items: [
      { name: "Konsultācija, profilaktiskā apskate, ārstniecības plāna sastādīšana", from: 20, exact: true },
      { name: "Zoba plombēšana ar gaismas plombu", from: 70, to: 90 },
      { name: "Zoba plombēšana ar stikla jonomēra plombu", from: 40, to: 60 },
      { name: "Ārstnieciskais ieliktnis (kalcija vai stikla jonomēra)", from: 15 },
      { name: "Pagaidu plomba", from: 40 },
      { name: "Anestēzija", from: 10, exact: true },
      { name: "Vienreizlietojamie materiāli", from: 15, exact: true },
      { name: "Rentgena uzņēmums", from: 10, exact: true },
      { name: "Koferdama sistēmas izmantošana", from: 10, exact: true },
    ],
  },
  {
    title: "Zobu ārstniecība (bērniem)",
    items: [
      { name: "Konsultācija, profilaktiskā apskate", from: 20, exact: true },
      { name: "Piena zobu ārstniecība", from: 50 },
      { name: "Stikla jonomēra plomba", from: 30 },
      { name: "Kompomēra plomba", from: 30 },
      { name: "Komplicēta kariesa ārstniecība", from: 60 },
      { name: "Apmeklējums līdz 30 min., ja bērns nepakļaujas ārstniecībai", from: 30 },
    ],
  },
  {
    title: "Endodontija",
    items: [
      { name: "Primārā endodontiskā palīdzība", from: 70 },
      { name: "Kanāla medikamenti", from: 30 },
      { name: "Viena zoba saknes kanāla ķīmiski mehāniskā apstrāde", from: 35 },
      { name: "Viena zoba saknes kanāla plombēšana", from: 35 },
    ],
  },
  {
    title: "Mutes higiēna",
    items: [
      { name: "Pilna profesionālā mutes higiēna", from: 60, to: 80 },
      { name: "Atkārtota mutes higiēna", from: 50 },
      { name: "Fluora laka aplikācija", from: 20 },
      { name: "Fluorozēta zoba pārklāšana ar ICON", from: 60, exact: true },
    ],
  },
  {
    title: "Zobu balināšana",
    items: [
      { name: "Kabineta zobu balināšana BEYOND® sistēmā", from: 250, note: "BEYOND® sistēma" },
      { name: "Balināšanas kapu nospiedumi", from: 30 },
      { name: "Balināšanas kapes (2 kapes + balināšanas želeja)", from: 200, note: "2 kapes + želejas" },
      { name: "Zoba rotājums", from: 50 },
    ],
  },
  {
    title: "Mutes ķirurģija",
    items: [
      { name: "Kaula augmentācija", from: 150, to: 600 },
      { name: "Saknes ekstrakcija", from: 60, to: 80 },
      { name: "Zoba ekstrakcija", from: 80, to: 100 },
      { name: "Komplicēta trešo apakšžokļa molāru ekstrakcija", from: 120, to: 150 },
    ],
  },
  {
    title: "Zobu protezēšana",
    items: [
      { name: "CEREC vainags (uz zoba)", from: 400 },
      { name: "CEREC vainags (uz implanta)", from: 450, exact: true },
      { name: "CEREC uzklājs, laminēts vainags", from: 600 },
      { name: "Metālkeramikas vainags", from: 350 },
      { name: "Bezmetāla E-max keramikas vainags (uz zoba)", from: 400 },
      { name: "Bezmetāla E-max keramikas vainags (uz implanta)", from: 450 },
      { name: "Cirkonija keramikas vainags (uz zoba)", from: 400 },
      { name: "Cirkonija keramikas vainags (uz implanta)", from: 450 },
      { name: "Laminēts vainags", from: 600 },
      { name: "Pagaidu vainags (kabinetā)", from: 40 },
      { name: "Pagaidu vainags (laboratorijā)", from: 70 },
      { name: "Stikla šķiedras tapīte", from: 120 },
      { name: "Metāliskā KKĪ", from: 70, to: 100 },
      { name: "Nospiedumi (silikons/skenēšana)", from: 150, exact: true },
      { name: "Balsti uz implantiem (Medentika®, Straumann®)", from: 200, note: "Medentika®, Straumann®" },
      { name: "Zobu plāksnes", from: 350 },
      { name: "Veca vainaga noņemšana", from: 50, exact: true },
      { name: "Alginātiskais nospiedums", from: 15, exact: true },
      { name: "Sakoduma reģistrācija", from: 10, exact: true },
    ],
  },
  {
    title: "Implanti",
    items: [
      { name: "Straumann® implants", from: 650, note: "Straumann®", exact: true },
      { name: "Medentika® implants", from: 550, note: "Medentika®", exact: true },
      { name: "Sinusa pacelšanas operācija", from: 500, to: 700, exact: true },
    ],
  },
  {
    title: "Zobu izlīdzināšana (pieaugušajiem)",
    items: [
      { name: "Konsultācija par zobu izlīdzināšanu", from: 50 },
      { name: "Zobu izlīdzināšana ar ORDOLINE kapu sistēmu", from: 1800, to: 4000, note: "ORDOLINE sistēma" },
    ],
  },
  {
    title: "Estētiskā zobu plombēšana",
    items: [
      { name: "Estētiskā viena zoba plombēšana", from: 150, to: 200 },
      { name: "Estētiskās plombas pulēšana (1 zobam)", from: 29 },
    ],
  },
]

/* ========= Utils ========= */
function slugify(t: string) {
  return t
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function fmtItem(p: PriceItem) {
  const { from, to } = p
  if (from == null) return '—'
  if (to != null) return `€${from}–${to}`
  return p.exact ? `€${from}` : `no €${from}`
}

function groupRange(items: PriceItem[]) {
  let min = Infinity, max = 0
  for (const it of items) {
    if (typeof it.from === 'number') min = Math.min(min, it.from)
    const upper = typeof it.to === 'number' ? it.to : (typeof it.from === 'number' ? it.from : 0)
    max = Math.max(max, upper)
  }
  if (!isFinite(min)) return null
  return { min, max }
}

function useIsMobile() {
  const [mobile, setMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false
  )
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(max-width: 767px)')
    const handler = () => setMobile(mql.matches)
    handler()
    mql.addEventListener?.('change', handler)
    return () => mql.removeEventListener?.('change', handler)
  }, [])
  return mobile
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = () => setReduced(!!mq.matches)
    handler()
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [])
  return reduced
}

function getHeaderOffset(): number {
  const sticky = document.querySelector('header.sticky') as HTMLElement | null
  return sticky ? sticky.getBoundingClientRect().height : 76
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function smoothScrollTo(targetY: number, duration = 420) {
  const startY = window.scrollY
  const diff = targetY - startY
  if (Math.abs(diff) < 2) return Promise.resolve()
  return new Promise<void>((resolve) => {
    const start = performance.now()
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const y = startY + diff * easeInOutCubic(p)
      window.scrollTo(0, y)
      if (p < 1) requestAnimationFrame(step)
      else resolve()
    }
    requestAnimationFrame(step)
  })
}

async function smoothAlignToElement(id: string, offset = 16, ms = 320) {
  const el = document.getElementById(id)
  if (!el) return
  const rect = el.getBoundingClientRect()
  const targetY = window.scrollY + rect.top - getHeaderOffset() - offset
  await smoothScrollTo(targetY, ms)
}

/* ========= Accordion item ========= */
function GroupCard({
  group,
  open,
  onToggle,
}: {
  group: PriceGroup
  open: boolean
  onToggle: (willOpen: boolean) => void
}) {
  const id = slugify(group.title)
  const range = useMemo(() => groupRange(group.items), [group.items])
  const summary = range ? (range.max > range.min ? `€${range.min}–€${range.max}` : `no €${range.min}`) : '—'
  const reduceMotion = usePrefersReducedMotion()

  return (
    <div
      id={id}
      className={clsx(
        'group w-full rounded-2xl border transition-all duration-300 transform-gpu will-change-transform overflow-hidden',
        open
          ? 'bg-white border-primary-200 shadow-md ring-4 ring-primary-50'
          : 'bg-slate-50 border-transparent shadow-sm hover:bg-white hover:border-slate-200 hover:shadow-md hover:-translate-y-0.5',
        'scroll-mt-28 md:scroll-mt-32',
      )}
      style={{ contain: 'layout paint', transform: 'translateZ(0)' }}
    >
      <button
        onClick={() => onToggle(!open)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left min-h-[92px] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-50"
      >
        <div className="flex flex-col items-start min-w-0">
          <div className={clsx(
            'font-semibold text-lg truncate transition-colors duration-300',
            open ? 'text-primary-600' : 'text-slate-800 group-hover:text-primary-600'
          )}>
            {group.title}
          </div>
          <div className="text-sm text-slate-500 font-medium mt-1">
            {summary} <span className="opacity-60 font-normal ml-1">• {group.items.length} poz.</span>
          </div>
        </div>

        <span
          className={clsx(
            'w-8 h-8 flex items-center justify-center transition-all text-slate-400 group-hover:text-primary-500 shrink-0 rounded-full',
            open ? 'rotate-180 text-primary-500 bg-primary-50' : 'group-hover:bg-slate-100'
          )}
          style={{ transitionDuration: `${OPEN_MS}ms` }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={id}
        className="grid will-change-[grid-template-rows,opacity]"
        style={{
          gridTemplateRows: open ? '1fr' : '0fr',
          opacity: open ? 1 : 0,
          transition: `grid-template-rows ${open ? OPEN_MS : CLOSE_MS}ms ${EASE}, opacity ${open ? OPEN_MS : CLOSE_MS}ms ${EASE}`,
          transform: 'translateZ(0)',
        }}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0"
            style={{
              transition: `transform 160ms ${EASE}, opacity 160ms ${EASE}`,
              transformOrigin: 'top left',
              transform: open ? 'scaleY(1) translateZ(0)' : 'scaleY(0.995) translateY(-1px) translateZ(0)',
              opacity: open ? 1 : 0.98,
              willChange: 'transform,opacity',
              contain: 'content',
            }}
          >
            <div className="rounded-xl bg-white border border-slate-100 shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {group.items.map((p, i) => {
                    const doAnimation = !!(open && !reduceMotion)
                    const rowDelay = doAnimation ? ROW_BASE_DELAY + i * PER_ROW_DELAY : 0
                    return (
                      <tr key={i} className="hover:bg-slate-50/80 transition-colors border-b border-slate-50 last:border-0">
                        <td className="p-4 align-top">
                          <span
                            className="text-slate-800 font-medium inline-block"
                            style={doAnimation ? {
                              opacity: 0,
                              transform: 'translateY(16px)',
                              animation: `fadeInUp ${TEXT_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1) ${rowDelay}ms forwards`
                            } : undefined}
                          >
                            {p.name}
                          </span>
                          {p.note && (
                            <span
                              className="block text-xs text-slate-500 mt-1"
                              style={doAnimation ? {
                                opacity: 0,
                                transform: 'translateY(12px)',
                                animation: `fadeInUp 600ms cubic-bezier(0.16, 1, 0.3, 1) ${rowDelay + TEXT_DURATION - 200}ms forwards`
                              } : undefined}
                            >
                              {p.note}
                            </span>
                          )}
                        </td>
                        <td
                          className="p-4 w-28 sm:w-36 md:w-40 font-semibold text-right whitespace-nowrap text-primary-600"
                          style={doAnimation ? {
                            opacity: 0,
                            transform: 'translateY(16px) scale(0.94)',
                            animation: `fadeInScale 700ms cubic-bezier(0.16, 1, 0.3, 1) ${rowDelay + PRICE_DELAY}ms forwards`
                          } : undefined}
                        >
                          {fmtItem(p)}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: translateY(16px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}} />
    </div>
  )
}

/* ========= Page ========= */
export default function PricingCardsLv() {
  const [hash, setHash] = useState('')
  const mobile = useIsMobile()
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())
  const animatingRef = useRef(false)
  const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHash(window.location.hash)
    }
  }, [])

  const handleToggle = async (id: string, willOpen: boolean) => {
    if (animatingRef.current) return
    animatingRef.current = true
    try {
      if (!willOpen) {
        setOpenIds(prev => { const next = new Set(prev); next.delete(id); return next })
        await wait(CLOSE_MS + 40)
        return
      }
      if (mobile) {
        setOpenIds(prev => new Set(prev).add(id))
        await wait(32)
        await smoothAlignToElement(id, 20, OPEN_MS)
      } else {
        setOpenIds(new Set())
        await wait(CLOSE_MS + 40)
        setOpenIds(new Set([id]))
        await wait(40)
        await smoothAlignToElement(id, 16, OPEN_MS - 40)
      }
    } finally {
      animatingRef.current = false
    }
  }

  useEffect(() => {
    if (!hash) return
    const id = slugify(decodeURIComponent(hash.slice(1)))
    if (!PRICING_LV.some((g) => slugify(g.title) === id)) return
    let cancelled = false
    const run = async () => {
      if (animatingRef.current) return
      animatingRef.current = true
      try {
        if (mobile) {
          setOpenIds(prev => new Set(prev).add(id))
          await wait(32)
          if (!cancelled) await smoothAlignToElement(id, 20, OPEN_MS)
        } else {
          setOpenIds(new Set())
          await wait(CLOSE_MS + 40)
          setOpenIds(new Set([id]))
          await wait(40)
          if (!cancelled) await smoothAlignToElement(id, 16, OPEN_MS - 40)
        }
      } finally {
        animatingRef.current = false
      }
    }
    run()
    return () => { cancelled = true }
  }, [hash, mobile])

  return (
    <div className="w-full mx-auto max-w-5xl px-0 sm:px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start">
        {PRICING_LV.map((g) => {
          const id = slugify(g.title)
          const isOpen = openIds.has(id)
          return (
            <div key={g.title} className="w-full will-change-transform">
              <GroupCard
                group={g}
                open={isOpen}
                onToggle={(willOpen) => handleToggle(id, willOpen)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
