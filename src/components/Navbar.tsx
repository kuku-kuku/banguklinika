import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ROUTE_MAP_LT_TO_LV, ROUTE_MAP_LV_TO_LT, navLv } from '../i18n/lv'

type DropItem = { to: string; label: string }
type NavItem =
  | { to: string; label: string; dropdown?: undefined }
  | { to: string; label: string; dropdown: DropItem[] }

/** Meniu punktai */
const nav: NavItem[] = [
  { to: '/', label: 'Pradžia' },
  { to: '/apie', label: 'Apie mus' },
  {
    to: '/paslaugos',
    label: 'Paslaugos',
    dropdown: [
      { to: '/paslaugos/skubi-pagalba', label: 'Skubi pagalba' },
      { to: '/paslaugos/dantu-implantacija', label: 'Dantų implantacija' },
      { to: '/paslaugos/dantu-protezavimas', label: 'Dantų protezavimas' },
      { to: '/paslaugos#kompensuojamas-dantu-protezavimas', label: 'Kompensuojamas dantų protezavimas' },
      { to: '/paslaugos/dantu-taisymas-gydymas', label: 'Dantų gydymas' },
      { to: '/paslaugos/dantu-tiesinimas', label: 'Dantų tiesinimas' },
      { to: '/paslaugos/burnos-higiena', label: 'Burnos higiena' },
      { to: '/paslaugos/burnos-chirurgija', label: 'Burnos chirurgija' },
      { to: '/paslaugos/dantu-balinimas', label: 'Dantų balinimas' },
      { to: '/paslaugos/estetinis-plombavimas', label: 'Estetinis plombavimas' },
      { to: '/paslaugos/dantu-plombavimas', label: 'Dantų plombavimas' },
      { to: '/paslaugos/dantu-traukimas', label: 'Dantų traukimas' },
      { to: '/paslaugos/endodontinis-gydymas', label: 'Endodontinis Gydymas' },
      { to: '/paslaugos/vaiku-odontologija', label: 'Vaikų Odontologija' },
    ],
  },
  { to: '/kainos', label: 'Kainos' },
  { to: '/ypatingi-pasiulymai', label: 'Ypatingi pasiūlymai' },
  { to: '/draugai', label: 'Draugai' },
  { to: '/kontaktai', label: 'Kontaktai' },
]

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null) // desktop dropdown
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null) // mobile accordion
  const closeTimer = useRef<number | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpenIndex(null), 140)
  }
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = null
  }

  // Close menus on route/hash change
  useEffect(() => {
    setOpenIndex(null)
    setOpenMobile(false)
    setMobileOpenIndex(null)
  }, [location.pathname, location.hash])

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current)
    }
  }, [])

  // Lock scroll on mobile menu open (body/html)
  useEffect(() => {
    const el = document.documentElement
    if (openMobile) el.classList.add('overflow-hidden')
    else el.classList.remove('overflow-hidden')
    return () => el.classList.remove('overflow-hidden')
  }, [openMobile])

  const mobileVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  // ── Pick nav items based on current language ────────────────────────
  const isLv = location.pathname.startsWith('/lv')
  const activeNav = isLv ? (navLv as NavItem[]) : nav

  // ── Language switcher ───────────────────────────────────────────────
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => { setLangOpen(false) }, [location.pathname])

  /** Map current path to the equivalent path in the other language */
  function getAltPath(): string {
    const path = location.pathname
    if (isLv) {
      // LV → LT
      return ROUTE_MAP_LV_TO_LT[path] ?? '/'
    } else {
      // LT → LV
      return ROUTE_MAP_LT_TO_LV[path] ?? '/lv'
    }
  }

  function scrollToTopInstant() {
    requestAnimationFrame(() =>
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    )
  }

  function scrollToHashIfAny(to: string) {
    const hashIndex = to.indexOf('#')
    if (hashIndex === -1) return

    const id = to.slice(hashIndex + 1)
    if (!id) return

    // palaukiam, kad pasikeistų route / užsikrautų content
    window.setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 50)
  }

  /** Vieningas click handler'is */
  function handleNavClick(to: string) {
    setOpenIndex(null)
    setOpenMobile(false)
    setMobileOpenIndex(null)

    const hasHash = to.includes('#')

    // Hash atveju geriau aiškiai naviguoti ir tada scrollinti į elementą
    if (hasHash) {
      navigate(to)
      scrollToHashIfAny(to)
      return
    }

    // be hash – tiesiog į viršų
    scrollToTopInstant()
  }

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="container-narrow flex min-h-[72px] items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setOpenMobile(false)
            setOpenIndex(null)
            setMobileOpenIndex(null)
            scrollToTopInstant()
          }}
          aria-label="Bangų klinika — pradžia"
        >
          <img
            src="/bangu.png"
            alt="Bangų klinika"
            className="h-10 md:h-11 w-auto object-contain select-none"
            draggable={false}
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Desktop NAV */}
        <nav
          className="hidden md:flex items-center gap-7 relative"
          onMouseLeave={scheduleClose}
          onMouseEnter={cancelClose}
        >
          {activeNav.map((n, idx) => {
            const hasDrop = 'dropdown' in n && Array.isArray(n.dropdown)
            const menuId = hasDrop ? `nav-menu-${idx}` : undefined

            return (
              <div
                key={n.to}
                className="relative group"
                onMouseEnter={() => {
                  cancelClose()
                  setOpenIndex(hasDrop ? idx : null)
                }}
              >
                <NavLink
                  to={n.to}
                  end={n.to === '/' || n.to === '/lv'}
                  className={({ isActive }) =>
                    [
                      'relative text-[15px] md:text-[16px] font-medium transition-colors',
                      isActive ? 'text-primary-700' : 'text-gray-800 hover:text-primary-700',
                      'py-2',
                    ].join(' ')
                  }
                  onClick={() => handleNavClick(n.to)}
                  aria-haspopup={hasDrop ? true : undefined}
                  aria-expanded={hasDrop ? openIndex === idx : undefined}
                  aria-controls={menuId}
                >
                  <span className="relative">
                    {n.label}
                    <span
                      aria-hidden
                      className={[
                        'absolute left-0 -bottom-1 h-[2px] w-full rounded-full transition-all',
                        openIndex === idx ? 'bg-primary-600' : '',
                      ].join(' ')}
                    />
                  </span>
                </NavLink>

                {hasDrop && (
                  <>
                    <div
                      aria-hidden
                      className="absolute left-0 right-0 top-full h-2"
                      onMouseEnter={cancelClose}
                    />
                    <div
                      id={menuId}
                      role="menu"
                      className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+10px)] z-50 transition ${
                        openIndex === idx ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                      onMouseEnter={cancelClose}
                    >
                      <div className="w-64 rounded-2xl border border-gray-100 bg-white shadow-soft p-2 max-h-[70vh] overflow-auto">
                        {n.dropdown!.map((d) => (
                          <NavLink
                            key={d.to}
                            to={d.to}
                            className="block px-3 py-2 rounded-xl text-sm hover:bg-primary-50 hover:text-primary-700"
                            onClick={() => handleNavClick(d.to)}
                          >
                            {d.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </nav>

        {/* Language switcher — desktop */}
        <div ref={langRef} className="hidden md:block relative">
          <button
            type="button"
            onClick={() => setLangOpen(v => !v)}
            aria-expanded={langOpen}
            aria-label="Change language"
            className="flex items-center gap-1.5 text-[14px] font-semibold text-gray-700 hover:text-primary-700 transition-colors py-1.5 px-2.5 rounded-lg hover:bg-gray-50 border border-gray-200"
          >
            {isLv ? 'LV' : 'LT'}
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20" fill="currentColor" aria-hidden
            >
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>

          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 top-[calc(100%+6px)] z-50 w-32 rounded-xl border border-gray-100 bg-white shadow-soft p-1"
              >
                <Link
                  to={isLv ? getAltPath() : location.pathname}
                  onClick={() => { setLangOpen(false); if (!isLv) return; scrollToTopInstant() }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${!isLv ? 'font-semibold text-primary-700 bg-primary-50' : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'}`}
                >
                  Lietuvių
                </Link>
                <Link
                  to={isLv ? location.pathname : getAltPath()}
                  onClick={() => { setLangOpen(false); if (isLv) return; scrollToTopInstant() }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${isLv ? 'font-semibold text-primary-700 bg-primary-50' : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'}`}
                >
                  Latviešu
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden btn-ghost text-[15px] font-medium"
          onClick={() => setOpenMobile((v) => !v)}
          aria-expanded={openMobile}
          aria-label="Meniu"
        >
          Meniu
        </button>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence initial={false}>
        {openMobile && (
          <motion.div
            key="mobile-menu"
            variants={mobileVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="md:hidden fixed inset-0 top-[72px] bg-white border-t border-gray-100 overflow-auto will-change-transform"
          >
            <div className="container-narrow py-2 grid gap-1.5">
              {activeNav.map((n, idx) => {
                const hasDrop = 'dropdown' in n && Array.isArray(n.dropdown)

                // Paprastas linkas
                if (!hasDrop) {
                  return (
                    <NavLink
                      key={n.to}
                      to={n.to}
                      end={n.to === '/' || n.to === '/lv'}
                      className={({ isActive }) =>
                        [
                          'px-2 py-2 rounded-lg hover:bg-primary-50 hover:text-primary-700 block text-[15px] font-medium',
                          isActive ? 'text-primary-700 bg-primary-50' : '',
                        ].join(' ')
                      }
                      onClick={() => handleNavClick(n.to)}
                    >
                      {n.label}
                    </NavLink>
                  )
                }

                // Accordion item (pvz. Paslaugos)
                const isOpen = mobileOpenIndex === idx

                return (
                  <div key={n.to} className="rounded-lg border border-gray-100 overflow-hidden">
                    <div className="flex items-center">
                      {/* Parent navigacija (į /paslaugos) */}
                      <NavLink
                        to={n.to}
                        end
                        className={({ isActive }) =>
                          [
                            'flex-1 px-2 py-2 block text-[15px] font-medium hover:bg-primary-50 hover:text-primary-700',
                            isActive ? 'text-primary-700' : '',
                          ].join(' ')
                        }
                        onClick={() => handleNavClick(n.to)}
                      >
                        {n.label}
                      </NavLink>

                      {/* Toggle dropdown */}
                      <button
                        type="button"
                        className="px-3 py-2 text-[14px] font-medium text-gray-700 hover:bg-gray-50"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          setMobileOpenIndex((cur) => (cur === idx ? null : idx))
                        }}
                        aria-expanded={isOpen}
                        aria-label={`${n.label} meniu`}
                      >
                        {isOpen ? '−' : '+'}
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="bg-white"
                        >
                          <div className="px-1 pb-2">
                            {n.dropdown!.map((d) => (
                              <NavLink
                                key={d.to}
                                to={d.to}
                                className="block px-3 py-2 rounded-lg text-[14px] text-gray-800 hover:bg-primary-50 hover:text-primary-700"
                                onClick={() => handleNavClick(d.to)}
                              >
                                {d.label}
                              </NavLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
              {/* Language switcher — mobile */}
              <div className="mt-2 pt-2 border-t border-gray-100">
                <p className="px-2 pb-1 text-[12px] font-semibold uppercase tracking-wide text-gray-400">Kalba / Valoda</p>
                <Link
                  to={isLv ? getAltPath() : location.pathname}
                  onClick={() => { setOpenMobile(false); setMobileOpenIndex(null); if (!isLv) return; scrollToTopInstant() }}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-[15px] font-medium transition-colors ${!isLv ? 'text-primary-700 bg-primary-50 font-semibold' : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'}`}
                >
                  Lietuvių
                  {!isLv && <span className="text-xs text-primary-500">✓</span>}
                </Link>
                <Link
                  to={isLv ? location.pathname : getAltPath()}
                  onClick={() => { setOpenMobile(false); setMobileOpenIndex(null); if (isLv) return; scrollToTopInstant() }}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-[15px] font-medium transition-colors ${isLv ? 'text-primary-700 bg-primary-50 font-semibold' : 'text-gray-700 hover:bg-primary-50 hover:text-primary-700'}`}
                >
                  Latviešu
                  {isLv && <span className="text-xs text-primary-500">✓</span>}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
