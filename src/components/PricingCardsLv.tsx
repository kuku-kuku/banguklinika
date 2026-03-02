import { useMemo, useState, useEffect, useRef } from 'react'
import { PRICING, type PriceGroup, type PriceItem } from '../data/pricing'
import clsx from 'clsx'

/* ========= Timings / Easing ========= */
const OPEN_MS = 320
const CLOSE_MS = 260
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

/* ======== Mobile smooth reveal ======== */
const ROW_BASE_DELAY = 200
const PER_ROW_DELAY = 120
const TEXT_DURATION = 800
const PRICE_DELAY = 300

/* ========= LT -> LV žodynai ========= */
const LV_TITLES: Record<string, string> = {
  'Dantų gydymo kainoraštis': 'Zobu ārstniecības cenrādis',
  'Dantų gydymas (suaugusių)': 'Zobu ārstniecība (pieaugušajiem)',
  'Pieninių dantų gydymas': 'Piena zobu ārstniecība',
  'Endodontija': 'Endodontija',
  'Profesionali burnos higiena (apnašų/konkrementų pašalinimas)': 'Profesionāla mutes higiēna (apziļņu/konkrementu noņemšana)',
  'Dantų balinimas': 'Zobu balināšana',
  'Burnos chirurgijos kainoraštis': 'Mutes ķirurģijas cenrādis',
  'Dantų protezavimas (ant dantų)': 'Zobu protezēšana (uz dabīgajiem zobiem)',
  'Dantų protezavimas (ant implantų)': 'Zobu protezēšana (uz implantiem)',
  'Kita': 'Cits',
  'Pasiūlymai / paketai': 'Piedāvājumi / paketes',
}

