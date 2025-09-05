import { CLINIC } from '../data/clinic'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      {/* Top */}
      <div className="container-narrow py-10 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-3">
          <Link to="/" aria-label="Bangų klinika — pradžia" className="inline-flex items-center">
            {/* mažesnis logotipas, neapvalintas, neišpūčia footerio */}
            <img
              src="/logo.png"
              alt="Bangų klinika"
              className="h-8 w-auto object-contain select-none"
              draggable={false}
            />
          </Link>
          <p className="text-sm text-gray-600 max-w-xs">
            Moderni odontologija Klaipėdos centre.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold text-[#10394F] mb-3">Navigacija</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/paslaugos" className="hover:text-primary-700">Paslaugos</Link></li>
            <li><Link to="/kainos" className="hover:text-primary-700">Kainos</Link></li>
            <li><Link to="/kontaktai" className="hover:text-primary-700">Kontaktai</Link></li>
            <li><Link to="/apie" className="hover:text-primary-700">Apie</Link></li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-sm font-semibold text-[#10394F] mb-3">Kontaktai</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>{CLINIC.address}</li>
            <li>
              <a href={`tel:${CLINIC.phone}`} className="hover:text-primary-700">
                {CLINIC.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CLINIC.email}`} className="hover:text-primary-700">
                {CLINIC.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-sm font-semibold text-[#10394F] mb-3">Darbo laikas</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            {CLINIC.hours.map(h => (
              <li key={h.day}>
                <span className="inline-block w-24">{h.day}:</span> {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-100">
        <div className="container-narrow py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} Bangų klinika. Visos teisės saugomos.
          </p>
          <p className="text-xs text-gray-400">
            Sukurta su meile • Klaipėda
          </p>
        </div>
      </div>
    </footer>
  )
}
