/* ----------------------------------------------------------------------------
 * SSR / prerender route resolver — every page statically imported.
 *
 * vite.config.ts aliases `./routes/resolve` to this file for the SSR build
 * only. Bundle size is irrelevant here (this build never reaches a browser),
 * and resolving eagerly guarantees renderToString emits complete markup for
 * every prerendered route.
 * -------------------------------------------------------------------------- */

import type { ComponentType } from 'react'

const mods = import.meta.glob('../pages/**/*.tsx', { eager: true }) as Record<
  string,
  { default: ComponentType<any> }
>

export function getPage(mod: string): ComponentType<any> {
  const key = `../${mod}.tsx`
  const m = mods[key]
  if (!m) throw new Error(`[routes] no page module for "${mod}" (looked for ${key})`)
  return m.default
}

/** No-op on the server — nothing to warm. */
export function preloadPage(_mod: string): Promise<unknown> {
  return Promise.resolve()
}

export const IS_LAZY = false
