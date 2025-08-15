import { useState } from 'react'

const QA = [
  { q: "Ar balinimas saugus?", a: "Taip, taikant klinikinius protokolus ir individualią priežiūrą – procedūra saugi." },
  { q: "Ar dedame Straumann implantus?", a: "Taip, dirbame su Straumann® ir Medentika® sistemomis." },
  { q: "Ar darote CEREC vainikėlius per 1 vizitą?", a: "Taip, daugeliu atvejų vainikėlis ar įklotas pagaminamas tą pačią dieną." }
]

export default function FAQ() {
  return (
    <div className="space-y-3">
      {QA.map((item, i) => <Row key={i} {...item} />)}
    </div>
  )
}

function Row({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-2xl bg-white">
      <button onClick={() => setOpen(v=>!v)} className="w-full text-left px-4 py-3 font-medium">
        {q}
      </button>
      {open && <div className="px-4 pb-4 text-sm text-gray-600">{a}</div>}
    </div>
  )
}
