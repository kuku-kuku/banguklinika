// src/components/FAQ.tsx
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const QA = [
  { q: 'Ar balinimas saugus?', a: 'Taip, taikant klinikinius protokolus ir individualią priežiūrą – procedūra saugi.' },
  { q: 'Ar dedame Straumann implantus?', a: 'Taip, dirbame su Straumann® ir Medentika® sistemomis.' },
  { q: 'Ar darote CEREC vainikėlius per 1 vizitą?', a: 'Taip, daugeliu atvejų vainikėlis ar įklotas pagaminamas tą pačią dieną.' },
]

export default function FAQ() {
  // jei norėsi: vienas atidarytas vienu metu -> saugok index vietoj bool
  return (
    <div className="space-y-3">
      {QA.map((item, i) => (
        <Row key={i} q={item.q} a={item.a} />
      ))}
    </div>
  )
}

function Row({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const innerRef = useRef<HTMLDivElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const roRef = useRef<ResizeObserver | null>(null)

  // Išmatuojam aukštį kai atsiveria / keičiasi turinys
  useLayoutEffect(() => {
    const el = innerRef.current
    if (!el) return
    const h = el.scrollHeight
    setHeight(open ? h : 0)
  }, [open, q, a])

  // Reaguojam į turinio/perlūžių pokyčius, kai atidaryta
  useEffect(() => {
    const el = innerRef.current
    if (!el) return
    if (roRef.current) roRef.current.disconnect()
    roRef.current = new ResizeObserver(() => {
      if (!open) return
      setHeight(el.scrollHeight)
    })
    roRef.current.observe(el)
    return () => roRef.current?.disconnect()
  }, [open])

  // mažiau jank: privertžiam naršyklę atlikti tik height perėjimą
  const transitionStyle: React.CSSProperties = { transition: 'height 300ms ease' }

  const ctrlId = q.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="border border-gray-200 rounded-2xl bg-white">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between text-left px-4 py-3 font-medium"
        aria-expanded={open}
        aria-controls={ctrlId}
      >
        <span>{q}</span>
        <span
          className={`ml-3 inline-block select-none transition-transform duration-300 will-change-transform ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        >
          ⌄
        </span>
      </button>

      {/* Išorinis „aukščio“ konteineris – animuojam tik height */}
      <div
        ref={wrapperRef}
        id={ctrlId}
        style={{ height, ...transitionStyle }}
        className="overflow-hidden"
        aria-hidden={!open}
        role="region"
      >
        {/* Vidinis natūralaus aukščio blokas (matuojamas) */}
        <div ref={innerRef} className="px-4 pb-4 text-sm text-gray-600">
          {a}
        </div>
      </div>
    </div>
  )
}
