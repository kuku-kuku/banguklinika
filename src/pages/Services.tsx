import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'

type Svc = { id: string; title: string; content: React.ReactNode; to?: string }

const BASE_DURATION = 0.28

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function useIsMobile() {
  const [mobile, setMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false
  )
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(max-width: 767px)')
    const handler = () => setMobile(mql.matches)
    handler()
    mql.addEventListener?.('change', handler)
    return () => mql.removeEventListener?.('change', handler)
  }, [])
  return mobile
}

function getHeaderOffset(): number {
  const sticky = document.querySelector('header.sticky') as HTMLElement | null
  return sticky ? sticky.getBoundingClientRect().height : 76
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function smoothScrollTo(targetY: number, duration = 450) {
  const startY = window.scrollY
  const diff = targetY - startY
  if (Math.abs(diff) < 2) return Promise.resolve()
  return new Promise<void>((resolve) => {
    const start = performance.now()
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const y = startY + diff * easeInOutCubic(p)
      window.scrollTo(0, y)
      if (p < 1) requestAnimationFrame(step)
      else resolve()
    }
    requestAnimationFrame(step)
  })
}

async function smoothAlignToElement(id: string, offset = 16, ms = 360) {
  const el = document.getElementById(id)
  if (!el) return
  const rect = el.getBoundingClientRect()
  const targetY = window.scrollY + rect.top - getHeaderOffset() - offset
  await smoothScrollTo(targetY, ms)
}

async function smoothCenterOnElement(id: string, offset = 12, ms = 420) {
  const el = document.getElementById(id)
  if (!el) return
  const rect = el.getBoundingClientRect()
  const header = getHeaderOffset()
  const usableH = window.innerHeight - header
  const targetY = window.scrollY + rect.top + rect.height / 2 - usableH / 2 - offset
  await smoothScrollTo(Math.max(0, targetY), ms)
}

function durationFor(px: number) {
  const extra = Math.min(0.27, (Math.max(0, Math.min(px, 800)) / 800) * 0.27)
  return +(BASE_DURATION + extra).toFixed(3)
}

async function waitForLayoutStabilize(el: HTMLElement, consecutiveFrames = 4, timeoutMs = 1000) {
  return new Promise<void>((resolve) => {
    let last: { top: number; height: number } | null = null
    let stable = 0
    const start = performance.now()
    const step = () => {
      const r = el.getBoundingClientRect()
      if (last && Math.abs(last.top - r.top) < 1 && Math.abs(last.height - r.height) < 1) stable++
      else stable = 0
      last = { top: r.top, height: r.height }
      if (stable >= consecutiveFrames || performance.now() - start > timeoutMs) return resolve()
      requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  })
}

function useScrollThumb(containerRef: React.RefObject<HTMLElement>) {
  const [scrollable, setScrollable] = useState(false)
  const [thumbTop, setThumbTop] = useState(0)
  const [thumbHeight, setThumbHeight] = useState(24)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const compute = () => {
      const { scrollHeight, clientHeight, scrollTop } = el
      const canScroll = scrollHeight > clientHeight + 2
      setScrollable(canScroll)
      if (!canScroll) return

      const trackHeight = clientHeight
      const ratio = clientHeight / scrollHeight
      const h = Math.max(20, Math.round(trackHeight * ratio))
      const maxThumbTop = trackHeight - h
      const top = Math.round((scrollTop / (scrollHeight - clientHeight)) * maxThumbTop)

      setThumbHeight(h)
      setThumbTop(isFinite(top) ? top : 0)
    }

    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(el)

    el.addEventListener('scroll', compute, { passive: true })
    return () => {
      ro.disconnect()
      el.removeEventListener('scroll', compute)
    }
  }, [containerRef])

  return { scrollable, thumbTop, thumbHeight }
}

