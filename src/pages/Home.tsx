import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Link } from 'react-router-dom'

import SEO from '../components/SEO'
import FAQ from '../components/FAQ'
import AnimatedSection from '../components/AnimatedSection'
import { CLINIC } from '../data/clinic'
import ReviewsCarousel from '../components/ReviewsCarousel'
import home from '../content/home.json'
import { BLOG_POSTS, formatDate } from '../data/blog'

import Picture from '../components/Picture'
import HeroMedia from '../components/HeroMedia'
import RevealLines from '../components/RevealLines'
import MagneticLink from '../components/MagneticLink'
import TideLine from '../components/TideLine'
import WaveDivider from '../components/WaveDivider'

/* Imported statically, NOT lazily. renderToString does not wait on suspended
   boundaries, so a lazy ServicesTrack prerendered as its fallback and the
   section heading plus all six service titles were missing from the HTML
   crawlers see. Caught by diffing heading counts against main. */
import ServicesTrack from '../components/home/ServicesTrack'

// ─── Helpers ──────────────────────────────────────────────────────────────────
type GoogleData = { rating: number | null; user_ratings_total: number | null; reviews_url: string | null }

function Star({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 2.75l2.95 5.98 6.6.96-4.77 4.65 1.13 6.58L12 18.77 6.09 20.92l1.13-6.58L2.45 9.69l6.6-.96L12 2.75z" />
    </svg>
  )
}

