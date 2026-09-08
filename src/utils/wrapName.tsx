import { Fragment } from 'react'

/**
 * Renders a label so that a trailing parenthetical group like " (1 vnt.)" or
 * " (ant implantų)" wraps as a single unit onto the next line instead of
 * breaking mid-parenthesis. Use for short structured labels (pricing rows,
 * headings, list items) — not for long body prose.
 */
export function wrapName(name: string) {
  const parts = name.split(/(\s\([^)]*\))/g).filter(Boolean)
  return parts.map((part, i) =>
    part.startsWith(' (') ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}
