import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import { MotionConfig } from 'framer-motion'
import App from './App'

/* Re-exported so scripts/prerender.mjs can map each route to its page module
   and emit the matching modulepreload + __ROUTE_MOD__ hint. */
export { LT_ROUTES, LV_ROUTES } from './routes/manifest'

export function render(url: string) {
  const helmetContext: { helmet?: any } = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <MotionConfig reducedMotion="always">
          <App />
        </MotionConfig>
      </StaticRouter>
    </HelmetProvider>
  )
  return { html, helmet: helmetContext.helmet }
}
