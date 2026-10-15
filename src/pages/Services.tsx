import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import RevealLines from '../components/RevealLines'
import TideLine from '../components/TideLine'
import WaveDivider from '../components/WaveDivider'
import ServicePreview, { type PreviewItem } from '../components/ServicePreview'
import { SERVICE_GROUPS, type ServiceEntry, type ServiceGroup } from '../data/serviceCatalog'

function Arrow({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg className={`btn-arrow ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ─── Card ────────────────────────────────────────────────────────────────────
   Was a title in a box. It now carries the one-line summary, and the hover
   state is where the life is: the card lifts, a turquoise wedge wipes in from
   the bottom-left — the same corner the wave-mask cuts elsewhere — and the
   arrow steps right. All of it is transform/opacity, so nothing re-lays-out. */
function ServiceCard({
  svc,
  onEnter,
  onLeave,
}: {
  svc: ServiceEntry
  onEnter: () => void
  onLeave: () => void
}) {
  return (
    <Link
      to={svc.to}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className="card-flat group relative flex h-full flex-col overflow-hidden p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-tide-text"
    >
      {/* Decorative wedge. scale-x only, origin bottom-left, so it sweeps. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-px -left-px h-20 w-20 origin-bottom-left scale-0 rounded-bl-card bg-tide/10 transition-transform duration-mid ease-out-soft group-hover:scale-100"
      />

      <div className="relative z-10 flex h-full flex-col">
        <h3 className="text-body font-bold leading-snug transition-colors duration-fast group-hover:text-tide-text">
          {svc.title}
        </h3>
        <p className="muted mb-5 mt-2 text-micro leading-relaxed">{svc.summary}</p>

        <span className="mt-auto inline-flex items-center gap-2 text-micro font-bold text-tide-text">
          Sužinoti daugiau
          <Arrow className="h-3 w-3" />
        </span>
      </div>
    </Link>
  )
}

/* ─── Group ───────────────────────────────────────────────────────────────── */
function Group({
  group,
  onEnter,
  onLeave,
}: {
  group: ServiceGroup
  onEnter: (item: PreviewItem) => void
  onLeave: () => void
}) {
  return (
    <section className="scroll-mt-28" id={group.id}>
      <header className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-h3 font-extrabold">{group.title}</h2>
          <p className="muted measure mt-1.5 text-small leading-relaxed">{group.blurb}</p>
        </div>
        <span className="muted shrink-0 text-micro font-semibold">
          {group.services.length} paslaugos
        </span>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {group.services.map((s, i) => (
          /* AnimatedSection, not a motion component: it shares the one
             observer in src/lib/reveal.ts, where per-group useInView would
             have added eight more, and keeps the grid off the framer-motion
             runtime. The hidden state is CSS scoped under html.js, so it is
             also correct without JS — not merely stripped by the prerenderer
             the way an inline opacity:0 is. */
          <AnimatedSection as="div" key={s.id} delay={Math.min(i, 7) * 0.05} className="h-full">
            <ServiceCard
              svc={s}
              onEnter={() => onEnter({ title: s.title, summary: s.summary, image: group.image })}
              onLeave={onLeave}
            />
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

export default function Services() {
  const [preview, setPreview] = useState<PreviewItem | null>(null)

  return (
    <>
      <SEO
        title="Paslaugos"
        description="Skubi pagalba, dantų protezavimas, kompensuojamas protezavimas, dantų gydymas, implantai, tiesinimas, higiena, chirurgija, balinimas, plombavimas, traukimas, endodontija, vaikų odontologija."
      />

      <ServicePreview item={preview} />

      {/* ══ HERO ═════════════════════════════════════════════════════════════
          The wave is the page's masthead, not an afterthought under the copy:
          three drifting lines fill the band the heading sits on, and one
          heavier line closes the section underneath. The text reads on top of
          the water rather than beside a decoration. */}
      <section className="shell-bg relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 top-16">
          <TideLine className="absolute inset-x-0 top-[12%]" weight={1} opacity={0.2} />
          <TideLine className="absolute inset-x-0 top-[46%]" weight={1.5} opacity={0.14} />
          <TideLine className="absolute inset-x-0 top-[78%]" weight={1} opacity={0.22} />
        </div>

        <div className="container-wide relative z-10 py-section">
          <div className="max-w-3xl">
            <p className="text-small font-semibold text-tide-text">Bangų klinika</p>
            <h1 className="mt-4 text-display font-black">
              <RevealLines lines={['Paslaugos']} />
            </h1>
            <p className="muted measure mt-6 text-lead leading-relaxed">
              Visapusiška odontologo pagalba – nuo profilaktikos iki implantų. Pasirinkite
              dominančią paslaugą.
            </p>
          </div>

          {/* Jump links: 37 services is a long page, and the groups are the
              fastest way into it. */}
          <nav aria-label="Paslaugų grupės" className="mt-10 flex flex-wrap gap-2">
            {SERVICE_GROUPS.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-pill border border-hairline bg-paper px-4 py-2 text-micro font-semibold transition-colors duration-fast hover:border-tide hover:bg-tide/10"
              >
                {g.title}
              </a>
            ))}
          </nav>
        </div>

        <TideLine className="relative z-10 -mt-2" weight={1.75} opacity={0.75} />
      </section>

      <WaveDivider from="var(--shell)" to="var(--paper)" />

      {/* ══ GROUPED GRID ═════════════════════════════════════════════════════ */}
      <div className="container-wide space-y-16 pb-section pt-section-tight sm:space-y-20">
        {SERVICE_GROUPS.map((g) => (
          <Group
            key={g.id}
            group={g}
            onEnter={setPreview}
            onLeave={() => setPreview(null)}
          />
        ))}
      </div>
    </>
  )
}
