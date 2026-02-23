import { useLayoutEffect, useRef, useState } from 'react'

const QA = [
  { q: 'Vai balināšana ir droša?', a: 'Jā, izmantojot klīniskos protokolus un individuālu uzraudzību — procedūra ir droša.' },
  { q: 'Vai jūs izmantojat Straumann implantus?', a: 'Jā, mēs strādājam ar Straumann® un Medentika® sistēmām.' },
  { q: 'Vai jūs izgatavojat CEREC vainagus 1 vizītes laikā?', a: 'Jā, vairumā gadījumu vainags vai uzklājs tiek izgatavots tajā pašā dienā.' },
]

export default function FAQLv() {
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

  useLayoutEffect(() => {
    const el = innerRef.current
    if (!el) return
    if (open) {
      setHeight(el.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [open])

  return (
    <div className="rounded-xl border border-primary-200 bg-white overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-darkblue-600"
        aria-expanded={open}
      >
        <span>{q}</span>
        <svg
          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        style={{ height, overflow: 'hidden', transition: 'height 220ms cubic-bezier(0.22,1,0.36,1)' }}
      >
        <div ref={innerRef} className="px-4 pb-3 text-sm text-gray-600">
          {a}
        </div>
      </div>
    </div>
  )
}
