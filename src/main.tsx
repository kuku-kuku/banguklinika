if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { preloadPage } from './routes/resolve'
import './index.css'

/* Every route is prerendered to static HTML. The client then does a fresh
 * createRoot render (not hydration — the prerender step rewrites inline styles
 * and the two trees would not match).
 *
 * Kick off the current route's chunk immediately, but do NOT await it before
 * mounting. Awaiting let the static markup paint first and then get torn down
 * and rebuilt by createRoot, and that swap measured as 0.21 CLS. Mounting
 * straight away keeps the static paint and React's first commit in the same
 * frame, which is what the pre-redesign build did (0.0004 CLS).
 *
 * The Suspense fallback is effectively never seen: scripts/prerender.mjs emits
 * a modulepreload for this exact chunk, so it downloads in parallel with the
 * entry chunk and its dynamic import resolves in a microtask.
 */
const w = window as unknown as { __ROUTE_MOD__?: string; __ROUTE_PATH__?: string }
const routeMod = w.__ROUTE_MOD__
const container = document.getElementById('root')!

/* Only hydrate when this document really was prerendered for the URL being
   viewed. A route with no prerendered file is served dist/index.html by the
   SPA fallback, which carries the home page's markup — hydrating that against
   a different route would mismatch and React would throw the server HTML away
   anyway. Normalise trailing slashes before comparing. */
const norm = (p: string) => p.replace(/\/+$/, '') || '/'
const prerendered =
  container.childElementCount > 0 &&
  !!w.__ROUTE_PATH__ &&
  norm(w.__ROUTE_PATH__) === norm(location.pathname)

function tree() {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  )
}

if (prerendered && routeMod) {
  /* Hydrate the prerendered markup rather than replacing it. The route chunk
     must be resolved first: hydrateRoot cannot hydrate a suspended boundary,
     it would discard the server HTML and client-render instead. */
  preloadPage(routeMod).then(
    () => ReactDOM.hydrateRoot(container, tree()),
    () => ReactDOM.createRoot(container).render(tree())
  )
} else {
  if (routeMod) preloadPage(routeMod)
  ReactDOM.createRoot(container).render(tree())
}
