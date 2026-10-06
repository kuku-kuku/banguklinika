import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Picture from '../Picture'

/* ----------------------------------------------------------------------------
 * ServicesTrack — a horizontal carousel of service cards.
 *
 * This replaced a scroll-pinned version that hijacked the page scroll: the
 * section stuck to the viewport and converted vertical wheel movement into
 * horizontal travel. Even once the maths was exact it still felt wrong, because
 * it takes control of scrolling away from the reader and gives no sense of how
 * much page is left while it is pinned.
 *
 * Now it is an ordinary scroll-snap rail driven by the platform: flick it on
 * touch, drag or wheel it, or use the arrows and dots. The page scrolls
 * normally the whole time.
 *
 * There is no animation runtime and no per-frame JS here — native scrolling
 * plus smooth `scrollBy`. The listener only reads scroll position to keep the
 * dots and the disabled arrow states in sync.
 * -------------------------------------------------------------------------- */

export type ServiceCard = {
  id: string
  title: string
  desc: string
  image: string
}

type Props = {
  items: ServiceCard[]
  /** Copy for the per-card link. Passed in so it stays in the page file. */
  readMoreLabel: string
  /** Section heading — the markup lives in the page file, so the copy and the
   *  h2 tag are unchanged. */
  heading?: React.ReactNode
}

function Card({ item, readMoreLabel }: { item: ServiceCard; readMoreLabel: string }) {
  return (
    <Link
      to={`/paslaugos/${item.id}`}
      className="group flex w-[78vw] shrink-0 snap-start flex-col sm:w-[46vw] lg:w-[25rem]"
      data-service-card
    >
      <div className="mask-zoom wave-mask relative aspect-[4/3] overflow-hidden bg-shell">
        <Picture
          src={item.image}
          alt={item.title}
          sizes="(max-width: 640px) 78vw, (max-width: 1023px) 46vw, 25rem"
          className="block h-full w-full"
          imgClassName="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <h3 className="text-h3 font-bold">{item.title}</h3>
        <p className="muted mt-2 text-small leading-relaxed">{item.desc}</p>

        {/* Bordered pill rather than a bare text link, so the action reads as
            a control and matches the other buttons on the page. */}
        <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-pill border border-hairline-strong px-4 py-2 text-small font-bold text-tide-text transition-colors duration-fast group-hover:border-tide group-hover:bg-shell">
          {readMoreLabel}
          <svg
            className="btn-arrow h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M2 8h11M9 4l4 4-4 4" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export default function ServicesTrack({ items, readMoreLabel, heading }: Props) {
  const railRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  /** Distance from one card's left edge to the next, including the gap. */
  const step = useCallback(() => {
    const rail = railRef.current
    if (!rail) return 0
    const cards = rail.querySelectorAll<HTMLElement>('[data-service-card]')
    if (cards.length < 2) return cards[0]?.offsetWidth ?? 0
    return cards[1].offsetLeft - cards[0].offsetLeft
  }, [])

  const sync = useCallback(() => {
    const rail = railRef.current
    if (!rail) return
    const s = step()
    setIndex(s ? Math.round(rail.scrollLeft / s) : 0)
    setAtStart(rail.scrollLeft <= 2)
    /* 2px of slack: sub-pixel card widths mean scrollLeft rarely lands on the
       exact maximum, which would leave the next arrow enabled at the end. */
    setAtEnd(rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 2)
  }, [step])

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return
    sync()
    rail.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      rail.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync])

  const go = (dir: 1 | -1) => {
    railRef.current?.scrollBy({ left: dir * step(), behavior: 'smooth' })
  }

  const toIndex = (i: number) => {
    railRef.current?.scrollTo({ left: i * step(), behavior: 'smooth' })
  }

  const arrowClass =
    'flex h-11 w-11 items-center justify-center rounded-pill border border-hairline-strong ' +
    'text-ink transition-colors duration-fast hover:bg-shell ' +
    'disabled:opacity-35 disabled:hover:bg-transparent'

  return (
    <>
      {heading && (
        <div className="container-wide flex flex-col gap-6 pb-10 sm:flex-row sm:items-end sm:justify-between">
          {heading}

          {/* Arrows sit with the heading, where they are reachable without
              hunting for a control over the rail. */}
          <div className="hidden shrink-0 gap-3 sm:flex">
            <button type="button" onClick={() => go(-1)} disabled={atStart} aria-label="Ankstesnė paslauga" className={arrowClass}>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button type="button" onClick={() => go(1)} disabled={atEnd} aria-label="Kita paslauga" className={arrowClass}>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      )}

      <div
        ref={railRef}
        className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ paddingInline: 'var(--gutter)', scrollPaddingInline: 'var(--gutter)' }}
      >
        {items.map((item) => (
          <Card key={item.id} item={item} readMoreLabel={readMoreLabel} />
        ))}
      </div>

      {/* Dots double as a position indicator: without them a partially
          scrolled rail gives no sense of how many cards are left. */}
      <div className="container-wide mt-7 flex items-center gap-2">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => toIndex(i)}
            className="rounded-pill transition-all duration-mid"
            style={{
              width: i === index ? 20 : 7,
              height: 7,
              background: i === index ? 'var(--tide)' : 'var(--hairline-strong)',
            }}
            aria-label={item.title}
            aria-current={i === index}
          />
        ))}
      </div>
    </>
  )
}
