import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SITE_URL } from '../../i18n/lv'

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

export default function PakalpojumiLv() {
  const sections: Svc[] = useMemo(() => [
    { id: 'zobu-implantacija',              title: 'Zobu implantācija',              to: '/lv/pakalpojumi/zobu-implantacija' },
    { id: 'tulitejas-implantacija',         title: 'Tūlītējā implantācija',           to: '/lv/pakalpojumi/tulitejas-implantacija' },
    { id: 'straumann-implanti',             title: 'STRAUMANN zobu implanti',         to: '/lv/pakalpojumi/straumann-implanti' },
    { id: 'visi-zobi-uz-4-implantiem',      title: 'Visi zobi uz 4 implantiem (All-on-4)', to: '/lv/pakalpojumi/visi-zobi-uz-4-implantiem' },
    { id: 'neatliekama-palidziba',          title: 'Neatliekamā palīdzība',           to: '/lv/pakalpojumi/neatliekama-palidziba' },
    { id: 'zobu-protezesana',               title: 'Zobu protezēšana',                to: '/lv/pakalpojumi/zobu-protezesana' },
    { id: 'zobu-kroniti',                   title: 'Zobu kronīši',                    to: '/lv/pakalpojumi/zobu-kroniti' },
    { id: 'cirkonija-keramikas-kronitis',   title: 'Cirkonija keramikas kronītis',    to: '/lv/pakalpojumi/cirkonija-keramikas-kronitis' },
    { id: 'zobu-tilti',                     title: 'Zobu tilti',                      to: '/lv/pakalpojumi/zobu-tilti' },
    { id: 'mikroprotezesana',               title: 'Zobu mikroprotezēšana',           to: '/lv/pakalpojumi/mikroprotezesana' },
    { id: 'zobu-uzlikas',                   title: 'Zobu uzlikas',                    to: '/lv/pakalpojumi/zobu-uzlikas' },
    { id: 'iznemamas-protezes',             title: 'Izņemamās protēzes',              to: '/lv/pakalpojumi/iznemamas-protezes' },
    { id: 'protezesanas-kompensacija',      title: 'Protezēšanas kompensācija',       to: '/lv/pakalpojumi/protezesanas-kompensacija' },
    { id: 'zobu-arstnieciba',               title: 'Zobu ārstniecība',                to: '/lv/pakalpojumi/zobu-arstnieciba' },
    { id: 'terapeitiska-arstesana',         title: 'Terapeitiskā zobu ārstēšana',     to: '/lv/pakalpojumi/terapeitiska-arstesana' },
    { id: 'arstesana-icon-sistema',         title: 'Ārstēšana ar „ICON" sistēmu',     to: '/lv/pakalpojumi/arstesana-icon-sistema' },
    { id: 'zobu-izlinesana',                title: 'Zobu izlīdzināšana',              to: '/lv/pakalpojumi/zobu-izlinesana' },
    { id: 'mutes-higiena',                  title: 'Mutes higiēna',                   to: '/lv/pakalpojumi/mutes-higiena' },
    { id: 'zobu-fluoresana',                title: 'Zobu fluorēšana',                 to: '/lv/pakalpojumi/zobu-fluoresana' },
    { id: 'mutes-hirurgija',                title: 'Mutes ķirurģija',                 to: '/lv/pakalpojumi/mutes-hirurgija' },
    { id: 'sinusa-pacelsana',               title: 'Sinusa pacelšana',                to: '/lv/pakalpojumi/sinusa-pacelsana' },
    { id: 'zoklakaula-augmentacija',        title: 'Žokļa kaula augmentācija',        to: '/lv/pakalpojumi/zoklakaula-augmentacija' },
    { id: 'abscesa-atversana',              title: 'Abscesa atvēršana',               to: '/lv/pakalpojumi/abscesa-atversana' },
    { id: 'zobu-balinesana',                title: 'Zobu balināšana',                 to: '/lv/pakalpojumi/zobu-balinesana' },
    { id: 'zobu-balinesanas-kapas',         title: 'Zobu balināšanas kapas',          to: '/lv/pakalpojumi/zobu-balinesanas-kapas' },
    { id: 'zobu-balinesana-ar-lampu',       title: 'Zobu balināšana ar lampu',        to: '/lv/pakalpojumi/zobu-balinesana-ar-lampu' },
    { id: 'estetiska-plombana',             title: 'Estētiskā plombēšana',            to: '/lv/pakalpojumi/estetiska-plombana' },
    { id: 'zobu-plombana',                  title: 'Zobu plombēšana',                 to: '/lv/pakalpojumi/zobu-plombana' },
    { id: 'zobu-ekstrakcija',               title: 'Zobu ekstrakcija',                to: '/lv/pakalpojumi/zobu-ekstrakcija' },
    { id: 'gudribas-zobu-izvilksana',       title: 'Gudrības zobu izvilkšana',        to: '/lv/pakalpojumi/gudribas-zobu-izvilksana' },
    { id: 'endodontija',                    title: 'Endodontija',                     to: '/lv/pakalpojumi/endodontija' },
    { id: 'bernu-odontologija',             title: 'Bērnu zobārstniecība',            to: '/lv/pakalpojumi/bernu-odontologija' },
    { id: 'bernu-profilaktiska-parbaude',   title: 'Bērnu profilaktiskā pārbaude',    to: '/lv/pakalpojumi/bernu-profilaktiska-parbaude' },
    { id: 'bernu-mutes-higiena',            title: 'Bērnu mutes higiēna',             to: '/lv/pakalpojumi/bernu-mutes-higiena' },
    { id: 'rentgena-izmeklejumi',           title: 'Rentgena izmeklējumi',            to: '/lv/pakalpojumi/rentgena-izmeklejumi' },
    { id: 'bruksisma-kapa',                 title: 'Bruksisma kapa',                  to: '/lv/pakalpojumi/bruksisma-kapa' },
    { id: 'smaganu-iekaisums-gingivits',    title: 'Smaganu iekaisums (gingivīts)',   to: '/lv/pakalpojumi/smaganu-iekaisums-gingivits' },
  ], [])

  const gridRef = useRef<HTMLDivElement>(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' })

  return (
    <>
      <SEO
        lang="lv"
        title="Pakalpojumi — Bangų zobārstniecības klīnika Klaipēdā"
        description="Neatliekamā palīdzība, zobu protezēšana, kompensētā protezēšana, zobu ārstniecība, implanti, izlīdzināšana, higiēna, ķirurģija, balināšana, plombēšana, ekstrakcija, endodontija, bērnu zobārstniecība."
        canonical={`${SITE_URL}/lv/pakalpojumi`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos` },
        ]}
      />

      <section className="relative overflow-hidden bg-[#F4F5F4]">
        <div className="container-narrow py-16 md:py-24 relative z-10">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="text-sm font-semibold tracking-widest uppercase text-[#0ABBB5] mb-3"
            >
              Bangų klīnika
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#043F42] leading-tight"
            >
              Pakalpojumi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.4, 0, 0.2, 1] }}
              className="mt-5 text-slate-500 text-lg leading-relaxed max-w-lg"
            >
              Visaptveroša zobārsta palīdzība — no profilakses līdz implantiem. Izvēlieties jūs interesējošo pakalpojumu.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none"
          aria-hidden
        >
          <img src="/Asset 53@2x.png" alt="" className="w-64 h-64 md:w-96 md:h-96 opacity-[0.13]" draggable={false} />
        </motion.div>

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
