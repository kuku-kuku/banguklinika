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

/* Every route is prerendered to static HTML, and that markup is what paints
 * first — it is the LCP. The client then does a fresh createRoot render (not
 * hydration, because the prerender step rewrites inline styles and the two
 * trees would not match).
 *
 * With per-route chunks that swap would briefly show a Suspense fallback and
 * replace the already-painted content. So each prerendered page declares its
 * own route module and we wait for that one chunk before the first render:
 * the static HTML stays on screen until the real page is ready to take over.
 */
const routeMod = (window as unknown as { __ROUTE_MOD__?: string }).__ROUTE_MOD__

function mount() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  )
}

if (routeMod) {
  /* Resolve the current route's chunk first; mount regardless if it fails so
     a bad hint can never leave the page stuck on static markup. */
  Promise.resolve(preloadPage(routeMod)).finally(mount)
} else {
  mount()
}
