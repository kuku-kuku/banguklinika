/* ----------------------------------------------------------------------------
 * Resolver shim.
 *
 * vite.config.ts aliases every import of './routes/resolve' to one of the two
 * real implementations — resolve.lazy.tsx for the browser build and dev
 * server, resolve.eager.tsx for the SSR/prerender build. This file exists so
 * TypeScript has a module to resolve against; at build time it is replaced.
 *
 * Both implementations export the same surface, so re-exporting the lazy one
 * here keeps `tsc --noEmit` honest about the types.
 * -------------------------------------------------------------------------- */

export { getPage, preloadPage, IS_LAZY } from './resolve.lazy'
