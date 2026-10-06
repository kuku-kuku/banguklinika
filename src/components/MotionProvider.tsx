import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'

/* ----------------------------------------------------------------------------
 * MotionProvider — keeps the animation runtime small.
 *
 * `domAnimation` is the subset that covers transforms, opacity, gestures and
 * layout-free animation, which is everything this site does. It is roughly
 * half the weight of the full feature bundle, and pairing it with the `m`
 * component instead of `motion` means the heavy generic component never gets
 * pulled in.
 *
 * Deliberately NOT `strict`: the ~90 service pages outside this redesign's
 * scope still use `motion.*` directly, and strict mode throws on those. They
 * keep working, and the full feature bundle they pull in lands in their own
 * route chunk rather than the initial payload. The shell components use `m`,
 * which is what keeps the entry chunk light.
 *
 * MotionConfig honours prefers-reduced-motion for every descendant, so each
 * animation does not have to check it individually.
 * -------------------------------------------------------------------------- */

export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
