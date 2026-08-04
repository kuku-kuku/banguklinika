import { useEffect } from 'react'
import Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export function getLenis() {
  return lenisInstance
}

export function useLenis() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const lenis = new Lenis({
      duration: 0.75,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
      infinite: false,
    })

    lenisInstance = lenis

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Content size changes (images load, animations expand things, route changes)
    // make Lenis's cached scroll bounds stale — "scrolls only to half page" bug.
    // Watch document size and force resize whenever it changes.
    const resizeObserver = new ResizeObserver(() => lenis.resize())
    resizeObserver.observe(document.documentElement)
    resizeObserver.observe(document.body)

    // Late-loading images can grow the page after ResizeObserver settles.
    function onImageLoad() { lenis.resize() }
    document.addEventListener('load', onImageLoad, true)

    return () => {
      cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
      document.removeEventListener('load', onImageLoad, true)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}
