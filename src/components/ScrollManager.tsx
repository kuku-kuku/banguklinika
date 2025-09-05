import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Valdo scroll'ą:
 * - Iškart po įkėlimo perima naršyklės scroll atkūrimą ir numeta į viršų.
 * - Kiekvieno route pasikeitimo metu (be hash-only) numeta į viršų.
 */
export default function ScrollManager() {
  const { pathname, search } = useLocation()

  // Pirmo įkėlimo metu – išjunk automatinį atkūrimą ir numesk į viršų
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  // Keičiantis route'ui (be hash-only) – numesk į viršų
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, search])

  return null
}
