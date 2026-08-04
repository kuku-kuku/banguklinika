import { useEffect } from 'react'
import Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export function getLenis() {
  return lenisInstance
}

export function useLenis() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Skip Lenis entirely on touch devices — native mobile scroll is already
    // smooth, and Lenis's rAF loop + ResizeObserver just eat main-thread time
    // (bumped TBT from 120ms → 940ms in Lighthouse mobile audit).
    const isTouch = matchMedia('(hover: none)').matches
    const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || prefersReduced) return

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

    // Content size changes (images load, animations expand things, route
    // changes) make Lenis's cached scroll bounds stale — "scrolls only to
    // half page" bug. Debounce the observer so animating children don't
    // cause a resize storm.
    let resizeTimer: number | null = null
    function scheduleResize() {
      if (resizeTimer != null) return
      resizeTimer = window.setTimeout(() => { resizeTimer = null; lenis.resize() }, 120)
    }
    const resizeObserver = new ResizeObserver(scheduleResize)
    // Only observe body — <html> size mirrors it and observing both doubles fires.
    resizeObserver.observe(document.body)

    // Late-loading images can grow the page after ResizeObserver settles.
    function onImageLoad() { scheduleResize() }
    document.addEventListener('load', onImageLoad, true)

    return () => {
      cancelAnimationFrame(rafId)
      if (resizeTimer != null) clearTimeout(resizeTimer)
      resizeObserver.disconnect()
      document.removeEventListener('load', onImageLoad, true)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}
