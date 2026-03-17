import { CLINIC } from '../data/clinic'
import { Link, useLocation } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react' // Pridėtas ChevronDown
import React, { useEffect, useRef, useState } from 'react'

function getHeaderOffset(): number {
  const sticky = document.querySelector('header.sticky') as HTMLElement | null
  return sticky ? sticky.getBoundingClientRect().height : 0
}

function scrollToWithOffset(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  const y = window.scrollY + rect.top - (getHeaderOffset() + 12)
  window.scrollTo({ top: y, behavior: 'smooth' })
}

function findFormEl(): HTMLElement | null {
  return (
    document.getElementById('registracija') ||
    document.getElementById('contact-form') ||
    (document.querySelector('[data-contact-form]') as HTMLElement | null)
  )
}

function robustScrollToForm() {
  const hit = () => {
    const el = findFormEl()
    if (el) { scrollToWithOffset(el); return true }
    return false
  }
  if (hit()) return
  let tries = 0
  const timer = setInterval(() => {
    tries++
    if (hit() || tries >= 30) clearInterval(timer)
  }, 200)
}

type ServiceItem = { label: string; to: string }
type ServiceGroup = { heading: string; items: ServiceItem[] }

const SERVICE_GROUPS_LT: ServiceGroup[] = [
  {
    heading: 'Profilaktika',
    items: [
      { label: 'Burnos higiena', to: '/paslaugos/burnos-higiena' },
      { label: 'Dantų balinimas', to: '/paslaugos/dantu-balinimas' },
      { label: 'Vaikų odontologija', to: '/paslaugos/vaiku-odontologija' },
    ],
  },
  {
    heading: 'Gydymas',
    items: [
      { label: 'Dantų plombavimas', to: '/paslaugos/dantu-plombavimas' },
      { label: 'Estetinis plombavimas', to: '/paslaugos/estetinis-plombavimas' },
      { label: 'Endodontinis gydymas', to: '/paslaugos/endodontinis-gydymas' },
      { label: 'Dantų taisymas / gydymas', to: '/paslaugos/dantu-taisymas-gydymas' },
    ],
  },
  {
    heading: 'Chirurgija ir implantai',
    items: [
      { label: 'Burnos chirurgija', to: '/paslaugos/burnos-chirurgija' },
      { label: 'Dantų traukimas', to: '/paslaugos/dantu-traukimas' },
      { label: 'Dantų implantacija', to: '/paslaugos/dantu-implantacija' },
      { label: 'Dantų protezavimas', to: '/paslaugos/dantu-protezavimas' },
      { label: 'Dantų tiesinimas', to: '/paslaugos/dantu-tiesinimas' },
    ],
  },
]

const SERVICE_GROUPS_LV: ServiceGroup[] = [
  {
    heading: 'Profilaktika',
    items: [
      { label: 'Mutes higiēna', to: '/lv/pakalpojumi/mutes-higiena' },
      { label: 'Zobu balināšana', to: '/lv/pakalpojumi/zobu-balinesana' },
      { label: 'Bērnu odontoloģija', to: '/lv/pakalpojumi/bernu-odontologija' },
    ],
  },
  {
    heading: 'Ārstniecība',
    items: [
      { label: 'Zobu plombēšana', to: '/lv/pakalpojumi/zobu-plombana' },
      { label: 'Estētiskā plombēšana', to: '/lv/pakalpojumi/estetiska-plombana' },
      { label: 'Endodontija', to: '/lv/pakalpojumi/endodontija' },
      { label: 'Zobu ārstniecība', to: '/lv/pakalpojumi/zobu-arstnieciba' },
    ],
  },
  {
    heading: 'Ķirurģija un implantāti',
    items: [
      { label: 'Mutes ķirurģija', to: '/lv/pakalpojumi/mutes-hirurgija' },
      { label: 'Zoba ekstrakcija', to: '/lv/pakalpojumi/zobu-ekstrakcija' },
      { label: 'Zobu implantācija', to: '/lv/pakalpojumi/zobu-implantacija' },
      { label: 'Zobu protezēšana', to: '/lv/pakalpojumi/zobu-protezesana' },
      { label: 'Zobu izlīdzināšana', to: '/lv/pakalpojumi/zobu-izlinesana' },
    ],
  },
]
const TZ = 'Europe/Vilnius'

const schedule = [
  { dow: 1, open: '09:00', close: '18:00' },
  { dow: 2, open: '09:00', close: '18:00' },
  { dow: 3, open: '09:00', close: '18:00' },
  { dow: 4, open: '09:00', close: '18:00' },
  { dow: 5, open: '09:00', close: '16:00' },
]

function getNowVilnius() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: TZ,
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
    hour12: false,
  }).formatToParts(new Date())

  const get = (type: string) =>
    parts.find(p => p.type === type)?.value ?? ''

  const weekdayMap: Record<string, number> = {
    Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7,
  }

  return {
    dow: weekdayMap[get('weekday')],
    hour: Number(get('hour')),
    minute: Number(get('minute')),
  }
}

