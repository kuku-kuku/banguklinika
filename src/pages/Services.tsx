import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import RevealLines from '../components/RevealLines'
import TideLine from '../components/TideLine'
import WaveDivider from '../components/WaveDivider'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'

type Svc = {
  id: string
  title: string
  description?: string
  to?: string
  expandable?: React.ReactNode
}

function ServiceCard({ svc }: { svc: Svc }) {
  const [open, setOpen] = useState(false)

  const inner = (
    <div className="card-flat group relative flex h-full flex-col overflow-hidden">
      <div className="relative z-10 flex flex-1 items-center justify-between gap-4 px-7 py-8 min-h-[120px]">
        <h3 className="text-h3 font-bold leading-snug">
          {svc.title}
        </h3>

        {svc.expandable && (
          <button
            onClick={e => { e.preventDefault(); setOpen(v => !v) }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-shell text-ink transition-colors duration-fast hover:bg-tide"
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
      id: 'vienmomente-implantacija',
      title: 'Vienmomentė implantacija',
      to: '/paslaugos/vienmomente-implantacija',
    },
    {
      id: 'straumann-dantu-implantai',
      title: 'STRAUMANN dantų implantai',
      to: '/paslaugos/straumann-dantu-implantai',
    },
    {
      id: 'visi-dantys-ant-4-implantu',
      title: 'Visi dantys ant 4 implantų (All-on-4)',
      to: '/paslaugos/visi-dantys-ant-4-implantu',
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
      id: 'dantu-karunieles',
      title: 'Dantų karūnėlės (vainikėliai)',
      to: '/paslaugos/dantu-karunieles',
    },
    {
      id: 'cirkonio-keramikos-vainikelis',
      title: 'Cirkonio keramikos vainikėlis',
      to: '/paslaugos/cirkonio-keramikos-vainikelis',
    },
    {
      id: 'dantu-tiltai',
      title: 'Dantų tiltai',
      to: '/paslaugos/dantu-tiltai',
    },
    {
      id: 'dantu-mikroprotezavimas',
      title: 'Dantų mikroprotezavimas',
      to: '/paslaugos/dantu-mikroprotezavimas',
    },
    {
      id: 'dantu-uzklotai',
      title: 'Dantų užklotai',
      to: '/paslaugos/dantu-uzklotai',
    },
    {
      id: 'isimami-protezai',
      title: 'Išimami protezai',
      to: '/paslaugos/isimami-protezai',
    },
    {
      id: 'kompensacija-protezavimui',
      title: 'Kompensacija protezavimui',
      to: '/paslaugos/kompensacija-protezavimui',
    },
    {
      id: 'dantu-gydymas',
      title: 'Dantų gydymas',
      to: '/paslaugos/dantu-taisymas-gydymas',
    },
    {
      id: 'terapinis-dantu-gydymas',
      title: 'Terapinis dantų gydymas',
      to: '/paslaugos/terapinis-dantu-gydymas',
    },
    {
      id: 'gydymas-icon-sistema',
      title: 'Gydymas „ICON“ sistema',
      to: '/paslaugos/gydymas-icon-sistema',
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
      id: 'dantu-fluoravimas',
      title: 'Dantų fluoravimas',
      to: '/paslaugos/dantu-fluoravimas',
    },
    {
      id: 'burnos-chirurgija',
      title: 'Burnos chirurgija',
      to: '/paslaugos/burnos-chirurgija',
    },
    {
      id: 'sinuso-pakelimas',
      title: 'Sinuso pakėlimas',
      to: '/paslaugos/sinuso-pakelimas',
    },
    {
      id: 'zandikaulio-kaulo-priauginimas',
      title: 'Žandikaulio kaulo priauginimas',
      to: '/paslaugos/zandikaulio-kaulo-priauginimas',
    },
    {
      id: 'pulinio-atverimas',
      title: 'Pūlinio atvėrimas',
      to: '/paslaugos/pulinio-atverimas',
    },
    {
      id: 'dantu-balinimas',
      title: 'Dantų balinimas',
      to: '/paslaugos/dantu-balinimas',
    },
    {
      id: 'dantu-balinimo-kapos',
      title: 'Dantų balinimo kapos',
      to: '/paslaugos/dantu-balinimo-kapos',
    },
    {
      id: 'dantu-balinimas-su-lempa',
      title: 'Dantų balinimas su lempa',
      to: '/paslaugos/dantu-balinimas-su-lempa',
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
      id: 'protiniu-dantu-salinimas',
      title: 'Protinių dantų šalinimas',
      to: '/paslaugos/protiniu-dantu-salinimas',
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
      id: 'vaiku-profilaktinis-patikrinimas',
      title: 'Vaikų profilaktinis patikrinimas',
      to: '/paslaugos/vaiku-profilaktinis-patikrinimas',
    },
    {
      id: 'dantu-higiena-vaikams',
      title: 'Dantų higiena vaikams',
      to: '/paslaugos/dantu-higiena-vaikams',
    },
    {
      id: 'rentgenologiniai-tyrimai',
      title: 'Rentgenologiniai tyrimai',
      to: '/paslaugos/rentgenologiniai-tyrimai',
    },
    {
      id: 'bruksizmo-dantu-kapa',
      title: 'Bruksizmo dantų kapa',
      to: '/paslaugos/bruksizmo-dantu-kapa',
    },
    {
      id: 'dantenu-uzdegimas-gingivitas',
      title: 'Dantenų uždegimas (gingivitas)',
      to: '/paslaugos/dantenu-uzdegimas-gingivitas',
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
      <section className="shell-bg">
        <div className="container-wide py-section">
          <div className="max-w-3xl">
            {/* Was an uppercase letter-spaced eyebrow; same words, now set as
                ordinary text so it reads as a line of copy, not a template
                label. */}
            <p className="text-small font-semibold text-tide-text">
              Bangų klinika
            </p>
            <h1 className="mt-4 text-display font-black">
              <RevealLines lines={['Paslaugos']} />
            </h1>
            <p className="muted measure mt-6 text-lead leading-relaxed">
              Visapusiška odontologo pagalba – nuo profilaktikos iki implantų. Pasirinkite dominančią paslaugą.
            </p>
          </div>
          <TideLine className="mt-12 max-w-xl" />
        </div>
      </section>

      <WaveDivider from="var(--shell)" to="var(--paper)" />

      {/* Services grid */}
      <div className="container-wide pb-section pt-section-tight">
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
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