function AccordionItemDefault({
  id,
  title,
  children,
  open,
  onToggle,
}: {
  id: string
  title: string
  children: React.ReactNode
  open: boolean
  onToggle: (willOpen: boolean) => void
}) {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const controls = useAnimationControls()
  const [height, setHeight] = useState(0)
  const [measured, setMeasured] = useState(0)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      const h = el.scrollHeight
      setMeasured(h)
      if (open) setHeight(h)
    })
    ro.observe(el)
    setMeasured(el.scrollHeight)
    return () => ro.disconnect()
  }, [open])

  useEffect(() => {
    const target = open ? measured : 0
    const d = durationFor(measured)
    controls.start({
      height: target,
      transition: { type: 'spring', damping: 26, stiffness: 280, mass: 0.9, duration: d },
    })
  }, [open, measured, controls])

  return (
    <div
      id={id}
      className={[
        'rounded-2xl border shadow-sm transition-colors transform-gpu will-change-transform',
        open ? 'bg-white border-primary-400 ring-2 ring-primary-300 shadow-md' : 'bg-primary-50 border-primary-300 hover:bg-primary-100 hover:shadow',
        'scroll-mt-28 md:scroll-mt-32',
      ].join(' ')}
      style={{ contain: 'paint', overflowAnchor: 'none' as any }}
    >
      <button
        onClick={() => onToggle(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 transition-colors"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
      >
        <h3 className="text-base sm:text-lg font-semibold text-darkblue-600 text-left">{title}</h3>
        <Chevron open={open} />
      </button>

      <motion.div
        id={`${id}-panel`}
        animate={controls}
        initial={false}
        style={{
          height,
          overflow: 'hidden',
          willChange: 'height',
          contentVisibility: open ? ('visible' as any) : ('auto' as any),
          containIntrinsicSize: open ? undefined : '0 400px',
        }}
      >
        <div ref={contentRef} className="px-5 pb-5 pt-0 text-gray-700 leading-relaxed">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

function AccordionItemPaper({
  id,
  title,
  children,
  open,
  onToggle,
  maxVh = 56,
}: {
  id: string
  title: string
  children: React.ReactNode
  open: boolean
  onToggle: (willOpen: boolean) => void
  maxVh?: number
}) {
  const clampHeight = `clamp(280px, ${maxVh}vh, 520px)`
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const { scrollable, thumbTop, thumbHeight } = useScrollThumb(scrollRef)

  return (
    <div
      id={id}
      className={[
        'rounded-2xl border shadow-sm transition-colors transform-gpu will-change-transform',
        open ? 'bg-white border-primary-400 ring-2 ring-primary-300 shadow-md' : 'bg-primary-50 border-primary-300 hover:bg-primary-100 hover:shadow',
        'scroll-mt-28 md:scroll-mt-32',
      ].join(' ')}
      style={{ contain: 'layout paint', overflowAnchor: 'none' as any }}
    >
      <button
        onClick={() => onToggle(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 transition-colors"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
      >
        <h3 className="text-base sm:text-lg font-semibold text-darkblue-600 text-left">{title}</h3>
        <Chevron open={open} />
      </button>

      <div
        id={`${id}-panel`}
        className="grid will-change-[grid-template-rows,opacity]"
        style={{
          gridTemplateRows: open ? '1fr' : '0fr',
          opacity: open ? 1 : 0,
          transition: `grid-template-rows ${open ? 320 : 260}ms cubic-bezier(0.22,1,0.36,1), opacity ${open ? 320 : 260}ms cubic-bezier(0.22,1,0.36,1)`,
          transform: 'translateZ(0)',
        }}
      >
        <div className="min-h-0 overflow-hidden relative">
          <div
            ref={scrollRef}
            className="px-5 pb-5 pt-0 text-gray-700 leading-relaxed overflow-y-auto overscroll-contain rounded-xl pr-3"
            style={{
              maxHeight: clampHeight,
              transition: 'transform 160ms cubic-bezier(0.22,1,0.36,1), opacity 160ms cubic-bezier(0.22,1,0.36,1)',
              transformOrigin: 'top left',
              transform: open ? 'scaleY(1) translateZ(0)' : 'scaleY(0.995) translateY(-1px) translateZ(0)',
              opacity: open ? 1 : 0.98,
              WebkitOverflowScrolling: 'touch' as any,
            }}
          >
            {children}
          </div>

          <AnimatePresence>
            {scrollable && open && (
              <motion.div
                className="pointer-events-none absolute top-0 right-1 w-1.5 rounded-full bg-slate-200/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ height: `calc(${clampHeight})` }}
              >
                <div className="absolute left-0 right-0 mx-auto w-1.5 rounded-full bg-primary-400" style={{ top: thumbTop, height: thumbHeight }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function ServiceLinkCard({ to, title }: { to: string; title: string }) {
  return (
    <Link
      to={to}
      className={[
        'block rounded-2xl border shadow-sm transition-colors transform-gpu will-change-transform',
        'bg-primary-50 border-primary-300 hover:bg-primary-100 hover:shadow',
        'focus:outline-none focus:ring-2 focus:ring-primary-300',
      ].join(' ')}
    >
      <div className="w-full flex items-center justify-between gap-4 px-5 py-4">
        <h3 className="text-base sm:text-lg font-semibold text-darkblue-600 text-left">{title}</h3>
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </Link>
  )
}

export default function Services() {
  const sections: Svc[] = useMemo(
    () => [
      {
        id: 'skubi-pagalba',
        title: 'Skubi pagalba',
        content: (
          <div className="space-y-3">
            <p>
              „Bangų Odontologijos Klinika" suteiks skubią pagalbą, jei skauda dantį, iškrito plomba,
              nuskilo dantis ar skubiai prireikė kitų odontologo paslaugų.
              Nereikės laukti eilėje – priimsime jus kaip įmanoma greičiau.
            </p>
          </div>
        ),
      },

      {
        id: 'dantu-protezavimas',
        title: 'Dantų protezavimas',
        to: '/paslaugos/dantu-protezavimas',
        content: (
          <div className="space-y-3">
            <p>Dantų protezavimo informacija pateikiama atskirame puslapyje.</p>
          </div>
        ),
      },

      {
        id: 'kompensuojamas-dantu-protezavimas',
        title: 'TLK lėšomis kompensuojamas dantų protezavimas',
        content: (
          <div className="space-y-3">
            <p>
              Bangų odontologijos klinika yra sudariusi sutartį su Teritorinėmis ligonių kasomis (TLK),
              kurios skiria kompensaciją dantų protezavimo išlaidoms iš Privalomojo sveikatos draudimo fondo (PSDF).
            </p>

            <p>Teisę į kompensuojamą protezavimą turi:</p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Asmenys, kuriems sukako senatvės pensijos amžius;</li>
              <li>Vaikai iki 18 metų;</li>
              <li>Asmenys, pripažinti nedarbingais arba iš dalies darbingais;</li>
              <li>Asmenys po burnos, veido ir žandikaulių onkologinių ligų gydymo.</li>
            </ul>

            <p className="text-sm text-gray-600">
              Detalesnė ir nuolat atnaujinama informacija skelbiama TLK interneto svetainėje.
            </p>
          </div>
        ),
      },

      {
        id: 'dantu-gydymas',
        title: 'Dantų gydymas',
        to: '/paslaugos/dantu-taisymas-gydymas',
        content: (
          <div className="space-y-3">
            <p>Dantų gydymo informacija pateikiama atskirame puslapyje.</p>
          </div>
        ),
      },

      {
        id: 'dantu-tiesinimas',
        title: 'Dantų tiesinimas',
        to: '/paslaugos/dantu-tiesinimas',
        content: (
          <div className="space-y-3">
            <p>Dantų tiesinimo informacija pateikiama atskirame puslapyje.</p>
          </div>
        ),
      },

      {
        id: 'burnos-higiena',
        title: 'Burnos higiena',
        to: '/paslaugos/burnos-higiena',
        content: (
          <div className="space-y-3">
            <p>Burnos higienos informacija pateikiama atskirame puslapyje.</p>
          </div>
        ),
      },

      {
        id: 'burnos-chirurgija',
        title: 'Burnos chirurgija',
        to: '/paslaugos/burnos-chirurgija',
        content: (
          <div className="space-y-3">
            <p>Burnos chirurgijos informacija pateikiama atskirame puslapyje.</p>
          </div>
        ),
      },

      {
        id: 'dantu-balinimas',
        title: 'Dantų balinimas',
        to: '/paslaugos/dantu-balinimas',
        content: (
          <div className="space-y-3">
            <p>Dantų balinimo informacija pateikiama atskirame puslapyje.</p>
          </div>
        ),
      },

      {
        id: 'estetinis-plombavimas',
        title: 'Estetinis plombavimas',
        to: '/paslaugos/estetinis-plombavimas',
        content: (
          <div className="space-y-3">
            <p>Estetinio plombavimo informacija pateikiama atskirame puslapyje.</p>
          </div>
        ),
      },

      {
        id: 'dantu-plombavimas',
        title: 'Dantų plombavimas',
        to: '/paslaugos/dantu-plombavimas',
        content: (
          <div className="space-y-3">
            <p>Dantų plombavimo informacija pateikiama atskirame puslapyje.</p>
          </div>
        ),
      },

      {
        id: 'dantu-traukimas',
        title: 'Dantų traukimas',
        to: '/paslaugos/dantu-traukimas',
        content: (
          <div className="space-y-3">
            <p>Dantų traukimo informacija pateikiama atskirame puslapyje.</p>
          </div>
        ),
      },

      {
        id: 'endodontinis-gydymas',
        title: 'Endodontinis gydymas',
        to: '/paslaugos/endodontinis-gydymas',
        content: (
          <div className="space-y-3">
            <p>Endodontinio gydymo informacija pateikiama atskirame puslapyje.</p>
          </div>
        ),
      },

      {
        id: 'vaiku-odontologija',
        title: 'Vaikų odontologija',
        to: '/paslaugos/vaiku-odontologija',
        content: (
          <div className="space-y-3">
            <p>Vaikų odontologijos informacija pateikiama atskirame puslapyje.</p>
          </div>
        ),
      },
    ],
    []
  )

  const { hash, pathname } = useLocation()
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())
  const isAnimatingRef = useRef(false)
  const [listAnchoringOff, setListAnchoringOff] = useState(false)
  const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))
  const mobile = useIsMobile()

  const handleToggle = async (id: string, willOpen: boolean) => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true
    setListAnchoringOff(true)
    try {
      const alreadyOpen = openIds.has(id)

      if (!willOpen) {
        if (!alreadyOpen) return
        setOpenIds((prev) => {
          const n = new Set(prev)
          n.delete(id)
          return n
        })
        await wait(320)
        return
      }

      const hadOthers = openIds.size > 0 && !openIds.has(id)
      if (hadOthers) {
        setOpenIds(new Set())
        await wait(320)
      }

      setOpenIds(new Set([id]))
      await wait(40)

      const el = document.getElementById(id)
      if (el) await waitForLayoutStabilize(el, 4, 1000)

      if (mobile) await smoothCenterOnElement(id, 14, 380)
      else await smoothAlignToElement(id, 16, 260)
    } finally {
      setListAnchoringOff(false)
      isAnimatingRef.current = false
    }
  }

  useEffect(() => {
    if (pathname === '/paslaugos' && !hash) setOpenIds(new Set())
  }, [pathname, hash])

  useEffect(() => {
    const target = (hash || '').replace('#', '')
    if (!target) return
    const item = sections.find((s) => s.id === target)
    if (!item) return
    if (item.to) return

    let cancelled = false
    const run = async () => {
      if (isAnimatingRef.current) return
      isAnimatingRef.current = true
      setListAnchoringOff(true)
      try {
        const hadOthers = openIds.size > 0 && !openIds.has(target)
        if (hadOthers) {
          setOpenIds(new Set())
          await wait(320)
          if (cancelled) return
        }

        setOpenIds(new Set([target]))
        await wait(40)

        const el = document.getElementById(target)
        if (el) await waitForLayoutStabilize(el, 4, 1000)
        if (cancelled) return

        if (mobile) await smoothCenterOnElement(target, 14, 380)
        else await smoothAlignToElement(target, 16, 260)
      } finally {
        setListAnchoringOff(false)
        isAnimatingRef.current = false
      }
    }
    run()
    return () => { cancelled = true }
  }, [hash, mobile, openIds, sections])

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
  }

  return (
    <>
      <SEO
        title="Paslaugos"
        description="Skubi pagalba, dantų protezavimas, kompensuojamas protezavimas, dantų gydymas, implantai, tiesinimas, higiena, chirurgija, balinimas, plombavimas, traukimas, endodontija, vaikų odontologija."
      />

      <AnimatedSection>
        <div className="container-narrow py-10 md:py-12">
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-600">Paslaugos</h1>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Išsirinkite dominančią paslaugą – atsidarys išsamus aprašas arba būsite nukreipti į atskirą paslaugos puslapį.
            </p>
          </header>

          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-4"
            style={listAnchoringOff ? ({ overflowAnchor: 'none' } as React.CSSProperties) : undefined}
          >
            {sections.map((s) => {
              const open = openIds.has(s.id)

              if (s.to) {
                return (
                  <motion.div key={s.id} variants={itemVariants} layout="position">
                    <ServiceLinkCard to={s.to} title={s.title} />
                  </motion.div>
                )
              }

              return (
                <motion.div key={s.id} variants={itemVariants} layout="position">
                  {mobile ? (
                    <AccordionItemPaper
                      id={s.id}
                      title={s.title}
                      open={open}
                      onToggle={(willOpen) => handleToggle(s.id, willOpen)}
                      maxVh={56}
                    >
                      {s.content}
                    </AccordionItemPaper>
                  ) : (
                    <AccordionItemDefault
                      id={s.id}
                      title={s.title}
                      open={open}
                      onToggle={(willOpen) => handleToggle(s.id, willOpen)}
                    >
                      {s.content}
                    </AccordionItemDefault>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  )
}
