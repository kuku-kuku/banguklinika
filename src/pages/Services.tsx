import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'

type Svc = { id: string; title: string; content: React.ReactNode }

/** Bazinė trukmė; reali trukmė adaptuojama pagal turinio aukštį (tik "default" akordeonui) */
const BASE_DURATION = 0.28

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
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

function getHeaderOffset(): number {
  const sticky = document.querySelector('header.sticky') as HTMLElement | null
  return sticky ? sticky.getBoundingClientRect().height : 76
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function smoothScrollTo(targetY: number, duration = 450) {
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

async function smoothAlignToElement(id: string, offset = 16, ms = 360) {
  const el = document.getElementById(id)
  if (!el) return
  const rect = el.getBoundingClientRect()
  const targetY = window.scrollY + rect.top - getHeaderOffset() - offset
  await smoothScrollTo(targetY, ms)
}

/** Trukmė pagal px (tik default akordeonui) – kad ilgi blokai būtų vienodai glotnūs */
function durationFor(px: number) {
  // 0.28s už ~0–200px, +0.27s iki 800px, cap ties ~0.55s
  const extra = Math.min(0.27, (Math.max(0, Math.min(px, 800)) / 800) * 0.27)
  return +(BASE_DURATION + extra).toFixed(3)
}

/* ================== Modal (CENTRUOTAS) ================== */

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [locked])
}

