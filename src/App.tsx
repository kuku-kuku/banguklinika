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

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Scroll valdymas (refresh + route change → į viršų) */}
      <ScrollToTop />

      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apie" element={<About />} />
          <Route path="/paslaugos" element={<Services />} />
          <Route path="/kainos" element={<Pricing />} />
          <Route path="/ypatingi-pasiulymai" element={<SpecialOffers />} />
          <Route path="/kontaktai" element={<Contact />} />
        </Routes>
      </main>
      <Footer />

      {/* „Grįžti į viršų“ mygtukas */}
      <BackToTop />
    </div>
  )
}