/** Inline arrow replacing the literal "→" glyphs; slides on hover. */
function Arrow({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg
      className={`btn-arrow ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  )
}

function Check() {
  return (
    <span
      aria-hidden
      className="mt-[0.3em] flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
      style={{ background: 'var(--tide)' }}
    >
      <svg viewBox="0 0 10 10" className="h-2 w-2" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round">
        <path d="M1.5 5.2 4 7.5 8.5 2.8" />
      </svg>
    </span>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────
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
  { id: 'dantu-implantacija',   title: 'Dantų implantacija',    desc: 'Saugus ir ilgaamžis prarastų dantų atkūrimas naudojant Straumann® / Neodent® sistemas.', image: '/implantacija.webp' },
  { id: 'dantu-protezavimas',   title: 'Dantų protezavimas',    desc: 'Atstatome dantų formą ir funkciją pasitelkiant CEREC technologiją – vainikėlis per 1 vizitą.', image: '/protezavimas.webp' },
  { id: 'dantu-balinimas',      title: 'Dantų balinimas',       desc: 'Saugi BEYOND® sistema – matomas rezultatas jau per vieną procedūrą.', image: '/balinimas.webp' },
  { id: 'burnos-higiena',       title: 'Burnos higiena',        desc: 'Profesionali AIRFLOW® procedūra – švelni ir efektyvi burnos ertmės priežiūra.', image: '/higiena.webp' },
  { id: 'estetinis-plombavimas',title: 'Estetinis plombavimas', desc: 'Dantų formos ir spalvos korekcija – natūralus ir estetiškas rezultatas.', image: '/plombavimas.webp' },
  { id: 'vaiku-odontologija',   title: 'Vaikų odontologija',    desc: 'Švelni priežiūra mažiesiems – draugiška aplinka be streso.', image: '/hero4.webp' },
]

/* These photos are complete marketing cards: the name, role and
   specialisations are part of the artwork, so they are shown whole and
   uncropped. The name/role below back them up for screen readers. */
const TEAM = [
  { name: 'Donatas Bitinas',   role: 'Implantuojantis gydytojas odontologas',              img: '/team/Donatas_light.jpg' },
  { name: 'Donatas Kubilius',  role: 'Gydytojas, Veido ir Žandikaulių chirurgas',          img: '/team/donataskubilius.jpg' },
  { name: 'Jonas Sabulis',     role: 'Protezuojantis gydytojas odontologas',               img: '/team/Jonas-light.jpg' },
  { name: 'Odeta Venckutė',    role: 'Gydytoja odontologė',                                img: '/team/Odeta-light.jpg' },
  { name: 'Rūta Garšvienė',   role: 'Burnos higienistė, tiesinimo kapomis koordinatorė', img: '/team/Rūta_light.jpg' },
]

/* ─── Team coverflow carousel ─────────────────────────────────────────────────
   Restored from the previous design. The photos in public/team/ are complete
   marketing cards — the name, role and specialisation list are part of the
   artwork — so each one is shown whole at its native 4:5 ratio. Nothing is
   cropped and nothing is laid over it.

   Because the text lives in the image, the name and role are also rendered
   for screen readers only: that information must reach assistive tech and
   search engines, which cannot read pixels.                                  */
function TeamCarousel() {
  const [active, setActive] = useState(0)
  const n = TEAM.length
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(true)

  const go = useCallback((dir: 1 | -1) => {
    setActive(prev => (prev + dir + n) % n)
  }, [n])

  /* Pause auto-advance off-screen so the spring animations stop running rAF
     while the visitor is scrolling through the rest of the page. */
  useEffect(() => {
    if (!stageRef.current) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.15 })
    io.observe(stageRef.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    intervalRef.current = setInterval(() => go(1), 4000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [go, inView])

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (!inView) return
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
      <div
        ref={stageRef}
        className="relative flex h-[600px] items-center justify-center overflow-hidden sm:h-[720px]"
        style={{ perspective: '1100px' }}
      >
        {TEAM.map((member, i) => {
          const d = getDist(i)
          const abs = Math.abs(d)
          if (abs > 2) return null

          const x = d * 300
          const scale = Math.max(0.65, 1 - abs * 0.17)
          const z = 100 - abs * 35
          const opacity = Math.max(0.35, 1 - abs * 0.28)
          const rotY = -d * 10

          return (
            <m.div
              key={member.name}
              className="absolute"
              style={{ zIndex: z, cursor: abs > 0 ? 'pointer' : 'default' }}
              animate={{ x, scale, opacity, rotateY: rotY }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => abs > 0 && handleSelect(i)}
            >
              <div
                className="overflow-hidden rounded-card transition-shadow duration-mid"
                style={{
                  width: 'clamp(250px, 34vw, 400px)',
                  boxShadow: abs === 0 ? 'var(--shadow-deep)' : 'var(--shadow-lift)',
                  border: `1px solid ${abs === 0 ? 'var(--tide)' : 'var(--hairline)'}`,
                }}
              >
                {/* 4:5 is the photos' native ratio, so the whole card shows. */}
                <div className="relative aspect-[4/5] bg-paper">
                  <Picture
                    src={member.img}
                    alt={member.name}
                    sizes="(max-width: 640px) 250px, 34vw"
                    className="block h-full w-full"
                    imgClassName="h-full w-full object-contain"
                  />
                  <span className="sr-only">{member.name} — {member.role}</span>
                </div>
              </div>
            </m.div>
          )
        })}
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-center gap-6">
        <button
          onClick={() => handleGo(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-pill border border-hairline-strong text-ink transition-colors duration-fast hover:bg-shell"
          aria-label="Ankstesnis"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <div className="flex items-center gap-2">
          {TEAM.map((member, i) => (
            <button
              key={member.name}
              onClick={() => handleSelect(i)}
              className="rounded-pill transition-all duration-mid"
              style={{
                width: i === active ? 20 : 7,
                height: 7,
                background: i === active ? 'var(--tide)' : 'var(--hairline-strong)',
              }}
              aria-label={member.name}
              aria-current={i === active}
            />
          ))}
        </div>

        <button
          onClick={() => handleGo(1)}
          className="flex h-11 w-11 items-center justify-center rounded-pill border border-hairline-strong text-ink transition-colors duration-fast hover:bg-shell"
          aria-label="Kitas"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M9 18l6-6-6-6"/></svg>
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

  const WHY_IMAGES = ['/kodel-verta-1.webp', '/kodel-verta-2.webp', '/kodel-verta-3.webp']

  return (
    <>
      <SEO
        isHome
        title="Odontologijos klinika (stomatologijos) Klaipėdoje"
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

      {/* ══ HERO ══════════════════════════════════════════════════════════
          Asymmetric 7/5 split. The headline reveals line by line from under
          its own mask (pure CSS, so it runs on the first frame), while the
          LCP poster paints immediately and is never animated. */}
      <section className="container-wide grid items-center gap-12 pb-section-tight pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-20">
        <div className="lg:col-span-7">
          <h1 className="text-display font-black">
            <RevealLines lines={['Odontologijos', 'klinika Klaipėdoje']} />
          </h1>

          <p
            className="mt-6 text-lead font-semibold text-tide-text reveal-line"
            style={{ ['--reveal-delay' as string]: '300ms' }}
          >
            <span>Šypsena, kurią norisi rodyti!</span>
          </p>

          <p className="muted measure mt-5 text-body leading-relaxed">
            {home.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MagneticLink href={`tel:${CLINIC.phone}`} className="btn-ink">
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.4 2.11 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16z"/>
              </svg>
              {home.hero.ctaPhone}
            </MagneticLink>

            <Link to="/kontaktai#registracija" className="btn-line">
              {home.hero.ctaOnline}
            </Link>
          </div>

          <ul className="mt-9 grid list-none grid-cols-1 gap-x-8 gap-y-3 p-0 sm:grid-cols-2">
            {(home.hero.bullets as string[]).map((b, i) => (
              <li key={i} className="muted flex items-start gap-3 text-small font-medium">
                <Check />
                {b}
              </li>
            ))}
          </ul>

          {/* Google badge. Space is reserved so the live rating cannot shift
              the layout when it arrives. */}
          <div className="mt-8 min-h-[3rem]">
            {google.rating && (
              <a
                href={google.reviews_url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-pill border border-hairline px-4 py-2.5 transition-colors duration-fast hover:border-hairline-strong"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-bold text-small">{google.rating.toFixed(1)}</span>
                <span className="flex gap-0.5 text-tide-text">{[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5"/>)}</span>
                {google.user_ratings_total && <span className="muted text-small">({google.user_ratings_total})</span>}
              </a>
            )}
          </div>
        </div>

        {/* Media column. The wave mask is the curved clip; the image inside
            scales on hover without the mask itself moving. */}
        <div className="lg:col-span-5">
          <div className="mask-zoom wave-mask overflow-hidden bg-shell">
            <HeroMedia alt="Bangų klinika" className="aspect-[4/5] w-full" />
          </div>
          <TideLine className="mt-2" />
        </div>
      </section>

      <WaveDivider from="var(--paper)" to="var(--shell)" />

      {/* ══ TEAM ══════════════════════════════════════════════════════════ */}
      <section className="shell-bg pb-section">
        <div className="container-wide">
          <AnimatedSection as="div" className="max-w-2xl pb-12">
            <h2 className="text-h2 font-extrabold">
              Susipažinkite su mūsų gydytojais
            </h2>
            <p className="muted mt-4 text-body">
              Patyrusi ir draugiška komanda, kuri rūpinasi kiekvieno paciento komfortu ir sveikata.
            </p>
          </AnimatedSection>
          <TeamCarousel />
        </div>
      </section>

      <WaveDivider from="var(--shell)" to="var(--paper)" mirror />

      {/* ══ POPULAR SERVICES ══════════════════════════════════════════════ */}
      <section className="pb-section pt-section-tight">
        <ServicesTrack
            items={POPULAR_SERVICES}
            readMoreLabel="Plačiau"
            heading={
              <h2 className="max-w-2xl text-h2 font-extrabold">
                Populiariausios paslaugos
              </h2>
            }
        />

        <div className="container-wide mt-8 flex justify-start">
          <MagneticLink to="/paslaugos" className="btn-ink">
            Visos paslaugos
            <Arrow />
          </MagneticLink>
        </div>
      </section>

      {/* ══ REVIEWS — the one dark section, for rhythm ═════════════════════ */}
      <section className="on-ink py-section">
        <div className="container-wide pb-10">
          <AnimatedSection as="div" className="max-w-2xl">
            <h2 className="text-h2 font-extrabold">
              Ką sako mūsų pacientai
            </h2>
          </AnimatedSection>
        </div>
        <div className="no-x-scroll pan-y">
          <ReviewsCarousel hideTitle />
        </div>
      </section>

      {/* ══ WHY CHOOSE ════════════════════════════════════════════════════ */}
      <section className="cv-auto py-section">
        <div className="container-wide">
          <AnimatedSection as="div" className="max-w-2xl pb-12">
            <h2 className="text-h2 font-extrabold">
              Kodėl verta rinktis<br />Bangų kliniką?
            </h2>
          </AnimatedSection>

          {/* Asymmetric: the first card runs tall and wide, the other two
              stack beside it. Not three equal tiles in a row. */}
          <div className="grid gap-8 lg:grid-cols-12">
            {(home.whyChoose.items as any[]).map((f, i) => (
              <AnimatedSection
                as="div"
                key={i}
                delay={i * 0.08}
                className={i === 0 ? 'lg:col-span-7 lg:row-span-2' : 'lg:col-span-5'}
              >
                <article className="group h-full">
                  <div
                    className={`mask-zoom wave-mask overflow-hidden bg-shell ${
                      i === 0 ? 'aspect-[4/3] lg:aspect-[16/11]' : 'aspect-[16/9]'
                    }`}
                  >
                    <Picture
                      src={WHY_IMAGES[i]}
                      alt={f.t}
                      sizes="(max-width: 1023px) 100vw, (max-width: 1400px) 50vw, 44rem"
                      className="block h-full w-full"
                      imgClassName="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className={`mt-5 font-bold ${i === 0 ? 'text-h2' : 'text-h3'}`}>{f.t}</h3>
                  <p className="muted measure mt-2 text-body leading-relaxed">{f.d}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FREE CONSULTATION CTA ═════════════════════════════════════════ */}
      <section className="cv-auto pb-section">
        <div className="container-wide">
          <AnimatedSection as="div">
            <div className="relative overflow-hidden rounded-image">
              <div className="absolute inset-0">
                <Picture
                  src="/hero.webp"
                  alt=""
                  sizes="100vw"
                  className="block h-full w-full"
                  imgClassName="h-full w-full object-cover object-right"
                  draggable={false}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(100deg, var(--ink) 0%, var(--ink) 42%, rgb(31 36 39 / 0.72) 62%, transparent 100%)',
                  }}
                />
              </div>

              <div className="on-ink relative max-w-2xl bg-transparent px-8 py-14 sm:px-12 lg:py-20">
                <p className="text-micro font-semibold text-tide-bright">Pirmasis vizitas</p>
                <h2 className="mt-4 text-h2 font-black">
                  Pirminė konsultacija nemokama
                </h2>
                <p className="mt-4 text-lead" style={{ color: 'var(--text-mute-on-ink)' }}>
                  Mūsų tikslas – aiškus kelias link Jūsų sveikos šypsenos be jokių paslėptų mokesčių.
                </p>
                <div className="pt-8">
                  <MagneticLink
                    to="/kontaktai#registracija"
                    className="inline-flex items-center justify-center gap-2.5 rounded-pill bg-paper px-8 py-4 text-body font-bold text-ink transition-colors duration-fast hover:bg-tide"
                  >
                    Registruotis dabar
                    <Arrow />
                  </MagneticLink>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider from="var(--paper)" to="var(--shell)" crest />

      {/* ══ BLOG PREVIEW ══════════════════════════════════════════════════
          Featured-first: the newest post runs large, the next two sit beside
          it. Replaces three identical cards. */}
      <section className="shell-bg cv-auto pb-section">
        <div className="container-wide">
          <AnimatedSection as="div" className="flex flex-col gap-4 pb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-micro font-semibold text-tide-text">
                Iš mūsų blogo
              </p>
              <h2 className="mt-3 text-h2 font-extrabold">
                Naudinga informacija
              </h2>
            </div>
            <Link to="/straipsniai" className="inline-flex shrink-0 items-center gap-2 text-small font-bold text-tide-text">
              Žiūrėti visus
              <Arrow />
            </Link>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-12">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <AnimatedSection
                as="div"
                key={post.slug}
                delay={i * 0.08}
                className={i === 0 ? 'lg:col-span-7' : 'lg:col-span-5'}
              >
                <Link to={`/straipsniai/${post.slug}`} className="group flex h-full flex-col">
                  <div
                    className={`mask-zoom wave-mask overflow-hidden bg-paper ${
                      i === 0 ? 'aspect-[16/10]' : 'aspect-[16/9]'
                    }`}
                  >
                    <Picture
                      src={post.coverImage}
                      alt={post.title}
                      sizes="(max-width: 1023px) 100vw, (max-width: 1400px) 50vw, 44rem"
                      className="block h-full w-full"
                      imgClassName="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col pt-5">
                    <p className="muted text-micro">{formatDate(post.date)}</p>
                    <h3 className={`mt-2 font-bold leading-snug ${i === 0 ? 'text-h2' : 'text-h3'}`}>
                      {post.title}
                    </h3>
                    <p className="muted measure clamp-2 mt-2 flex-1 text-small leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-small font-bold text-tide-text">
                      Skaityti daugiau
                      <Arrow />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-14">
            <Link to="/straipsniai" className="btn-line">
              Žiūrėti visus straipsnius
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider from="var(--shell)" to="var(--paper)" mirror />

      {/* ══ FAQ ═══════════════════════════════════════════════════════════ */}
      <section className="cv-auto pb-section pt-section-tight">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:gap-16">
          <AnimatedSection as="div" className="lg:col-span-5">
            <h2 className="text-h2 font-extrabold">
              Dažniausiai užduodami klausimai
            </h2>
            <p className="muted mt-5 text-body leading-relaxed">
              Atsakome į Jums rūpimus klausimus apie gydymą, saugumą ir procedūrų eigą.
            </p>
          </AnimatedSection>
          <div className="lg:col-span-7">
            <FAQ />
          </div>
        </div>
      </section>
    </>
  )
}
