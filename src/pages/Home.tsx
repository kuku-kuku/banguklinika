import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useInView } from 'framer-motion'

import SEO from '../components/SEO'
import FAQ from '../components/FAQ'
import AnimatedSection from '../components/AnimatedSection'
import { CLINIC } from '../data/clinic'
import ReviewsCarousel from '../components/ReviewsCarousel'
import home from '../content/home.json'

// ─── Brand palette ────────────────────────────────────────────────────────────
const C = {
  teal:      '#0ABBB5',
  deepTeal:  '#043F42',
  charcoal:  '#262626',
  soft:      '#F4F5F4',
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
type GoogleData = { rating: number | null; user_ratings_total: number | null; reviews_url: string | null }

function Star({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 2.75l2.95 5.98 6.6.96-4.77 4.65 1.13 6.58L12 18.77 6.09 20.92l1.13-6.58L2.45 9.69l6.6-.96L12 2.75z" />
    </svg>
  )
}

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-5 py-6 md:py-8 px-6">
      <div className="h-[2px] flex-1 max-w-xs md:max-w-sm rounded-full" style={{ background: `linear-gradient(to right, transparent, ${C.teal}55)` }} />
      <img src="/Asset 53@2x.png" alt="" aria-hidden draggable={false} className="w-10 h-10 opacity-35" />
      <div className="h-[2px] flex-1 max-w-xs md:max-w-sm rounded-full" style={{ background: `linear-gradient(to left, transparent, ${C.teal}55)` }} />
    </div>
  )
}

function EyeBrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: C.teal }}>{children}</p>
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: '15+',  label: 'Metų patirtis' },
  { value: '5K+',  label: 'Patenkintų pacientų' },
  { value: '4.9★', label: 'Google įvertinimas' },
]

const FEATURES = [
  {
    n: '01',
    title: 'Moderni įranga',
    desc: 'CEREC skenavimas, AIRFLOW® higiena, BEYOND® balinimas – vizitai greitesni ir tikslūs.',
  },
  {
    n: '02',
    title: 'Patyrusi komanda',
    desc: 'Kiekvienas pacientas gauna individualų gydymo planą ir dėmesingą priežiūrą be streso.',
  },
  {
    n: '03',
    title: 'Aiškios kainos',
    desc: 'Viešas kainoraštis, jokių paslėptų mokesčių – žinote kainą prieš pradedant gydymą.',
  },
]

const POPULAR_SERVICES = [
  { id: 'dantu-implantacija',   title: 'Dantų implantacija',    desc: 'Saugus ir ilgaamžis prarastų dantų atkūrimas naudojant Straumann® / Medentika® sistemas.', image: '/implantacija.webp' },
  { id: 'dantu-protezavimas',   title: 'Dantų protezavimas',    desc: 'Atstatome dantų formą ir funkciją pasitelkiant CEREC technologiją – vainikėlis per 1 vizitą.', image: '/protezavimas.webp' },
  { id: 'dantu-balinimas',      title: 'Dantų balinimas',       desc: 'Saugi BEYOND® sistema – matomas rezultatas jau per vieną procedūrą.', image: '/balinimas.webp' },
  { id: 'burnos-higiena',       title: 'Burnos higiena',        desc: 'Profesionali AIRFLOW® procedūra – švelni ir efektyvi burnos ertmės priežiūra.', image: '/higiena.webp' },
  { id: 'estetinis-plombavimas',title: 'Estetinis plombavimas', desc: 'Dantų formos ir spalvos korekcija – natūralus ir estetiškas rezultatas.', image: '/plombavimas.webp' },
  { id: 'vaiku-odontologija',   title: 'Vaikų odontologija',    desc: 'Švelni priežiūra mažiesiems – draugiška aplinka be streso.', image: '/hero4.webp' },
]

const TEAM = [
  { name: 'Jonas Balsys',         role: 'Odontologas',                 img: '/team/Jonas-light.jpg' },
  { name: 'Odeta Balsienė',       role: 'Odontologė · Klinikos vadovė', img: '/team/Odeta-light.jpg' },
  { name: 'Donatas Bitinas',      role: 'Odontologas',                 img: '/team/Donatas_light.jpg' },
  { name: 'Donatas Kubilius',    role: 'Odontologas',                 img: '/team/donataskubilius.jpg' },
  { name: 'Rugilė',               role: 'Odontologė',                  img: '/team/Rugile-light.jpg' },
  { name: 'Rūta',                 role: 'Burnos higienistė',           img: '/team/Rūta_light.jpg' },
]

