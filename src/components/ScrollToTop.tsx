// src/components/ScrollToTop.tsx
import { useLayoutEffect, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation()

  // pirmas renderis prieš paint — jei nėra hash, būnam viršuje
  useLayoutEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, []) // tik kartą

  // per route keitimus (be hash-only) — sklandžiai į viršų
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, search, hash])

  // BFCache / reload edge-case
  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (!hash && (e.persisted || (performance.getEntriesByType('navigation')[0] as any)?.type === 'reload')) {
        window.scrollTo(0, 0)
      }
    }
    window.addEventListener('pageshow', onPageShow)
    return () => window.removeEventListener('pageshow', onPageShow)
  }, [hash])

  return null
}