/** Paslaugų pavadinimai (items) */
const LV_ITEMS: Record<string, string> = {
  // Kainoraštis / konsultacijos
  'Konsultacija iki 30 min': 'Konsultācija līdz 30 min',
  'Konsultacija iki 15 min': 'Konsultācija līdz 15 min',
  'Konsultacija': 'Konsultācija',
  'Gydymo plano sudarymas': 'Ārstniecības plāna sastādīšana',
  'Nuskausminimas': 'Anestēzija',

  // Suaugusių dantų gydymas
  'Stiklo jonomerinė plomba (maža)': 'Stikla jonomēra plomba (maza)',
  'Stiklo jonomerinė plomba (didelė)': 'Stikla jonomēra plomba (liela)',
  'Helio plomba (maža)': 'Gaismas plomba (maza)',
  'Helio plomba (vidutinė)': 'Gaismas plomba (vidēja)',
  'Helio plomba (didelė)': 'Gaismas plomba (liela)',
  'Gydomasis pamušalas (kalcio hidroksido pagrindu)': 'Ārstnieciskais ieliktnis (kalcija hidroksīda bāzē)',
  'Stiklo jonomerinis pamušalas': 'Stikla jonomēra ieliktnis',
  'Laikina plomba (didelė)': 'Pagaidu plomba (liela)',
  'Laikina plomba (maža)': 'Pagaidu plomba (maza)',
  'Estetinis plombavimas (1 danties)': 'Estētiskā plombēšana (1 zobam)',
  'Plombos pataisa': 'Plombas labošana',
  'Biodentino uždėjimas (MTA)': 'Biodentine uzlikšana (MTA)',

  // Pieniniai dantys
  'Pieninių dantų gydymas': 'Piena zobu ārstniecība',
  'Apsilankymas 30 min., kai vaikas nesileidžia gydyti dantų': 'Apmeklējums 30 min., ja bērns nepiekrīt zobārstniecībai',
  'Stiklo jonomerinė plomba': 'Stikla jonomēra plomba',
  'Kompomerinė plomba': 'Kompomēra plomba',
  'Komplikuotas ėduonies gydymas (pulpitas, periodontitas)': 'Sarežģīta kariesa ārstniecība (pulpīts, periodontīts)',
  'Dantų vagelių hermetizavimas silantais (1 dantis)': 'Zobu vagu noslēgšana ar silantiem (1 zobs)',

  // Endodontija
  'Pirminė endodontinė pagalba (pulpito atveju)': 'Primārā endodontiskā palīdzība (pulpīta gadījumā)',
  'Vieno danties šaknies kanalo chemomechaninis paruošimas (pirminis gydymas)': 'Viena zoba saknes kanāla ķīmiski mehāniskā apstrāde (pirmreizēja ārstniecība)',
  'Kanalo medikamentinis gydymas': 'Kanāla medikamentoza ārstniecība',
  'Vieno danties šaknies kanalo užplombavimas': 'Viena zoba saknes kanāla plombēšana',
  'Koferdamas': 'Koferdams',

  // Higiena
  'Pilna profesionali burnos higiena (vienas vizitas)': 'Pilna profesionāla mutes higiēna (viens apmeklējums)',
  'Konkrementų pašalinimas (pirminis vizitas)': 'Konkrementu noņemšana (pirmais apmeklējums)',
  'Konkrementų pašalinimas + poliravimas AIR FLOW (antrinis vizitas)': 'Konkrementu noņemšana + pulēšana AIR FLOW (atkārtots apmeklējums)',
  'Poliravimas AIR FLOW aparatu': 'Pulēšana ar AIR FLOW aparātu',
  'Medikamentinis dantenų gydymas (1 dantis)': 'Medikamentoza smaganu ārstniecība (1 zobs)',
  'Fluoro lako aplikacija (1 dantis)': 'Fluora laka aplikācija (1 zobs)',

  // Balinimas
  'Ofisinis balinimas BEYOND aparatu (pirmą kartą)': 'Kabineta balināšana ar BEYOND aparātu (pirmo reizi)',
  'Ofisinis balinimas BEYOND aparatu (kartojant procedūrą)': 'Kabineta balināšana ar BEYOND aparātu (atkārtojot procedūru)',
  'Dantų balinimo kapos (2 kapos + balinimo gelis)': 'Zobu balināšanas kapes (2 kapes + balināšanas želeja)',
  'Balinimo gelis (1 švirkštas)': 'Balināšanas želeja (1 šļirce)',
  'Balinimo kapos (2 vnt)': 'Balināšanas kapes (2 gab.)',
  'Vidinis negyvo danties balinimas (1 dantis)': 'Iekšējā nedzīva zoba balināšana (1 zobs)',
  'Swarovski danties papuošalo įdėjimas': 'Swarovski zoba rotājuma uzlikšana',
  'Icon procedūra (1 dantis)': 'Icon procedūra (1 zobs)',

  // Chirurgija
  'Pieninio danties rovimas su aplikaciniu nuskausminimu': 'Piena zoba ekstrakcija ar aplikācijas anestēziju',
  'Pieninio danties rovimas su injekciniu nuskausminimu': 'Piena zoba ekstrakcija ar injekcijas anestēziju',
  'Nuolatinio danties rovimas': 'Pastāvīgā zoba ekstrakcija',
  'Nuolatinio danties šaknies rovimas': 'Pastāvīgā zoba saknes ekstrakcija',
  'Sudėtingas nuolatinio danties rovimas': 'Sarežģīta pastāvīgā zoba ekstrakcija',
  'Sudėtingas nuolatinio danties šaknies rovimas': 'Sarežģīta pastāvīgā zoba saknes ekstrakcija',
  'Trečiųjų apatinių krūminių dantų rovimas': 'Trešo apakšžokļa molāra ekstrakcija',
  'Klinikinis danties vainiko prailginimas': 'Klīniskā zoba vainaga pagarināšana',
  'Alveolito gydymas (1 seansas)': 'Alveolīta ārstniecība (1 seanss)',
  'Incizija (pjūviai uždegimo metu)': 'Incīzija (griezieni iekaisuma laikā)',
  'Siūlų išėmimas': 'Šuvju izņemšana',
  'Chirurginis gidas implantacijai': 'Ķirurģiskais vadnis implantācijai',
  'Neodent implanto įsukimas ir priedai (1 vnt., chirurginė dalis)': 'Neodent implanta ievietošana un piederumi (1 gab., ķirurģiskā daļa)',
  'Straumann SLA implanto įsukimas ir priedai (1 vnt., chirurginė dalis)': 'Straumann SLA implanta ievietošana un piederumi (1 gab., ķirurģiskā daļa)',
  'Straumann SLA Active implanto įsukimas ir priedai (1 vnt., chirurginė dalis)': 'Straumann SLA Active implanta ievietošana un piederumi (1 gab., ķirurģiskā daļa)',
  'Neodent gijimo galvutė': 'Neodent dzīšanas galviņa',
  'Straumann gijimo galvutė': 'Straumann dzīšanas galviņa',
  'Sinuso dugno pakėlimo operacija uždaru būdu (per implanto ložę)': 'Sinusa pacelšanas operācija slēgtā veidā (caur implanta lozi)',
  'Sinuso dugno pakėlimo operacija atviru būdu (per sinuso langelį)': 'Sinusa pacelšanas operācija atvērtā veidā (caur sinusa logu)',
  'Kaulo augmentacija nuosavu arba kaulo pakaitalu': 'Kaula augmentācija ar pašu vai kaula aizstājēju',
  'Pastaba dėl kaulo priauginimo medžiagų': 'Piezīme par kaula audzēšanas materiāliem',

  // Protezavimas ant dantų
  'Laikinas plastmasinis vainikėlis (pagamintas kabinete)': 'Pagaidu plastmasas vainags (izgatavots kabinetā)',
  'Laikinas plastmasinis vainikėlis (pagamintas laboratorijoje)': 'Pagaidu plastmasas vainags (izgatavots laboratorijā)',
  'Metalo keramikos vainikėlis': 'Metālkeramikas vainags',
  'Keramikos vainikėlis cirkonio oksido pagrindu': 'Keramikas vainags uz cirkonija oksīda bāzes',
  'E-max presuotos bemetalės keramikos vainikėlis': 'E-max presētās bezmetāla keramikas vainags',
  'Vainiko kulties šlifavimas / paruošimas': 'Vainaga celma slīpēšana / sagatavošana',
  'Vainiko atstatymas ant stiklo pluošto kaiščio su helio plomba (priekinis dantis)': 'Vainaga atjaunošana uz stikla šķiedras tapītes ar gaismas plombu (priekšzobs)',
  'Vainiko atstatymas ant stiklo pluošto kaiščio su helio plomba (krūminis dantis)': 'Vainaga atjaunošana uz stikla šķiedras tapītes ar gaismas plombu (molārs)',
  'Pilnas vainiko atstatymas ant stiklo pluošto kaiščio su helio plomba': 'Pilna vainaga atjaunošana uz stikla šķiedras tapītes ar gaismas plombu',
  'Kosmetinė plokštelė (plastmasinė, kieta)': 'Kosmētiskā protēze (plastmasas, cietā)',
  'Kosmetinė plokštelė (termoplastinė, minkšta)': 'Kosmētiskā protēze (termoplastmasas, mīkstā)',
  'Išimama pilna dantų plokštelė (plastmasinė)': 'Izņemamā pilnā zobu protēze (plastmasas)',
  'Išimama pilna dantų plokštelė (minkšta)': 'Izņemamā pilnā zobu protēze (mīkstā)',
  'Kietos plokštelės pataisa': 'Cietās protēzes labošana',
  'Plokštelės perbazavimas': 'Protēzes pārbāzēšana',
  'Lanko atraminis protezas': 'Loka balstu protēze',
  'Diagnostiniai modeliai': 'Diagnostiskie modeļi',
  'Danties pavaškavimas (1 vnt.)': 'Zoba vaskošana (1 gab.)',
  'Atspaudo nuėmimas naudojant alginatą (1 žandikaulis)': 'Nospieduma ņemšana ar alginatu (1 žoklis)',
  'Atspaudo nuėmimas naudojant silikoną (1 žandikaulis)': 'Nospieduma ņemšana ar silikonu (1 žoklis)',
  'Sąkandžio registras': 'Sakoduma reģistrs',
  'Individualus šaukštas (1 vnt.)': 'Individuālā karote (1 gab.)',
  'KKĮ formavimas': 'KKĪ veidošana',
  'Metalinis KKĮ': 'Metāliskā KKĪ',
  'Sudėtinis KKĮ': 'Kompozītā KKĪ',
  'Senų vainikėlių nuėmimas': 'Veco vainagu noņemšana',
  'Laikino vainikėlio cementavimas (ne gydymo metu)': 'Pagaidu vainaga cementēšana (ne ārstniecības laikā)',
  'Nuolatinio vainikėlio cementavimas (ne gydymo metu)': 'Pastāvīgā vainaga cementēšana (ne ārstniecības laikā)',
  'Kompozitinis užklotas': 'Kompozīta inlejs',
  'Keramikos užklotas': 'Keramikas inlejs',
  'E-max laminatė': 'E-max laminēts vainags',
  'Sluoksniuota keramikos laminatė': 'Slāņainā keramikas laminēts vainags',
  'Minkšta kapa nuo bruksizmo': 'Mīkstā kapa pret bruksismu',
  'Kieta kapa nuo bruksizmo': 'Cietā kapa pret bruksismu',

  // Protezavimas ant implantų
  'Laikinas vainikėlis ant implanto': 'Pagaidu vainags uz implanta',
  'Atspaudai / skenavimas nuo implantų': 'Nospiedumi / skenēšana no implantiem',
  'Neodent standartinė atrama': 'Neodent standarta balsts',
  'Straumann standartinė atrama': 'Straumann standarta balsts',
  'Individuali atrama': 'Individuālais balsts',

  // Kita
  'Dentalinė nuotrauka': 'Dentālais rentgena uzņēmums',
  'Vienkartinės priemonės': 'Vienreizlietojamie materiāli',
  'Lūpų apsauga, optragate': 'Lūpu aizsardzība, optragate',
  'Pooperacinis rinkinys': 'Pēcoperācijas komplekts',
  'Darbų kainos, nenumatytos kainininke': 'Darbu cenas, kas nav norādītas cenrādī',
  'Detalesnė informacija': 'Sīkāka informācija',

  // Pasiūlymai
  'Vieno žandikaulio dantų atstatymas All-on-4 sistema': 'Viena žokļa zobu atjaunošana ar All-on-4 sistēmu',
  'Vienmomentė implantacija (Neodent)': 'Vienlaicīga implantācija (Neodent)',
}