function toMinutes(time: string) {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

function formatNextOpenText(isLv: boolean, nextDow: number, time: string) {
  const dayNamesLT: Record<number, string> = {
    1: 'pirmadienį', 2: 'antradienį', 3: 'trečiadienį', 4: 'ketvirtadienį',
    5: 'penktadienį', 6: 'šeštadienį', 7: 'sekmadienį',
  }

  const dayNamesLV: Record<number, string> = {
    1: 'pirmdien', 2: 'otrdien', 3: 'trešdien', 4: 'ceturtdien',
    5: 'piektdien', 6: 'sestdien', 7: 'svētdien',
  }

  const dayWord = isLv ? dayNamesLV[nextDow] : dayNamesLT[nextDow]
  return isLv ? `Atvērsies ${dayWord} ${time}` : `Atsidarys ${dayWord} ${time}`
}

function getClinicStatus(isLv: boolean) {
  const now = getNowVilnius()
  const today = schedule.find(d => d.dow === now.dow)
  const nowMinutes = now.hour * 60 + now.minute

  const closedNowText = isLv ? 'Šobrīd nestrādājam.' : 'Šiuo metu nedirbame.'
  const openUntilText = (time: string) => (isLv ? `Strādājam līdz ${time}` : `Dirbame iki ${time}`)
  const opensAtTodayText = (time: string) => (isLv ? `Atvērsies ${time}` : `Atsidarys ${time}`)

  const getNextWorkingDay = () => {
    const next = schedule.find(d => d.dow > now.dow) || schedule[0]
    return next
  }

  if (!today) {
    const next = getNextWorkingDay()
    return `${closedNowText} ${formatNextOpenText(isLv, next.dow, next.open)}`
  }

  const open = toMinutes(today.open)
  const close = toMinutes(today.close)

  if (nowMinutes >= open && nowMinutes < close) {
    return openUntilText(today.close)
  }

  if (nowMinutes < open) {
    return opensAtTodayText(today.open)
  }

  const next = getNextWorkingDay()
  return `${closedNowText} ${formatNextOpenText(isLv, next.dow, next.open)}`
}

export default function Footer() {
  const location = useLocation()
  const { pathname } = location
  const isLv = pathname.startsWith('/lv')

  const hoursListRef = useRef<HTMLUListElement | null>(null)
  const [hoursBodyHeight, setHoursBodyHeight] = useState<number>(0)
  
  // Pridėta state mobilaus dropdown'o valdymui
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  useEffect(() => {
    const el = hoursListRef.current
    if (!el) return
    const measure = () => setHoursBodyHeight(el.offsetHeight || 0)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    const onResize = () => measure()
    window.addEventListener('resize', onResize)
    return () => { ro.disconnect(); window.removeEventListener('resize', onResize) }
  }, [])

  useEffect(() => {
    const contactPath = isLv ? '/lv/kontakti' : '/kontaktai'
    if (
      location.pathname === contactPath &&
      (location.hash === '#registracija' || location.hash === '#contact-form')
    ) {
      robustScrollToForm()
    }
  }, [location.pathname, location.hash, isLv])

  const handleRegistrationClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    const contactPath = isLv ? '/lv/kontakti' : '/kontaktai'
    if (pathname === contactPath) {
      e.preventDefault()
      robustScrollToForm()
    }
  }

  const contactHref = isLv ? '/lv/kontakti#registracija' : '/kontaktai#registracija'
  const logoHref = isLv ? '/lv' : '/'
  const serviceGroups = isLv ? SERVICE_GROUPS_LV : SERVICE_GROUPS_LT

  return (
    <footer className="footer-dark">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:gap-8 grid-cols-1 md:grid-cols-12 text-sm">

        {/* Brand + Contact */}
        <div className="md:col-span-3 space-y-5 pr-0 md:pr-4">
          <Link to={logoHref} aria-label="Bangų klinika" className="inline-flex items-center">
            <img
              src="/logo1.png"
              alt="Bangų klinika"
              className="h-14 sm:h-20 w-auto object-contain select-none"
              draggable={false}
            />
          </Link>
          <p className="text-xs text-white/80 leading-relaxed">
            {isLv ? 'Moderna zobārstniecība Klaipēdas centrā.' : 'Moderni odontologija Klaipėdos centre.'}
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
            <div className="flex items-start gap-2 text-xs text-white/85">
              <MapPin size={14} className="mt-[2px] opacity-80 shrink-0" />
              <span className="leading-relaxed">{CLINIC.address}</span>
            </div>
            {/* Pakeista inline-flex į flex, kad telefonas ir el. paštas kristų į naujas eilutes */}
            <a href={`tel:${CLINIC.phone}`} className="footer-link flex items-center gap-2 text-xs">
              <Phone size={14} className="opacity-80 shrink-0" />
              <span>{CLINIC.phone}</span>
            </a>
            <a href={`mailto:${CLINIC.email}`} className="footer-link flex items-center gap-2 text-xs">
              <Mail size={14} className="opacity-80 shrink-0" />
              <span className="break-all">{CLINIC.email}</span>
            </a>
            <div className="flex items-center gap-2 text-xs text-white/75 pt-1">
              <Clock size={14} className="opacity-70 shrink-0" />
              <span>{getClinicStatus(isLv)}</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold mb-3 text-white">
            {isLv ? 'Navigācija' : 'Navigacija'}
          </h4>
          <ul className="space-y-2">
            {isLv ? (
              <>
                <li><Link to="/lv" className="footer-link">Sākums</Link></li>
                <li><Link to="/lv/pakalpojumi" className="footer-link">Pakalpojumi</Link></li>
                <li><Link to="/lv/cenas" className="footer-link">Cenas</Link></li>
                <li><Link to="/lv/kontakti" className="footer-link">Kontakti</Link></li>
                <li><Link to="/lv/par-mums" className="footer-link">Par mums</Link></li>
                <li><Link to="/lv/ipasi-piedavajumi" className="footer-link">Īpaši piedāvājumi</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/" className="footer-link">Pradžia</Link></li>
                <li><Link to="/paslaugos" className="footer-link">Paslaugos</Link></li>
                <li><Link to="/kainos" className="footer-link">Kainos</Link></li>
                <li><Link to="/kontaktai" className="footer-link">Kontaktai</Link></li>
                <li><Link to="/apie" className="footer-link">Apie</Link></li>
                <li><Link to="/ypatingi-pasiulymai" className="footer-link">Ypatingi pasiūlymai</Link></li>
                <li><Link to="/draugai" className="footer-link">Draugai</Link></li>
              </>
            )}
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-5">
          <div className="flex items-center justify-between gap-3 mb-4">
            <h4 className="text-sm font-semibold text-white">
              {isLv ? 'Pakalpojumi' : 'Paslaugos'}
            </h4>
          </div>

          {/* Desktop: 3 category columns */}
          <div className="hidden md:grid grid-cols-[1fr_1fr_1.35fr] gap-x-5">
            {serviceGroups.map((group) => (
              <div key={group.heading}>
                <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-2.5 whitespace-nowrap">
                  {group.heading}
                </p>
                <ul className="space-y-1.5">
                  {group.items.map((s) => (
                    <li key={s.to}>
                      <Link to={s.to} className="footer-link text-xs leading-snug">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile: kategorijų akordeonas */}
          <div className="md:hidden space-y-2.5">
            {serviceGroups.map((group) => {
              const isOpen = openGroup === group.heading
              return (
                <div key={group.heading} className="border border-white/10 rounded-lg overflow-hidden bg-white/5">
                  <button
                    onClick={() => setOpenGroup(isOpen ? null : group.heading)}
                    className="w-full flex items-center justify-between p-3 text-left focus:outline-none"
                  >
                    <span className="text-[11px] font-semibold text-white/70 uppercase tracking-widest">
                      {group.heading}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`text-white/50 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-3 pb-3">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                        {group.items.map((s) => (
                          <li key={s.to}>
                            <Link to={s.to} className="footer-link text-xs leading-snug">
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Hours + CTA */}
        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold mb-3 text-white">
            {isLv ? 'Darba laiks' : 'Darbo laikas'}
          </h4>
          <ul className="space-y-1 text-xs" ref={hoursListRef}>
            {CLINIC.hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between text-white/90 gap-2">
                <div className="flex items-center gap-1.5">
                  <Clock size={13} className="opacity-70 shrink-0" />
                  <span>{h.day}</span>
                </div>
                <span className="tabular-nums">{h.time}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 hidden md:block">
            <Link
              to={contactHref}
              onClick={handleRegistrationClick}
              className="btn btn-primary rounded-xl w-full text-center"
            >
              {isLv ? 'Reģistrācija tiešsaistē' : 'Registracija internetu'}
            </Link>
          </div>

          <div className="mt-4 md:hidden">
            <div
              className="w-full flex justify-center items-center"
              style={{
                height: hoursBodyHeight ? `${hoursBodyHeight}px` : undefined,
                minHeight: hoursBodyHeight ? undefined : 64,
              }}
            >
              <Link
                to={contactHref}
                onClick={handleRegistrationClick}
                className="btn btn-primary rounded-full text-sm leading-tight px-4 py-2 w-10/12 max-w-[240px] text-center"
              >
                {isLv ? 'Reģistrācija tiešsaistē' : 'Registracija internetu'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-darkblue-700">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <p>
            {isLv
              ? `© ${new Date().getFullYear()} Bangų klinika. Visas tiesības aizsargātas.`
              : `© ${new Date().getFullYear()} Bangų klinika. Visos teisės saugomos.`}
          </p>
          <p className="inline-flex items-center gap-1">
            {isLv ? 'Izveidots ar mīlestību' : 'Sukurta su meile'} •{' '}
            <a
              href="https://beneta.lt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/40 hover:decoration-white transition"
              aria-label="Beneta"
            >
              Beneta
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}