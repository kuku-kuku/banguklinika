/* ----------------------------------------------------------------------------
 * WaveDivider — the boundary between two sections.
 *
 * Replaces the old SectionDivider (two gradient rules flanking the logo mark).
 * Same wave language as <TideLine>, used structurally: the area below the
 * curve is filled with the colour of the section that follows, so sections
 * interlock instead of being separated by an ornament.
 *
 * Both colours are explicit. The wrapper paints `from` because the divider
 * sits between two sections and cannot inherit either one's background — the
 * page background would show through otherwise.
 *
 * Purely decorative and static: no animation, no JS, no layout cost.
 * -------------------------------------------------------------------------- */

type Props = {
  /** Colour of the section ABOVE. Painted on the wrapper. */
  from?: string
  /** Colour of the section BELOW — fills the area under the curve. */
  to?: string
  /** Mirror horizontally so consecutive dividers do not repeat the same curve. */
  mirror?: boolean
  className?: string
  /** Draw the turquoise hairline along the crest. */
  crest?: boolean
}

/* A long, shallow, asymmetric curve. Low amplitude is what keeps this elegant
   — a tall wave here is exactly what makes this kind of divider cartoonish. */
const FILL = 'M0 44 C 180 10, 420 4, 660 24 C 900 44, 1180 54, 1440 28 L1440 90 L0 90 Z'
const CREST = 'M0 44 C 180 10, 420 4, 660 24 C 900 44, 1180 54, 1440 28'

export default function WaveDivider({
  from = 'var(--paper)',
  to = 'var(--shell)',
  mirror = false,
  className = '',
  crest = false,
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none select-none ${className}`}
      style={{ background: from, lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block w-full h-[clamp(34px,6vw,80px)]"
        role="presentation"
        style={{ transform: mirror ? 'scaleX(-1)' : undefined }}
      >
        <path d={FILL} fill={to} />
        {crest && (
          <path d={CREST} fill="none" stroke="var(--tide)" strokeWidth="1.5" opacity="0.5" />
        )}
      </svg>
    </div>
  )
}