/** Pastabos (note) */
const LV_NOTES: Record<string, string> = {
  'Konsultacija, profilaktinis patikrinimas': 'Konsultācija, profilaktiskā apskate',
  'Išsamus, individualus gydymo planas su gydymo kainomis': 'Detalizēts, individuāls ārstniecības plāns ar ārstniecības cenām',
  'Infiltracinė nejautra': 'Infiltrācijas anestēzija',
  'Šviesoje kietėjantis kompozitas': 'Gaismas kompozīts',
  'Kalcio hidroksido pastos įvedimas arba eugenolio tvarstelis': 'Kalcija hidroksīda pastas ievadīšana vai eignoļa tampons',
  'Vienkartinės medžiagos ir nuskausminimas įskaičiuota': 'Vienreizlietojamie materiāli un anestēzija iekļauta',
  'Nuo': 'No',
  'Chirurginių operacijų ir implantacijos metu gali prireikti dirbtinio kaulo ir/ar membranos (kaulo priauginimas) – kaina priklauso nuo sunaudotų medžiagų kiekio. Chirurginių procedūrų kainos nurodytos su nuskausminimu.':
    'Ķirurģisku operāciju un implantācijas laikā var būt nepieciešams mākslīgais kauls un/vai membrāna (kaula audzēšana) – cena ir atkarīga no izmantoto materiālu daudzuma. Ķirurģisko procedūru cenas norādītas ar anestēziju.',
  'Su laikinos atramos kaina': 'Ar pagaidu balsta cenu',
  'Kiekvienam apsilankymui': 'Katram apmeklējumam',
  'Aptariamos su gydančiu gydytoju': 'Tiek apspriests ar ārstējošo ārstu',
  'Jums suteiks įstaigos darbuotojai': 'Sniedz iestādes darbinieki',
  'Į pasiūlymą įeina: 3D rentgeno nuotrauka; 4 Straumann grupės implantai; originalios protezavimo detalės; neišimamas (laikinas) protezas.':
    'Piedāvājumā iekļauts: 3D rentgena uzņēmums; 4 Straumann grupas implanti; oriģinālās protezēšanas detaļas; neizņemamā (pagaidu) protēze.',
  'Į pasiūlymą įeina: rovimas; kaulo priauginimas; implantas; individuali galvutė; atspaudai; atrama; cirkonio vainikėlis.':
    'Piedāvājumā iekļauts: ekstrakcija; kaula audzēšana; implants; individuālā galviņa; nospiedumi; balsts; cirkonija vainags.',
}

