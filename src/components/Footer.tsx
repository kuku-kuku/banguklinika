import { CLINIC } from '../data/clinic'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="container-narrow py-12 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <div className="w-10 h-10 rounded-xl bg-primary-600 text-white grid place-items-center font-bold">B</div>
          <p className="text-sm text-gray-600">Moderni odontologija Klaipėdos centre.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Navigacija</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/paslaugos" className="hover:text-primary-700">Paslaugos</Link></li>
            <li><Link to="/kainos" className="hover:text-primary-700">Kainos</Link></li>
            <li><Link to="/kontaktai" className="hover:text-primary-700">Kontaktai</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Kontaktai</h4>
          <ul className="space-y-2 text-sm">
            <li>{CLINIC.address}</li>
            <li><a href={`tel:${CLINIC.phone}`} className="hover:text-primary-700">{CLINIC.phone}</a></li>
            <li><a href={`mailto:${CLINIC.email}`} className="hover:text-primary-700">{CLINIC.email}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Darbo laikas</h4>
          <ul className="space-y-1 text-sm">
            {CLINIC.hours.map(h => <li key={h.day}>{h.day}: {h.time}</li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Bangų klinika. Visos teisės saugomos.
      </div>
    </footer>
  )
}
