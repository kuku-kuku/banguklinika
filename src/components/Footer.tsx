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
      <div className="container-narrow py-12 grid gap-10 md:grid-cols-4 text-sm">
        {/* Brand */}
        <div className="space-y-4">
          <Link
            to="/"
            aria-label="Bangų klinika — pradžia"
            className="inline-flex items-center"
          >
            {/* VARIANTAS A: paveikslėlis (invertuoja į baltą) */}
            <img
              src="/logo.png"
              alt="Bangų klinika"
              className="h-8 sm:h-10 w-auto object-contain select-none invert"
              draggable={false}
            />

            {/* VARIANTAS B: Tekstinis baltas logotipas */}
            {/* <TextLogo className="ml-2" /> */}
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
        <div>
          <h4 className="text-sm font-semibold mb-3">Navigacija</h4>
          <ul className="space-y-2">
            <li><Link to="/paslaugos" className="footer-link">Paslaugos</Link></li>
            <li><Link to="/kainos" className="footer-link">Kainos</Link></li>
            <li><Link to="/kontaktai" className="footer-link">Kontaktai</Link></li>
            <li><Link to="/apie" className="footer-link">Apie</Link></li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Kontaktai</h4>
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
        <div>
          <h4 className="text-sm font-semibold mb-3">Darbo laikas</h4>
          <ul className="space-y-1">
            {CLINIC.hours.map(h => (
              <li key={h.day} className="inline-flex items-center gap-2 text-white/90">
                <Clock size={14} className="opacity-80" />
                <span className="inline-block w-24">{h.day}:</span> <span>{h.time}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <Link to="/kontaktai" className="btn-primary rounded-xl text-sm">
              Registracija internetu
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-darkblue-700">
        <div className="container-narrow py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <p>
            © {new Date().getFullYear()} Bangų klinika. Visos teisės saugomos.
          </p>
          <p>Sukurta su meile • Lukas</p>
        </div>
      </div>
    </footer>
  )
}