/* ========= Utils ========= */
function slugify(t: string) {
  return t
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

/** LV kainos formatas: "no €" vietoj "nuo €" */
function fmtItemLv(p: PriceItem) {
  const { from, to, exact } = p
  if (from == null) return '—'
  if (to != null) return `€${from}–${to}`
  return exact ? `€${from}` : `no €${from}`
}

function groupRange(items: PriceItem[]) {
  let min = Infinity,
    max = 0
  for (const it of items) {
    if (typeof it.from === 'number') min = Math.min(min, it.from)
    const upper = typeof it.to === 'number' ? it.to : typeof it.from === 'number' ? it.from : 0
    max = Math.max(max, upper)
  }
  if (!isFinite(min)) return null
  return { min, max }
}

function useIsMobile() {
  const [mobile, setMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false
  )
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(max-width: 767px)')
    const handler = () => setMobile(mql.matches)
    handler()
    mql.addEventListener?.('change', handler)
    return () => mql.removeEventListener?.('change', handler)
  }, [])
  return mobile
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = () => setReduced(!!mq.matches)
    handler()
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [])
  return reduced
}

function getHeaderOffset(): number {
  const sticky = document.querySelector('header.sticky') as HTMLElement | null
  return sticky ? sticky.getBoundingClientRect().height : 76
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function smoothScrollTo(targetY: number, duration = 420) {
  const startY = window.scrollY
  const diff = targetY - startY
  if (Math.abs(diff) < 2) return Promise.resolve()
  return new Promise<void>((resolve) => {
    const start = performance.now()
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const y = startY + diff * easeInOutCubic(p)
      window.scrollTo(0, y)
      if (p < 1) requestAnimationFrame(step)
      else resolve()
    }
    requestAnimationFrame(step)
  })
}

