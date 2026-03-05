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

import home from '../content/home.json'

type GoogleData = {
  rating: number | null
  user_ratings_total: number | null
  reviews_url: string | null
}

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

const globalStyles = `
@keyframes fadeInUp { 
  0% { opacity: 0; transform: translateY(8px); } 
  100% { opacity: 1; transform: translateY(0); }
}
`;

export default function Home() {
  const [google, setGoogle] = useState<GoogleData>({ rating: null, user_ratings_total: null, reviews_url: null })

  useEffect(() => {
    fetch('/api/reviews')
      .then(r => r.ok ? r.json() : null)
      .then(d => {
        if (d?.rating) setGoogle({ rating: d.rating, user_ratings_total: d.user_ratings_total, reviews_url: d.reviews_url })
      })
      .catch(() => {})
  }, [])

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

  const POPULAR_SERVICES = [
    { id: 'dantu-implantacija', title: 'Dantų implantacija', desc: 'Saugus ir ilgaamžis prarastų dantų atkūrimas naudojant pasaulyje pripažintas sistemas.', image: '/implantacija.webp' },
    { id: 'dantu-protezavimas', title: 'Dantų protezavimas', desc: 'Atstatome dantų formą ir funkciją pasitelkiant moderniąją CEREC technologiją.', image: '/protezavimas.webp' },
    { id: 'dantu-balinimas', title: 'Dantų balinimas', desc: 'Saugi ir efektyvi procedūra BEYOND® sistema arba individualiomis kapomis namuose.', image: '/balinimas.webp' },
    { id: 'burnos-higiena', title: 'Burnos higiena', desc: 'Profesionali apnašų ir akmenų šalinimo procedūra sveikai burnos ertmei palaikyti.', image: '/higiena.webp' },
    { id: 'estetinis-plombavimas', title: 'Estetinis plombavimas', desc: 'Dantų formos ir spalvos korekcija, atkuriant natūralų ir estetišką vaizdą.', image: '/plombavimas.webp' },
    { id: 'vaiku-odontologija', title: 'Vaikų odontologija', desc: 'Švelni ir dėmesinga priežiūra mažiesiems pacientams draugiškoje aplinkoje.', image: '/hero4.webp' }
  ];

  const WHY_CHOOSE_IMAGES = [
    '/kodel-verta-1.webp',
    '/kodel-verta-2.webp',
    '/kodel-verta-3.webp'
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <SEO
        isHome
        title="Odontologijos klinika (odontologai) Klaipėdoje"
        description="Bangų klinika Klaipėdoje: visos dantų gydymo paslaugos☑️modernūs estetiniai sprendimai☑️profesionaliai sudaromi individualūs gydymo planai☑️Mums svarbiausia⏩Jūsų dantų sveikata!"
        keywords={home.seo?.keywords}
        image={home.seo?.image}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Bangų klinika",
          "description": "Bangų klinika Klaipėdoje: visos dantų gydymo paslaugos☑️modernūs estetiniai sprendimai☑️profesionaliai sudaromi individualūs gydymo planai☑️Mums svarbiausia⏩Jūsų dantų sveikata!",
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
          "image": home.seo?.image ?? "https://banguklinika.lt/hero.webp",
          "logo": "https://banguklinika.lt/logo.png",
          "medicalSpecialty": "Dentistry"
        }}
        lang="lt"
        alternates={[
          { lang: 'lt', url: 'https://banguklinika.lt/' },
          { lang: 'lv', url: 'https://banguklinika.lt/lv' },
          { lang: 'x-default', url: 'https://banguklinika.lt/' },
        ]}
      />
      {/* TEMPORARILY DISABLED: Zirconium offer poster
      <PromoPoster
        id="home-2025-1"
        imageSrc="/poster.webp"
        persistence="none"
        frequencyDays={0}
        delayMs={300}
        routeOnly="/"
        secondaryCtaText="Ypatingi pasiūlymai"
        secondaryCtaHref="/ypatingi-pasiulymai"
      /> */}

      {/* HERO SECTION */}
      <div className="relative z-10 overflow-visible">
        <section className="relative overflow-visible pan-y">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center py-12 md:py-20 lg:py-28">
            <div className="space-y-8 z-10">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .6 }}
              >
                {home.hero.title}
              </motion.h2>

              <motion.p
                className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .1, duration: .6 }}
              >
                {home.hero.subtitle}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .2, duration: .5 }}
              >
                <a href={`tel:${CLINIC.phone}`} className="btn-primary px-10 py-4 lg:py-5 rounded-2xl shadow-xl shadow-brand/20 hover:scale-105 transition-all text-center justify-center text-base font-bold">
                  {home.hero.ctaPhone}
                </a>
                <Link to="/kontaktai#registracija" className="bg-white border-2 border-brand text-brand px-10 py-4 lg:py-5 rounded-2xl font-bold hover:bg-brand-50 transition-all text-center justify-center text-base">
                  {home.hero.ctaOnline}
                </Link>
              </motion.div>

              {/* Google rating badge */}
              {google.rating && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: .3, duration: .5 }}
                >
                  <a
                    href={google.reviews_url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:border-brand/30 transition-all shadow-sm hover:shadow-md"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-slate-900 text-sm">{google.rating.toFixed(1)}</span>
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[1,2,3,4,5].map(i => (
                          <StarIcon key={i} className="w-3.5 h-3.5" />
                        ))}
                      </div>
                      {google.user_ratings_total && (
                        <span className="text-slate-500 text-sm">({google.user_ratings_total} atsiliepimai)</span>
                      )}
                    </div>
                  </a>
                </motion.div>
              )}

              <ul className="text-sm md:text-base font-medium text-slate-500 flex flex-col gap-y-3 pt-2 mt-2">
                {(home.hero.bullets as string[]).map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-brand font-black text-lg">✓</span> {b}
                  </li>
                ))}
              </ul>

              {/* Technology / partner badges */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .4, duration: .5 }}
              >
              </motion.div>
            </div>

            <motion.div className="relative" initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }}>
              <div
                className="relative aspect-square md:aspect-[16/10] lg:aspect-[4/5] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-slate-200 bg-white"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                {images.map((imgSrc, i) => (
                  <motion.img
                    key={imgSrc}
                    src={imgSrc}
                    alt="Bangų klinika"
                    className="absolute inset-0 w-full h-full object-cover select-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: i === index ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    decoding="async"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                ))}

                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 pointer-events-none">
                  <button onClick={() => { setAuto(false); setIndex(i => (i - 1 + images.length) % images.length) }} className="pointer-events-auto w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-2xl hover:bg-brand hover:text-white transition-all">‹</button>
                  <button onClick={() => { setAuto(false); setIndex(i => (i + 1) % images.length) }} className="pointer-events-auto w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-2xl hover:bg-brand hover:text-white transition-all">›</button>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setAuto(false); setIndex(i) }}
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
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Kodėl verta rinktis <span className="text-brand">Bangų kliniką?</span>
              </h2>
              <p className="mt-6 text-gray-600 text-base lg:text-lg leading-relaxed">
                Bangų odontologijos klinikoje dantų atkūrimas ir estetika atliekami remiantis šiuolaikiniais standartais, tikslia diagnostika bei individualiu požiūriu. Naudojame tik pasaulyje pripažintus implantus, o gydymo planus sudarome atsakingai įvertinę ilgalaikį rezultatą. Dantų balinimui taikome emaliui saugią <strong>BEYOND®</strong> sistemą, užtikrinančią sveiką ir estetišką šypseną. Teikiame profesionalią pirminę endodontinę pagalbą bei užtikriname skaidrią kainodarą.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {(home.whyChoose.items as any[]).map((f, i) => (
                <div key={i} className="group rounded-[2rem] overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={WHY_CHOOSE_IMAGES[i] || '/hero.jpg'} alt={f.t} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="p-8 lg:p-10">
                    <h3 className="font-bold text-xl lg:text-2xl text-slate-900 mb-4 group-hover:text-brand transition-colors duration-300">
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
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Populiariausios <span className="text-brand">paslaugos</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {POPULAR_SERVICES.map((s) => (
                <Link
                  to={`/paslaugos/${s.id}`}
                  key={s.id}
                  className="group rounded-[2rem] overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col flex-grow">
                    <h3 className="font-bold text-xl lg:text-2xl text-slate-900 mb-3 group-hover:text-brand transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base mb-6 flex-grow">
                      {s.desc}
                    </p>
                    <div className="text-brand font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                      Plačiau <span>→</span>
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

      {/* NEMOKAMA KONSULTACIJA */}
      <section className="relative z-10 py-20 bg-transparent">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="relative overflow-hidden rounded-[3rem] bg-white border border-slate-100 shadow-2xl min-h-[500px] md:min-h-[600px] flex items-center">
            <div className="absolute inset-0 z-0">
              <img
                src="/hero.webp"
                alt="Konsultacija"
                className="w-full h-full object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 md:via-white/80 to-transparent" />
            </div>

            <div className="relative z-10 px-8 py-16 sm:px-16 lg:py-24 max-w-4xl">
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                  Pirminė konsultacija <span className="text-brand">nemokama</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Užsiregistruokite pirminiam įvertinimui ir gaukite 10–15% nuolaidą tęstiniam gydymui pereinant į pilną planą. Mūsų tikslas – aiškus kelias link Jūsų sveikos šypsenos be jokių paslėptų mokesčių.
                </p>
                <div className="pt-4">
                  <Link
                    to="/kontaktai#registracija"
                    className="bg-brand hover:bg-brand-600 text-white rounded-2xl px-12 py-5 font-bold text-xl transition-all shadow-xl shadow-brand/20 hover:scale-105 inline-block text-center"
                  >
                    Registruotis dabar
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
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl lg:text-4xl font-extrabold text-slate-900 mb-6">
              Dažniausiai užduodami <span className="text-brand">klausimai</span>
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
              Atsakome į Jums rūpimus klausimus apie gydymą, saugumą ir procedūrų eigą Bangų klinikoje.
            </p>
          </div>
          <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-sm border border-slate-200">
            <FAQ />
          </div>
        </div>
      </section>
    </>
  )
}