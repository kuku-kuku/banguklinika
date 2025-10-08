import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import SEO from '../components/SEO'
import ServiceCard from '../components/ServiceCard'
import FAQ from '../components/FAQ'
import AnimatedSection from '../components/AnimatedSection'
import { SERVICES } from '../data/services'
import { CLINIC } from '../data/clinic'
import ReviewsCarousel from '../components/ReviewsCarousel'
import PromoPoster from '../components/PromoPoster'

/** --- Populiariausių paslaugų sąrašas ir jų tiksliniai ID „/paslaugos" puslapyje --- */
const POPULAR_ORDER: Array<{ title: string; id: string }> = [
  { title: 'Dantų gydymas ir plombavimas', id: 'dantu-gydymas' },
  { title: 'Dantų implantacija',            id: 'implantai' },
  { title: 'Skaitmeninis protezavimas (CEREC) estetinė odontologija', id: 'dantu-protezavimas' },
  { title: 'Estetinė odontologija',         id: 'estetinis-plombavimas' },
  { title: 'Profesionali burnos higiena',   id: 'burnos-higiena' },
]

/** Simple local star icon (no extra deps) */
function StarIcon({ filled = true, className = "w-4 h-4" }: { filled?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2.75l2.95 5.98 6.6.96-4.77 4.65 1.13 6.58L12 18.77 6.09 20.92l1.13-6.58L2.45 9.69l6.6-.96L12 2.75z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

function ReviewCard({ name, text, stars }: { name: string; text: string; stars: number }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-soft hover:shadow-md transition">
      <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-50 blur-2xl" />
      <div className="relative p-5">
        <div className="flex items-center gap-1 text-yellow-400 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled={i < stars} className="w-5 h-5" />
          ))}
        </div>
        <p className="text-gray-700 italic mb-3 leading-relaxed">"{text}"</p>
        <p className="text-sm font-semibold text-darkblue-600">– {name}</p>
      </div>
    </div>
  );
}

