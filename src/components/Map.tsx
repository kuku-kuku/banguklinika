import { useState } from 'react'
import { CLINIC } from '../data/clinic'

/* ----------------------------------------------------------------------------
 * Map — facade first, iframe only on interaction.
 *
 * A Google Maps embed pulls in several hundred KB of third-party JS, sets
 * cookies, and runs on the main thread. Even with loading="lazy" it fires as
 * soon as it nears the viewport, which on the contact page is immediately.
 *
 * So the default state is a lightweight facade showing the address, and the
 * real embed mounts only when someone asks for it. The facade and the iframe
 * occupy exactly the same box, so swapping them shifts nothing.
 *
 * Anyone who just wants directions gets the "open in Maps" link and never
 * loads the embed at all.
 * -------------------------------------------------------------------------- */

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  CLINIC.address
)}`

export default function Map() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-image bg-shell">
      {loaded ? (
        <iframe
          title="Žemėlapis"
          src={CLINIC.mapEmbed}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-start justify-end gap-4 p-7">
          {/* Abstract contour backdrop — suggests a map without loading one. */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 400 200"
            preserveAspectRatio="xMidYMid slice"
          >
            <g fill="none" stroke="var(--tide)" strokeWidth="1" opacity="0.28">
              <path d="M-20 60 C 60 40, 120 80, 200 62 S 340 30, 420 54" />
              <path d="M-20 95 C 60 75, 120 115, 200 97 S 340 65, 420 89" />
              <path d="M-20 130 C 60 110, 120 150, 200 132 S 340 100, 420 124" />
              <path d="M-20 165 C 60 145, 120 185, 200 167 S 340 135, 420 159" />
            </g>
          </svg>

          <div className="relative">
            <p className="text-h3 font-bold">{CLINIC.address}</p>
          </div>

          <div className="relative flex flex-wrap gap-3">
            <button type="button" onClick={() => setLoaded(true)} className="btn-ink">
              Rodyti žemėlapį
            </button>
            <a href={mapsHref} target="_blank" rel="noreferrer" className="btn-line">
              Atidaryti Google Maps
            </a>
          </div>

          <p className="muted relative text-micro">
            Žemėlapis įkeliamas iš Google tik jį atvėrus.
          </p>
        </div>
      )}
    </div>
  )
}
