import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ROUTE_MAP_LT_TO_LV, ROUTE_MAP_LV_TO_LT, navLv } from '../i18n/lv'

type DropItem = { to?: string; label: string; children?: DropItem[] }
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
      { to: '/paslaugos/skubi-pagalba/', label: 'Skubi pagalba' },
      {
        to: '/paslaugos/dantu-implantacija/', label: 'Dantų implantacija',
        children: [
          { to: '/paslaugos/vienmomente-implantacija/', label: 'Vienmomentė implantacija' },
        ],
      },
      {
        to: '/paslaugos/dantu-protezavimas/', label: 'Dantų protezavimas',
        children: [
          { to: '/paslaugos/dantu-karunieles/', label: 'Dantų karūnėlės (vainikėliai)' },
          { to: '/paslaugos/cirkonio-keramikos-vainikelis/', label: 'Cirkonio keramikos vainikėlis' },
          { to: '/paslaugos/dantu-tiltai/', label: 'Dantų tiltai' },
          { to: '/paslaugos/kompensacija-protezavimui/', label: 'Kompensacija protezavimui' },
        ],
      },
      { to: '/paslaugos/dantu-taisymas-gydymas/', label: 'Dantų gydymas' },
      { to: '/paslaugos/dantu-tiesinimas/', label: 'Dantų tiesinimas' },
      { to: '/paslaugos/burnos-higiena/', label: 'Burnos higiena' },
      {
        to: '/paslaugos/burnos-chirurgija/', label: 'Burnos chirurgija',
        children: [
          { to: '/paslaugos/sinuso-pakelimas/', label: 'Sinuso pakėlimas' },
          { to: '/paslaugos/zandikaulio-kaulo-priauginimas/', label: 'Žandikaulio kaulo priauginimas' },
        ],
      },
      { to: '/paslaugos/dantu-balinimas/', label: 'Dantų balinimas' },
      { to: '/paslaugos/estetinis-plombavimas/', label: 'Estetinis plombavimas' },
      { to: '/paslaugos/dantu-plombavimas/', label: 'Dantų plombavimas' },
      {
        to: '/paslaugos/dantu-traukimas/', label: 'Dantų traukimas',
        children: [
          { to: '/paslaugos/protiniu-dantu-salinimas/', label: 'Protinių dantų šalinimas' },
        ],
      },
      { to: '/paslaugos/endodontinis-gydymas/', label: 'Endodontinis Gydymas' },
      {
        to: '/paslaugos/vaiku-odontologija/', label: 'Vaikų Odontologija',
        children: [
          { to: '/paslaugos/vaiku-profilaktinis-patikrinimas/', label: 'Vaikų profilaktinis patikrinimas' },
          { to: '/paslaugos/dantu-higiena-vaikams/', label: 'Dantų higiena vaikams' },
        ],
      },
      {
        label: 'Kitos paslaugos',
        children: [
          { to: '/paslaugos/rentgenologiniai-tyrimai/', label: 'Rentgenologiniai tyrimai' },
          { to: '/paslaugos/bruksizmo-dantu-kapa/', label: 'Bruksizmo dantų kapa' },
        ],
      },
    ],
  },
  { to: '/kainos', label: 'Kainos' },
  { to: '/ypatingi-pasiulymai', label: 'Ypatingi pasiūlymai' },
  { to: '/musu-darbai', label: 'Mūsų darbai' },
  { to: '/draugai', label: 'Draugai' },
  { to: '/kontaktai', label: 'Kontaktai' },
]

