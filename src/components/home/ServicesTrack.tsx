import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { m, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Picture from '../Picture'

/* ----------------------------------------------------------------------------
 * ServicesTrack — signature moment: a scroll-pinned horizontal track.
 *
 * Desktop (>=1024px, fine pointer, motion allowed): the section pins and the
 * card row translates on the X axis in step with scroll progress. Only
 * `transform` is animated, on one container rather than per card.
 *
 * Everywhere else — mobile, touch, reduced motion — it is a native
 * scroll-snap row with no JS driving it at all. That is genuinely better on
 * touch (you flick it directly) and it means the pinning logic never runs
 * where it would fight the platform.
 *
 * The desktop/mobile choice is made after mount from a media query, because
 * pinning needs real measurements; the markup is identical either way, so
 * prerendered HTML and crawlers always see every card and every link.
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
  /** Section heading. Rendered inside the pinned area so it stays on screen
   *  for the whole horizontal run — the markup still lives in the page file,
   *  so the copy and the h2 tag are unchanged. */
  heading?: React.ReactNode
}

function usePinnable() {
  const reduced = useReducedMotion()
  const [wide, setWide] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (pointer: fine)')
    setWide(mq.matches)
    const on = () => setWide(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  return wide && !reduced
}

function Card({ item, readMoreLabel }: { item: ServiceCard; readMoreLabel: string }) {
  return (
    <Link
      to={`/paslaugos/${item.id}`}
      className="group flex w-[78vw] shrink-0 snap-center flex-col sm:w-[52vw] lg:w-[26rem]"
    >
      <div className="mask-zoom wave-mask relative aspect-[4/3] overflow-hidden bg-shell">
        <Picture
          src={item.image}
          alt={item.title}
          sizes="(max-width: 640px) 78vw, (max-width: 1023px) 52vw, 26rem"
          className="block h-full w-full"
          imgClassName="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <h3 className="text-h3 font-bold">{item.title}</h3>
        <p className="muted mt-2 text-small leading-relaxed">{item.desc}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-small font-bold text-tide-text">
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
  const pinned = usePinnable()
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [shift, setShift] = useState(0)

  /* How far the row must travel so the last card ends flush with the right
     gutter.

     This has to stay correct for the life of the section, because the pinned
     section's height is derived from it: if the two disagree, the row either
     stops short or keeps travelling after the last card has arrived, which
     feels like the page is stuck. An early version measured once at the
     width the page happened to load at and never updated, so resizing left
     ~300px of dead scroll at the end.

     So the observer watches the document element as well as the track —
     a viewport change resizes the former even when the latter's content is
     unchanged — and the right gutter is added back, since scrollWidth
     excludes trailing padding. */
  useEffect(() => {
    if (!pinned) {
      setShift(0)
      return
    }

    const measure = () => {
      const track = trackRef.current
      if (!track) return
      const gutter = parseFloat(getComputedStyle(track).paddingRight) || 0
      const travel = track.scrollWidth + gutter - track.clientWidth
      setShift((prev) => {
        const next = Math.max(0, Math.round(travel))
        return Math.abs(next - prev) > 1 ? next : prev
      })
    }

    measure()

    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)
    ro.observe(document.documentElement)

    window.addEventListener('resize', measure)
    window.addEventListener('orientationchange', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
      window.removeEventListener('orientationchange', measure)
    }
  }, [pinned, items.length, shift > 0])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  /* Strictly linear, and exactly 1:1 with the scroll: the section is one
     viewport tall plus `shift`, so progress 0->1 spans `shift` pixels of
     scrolling and the row travels the same `shift` pixels sideways. One
     wheel notch moves the cards by the same distance it would move the page.

     The previous mapping eased in and out over the first and last 8%, which
     meant the row sat still while the page was already pinned, then sped up
     to catch up, then stalled again before releasing. That is what read as
     scrolling "from left to right or reverse" and as being stuck. */
  const x = useTransform(scrollYProgress, [0, 1], [0, -shift])

  /* Pin only once the travel distance is known. On the first frame after
     mount `shift` is still 0, and pinning then produced a full viewport of
     sticky scrolling where nothing moved at all, followed by a jump when the
     measurement landed. Until it is measured, the plain snap row renders. */
  if (!pinned || shift <= 0) {
    return (
      <>
        {heading && <div className="container-wide w-full pb-12">{heading}</div>}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ paddingInline: 'var(--gutter)' }}
        >
          {items.map((item) => (
            <Card key={item.id} item={item} readMoreLabel={readMoreLabel} />
          ))}
          {/* Trailing spacer so the last card can snap to centre. */}
          <div aria-hidden className="w-[1px] shrink-0" />
        </div>
      </>
    )
  }

  return (
    <div
      ref={sectionRef}
      /* Scroll distance = one viewport plus the horizontal travel, converted
         1:1 so the row tracks the wheel rather than racing it. */
      style={{ height: `calc(100vh + ${shift}px)` }}
      className="relative"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {heading && <div className="container-wide w-full pb-10">{heading}</div>}
        <m.div
          ref={trackRef}
          style={{ x, paddingInline: 'var(--gutter)' }}
          /* No will-change here. Promoting this element to its own layer made
             descendant clip-paths silently fail to paint, so the card images
             rendered blank. Framer Motion already promotes the element while
             the transform is actually animating. */
          className="flex gap-8"
        >
          {items.map((item) => (
            <Card key={item.id} item={item} readMoreLabel={readMoreLabel} />
          ))}
        </m.div>
      </div>
    </div>
  )
}
