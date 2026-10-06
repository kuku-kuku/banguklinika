import { useEffect, useRef, useState } from 'react'

/* ----------------------------------------------------------------------------
 * TideLine — the site's visual signature.
 *
 * "Bangų" means waves, so one turquoise line runs the length of the site: a
 * slow-drifting wave here, the section divider in <WaveDivider>, and the
 * self-drawing path in the treatment journey. One idea in three places rather
 * than wave ornaments scattered around.
 *
 * Cost control:
 *   - two copies of one path translated on the X axis, so the loop is seamless
 *     and the only animated property is `transform` (compositor-only)
 *   - the animation is paused whenever the line is off-screen
 *   - prefers-reduced-motion stops the drift entirely; the line still renders
 * -------------------------------------------------------------------------- */

/** One wavelength, 480 wide. Asymmetric crests so it reads as water, not a sine. */
const WAVE = 'M0 30 C 60 8, 118 6, 168 26 S 266 62, 322 46 S 420 10, 480 30'

type Props = {
  className?: string
  /** Line weight. 1.25 reads as a hairline at desktop widths. */
  weight?: number
  /** Opacity of the drifting line. */
  opacity?: number
}

export default function TideLine({ className = '', weight = 1.25, opacity = 0.55 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), {
      rootMargin: '120px 0px',
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none select-none overflow-hidden ${className}`}
      style={{ lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 960 60"
        preserveAspectRatio="none"
        className="block w-full h-[clamp(28px,5vw,56px)]"
        role="presentation"
      >
        <g
          fill="none"
          stroke="var(--tide)"
          strokeWidth={weight}
          strokeLinecap="round"
          opacity={opacity}
          style={{
            animation: active ? 'tide-drift 18s linear infinite' : 'none',
            willChange: active ? 'transform' : 'auto',
          }}
        >
          <path d={WAVE} />
          <path d={WAVE} transform="translate(480 0)" />
          <path d={WAVE} transform="translate(960 0)" />
        </g>
      </svg>
    </div>
  )
}
