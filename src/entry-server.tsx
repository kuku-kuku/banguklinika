import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import { MotionConfig } from 'framer-motion'
import App from './App'

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
