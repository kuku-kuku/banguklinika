import { Link } from 'react-router-dom'
import { CLINIC } from '../data/clinic'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7FBFF] to-white" />
        <div className="absolute -top-16 -left-24 w-96 h-96 bg-sky-100/40 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 -right-16 w-[28rem] h-[28rem] bg-primary-100/40 blur-3xl rounded-full" />
      </div>

      <div className="container-narrow grid md:grid-cols-2 gap-10 items-center py-12 md:py-20">
        {/* Left */}
        <div className="space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-slate-900"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            Šypsena, kuria norisi rodyti
          </motion.h1>

          <motion.p
            className="text-gray-600 text-lg max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .1, duration: .6 }}
          >
            Gydymas, implantacija, CEREC protezavimas, higiena ir estetika – vienoje klinikoje.
            Greita registracija, švelnus požiūris, aiškios kainos.
          </motion.p>

          {/* CTA buttons — mobile: 2 columns in one row; desktop: inline-flex */}
          <motion.div
            className="
              grid grid-cols-2 gap-2 items-stretch
              md:inline-flex md:flex-wrap md:gap-3
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2, duration: .5 }}
          >
            <a
              href={`tel:${CLINIC.phone}`}
              className="
                inline-flex w-full justify-center items-center
                bg-[#10394F] hover:bg-[#0d2d3c] text-white
                font-semibold py-2.5 px-4 md:py-3 md:px-6
                rounded-xl transition text-sm md:text-base
              "
            >
              Registracija telefonu
            </a>
            <Link
              to="/kainos"
              className="
                inline-flex w-full justify-center items-center
                bg-[#10394F] hover:bg-[#0d2d3c] text-white
                font-semibold py-2.5 px-4 md:py-3 md:px-6
                rounded-xl transition text-sm md:text-base
              "
            >
              Peržiūrėti kainas
            </Link>
          </motion.div>

          {/* quick features */}
          <ul className="text-sm text-gray-600 grid grid-cols-2 gap-y-2 mt-4">
            <li>• Straumann® / Medentika® implantai</li>
            <li>• CEREC – vainikėliai per 1 vizitą</li>
            <li>• Estetinis plombavimas</li>
            <li>• Profesionali higiena (AIRFLOW®)</li>
          </ul>
        </div>

        {/* Right — HERO CAROUSEL */}
        <HeroCarousel />
      </div>
    </section>
  )
}

/* ---------------------- Carousel ---------------------- */

function HeroCarousel() {
  const images = ['/hero.jpg', '/hero1.jpg', '/hero2.jpg', '/hero3.jpg']
  const [index, setIndex] = useState(0)
  const [auto, setAuto] = useState(true)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (!auto) return
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setIndex(i => (i + 1) % images.length)
    }, 5000)
    return () => { if (timerRef.current) window.clearTimeout(timerRef.current) }
  }, [index, auto, images.length])

  const go = (dir: 1 | -1) => {
    setAuto(false)
    setIndex(i => (i + dir + images.length) % images.length)
  }
  const goTo = (i: number) => {
    setAuto(false)
    setIndex(i)
  }

  const touchX = useRef<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 40) {
      setAuto(false)
      if (dx < 0) go(1); else go(-1)
    }
    touchX.current = null
  }

  return (
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
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="Bangų klinika"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.0, scale: 0.995 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onError={(e) => {
              (e.currentTarget.parentElement as HTMLElement).style.background =
                'linear-gradient(135deg,#CFE9FF 0%,#8BD3F7 45%,#4FC3F7 100%)'
            }}
          />
        </AnimatePresence>

        {/* Transparent side controls */}
        <button
          aria-label="Ankstesnė nuotrauka"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur ring-1 ring-white/40 text-white text-xl transition"
        >
          ‹
        </button>
        <button
          aria-label="Kita nuotrauka"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur ring-1 ring-white/40 text-white text-xl transition"
        >
          ›
        </button>

        {/* dots — centered */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Rodyti ${i + 1} nuotrauką`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-white' : 'w-2.5 bg-white/60 hover:bg-white/80'}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
