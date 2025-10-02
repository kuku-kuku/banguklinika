import { CLINIC } from '../data/clinic'
import { Link, useLocation } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

/** lipnios antraštės aukščio kompensacija (jei reikia) */
function getHeaderOffset(): number {
  const sticky = document.querySelector('header.sticky') as HTMLElement | null
  return sticky ? sticky.getBoundingClientRect().height : 0
}

function scrollToWithOffset(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  const y = window.scrollY + rect.top - (getHeaderOffset() + 12)
  window.scrollTo({ top: y, behavior: 'smooth' })
}

function findFormEl(): HTMLElement | null {
  return (
    document.getElementById('registracija') ||
    document.getElementById('contact-form') ||
    (document.querySelector('[data-contact-form]') as HTMLElement | null)
  )
}

/** Patikimas scroll: bando kelis kartus, kol forma atsiranda DOM’e */
function robustScrollToForm() {
  const hit = () => {
    const el = findFormEl()
    if (el) {
      scrollToWithOffset(el)
      return true
    }
    return false
  }
  if (hit()) return
  let tries = 0
  const max = 30 // ~6s
  const timer = setInterval(() => {
    tries++
    if (hit() || tries >= max) clearInterval(timer)
  }, 200)
}

export default function Footer() {
  const location = useLocation()
  const { pathname } = location

  // ----- Nauja: pamatuojame darbo laiko UL aukštį (tikrų 3 eilučių), kad mygtukas būtų identiško dydžio
  const hoursListRef = useRef<HTMLUListElement | null>(null)
  const [hoursBodyHeight, setHoursBodyHeight] = useState<number>(0)

  useEffect(() => {
    const el = hoursListRef.current
    if (!el) return

    const measure = () => setHoursBodyHeight(el.offsetHeight || 0)

    // pirminis matavimas
    measure()

    // reaguojame į turinio/perdėliojimo pokyčius
    const ro = new ResizeObserver(measure)
    ro.observe(el)

    // reaguojame į lango pločio/šrifto pokyčius
    const onResize = () => measure()
    window.addEventListener('resize', onResize)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Sureaguojame, jei atėjome su hash’u į kontaktus (fallback)
  useEffect(() => {
    if (
      location.pathname === '/kontaktai' &&
      (location.hash === '#registracija' || location.hash === '#contact-form')
    ) {
      robustScrollToForm()
    }
  }, [location.pathname, location.hash])

  const handleRegistrationClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (pathname === '/kontaktai') {
      e.preventDefault()
      robustScrollToForm()
    }
  }

  return (
    <footer className="footer-dark">
      {/* Top */}
      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-12 grid gap-10 grid-cols-2 md:grid-cols-12 text-sm">
        {/* Brand */}
        <div className="space-y-4 col-span-2 md:col-span-4">
          <Link to="/" aria-label="Bangų klinika — pradžia" className="inline-flex items-center gap-3">
            <img src="/logo1.png" alt="Bangų klinika" className="h-12 sm:h-20 w-auto object-contain select-none" draggable={false} />
          </Link>

          <p className="text-xs text-white/80 max-w-xs">Moderni odontologija Klaipėdos centre.</p>
          <div className="flex flex-wrap gap-2 pt-1 text-xs">
            <span className="pin-dark"><MapPin size={14} /> {CLINIC.address}</span>
            <span className="pin-dark"><Clock size={14} /> {CLINIC.hours?.[0]?.time || 'I–V 9:00–18:00'}</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-sm font-semibold mb-3 text-white">Navigacija</h4>
          <ul className="space-y-2">
            <li><Link to="/paslaugos" className="footer-link">Paslaugos</Link></li>
            <li><Link to="/kainos" className="footer-link">Kainos</Link></li>
            <li><Link to="/kontaktai" className="footer-link">Kontaktai</Link></li>
            <li><Link to="/apie" className="footer-link">Apie</Link></li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="col-span-1 md:col-span-3">
          <h4 className="text-sm font-semibold mb-3 text-white">Kontaktai</h4>
          <ul className="space-y-2">
            <li className="footer-pin"><MapPin size={14} /><span>{CLINIC.address}</span></li>
            <li><a href={`tel:${CLINIC.phone}`} className="footer-link inline-flex items-center gap-2"><Phone size={14} /><span>{CLINIC.phone}</span></a></li>
            <li><a href={`mailto:${CLINIC.email}`} className="footer-link inline-flex items-center gap-2"><Mail size={14} /><span>{CLINIC.email}</span></a></li>
          </ul>
        </div>

        {/* Hours + Desktop CTA */}
        <div className="col-span-1 md:col-span-3">
          <h4 className="text-sm font-semibold mb-3 text-white">Darbo laikas</h4>
          {/* ⬇️ šiam UL uždedame ref — matuosime tik UL aukštį, be antraštės */}
          <ul className="space-y-1" ref={hoursListRef}>
            {CLINIC.hours.map(h => (
              <li key={h.day} className="flex items-center justify-between text-white/90">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="opacity-80" />
                  <span>{h.day}</span>
                </div>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>

          {/* Desktop: mygtukas dešinėje, nukreipia į formą */}
          <div className="mt-4 hidden md:flex justify-end">
            <Link
              to="/kontaktai#registracija"
              onClick={handleRegistrationClick}
              className="btn btn-primary rounded-xl"
            >
              Registracija internetu
            </Link>
          </div>
        </div>

        {/* MOBILE: „burbulas“ to paties aukščio kaip UL (3 eilutės) ir centruotas H/V */}
        <div className="col-span-1 md:hidden">
          <div
            className="w-full flex justify-center items-center"
            style={{
              // jei dar neapskaičiuota, turėk mažą atsarginį aukštį, kad nekraipytų layout
              height: hoursBodyHeight ? `${hoursBodyHeight}px` : undefined,
              minHeight: hoursBodyHeight ? undefined : 64,
            }}
          >
            <Link
              to="/kontaktai#registracija"
              onClick={handleRegistrationClick}
              className="btn btn-primary rounded-full text-sm leading-tight px-4 py-2 w-10/12 max-w-[220px] text-center"
            >
              Registracija internetu
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-darkblue-700">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <p>© {new Date().getFullYear()} Bangų klinika. Visos teisės saugomos.</p>
          <p>Sukurta su meile • Lukas</p>
        </div>
      </div>
    </footer>
  )
}
