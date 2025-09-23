// src/components/BackToTop.tsx
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { createPortal } from 'react-dom'

function getScrollY(): number {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  )
}

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const prefersReduced = useReducedMotion()
  const ticking = useRef(false)
  const THRESHOLD = 300 // pakeisk į 50 testui, jei reikia

  const update = () => {
    setVisible(getScrollY() > THRESHOLD)
    ticking.current = false
  }

  const onScrollLike = () => {
    if (!ticking.current) {
      ticking.current = true
      requestAnimationFrame(update)
    }
  }

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    update()
    // langas
    window.addEventListener('scroll', onScrollLike, { passive: true })
    window.addEventListener('wheel', onScrollLike, { passive: true })
    window.addEventListener('touchmove', onScrollLike, { passive: true })
    window.addEventListener('resize', onScrollLike)
    window.addEventListener('orientationchange', onScrollLike)
    // gyvavimo įvykiai
    const onShowOrVis = () => requestAnimationFrame(update)
    window.addEventListener('pageshow', onShowOrVis)
    document.addEventListener('visibilitychange', onShowOrVis)
    // jei scrollina ne langas
    document.addEventListener('scroll', onScrollLike, { passive: true, capture: true })

    return () => {
      window.removeEventListener('scroll', onScrollLike)
      window.removeEventListener('wheel', onScrollLike)
      window.removeEventListener('touchmove', onScrollLike)
      window.removeEventListener('resize', onScrollLike)
      window.removeEventListener('orientationchange', onScrollLike)
      window.removeEventListener('pageshow', onShowOrVis)
      document.removeEventListener('visibilitychange', onShowOrVis)
      document.removeEventListener('scroll', onScrollLike, { capture: true } as any)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scrollToTop = () => {
    const smoothSupported = 'scrollBehavior' in document.documentElement.style
    const behavior: ScrollBehavior = prefersReduced ? 'auto' : 'smooth'

    // 1) langas
    try {
      smoothSupported ? window.scrollTo({ top: 0, left: 0, behavior }) : window.scrollTo(0, 0)
    } catch {
      window.scrollTo(0, 0)
    }

    // 2) root scroller (Chrome/Safari iOS)
    const root = (document.scrollingElement || document.documentElement) as HTMLElement
    try {
      smoothSupported ? (root as any).scrollTo({ top: 0, left: 0, behavior }) : (root.scrollTop = 0)
    } catch {
      root.scrollTop = 0
    }
    // 3) body (senesni atvejai)
    document.body.scrollTop = 0

    // 4) vidiniai scroll konteineriai (overflow-y: auto|scroll)
    const candidates = Array.from(document.querySelectorAll<HTMLElement>('*')).filter((el) => {
      const s = getComputedStyle(el)
      const oy = s.overflowY
      return (oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight
    })
    for (const el of candidates) {
      try {
        smoothSupported ? el.scrollTo({ top: 0, left: 0, behavior }) : (el.scrollTop = 0)
      } catch {
        el.scrollTop = 0
      }
    }
  }

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.button
          key="backtotop"
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: prefersReduced ? 0 : 0.2 }}
          aria-label="Grįžti į viršų"
          title="Grįžti į viršų"
          className="
            fixed right-4 md:right-6 z-[2147483647]
            inline-flex items-center justify-center
            h-11 w-11 rounded-full
            bg-white border border-slate-200 shadow-lg hover:shadow-xl
            text-[#10394F]
          "
          style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
            <path d="M12 6l-6 7h4v5h4v-5h4z" fill="currentColor" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>,
    document.body
  )
}
