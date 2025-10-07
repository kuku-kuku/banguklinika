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
    const prevBodyOverflow = document.body.style.overflow
    const prevBodyPadRight = document.body.style.paddingRight
    const prevDocOverflow = document.documentElement.style.overflow
    const prevDocHeight = document.documentElement.style.height
    const prevTouch = (document.body.style as any).webkitOverflowScrolling

    const scrollbarW = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarW}px`
    ;(document.body.style as any).webkitOverflowScrolling = 'auto'
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.height = '100%'

    return () => {
      document.body.style.overflow = prevBodyOverflow
      document.body.style.paddingRight = prevBodyPadRight
      ;(document.body.style as any).webkitOverflowScrolling = prevTouch
      document.documentElement.style.overflow = prevDocOverflow
      document.documentElement.style.height = prevDocHeight
    }
  }, [locked])
}

const msFromDays = (d: number) => d * 24 * 60 * 60 * 1000

function getViewportHeightPx() {
  if (typeof window === 'undefined') return 0
  const vv = (window as any).visualViewport
  if (vv && typeof vv.height === 'number') return Math.round(vv.height)
  return Math.round(window.innerHeight)
}

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
  const [vh, setVh] = useState<number>(() => getViewportHeightPx())
  const timerRef = useRef<number | null>(null)
  const KEY = `promoPoster:${id}`

  const store =
    persistence === 'session'
      ? window.sessionStorage
      : persistence === 'local'
      ? window.localStorage
      : null

  const resetFlag =
    typeof window !== 'undefined' &&
    new URLSearchParams(search).get('posterReset') === '1'

  const isSnoozed = () => {
    if (!store) return false
    try {
      const v = store.getItem(KEY)
      if (!v) return false
      const until = Number(v)
      return Number.isFinite(until) && Date.now() < until
    } catch {
      return false
    }
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
    try {
      window.localStorage.removeItem(KEY)
    } catch {}
    try {
      window.sessionStorage.removeItem(KEY)
    } catch {}
  }

  useEffect(() => {
    if (resetFlag) clearSnooze()
  }, [resetFlag])

  // 💡 Patobulintas įkėlimo mechanizmas su fallback timeout
  useEffect(() => {
    let didCancel = false
    const img = new Image()
    let fallback: any

    const handleReady = () => {
      if (didCancel) return
      setImageLoaded(true)
      setTimeout(() => setIsReady(true), 60)
      clearTimeout(fallback)
    }

    img.onload = handleReady
    img.onerror = handleReady
    img.src = imageSrc

    // Jei po 5s niekas neįvyko – priverstinai leidžiam modalą
    fallback = setTimeout(handleReady, 5000)

    // Jei naršyklė iš cache (instant complete)
    if (img.complete) handleReady()

    return () => {
      didCancel = true
      clearTimeout(fallback)
    }
  }, [imageSrc])

  useEffect(() => {
    if (routeOnly && pathname !== routeOnly) return
    if (!resetFlag && isSnoozed()) return
    timerRef.current = window.setTimeout(() => setOpen(true), delayMs)
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [pathname, routeOnly, resetFlag])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const update = () => setVh(getViewportHeightPx())
    update()
    window.addEventListener('resize', update)
    const vv = (window as any).visualViewport
    vv?.addEventListener?.('resize', update)
    return () => {
      window.removeEventListener('resize', update)
      vv?.removeEventListener?.('resize', update)
    }
  }, [])

  useBodyScrollLock(open)

  const close = () => {
    setOpen(false)
    persistSnooze()
  }
  const onSecondaryClick = () => {
    close()
  }

  const modalMaxPxByVh = Math.floor((modalMaxVh / 100) * vh)
  const panelMaxHpx = Math.max(
    0,
    Math.min(modalMaxPxByVh, vh - (navbarOffsetPx + 24))
  )
  const panelMaxW = `min(88vw, ${maxWidthPx}px)`

  const bounceVariants = {
    initial: {
      y: -400,
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        mass: 0.8,
        duration: 0.8,
      },
    },
    exit: {
      y: -40,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: [0.32, 0, 0.67, 0],
      },
    },
  } as const

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-3 md:p-6"
          role="dialog"
          aria-modal="true"
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
            paddingTop: `${navbarOffsetPx}px`,
          }}
          onClick={close}
        >
          {/* Overlay */}
          <motion.div
            className="absolute bg-black/60 backdrop-blur-sm"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
            }}
          />

          {/* Modal panel */}
          {isReady && (
            <motion.div
              className="relative z-10 w-full"
              style={{
                maxWidth: panelMaxW,
                maxHeight: `${panelMaxHpx}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'auto',
              }}
              variants={bounceVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative"
                style={{
                  borderRadius,
                  overflow: 'visible',
                  filter:
                    'drop-shadow(0 14px 28px rgba(0,0,0,.35)) drop-shadow(0 4px 10px rgba(0,0,0,.22))',
                }}
              >
                <img
                  src={imageSrc}
                  alt=""
                  decoding="async"
                  loading="eager"
                  draggable={false}
                  className="block select-none"
                  style={{
                    borderRadius,
                    width: 'auto',
                    height: 'auto',
                    maxWidth: `min(88vw, ${maxWidthPx}px)`,
                    maxHeight: `${panelMaxHpx}px`,
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />

                <motion.button
                  aria-label="Uždaryti"
                  onClick={close}
                  className="absolute p-2 rounded-full bg-black/20 hover:bg-black/30 active:bg-black/40 transition"
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    top: '8px',
                    right: '8px',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white drop-shadow">
                    <path
                      d="M6 6l12 12M6 18L18 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.button>

                {secondaryCtaHref && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="absolute"
                    style={{
                      bottom: '8px',
                      right: '12px',
                    }}
                  >
                    <Link
                      to={secondaryCtaHref}
                      onClick={onSecondaryClick}
                      className="text-white font-medium text-[10px] md:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,.7)] hover:drop-shadow-[0_3px_6px_rgba(0,0,0,.9)] transition-all"
                      style={{
                        WebkitTapHighlightColor: 'transparent',
                        background: 'transparent',
                      }}
                    >
                      {secondaryCtaText}
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* Loader */}
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
