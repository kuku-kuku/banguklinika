import { useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

/* ----------------------------------------------------------------------------
 * MagneticLink — primary CTA that leans toward the cursor.
 *
 * Desktop fine-pointer only. On touch there is no cursor to lean toward, and
 * on reduced motion it should not move at all; in both cases this renders a
 * plain link with zero listeners attached.
 *
 * Only `transform` is written, straight to style on pointermove without React
 * state, so it never triggers a re-render. The offset is capped at 6px — past
 * that it stops reading as responsiveness and starts reading as a gimmick.
 * -------------------------------------------------------------------------- */

const MAX = 6

type Props = {
  children: ReactNode
  className?: string
  /** Internal route. Provide this or `href`, not both. */
  to?: string
  /** External or protocol link (tel:, mailto:). */
  href?: string
  ariaLabel?: string
}

function useMagnetic() {
  const ref = useRef<HTMLElement>(null)

  const enabled =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el || !enabled) return
    const r = el.getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2)
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2)
    el.style.transform = `translate3d(${(dx * MAX).toFixed(2)}px, ${(dy * MAX).toFixed(2)}px, 0)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
  }

  const handlers = enabled
    ? { onPointerMove: onMove, onPointerLeave: onLeave, onBlur: onLeave }
    : {}

  return { ref, handlers, enabled }
}

export default function MagneticLink({ children, className, to, href, ariaLabel }: Props) {
  const { ref, handlers, enabled } = useMagnetic()

  const style = enabled
    ? { transition: 'transform var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out)' }
    : undefined

  if (to) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        to={to}
        className={className}
        aria-label={ariaLabel}
        style={style}
        {...handlers}
      >
        {children}
      </Link>
    )
  }

  return (
    <a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={href}
      className={className}
      aria-label={ariaLabel}
      style={style}
      {...handlers}
    >
      {children}
    </a>
  )
}
