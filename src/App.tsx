// src/App.tsx
import { Suspense } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import TrailingSlashRedirect from './components/TrailingSlashRedirect'
import BackToTop from './components/BackToTop'
import MobileStickyBar from './components/MobileStickyBar'
import InbankWidget from './components/InbankWidget'
import TideLine from './components/TideLine'
import RouteFallback from './components/RouteFallback'
import MotionProvider from './components/MotionProvider'

import { LangProvider } from './context/LanguageContext'
import { useLenis } from './hooks/useLenis'
import { LT_ROUTES, LV_ROUTES } from './routes/manifest'
import { getPage } from './routes/resolve'

/** Thin wrapper that provides lang="lv" context to all /lv/* pages */
function LvLayout() {
  return (
    <LangProvider lang="lv">
      <Outlet />
    </LangProvider>
  )
}

/** Build <Route> elements from the manifest. Page components resolve eagerly
 *  during SSR/prerender and lazily in the browser — see src/routes/resolve. */
function routeElements(defs: typeof LT_ROUTES) {
  return defs.map(({ path, mod }) => {
    const Page = getPage(mod)
    return path === '' ? (
      <Route key={mod} index element={<Page />} />
    ) : (
      <Route key={`${path}:${mod}`} path={path} element={<Page />} />
    )
  })
}

export default function App() {
  useLenis()

  return (
    <MotionProvider>
      <div className="min-h-screen flex flex-col bg-paper">
        <ScrollToTop />
        <TrailingSlashRedirect />
        <Navbar />
        <InbankWidget />

        <main className="flex-1 relative z-10 overflow-visible">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              {routeElements(LT_ROUTES)}
              <Route path="/lv" element={<LvLayout />}>
                {routeElements(LV_ROUTES)}
              </Route>
            </Routes>
          </Suspense>
        </main>

        <TideLine />
        <Footer />
        <BackToTop />

        <MobileStickyBar
          phone="+37067191399"
          bookingHref="/kontaktai#registracija"
          helpHref="/paslaugos/skubi-pagalba"
        />
      </div>
    </MotionProvider>
  )
}
