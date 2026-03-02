// src/components/MobileStickyBar.tsx
import React from 'react'
import { useLocation } from 'react-router-dom'

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
  helpHref = 'https://www.banguklinika.lt/paslaugos#skubi-pagalba',
}: Props) {
  const { pathname } = useLocation()

  const isLv = pathname.startsWith('/lv')
  if (isLv) return null

  const telHref = `tel:${phone.replace(/\s+/g, '')}`
  const mailHref = `mailto:${email}`

  return (
    <>
      <style>{`
        @keyframes msb-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        [data-mobile-sticky-bar] {
          animation: msb-up 0.4s cubic-bezier(.22,.68,0,1.2) both;
        }
        .msb-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 10px 6px;
          text-decoration: none;
          transition: opacity 0.15s, transform 0.15s;
          -webkit-tap-highlight-color: transparent;
          border-radius: 14px;
          background: rgba(255,255,255,0.07);
          box-shadow: 0 2px 8px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .msb-btn:active { transform: scale(0.94); opacity: 0.85; }
        .msb-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: rgba(255,255,255,0.1);
        }
        .msb-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1;
          white-space: nowrap;
        }
      `}</style>

      <div
        className="fixed left-0 right-0 z-50 md:hidden"
        style={{ bottom: 'max(env(safe-area-inset-bottom, 0px), 10px)' }}
        data-mobile-sticky-bar
      >
        <div className="mx-auto max-w-[520px] px-3">
          <div
            style={{
              borderRadius: 20,
              background: 'rgba(16, 57, 79, 0.88)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '7px 8px',
            }}
          >
            {/* Call */}
            <a
              href={telHref}
              className="msb-btn"
              style={{ flex: 1, color: 'rgba(255,255,255,0.82)' }}
              aria-label="Skambinti"
            >
              <span className="msb-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                </svg>
              </span>
              <span className="msb-label">Skambinti</span>
            </a>

            {/* Registration */}
            <a
              href={bookingHref}
              className="msb-btn"
              style={{ flex: 1, color: '#fff' }}
              aria-label="Registruotis"
            >
              <span className="msb-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <line x1="12" y1="14" x2="12" y2="18"/>
                  <line x1="10" y1="16" x2="14" y2="16"/>
                </svg>
              </span>
              <span className="msb-label" style={{ fontWeight: 700 }}>Registracija</span>
            </a>

            {/* Email */}
            <a
              href={mailHref}
              className="msb-btn"
              style={{ flex: 1, color: 'rgba(255,255,255,0.82)' }}
              aria-label="El. paštas"
            >
              <span className="msb-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <span className="msb-label">El. paštas</span>
            </a>

            {/* Urgent Help */}
            <a
              href={helpHref}
              className="msb-btn"
              style={{ flex: 1, color: 'rgba(255, 100, 100, 0.95)' }}
              aria-label="Skubi pagalba"
            >
              <span className="msb-icon" style={{ background: 'rgba(220, 38, 38, 0.2)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </span>
              <span className="msb-label" style={{ fontWeight: 700 }}>Skubi pagalba</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}