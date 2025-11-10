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

// JSON turinys
import home from '../content/home.json'

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

const globalStyles = `
@keyframes fadeInUp { 
  0% { opacity: 0, transform: translateY(8px); } 
  100% { opacity: 1, transform: translateY(0); }
}
`;

export default function Home() {
  const images: string[] = home.hero.images as any
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

  const POPULAR_ORDER: Array<{ title: string; id: string }> = home.popularServicesOrder as any

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <SEO
        isHome
        description={home.seo?.description}
        keywords={home.seo?.keywords}
        image={home.seo?.image}
        structuredData={{
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
          "image": home.seo?.image ?? "https://banguklinika.lt/hero.jpg",
          "logo": "https://banguklinika.lt/logo.png",
          "medicalSpecialty": "Dentistry"
        }}
      />
      <PromoPoster
        id="home-2025-1"
        imageSrc="/poster.png"
        persistence="none"
        frequencyDays={0}
        delayMs={300}
        routeOnly="/"
        secondaryCtaText="Ypatingi pasiūlymai"
        secondaryCtaHref="/ypatingi-pasiulymai"
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
                {home.hero.title}
              </motion.h1>

              <motion.p
                className="text-gray-600 text-lg max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .1, duration: .6 }}
              >
                {home.hero.subtitle}
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-2 items-stretch md:inline-flex md:flex-wrap md:gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .2, duration: .5 }}
              >
                <a href={`tel:${CLINIC.phone}`} className="btn-primary w-full justify-center rounded-xl text-sm md:text-base">
                  {home.hero.ctaPhone}
                </a>
                <Link to="/kontaktai#registracija" className="btn-primary w-full justify-center rounded-xl text-sm md:text-base">
                  {home.hero.ctaOnline}
                </Link>
              </motion.div>

              <ul className="text-sm text-gray-600 grid grid-cols-2 gap-y-2 mt-4">
                {(home.hero.bullets as string[]).map((b, i) => <li key={i}>• {b}</li>)}
              </ul>
            </div>

            {/* Right — HERO CAROUSEL */}
            <motion.div className="relative" initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }}>
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
                  />
                </AnimatePresence>

                <button aria-label="Ankstesnė nuotrauka" onClick={() => { setAuto(false); setIndex(i => (i - 1 + images.length) % images.length) }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/70 hover:bg-white ring-1 ring-white/60 text-darkblue-700 text-xl transition">‹</button>
                <button aria-label="Kita nuotrauka" onClick={() => { setAuto(false); setIndex(i => (i + 1) % images.length) }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/70 hover:bg-white ring-1 ring-white/60 text-darkblue-700 text-xl transition">›</button>

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
              {home.whyChoose.title.replace('Bangų kliniką', 'Bangų kliniką').split('Bangų kliniką?')[0]}
              <span className="text-brand"> Bangų kliniką?</span>
            </h2>
            <p className="mt-2 text-gray-700">{home.whyChoose.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {(home.whyChoose.items as any[]).map((f, i) => (
              <div key={i} className="rounded-2xl p-6 transition relative bg-brand-50 border border-brand shadow-soft hover:shadow-md">
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
                {home.freeConsult.title.replace('nemokama', '')}
                <span className="whitespace-nowrap"> nemokama</span>
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto text-darkblue-700/90">
                {home.freeConsult.text}
              </p>
              <div className="mt-6">
                <Link to="/kontaktai#registracija" className="btn-primary rounded-full px-7 py-3 font-semibold">
                  {home.freeConsult.cta}
                </Link>
              </div>
              {home.freeConsult.note && (
                <p className="mt-2 text-xs text-darkblue-700/80">{home.freeConsult.note}</p>
              )}
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
            <h3 className="text-lg font-semibold mb-4 text-darkblue-600">{home.faqTeaser.title}</h3>
            <FAQ />
          </div>

          <div className="p-6 rounded-2xl bg-brand-50 transition border border-brand shadow-soft hover:shadow-md">
            <h3 className="text-lg font-semibold text-darkblue-600">Turite klausimų?</h3>
            <p className="text-gray-700 mt-2">{home.faqTeaser.text}</p>
            <div className="mt-4">
              <Link to="/kontaktai#kontaktai" className="btn-primary rounded-xl">
                {home.faqTeaser.cta}
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
