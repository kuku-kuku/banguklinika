import { useMemo, useState, useEffect, useRef } from 'react'
import { PRICING, type PriceGroup, type PriceItem } from '../data/pricing'
import clsx from 'clsx'

/* ========= Timings / Easing ========= */
const OPEN_MS = 320
const CLOSE_MS = 260
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

/* ======== Mobile smooth reveal ======== */
const ROW_BASE_DELAY = 200
const PER_ROW_DELAY = 120
const TEXT_DURATION = 800
const PRICE_DELAY = 300

/* ========= Eilutės, kurioms rodom tik fiksuotą kainą (be „nuo") ========= */
const FORCE_EXACT = new Set<string>([
  // Suaugusiesiems
  'Konsultacija, profilaktinis patikrinimas, gydymo plano sudarymas',
  'Nuskausminimas',
  'Vienkartinės priemonės',
  'Nuotrauka',
  'Koferdamo sistemos naudojimas',
  // Vaikams
  'Konsultacija, profilaktinis patikrinimas',
  // Protezavimas
  'CEREC vainikėlis (ant implanto)',
  'Alginatinis atspaudas',
  'Sąkandžio registracija',
  'Atspaudai (silikonas/skenavimas)',
  'Seno vainikėlio nuėmimas',
  // Implantai
  'Straumann® implantas',
  'Medentika® implantas',
  // Higiena
  'Fluorozinio danties padengimas su ICON',
])

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
  const { name, from, to } = p
  const forceExact = FORCE_EXACT.has(name)

  if (from == null) return '—'
  if (to != null) return `€${from}–${to}`
  return forceExact ? `€${from}` : `nuo €${from}`
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

/* ========= Enhanced Icons ========= */
function Icon({ title }: { title: string }) {
  const t = title.toLowerCase()
  // Higiena
  if (t.includes('higien')) return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-label="Higiena">...</svg>
  // Balinimas
  if (t.includes('balin')) return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-label="Balinimas">...</svg>
  // Implantai
  if (t.includes('implant')) return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-label="Implantai">...</svg>
  // Protezavimas
  if (t.includes('protez')) return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-label="Protezavimas">...</svg>
  // Vaikai
  if (t.includes('vaik')) return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-label="Vaikų gydymas">...</svg>
  // Suaugusieji
  if (t.includes('gydym') || t.includes('suaugus')) return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-label="Gydymas suaugusiems">...</svg>
  // Default
  return <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-label="Paslauga">...</svg>
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
  const summary = range ? (range.max > range.min ? `€${range.min}–€${range.max}` : `nuo €${range.min}`) : '—'
  const reduceMotion = usePrefersReducedMotion()

  return (
    <div
      id={id}
      className={clsx(
        'w-full rounded-2xl border shadow-soft overflow-hidden transition-colors',
        open
          ? 'bg-brand-50 border-brand ring-2 ring-brand/30 shadow-lg'
          : 'bg-brand-50 border-brand hover:bg-brand-100 hover:shadow-md',
        'scroll-mt-28 md:scroll-mt-32',
      )}
      style={{ contain: 'layout paint', transform: 'translateZ(0)' }}
    >
      <button
        onClick={() => onToggle(!open)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left min-h-[92px] transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className={clsx('w-9 h-9 rounded-xl grid place-items-center transition-colors', open ? 'bg-brand-100 text-brand' : 'bg-brand-50 text-brand')}>
            <Icon title={group.title} />
          </span>
          <div className="min-w-0">
            <div className="font-bold truncate text-slate-900">{group.title}</div>
            <div className="text-xs text-gray-600">{summary} • {group.items.length} poz.</div>
          </div>
        </div>
        <span
          className={clsx('text-sm text-gray-600 transition-transform', open && 'rotate-180')}
          style={{ transitionDuration: `${OPEN_MS}ms` }}
        >
          ▾
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
            className="px-2 py-2"
            style={{
              transition: `transform 160ms ${EASE}, opacity 160ms ${EASE}`,
              transformOrigin: 'top left',
              transform: open ? 'scaleY(1) translateZ(0)' : 'scaleY(0.995) translateY(-1px) translateZ(0)',
              opacity: open ? 1 : 0.98,
              willChange: 'transform,opacity',
              contain: 'content',
            }}
          >
            <div className="rounded-xl bg-white border border-brand/30 overflow-hidden">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-100">
                  {group.items.map((p, i) => {
                    const doAnimation = !!(open && !reduceMotion)
                    const rowDelay = doAnimation ? ROW_BASE_DELAY + i * PER_ROW_DELAY : 0

                    return (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-3 align-top">
                          <span 
                            className="text-slate-900 inline-block"
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
                              className="block text-xs text-gray-600 mt-0.5"
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
                          className="p-3 w-28 sm:w-36 md:w-40 font-semibold text-right whitespace-nowrap text-darkblue-700"
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
export default function PricingCards() {
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
    if (!PRICING.some((g) => slugify(g.title) === id)) return

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
    <div className="w-full mx-auto max-w-[1400px] px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {PRICING.map((g) => {
          const id = slugify(g.title)
          const isOpen = openIds.has(id)
          return (
            <div key={g.title} className="w-full will-change-transform">
              <GroupCard
                group={g as PriceGroup}
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