// ─── Team coverflow carousel ──────────────────────────────────────────────────
function TeamCarousel() {
  const [active, setActive] = useState(0)
  const n = TEAM.length
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((dir: 1 | -1) => {
    setActive(prev => (prev + dir + n) % n)
  }, [n])

  // auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => go(1), 4000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [go])

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => go(1), 4000)
  }

  const handleGo = (dir: 1 | -1) => { go(dir); resetTimer() }
  const handleSelect = (i: number) => { setActive(i); resetTimer() }

  // distance from active (wrap-aware)
  const getDist = (i: number) => {
    let d = i - active
    if (d > n / 2) d -= n
    if (d < -n / 2) d += n
    return d
  }

  return (
    <div className="relative select-none">
      {/* Cards stage */}
      <div className="relative h-[640px] sm:h-[760px] flex items-center justify-center overflow-hidden" style={{ perspective: '1100px' }}>
        {TEAM.map((member, i) => {
          const d = getDist(i)
          const abs = Math.abs(d)
          if (abs > 2) return null

          const x     = d * 300
          const scale = Math.max(0.65, 1 - abs * 0.17)
          const z     = 100 - abs * 35
          const opacity = Math.max(0.35, 1 - abs * 0.28)
          const rotY  = -d * 10
          const blur  = abs > 0 ? Math.max(0, abs * 1.5) : 0

          return (
            <motion.div
              key={member.name}
              className="absolute pointer-events-none"
              style={{ zIndex: z }}
              animate={{ x, scale, opacity, rotateY: rotY, filter: `blur(${blur}px)` }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              onClick={() => abs > 0 && handleSelect(i)}
            >
              <div
                className="rounded-2xl overflow-hidden transition-shadow duration-300"
                style={{
                  width: 'clamp(260px, 36vw, 420px)',
                  boxShadow: abs === 0
                    ? `0 24px 60px ${C.deepTeal}30, 0 4px 16px ${C.deepTeal}15`
                    : `0 8px 24px ${C.charcoal}18`,
                  border: `2px solid ${abs === 0 ? C.teal : C.charcoal + '10'}`,
                }}
              >
                <div className="relative aspect-[3/4]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    draggable={false}
                  />
                  {/* Name overlay on active card */}
                  <AnimatePresence>
                    {abs === 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 px-5 py-6"
                        style={{ background: `linear-gradient(to top, ${C.deepTeal} 30%, transparent)` }}
                      >
                        <p className="text-white font-bold text-base leading-tight">{member.name}</p>
                        <p className="text-sm mt-1 font-medium" style={{ color: C.teal }}>{member.role}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-2">
        <button
          onClick={() => handleGo(-1)}
          className="w-11 h-11 rounded-full border flex items-center justify-center transition-all hover:scale-110"
          style={{ borderColor: `${C.deepTeal}25`, color: C.deepTeal }}
          aria-label="Ankstesnis"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {TEAM.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width:  i === active ? 20 : 7,
                height: 7,
                background: i === active ? C.teal : `${C.charcoal}25`,
              }}
              aria-label={`Narys ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => handleGo(1)}
          className="w-11 h-11 rounded-full border flex items-center justify-center transition-all hover:scale-110"
          style={{ borderColor: `${C.deepTeal}25`, color: C.deepTeal }}
          aria-label="Kitas"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [google, setGoogle] = useState<GoogleData>({ rating: null, user_ratings_total: null, reviews_url: null })

  useEffect(() => {
    fetch('/api/reviews')
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d?.rating) setGoogle({ rating: d.rating, user_ratings_total: d.user_ratings_total, reviews_url: d.reviews_url }) })
      .catch(() => {})
  }, [])

  const heroVideoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const video = heroVideoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([e]) => { e.isIntersecting ? video.play().catch(() => {}) : video.pause() },
      { threshold: 0.1 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const svcRef  = useRef<HTMLDivElement>(null)
  const svcInView = useInView(svcRef, { once: true, margin: '-60px' })

  const WHY_IMAGES = ['/kodel-verta-1.webp', '/kodel-verta-2.webp', '/kodel-verta-3.webp']

  const W = 'max-w-7xl mx-auto px-6 lg:px-12'

  return (
    <>
      <SEO
        isHome
        title="Odontologijos klinika Klaipėdoje | Bangų klinika"
        description="Bangų klinika Klaipėdoje: visos dantų gydymo paslaugos – modernūs estetiniai sprendimai, individualūs gydymo planai. Nemokama pirminė konsultacija."
        keywords={home.seo?.keywords}
        image={home.seo?.image}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Dentist",
          "@id": "https://www.banguklinika.lt/",
          "name": "Bangų odontologijos klinika",
          "alternateName": "Bangų klinika",
          "url": "https://www.banguklinika.lt/",
          "description": "Bangų odontologijos klinika Klaipėdoje teikia odontologijos paslaugas, įskaitant dantų gydymą, estetinį plombavimą, profesionalią burnos higieną, protezavimą, implantavimą ir dantų atkūrimą.",
          "telephone": "+37067191399",
          "priceRange": "€€",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bangų g. 7-3",
            "addressLocality": "Klaipėda",
            "postalCode": "LT-91250",
            "addressCountry": "LT"
          },
          "areaServed": {
            "@type": "City",
            "name": "Klaipėda"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          ],
          "medicalSpecialty": ["Dentistry"],
          "makesOffer": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dantų implantacija" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dantų protezavimas" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dantų gydymas" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dantų taisymas" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dantų tiesinimas" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Burnos higiena" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Burnos chirurgija" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dantų balinimas" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Estetinis plombavimas" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dantų plombavimas" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vaikų odontologija" } }
          ],
          "sameAs": ["https://www.facebook.com/banguklinika/"]
        }}
        lang="lt"
        alternates={[
          { lang: 'lt', url: 'https://banguklinika.lt/' },
          { lang: 'lv', url: 'https://banguklinika.lt/lv' },
          { lang: 'x-default', url: 'https://banguklinika.lt/' },
        ]}
      />

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className={`${W} grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-20 lg:py-24`}>

          {/* Left — text */}
          <div className="space-y-8 max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <EyeBrow>Bangų klinika · Klaipėda</EyeBrow>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight" style={{ color: C.deepTeal }}>
                Odontologijos<br />klinika Klaipėdoje
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl font-semibold"
              style={{ color: C.teal }}
            >
              Šypsena, kurią norisi rodyti!
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.18 }}
              className="text-base md:text-lg leading-relaxed text-slate-500 max-w-xl"
            >
              {home.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.26 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={`tel:${CLINIC.phone}`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: C.deepTeal, boxShadow: `0 8px 28px ${C.deepTeal}35` }}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.4 2.11 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16z"/>
                </svg>
                {home.hero.ctaPhone}
              </a>
              <Link
                to="/kontaktai#registracija"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-[1.02]"
                style={{ border: `2px solid ${C.teal}`, color: C.teal, background: 'white' }}
              >
                {home.hero.ctaOnline}
              </Link>
            </motion.div>

            {/* Bullets */}
            <motion.ul
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.34 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
            >
              {(home.hero.bullets as string[]).map((b, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm font-medium text-slate-500">
                  <span className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-white text-[10px] font-black" style={{ background: C.teal }}>✓</span>
                  {b}
                </li>
              ))}
            </motion.ul>

            {/* Google badge */}
            {google.rating && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.42 }}>
                <a
                  href={google.reviews_url || '#'} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border bg-white hover:shadow-md transition-all"
                  style={{ borderColor: `${C.charcoal}18` }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="font-bold text-sm" style={{ color: C.charcoal }}>{google.rating.toFixed(1)}</span>
                  <div className="flex gap-0.5 text-amber-400">{[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5"/>)}</div>
                  {google.user_ratings_total && <span className="text-sm text-slate-400">({google.user_ratings_total})</span>}
                </a>
              </motion.div>
            )}
          </div>

          {/* Right — video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="absolute -inset-3 rounded-[3rem] blur-3xl opacity-15 pointer-events-none" style={{ background: C.teal }} />
            <div className="relative aspect-[1.1/1] lg:aspect-[0.95/1] lg:max-h-[70vh] rounded-[2.5rem] overflow-hidden shadow-2xl" style={{ outline: `1px solid ${C.charcoal}12` }}>
              <video ref={heroVideoRef} muted loop playsInline className="w-full h-full object-cover">
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(160deg, transparent 60%, ${C.deepTeal}18)` }} />
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ══ TEAM ══════════════════════════════════════════════════════════ */}
      <section className="py-2 pb-8 md:pb-12">
        <div className={W}>
          <AnimatedSection>
            <div className="text-center mb-5">
              <EyeBrow>Komanda</EyeBrow>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: C.deepTeal }}>
                Susipažinkite su mūsų gydytojais
              </h2>
              <p className="mt-4 text-base text-slate-500 max-w-lg mx-auto">
                Patyrusi ir draugiška komanda, kuri rūpinasi kiekvieno paciento komfortu ir sveikata.
              </p>
            </div>
          </AnimatedSection>
          <TeamCarousel />
        </div>
      </section>

      <SectionDivider />

      {/* ══ POPULAR SERVICES ══════════════════════════════════════════════ */}
      <section className="py-2 pb-8 md:pb-12">
        <div className={W}>
          <AnimatedSection>
            <div className="mb-5">
              <EyeBrow>Paslaugos</EyeBrow>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: C.deepTeal }}>
                Populiariausios paslaugos
              </h2>
            </div>
          </AnimatedSection>

          <div ref={svcRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {POPULAR_SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                animate={svcInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
              >
                <Link
                  to={`/paslaugos/${s.id}`}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-white border transition-all duration-400 hover:-translate-y-1 hover:shadow-xl h-full"
                  style={{ borderColor: `${C.charcoal}12` }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img src={s.image} alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: `linear-gradient(to top, ${C.deepTeal}70, transparent)` }} />
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-bold text-[15px] mb-2 transition-colors duration-200 group-hover:text-[#0ABBB5]"
                      style={{ color: C.deepTeal }}>
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1">{s.desc}</p>
                    <div className="flex items-center gap-1.5 mt-4 text-xs font-bold transition-all duration-200 group-hover:gap-2.5"
                      style={{ color: C.teal }}>
                      Plačiau <span>→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/paslaugos"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl font-bold text-base text-white transition-all hover:scale-[1.03] hover:shadow-xl"
              style={{ background: C.deepTeal, boxShadow: `0 8px 28px ${C.deepTeal}30` }}
            >
              Visos paslaugos →
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ══ REVIEWS ═══════════════════════════════════════════════════════ */}
      <section className="py-2 pb-2 no-x-scroll pan-y">
        <div className={`${W} mb-3`}>
          <AnimatedSection>
            <EyeBrow>Atsiliepimai</EyeBrow>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: C.deepTeal }}>
              Ką sako mūsų pacientai
            </h2>
          </AnimatedSection>
        </div>
        <ReviewsCarousel hideTitle />
      </section>

      <SectionDivider />

      {/* ══ WHY CHOOSE ════════════════════════════════════════════════════ */}
      <section className="py-2 pb-8 md:pb-12">
        <div className={W}>
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-3">
              <div>
                <EyeBrow>Kodėl mes</EyeBrow>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: C.deepTeal }}>
                  Kodėl verta rinktis<br />Bangų kliniką?
                </h2>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {(home.whyChoose.items as any[]).map((f, i) => (
              <AnimatedSection key={i}>
                <div
                  className="group rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  style={{ background: 'white', borderColor: `${C.charcoal}12` }}
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img src={WHY_IMAGES[i]} alt={f.t}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.deepTeal}55, transparent)` }} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-base lg:text-lg mb-2 group-hover:text-[#0ABBB5] transition-colors duration-300" style={{ color: C.deepTeal }}>
                      {f.t}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500">{f.d}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ══ FREE CONSULTATION CTA ═════════════════════════════════════════ */}
      <section className="py-2 pb-8 md:pb-12">
        <div className={W}>
          <AnimatedSection>
            <div
              className="relative overflow-hidden rounded-[2.5rem] p-10 sm:p-14 lg:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-10"
              style={{ background: C.deepTeal }}
            >
              <img src="/Asset 53@2x.png" alt="" aria-hidden draggable={false}
                className="absolute -right-12 -top-12 w-72 h-72 opacity-[0.06] pointer-events-none select-none" />
              <img src="/Asset 53@2x.png" alt="" aria-hidden draggable={false}
                className="absolute -left-8 -bottom-8 w-48 h-48 opacity-[0.04] pointer-events-none select-none" />

              <div className="relative z-10">
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: C.teal }}>Pirmasis vizitas</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Pirminė konsultacija{' '}
                  <span style={{ color: C.teal }}>nemokama</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Mūsų tikslas – aiškus kelias link Jūsų sveikos šypsenos be jokių paslėptų mokesčių.
                </p>
              </div>

              <div className="relative z-10 shrink-0">
                <Link
                  to="/kontaktai#registracija"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base text-white transition-all hover:scale-[1.04] hover:shadow-2xl whitespace-nowrap"
                  style={{ background: C.teal, boxShadow: `0 8px 28px ${C.teal}45` }}
                >
                  Registruotis dabar →
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider />

      {/* ══ FAQ ═══════════════════════════════════════════════════════════ */}
      <section className="py-2 pb-10 md:pb-14">
        <div className={W}>
          <AnimatedSection>
            <div className="max-w-3xl mb-5">
              <EyeBrow>DUK</EyeBrow>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight" style={{ color: C.deepTeal }}>
                Dažniausiai užduodami klausimai
              </h2>
              <p className="mt-4 text-base lg:text-lg text-slate-500 leading-relaxed">
                Atsakome į Jums rūpimus klausimus apie gydymą, saugumą ir procedūrų eigą.
              </p>
            </div>
          </AnimatedSection>
          <div className="rounded-[2rem] p-8 lg:p-14 border" style={{ background: 'white', borderColor: `${C.charcoal}10` }}>
            <FAQ />
          </div>
        </div>
      </section>
    </>
  )
}
