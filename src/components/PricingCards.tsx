import { useMemo, useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { PRICING, type PriceGroup, type PriceItem } from '../data/pricing'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

const ANIM_DURATION = 0.3

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

function isMobile() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
}

function getHeaderOffset(): number {
  const sticky = document.querySelector('header.sticky') as HTMLElement | null
  return sticky ? sticky.getBoundingClientRect().height : 76
}

function scrollToElement(id: string, offset = 16) {
  return new Promise<void>((resolve) => {
    const el = document.getElementById(id)
    if (!el) {
      resolve()
      return
    }

    const rect = el.getBoundingClientRect()
    const targetY = window.scrollY + rect.top - getHeaderOffset() - offset
    const startY = window.scrollY
    const diff = targetY - startY
    
    if (Math.abs(diff) < 2) {
      resolve()
      return
    }

    const duration = 400
    const start = performance.now()

    const easeOutQuart = (t: number) => {
      return 1 - Math.pow(1 - t, 4)
    }

    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutQuart(progress)
      
      window.scrollTo(0, startY + diff * eased)
      
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        resolve()
      }
    }
    
    requestAnimationFrame(step)
  })
}

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

function GroupCard({ 
  group, 
  isOpen, 
  onToggle 
}: { 
  group: PriceGroup
  isOpen: boolean
  onToggle: () => void
}) {
  const id = slugify(group.title)
  const range = useMemo(() => groupRange(group.items), [group.items])
  const summary = range ? (range.max > range.min ? `€${range.min}–€${range.max}` : `nuo €${range.min}`) : '—'

  return (
    <motion.div
      layout="position"
      id={id}
      className={clsx(
        'rounded-2xl border shadow-soft overflow-hidden self-start transition-all duration-200 scroll-mt-28 md:scroll-mt-32',
        isOpen
          ? 'bg-brand-50 border-brand ring-2 ring-white shadow-lg'
          : 'bg-brand-50 border-brand hover:bg-brand-100 hover:shadow-md'
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        className={clsx(
          'w-full flex items-center justify-between gap-4 px-4 py-4 text-left min-h-[92px] transition-colors duration-200',
          isOpen ? 'border-b border-brand/40' : 'border-b border-brand/30'
        )}
      >
        <div className="flex items-center gap-3">
          <span
            className={clsx(
              'w-9 h-9 rounded-xl grid place-items-center transition-all duration-200',
              isOpen ? 'bg-brand-100 text-brand scale-105' : 'bg-brand-50 text-brand'
            )}
          >
            <Icon title={group.title} />
          </span>
          <div className="min-w-0">
            <div className="font-bold truncate text-slate-900">{group.title}</div>
            <div className="text-xs text-gray-600">{summary} • {group.items.length} poz.</div>
          </div>
        </div>
        <span className={clsx(
          'text-sm text-gray-600 transition-transform duration-200',
          isOpen && 'rotate-180'
        )}>
          ▾
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${id}-content`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              duration: ANIM_DURATION,
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: ANIM_DURATION * 0.7 }
            }}
            className="overflow-hidden"
            style={{ willChange: 'height, opacity' }}
          >
            <div className="px-2 py-2">
              <div className="rounded-xl bg-white border border-brand/30 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-slate-100">
                    {group.items.map((p, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors duration-150">
                        <td className="p-3 align-top">
                          <span className="text-slate-900">{p.name}</span>
                          {p.note && <span className="block text-xs text-gray-600 mt-0.5">{p.note}</span>}
                        </td>
                        <td className="p-3 w-40 font-semibold text-right whitespace-nowrap text-darkblue-700">
                          {fmt(p.from, p.to)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function PricingCards() {
  const [openId, setOpenId] = useState<string | null>(null)
  const location = useLocation()
  const isAnimatingRef = useRef(false)

  const handleToggle = async (id: string, willOpen: boolean) => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true

    if (!willOpen) {
      setOpenId(null)
      isAnimatingRef.current = false
      return
    }

    // If there's an open card that's not the current one
    if (openId && openId !== id) {
      setOpenId(null)
      await new Promise(resolve => setTimeout(resolve, ANIM_DURATION * 1000))
    }

    setOpenId(id)
    
    // Wait for the animation to start rendering
    await new Promise(resolve => setTimeout(resolve, 30))
    
    // Scroll to the element
    await scrollToElement(id, isMobile() ? 8 : 16)
    
    isAnimatingRef.current = false
  }

  useEffect(() => {
    if (!location.hash) return
    
    const id = slugify(decodeURIComponent(location.hash.slice(1)))
    if (!PRICING.some(g => slugify(g.title) === id)) return

    const openFromHash = async () => {
      if (openId && openId !== id) {
        setOpenId(null)
        await new Promise(resolve => setTimeout(resolve, ANIM_DURATION * 1000))
      }
      
      setOpenId(id)
      await new Promise(resolve => setTimeout(resolve, 80))
      scrollToElement(id, isMobile() ? 8 : 16)
    }

    openFromHash()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.04,
        delayChildren: 0.08 
      } 
    },
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
  }

  return (
    <motion.div
      className="grid gap-6 md:grid-cols-2 items-start"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {PRICING.map((g) => {
        const id = slugify(g.title)
        const isOpen = openId === id
        return (
          <motion.div key={g.title} variants={itemVariants} layout="position">
            <GroupCard
              group={g}
              isOpen={isOpen}
              onToggle={() => handleToggle(id, !isOpen)}
            />
          </motion.div>
        )
      })}
    </motion.div>
  )
}