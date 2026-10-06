/* ----------------------------------------------------------------------------
 * Suspense fallback for route chunks.
 *
 * In practice this is almost never seen: the prerendered page declares its own
 * route module and main.tsx waits for that chunk before the first render, so
 * the initial load goes straight from static HTML to the real page. This only
 * appears on client-side navigation to a route whose chunk is not warm yet.
 *
 * It reserves a tall block so the footer does not jump up and then back down
 * while a chunk is in flight. No spinner — at these chunk sizes a spinner
 * flashes for one frame and reads as a glitch.
 * -------------------------------------------------------------------------- */

export default function RouteFallback() {
  return <div aria-hidden className="min-h-[70vh]" />
}
