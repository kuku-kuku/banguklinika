import type { ReactNode } from 'react'

/* ----------------------------------------------------------------------------
 * RevealLines — masked line-by-line heading reveal.
 *
 * Each line sits in its own overflow-hidden block and slides up from under
 * that mask. Driven entirely by CSS (see .reveal-line in src/index.css), so
 * it runs on the first frame without waiting for React, Framer Motion, or the
 * route chunk to parse.
 *
 * It takes the lines as separate children rather than splitting a string, so
 * the copy stays exactly where it was written and the heading tag is
 * unchanged — this only wraps spans around existing text.
 *
 * Reduced motion: the CSS drops the animation and the text renders in place.
 * -------------------------------------------------------------------------- */

type Props = {
  /** One entry per visual line. */
  lines: ReactNode[]
  /** Delay before the first line, ms. */
  startDelay?: number
  /** Gap between lines, ms. */
  stagger?: number
  className?: string
}

export default function RevealLines({
  lines,
  startDelay = 80,
  stagger = 110,
  className,
}: Props) {
  return (
    <span className={`reveal-lines ${className ?? ''}`}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="reveal-line"
          style={{ ['--reveal-delay' as string]: `${startDelay + i * stagger}ms` }}
        >
          <span>{line}</span>
        </span>
      ))}
    </span>
  )
}
