import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import Picture from './Picture'

/* ----------------------------------------------------------------------------
 * ServicePreview — the panel that trails the cursor over the services grid.
 *
 * One panel for the whole grid, not one per card: 37 cards each owning a
 * hidden overlay would be 37 images in the DOM and 37 hover listeners. The
 * grid reports which service is hovered, this renders it.
 *
 * Position is a pair of motion values fed through a spring, so the panel
 * follows with a little weight instead of being glued to the pointer. Only
 * `transform` is animated, so it stays on the compositor.
 *
 * It is decorative: `aria-hidden` and pointer-events-none, because everything
 * it shows is already text inside the card the pointer is on. It never appears
 * on touch or coarse pointers — there is no hover there, and a panel pinned
 * under a finger would cover what was tapped.
 * -------------------------------------------------------------------------- */

export type PreviewItem = {
  title: string
  summary: string
  image: string
}

/** Panel size, also used to keep it inside the viewport. */
const W = 300
const H = 330
/** Distance from the pointer, before edge flipping. */
const OFFSET = 28

export function useFinePointer() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const sync = () => setFine(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return fine
}

export default function ServicePreview({ item }: { item: PreviewItem | null }) {
  const fine = useFinePointer()

  /* Raw pointer position; the spring below is what the panel actually reads. */
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 320, damping: 32, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 320, damping: 32, mass: 0.6 })

  useEffect(() => {
    if (!fine) return

    const onMove = (e: MouseEvent) => {
      /* Flip to the other side of the pointer rather than letting the panel
         run off-screen, which is what makes edge cards feel broken. */
      const flipX = e.clientX + OFFSET + W > window.innerWidth
      const flipY = e.clientY + OFFSET + H > window.innerHeight
      x.set(flipX ? e.clientX - OFFSET - W : e.clientX + OFFSET)
      y.set(flipY ? e.clientY - OFFSET - H : e.clientY + OFFSET)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [fine, x, y])

  if (!fine) return null

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="service-preview"
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block"
          style={{ x: sx, y: sy, width: W }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.14 } }}
          transition={{ type: 'spring', stiffness: 420, damping: 30, mass: 0.5 }}
        >
          <div className="overflow-hidden rounded-card border border-hairline bg-paper shadow-deep">
            <div className="wave-mask relative m-2 overflow-hidden bg-shell" style={{ height: 190 }}>
              {/* The image is swapped while the panel stays put, so it gets its
                  own key and a short cross-fade. */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.image}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Picture
                    src={item.image}
                    alt=""
                    sizes="300px"
                    className="block h-full w-full"
                    imgClassName="h-full w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="px-4 pb-4 pt-1">
              <p className="text-small font-bold leading-snug">{item.title}</p>
              <p className="muted mt-1.5 text-micro leading-relaxed">{item.summary}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
