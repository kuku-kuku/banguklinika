// src/App.tsx
import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import About from './pages/About'
import SpecialOffers from './pages/SpecialOffers'

// 1 etapas (jau buvę)
import BurnosHigiena from './pages/BurnosHigiena'
import DantuPlombavimas from './pages/DantuPlombavimas'
import EstetinisPlombavimas from './pages/EstetinisPlombavimas'
import BurnosChirurgija from './pages/BurnosChirurgija'
import DantuBalinimas from './pages/DantuBalinimas'

// 2 etapas (nauji)
import DantuGydymas from './pages/DantuGydymas'
import VaikuOdontologija from './pages/VaikuOdontologija'
import DantuProtezavimas from './pages/DantuProtezavimas'
import DantuTraukimas from './pages/DantuTraukimas'
import DantuTiesinimas from './pages/DantuTiesinimas'
import EndodontinisGydymas from './pages/EndodontinisGydymas'

import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import HeroWave from './components/HeroWave'
import CirkonioOffer from './pages/CirkonioOffer'
import AllOn4Implants from './pages/AllOn4Implants'
import DantuImplantacija from './pages/DantuImplantacija'

// Latvian pages
import HomeLv from './pages/lv/HomeLv'
import DantuImplantacijaLv from './pages/lv/DantuImplantacijaLv'
import ParMusLv from './pages/lv/ParMusLv'
import KontaktiLv from './pages/lv/KontaktiLv'
import CenasLv from './pages/lv/CenasLv'
import PakalpojumiLv from './pages/lv/PakalpojumiLv'
import ZobuProtezesanaLv from './pages/lv/ZobuProtezesanaLv'
import ZobuArstniecibaLv from './pages/lv/ZobuArstniecibaLv'
import ZobuIzlinesanaLv from './pages/lv/ZobuIzlinesanaLv'
import MutesHigiennaLv from './pages/lv/MutesHigiennaLv'
import MutesHirurgijaLv from './pages/lv/MutesHirurgijaLv'
import ZobuBalinesanaLv from './pages/lv/ZobuBalinesanaLv'
import EstetikaPlombanaLv from './pages/lv/EstetikaPlombanaLv'
import ZobuPlombanaLv from './pages/lv/ZobuPlombanaLv'
import ZobuEkstrakcijaLv from './pages/lv/ZobuEkstrakcijaLv'
import EndodontijaLv from './pages/lv/EndodontijaLv'
import BernuOdontologijaLv from './pages/lv/BernuOdontologijaLv'
import IpasiPiedavajumiLv from './pages/lv/IpasiPiedavajumiLv'
import { LangProvider } from './context/LanguageContext'

/** Thin wrapper that provides lang="lv" context to all /lv/* pages */
function LvLayout() {
  return (
    <LangProvider lang="lv">
      <Outlet />
    </LangProvider>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />

      {/* Banga – fone, po navbaru */}
      <div
        className="fixed top-[var(--nav-h)] left-0 right-0 z-0 pointer-events-none"
        aria-hidden
        style={{ willChange: 'transform' }}
      >
        <HeroWave className="h-[180px] md:h-[200px] lg:h-[220px]" />
      </div>

      {/* Visas turinys eina virš bangos */}
      <main className="flex-1 relative z-10 overflow-visible">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apie" element={<About />} />
          <Route path="/paslaugos" element={<Services />} />
          <Route path="/kainos" element={<Pricing />} />
          <Route path="/kontaktai" element={<Contact />} />

          {/* Atskiros paslaugos (1 etapas) */}
          <Route path="/paslaugos/burnos-higiena" element={<BurnosHigiena />} />
          <Route path="/paslaugos/dantu-plombavimas" element={<DantuPlombavimas />} />
          <Route path="/paslaugos/estetinis-plombavimas" element={<EstetinisPlombavimas />} />
          <Route path="/paslaugos/burnos-chirurgija" element={<BurnosChirurgija />} />
          <Route path="/paslaugos/dantu-balinimas" element={<DantuBalinimas />} />

          {/* Atskiros paslaugos (2 etapas - naujos) */}
          <Route path="/paslaugos/dantu-taisymas-gydymas" element={<DantuGydymas />} />
          <Route path="/paslaugos/vaiku-odontologija" element={<VaikuOdontologija />} />
          <Route path="/paslaugos/dantu-protezavimas" element={<DantuProtezavimas />} />
          <Route path="/paslaugos/dantu-traukimas" element={<DantuTraukimas />} />
          <Route path="/paslaugos/dantu-tiesinimas" element={<DantuTiesinimas />} />
          <Route path="/paslaugos/endodontinis-gydymas" element={<EndodontinisGydymas />} />
          <Route path="/paslaugos/dantu-implantacija" element={<DantuImplantacija />} />

          

          {/* ===== LATVIAN PAGES /lv/* ===== */}
          <Route path="/lv" element={<LvLayout />}>
            <Route index element={<HomeLv />} />
            <Route path="par-mums" element={<ParMusLv />} />
            <Route path="kontakti" element={<KontaktiLv />} />
            <Route path="cenas" element={<CenasLv />} />
            <Route path="pakalpojumi" element={<PakalpojumiLv />} />
            {/* Pakalpojumi (service pages) */}
            <Route path="pakalpojumi/zobu-implantacija"  element={<DantuImplantacijaLv />} />
            <Route path="pakalpojumi/zobu-protezesana"   element={<ZobuProtezesanaLv />} />
            <Route path="pakalpojumi/zobu-arstnieciba"   element={<ZobuArstniecibaLv />} />
            <Route path="pakalpojumi/zobu-izlinesana"    element={<ZobuIzlinesanaLv />} />
            <Route path="pakalpojumi/mutes-higiena"      element={<MutesHigiennaLv />} />
            <Route path="pakalpojumi/mutes-hirurgija"    element={<MutesHirurgijaLv />} />
            <Route path="pakalpojumi/zobu-balinesana"    element={<ZobuBalinesanaLv />} />
            <Route path="pakalpojumi/estetiska-plombana" element={<EstetikaPlombanaLv />} />
            <Route path="pakalpojumi/zobu-plombana"      element={<ZobuPlombanaLv />} />
            <Route path="pakalpojumi/zobu-ekstrakcija"   element={<ZobuEkstrakcijaLv />} />
            <Route path="pakalpojumi/endodontija"        element={<EndodontijaLv />} />
            <Route path="pakalpojumi/bernu-odontologija" element={<BernuOdontologijaLv />} />
            <Route path="ipasi-piedavajumi" element={<IpasiPiedavajumiLv />} />
          </Route>

          {/* Ypatingi pasiūlymai – bendras sąrašas */}
          <Route path="/ypatingi-pasiulymai" element={<SpecialOffers />} />

          {/* Atskirų pasiūlymų landing page’ai */}
          <Route
            path="/ypatingi-pasiulymai/cirkonio-keramikos-vainikeliai"
            element={<CirkonioOffer />}
          />
          <Route
            path="/ypatingi-pasiulymai/pilnas-zandikaulio-atstatymas"
            element={<AllOn4Implants />}
          />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}