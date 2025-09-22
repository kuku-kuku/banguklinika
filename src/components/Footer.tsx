import { CLINIC } from '../data/clinic'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

/** Tekstinis „logo“, kai paveikslėlis turi foną arba norim idealaus kontrasto */
function TextLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`leading-tight ${className}`}>
      <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
        Bangų klinika
      </span>
      <span className="block text-sm font-medium tracking-wide text-white/80">
        Odontologija
      </span>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer-dark">
      {/* Top */}
      <div className="container-narrow py-12 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" aria-label="Bangų klinika — pradžia" className="inline-flex items-center">
            {/* VARIANTAS A: paveikslėlis su blend (jei fonas tikrai baltas) */}
            <img
              src="/bangu1.png"
              alt="Bangų klinika"
              className="h-12 sm:h-14 w-auto object-contain select-none mix-blend-difference invert"
              draggable={false}
            />

            {/* VARIANTAS B: tekstinis logotipas (aktyvuok vietoj paveikslėlio, jei PNG atrodo blogai) */}
            {/* <TextLogo className="ml-2" /> */}
          </Link>

          <p className="text-sm text-white/80 max-w-xs">
            Moderni odontologija Klaipėdos centre.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="pin-dark">
              <MapPin size={16} /> {CLINIC.city || 'Klaipėda'}
            </span>
            <span className="pin-dark">
              <Clock size={16} /> {CLINIC.hours?.[0]?.time || 'I–V 9:00–18:00'}
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Navigacija</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/paslaugos" className="footer-link">Paslaugos</Link></li>
            <li><Link to="/kainos" className="footer-link">Kainos</Link></li>
            <li><Link to="/kontaktai" className="footer-link">Kontaktai</Link></li>
            <li><Link to="/apie" className="footer-link">Apie</Link></li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Kontaktai</h4>
          <ul className="space-y-2 text-sm">
            <li className="footer-pin">
              <MapPin size={16} />
              <span>{CLINIC.address}</span>
            </li>
            <li>
              <a href={`tel:${CLINIC.phone}`} className="footer-link inline-flex items-center gap-2">
                <Phone size={16} />
                <span>{CLINIC.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${CLINIC.email}`} className="footer-link inline-flex items-center gap-2">
                <Mail size={16} />
                <span>{CLINIC.email}</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Darbo laikas</h4>
          <ul className="space-y-1 text-sm">
            {CLINIC.hours.map(h => (
              <li key={h.day} className="inline-flex items-center gap-2 text-white/90">
                <Clock size={16} className="opacity-80" />
                <span className="inline-block w-28">{h.day}:</span> <span>{h.time}</span>
              </li>
            ))}
          </ul>

          {/* Greita registracija */}
          <div className="mt-4">
            <Link to="/kontaktai" className="btn btn-primary rounded-xl">
              Registracija internetu
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-darkblue-700">
        <div className="container-narrow py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="footer-meta">
            © {new Date().getFullYear()} Bangų klinika. Visos teisės saugomos.
          </p>
          <p className="footer-meta">
            Sukurta su meile • Klaipėda
          </p>
        </div>
      </div>
    </footer>
  )
}
