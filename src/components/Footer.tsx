// src/components/Footer.tsx
import { CLINIC } from '../data/clinic'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

/** Tekstinis „logo“ baltomis raidėmis */
function TextLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`leading-tight ${className}`}>
      <span className="block text-xl sm:text-2xl font-extrabold tracking-tight text-white">
        Bangų klinika
      </span>
      <span className="block text-xs sm:text-sm font-medium tracking-wide text-white/80">
        Odontologija
      </span>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer-dark">
      {/* Top */}
      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-12 grid gap-10 grid-cols-2 md:grid-cols-12 text-sm">
        {/* Brand – visame plote mobile, 4/12 desktop */}
        <div className="space-y-4 col-span-2 md:col-span-4">
          <Link
            to="/"
            aria-label="Bangų klinika — pradžia"
            className="inline-flex items-center gap-3"
          >
            <img
              src="/logo1.png"
              alt="Bangų klinika"
              className="h-12 sm:h-20 w-auto object-contain select-none"
              draggable={false}
            />
          </Link>

          <p className="text-xs text-white/80 max-w-xs">
            Moderni odontologija Klaipėdos centre.
          </p>
          <div className="flex flex-wrap gap-2 pt-1 text-xs">
            <span className="pin-dark">
              <MapPin size={14} /> {CLINIC.address}
            </span>
            <span className="pin-dark">
              <Clock size={14} /> {CLINIC.hours?.[0]?.time || 'I–V 9:00–18:00'}
            </span>
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
            <li className="footer-pin">
              <MapPin size={14} />
              <span>{CLINIC.address}</span>
            </li>
            <li>
              <a href={`tel:${CLINIC.phone}`} className="footer-link inline-flex items-center gap-2">
                <Phone size={14} />
                <span>{CLINIC.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${CLINIC.email}`} className="footer-link inline-flex items-center gap-2">
                <Mail size={14} />
                <span>{CLINIC.email}</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="col-span-1 md:col-span-3">
          <h4 className="text-sm font-semibold mb-3 text-white">Darbo laikas</h4>
          <ul className="space-y-1">
            {CLINIC.hours.map(h => (
              <li
                key={h.day}
                className="flex items-center justify-between text-white/90"
              >
                <div className="flex items-center gap-2">
                  <Clock size={14} className="opacity-80" />
                  <span>{h.day}</span>
                </div>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <Link to="/kontaktai" className="btn btn-primary rounded-xl">
              Registracija internetu
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-darkblue-700">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <p>
            © {new Date().getFullYear()} Bangų klinika. Visos teisės saugomos.
          </p>
          <p>Sukurta su meile • Lukas</p>
        </div>
      </div>
    </footer>
  )
}
