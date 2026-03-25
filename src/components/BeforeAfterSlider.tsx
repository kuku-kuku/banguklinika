import { useState } from 'react'

type BeforeAfterSliderProps = {
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
  className?: string
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Prieš procedūrą',
  afterAlt = 'Po procedūros',
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderX, setSliderX] = useState(50)

  const updateSlider = (clientX: number, rect: DOMRect) => {
    const x = ((clientX - rect.left) / rect.width) * 100
    setSliderX(Math.max(0, Math.min(100, x)))
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm select-none ${className}`}
    >
      <div
        className="relative w-full h-[220px] sm:h-[250px] lg:h-[280px]"
        onMouseMove={(e) => {
          if (e.buttons !== 1) return
          updateSlider(e.clientX, e.currentTarget.getBoundingClientRect())
        }}
        onClick={(e) => updateSlider(e.clientX, e.currentTarget.getBoundingClientRect())}
        onTouchMove={(e) =>
          updateSlider(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())
        }
      >
        {/* Apačioje - PO */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* Viršuje - PRIEŠ, pilno dydžio, tik nukerpama */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - sliderX}% 0 0)`,
          }}
        >
          <img
            src={beforeSrc}
            alt={beforeAlt}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Labeliai */}
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow">
          Prieš
        </span>

        <span className="absolute top-3 right-3 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white shadow">
          Po
        </span>

        {/* Vertikali linija */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.08)]"
          style={{ left: `calc(${sliderX}% - 1px)` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
          style={{ left: `${sliderX}%` }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white shadow-lg">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-slate-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M8 6l-6 6 6 6" />
              <path d="M16 6l6 6-6 6" />
            </svg>
          </div>
        </div>

        {/* Nematomas range viršuje */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderX}
          onChange={(e) => setSliderX(Number(e.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          aria-label="Before and after slider"
        />
      </div>
    </div>
  )
}