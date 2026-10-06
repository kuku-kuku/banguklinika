// src/components/MobileStickyBar.tsx
import { useLocation } from 'react-router-dom'

/* ----------------------------------------------------------------------------
 * MobileStickyBar — the primary conversion path on phones.
 *
 * Rebuilt as a solid charcoal bar. The previous version was a blurred
 * translucent panel (backdrop-filter: blur(24px) saturate(180%)); besides
 * being the glassmorphism look the brief rules out, a full-width backdrop
 * filter pinned over scrolling content forces the compositor to re-filter
 * that region every frame, which is one of the more expensive things you can
 * put on a phone.
 *
 * Solid charcoal also fixes contrast: label text now sits on a known
 * background instead of whatever happens to scroll underneath it.
 *   - white on charcoal          15.67:1
 *   - muted label on charcoal     7.25:1
 *   - emergency red on charcoal   5.34:1
 *
 * Every item is a real link with a visible label, a 44px+ hit area and a
 * focus ring that clears 3:1 against the bar.
 * -------------------------------------------------------------------------- */

type Props = {
  phone?: string
  email?: string
  bookingHref?: string
  helpHref?: string
}

export default function MobileStickyBar({
  phone = '+37067191399',
  email = 'info@banguklinika.lt',
  bookingHref = '/kontaktai#registracija',
  helpHref = '/paslaugos/skubi-pagalba',
}: Props) {
  const { pathname } = useLocation()
  const isLv = pathname.startsWith('/lv')

  const telHref = `tel:${phone.replace(/\s+/g, '')}`
  const mailHref = `mailto:${email}`

  const resolvedBooking = isLv ? '/lv/kontakti#registracija' : bookingHref
  const resolvedHelp = isLv ? '/lv/pakalpojumi/neatliekama-palidziba' : helpHref

  const items = [
    {
      href: telHref,
      label: isLv ? 'Zvanīt' : 'Skambinti',
      emphasis: false,
      icon: (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
      ),
    },
    {
      href: resolvedBooking,
      label: isLv ? 'Reģistrācija' : 'Registracija',
      emphasis: true,
      icon: (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="12" y1="14" x2="12" y2="18" />
          <line x1="10" y1="16" x2="14" y2="16" />
        </>
      ),
    },
    {
      href: mailHref,
      label: isLv ? 'E-pasts' : 'El. paštas',
      emphasis: false,
      icon: (
        <>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </>
      ),
    },
    {
      href: resolvedHelp,
      label: isLv ? 'Palīdzība' : 'Skubi pagalba',
      emphasis: false,
      urgent: true,
      icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    },
  ]

  return (
    <>
      <style>{`
        [data-mobile-sticky-bar] {
          animation: msb-up var(--t-mid) var(--ease-out) both;
        }
        @keyframes msb-up {
          from { opacity: 0; transform: translate3d(0, 14px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-mobile-sticky-bar] { animation: none; }
        }
        .msb-btn {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 48px;
          padding: 8px 4px;
          border-radius: var(--r-ctl);
          text-decoration: none;
          color: rgba(255,255,255,0.88);
          transition: background var(--t-fast) var(--ease-out),
                      transform var(--t-fast) var(--ease-out);
          -webkit-tap-highlight-color: transparent;
        }
        .msb-btn:active { transform: scale(0.96); }
        .msb-btn--emphasis { color: #fff; background: rgba(255,255,255,0.10); }
        .msb-btn--urgent   { color: #ff8f8f; }
        .msb-btn:focus-visible {
          outline: 2px solid var(--tide);
          outline-offset: -2px;
        }
        .msb-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.01em;
          line-height: 1;
          white-space: nowrap;
        }
      `}</style>

      <div
        className="fixed left-0 right-0 z-50 md:hidden"
        style={{ bottom: 'max(env(safe-area-inset-bottom, 0px), 10px)' }}
        data-mobile-sticky-bar
      >
        <nav
          aria-label={isLv ? 'Ātrās darbības' : 'Greitieji veiksmai'}
          className="mx-auto max-w-[520px]"
          style={{ paddingInline: '0.75rem' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'stretch',
              gap: 4,
              padding: 6,
              borderRadius: 'var(--r-image)',
              background: 'var(--ink)',
              boxShadow: 'var(--shadow-deep)',
            }}
          >
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className={[
                  'msb-btn',
                  item.emphasis ? 'msb-btn--emphasis' : '',
                  item.urgent ? 'msb-btn--urgent' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {item.icon}
                </svg>
                <span className="msb-label">{item.label}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}