/** Google Reviews carousel (IO pauzė + 3/1 per slide) */
function GoogleReviews() {
  const allReviews = useMemo(() => ([
    { name: 'Milda',  text: 'Labai malonus aptarnavimas, gydytoja viską aiškiai paaiškino.', stars: 5 },
    { name: 'Tomas',  text: 'Moderni įranga, jauki aplinka – tik geriausi įspūdžiai.', stars: 5 },
    { name: 'Aistė',  text: 'Higiena atlikta greitai ir kokybiškai. Rekomenduoju!', stars: 5 },
    { name: 'Lina',   text: 'Greita registracija ir tikrai profesionalus priėjimas.', stars: 5 },
    { name: 'Paulius',text: 'Estetinis plombavimas – rezultatas pranoko lūkesčius.', stars: 5 },
    { name: 'Eglė',   text: 'Labai kruopštus darbas, nieko neskaudėjo :)', stars: 5 },
    { name: 'Andrius',text: 'Ačiū už profesionalią pagalbą ir aiškų planą.', stars: 5 },
    { name: 'Greta',  text: 'Tvarka, švara ir jauki atmosfera – super.', stars: 5 },
    { name: 'Saulius',text: 'Implantacija praėjo sklandžiai, rekomenduoju.', stars: 5 },
  ]), []);

  const [perSlide, setPerSlide] = useState<number>(() => (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : 1));
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setPerSlide('matches' in e ? (e.matches ? 3 : 1) : (mq.matches ? 3 : 1));
    handler(mq);
    mq.addEventListener?.('change', handler as (e: MediaQueryListEvent) => void);
    return () => mq.removeEventListener?.('change', handler as (e: MediaQueryListEvent) => void);
  }, []);

  const slides = useMemo(() => {
    const chunks: typeof allReviews[] = [];
    for (let i = 0; i < allReviews.length; i += perSlide) {
      chunks.push(allReviews.slice(i, i + perSlide));
    }
    return chunks;
  }, [allReviews, perSlide]);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    if (!paused) {
      timerRef.current = window.setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
      }, 5000);
    }
    return () => { if (timerRef.current) window.clearTimeout(timerRef.current); };
  }, [index, paused, slides.length]);

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => {
      setPaused(!entry.isIntersecting);
    }, { threshold: 0.25 });
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) setIndex((i) => (i + 1) % slides.length);
      else setIndex((i) => (i - 1 + slides.length) % slides.length);
    }
    touchX.current = null;
  };

  return (
    <AnimatedSection>
      <div className="container-narrow no-x-scroll pan-y">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-darkblue-600 tracking-tight">
            Klientų atsiliepimai
          </h2>
          <span className="hidden sm:inline text-xs sm:text-sm text-gray-500">
            Šie atsiliepimai publikuoti „Google"
          </span>
        </div>

        <div
          ref={containerRef}
          className="relative select-none"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)`, willChange: 'transform' }}
            >
              {slides.map((group, gi) => (
                <div key={gi} className="shrink-0 w-full">
                  <div className={perSlide === 1 ? 'grid gap-6 grid-cols-1' : 'grid gap-6 grid-cols-3'}>
                    {group.map((r, ri) => (
                      <ReviewCard key={`${gi}-${ri}`} {...r} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-darkblue-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
                onClick={() => setIndex(i)}
                aria-label={`Peršokti į ${i + 1}-ą skaidrę`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

const globalStyles = `
@keyframes fadeInUp { 
  0% { opacity: 0, transform: translateY(8px); } 
  100% { opacity: 1, transform: translateY(0); }
}
`;

export default function Home() {
  const images = ['/hero.jpg', '/hero1.jpg', '/hero2.jpg', '/hero3.jpg']
  const [index, setIndex] = useState(0)
  const [auto, setAuto] = useState(true)
  const timerRef = useRef<number | null>(null)
  const touchX = useRef<number | null>(null)

  useEffect(() => {
    if (!auto) return
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setIndex(i => (i + 1) % images.length)
    }, 5000)
    return () => { if (timerRef.current) window.clearTimeout(timerRef.current) }
  }, [index, auto, images.length])

  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 40) {
      setAuto(false)
      setIndex(i => (i + (dx < 0 ? 1 : -1) + images.length) % images.length)
    }
    touchX.current = null
  }

  // Structured Data for Google Rich Results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Bangų klinika",
    "description": "Odontologijos klinika Klaipėdoje su modernia įranga ir patyrusia komanda",
    "url": "https://banguklinika.lt",
    "telephone": CLINIC.phone,
    "email": CLINIC.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CLINIC.address,
      "addressLocality": "Klaipėda",
      "postalCode": "92114",
      "addressCountry": "LT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 55.7033,
      "longitude": 21.1443
    },
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "image": "https://banguklinika.lt/hero.jpg",
    "logo": "https://banguklinika.lt/logo.png",
    "medicalSpecialty": "Dentistry",
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Dantų gydymas ir plombavimas"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dantų implantacija"
      },
      {
        "@type": "MedicalProcedure",
        "name": "CEREC protezavimas"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Profesionali burnos higiena"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Estetinė odontologija"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "9",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <SEO
        isHome
        description="Odontologijos klinika Klaipėdoje: dantų gydymas, implantacija (Straumann®/Medentika®), CEREC protezavimas per 1 vizitą, AIRFLOW® higiena, estetinis plombavimas. Nemokama pirminė konsultacija ir nuolaidos."
        keywords="odontologijos klinika Klaipėda, dantų gydymas Klaipėda, dantų implantai, CEREC Klaipėda, burnos higiena, estetinė odontologija, dantų protezavimas"
        image="https://banguklinika.lt/hero.jpg"
        structuredData={structuredData}
      />

      {/* PROMO POSTER */}
      <PromoPoster
        id="2025-10-a3-poster"
        routeOnly="/"
        frequencyDays={14}
        delayMs={300}
        imageSrc="/poster.png"
        secondaryCtaText="Ypatingi pasiūlymai"
        secondaryCtaHref="/ypatingi-pasiulymai"
        persistence="none"
      />

      {/* HERO SECTION */}
      <div className="relative overflow-visible">
        <section className="relative overflow-visible pan-y">
          <div className="relative z-20 container-narrow grid md:grid-cols-2 gap-10 items-center py-12 md:py-20">
            {/* Left */}
            <div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-slate-900"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .6 }}
              >
                Šypsena, kurią norisi rodyti!
              </motion.h1>

              <motion.p
                className="text-gray-600 text-lg max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .1, duration: .6 }}
              >
                Ieškote visko vienoje vietoje? Gydymas, implantai, CEREC technologija, estetika ir higiena – be ilgo laukimo, su žmogišku požiūriu ir jokių paslėptų mokesčių.
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-2 items-stretch md:inline-flex md:flex-wrap md:gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .2, duration: .5 }}
              >
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="btn-primary w-full justify-center rounded-xl text-sm md:text-base"
                >
                  Registracija telefonu
                </a>
                <Link
                  to="/kontaktai#registracija"
                  className="btn-primary w-full justify-center rounded-xl text-sm md:text-base"
                >
                  Registracija internetu
                </Link>
              </motion.div>

              <ul className="text-sm text-gray-600 grid grid-cols-2 gap-y-2 mt-4">
                <li>• Straumann® / Medentika® implantai</li>
                <li>• CEREC – vainikėliai per 1 vizitą</li>
                <li>• Estetinis plombavimas</li>
                <li>• Profesionali higiena (AIRFLOW®)</li>
              </ul>
            </div>

            {/* Right — HERO CAROUSEL */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: .98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: .6 }}
            >
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm bg-white"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                style={{ willChange: 'transform' }}
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={index}
                    src={images[index]}
                    alt={`Bangų klinika - Odontologijos klinika Klaipėdoje ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover select-none"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.0, scale: 0.995 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    decoding="async"
                    loading="eager"
                    onError={(e) => {
                      (e.currentTarget.parentElement as HTMLElement).style.background = '#ffffff';
                    }}
                  />
                </AnimatePresence>

                <button
                  aria-label="Ankstesnė nuotrauka"
                  onClick={() => { setAuto(false); setIndex(i => (i - 1 + images.length) % images.length) }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/70 hover:bg-white ring-1 ring-white/60 text-darkblue-700 text-xl transition"
                >
                  ‹
                </button>
                <button
                  aria-label="Kita nuotrauka"
                  onClick={() => { setAuto(false); setIndex(i => (i + 1) % images.length) }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/70 hover:bg-white ring-1 ring-white/60 text-darkblue-700 text-xl transition"
                >
                  ›
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Rodyti ${i + 1} nuotrauką`}
                      onClick={() => { setAuto(false); setIndex(i) }}
                      className={`h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-white' : 'w-2.5 bg-white/60 hover:bg-white/80'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* WHY CHOOSE US */}
      <AnimatedSection>
        <div className="container-narrow no-x-scroll pan-y">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-600">
              Kodėl verta rinktis <span className="text-brand">Bangų kliniką?</span>
            </h2>
            <p className="mt-2 text-gray-700">
              Moderni įranga, patyrusi komanda ir aiškus gydymo planas – kad kiekvienas vizitas būtų sklandus ir prognozuojamas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'Moderni įranga', d: 'CEREC skenavimas – greitesni ir tikslesni vizitai.' },
              { t: 'Patyrusi komanda', d: 'Individualūs gydymo planai ir pagarbus bendravimas be streso.' },
              { t: 'Aiškios kainos', d: 'Viešas kainoraštis ir skaidrūs sprendimai – be paslėptų mokesčių.' },
            ].map((f, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 transition relative bg-brand-50 border border-brand shadow-soft hover:shadow-md"
              >
                <h3 className="font-semibold text-lg text-darkblue-600">{f.t}</h3>
                <p className="text-sm text-gray-700 mt-2">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* POPULAR SERVICES */}
      <AnimatedSection>
        <div className="container-narrow no-x-scroll pan-y">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-darkblue-600 tracking-tight" style={{ wordBreak: 'keep-all' }}>
            Populiariausios paslaugos
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-1fr">
            {POPULAR_ORDER.map((p, i) => {
              const found = SERVICES.find(s => s.title === p.title || s.id === p.id);
              const s = found ?? { id: p.id, title: p.title } as any;
              const href = `/paslaugos#${p.id}`;
              return <ServiceCard key={s.id || p.id} s={{ ...s, href }} i={i} />;
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* REVIEWS */}
      <div className="no-x-scroll pan-y">
        <ReviewsCarousel />
      </div>

      {/* FREE CONSULTATION CTA */}
      <AnimatedSection>
        <div className="container-narrow no-x-scroll pan-y">
          <div className="relative overflow-hidden rounded-2xl bg-brand-100 border border-brand shadow-soft">
            <div className="relative z-10 text-darkblue-700 text-center px-6 py-12 sm:py-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Pirminė konsultacija <span className="whitespace-nowrap">nemokama</span>
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto text-darkblue-700/90">
                Užsiregistruokite pirminiam įvertinimui ir gaukite{' '}
                <span className="font-semibold">10–15% nuolaidą</span> tęstiniam gydymui pereinant į pilną planą.
              </p>
              <div className="mt-6">
                <Link to="/kontaktai#registracija" className="btn-primary rounded-full px-7 py-3 font-semibold">
                  Registracija internetu
                </Link>
              </div>
              <p className="mt-2 text-xs text-darkblue-700/80">
                * Nuolaidos taikomos pagal klinikos taisykles. Daugiau informacijos – registracijos metu.
              </p>
            </div>
            <div className="pointer-events-none absolute -top-10 -left-16 w-72 h-72 bg-white/30 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-12 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ & CONTACT */}
      <AnimatedSection>
        <div className="container-narrow grid md:grid-cols-2 gap-8 items-start no-x-scroll pan-y">
          <div className="rounded-2xl bg-brand-50 p-6 transition border border-brand shadow-soft hover:shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-darkblue-600">Dažniausi klausimai</h3>
            <FAQ />
          </div>

          <div className="p-6 rounded-2xl bg-brand-50 transition border border-brand shadow-soft hover:shadow-md">
            <h3 className="text-lg font-semibold text-darkblue-600">Turite klausimų?</h3>
            <p className="text-gray-700 mt-2">Parašykite mums – atsakysime per 1 darbo dieną.</p>
            <div className="mt-4">
              <Link to="/kontaktai#kontaktai" className="btn-primary rounded-xl">
                Susisiekti
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}