import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import FAQ from '../components/FAQ'
import AnimatedSection from '../components/AnimatedSection'
import { SERVICES } from '../data/services'
import React, { useEffect, useMemo, useRef, useState } from 'react'

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

/** One review card — white bg stays subtle (not colored box) */
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
        <p className="text-gray-700 italic mb-3 leading-relaxed">“{text}”</p>
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

  // 1 on <1024px, 3 on >=1024px
  const [perSlide, setPerSlide] = useState<number>(() => (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : 1));
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setPerSlide('matches' in e ? (e.matches ? 3 : 1) : (mq.matches ? 3 : 1));
    handler(mq);
    mq.addEventListener?.('change', handler as (e: MediaQueryListEvent) => void);
    return () => mq.removeEventListener?.('change', handler as (e: MediaQueryListEvent) => void);
  }, []);

  // Chunk reviews into slides
  const slides = useMemo(() => {
    const chunks: typeof allReviews[] = [];
    for (let i = 0; i < allReviews.length; i += perSlide) {
      chunks.push(allReviews.slice(i, i + perSlide));
    }
    return chunks;
  }, [allReviews, perSlide]);

  // Carousel state
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Auto-advance (5s)
  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    if (!paused) {
      timerRef.current = window.setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
      }, 5000);
    }
    return () => { if (timerRef.current) window.clearTimeout(timerRef.current); };
  }, [index, paused, slides.length]);

  // Pause when not visible
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => {
      setPaused(!entry.isIntersecting);
    }, { threshold: 0.25 });
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  // Touch swipe
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
            Šie atsiliepimai publikuoti „Google“
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
          {/* Track */}
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

          {/* Dots */}
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

/** Tiny keyframes (reserved) */
const globalStyles = `
@keyframes fadeInUp { 
  0% { opacity: 0, transform: translateY(8px) } 
  100% { opacity: 1, transform: translateY(0) }
}
`;

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <SEO
        title="Bangų klinika – Odontologija Klaipėdoje"
        description="Gydymas, implantai, CEREC protezavimas, burnos higiena ir estetika. Nemokama pirminė konsultacija."
      />

      {/* HERO */}
      <div className="no-x-scroll pan-y">
        <Hero />
      </div>

      {/* POPULIARIAUSIOS PASLAUGOS */}
      <AnimatedSection>
        <div className="container-narrow no-x-scroll pan-y">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-darkblue-600 tracking-tight" style={{ wordBreak: 'keep-all' }}>
            Populiariausios paslaugos
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-1fr">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.id} s={s} i={i} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* KODĖL VERTA RINKTIS BANGŲ KLINIKĄ — colored boxes with brand TURQUOISE */}
      <AnimatedSection>
        <div className="container-narrow no-x-scroll pan-y">
          {/* Antraštė + aprašymas */}
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-600">
              Kodėl verta rinktis <span className="text-brand">Bangų kliniką?</span>
            </h2>
            <p className="mt-2 text-gray-700">
              Klinikoje yra laboratorija, kurioje nuolat dirba bei konsultuoja 20 metų patirtį turinti dantų technikė.
            </p>
          </div>

          {/* 3 ypatybės – bg-brand-50 + border-brand */}
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

      {/* GOOGLE REVIEWS (carousel) */}
      <div className="no-x-scroll pan-y">
        <GoogleReviews />
      </div>

      {/* CTA – PIRMINĖ KONSULTACIJA — bg-brand-100 + border-brand */}
      <AnimatedSection>
        <div className="container-narrow no-x-scroll pan-y">
          <div className="relative overflow-hidden rounded-2xl bg-brand-100 border border-brand shadow-soft">
            <div className="relative z-10 text-darkblue-700 text-center px-6 py-12 sm:py-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Pirminė konsultacija <span className="whitespace-nowrap">nemokama</span>
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto text-darkblue-700/90">
                Užsiregistruokite pirminiam įvertinimui ir gaukite{' '}
                <span className="font-semibold">10–15% nuolaidą</span> testiniam gydymui pereinant į pilną gydymo planą.
              </p>
              <div className="mt-6">
                <a
                  href="/kontaktai"
                  className="inline-block bg-white text-darkblue-600 font-semibold py-3 px-7 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
                >
                  Registracija internetu
                </a>
              </div>
              <p className="mt-2 text-xs text-darkblue-700/80">
                * Nuolaidos taikomos pagal klinikos taisykles. Daugiau informacijos – registracijos metu.
              </p>
            </div>
            {/* soft bubbles */}
            <div className="pointer-events-none absolute -top-10 -left-16 w-72 h-72 bg-white/30 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-12 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ + Quick contact — bg-brand-50 + border-brand */}
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
              <a href="/kontaktai" className="btn-primary rounded-xl">
                Susisiekti
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
