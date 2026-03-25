import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Redirects any URL without a trailing slash to the same URL with one.
 * Works at the React Router level (client-side navigation).
 * Vercel's "trailingSlash": true handles server-side / direct requests.
 */
export default function TrailingSlashRedirect() {
  const { pathname, search, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Skip root, URLs that already end with /, and file paths (e.g. /sitemap.xml)
    if (pathname !== '/' && !pathname.endsWith('/') && !pathname.includes('.')) {
      navigate(pathname + '/' + search + hash, { replace: true })
    }
  }, [pathname, search, hash, navigate])

  return null
}