function ModalSheet({
  open, title, onClose, children,
}: {
  open: boolean
  title: string
  onClose: () => void
  children: React.ReactNode
}) {
  useBodyScrollLock(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          aria-modal
          role="dialog"
        >
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            aria-hidden
          />

          {/* CENTRUOTAS panelis */}
          <motion.div
            id={`${title}-modal`}
            className="relative z-[81] w-full max-w-[92vw] sm:max-w-[560px] bg-white rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            style={{ contain: 'layout paint', transform: 'translateZ(0)' }}
          >
            <div className="px-5 pt-4 pb-3 border-b flex items-center justify-between">
              <h3 className="font-semibold text-lg text-slate-900">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 -mr-2 rounded-lg hover:bg-slate-100 active:bg-slate-200"
                aria-label="Uždaryti"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </button>
            </div>
            <div className="px-5 py-4 max-h-[82vh] overflow-y-auto overscroll-contain">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ================== Ripple helper ================== */

type Ripple = { id: number; x: number; y: number }

function useRipples() {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const add = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now() + Math.random()
    setRipples((r) => [...r, { id, x, y }])
    // auto remove
    setTimeout(() => {
      setRipples((r) => r.filter((rr) => rr.id !== id))
    }, 620)
  }
  return { ripples, add }
}

/* ================== Kortelių variantai ================== */

/** Paprastas (default) akordeonas su išmatuotu height */
function AccordionItemDefault({
  id, title, children, open, onToggle,
}: {
  id: string
  title: string
  children: React.ReactNode
  open: boolean
  onToggle: (willOpen: boolean) => void
}) {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const controls = useAnimationControls()
  const [height, setHeight] = useState(0)
  const [measured, setMeasured] = useState(0)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      const h = el.scrollHeight
      setMeasured(h)
      if (open) setHeight(h)
    })
    ro.observe(el)
    setMeasured(el.scrollHeight)
    return () => ro.disconnect()
  }, [open])

  useEffect(() => {
    const target = open ? measured : 0
    const d = durationFor(measured)
    controls.start({
      height: target,
      transition: { type: 'spring', damping: 26, stiffness: 280, mass: 0.9, duration: d },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, measured])

  return (
    <div
      id={id}
      className={[
        'rounded-2xl border shadow-sm transition-colors transform-gpu will-change-transform',
        open
          ? 'bg-white border-primary-400 ring-2 ring-primary-300 shadow-md'
          : 'bg-primary-50 border-primary-300 hover:bg-primary-100 hover:shadow',
        'scroll-mt-28 md:scroll-mt-32'
      ].join(' ')}
      style={{ contain: 'paint' }}
    >
      <button
        onClick={() => onToggle(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 transition-colors"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
      >
        <h3 className="text-base sm:text-lg font-semibold text-darkblue-600 text-left">{title}</h3>
        <Chevron open={open} />
      </button>

      <motion.div
        id={`${id}-panel`}
        animate={controls}
        initial={false}
        style={{
          height,
          overflow: 'hidden',
          willChange: 'height',
          contentVisibility: open ? ('visible' as any) : ('auto' as any),
          containIntrinsicSize: open ? undefined : '0 400px',
        }}
      >
        <div ref={contentRef} className="px-5 pb-5 pt-0 text-gray-700 leading-relaxed">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

/** „Paper scroll“ akordeonas: kompaktiškesnis fiksuotas vidinis aukštis, turinys scrollinasi viduje */
function AccordionItemPaper({
  id, title, children, open, onToggle, maxVh = 56,
}: {
  id: string
  title: string
  children: React.ReactNode
  open: boolean
  onToggle: (willOpen: boolean) => void
  /** maksimalus vidinio viewporto aukštis (vh) – sumažintas, kad kortelė būtų mažesnė */
  maxVh?: number
}) {
  const clampHeight = `clamp(300px, ${maxVh}vh, 540px)` // kompaktiškesnė

  return (
    <div
      id={id}
      className={[
        'rounded-2xl border shadow-sm transition-colors transform-gpu will-change-transform',
        open
          ? 'bg-white border-primary-400 ring-2 ring-primary-300 shadow-md'
          : 'bg-primary-50 border-primary-300 hover:bg-primary-100 hover:shadow',
        'scroll-mt-28 md:scroll-mt-32'
      ].join(' ')}
      style={{ contain: 'layout paint' }}
    >
      <button
        onClick={() => onToggle(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 transition-colors"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
      >
        <h3 className="text-base sm:text-lg font-semibold text-darkblue-600 text-left">{title}</h3>
        <Chevron open={open} />
      </button>

      <div
        id={`${id}-panel`}
        className="grid will-change-[grid-template-rows,opacity]"
        style={{
          gridTemplateRows: open ? '1fr' : '0fr',
          opacity: open ? 1 : 0,
          transition: `grid-template-rows ${open ? 320 : 260}ms cubic-bezier(0.22,1,0.36,1), opacity ${open ? 320 : 260}ms cubic-bezier(0.22,1,0.36,1)`,
          transform: 'translateZ(0)'
        }}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className="px-5 pb-5 pt-0 text-gray-700 leading-relaxed overflow-y-auto overscroll-contain rounded-xl"
            style={{
              maxHeight: clampHeight,
              transition: 'transform 160ms cubic-bezier(0.22,1,0.36,1), opacity 160ms cubic-bezier(0.22,1,0.36,1)',
              transformOrigin: 'top left',
              transform: open ? 'scaleY(1) translateZ(0)' : 'scaleY(0.995) translateY(-1px) translateZ(0)',
              opacity: open ? 1 : 0.98,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

/** Dešinės pusės „Open“ piktograma su subtilia gyvybe */
function OpenAffordance() {
  return (
    <div className="relative">
      {/* švelni aura */}
      <motion.span
        className="absolute inset-0 rounded-full bg-primary-300/30"
        style={{ filter: 'blur(2px)' }}
        initial={{ opacity: 0.0, scale: 0.9 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* pats mygtukas */}
      <motion.span
        whileTap={{ scale: 0.9 }}
        className="relative z-10 w-9 h-9 rounded-full bg-primary-100 text-primary-700 grid place-items-center shadow-inner"
      >
        <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
          <path d="M8 12h8M12 8l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </motion.span>
    </div>
  )
}

/** Modal trigger kortelė – vietoj „Atidaryti“ teksto: piktograma + ripple efektas */
function ModalTriggerCard({
  id, title, onOpen,
}: {
  id: string
  title: string
  onOpen: () => void
}) {
  const { ripples, add } = useRipples()

  return (
    <div
      id={id}
      className="rounded-2xl border shadow-sm bg-primary-50 border-primary-300 hover:bg-primary-100 hover:shadow transition-colors scroll-mt-28 md:scroll-mt-32"
      style={{ contain: 'paint' }}
    >
      <motion.button
        type="button"
        onMouseDown={add}               // sukuria ripple kuo anksčiau
        onClick={onOpen}                // atidaro modalą
        whileTap={{ scale: 0.98 }}      // kortelės „press“
        className="relative w-full flex items-center justify-between gap-4 px-5 py-4 text-left min-h-[92px]"
        aria-haspopup="dialog"
        aria-controls={`${id}-modal`}
      >
        {/* ripplės sluoksnis */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden">
          {ripples.map(r => (
            <motion.span
              key={r.id}
              className="absolute rounded-full bg-primary-300/40"
              style={{
                left: r.x,
                top: r.y,
                width: 8,
                height: 8,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 0, opacity: 0.35 }}
              animate={{ scale: 18, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </span>

        <h3 className="text-base sm:text-lg font-semibold text-darkblue-600">{title}</h3>
        <OpenAffordance />
      </motion.button>
    </div>
  )
}

/* ================== Puslapis ================== */

export default function Services() {
  const sections: Svc[] = useMemo(() => [
    {
      id: 'skubi-pagalba',
      title: 'Skubi pagalba',
      content: (
        <div className="space-y-3">
          <p>
            „Bangų Odontologijos Klinika" suteiks skubią pagalbą, jei skauda dantį, iškrito plomba, nuskilo dantis ar
            skubiai prireikė kitų odontologo paslaugų. Nereikės laukti eilėje – priimsime jus kaip įmanoma greičiau.
          </p>
        </div>
      ),
    },
    {
      id: 'dantu-protezavimas',
      title: 'Dantų protezavimas',
      content: (
        <div className="space-y-6">
          <p>
            Bangų Odontologijos Klinikos specialistai padės Jums sugrąžinti šypseną! Mūsų klinikoje atliekamas profesionalus,
            greitas ir neskausmingas dantų protezavimas, naudojant pasaulyje pripažintas naujausias technologijas.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Pažangus 3D CEREC estetinis restauravimas</h4>
            <p className="italic text-gray-600">CEREC 3D – revoliucija dantų protezavime</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Skaitmeninis antspaudas pasižymi precizišku tikslumu.</li>
              <li>Danties restauracija idealiai pritaikoma kiekvienam pacientui individualiai.</li>
              <li>Pažangiausia frezavimo technologija užtikrina keramikos gaminių ilgaamžiškumą.</li>
              <li>Bet kokį danties protezą galima pagaminti vietoje – vos per dvi valandas.</li>
              <li>Nebereikia gaminti ir nešioti laikinų vainikėlių – protezuojama iškart.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Cirkonio oksido keramika</h4>
            <p>Kodėl verta rinktis?</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cirkonio keramika – itin tvirta keraminė medžiaga iš suspaustų kristalų.</li>
              <li>Tinka tiek priekiniams, tiek šoniniams dantims – pavienių ir kelių dantų atkūrimui.</li>
              <li>Labai tiksli, lengvai pritaikoma – nėra diskomforto net pirmą dieną po protezavimo.</li>
              <li>Atspari apnašoms, nekeičia formos ir spalvos bėgant laikui.</li>
              <li>Lenkia metalo keramiką tarnavimo trukme; ilgainiui nereikia keisti.</li>
              <li>Skaitmeninė modeliavimo technologija – preciziškas pritaikymas.</li>
              <li>Estetiškai nuo natūralių dantų praktiškai nesiskiria.</li>
              <li>Lėčiau perduoda karštį/šaltį – pojūtis artimesnis natūraliems dantims.</li>
              <li>Neturi juodo metalinio kraštelio ties dantenomis.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Bemetalė keramika – E-MAX (Ivoclar Vivadent)</h4>
            <p>
              Matomiems, ypač priekiniams dantims protezuoti rekomenduojame bemetalę keramiką (porcelianą) –
              ji praleidžia šviesą ir yra estetiškai labai patraukli.
            </p>
            <p>Kodėl verta rinktis?</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Išlaiko spalvą ir skaidrumą – nepakeičia atspalvio bėgant laikui.</li>
              <li>Tobulas estetinis vaizdas, labai blizgi, be matiškumo.</li>
              <li>Atspari temperatūros pokyčiams, nedirgina dantenų.</li>
              <li>Labai tiksli, lengvai pritaikoma – puikus rezultatas jau pirmą dieną.</li>
              <li>Atspari apnašoms.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Protezavimas ant implantų</h4>
            <p>
              Tai pažangiausias dantų protezavimo metodas: dirbtinės šaknys (implantai) įtvirtinamos prarastų dantų vietoje,
              o ant jų tvirtinami mūsų laboratorijoje pagaminti, nuo natūralių dantų nesiskiriantys protezai.
              Bangų Odontologijos Klinika dirba su Straumann® ir Medentika® implantais.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'kompensuojamas-dantu-protezavimas',
      title: 'TLK lėšomis kompensuojamas dantų protezavimas',
      content: (
        <div className="space-y-3">
          <p>
            Bangų odontologijos klinika yra sudariusi sutartį su Teritorinėmis ligonių kasomis (TLK), kurios skiria kompensaciją
            dantų protezavimo išlaidoms iš Privalomojo sveikatos draudimo fondo (PSDF).
          </p>
          <p>Teisę į kompensuojamą protezavimą turi:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Asmenys, kuriems sukako senatvės pensijos amžius;</li>
            <li>Vaikai iki 18 metų;</li>
            <li>Asmenys, pripažinti nedarbingais arba iš dalies darbingais;</li>
            <li>Asmenys po burnos, veido ir žandikaulių onkologinių ligų gydymo.</li>
          </ul>
          <p className="text-sm text-gray-600">
            Detalesnė ir nuolat atnaujinama informacija skelbiama TLK interneto svetainėje.
          </p>
        </div>
      ),
    },
    {
      id: 'dantu-gydymas',
      title: 'Dantų gydymas',
      content: (
        <div className="space-y-3">
          <p>
            Mūsų klinikos specialistai operatyviai padės, jei skauda dantį ar reikalingas profilaktinis patikrinimas.
            Teikiame visas dantų gydymo paslaugas:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Konsultacijos, profilaktinis patikrinimas, gydymo plano sudarymas;</li>
            <li>Danties plombavimas helio arba stiklojonomerine plomba;</li>
            <li>Dentalinė rentgenograma;</li>
            <li>Profesionali burnos higiena;</li>
            <li>Estetinis dantų plombavimas;</li>
            <li>Dantų šaknų kanalų gydymas;</li>
            <li>Vaikų dantų gydymas;</li>
            <li>Dantų traukimas;</li>
            <li>Implantacija;</li>
            <li>Kaulo priauginimo, sinuso dugno pakėlimo operacijos;</li>
            <li>Dantų protezavimas (metalo keramika, laminatės, cirkonio keramika, bemetalė keramika, išimami protezai).</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'implantai',
      title: 'Aukščiausios kokybės dantų implantai',
      content: (
        <div className="space-y-3">
          <p>
            Bangų Odontologijos Klinika savo klientams siūlo tik aukščiausios kokybės ilgaamžius, pasaulyje pripažintus
            implantus – Straumann® ir Medentika®. Implantacija – pažangiausias būdas atstatyti tiek vieną, tiek ir kelis prarastus dantis.
          </p>

          <h4 className="font-semibold text-gray-900">Kas yra danties implantas?</h4>
          <p>
            Danties implantas – tai danties šaknies pakaitalas. Jis gaminamas iš tvirtos, lengvos ir su kaulu suderinamos
            medžiagos (titano, cirkonio ar jų lydinio) ir primena nedidelį varžtelį. Atstatant dantį, implantas įsukamas į
            žandikaulį, o prie jo tvirtinama dirbtinė karūnėlė.
          </p>

          <h4 className="font-semibold text-gray-900">Kodėl prarastą dantį būtina kuo skubiau atstatyti?</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Vengsite gretimų dantų slinkimo į atsiradusį tarpą, nesikeis sąkandis;</li>
            <li>Išsaugosite patogų kramtymą ir gerą higieną – mažiau galvos skausmų dėl sąkandžio;</li>
            <li>Bus išsaugomas žandikaulio kaulas ir veido forma;</li>
            <li>Atkuriamas šypsenos estetiškumas ir pilna funkcija.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'dantu-tiesinimas',
      title: 'Dantų tiesinimas kapomis (ORDOLINE)',
      content: (
        <div className="space-y-3">
          <p>
            Bangų Odontologijos Klinikoje tiesiname dantis pasaulyje pripažintomis skaidriomis ORDOLINE kapomis.
            Tai patogus, higieniškas ir diskretiškas būdas formuoti taisyklingą sąkandį ir gražią šypseną.
          </p>

          <h4 className="font-semibold text-gray-900">Kodėl verta rinktis skaidrias ORDOLINE kapas?</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nematomos, praktiškos, itin lengvos ir higieniškos;</li>
            <li>Lengvai išimamos – patogu valgyti ir valytis dantis;</li>
            <li>Trumpesnė gydymo trukmė, geriau prognozuojami rezultatai.</li>
          </ul>

          <h4 className="font-semibold text-gray-900">Kaip tai veikia?</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sudarytas skaitmeninis gydymo planas – matysite progresą ir galutinį rezultatą.</li>
            <li>Pagal atspaudus pagaminamas individualus kapų skaičius; kapas keičiate kas ~2 savaites.</li>
            <li>Tinka beveik visais atvejais: sąkandžio korekcija, tarpai, susigrūdimai.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'burnos-higiena',
      title: 'Burnos higiena (AIRFLOW®)',
      content: (
        <div className="space-y-3">
          <p>
            Kad ir kaip uoliai prižiūrėtumėte dantis namuose, šepetėlis ir siūlas nepasiekia visų vietų. Profesionali
            burnos higiena – veiksminga karieso ir dantenų ligų profilaktika. Dantys tampa baltesni, pagerėja burnos kvapas.
          </p>
          <p>
            Bangų Odontologijos klinikoje atliekame profesionalią burnos higieną su pažangiausia AIR FLOW technologija.
            Rekomenduojame kas 6 mėn., esant prastesnei būklei – kas 3 mėn. Turint implantus – būtina reguliari higiena.
          </p>

          <h4 className="font-semibold text-gray-900">Kodėl verta?</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pašalinamos net plika akimi nematomos apnašos, nuvalomi akmenys;</li>
            <li>Poliruojami dantų, plombų ir protezų paviršiai – dantys atrodo baltesni;</li>
            <li>Profilaktika nuo gingivito ir periodonto ligų;</li>
            <li>Pagerėja burnos kvapas; sumažėja ankstyvo netekimo rizika;</li>
            <li>Suteikiame individualius higienos patarimus.</li>
          </ul>

          <h4 className="font-semibold text-gray-900">Procedūros etapai</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Akmenų pašalinimas ultragarsiniu skaleriu;</li>
            <li>Apnašų šalinimas su soda, AIR FLOW aparatu;</li>
            <li>Dantų poliravimas specialia pasta.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'dantu-balinimas',
      title: 'Dantų balinimas BEYOND® sistema',
      content: (
        <div className="space-y-3">
          <p>
            Ofisinis dantų balinimas BEYOND® sistema odontologo kabinete – tai speciali balinimo su šviesos filtravimu
            procedūra, kuri yra saugi ir užtikrina greitą rezultatą. Naudojama BEYOND® ACCELERATOR halogeninė lempa
            išskiria mažesnę temperatūrą, todėl patogiau ir mažesnė jautrumo rizika. Rezultatas matomas iš karto.
          </p>

          <h4 className="font-semibold text-gray-900">Kodėl verta rinktis BEYOND®?</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>BEYOND® – pasaulinis dantų estetikos lyderis;</li>
            <li>Stulbinantys rezultatai po vienos procedūros;</li>
            <li>Puikus pasirinkimas ruošiantis ypatingoms progoms;</li>
            <li>Tinka esant emalio pageltimui, tetraciklino, fluoro ar su amžiumi susijusioms dėmėms;</li>
            <li>Paprasta, neskausminga, trukmė ~45 min.;</li>
            <li>Rezultatai dažniausiai išlieka iki 2 metų.</li>
          </ul>

          <p className="text-sm text-gray-600">
            Po procedūros pirmas 24 val. venkite kavos, tabako, dažančių gėrimų ir maisto, taip pat spalvotų dantų pastų ar skalavimo skysčių.
          </p>

          <h4 className="font-semibold text-gray-900">Balinimas kapomis (namuose)</h4>
          <p>
            Atliekame ir efektyvų dantų balinimą kapomis. Individualiai pagamintų kapų pagalba, naudojant balinimo gelius,
            dantys balinami namuose palaipsniui. Prieš balinimą rekomenduojame atlikti profesionalią burnos higieną.
          </p>
        </div>
      ),
    },
    {
      id: 'estetinis-plombavimas',
      title: 'Estetinis plombavimas',
      content: (
        <div className="space-y-3">
          <p>
            Estetinis dantų plombavimas – procedūra, kurios metu dantys atkuriami sluoksniais, maksimaliai apsaugant
            natūralų danties audinį. Atstatomi nudilę, nuskilę, ėduonies ar kitaip pažeisti dantys, koreguojama forma,
            uždaromi tarpai.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Galima koreguoti formą ir spalvą; koreguoti vieną ar net visus priekinius dantis;</li>
            <li>Vieno vizito metu galima atkurti 4–6 priekinius dantis – rezultatas tą pačią dieną;</li>
            <li>Naudojamos modernios restauracinės medžiagos – minimaliai keičiami kietieji audiniai;</li>
            <li>Vieno danties restauracija trunka apie 1,5 val.;</li>
            <li>Prieš procedūrą rekomenduojama profesionali burnos higiena.</li>
          </ul>
        </div>
      ),
    },
  ], [])

  const { hash, pathname } = useLocation()
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())
  const [modalId, setModalId] = useState<string | null>(null) // estetinis plombavimas (mobile)
  const isAnimatingRef = useRef(false)
  const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))
  const mobile = useIsMobile()

  const handleToggle = async (id: string, willOpen: boolean) => {
    if (isAnimatingRef.current) return
    // modalinė kortelė mobile – perimame elgseną ir neatidarome akordeono
    if (mobile && id === 'estetinis-plombavimas') {
      if (willOpen) setModalId(id)
      return
    }

    isAnimatingRef.current = true
    try {
      if (!willOpen) {
        setOpenIds(prev => {
          const next = new Set(prev); next.delete(id); return next
        })
        await wait(300)
        return
      }

      if (mobile) {
        setOpenIds(prev => new Set(prev).add(id))
        await wait(40) // leisti layout’ui suskaičiuoti aukštį
        await smoothAlignToElement(id, 24, 320)
      } else {
        const hadOthers = openIds.size > 0 && !openIds.has(id)
        if (hadOthers) {
          setOpenIds(new Set())
          await wait(320)
        }
        setOpenIds(new Set([id]))
        await wait(340)
        await smoothAlignToElement(id, 16, 260)
      }
    } finally {
      isAnimatingRef.current = false
    }
  }

  // Modal close helper
  const closeModal = () => setModalId(null)

  useEffect(() => {
    if (pathname === '/paslaugos' && !hash) setOpenIds(new Set())
  }, [pathname, hash])

  useEffect(() => {
    const target = (hash || '').replace('#', '')
    if (!target) return
    if (!sections.some(s => s.id === target)) return

    let cancelled = false
    const run = async () => {
      if (isAnimatingRef.current) return
      isAnimatingRef.current = true
      try {
        // jei hash rodo į modalinę kortelę ir mobile – atidaryti modalą (centruotą)
        if (mobile && target === 'estetinis-plombavimas') {
          setModalId(target)
          return
        }

        if (mobile) {
          setOpenIds(prev => new Set(prev).add(target))
          await wait(40)
          if (!cancelled) await smoothAlignToElement(target, 24, 320)
        } else {
          const hadOthers = openIds.size > 0 && !openIds.has(target)
          if (hadOthers) {
            setOpenIds(new Set())
            await wait(320)
            if (cancelled) return
          }
          setOpenIds(new Set([target]))
          await wait(340)
          if (!cancelled) await smoothAlignToElement(target, 16, 260)
        }
      } finally {
        isAnimatingRef.current = false
      }
    }
    run()
    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash, sections, mobile])

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } }
  }

  // Pagal id ir mobile parenkame kortelės variantą
  const isPaperScroll = (id: string) => mobile && id === 'dantu-balinimas'
  const isModalVariant = (id: string) => mobile && id === 'estetinis-plombavimas'

  const modalSvc = modalId ? sections.find(s => s.id === modalId) || null : null

  return (
    <>
      <SEO
        title="Paslaugos"
        description="Skubi pagalba, dantų protezavimas (CEREC, cirkonis, E-MAX), kompensuojamas protezavimas, dantų gydymas, implantai, tiesinimas, higiena, chirurgija, balinimas, estetinis plombavimas."
      />

      <AnimatedSection>
        <div className="container-narrow py-10 md:py-12">
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-600">Paslaugos</h1>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Išsirinkite dominančią paslaugą – atsidarys išsamus aprašas. Visos sekcijos pagal nutylėjimą uždarytos,
              kad būtų patogu naršyti.
            </p>
          </header>

          <motion.div variants={listVariants} initial="hidden" animate="visible" className="grid gap-4">
            {sections.map((s) => {
              const open = openIds.has(s.id)

              return (
                <motion.div key={s.id} variants={itemVariants} layout="position">
                  {isModalVariant(s.id) ? (
                    <ModalTriggerCard
                      id={s.id}
                      title={s.title}
                      onOpen={() => setModalId(s.id)}
                    />
                  ) : isPaperScroll(s.id) ? (
                    <AccordionItemPaper
                      id={s.id}
                      title={s.title}
                      open={open}
                      onToggle={(willOpen) => handleToggle(s.id, willOpen)}
                      maxVh={56}
                    >
                      {s.content}
                    </AccordionItemPaper>
                  ) : (
                    <AccordionItemDefault
                      id={s.id}
                      title={s.title}
                      open={open}
                      onToggle={(willOpen) => handleToggle(s.id, willOpen)}
                    >
                      {s.content}
                    </AccordionItemDefault>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CENTRUOTAS modalas tik mobile „estetinis-plombavimas“ */}
      <ModalSheet
        open={!!modalSvc}
        title={modalSvc?.title || ''}
        onClose={closeModal}
      >
        {modalSvc?.content}
      </ModalSheet>
    </>
  )
}