function ChevronRight() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 010-1.06L10.168 10 7.21 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
    </svg>
  )
}

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null) // desktop dropdown
  const [openSub, setOpenSub] = useState<string | null>(null) // desktop flyout submenu (keyed by label)
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null) // mobile accordion
  const [mobileOpenSub, setMobileOpenSub] = useState<string | null>(null) // mobile nested accordion (keyed by label)
  const closeTimer = useRef<number | null>(null)
  const subCloseTimer = useRef<number | null>(null)
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

  const scheduleSubClose = () => {
    if (subCloseTimer.current) window.clearTimeout(subCloseTimer.current)
    subCloseTimer.current = window.setTimeout(() => setOpenSub(null), 140)
  }
  const cancelSubClose = () => {
    if (subCloseTimer.current) window.clearTimeout(subCloseTimer.current)
    subCloseTimer.current = null
  }

  // Close menus on route/hash change
  useEffect(() => {
    setOpenIndex(null)
    setOpenSub(null)
    setOpenMobile(false)
    setMobileOpenIndex(null)
    setMobileOpenSub(null)
  }, [location.pathname, location.hash])

  // Sub-flyout follows the top-level dropdown open/close state
  useEffect(() => {
    setOpenSub(null)
  }, [openIndex])

  // Nested mobile accordion resets whenever its parent accordion changes
  useEffect(() => {
    setMobileOpenSub(null)
  }, [mobileOpenIndex])

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current)
      if (subCloseTimer.current) window.clearTimeout(subCloseTimer.current)
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
    setOpenSub(null)
    setOpenMobile(false)
    setMobileOpenIndex(null)
    setMobileOpenSub(null)

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
            src="/Asset 63.svg"
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
                        {n.dropdown!.map((d) => {
                          const hasChildren = !!d.children?.length

                          if (!hasChildren) {
                            return (
                              <NavLink
                                key={d.to}
                                to={d.to!}
                                className="block px-3 py-2 rounded-xl text-sm hover:bg-primary-50 hover:text-primary-700"
                                onClick={() => handleNavClick(d.to!)}
                              >
                                {d.label}
                              </NavLink>
                            )
                          }

                          return (
                            <div
                              key={d.label}
                              className="relative"
                              onMouseEnter={() => { cancelSubClose(); setOpenSub(d.label) }}
                              onMouseLeave={scheduleSubClose}
                            >
                              {d.to ? (
                                <NavLink
                                  to={d.to}
                                  className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-sm hover:bg-primary-50 hover:text-primary-700"
                                  onClick={() => handleNavClick(d.to!)}
                                >
                                  {d.label}
                                  <ChevronRight />
                                </NavLink>
                              ) : (
                                <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-sm text-gray-500 cursor-default select-none">
                                  {d.label}
                                  <ChevronRight />
                                </div>
                              )}

                              <div
                                className={`absolute left-full top-0 ml-1 w-64 rounded-2xl border border-gray-100 bg-white shadow-soft p-2 max-h-[70vh] overflow-auto z-50 transition ${
                                  openSub === d.label ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                                }`}
                                onMouseEnter={cancelSubClose}
                                onMouseLeave={scheduleSubClose}
                              >
                                {d.children!.map((c) => (
                                  <NavLink
                                    key={c.to}
                                    to={c.to!}
                                    className="block px-3 py-2 rounded-xl text-sm hover:bg-primary-50 hover:text-primary-700"
                                    onClick={() => handleNavClick(c.to!)}
                                  >
                                    {c.label}
                                  </NavLink>
                                ))}
                              </div>
                            </div>
                          )
                        })}
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
                            {n.dropdown!.map((d) => {
                              const hasChildren = !!d.children?.length

                              if (!hasChildren) {
                                return (
                                  <NavLink
                                    key={d.to}
                                    to={d.to!}
                                    className="block px-3 py-2 rounded-lg text-[14px] text-gray-800 hover:bg-primary-50 hover:text-primary-700"
                                    onClick={() => handleNavClick(d.to!)}
                                  >
                                    {d.label}
                                  </NavLink>
                                )
                              }

                              const isSubOpen = mobileOpenSub === d.label

                              return (
                                <div key={d.label} className="rounded-lg overflow-hidden">
                                  <div className="flex items-center">
                                    {d.to ? (
                                      <NavLink
                                        to={d.to}
                                        className="flex-1 px-3 py-2 block text-[14px] text-gray-800 hover:bg-primary-50 hover:text-primary-700"
                                        onClick={() => handleNavClick(d.to!)}
                                      >
                                        {d.label}
                                      </NavLink>
                                    ) : (
                                      <span className="flex-1 px-3 py-2 block text-[14px] text-gray-500">
                                        {d.label}
                                      </span>
                                    )}
                                    <button
                                      type="button"
                                      className="px-3 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50"
                                      onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setMobileOpenSub((cur) => (cur === d.label ? null : d.label))
                                      }}
                                      aria-expanded={isSubOpen}
                                      aria-label={`${d.label} meniu`}
                                    >
                                      {isSubOpen ? '−' : '+'}
                                    </button>
                                  </div>

                                  <AnimatePresence initial={false}>
                                    {isSubOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.18, ease: 'easeOut' }}
                                        className="bg-white"
                                      >
                                        <div className="pl-3 pb-1">
                                          {d.children!.map((c) => (
                                            <NavLink
                                              key={c.to}
                                              to={c.to!}
                                              className="block px-3 py-2 rounded-lg text-[13px] text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                                              onClick={() => handleNavClick(c.to!)}
                                            >
                                              {c.label}
                                            </NavLink>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              )
                            })}
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
