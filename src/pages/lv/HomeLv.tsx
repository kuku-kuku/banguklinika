import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import SEO from '../../components/SEO'
import FAQLv from '../../components/FAQLv'
import AnimatedSection from '../../components/AnimatedSection'
import ReviewsCarousel from '../../components/ReviewsCarousel'
import { CLINIC } from '../../data/clinic'
import { homeLv, SITE_URL } from '../../i18n/lv'

const HERO_IMAGES = ['/hero.webp', '/hero1.webp', '/hero2.webp', '/hero3.webp', '/hero4.webp']

const HREFLANG_ALTERNATES = [
  { lang: 'lt',        url: `${SITE_URL}/` },
  { lang: 'lv',        url: `${SITE_URL}/lv` },
  { lang: 'x-default', url: `${SITE_URL}/` },
]

const POPULAR_SERVICES_LV = [
  { id: 'zobu-implantacija',  title: 'Zobu implantācija',           desc: 'Droša un ilgstoša zaudēto zobu atjaunošana ar pasaulē atzītām Straumann® un Medentika® sistēmām.', image: '/implantacija.webp', href: '/lv/pakalpojumi/zobu-implantacija' },
  { id: 'zobu-protezesana',   title: 'Digitālā protezēšana (CEREC)', desc: 'Vainagi un uzklāji vienas vizītes laikā ar jaunāko CEREC tehnoloģiju.',                            image: '/protezavimas.webp',        href: '/lv/pakalpojumi/zobu-protezesana' },
  { id: 'zobu-balinesana',    title: 'Zobu balināšana',              desc: 'Droša un efektīva balināšana ar BEYOND® sistēmu kabinetā vai individuālām kalsēm mājās.',           image: '/balinimas.webp',        href: '/lv/pakalpojumi/zobu-balinesana' },
  { id: 'mutes-higiena',      title: 'Profesionālā mutes higiēna',  desc: 'Aplikumu un akmeņu noņemšana profesionālai mutes dobuma veselības uzturēšanai.',                     image: '/higiena.webp',      href: '/lv/pakalpojumi/mutes-higiena' },
  { id: 'estetiska-plombana', title: 'Estētiskā plombēšana',        desc: 'Zobu formas un krāsas korekcija, atjaunojot dabīgu un estētisku izskatu.',                           image: '/plombavimas.webp',        href: '/lv/pakalpojumi/estetiska-plombana' },
  { id: 'bernu-odontologija', title: 'Bērnu zobārstniecība',        desc: 'Maiga un uzmanīga aprūpe mazajiem pacientiem draudzīgā un patīkamā vidē.',                           image: '/hero4.webp',      href: '/lv/pakalpojumi/bernu-odontologija' },
]

const WHY_CHOOSE_IMAGES = [
  '/kodel-verta-1.webp',
  '/kodel-verta-2.webp',
  '/kodel-verta-3.webp',
]

const globalStyles = `
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
}
`

function SectionDivider() {
  return (
    <div className="relative z-0 flex justify-center py-0">
      <div
        className="h-px w-3/4"
        style={{
          background: 'linear-gradient(to right, transparent, #cbd5e1 25%, #cbd5e1 75%, transparent)',
        }}
      />
    </div>
  )
}

