import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const scrollToTop = () => {
    if (prefersReduced) window.scrollTo(0, 0)
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="backtotop"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2 }}
          aria-label="Grįžti į viršų"
          title="Grįžti į viršų"
          className="
            fixed right-4 md:right-6 z-50
            inline-flex items-center justify-center
            h-11 w-11 rounded-full
            bg-white/90 backdrop-blur
            border border-slate-200 shadow-lg hover:shadow-xl
            text-[#10394F]
          "
          style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
            <path d="M12 6l-6 7h4v5h4v-5h4z" fill="currentColor" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
