/* ----------------------------------------------------------------------------
 * One IntersectionObserver for every scroll reveal on the page.
 *
 * The previous setup created an observer per section via framer-motion's
 * useInView; on a long service page that meant dozens of observers. A single
 * shared observer handles all of them, unobserves each element after it
 * fires (reveals run once), and never runs at all for visitors who asked for
 * reduced motion.
 *
 * Importing this module marks <html> with `.js`. The CSS hidden state is
 * scoped under `html.js`, so content is visible by default — prerendered
 * markup and the no-JS case both render fully, and only a live browser ever
 * hides anything.
 * -------------------------------------------------------------------------- */

const REVEALED = 'is-in'

let observer: IntersectionObserver | null = null
let reduced = false

function init() {
  if (typeof window === 'undefined' || observer) return

  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  /* Only now does the hidden state apply — never during SSR or without JS. */
  document.documentElement.classList.add('js')

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add(REVEALED)
        observer?.unobserve(entry.target)
      }
    },
    /* Fire slightly before the element is fully on screen so the motion has
       finished by the time it is centred in view. */
    { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }
  )
}

/** Observe one element. Returns a cleanup function for useEffect. */
export function observeReveal(el: Element): () => void {
  init()

  /* Reduced motion: reveal immediately and never observe. */
  if (reduced || !observer) {
    el.classList.add(REVEALED)
    return () => {}
  }

  /* Already past the viewport on load (e.g. restored scroll position, or an
     in-page anchor) — show it at once rather than animating it in late. */
  const rect = el.getBoundingClientRect()
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    el.classList.add(REVEALED)
    return () => {}
  }

  observer.observe(el)
  const ob = observer
  return () => ob.unobserve(el)
}
