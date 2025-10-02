import { useMemo, useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { PRICING, type PriceGroup, type PriceItem } from '../data/pricing'
import clsx from 'clsx'

/* ========= Timings / Easing ========= */
const OPEN_MS = 320
const CLOSE_MS = 260
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)' // springy, bet glotnus

/* ======== Mobile typewriter (tik pirmai ir antrai grupei) ======== */
const ROW_BASE_DELAY = 220        // pauzė prieš prasidedant pirmai eilutei
const PER_ROW_DELAY = 160         // tarpas tarp eilučių (vorelė)
const MAX_STAGGER_ROWS = 10       // nerodome vorelės iki begalybės
const PER_CHAR_MS = 18            // kiek ms skiriame vienai raidei
const MIN_DUR_MS = 520            // min animacijos trukmė
const MAX_DUR_MS = 1400           // max animacijos trukmė

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

function fmt(from?: number, to?: number) {
  if (from == null) return '—'
  if (to != null) return `€${from}–€${to}`
  return `nuo €${from}`
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

/* ========= Global CSS (typewriter + fade) ========= */
const typewriterCSS = `
@keyframes twWidth { from { width: 0ch } to { width: var(--chars,0)ch } }
@keyframes twFade { from { opacity: 0; transform: translate3d(0,4px,0) } to { opacity: 1; transform: translate3d(0,0,0) } }

/* rašymas raidė po raidės */
.tw {
  display:inline-block;
  white-space:nowrap;
  overflow:hidden;
  will-change: width;
  animation-name: twWidth;
  animation-duration: var(--twDur, 700ms);
  animation-timing-function: steps(var(--chars, 20), end);
  animation-fill-mode: both;
  backface-visibility: hidden;
  transform: translateZ(0);
}

/* švelnus atsiradimas kitų elementų (kaina, pastaba) */
.tw-fade {
  opacity: 0;
  animation: twFade var(--twFadeDur, 420ms) var(--twFadeEase, cubic-bezier(0.22, 1, 0.36, 1)) var(--twFadeDelay, 0ms) forwards;
  will-change: opacity, transform;
  backface-visibility: hidden;
}
`

/* ========= Icons (sutrumpinta) ========= */
function Icon({ title }: { title: string }) {
  const t = title.toLowerCase()
  if (t.includes('higien')) return (<svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M4 10a8 8 0 0 1 16 0v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7Z" fill="currentColor" opacity=".15"/><path d="M12 3v6m0-6a8 8 0 0 1 8 8v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6a8 8 0 0 1 8-8Z" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>)
  if (t.includes('balin')) return (<svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2l2.35 4.76L20 8l-4 3.9.94 5.5L12 15.8 7.06 17.4 8 11.9 4 8l5.65-1.24L12 2z" fill="currentColor" opacity=".25"/><path d="M12 4.6l1.6 3.2 3.53.77-2.6 2.47.6 3.5L12 12.9l-3.13 1.64.6-3.5L6.87 8.6l3.53-.77L12 4.6z" fill="currentColor"/></svg>)
  return (<svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 3c4 0 7 3 7 7v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-7c0-4 3-7 7-7z" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>)
}

/* ========= Accordion item (desktop elgsena nepakeista) ========= */
function GroupCard({
  group,
  open,
  onToggle,
  /* tik mobile, tik pirmoms 2 – eilutės „rašomos“ po vieną */
  staggerRows = false,
}: {
  group: PriceGroup
  open: boolean
  onToggle: (willOpen: boolean) => void
  staggerRows?: boolean
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
      {/* injectinam CSS (saugiai galima dėti ir vieną kartą app lygiu) */}
      <style dangerouslySetInnerHTML={{ __html: typewriterCSS }} />

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

      {/* GRID trick: 0fr -> 1fr + opacity */}
      <div
        id={`${id}-panel`}
        className="grid will-change-[grid-template-rows,opacity]"
        style={{
          gridTemplateRows: open ? '1fr' : '0fr',
          opacity: open ? 1 : 0,
          transition: `grid-template-rows ${open ? OPEN_MS : CLOSE_MS}ms ${EASE}, opacity ${open ? OPEN_MS : CLOSE_MS}ms ${EASE}`,
          transform: 'translateZ(0)',
        }}
      >
        <div className="min-h-0 overflow-hidden">
          {/* vidinis „cushion“ tik vizualui */}
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
                    const doTW = !!(staggerRows && open && !reduceMotion)
                    const cappedIndex = Math.min(i, MAX_STAGGER_ROWS)
                    const rowDelay = doTW ? ROW_BASE_DELAY + cappedIndex * PER_ROW_DELAY : 0
                    const nameLen = (p.name || '').length
                    const twDur = doTW
                      ? Math.max(MIN_DUR_MS, Math.min(MAX_DUR_MS, 300 + nameLen * PER_CHAR_MS))
                      : 0

                    return (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-3 align-top">
                          {doTW ? (
                            // „Phantom“ technika: nematomas tekstas užfiksuoja galutinį plotį,
                            // o ant viršaus absoliučiai uždedam rašomą tekstą — nelūžta lentelės layout'as.
                            <span className="relative inline-block text-slate-900">
                              <span className="invisible">{p.name}</span>
                              <span
                                className="tw absolute inset-0"
                                style={
                                  {
                                    // kiek raidžių
                                    ['--chars' as any]: nameLen,
                                    // kiek trunka rašymas
                                    ['--twDur' as any]: `${twDur}ms`,
                                    // kada pradėti šiai eilutei
                                    animationDelay: `${rowDelay}ms`,
                                  } as React.CSSProperties
                                }
                              >
                                {p.name}
                              </span>
                              {/* Pastaba – pasirodo po pavadinimo su fade */}
                              {p.note && (
                                <span
                                  className="block text-xs text-gray-600 mt-0.5 tw-fade"
                                  style={
                                    {
                                      ['--twFadeDur' as any]: '420ms',
                                      ['--twFadeEase' as any]: EASE,
                                      ['--twFadeDelay' as any]: `${rowDelay + twDur - 80}ms`,
                                    } as React.CSSProperties
                                  }
                                >
                                  {p.note}
                                </span>
                              )}
                            </span>
                          ) : (
                            <>
                              <span className="text-slate-900">{p.name}</span>
                              {p.note && <span className="block text-xs text-gray-600 mt-0.5">{p.note}</span>}
                            </>
                          )}
                        </td>

                        <td
                          className="p-3 w-28 sm:w-36 md:w-40 font-semibold text-right whitespace-nowrap text-darkblue-700"
                          style={
                            doTW
                              ? ({
                                  // kaina pasirodo po pavadinimo rašymo
                                  ['--twFadeDur' as any]: '380ms',
                                  ['--twFadeEase' as any]: EASE,
                                  ['--twFadeDelay' as any]: `${rowDelay + Math.max(180, twDur * 0.7)}ms`,
                                } as React.CSSProperties)
                              : undefined
                          }
                        >
                          {doTW ? (
                            <span className="tw-fade">{fmt(p.from, p.to)}</span>
                          ) : (
                            fmt(p.from, p.to)
                          )}
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
    </div>
  )
}

/* ========= Page ========= */
export default function PricingCards() {
  const { hash } = useLocation()
  const mobile = useIsMobile()
  // MOBILE: gali būti kelios atidarytos; DESKTOP: viena
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())
  const animatingRef = useRef(false)
  const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

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
        await wait(32) // leisti layout’ui persiskaičiuoti
        await smoothAlignToElement(id, 20, OPEN_MS)
      } else {
        // DESKTOP — be pokyčių
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

  // Hash navigacija (#grupes-pavadinimas)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash, mobile])

  return (
    // Centruotas, responsyvus
    <div className="w-full mx-auto max-w-[1400px] px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {PRICING.map((g, idx) => {
          const id = slugify(g.title)
          const isOpen = openIds.has(id)
          // Typewriter tik MOBILE ir tik pirmai-dvejai
          const staggerRows = mobile && idx < 2
          return (
            <div key={g.title} className="w-full will-change-transform">
              <GroupCard
                group={g as PriceGroup}
                open={isOpen}
                onToggle={(willOpen) => handleToggle(id, willOpen)}
                staggerRows={staggerRows}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
