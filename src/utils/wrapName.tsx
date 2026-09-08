import { Fragment } from 'react'

/**
 * Renders a label so that a trailing parenthetical group like " (1 vnt.)" or
 * " (ant implantų)" wraps as a single unit onto the next line instead of
 * breaking mid-parenthesis. Use for short structured labels (pricing rows,
 * headings, list items) — not for long body prose.
 */
// Only keep short parentheticals on one line; long ones must wrap internally
// or they overflow narrow mobile containers.
const NOWRAP_MAX_LEN = 18

export function wrapName(name: string) {
  const parts = name.split(/(\s\([^)]*\))/g).filter(Boolean)
  return parts.map((part, i) => {
    if (part.startsWith(' (') && part.length - 1 <= NOWRAP_MAX_LEN) {
      return (
        <span key={i} className="whitespace-nowrap">
          {part}
        </span>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}
