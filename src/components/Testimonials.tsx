import { TESTIMONIALS } from '../data/testimonials'
import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI(prev => (prev + 1) % TESTIMONIALS.length), 4000)
    return () => clearInterval(t)
  }, [])
  const current = TESTIMONIALS[i]
  return (
    <div className="card p-6 md:p-8 text-center">
      <p className="text-lg leading-relaxed">“{current.text}”</p>
      <p className="mt-3 text-sm text-gray-600">— {current.name}</p>
      <div className="mt-4 flex justify-center gap-2">
        {TESTIMONIALS.map((_, idx) => (
          <span key={idx} className={`w-2 h-2 rounded-full ${idx===i?'bg-primary-600':'bg-gray-300'}`} />
        ))}
      </div>
    </div>
  )
}
