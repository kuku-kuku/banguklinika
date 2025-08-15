import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

type DropItem = { to: string; label: string }
type NavItem =
  | { to: string; label: string; dropdown?: undefined }
  | { to: string; label: string; dropdown: DropItem[] }

const nav: NavItem[] = [
  { to: '/', label: 'Pradžia' },
  {
    to: '/paslaugos',
    label: 'Paslaugos',
    dropdown: [
      { to: '/paslaugos#plombavimas', label: 'Plombavimas' },
      { to: '/paslaugos#implantai', label: 'Implantacija' },
      { to: '/paslaugos#protezavimas', label: 'CEREC protezavimas' },
      { to: '/paslaugos#estetika', label: 'Estetika' },
      { to: '/paslaugos#higiena', label: 'Burnos higiena' },
    ],
  },
  { to: '/kainos', label: 'Kainos' },
  { to: '/kontaktai', label: 'Kontaktai' },
]

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const closeTimer = useRef<number | null>(null)
  const location = useLocation()

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpenIndex(null), 120)
  }
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = null
  }

  // Uždaryk, kai pasikeičia path ar hash
  useEffect(() => {
    setOpenIndex(null)
    setOpenMobile(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current)
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => { setOpenMobile(false); setOpenIndex(null) }}
        >
          <div className="w-9 h-9 rounded-xl bg-primary-600 text-white grid place-items-center font-bold">B</div>
          <span className="font-semibold">Bangų klinika</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n, idx) => {
            const hasDrop = 'dropdown' in n && Array.isArray(n.dropdown)
            const menuId = hasDrop ? `nav-menu-${idx}` : undefined

            return (
              <div
                key={n.to}
                className="relative"
                onMouseEnter={() => setOpenIndex(hasDrop ? idx : null)}
                onMouseLeave={scheduleClose}
              >
                <NavLink
                  to={n.to}
                  className={({ isActive }) =>
                    `text-sm ${isActive ? 'text-primary-700 font-semibold' : 'text-gray-700 hover:text-primary-700'}`
                  }
                  onMouseEnter={() => !hasDrop && setOpenIndex(null)}
                  onClick={() => setOpenIndex(null)}
                  aria-haspopup={hasDrop ? true : undefined}
                  aria-expanded={hasDrop ? openIndex === idx : undefined}
                  aria-controls={menuId}
                >
                  {n.label}
                </NavLink>

                {hasDrop && (
                  <div
                    id={menuId}
                    role="menu"
                    className={`absolute left-1/2 -translate-x-1/2 top-full z-50 pt-3 transition ${
                      openIndex === idx ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => cancelClose()}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="w-64 rounded-2xl border border-gray-100 bg-white shadow-soft p-2">
                      {n.dropdown!.map((d) => (
                        <NavLink
                          key={d.to}
                          to={d.to}
                          className="block px-3 py-2 rounded-xl text-sm hover:bg-primary-50"
                          onClick={() => setOpenIndex(null)}
                        >
                          {d.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Mobile */}
        <button className="md:hidden btn-ghost" onClick={() => setOpenMobile(v => !v)} aria-expanded={openMobile}>
          Meniu
        </button>
      </div>

      <div className={`md:hidden border-t border-gray-100 bg-white transition ${openMobile ? 'block' : 'hidden'}`}>
        <div className="container-narrow py-2 grid gap-2">
          {nav.map((n) => (
            <div key={n.to}>
              <NavLink
                to={n.to}
                className="px-2 py-2 rounded-lg hover:bg-primary-50 block"
                onClick={() => { setOpenMobile(false); setOpenIndex(null) }}
              >
                {n.label}
              </NavLink>
              {'dropdown' in n && n.dropdown && (
                <div className="ml-2 my-2 grid">
                  {n.dropdown.map((d) => (
                    <NavLink
                      key={d.to}
                      to={d.to}
                      className="px-3 py-2 rounded-lg hover:bg-primary-50 text-sm"
                      onClick={() => { setOpenMobile(false); setOpenIndex(null) }}
                    >
                      {d.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
