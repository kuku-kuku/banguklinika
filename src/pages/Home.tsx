import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import SEO from '../components/SEO'
import FAQ from '../components/FAQ'
import AnimatedSection from '../components/AnimatedSection'
import { CLINIC } from '../data/clinic'
import ReviewsCarousel from '../components/ReviewsCarousel'

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
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = heroVideoRef.current
    if (!video) return

    const alreadySeen = (() => { try { return !!sessionStorage.getItem('bk-intro-seen') } catch { return true } })()

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(video)

    if (!alreadySeen) {
      video.pause()
      const onIntroDone = () => { if (video.paused) video.play().catch(() => {}) }
      window.addEventListener('bk-intro-done', onIntroDone)
      return () => {
        observer.disconnect()
        window.removeEventListener('bk-intro-done', onIntroDone)
      }
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    fetch('/api/reviews')
      .then(r => r.ok ? r.json() : null)
      .then(d => {
        if (d?.rating) setGoogle({ rating: d.rating, user_ratings_total: d.user_ratings_total, reviews_url: d.reviews_url })
      })
      .catch(() => { })
  }, [])

  const PHRASES = [
    'Gydymas, implantai ir estetika – vienoje vietoje',
    'Straumann® / Medentika® implantai',
    'CEREC – vainikėliai per 1 vizitą',
    'Profesionali higiena (AIRFLOW®)',
    'Nemokama pirminė konsultacija',
  ]
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [phraseOut, setPhraseOut] = useState(false)
  const phraseTimer = useRef<number | null>(null)

  useEffect(() => {
    phraseTimer.current = window.setInterval(() => {
      setPhraseOut(true)
      window.setTimeout(() => {
        setPhraseIndex(i => (i + 1) % PHRASES.length)
        setPhraseOut(false)
      }, 350)
    }, 2800)
    return () => { if (phraseTimer.current) window.clearInterval(phraseTimer.current) }
  }, [])

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
        title="Odontologijos klinika Klaipėdoje | Bangų klinika"
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
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <video
            ref={heroVideoRef}
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#08212F]/95 via-[#08212F]/80 to-[#08212F]/25" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 10% 65%, rgba(0,183,198,0.13) 0%, transparent 55%)' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1600px] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 w-full py-32 lg:py-40">
          {/* H1 — clinic name for SEO */}
          <motion.h1
            className="inline-flex items-center border border-brand/50 text-brand text-sm md:text-base font-semibold tracking-[0.15em] uppercase px-4 py-2 mb-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Odontologijos klinika Klaipėdoje
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.06] tracking-tight max-w-3xl mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Šypsena, kurią<br />
            <em className="not-italic font-semibold text-brand">norisi rodyti!</em>
          </motion.p>

          {/* Rotating phrase */}
          <motion.div
            className="flex items-start gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="h-px w-8 bg-brand flex-shrink-0 mt-[0.6em]" />
            <span
              className="text-white/70 text-base lg:text-lg font-medium transition-all duration-350 block"
              style={{ opacity: phraseOut ? 0 : 1, transform: phraseOut ? 'translateY(-6px)' : 'translateY(0)', minHeight: '3em' }}
            >
              {PHRASES[phraseIndex]}
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a
              href={`tel:${CLINIC.phone}`}
              className="border border-white/40 text-white px-9 py-4 font-bold text-sm tracking-wide hover:border-brand hover:text-brand transition-all duration-300 text-center rounded-none"
            >
              {home.hero.ctaPhone}
            </a>
            <Link
              to="/kontaktai#registracija"
              className="border border-white/40 text-white px-9 py-4 font-bold text-sm tracking-wide hover:border-brand hover:text-brand transition-all duration-300 text-center rounded-none"
            >
              {home.hero.ctaOnline}
            </Link>
          </motion.div>

          {/* Google rating badge */}
          {google.rating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a
                href={google.reviews_url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 border border-white/20 bg-white/10 backdrop-blur-sm hover:border-brand/50 hover:bg-white/15 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-white text-sm">{google.rating.toFixed(1)}</span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[1, 2, 3, 4, 5].map(i => (
                      <StarIcon key={i} className="w-3 h-3" />
                    ))}
                  </div>
                  {google.user_ratings_total && (
                    <span className="text-white/50 text-sm">({google.user_ratings_total} atsiliepimai)</span>
                  )}
                </div>
              </a>
            </motion.div>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-6 lg:left-12 flex items-center gap-3 z-10">
          <div className="w-px h-10 bg-brand" />
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Slinkti žemyn</span>
        </div>
      </section>

      <SectionDivider />

      {/* WHY CHOOSE US */}
      <div className="relative z-10">
        <AnimatedSection>
          <div className="max-w-[1600px] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Kodėl verta rinktis <span className="text-brand">Bangų kliniką?</span>
              </h2>
              <p className="mt-6 text-gray-600 text-base lg:text-lg leading-relaxed">
                Bangų odontologijos klinikoje dantų atkūrimas ir estetika atliekami remiantis šiuolaikiniais standartais, tikslia diagnostika bei individualiu požiūriu. Naudojame tik pasaulyje pripažintus implantus, o gydymo planus sudarome atsakingai įvertinę ilgalaikį rezultatą. Dantų balinimui taikome emaliui saugią <strong>BEYOND®</strong> sistemą, užtikrinančią sveiką ir estetišką šypseną. Teikiame profesionalią pirminę endodontinę pagalbą bei užtikriname skaidrią kainodarą.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
              {(home.whyChoose.items as any[]).map((f, i) => (
                <div key={i} className="group rounded-[1.5rem] overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img src={WHY_CHOOSE_IMAGES[i] || '/hero.jpg'} alt={f.t} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="p-5 lg:p-6">
                    <h3 className="font-bold text-base lg:text-lg text-slate-900 mb-2 group-hover:text-brand transition-colors duration-300">
                      {f.t}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{f.d}</p>
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
                Populiariausios <span className="text-brand">paslaugos</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
              {POPULAR_SERVICES.map((s) => (
                <Link
                  to={`/paslaugos/${s.id}`}
                  key={s.id}
                  className="group rounded-[1.5rem] overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="p-5 lg:p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-base lg:text-lg text-slate-900 mb-2 group-hover:text-brand transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-4 flex-grow">
                      {s.desc}
                    </p>
                    <div className="text-brand font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300 text-sm">
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
      <section className="relative z-10 py-12 bg-transparent">
        <div className="max-w-[1600px] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="relative overflow-hidden rounded-[2rem] bg-white border border-slate-100 shadow-2xl min-h-[320px] md:min-h-[380px] flex items-center">
            <div className="absolute inset-0 z-0">
              <img
                src="/hero.webp"
                alt="Konsultacija"
                className="w-full h-full object-cover object-right"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 md:via-white/80 to-transparent" />
            </div>

            <div className="relative z-10 px-8 py-10 sm:px-12 lg:py-14 max-w-3xl">
              <div className="space-y-5">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-slate-900">
                  Pirminė konsultacija <span className="text-brand">nemokama</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                  Pirminė gydytojo konsultacija - nemokama!<br />Mūsų tikslas - aiškus kelias link Jūsų sveikos šypsenos be jokių paslėptų mokesčių.
                </p>
                <div className="pt-2">
                  <Link
                    to="/kontaktai#registracija"
                    className="bg-brand hover:bg-brand-600 text-white rounded-xl px-8 py-3.5 font-bold text-base transition-all shadow-xl shadow-brand/20 hover:scale-105 inline-block text-center"
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
        <div className="max-w-[1600px] xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
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