export default function HomeLv() {
  const [index, setIndex] = useState(0)
  const [auto, setAuto] = useState(true)
  const timerRef = useRef<number | null>(null)
  const touchX = useRef<number | null>(null)

  useEffect(() => {
    if (!auto) return
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setIndex(i => (i + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => { if (timerRef.current) window.clearTimeout(timerRef.current) }
  }, [index, auto])

  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 40) {
      setAuto(false)
      setIndex(i => (i + (dx < 0 ? 1 : -1) + HERO_IMAGES.length) % HERO_IMAGES.length)
    }
    touchX.current = null
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <SEO
        lang="lv"
        isHome
        title={homeLv.seo.title}
        description={homeLv.seo.description}
        keywords={homeLv.seo.keywords}
        canonical={`${SITE_URL}/lv`}
        alternates={HREFLANG_ALTERNATES}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Dentist',
          name: 'Bangų klinika',
          description: homeLv.seo.description,
          url: `${SITE_URL}/lv`,
          telephone: CLINIC.phone,
          email: CLINIC.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: CLINIC.address,
            addressLocality: 'Klaipēda',
            postalCode: '92114',
            addressCountry: 'LT',
          },
          image: `${SITE_URL}/hero.webp`,
          logo: `${SITE_URL}/logo.png`,
          medicalSpecialty: 'Dentistry',
        }}
      />

      {/* HERO SECTION */}
      <div className="relative z-10 overflow-visible">
        <section className="relative overflow-visible pan-y">
          <div className="max-w-[1600px] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center py-12 md:py-20 lg:py-28">
            <div className="space-y-8 z-10">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .6 }}
              >
                {homeLv.hero.title}
              </motion.h2>

              <motion.p
                className="text-gray-600 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .1, duration: .6 }}
              >
                {homeLv.hero.subtitle}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .2, duration: .5 }}
              >
                <a href={`tel:${CLINIC.phone}`} className="btn-primary px-10 py-4 lg:py-5 rounded-2xl shadow-xl shadow-brand/20 hover:scale-105 transition-all text-center justify-center text-lg font-bold">
                  {homeLv.hero.ctaPhone}
                </a>
                <Link to="/lv/kontakti#registracija" className="bg-white border-2 border-brand text-brand px-10 py-4 lg:py-5 rounded-2xl font-bold hover:bg-brand-50 transition-all text-center justify-center text-lg">
                  {homeLv.hero.ctaOnline}
                </Link>
              </motion.div>

              <ul className="text-sm md:text-base font-medium text-slate-500 flex flex-wrap gap-x-8 gap-y-3 pt-2 mt-2">
                {homeLv.hero.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-brand font-black text-lg">✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>

            <motion.div className="relative" initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }}>
              <div
                className="relative aspect-square md:aspect-[16/10] lg:aspect-[4/5] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-slate-200 bg-white"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={index}
                    src={HERO_IMAGES[index]}
                    alt={`Bangų klinika - Zobārstniecības klīnika Klaipēdā`}
                    className="absolute inset-0 w-full h-full object-cover select-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 pointer-events-none">
                  <button onClick={() => { setAuto(false); setIndex(i => (i - 1 + HERO_IMAGES.length) % HERO_IMAGES.length) }} className="pointer-events-auto w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-2xl hover:bg-brand hover:text-white transition-all" aria-label="Iepriekšējais attēls">‹</button>
                  <button onClick={() => { setAuto(false); setIndex(i => (i + 1) % HERO_IMAGES.length) }} className="pointer-events-auto w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-2xl hover:bg-brand hover:text-white transition-all" aria-label="Nākamais attēls">›</button>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
                  {HERO_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setAuto(false); setIndex(i) }}
                      aria-label={`Attēls ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${i === index ? 'w-10 bg-white' : 'w-2 bg-white/50 hover:bg-white'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <SectionDivider />

      {/* WHY CHOOSE US */}
      <div className="relative z-10">
        <AnimatedSection>
          <div className="max-w-[1600px] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                {homeLv.whyChoose.title.split('Bangų')[0]}
                <span className="text-brand">Bangų klīniku?</span>
              </h2>
              <p className="mt-6 text-gray-600 text-base lg:text-lg leading-relaxed">
                {homeLv.whyChoose.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {homeLv.whyChoose.items.map((f, i) => (
                <div key={i} className="group rounded-[2rem] overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={WHY_CHOOSE_IMAGES[i] || '/hero.webp'} alt={f.t} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="p-8 lg:p-10">
                    <h3 className="font-bold text-2xl lg:text-3xl text-slate-900 mb-4 group-hover:text-brand transition-colors duration-300">
                      {f.t}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      <SectionDivider />

      {/* POPULAR SERVICES */}
      <div className="relative z-10">
        <AnimatedSection>
          <div className="max-w-[1600px] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Populārākie <span className="text-brand">pakalpojumi</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {POPULAR_SERVICES_LV.map((s) => (
                <Link
                  to={s.href}
                  key={s.id}
                  className="group rounded-[2rem] overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col flex-grow">
                    <h3 className="font-bold text-2xl lg:text-3xl text-slate-900 mb-3 group-hover:text-brand transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base mb-6 flex-grow">
                      {s.desc}
                    </p>
                    <div className="text-brand font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                      Uzzināt vairāk <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      <SectionDivider />

      {/* REVIEWS */}
      <div className="relative z-10 no-x-scroll pan-y py-12">
        <ReviewsCarousel />
      </div>

      <SectionDivider />

      {/* FREE CONSULTATION CTA */}
      <section className="relative z-10 py-20 bg-transparent">
        <div className="max-w-[1600px] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="relative overflow-hidden rounded-[3rem] bg-white border border-slate-100 shadow-2xl min-h-[500px] md:min-h-[600px] flex items-center">
            <div className="absolute inset-0 z-0">
              <img
                src="/hero.webp"
                alt="Konsultācija"
                className="w-full h-full object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 md:via-white/80 to-transparent" />
            </div>

            <div className="relative z-10 px-8 py-16 sm:px-16 lg:py-24 max-w-4xl">
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
                  {homeLv.freeConsult.title.split('bezmaksas')[0]}
                  <span className="text-brand">bezmaksas</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                  {homeLv.freeConsult.text}
                </p>
                {homeLv.freeConsult.note && (
                  <p className="text-sm text-gray-500">{homeLv.freeConsult.note}</p>
                )}
                <div className="pt-4">
                  <Link
                    to="/lv/kontakti#registracija"
                    className="bg-brand hover:bg-brand-600 text-white rounded-2xl px-12 py-5 font-bold text-xl transition-all shadow-xl shadow-brand/20 hover:scale-105 inline-block text-center"
                  >
                    {homeLv.freeConsult.cta}
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl z-0" />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ SECTION */}
      <section className="relative z-10 py-20">
        <div className="max-w-[1600px] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6">
              Biežāk uzdotie <span className="text-brand">jautājumi</span>
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
              Atbildam uz jūs interesējošiem jautājumiem par ārstniecību, drošību un procedūru norisi Bangų klīnikā.
            </p>
          </div>
          <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-sm border border-slate-200">
            <FAQLv />
          </div>
        </div>
      </section>
    </>
  )
}
