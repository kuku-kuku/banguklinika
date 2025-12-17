// src/App.tsx
import { Routes, Route } from 'react-router-dom'
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