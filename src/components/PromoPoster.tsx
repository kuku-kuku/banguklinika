import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

type Persistence = 'local' | 'session' | 'none'

type Props = {
  id: string
  routeOnly?: string
  frequencyDays?: number
  delayMs?: number
  imageSrc: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  persistence?: Persistence
  navbarOffsetPx?: number
  modalMaxVh?: number
  maxWidthPx?: number
  borderRadius?: string
}

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const prevOverflow = document.body.style.overflow
    const prevPaddingRight = document.body.style.paddingRight
    const prevTouch = (document.body.style as any).webkitOverflowScrolling
    
    // Get scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
    ;(document.body.style as any).webkitOverflowScrolling = 'auto'
    
    // Prevent iOS Safari bottom bar issues
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.height = '100%'
    
    return () => {
      document.body.style.overflow = prevOverflow
      document.body.style.paddingRight = prevPaddingRight
      ;(document.body.style as any).webkitOverflowScrolling = prevTouch
      document.documentElement.style.overflow = ''
      document.documentElement.style.height = ''
    }
  }, [locked])
}

const msFromDays = (d: number) => d * 24 * 60 * 60 * 1000

export default function PromoPoster({
  id,
  routeOnly = '/',
  frequencyDays = 14,
  delayMs = 300,
  imageSrc,
  secondaryCtaText = 'Ypatingi pasiūlymai',
  secondaryCtaHref = '/kainos#ypatingi',
  persistence = 'local',
  navbarOffsetPx = 72,
  modalMaxVh = 85,
  maxWidthPx = 640,
  borderRadius = '16px',
}: Props) {
  const { pathname, search } = useLocation()
  const [open, setOpen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const timerRef = useRef<number | null>(null)
  const KEY = `promoPoster:${id}`

  const store = persistence === 'session'
    ? window.sessionStorage
    : persistence === 'local'
    ? window.localStorage
    : null

  const resetFlag = typeof window !== 'undefined' && new URLSearchParams(search).get('posterReset') === '1'

  const isSnoozed = () => {
    if (!store) return false
    try {
      const v = store.getItem(KEY)
      if (!v) return false
      const until = Number(v)
      return Number.isFinite(until) && Date.now() < until
    } catch { return false }
  }

  const persistSnooze = () => {
    if (!store) return
    try {
      if (frequencyDays && frequencyDays > 0) {
        store.setItem(KEY, String(Date.now() + msFromDays(frequencyDays)))
      } else if (persistence === 'session') {
        store.setItem(KEY, String(Date.now() + 5 * 60 * 1000))
      }
    } catch {}
  }

  const clearSnooze = () => {
    try { window.localStorage.removeItem(KEY) } catch {}
    try { window.sessionStorage.removeItem(KEY) } catch {}
  }

  useEffect(() => { if (resetFlag) clearSnooze() }, [resetFlag])

  // Preload image for smoother appearance
  useEffect(() => {
    const img = new Image()
    img.src = imageSrc
    img.onload = () => {
      setImageLoaded(true)
      // Small delay to ensure everything is ready before showing
      setTimeout(() => setIsReady(true), 50)
    }
  }, [imageSrc])

  useEffect(() => {
    if (routeOnly && pathname !== routeOnly) return
    if (!resetFlag && isSnoozed()) return
    timerRef.current = window.setTimeout(() => setOpen(true), delayMs)
    return () => { if (timerRef.current) window.clearTimeout(timerRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, routeOnly, resetFlag])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  useBodyScrollLock(open)

  const close = () => { setOpen(false); persistSnooze() }
  const onSecondaryClick = () => { close() }

  const panelMaxW = `min(88vw, ${maxWidthPx}px)`
  const panelMaxH = `min(${modalMaxVh}vh, calc(100dvh - ${navbarOffsetPx + 40}px))`

  // Smooth bounce animation - only starts when image is ready
  const bounceVariants = {
    initial: { 
      y: -400, 
      opacity: 0,
      scale: 0.9
    },
    animate: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        mass: 0.8,
        duration: 0.8
      }
    },
    exit: { 
      y: -40, 
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: [0.32, 0, 0.67, 0]
      }
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-3 md:p-6"
          role="dialog"
          aria-modal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100vh',
            minHeight: '100vh',
            maxHeight: '100vh',
            overscrollBehavior: 'none',
            paddingTop: `${navbarOffsetPx}px`
          }}
        >
          {/* Overlay with smooth fade - full screen coverage */}
          <motion.div 
            className="absolute bg-black/60 backdrop-blur-sm" 
            onClick={close} 
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100vh',
              minHeight: '100vh',
              maxHeight: '100vh'
            }}
          />

          {/* Modal with bounce animation - only animates when ready */}
          {isReady && (
            <motion.div
              className="relative z-10 w-full"
              style={{
                maxWidth: panelMaxW,
                maxHeight: panelMaxH,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              variants={bounceVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative w-full h-full grid place-items-center"
                style={{
                  borderRadius,
                  overflow: 'hidden',
                  filter: 'drop-shadow(0 14px 28px rgba(0,0,0,.35)) drop-shadow(0 4px 10px rgba(0,0,0,.22))',
                  background: 'transparent',
                }}
              >
                {/* Plakatas - no separate loading state to prevent flash */}
                <img
                  src={imageSrc}
                  alt=""
                  className="max-w-full max-h-full object-contain select-none"
                  decoding="async"
                  loading="eager"
                  draggable={false}
                  style={{ borderRadius }}
                />

                {/* X button with smooth entrance */}
                <motion.button
                  aria-label="Uždaryti"
                  onClick={close}
                  className="absolute top-2 right-2 p-2 rounded-full bg-black/20 hover:bg-black/30 active:bg-black/40 transition"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white drop-shadow">
                    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.button>

                {/* CTA with slide-in animation */}
                {secondaryCtaHref && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="absolute bottom-2 right-3 md:bottom-3 md:right-4"
                  >
                    <Link
                      to={secondaryCtaHref}
                      onClick={onSecondaryClick}
                      className="text-white font-medium text-[10px] md:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,.7)] hover:drop-shadow-[0_3px_6px_rgba(0,0,0,.9)] transition-all"
                      style={{ WebkitTapHighlightColor: 'transparent', background: 'transparent' }}
                    >
                      {secondaryCtaText}
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* Loading indicator shown while image loads */}
          {!isReady && (
            <div className="relative z-10 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}