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

import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import HeroWave from './components/HeroWave'
import CirkonioOffer from './pages/CirkonioOffer'

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
          <Route path="/ypatingi-pasiulymai" element={<SpecialOffers />} />
          <Route path="/kontaktai" element={<Contact />} />
          <Route path="/ypatingi-pasiulymai" element={<SpecialOffers />} />
          <Route
            path="/ypatingi-pasiulymai/cirkonio-keramikos-vainikeliai"
            element={<CirkonioOffer />}
          />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
