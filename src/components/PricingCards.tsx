import { useMemo, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { PRICING, type PriceGroup, type PriceItem } from '../data/pricing'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

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

function GroupCard({ group, isOpen, onToggle }: { group: PriceGroup; isOpen: boolean; onToggle: () => void }) {
  const id = slugify(group.title)
  const range = useMemo(() => groupRange(group.items), [group.items])
  const summary = range ? (range.max > range.min ? `€${range.min}–€${range.max}` : `nuo €${range.min}`) : '—'

  return (
    <motion.div
      layout="position"
      className="card overflow-hidden self-start scroll-mt-28 md:scroll-mt-32"
      id={id}
    >
      <button
        onClick={onToggle}
        className={clsx(
          'w-full flex items-center justify-between gap-4 px-4 py-4',
          'bg-gray-50 border-b border-gray-100 min-h-[92px] text-left'
        )}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
      >
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-primary-50 text-primary-700 grid place-items-center">
            <Icon title={group.title} />
          </span>
          <div className="min-w-0">
            <div className="font-semibold truncate">{group.title}</div>
            <div className="text-xs text-gray-500">{summary} • {group.items.length} poz.</div>
          </div>
        </div>
        <span className={clsx('text-sm text-gray-500 transition', isOpen && 'rotate-180')}>▾</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${id}-content`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="overflow-hidden"
          >
            <div className="px-2 py-2">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {group.items.map((p, i) => (
                    <tr key={i}>
                      <td className="p-3 align-top">
                        {p.name}
                        {p.note && <span className="block text-xs text-gray-500">{p.note}</span>}
                      </td>
                      <td className="p-3 w-40 font-medium text-right whitespace-nowrap">{fmt(p.from, p.to)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

  // atidaryk konkrečią kortą jei ateinam su #hash ir nuscrollink
  useEffect(() => {
    if (!location.hash) return
    const id = slugify(decodeURIComponent(location.hash.slice(1)))
    if (PRICING.some(g => slugify(g.title) === id)) {
      setOpenId(id)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  // Stagger animacijai
  const containerVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
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
              onToggle={() => {
                const willOpen = !isOpen
                setOpenId(willOpen ? id : null)
                if (willOpen) {
                  // mažas delay, kad DOM suspėtų pažymėti atidarymą ir scroll-margin suveiktų
                  setTimeout(() => {
                    const el = document.getElementById(id)
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 40)
                }
              }}
            />
          </motion.div>
        )
      })}
    </motion.div>
  )
}
