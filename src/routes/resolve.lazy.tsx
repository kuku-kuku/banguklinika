/* ----------------------------------------------------------------------------
 * Client route resolver — one chunk per page.
 *
 * Vite turns this glob into a map of dynamic importers, so each page becomes
 * its own chunk and the initial bundle carries only the shell.
 *
 * The SSR/prerender build aliases this module to ./resolve.eager.tsx, where
 * every page is statically imported. That matters: renderToString does not
 * wait on suspended boundaries, so a lazy component would prerender as its
 * fallback and crawlers would receive an empty page.
 * -------------------------------------------------------------------------- */

import { lazy, type ComponentType } from 'react'

const loaders = import.meta.glob('../pages/**/*.tsx') as Record<
  string,
  () => Promise<{ default: ComponentType<any> }>
>

const cache = new Map<string, ComponentType<any>>()

/** `mod` is a manifest key such as `pages/Home` or `pages/lv/HomeLv`. */
export function getPage(mod: string): ComponentType<any> {
  const hit = cache.get(mod)
  if (hit) return hit

  const key = `../${mod}.tsx`
  const loader = loaders[key]
  if (!loader) throw new Error(`[routes] no page module for "${mod}" (looked for ${key})`)

  const Comp = lazy(loader)
  cache.set(mod, Comp)
  return Comp
}

/**
 * Warm a route's chunk ahead of navigation. Called on nav link hover/focus so
 * the chunk is usually already in memory by the time the click lands.
 * Failures are ignored — this is a hint, never a dependency.
 */
export function preloadPage(mod: string): Promise<unknown> {
  const loader = loaders[`../${mod}.tsx`]
  return loader ? loader().catch(() => {}) : Promise.resolve()
}

export const IS_LAZY = true
