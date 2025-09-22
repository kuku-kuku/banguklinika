import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'
import { motion, AnimatePresence } from 'framer-motion'

type Svc = { id: string; title: string; content: React.ReactNode }

const ANIM_MS = 350

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function isInteractive(el: HTMLElement | null) {
  if (!el) return false
  return Boolean(el.closest('a,button,input,select,textarea,label,[role="button"]'))
}
function isMobile() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
}
function getHeaderOffset(): number {
  const sticky = document.querySelector('header.sticky') as HTMLElement | null
  return sticky ? sticky.getBoundingClientRect().height : 76
}

/* ===== Smooth scroll helperiai ===== */
let _rafId: number | null = null
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}
function smoothScrollTo(targetY: number, duration = 420) {
  if (_rafId) cancelAnimationFrame(_rafId)
  const startY = window.scrollY
  const diff = targetY - startY
  if (Math.abs(diff) < 2) return
  const start = performance.now()
  const step = (now: number) => {
    const p = Math.min(1, (now - start) / duration)
    const y = startY + diff * easeInOutCubic(p)
    window.scrollTo(0, y)
    if (p < 1) _rafId = requestAnimationFrame(step)
  }
  _rafId = requestAnimationFrame(step)
}
function targetYForHeading(id: string) {
  const el = document.getElementById(id)
  if (!el) return window.scrollY
  const rect = el.getBoundingClientRect()
  return window.scrollY + rect.top - getHeaderOffset() - 8
}
function ensureHeadingVisible(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const rect = el.getBoundingClientRect()
  const need = rect.top - (getHeaderOffset() + 8)
  if (Math.abs(need) > 4) smoothScrollTo(window.scrollY + need, 300)
}

/* Perjungimo metu išjungiam overflow anchoring, kad nespurdėtų ekranas */
function lockAnchoring(lock: boolean) {
  const root = document.documentElement
  if (!root) return
  if (lock) root.style.setProperty('overflow-anchor', 'none')
  else root.style.removeProperty('overflow-anchor')
}

/* ===== Akordeono elementas ===== */
function AccordionItem({
  id, title, children, openId, setOpenId, requestSwitch,
}: {
  id: string
  title: string
  children: React.ReactNode
  openId: string | null
  setOpenId: (v: string | null) => void
  requestSwitch: (targetId: string) => void
}) {
  const open = openId === id

  const handleToggle = () => {
    const willOpen = !open
    if (willOpen) requestSwitch(id)
    else setOpenId(null)
  }

  const handleContentClick = (e: React.MouseEvent) => {
    if (!open || !isMobile()) return
    const target = e.target as HTMLElement
    if (isInteractive(target)) return
    setOpenId(null)
  }

  return (
    <div
      id={id}
      className={[
        'rounded-2xl border shadow-sm transition-colors',
        open
          // ATIDARYTA: balta su aiškiu rėmeliu/ringu
          ? 'bg-white border-primary-400 ring-1 ring-primary-300'
          // UŽDARYTA: TURKIO fonas visada, ne tik hover
          : 'bg-primary-50 border-primary-300 hover:bg-primary-100',
        'scroll-mt-28 md:scroll-mt-32'
      ].join(' ')}
    >
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
      >
        <h3 className="text-base sm:text-lg font-semibold text-darkblue-600 text-left">{title}</h3>
        <Chevron open={open} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            key={`${id}-panel`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 text-gray-700 leading-relaxed" onClick={handleContentClick}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ===== Puslapis ===== */
export default function Services() {
  const sections: Svc[] = useMemo(() => [
    {
      id: 'skubi-pagalba',
      title: 'Skubi pagalba',
      content: (
        <div className="space-y-3">
          <p>
            „Bangų Odontologijos Klinika“ suteiks skubią pagalbą, jei skauda dantį, iškrito plomba, nuskilo dantis ar
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
      id: 'burnos-chirurgija',
      title: 'Burnos chirurgija',
      content: <p>Informacija ruošiama, sugrįžkite artimiausiu metu!</p>,
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
  const [openId, setOpenId] = useState<string | null>(null)

  const tCloseRef = useRef<number | null>(null)
  const tOpenRef = useRef<number | null>(null)
  const requestSwitch = (targetId: string) => {
    if (!openId) {
      lockAnchoring(true)
      smoothScrollTo(targetYForHeading(targetId))
      tOpenRef.current && window.clearTimeout(tOpenRef.current)
      tOpenRef.current = window.setTimeout(() => {
        setOpenId(targetId)
        window.setTimeout(() => {
          ensureHeadingVisible(targetId)
          lockAnchoring(false)
        }, ANIM_MS + 40)
      }, 40)
      return
    }

    if (openId === targetId) {
      smoothScrollTo(targetYForHeading(targetId))
      return
    }

    lockAnchoring(true)
    setOpenId(null)
    tCloseRef.current && window.clearTimeout(tCloseRef.current)
    tOpenRef.current && window.clearTimeout(tOpenRef.current)

    tCloseRef.current = window.setTimeout(() => {
      smoothScrollTo(targetYForHeading(targetId))
      tOpenRef.current = window.setTimeout(() => {
        setOpenId(targetId)
        window.setTimeout(() => {
          ensureHeadingVisible(targetId)
          lockAnchoring(false)
        }, ANIM_MS + 40)
      }, 80)
    }, ANIM_MS + 20)
  }

  useEffect(() => {
    return () => {
      if (tCloseRef.current) window.clearTimeout(tCloseRef.current)
      if (tOpenRef.current) window.clearTimeout(tOpenRef.current)
    }
  }, [])

  // Į /paslaugos be hash — viskas uždaryta
  useEffect(() => {
    if (pathname === '/paslaugos' && !hash) setOpenId(null)
  }, [pathname, hash])

  // Hash navigacija (pvz., /paslaugos#implantai atidarys atitinkamą sekciją)
  useEffect(() => {
    const target = (hash || '').replace('#', '')
    if (!target) return
    if (!sections.some(s => s.id === target)) return
    requestSwitch(target)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash])

  // Įvažiavimo animacijos
  const listVariants = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } } }
  const itemVariants = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }

  return (
    <>
      <SEO
        title="Paslaugos – Bangų klinika"
        description="Skubi pagalba, dantų protezavimas (CEREC, cirkonis, E-MAX), kompensuojamas protezavimas, dantų gydymas, implantai, tiesinimas, higiena, chirurgija, balinimas, estetinis plombavimas."
      />

      <AnimatedSection>
        <div className="container-narrow py-10 md:py-12">
          <header className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-600">Paslaugos</h1>
            <p className="mt-2 text-gray-600">
              Išsirinkite dominančią paslaugą – atsidarys išsamus aprašas. Visos sekcijos pagal nutylėjimą uždarytos,
              kad būtų patogu naršyti.
            </p>
          </header>

          <motion.div variants={listVariants} initial="hidden" animate="visible" className="grid gap-4">
            {sections.map((s) => (
              <motion.div key={s.id} variants={itemVariants}>
                <AccordionItem
                  id={s.id}
                  title={s.title}
                  openId={openId}
                  setOpenId={setOpenId}
                  requestSwitch={requestSwitch}
                >
                  {s.content}
                </AccordionItem>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  )
}
