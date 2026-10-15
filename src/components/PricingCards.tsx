import { useMemo, useRef, useState } from 'react'
import { PRICING, type PriceGroup, type PriceItem } from '../data/pricing'
import { TableOfContents, type TocSection } from './TableOfContents'
import { wrapName as renderName } from '../utils/wrapName'
import clsx from 'clsx'

/* ----------------------------------------------------------------------------
 * The price list: eleven groups, 125 rows.
 *
 * This was an accordion. Opening a group pushed every group below it down the
 * page, so arriving at the one you clicked meant chasing a moving target, and
 * only one group's prices were ever readable at once. Now nothing expands:
 * every price is on the page, the groups are sections, and the sticky index
 * is how you move between them — the same TableOfContents used on the eleven
 * service pages, so this page navigates like the rest of the site.
 *
 * The filter is the other half of it. Browsing eleven groups is fine when you
 * know the category; typing "balinim" is far better when you know the
 * procedure, and that is most of the traffic a price list gets.
 * -------------------------------------------------------------------------- */

const TWO_COL_MIN_ITEMS = 12

function slugify(t: string) {
  return t
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

/** Fold Lithuanian diacritics, so a query typed without them still matches. */
function fold(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}

function fmtItem(p: PriceItem) {
  const { from, to, exact } = p
  if (from == null) return '—'
  if (to != null) return `€${from}–${to}`
  return exact ? `€${from}` : `nuo €${from}`
}

function groupRange(items: PriceItem[]) {
  let min = Infinity
  let max = 0
  for (const it of items) {
    if (typeof it.from === 'number') min = Math.min(min, it.from)
    const upper = typeof it.to === 'number' ? it.to : typeof it.from === 'number' ? it.from : 0
    max = Math.max(max, upper)
  }
  if (!isFinite(min)) return null
  return { min, max }
}

function rangeLabel(items: PriceItem[]) {
  const r = groupRange(items)
  if (!r) return '—'
  return r.max > r.min ? `€${r.min}–${r.max}` : `€${r.min}`
}

function SearchIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </svg>
  )
}

/* ─── One group ───────────────────────────────────────────────────────────── */
function Group({ group, items }: { group: PriceGroup; items: PriceItem[] }) {
  /* Two columns only when the group is long enough to earn them, and done
     with CSS columns so the browser balances the two heights. Splitting the
     array in JS left one column ending ~200px above the other, because row
     heights vary with notes and with how long a name wraps. */
  const twoCols = items.length >= TWO_COL_MIN_ITEMS

  return (
    <section
      id={slugify(group.title)}
      className="scroll-mt-36 2xl:scroll-mt-24"
    >
      <header className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-hairline pb-3">
        <h2 className="text-h3 font-extrabold">{renderName(group.title)}</h2>
        <p className="muted shrink-0 text-micro">
          <span className="font-bold tabular-nums text-tide-text">{rangeLabel(items)}</span>
          <span className="ml-2">{items.length} kainos</span>
        </p>
      </header>

      <dl className={clsx('w-full', twoCols && 'md:columns-2 md:gap-x-10')}>
        {items.map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className="flex break-inside-avoid items-start justify-between gap-4 rounded-ctl px-3 py-2.5 transition-colors duration-fast hover:bg-shell"
          >
            <dt className="min-w-0">
              <span className="text-small font-medium leading-snug">{renderName(p.name)}</span>
              {p.note && <span className="muted mt-1 block text-micro leading-relaxed">{p.note}</span>}
            </dt>
            <dd className="shrink-0 whitespace-nowrap text-small font-bold tabular-nums text-tide-text">
              {fmtItem(p)}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default function PricingCards() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState('')

  /* Filtering matches the item name, its note, and the group title, so both
     "implant" and "chirurg" land somewhere sensible. Groups with no match
     drop out entirely rather than sitting there empty. */
  const groups = useMemo(() => {
    const q = fold(query.trim())
    if (!q) return PRICING.map((g) => ({ group: g as PriceGroup, items: g.items }))

    return PRICING.map((g) => {
      const groupHit = fold(g.title).includes(q)
      const items = groupHit
        ? g.items
        : g.items.filter((p) => fold(p.name).includes(q) || (p.note ? fold(p.note).includes(q) : false))
      return { group: g as PriceGroup, items }
    }).filter((g) => g.items.length > 0)
  }, [query])

  const matchCount = useMemo(() => groups.reduce((n, g) => n + g.items.length, 0), [groups])

  const sections: TocSection[] = useMemo(
    () => groups.map(({ group }) => ({ id: slugify(group.title), label: group.title })),
    [groups]
  )

  return (
    <div ref={pageRef} className="2xl:flex 2xl:items-start 2xl:gap-8">
      {/* Only rendered when there is something to index — a one-entry index
          while filtering is noise. */}
      {sections.length > 1 && (
        <TableOfContents
          sections={sections}
          title="Kainoraštis"
          rootRef={pageRef}
          cta={{ label: 'Registruotis vizitui', to: '/kontaktai' }}
        />
      )}

      <div className="min-w-0 flex-1">
        <div className="mb-10">
          <label className="relative block">
            <span className="sr-only">Ieškoti paslaugos kainoraštyje</span>
            <span className="muted pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
              <SearchIcon />
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ieškokite paslaugos, pvz. „balinimas“"
              className="w-full rounded-pill border border-hairline bg-paper py-3.5 pl-11 pr-4 text-small outline-none transition-colors duration-fast placeholder:text-[var(--text-mute)] focus:border-tide"
            />
          </label>

          <p className="muted mt-3 text-micro" aria-live="polite">
            {query.trim()
              ? matchCount > 0
                ? `Rasta ${matchCount} kainų pagal „${query.trim()}“`
                : `Pagal „${query.trim()}“ nieko nerasta`
              : `Iš viso ${matchCount} kainų ${PRICING.length} grupėse`}
          </p>
        </div>

        {groups.length === 0 ? (
          <p className="muted text-body">
            Pabandykite kitą žodį arba{' '}
            <button
              type="button"
              onClick={() => setQuery('')}
              className="font-bold text-tide-text underline underline-offset-2"
            >
              peržiūrėkite visą kainoraštį
            </button>
            .
          </p>
        ) : (
          <div className="space-y-14">
            {groups.map(({ group, items }) => (
              <Group key={group.title} group={group} items={items} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
