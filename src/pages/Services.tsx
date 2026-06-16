import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'

type Svc = {
  id: string
  title: string
  description?: string
  to?: string
  expandable?: React.ReactNode
}

const WaveMark = ({ className }: { className?: string }) => (
  <img
    src="/Asset 53@2x.png"
    alt=""
    aria-hidden
    className={className}
    draggable={false}
  />
)

function ServiceCard({ svc }: { svc: Svc }) {
  const [open, setOpen] = useState(false)

  const inner = (
    <div className="relative overflow-hidden rounded-2xl bg-white border border-[#262626]/15 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#262626]/30 group h-full flex flex-col">
      {/* Wave watermark — bottom right, visible */}
      <WaveMark className="absolute -bottom-5 -right-5 w-32 h-32 opacity-[0.10] pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-[0.18]" />

      <div className="relative z-10 px-7 py-8 flex items-center justify-between gap-4 flex-1 min-h-[120px]">
        <h3 className="text-[17px] font-bold text-[#043F42] group-hover:text-[#0ABBB5] transition-colors duration-200 leading-snug">
          {svc.title}
        </h3>

        {svc.expandable && (
          <button
            onClick={e => { e.preventDefault(); setOpen(v => !v) }}
            className="shrink-0 w-9 h-9 rounded-full bg-[#F4F5F4] hover:bg-[#0ABBB5] flex items-center justify-center text-[#043F42] hover:text-white transition-all duration-300 focus:outline-none"
            aria-expanded={open}
          >
            <svg className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        )}
      </div>

      {svc.expandable && (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1, transition: { height: { duration: 0.28 }, opacity: { duration: 0.2, delay: 0.05 } } }}
              exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.22 }, opacity: { duration: 0.15 } } }}
              className="overflow-hidden"
            >
              <div className="relative z-10 px-6 pb-6 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-100">
                <div className="pt-4">{svc.expandable}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )

  if (svc.to) {
    return (
      <Link to={svc.to} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0ABBB5] rounded-2xl">
        {inner}
      </Link>
    )
  }

  return <div className="h-full">{inner}</div>
}

export default function Services() {
  const sections: Svc[] = useMemo(() => [
    {
      id: 'dantu-implantacija',
      title: 'Dantų implantacija',
      to: '/paslaugos/dantu-implantacija',
    },
    {
      id: 'skubi-pagalba',
      title: 'Skubi pagalba',
      to: '/paslaugos/skubi-pagalba',
    },
    {
      id: 'dantu-protezavimas',
      title: 'Dantų protezavimas',
      to: '/paslaugos/dantu-protezavimas',
    },
    {
      id: 'dantu-gydymas',
      title: 'Dantų gydymas',
      to: '/paslaugos/dantu-taisymas-gydymas',
    },
    {
      id: 'dantu-tiesinimas',
      title: 'Dantų tiesinimas',
      to: '/paslaugos/dantu-tiesinimas',
    },
    {
      id: 'burnos-higiena',
      title: 'Burnos higiena',
      to: '/paslaugos/burnos-higiena',
    },
    {
      id: 'burnos-chirurgija',
      title: 'Burnos chirurgija',
      to: '/paslaugos/burnos-chirurgija',
    },
    {
      id: 'dantu-balinimas',
      title: 'Dantų balinimas',
      to: '/paslaugos/dantu-balinimas',
    },
    {
      id: 'estetinis-plombavimas',
      title: 'Estetinis plombavimas',
      to: '/paslaugos/estetinis-plombavimas',
    },
    {
      id: 'dantu-plombavimas',
      title: 'Dantų plombavimas',
      to: '/paslaugos/dantu-plombavimas',
    },
    {
      id: 'dantu-traukimas',
      title: 'Dantų traukimas',
      to: '/paslaugos/dantu-traukimas',
    },
    {
      id: 'endodontinis-gydymas',
      title: 'Endodontinis gydymas',
      to: '/paslaugos/endodontinis-gydymas',
    },
    {
      id: 'vaiku-odontologija',
      title: 'Vaikų odontologija',
      to: '/paslaugos/vaiku-odontologija',
    },
    {
      id: 'kompensuojamas-dantu-protezavimas',
      title: 'TLK lėšomis kompensuojamas dantų protezavimas',
      expandable: (
        <div className="space-y-2">
          <p>
            Bangų odontologijos klinika yra sudariusi sutartį su Teritorinėmis ligonių kasomis (TLK),
            kurios skiria kompensaciją dantų protezavimo išlaidoms iš Privalomojo sveikatos draudimo fondo (PSDF).
          </p>
          <p>Teisę į kompensuojamą protezavimą turi:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Asmenys, kuriems sukako senatvės pensijos amžius</li>
            <li>Vaikai iki 18 metų</li>
            <li>Asmenys, pripažinti nedarbingais arba iš dalies darbingais</li>
            <li>Asmenys po burnos, veido ir žandikaulių onkologinių ligų gydymo</li>
          </ul>
          <p className="text-xs text-slate-400 pt-1">
            Detalesnė ir nuolat atnaujinama informacija skelbiama TLK interneto svetainėje.
          </p>
        </div>
      ),
    },
  ], [])

  const gridRef = useRef<HTMLDivElement>(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' })

  return (
    <>
      <SEO
        title="Paslaugos"
        description="Skubi pagalba, dantų protezavimas, kompensuojamas protezavimas, dantų gydymas, implantai, tiesinimas, higiena, chirurgija, balinimas, plombavimas, traukimas, endodontija, vaikų odontologija."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F4F5F4]">
        <div className="container-narrow py-16 md:py-24 relative z-10">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="text-sm font-semibold tracking-widest uppercase text-[#0ABBB5] mb-3"
            >
              Bangų klinika
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#043F42] leading-tight"
            >
              Paslaugos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.4, 0, 0.2, 1] }}
              className="mt-5 text-slate-500 text-lg leading-relaxed max-w-lg"
            >
              Visapusiška odontologo pagalba – nuo profilaktikos iki implantų. Pasirinkite dominančią paslaugą.
            </motion.p>
          </div>
        </div>

        {/* Decorative wave logo — right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none"
          aria-hidden
        >
          <img src="/Asset 53@2x.png" alt="" className="w-64 h-64 md:w-96 md:h-96 opacity-[0.13]" draggable={false} />
        </motion.div>

        {/* second smaller — bottom left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="absolute -left-8 bottom-0 translate-y-1/3 pointer-events-none select-none"
          aria-hidden
        >
          <img src="/Asset 53@2x.png" alt="" className="w-44 h-44 opacity-[0.06]" draggable={false} />
        </motion.div>
      </section>

      {/* Services grid */}
      <div className="container-narrow pt-10 pb-16 md:pt-12 md:pb-24">
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {sections.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 28 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: i * 0.07,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <ServiceCard svc={s} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}
