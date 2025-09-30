import { useMemo, useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { PRICING, type PriceGroup, type PriceItem } from '../data/pricing'
import { motion, useAnimationControls } from 'framer-motion'
import clsx from 'clsx'

/* ========= Anim / timings ========= */
const BASE_DURATION = 0.26 // bazinė; reali adaptuojama pagal px
const OPEN_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]
const CLOSE_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]

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

/** Trukmė pagal px: 0.26s ~0–200px, iki ~0.52s ties 900px */
function durationFor(px: number) {
  const capped = Math.max(0, Math.min(px, 900))
  const extra = (capped / 900) * 0.26
  return +(BASE_DURATION + extra).toFixed(3)
}

/* ========= Icons ========= */
function Icon({ title }: { title: string }) {
  const t = title.toLowerCase()
  if (t.includes('higien')) return (<svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M4 10a8 8 0 0 1 16 0v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7Z" fill="currentColor" opacity=".15"/><path d="M12 3a8 8 0 0 1 8 8v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6a8 8 0 0 1 8-8Zm0 0v6" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>)
  if (t.includes('balin')) return (<svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2l2.35 4.76L20 8l-4 3.9.94 5.5L12 15.8 7.06 17.4 8 11.9 4 8l5.65-1.24L12 2z" fill="currentColor" opacity=".25"/><path d="M12 4.6l1.6 3.2 3.53.77-2.6 2.47.6 3.5L12 12.9l-3.13 1.64.6-3.5L6.87 8.6l3.53-.77L12 4.6z" fill="currentColor"/></svg>)
  if (t.includes('endodont')) return (<svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M7 3h10v10a5 5 0 0 1-5 5 5 5 0 0 1-5-5V3z" fill="currentColor" opacity=".15"/><path d="M8 3h8v9a4 4 0 0 1-8 0V3Zm4 2v10" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>)
  if (t.includes('chirurg')) return (<svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M3 17l8-8 3 3-8 8H3z" fill="currentColor"/><path d="M14 9l2-2a2 2 0 0 1 3 3l-2 2" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>)
  if (t.includes('protez')) return (<svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M6 6h12l-1 10a5 5 0 0 1-5 4 5 5 0 0 1-5-4L6 6z" fill="currentColor" opacity=".15"/><path d="M6 6h12l-1 9a5 5 0 0 1-5 4 5 5 0 0 1-5-4L6 6z" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>)
  if (t.includes('implant')) return (<svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M8 4h8v4H8z" fill="currentColor"/><path d="M10 8v8m4-8v8M8 20h8" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>)
  if (t.includes('tiesin')) return (<svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M4 12c2 3 4 4 8 4s6-1 8-4" stroke="currentColor" strokeWidth="1.6" fill="none"/><circle cx="8" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="16" cy="12" r="1" fill="currentColor"/></svg>)
  return (<svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 3c4 0 7 3 7 7v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-7c0-4 3-7 7-7z" stroke="currentColor" strokeWidth="1.6" fill="none"/></svg>)
}

/* ========= One group card (accordion) ========= */
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

  // Height animation with measured px
  const controls = useAnimationControls()
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState(0)
  const [measured, setMeasured] = useState(0)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      const h = el.scrollHeight
      setMeasured(h)
      if (open) setHeight(h)
    })
    ro.observe(el)
    setMeasured(el.scrollHeight)
    return () => ro.disconnect()
  }, [open])

  useEffect(() => {
    const target = open ? measured : 0
    const dur = durationFor(measured)
    controls.start({
      height: target,
      transition: open
        ? { duration: dur, ease: OPEN_EASE }
        : { duration: Math.max(0.18, dur * 0.75), ease: CLOSE_EASE }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, measured])

  return (
    <div
      id={id}
      className={clsx(
        'rounded-2xl border shadow-soft overflow-hidden self-start transition-colors transform-gpu will-change-transform',
        open
          ? 'bg-brand-50 border-brand ring-2 ring-brand/30 shadow-lg'
          : 'bg-brand-50 border-brand hover:bg-brand-100 hover:shadow-md',
        'scroll-mt-28 md:scroll-mt-32'
      )}
      style={{ contain: 'paint' }}
    >
      <button
        onClick={() => onToggle(!open)}
        aria-expanded={open}
        aria-controls={`${id}-content`}
        className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left min-h-[92px] transition-colors duration-150"
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
        <span className={clsx('text-sm text-gray-600 transition-transform duration-300', open && 'rotate-180')}>▾</span>
      </button>

      <motion.div
        id={`${id}-content`}
        animate={controls}
        initial={false}
        style={{
          height,
          overflow: 'hidden',
          willChange: 'height',
          contentVisibility: open ? 'visible' as any : 'auto' as any,
          containIntrinsicSize: open ? undefined : '0 400px',
        }}
      >
        {/* vidinis „cushion“ tik vizualui (nekeičia layout) */}
        <motion.div
          ref={contentRef}
          initial={false}
          animate={open ? { opacity: 1, scaleY: 1, y: 0 } : { opacity: 0.98, scaleY: 0.995, y: -1 }}
          transition={{ duration: 0.18 }}
          style={{ transformOrigin: 'top left' }}
          className="px-2 py-2"
        >
          <div className="rounded-xl bg-white border border-brand/30 overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-slate-100">
                {group.items.map((p, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors duration-100">
                    <td className="p-3 align-top">
                      <span className="text-slate-900">{p.name}</span>
                      {p.note && <span className="block text-xs text-gray-600 mt-0.5">{p.note}</span>}
                    </td>
                    {/* mobile siauresnis, md+ identiškas PC */}
                    <td className="p-3 w-28 sm:w-36 md:w-40 font-semibold text-right whitespace-nowrap text-darkblue-700">
                      {fmt(p.from, p.to)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

/* ========= Page ========= */
export default function PricingCards() {
  const { hash } = useLocation()
  const mobile = useIsMobile()
  // MOBILE: leidžiam kelias atidarytas → Set; DESKTOP: viena atidaryta
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())
  const animatingRef = useRef(false)
  const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

  const handleToggle = async (id: string, willOpen: boolean) => {
    if (animatingRef.current) return
    animatingRef.current = true
    try {
      if (!willOpen) {
        setOpenIds(prev => {
          const next = new Set(prev); next.delete(id); return next
        })
        await wait(240)
        return
      }

      if (mobile) {
        // MOBILE: neatidarom/neuždarinėjam kitų – tik pridėti šitą
        setOpenIds(prev => new Set(prev).add(id))
        await wait(32) // leisti layout’ui perskaičiuoti aukštį
        await smoothAlignToElement(id, 20, 320)
      } else {
        // DESKTOP: uždarom kitus, tada atidarom šitą (PC elgsena išlieka identiška)
        setOpenIds(new Set())
        await wait(260)
        setOpenIds(new Set([id]))
        await wait(280)
        await smoothAlignToElement(id, 16, 260)
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
          if (!cancelled) await smoothAlignToElement(id, 20, 320)
        } else {
          setOpenIds(new Set())
          await wait(260)
          setOpenIds(new Set([id]))
          await wait(280)
          if (!cancelled) await smoothAlignToElement(id, 16, 260)
        }
      } finally {
        animatingRef.current = false
      }
    }
    run()
    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash, mobile])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
  }

  return (
    // Mobile turi įtrauką; md+ paliekam 0 – PC nei kiek nesuspaustas
    <div className="px-4 sm:px-6 md:px-0">
      <motion.div
        className="grid gap-6 md:grid-cols-2 items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {PRICING.map((g) => {
          const id = slugify(g.title)
          const isOpen = openIds.has(id)
          return (
            <motion.div key={g.title} variants={itemVariants} layout="position">
              <GroupCard
                group={g as PriceGroup}
                open={isOpen}
                onToggle={(willOpen) => handleToggle(id, willOpen)}
              />
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
