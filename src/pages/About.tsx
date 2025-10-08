// src/pages/About.tsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 }
  }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

const services: string[] = [
  'Dantų gydymas, konsultacijos dantų priežiūros klausimais.',
  'Dantų plombavimas.',
  'Implantai (Straumann®, Medentika®).',
  'Skaitmeninis dantų protezavimas CEREC sistema, protezavimas ant implantų, dantų karūnėlės, dantų tiltai, vainikėliai, užklotai, laminatės.',
  'Dantų protezavimas iš karto vietoje.',
  'Mikroprotezavimas (daliniai vainikėliai – karūnėlės, įklotai, užklotai, laminatės).',
  'Profesionali burnos higiena.',
  'Estetinis dantų plombavimas.',
  'Vaikų dantų gydymas.',
  'Dantų traukimas, dantų šaknų šalinimas.',
  'Kaulo priauginimo, sinuso dugno pakėlimo operacijos.',
  'Dantų protezavimas bemetale E-MAX IVOCLAR ir cirkonio keramika.',
  'Dantų tiesinimas skaidriomis ORDOLINE kapomis.',
]

type Member = { name: string; role: string; license?: string }
const team: Member[] = [
  { name: 'Martyna Pociutė', role: 'Gydytoja odontologė', license: 'OPL-06430' },
  { name: 'Donatas Kubilius', role: 'Veido ir žandikaulių chirurgas', license: 'MPL-18980' },
  { name: 'Eglė Daknienė', role: 'Dantų technikė', license: 'BPL-04671' },
  { name: 'Rūta Garšvienė', role: 'Burnos higienistė, gydymo tiesinimo kapomis koordinatorė', license: 'BPL-07858' },
  { name: 'Goda Daknytė', role: 'Klinikos administracijos vadovė' },
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export default function About() {
  return (
    <AnimatedSection>
      <SEO
        title="Apie mus"
        description="Jauki ir moderni odontologijos klinika Klaipėdoje. Visos paslaugos vienoje vietoje: gydymas, protezavimas, implantai, higiena, chirurgija ir kt."
      />

      <motion.div
        className="container-narrow"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Hero tekstas */}
        <motion.header className="mb-6" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700">
            Moderni Odontologijos Klinika Klaipėdoje
          </h1>
        </motion.header>

        <motion.div className="prose prose-slate max-w-none mb-8" variants={item}>
          <p>
            Bangų Odontologijos Klinika – jauki ir moderni odontologijos klinika Klaipėdoje. Čia vadovaujamės idėja, jog
            apsilankymas pas odontologą neturi būti gąsdinantis. Priešingai – jis gali būti malonus. Todėl kiekvieną klientą
            pasitinkame su pozityvia energija ir siekiame, kad pasibaigus vizitui klientas išeitų su plačia, dailia ir sveika šypsena.
          </p>
        </motion.div>

        {/* Paslaugos (dviejų stulpelių sąrašas – stabilūs tarpai) */}
        <motion.section className="mb-10" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Odontologijos klinikoje teikiamos paslaugos
          </h2>

          <div className="grid sm:grid-cols-2 gap-2">
            {/* Kairys stulpelis: lyginiai indeksai */}
            <div className="space-y-2">
              {services.filter((_, i) => i % 2 === 0).map((s, i) => (
                <motion.div
                  key={`L-${i}-${s}`}
                  variants={item}
                  className="flex items-start gap-2 text-slate-700"
                >
                  <span className="text-brand mt-1">
                    <CheckIcon />
                  </span>
                  <span className="text-sm leading-relaxed">{s}</span>
                </motion.div>
              ))}
            </div>

            {/* Dešinys stulpelis: nelyginiai indeksai */}
            <div className="space-y-2">
              {services.filter((_, i) => i % 2 === 1).map((s, i) => (
                <motion.div
                  key={`R-${i}-${s}`}
                  variants={item}
                  className="flex items-start gap-2 text-slate-700"
                >
                  <span className="text-brand mt-1">
                    <CheckIcon />
                  </span>
                  <span className="text-sm leading-relaxed">{s}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Laboratorija — turkio rėmelis (blur perkeliam į foną) */}
        <motion.section
          className="mb-10 rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-5 relative overflow-hidden"
          variants={item}
        >
          {/* dekoratyvinis blynas nebekerta teksto */}
          <div className="pointer-events-none absolute -top-10 -right-10 -z-10 w-48 h-48 rounded-full bg-brand-50 blur-3xl" />
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-3">Dantų technikos laboratorija</h2>
          <div className="text-slate-700 space-y-3">
            <p>
              Bangų Odontologijos Klinikoje veikia profesionali dantų technikos laboratorija, kurioje paruošiami odontologijai,
              implantologijai, protezavimui reikalingi gaminiai. Bemetalės keramikos dantų vainikėliai, laikini vainikėliai,
              dantų tiltai, protezai ant implantų, lanko atraminiai protezai, laminatės ir kiti gaminiai ruošiami naudojant
              aukščiausios kokybės medžiagas ir modernią įrangą.
            </p>
            <p>
              Skaitmeninių technologijų pagalba visi gaminiai itin tiksliai modeliuojami ir pritaikomi kiekvienam pacientui individualiai.
              Protezavimo tikslumas – būtinas nepriekaištingam estetiniam vaizdui ir visiškam komfortui.
            </p>
            <p className="text-sm text-slate-600">
              Dirbame su pasauliniais gamintojais: E-MAX Ivoclar Vivadent, Straumann®, Medentika® ir kt.
            </p>
          </div>
        </motion.section>

        {/* Komanda — turkio rėmeliai */}
        <motion.section className="mb-8" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Bangų Odontologijos Klinikos kolektyvas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((m) => (
              <motion.div
                key={m.name}
                variants={item}
                className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-4"
              >
                <div className="font-semibold text-slate-900">{m.name}</div>
                <div className="text-sm text-slate-600">{m.role}</div>
                {m.license && (
                  <div className="text-xs text-slate-500 mt-1">Licencijos Nr. {m.license}</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA į kainoraštį — suvienodintas mygtukas */}
        <motion.div className="mt-6" variants={item}>
          <Link to="/kainos" className="btn-primary rounded-full px-6 py-3 font-semibold">
            Bangų klinikoje teikiamų paslaugų kainoraštis
          </Link>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  )
}
