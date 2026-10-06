/* ----------------------------------------------------------------------------
 * WaveDivider — the boundary between two sections.
 *
 * Replaces the old SectionDivider (two gradient rules flanking the logo mark).
 * This is the same wave language as <TideLine>, used structurally: the shape
 * below the curve is filled with the colour of the section that follows, so
 * sections interlock instead of being separated by an ornament.
 *
 * Purely decorative and static — no animation, no JS, no layout cost.
 * -------------------------------------------------------------------------- */

type Props = {
  /** Colour of the section BELOW the curve. Defaults to the off-white shell. */
  to?: string
  /** Mirror vertically — use when going from a shell section back to white. */
  flip?: boolean
  /** Height of the curve. Keep modest; this is a transition, not a feature. */
  className?: string
  /** Draw the turquoise hairline along the crest. */
  crest?: boolean
}

/* A long, shallow, asymmetric curve. Low amplitude keeps it elegant — a
   high-amplitude wave here is what makes this kind of divider look cartoonish. */
const FILL = 'M0 44 C 180 10, 420 4, 660 24 C 900 44, 1180 54, 1440 28 L1440 90 L0 90 Z'
const CREST = 'M0 44 C 180 10, 420 4, 660 24 C 900 44, 1180 54, 1440 28'

export default function WaveDivider({
  to = 'var(--shell)',
  flip = false,
  className = '',
  crest = false,
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none select-none ${className}`}
      style={{ lineHeight: 0, transform: flip ? 'scaleY(-1)' : undefined }}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block w-full h-[clamp(34px,6vw,80px)]"
        role="presentation"
      >
        <path d={FILL} fill={to} />
        {crest && (
          <path d={CREST} fill="none" stroke="var(--tide)" strokeWidth="1.5" opacity="0.5" />
        )}
      </svg>
    </div>
  )
}
