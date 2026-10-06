import { useEffect, useRef, type PropsWithChildren } from 'react'
import { observeReveal } from '../lib/reveal'

/* ----------------------------------------------------------------------------
 * AnimatedSection — used in 93 files, so it is the single highest-leverage
 * piece of motion on the site.
 *
 * Previously this mounted a framer-motion <motion.section> per section, which
 * pulled the animation runtime into the critical path of every page and ran a
 * separate viewport observer for each one. Now it is plain CSS driven by one
 * shared IntersectionObserver (see src/lib/reveal.ts): same reveal, no JS
 * animation runtime, one observer for the whole document.
 *
 * The hidden state is scoped under `html.js`, which only gets set once the
 * reveal module has loaded in a browser. So prerendered HTML — what crawlers
 * read, and what paints first — always shows content at full opacity.
 * -------------------------------------------------------------------------- */

type Props = PropsWithChildren<{
  /** Stagger in seconds, matching the previous framer-motion API. */
  delay?: number
  className?: string
  /** Render a plain <div> instead of <section> (for nesting inside a section). */
  as?: 'section' | 'div'
}>

export default function AnimatedSection({
  children,
  delay = 0,
  className = 'section',
  as = 'section',
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) return observeReveal(ref.current)
  }, [])

  const Tag = as as 'section'

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`reveal ${className}`}
      style={delay ? ({ '--reveal-delay': `${delay * 1000}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  )
}
