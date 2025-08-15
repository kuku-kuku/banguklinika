import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import About from './pages/About'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paslaugos" element={<Services />} />
          <Route path="/kainos" element={<Pricing />} />
          <Route path="/kontaktai" element={<Contact />} />
          <Route path="/apie" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