async function smoothAlignToElement(id: string, offset = 16, ms = 320) {
  const el = document.getElementById(id)
  if (!el) return
  const rect = el.getBoundingClientRect()
  const targetY = window.scrollY + rect.top - getHeaderOffset() - offset
  await smoothScrollTo(targetY, ms)
}

/* ========= Two-column targets (desktop) =========
   Čia paliekam LT slug'us (nes id = pagal originalų LT title, kad viskas sutaptų 1:1). */
const TWO_COL_GROUP_SLUGS = new Set([
  'dantu-gydymas-saugusiuju',
  'burnos-chirurgijos-kainorastis',
  'dantu-protezavimas-ant-dantu',
])

function splitInTwo(items: PriceItem[]) {
  const mid = Math.ceil(items.length / 2)
  return [items.slice(0, mid), items.slice(mid)] as const
}

/* ========= Translators ========= */
function tTitle(lt: string) {
  return LV_TITLES[lt] ?? lt
}
function tItemName(lt: string) {
  return LV_ITEMS[lt] ?? lt
}
function tNote(lt?: string) {
  if (!lt) return lt
  return LV_NOTES[lt] ?? lt
}

/* ========= Accordion item ========= */
function GroupCard({
  groupKeyTitle, // LT original title (stabilus id/hash logikai)
  displayTitle,  // LV title UI
  items,         // LV items UI (kainos iš LT, tekstai išversti)
  open,
  onToggle,
}: {
  groupKeyTitle: string
  displayTitle: string
  items: PriceItem[]
  open: boolean
  onToggle: (willOpen: boolean) => void
}) {
  const id = slugify(groupKeyTitle)
  const range = useMemo(() => groupRange(items), [items])
  const summary = range ? (range.max > range.min ? `€${range.min}–€${range.max}` : `no €${range.min}`) : '—'
  const reduceMotion = usePrefersReducedMotion()

  const useTwoCols = TWO_COL_GROUP_SLUGS.has(id)
  const [left, right] = useMemo(() => splitInTwo(items), [items])

  const renderRows = (rows: PriceItem[], baseIndexOffset = 0) =>
    rows.map((p, i) => {
      const globalIndex = baseIndexOffset + i
      const doAnimation = !!(open && !reduceMotion)
      const rowDelay = doAnimation ? ROW_BASE_DELAY + globalIndex * PER_ROW_DELAY : 0

      return (
        <tr
          key={`${p.name}-${globalIndex}`}
          className="hover:bg-slate-50/80 transition-colors border-b border-slate-50 last:border-0"
        >
          <td className="p-4 align-top">
            <span
              className="text-slate-800 font-medium inline-block"
              style={
                doAnimation
                  ? {
                      opacity: 0,
                      transform: 'translateY(16px)',
                      animation: `fadeInUp ${TEXT_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1) ${rowDelay}ms forwards`,
                    }
                  : undefined
              }
            >
              {p.name}
            </span>

            {p.note && (
              <span
                className="block text-xs text-slate-500 mt-1"
                style={
                  doAnimation
                    ? {
                        opacity: 0,
                        transform: 'translateY(12px)',
                        animation: `fadeInUp 600ms cubic-bezier(0.16, 1, 0.3, 1) ${
                          rowDelay + TEXT_DURATION - 200
                        }ms forwards`,
                      }
                    : undefined
                }
              >
                {p.note}
              </span>
            )}
          </td>

          <td
            className="p-4 w-28 sm:w-36 md:w-40 font-semibold text-right whitespace-nowrap text-primary-600"
            style={
              doAnimation
                ? {
                    opacity: 0,
                    transform: 'translateY(16px) scale(0.94)',
                    animation: `fadeInScale 700ms cubic-bezier(0.16, 1, 0.3, 1) ${rowDelay + PRICE_DELAY}ms forwards`,
                  }
                : undefined
            }
          >
            {fmtItemLv(p)}
          </td>
        </tr>
      )
    })

  return (
    <div
      id={id}
      className={clsx(
        'group w-full rounded-2xl border transition-all duration-300 transform-gpu will-change-transform overflow-hidden',
        open
          ? 'bg-white border-primary-200 shadow-md ring-4 ring-primary-50'
          : 'bg-slate-50 border-transparent shadow-sm hover:bg-white hover:border-slate-200 hover:shadow-md hover:-translate-y-0.5',
        'scroll-mt-28 md:scroll-mt-32'
      )}
      style={{ contain: 'layout paint', transform: 'translateZ(0)' }}
    >
      <button
        onClick={() => onToggle(!open)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left min-h-[92px] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-50"
      >
        <div className="flex flex-col items-start min-w-0">
          <div
            className={clsx(
              'font-semibold text-[17px] sm:text-lg leading-snug transition-colors duration-300',
              'whitespace-normal break-words',
              open ? 'text-primary-600' : 'text-slate-800 group-hover:text-primary-600'
            )}
          >
            {displayTitle}
          </div>

          <div className="text-sm text-slate-500 font-medium mt-1">
            {summary} <span className="opacity-60 font-normal ml-1">• {items.length} poz.</span>
          </div>
        </div>

        <span
          className={clsx(
            'w-8 h-8 flex items-center justify-center transition-all text-slate-400 group-hover:text-primary-500 shrink-0 rounded-full',
            open ? 'rotate-180 text-primary-500 bg-primary-50' : 'group-hover:bg-slate-100'
          )}
          style={{ transitionDuration: `${OPEN_MS}ms` }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={id}
        className="grid will-change-[grid-template-rows,opacity]"
        style={{
          gridTemplateRows: open ? '1fr' : '0fr',
          opacity: open ? 1 : 0,
          transition: `grid-template-rows ${open ? OPEN_MS : CLOSE_MS}ms ${EASE}, opacity ${
            open ? OPEN_MS : CLOSE_MS
          }ms ${EASE}`,
          transform: 'translateZ(0)',
        }}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0"
            style={{
              transition: `transform 160ms ${EASE}, opacity 160ms ${EASE}`,
              transformOrigin: 'top left',
              transform: open ? 'scaleY(1) translateZ(0)' : 'scaleY(0.995) translateY(-1px) translateZ(0)',
              opacity: open ? 1 : 0.98,
              willChange: 'transform,opacity',
              contain: 'content',
            }}
          >
            <div className="rounded-xl bg-white border border-slate-100 shadow-sm overflow-hidden">
              {!useTwoCols ? (
                <table className="w-full text-sm">
                  <tbody>{renderRows(items, 0)}</tbody>
                </table>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-slate-100">
                  <table className="w-full text-sm">
                    <tbody>{renderRows(left, 0)}</tbody>
                  </table>
                  <table className="w-full text-sm">
                    <tbody>{renderRows(right, left.length)}</tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: translateY(16px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `,
        }}
      />
    </div>
  )
}

/* ========= Page ========= */
export default function PricingCardsLv() {
  const [hash, setHash] = useState('')
  const mobile = useIsMobile()
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())
  const animatingRef = useRef(false)
  const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

  // LV view: tas pats PRICING, tik tekstai išversti
  const LV_VIEW = useMemo(() => {
    return PRICING.map((g) => {
      const items = g.items.map((it) => ({
        ...it,
        name: tItemName(it.name),
        note: tNote(it.note),
      }))
      return {
        keyTitle: g.title,        // LT original
        title: tTitle(g.title),   // LV UI
        items,
      }
    })
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') setHash(window.location.hash)
  }, [])

  const handleToggle = async (id: string, willOpen: boolean) => {
    if (animatingRef.current) return
    animatingRef.current = true
    try {
      if (!willOpen) {
        setOpenIds((prev) => {
          const next = new Set(prev)
          next.delete(id)
          return next
        })
        await wait(CLOSE_MS + 40)
        return
      }

      if (mobile) {
        setOpenIds((prev) => new Set(prev).add(id))
        await wait(32)
        await smoothAlignToElement(id, 20, OPEN_MS)
      } else {
        setOpenIds(new Set())
        await wait(CLOSE_MS + 40)
        setOpenIds(new Set([id]))
        await wait(40)
        await smoothAlignToElement(id, 16, OPEN_MS - 40)
      }
    } finally {
      animatingRef.current = false
    }
  }

  useEffect(() => {
    if (!hash) return
    const id = slugify(decodeURIComponent(hash.slice(1)))
    if (!PRICING.some((g) => slugify(g.title) === id)) return

    let cancelled = false
    const run = async () => {
      if (animatingRef.current) return
      animatingRef.current = true
      try {
        if (mobile) {
          setOpenIds((prev) => new Set(prev).add(id))
          await wait(32)
          if (!cancelled) await smoothAlignToElement(id, 20, OPEN_MS)
        } else {
          setOpenIds(new Set())
          await wait(CLOSE_MS + 40)
          setOpenIds(new Set([id]))
          await wait(40)
          if (!cancelled) await smoothAlignToElement(id, 16, OPEN_MS - 40)
        }
      } finally {
        animatingRef.current = false
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [hash, mobile])

  return (
    <div className="w-full mx-auto max-w-5xl px-0 sm:px-2">
      {/* 1 kortelė eilėje kaip LT */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5 items-start">
        {LV_VIEW.map((g) => {
          const id = slugify(g.keyTitle) // IMPORTANT: naudojam LT keyTitle id stabilumui
          const isOpen = openIds.has(id)
          return (
            <div key={g.keyTitle} className="w-full will-change-transform">
              <GroupCard
                groupKeyTitle={g.keyTitle}
                displayTitle={g.title}
                items={g.items as PriceItem[]}
                open={isOpen}
                onToggle={(willOpen) => handleToggle(id, willOpen)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}