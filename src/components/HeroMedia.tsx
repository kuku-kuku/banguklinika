import { useEffect, useRef, useState } from 'react'
import Picture from './Picture'

/* ----------------------------------------------------------------------------
 * HeroMedia — the hero's LCP element.
 *
 * The hero is a video, which makes a poor LCP candidate: a browser cannot
 * paint it until enough of the stream has arrived, and the measurement is at
 * the mercy of network conditions. So the LCP here is a still image — the
 * video's own first frame, extracted with ffmpeg and preloaded as AVIF at
 * 23 KB. It paints immediately.
 *
 * The video is only attached after the poster has painted and the element is
 * in view, then cross-fades in. Because the poster IS frame one, the handoff
 * is invisible. Nothing animates the poster itself: the reveal animation runs
 * on the mask around it, never on the image, so LCP is never delayed.
 *
 * The video is paused whenever it scrolls out of view, and is never attached
 * at all for visitors who asked for reduced motion or who are on a metered
 * or slow connection.
 * -------------------------------------------------------------------------- */

const POSTER = '/hero-poster-source.png'

type Props = {
  /** Alt text for the poster. Owned by the caller — this is content. */
  alt: string
  videoSrc?: string
  className?: string
}

type NetworkInfo = { saveData?: boolean; effectiveType?: string }

function shouldLoadVideo(): boolean {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  const conn = (navigator as Navigator & { connection?: NetworkInfo }).connection
  if (conn?.saveData) return false
  if (conn?.effectiveType && /(^|-)2g$/.test(conn.effectiveType)) return false
  return true
}

export default function HeroMedia({ alt, videoSrc = '/hero-video.mp4', className = '' }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [attach, setAttach] = useState(false)
  const [ready, setReady] = useState(false)

  /* Attach the video only once the hero is on screen and the browser is idle,
     so it never competes with the LCP paint. */
  useEffect(() => {
    const el = wrapRef.current
    if (!el || !shouldLoadVideo()) return

    let idle: number | undefined
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        const schedule =
          (window as Window & { requestIdleCallback?: (cb: () => void, o?: object) => number })
            .requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 300))
        idle = schedule(() => setAttach(true), { timeout: 1800 })
      },
      { rootMargin: '0px' }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      if (idle !== undefined)
        (window as Window & { cancelIdleCallback?: (h: number) => void }).cancelIdleCallback?.(idle)
    }
  }, [])

  /* Pause while off-screen — an autoplaying video decoding behind the fold is
     pure battery and main-thread cost. */
  useEffect(() => {
    const v = videoRef.current
    if (!v || !attach) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.15 }
    )
    io.observe(v)
    return () => io.disconnect()
  }, [attach])

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      {/* Poster: the LCP. Eager, high priority, never lazy, never animated. */}
      <Picture
        src={POSTER}
        alt={alt}
        priority
        sizes="(max-width: 1023px) 100vw, 52vw"
        className="block h-full w-full"
        imgClassName="h-full w-full object-cover"
      />

      {attach && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          tabIndex={-1}
          onCanPlay={() => setReady(true)}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: ready ? 1 : 0,
            transition: 'opacity var(--t-slow) var(--ease-out)',
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  )
}
