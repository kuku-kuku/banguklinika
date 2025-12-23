import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
      { to: '/paslaugos#skubi-pagalba', label: 'Skubi pagalba' },
      { to: '/paslaugos/dantu-protezavimas', label: 'Dantų protezavimas' },
      { to: '/paslaugos#kompensuojamas-dantu-protezavimas', label: 'Kompensuojamas dantų protezavimas' },
      { to: '/paslaugos/dantu-taisymas-gydymas', label: 'Dantų gydymas' },
      { to: '/paslaugos#implantai', label: 'Implantai' },
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
  { to: '/kontaktai', label: 'Kontaktai' },
]

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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
  }, [location.pathname, location.hash])

  useEffect(() => {
    return () => { if (closeTimer.current) window.clearTimeout(closeTimer.current) }
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

  /** Vieningas click handler'is: mobilui uždarom meniu ir scrollinam į viršų, jei nėra hash */
  function handleNavClick(to: string) {
    setOpenIndex(null)
    setOpenMobile(false)

    const hasHash = to.includes('#')
    // Jei spaudžiam NavLink, RR pats naviguos – bet mobile norim ir "į viršų", jei nėra hash
    // Jei čia būtų paprastas <a>, darytumėm preventDefault + navigate(to)
    if (!hasHash) {
      // paliekam instant, kad nebūtų jank
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }))
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="container-narrow flex min-h-[72px] items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => { setOpenMobile(false); setOpenIndex(null); requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })) }}
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
          {nav.map((n, idx) => {
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
                  className={({ isActive }) =>
                    [
                      'relative text-[15px] md:text-[16px] font-medium transition-colors',
                      isActive ? 'text-primary-700' : 'text-gray-800 hover:text-primary-700',
                      'py-2'
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
                        (openIndex === idx) ? 'bg-primary-600' : '',
                      ].join(' ')}
                    />
                  </span>
                </NavLink>

                {hasDrop && (
                  <>
                    <div aria-hidden className="absolute left-0 right-0 top-full h-2" onMouseEnter={cancelClose} />
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

        {/* Mobile toggle */}
        <button
          className="md:hidden btn-ghost text-[15px] font-medium"
          onClick={() => setOpenMobile(v => !v)}
          aria-expanded={openMobile}
          aria-label="Meniu"
        >
          Meniu
        </button>
      </div>

      {/* Mobile overlay menu (fixed, be blur – mažiau jank) */}
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
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className="px-2 py-2 rounded-lg hover:bg-primary-50 hover:text-primary-700 block text-[15px] font-medium"
                  onClick={() => handleNavClick(n.to)}
                >
                  {n.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
