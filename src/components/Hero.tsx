import { Link } from 'react-router-dom'
import { CLINIC } from '../data/clinic'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="section">
      <div className="container-narrow grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="chip">Odontologija Klaipėdoje • Bangų g. 7-3</div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}
          >
            Šypsena, kurios <span className="text-primary-700">norisi</span> rodyti
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .1, duration: .6 }}
          >
            Gydymas, implantacija, CEREC protezavimas, higiena ir estetika – vienoje klinikoje.
            Greita registracija, švelnus požiūris, aiškios kainos.
          </motion.p>
          <motion.div className="flex flex-wrap gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>
            <a href={`tel:${CLINIC.phone}`} className="btn-primary">Registracija telefonu</a>
            <Link to="/kainos" className="btn-ghost">Peržiūrėti kainas</Link>
          </motion.div>
          <ul className="text-sm text-gray-600 grid grid-cols-2 gap-y-2">
            <li>• Straumann® / Medentika® implantai</li>
            <li>• CEREC – vainikėliai per 1 vizitą</li>
            <li>• Estetinis plombavimas</li>
            <li>• Profesionali higiena (AIRFLOW®)</li>
          </ul>
        </div>
        <motion.div className="relative" initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }}>
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-200 to-primary-500/60"></div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow p-4">
            <p className="text-sm">Bangų klinika • {CLINIC.address}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
