import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { TableOfContents } from '../components/TableOfContents'
import { useRef } from 'react'
import ReviewsCarousel from '../components/ReviewsCarousel'

// Animacijų nustatymai
const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

// UI helpers
const sectionWrap = 'mb-14 scroll-mt-36 2xl:scroll-mt-24'
const whiteCard = 'bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft'
const innerCard = 'bg-white p-5 rounded-xl border border-slate-200 shadow-sm'

// Kainų dizaino žetonai
const P  = '#002045'
const S  = '#006b5f'
const SL = '#ecf5fb'

// Ikonos
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function ToothIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

const tocSections = [
  { id: "kainos", label: "Kainos" },
  { id: "kas-yra", label: "Kas yra plombavimas?" },
  { id: "kada-reikalingas", label: "Kada reikalingas?" },
  { id: "tipai", label: "Plombavimo tipai" },
  { id: "procesas", label: "Kaip atliekamas?" },
  { id: "svarbi-informacija", label: "Svarbi informacija" },
]

export default function DantuPlombavimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/dantu-plombavimas/#service",
    "name": "Dantų plombavimas Klaipėdoje",
    "serviceType": "Dantų plombavimas",
    "description": "Dantų plombavimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekamas pažeistų dantų atstatymas plombomis pacientams Klaipėdos mieste.",
    "url": "https://www.banguklinika.lt/paslaugos/dantu-plombavimas/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Dantų plombavimas Klaipėdoje | Kaina - Bangų klinika"
        description="Profesionalus dantų plombavimas Klaipėdoje. Estetinis ir funkcinis plombavimas, karieso gydymas, kokybiškos medžiagos ir ilgalaikis rezultatas."
        keywords="dantu plombavimas, estetinis plombavimas, dantu gydymas, eduonis, klaipeda, odontologas"
        structuredData={structuredData}
      />

      <motion.div
        ref={pageRef}
        className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TableOfContents sections={tocSections} rootRef={pageRef} cta={{ label: "Registruotis vizitui", to: "/kontaktai" }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-12 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Profesionalus danties plombavimas Klaipėdoje
            </h1>

            <div className="mb-8">
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų plombavimas yra viena dažniausiai atliekamų odontologinių procedūrų, skirta sustabdyti danties pažeidimų progresavimą ir atkurti jo funkciją bei sandarumą. Laiku atliktas danties plombavimas padeda apsaugoti dantį nuo tolimesnio gedimo, sumažinti skausmo riziką ir išvengti sudėtingesnio gydymo ateityje.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje atliekamas danties plombavimas grindžiamas kruopščia diagnostika, moderniomis plombinėmis medžiagomis ir individualiu požiūriu į kiekvieną pacientą. Procedūros metu siekiama ne tik pašalinti pažeistus audinius, bet ir atkurti natūralią danties formą bei kramtymo funkciją. Prieš gydymą įvertinama danties būklė, todėl parenkamas tinkamiausias plombavimo būdas, užtikrinantis ilgalaikį ir patikimą rezultatą.
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <Link to="/kontaktai" className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                Registruotis vizitui
              </Link>
            </div>

            {/* KAINOS */}
            <motion.section id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Danties plombavimo kainos
                    </h2>
                    <p className="text-slate-600">
                      Danties plombavimo kaina priklauso nuo danties būklės, pažeidimo apimties, naudojamų medžiagų ir procedūros sudėtingumo. Prieš pradedant gydymą Bangų odontologijos klinikoje visuomet atliekama konsultacija ir profilaktinis patikrinimas, kurių metu sudaromas individualus gydymo planas.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  {[
                    ['Konsultacija, profilaktinis patikrinimas', '20 €'],
                  ].map(([name, price], i) => (
                    <div key={i} className="flex justify-between items-center bg-white rounded-2xl px-5 py-3 border" style={{ borderColor: S }}>
                      <span className="text-slate-700 text-sm font-medium">{name}</span>
                      <span className="font-extrabold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Plombavimas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Danties plombavimas helio plomba', '70 – 90 €'],
                        ['Danties plombavimas stiklojonomerine plomba', '40 – 60 €'],
                        ['Laikina plomba', 'nuo 40 €'],
                        ['Gydomasis pamušalas (kalcio/stiklojonomerinis)', 'nuo 15 €'],
                      ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between items-center py-2.5">
                          <span className="text-slate-600 text-sm">{name}</span>
                          <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Papildomos paslaugos</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Nuskausminimas', '10 €'],
                        ['Vienkartinės priemonės', '15 €'],
                        ['Rentgeno nuotrauka', '10 €'],
                        ['Koferdamo sistemos naudojimas', '10 €'],
                      ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between items-center py-2.5">
                          <span className="text-slate-600 text-sm">{name}</span>
                          <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-slate-500 text-sm mt-6">
                  Tiksli danties plombavimo kaina aptariama individualios konsultacijos metu.
                </p>
              </div>
            </motion.section>
          </motion.header>

          {/* DOCTOR CTA */}
          <motion.div className="mt-8 mb-12" variants={item}>
            <div className="bg-white rounded-[28px] border border-sky-200 shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[5fr_4fr] gap-0 items-stretch">
                {/* Left: content */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-700 mb-4">
                    Kviečiame registruotis konsultacijai Bangų klinikoje
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Jeigu turite klausimų ar norite sužinoti daugiau apie gydymo galimybes, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu įvertinsime Jūsų burnos būklę, atsakysime į rūpimus klausimus ir padėsime suprasti visą gydymo eigą.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų odontologijos klinikoje siekiame, kad kiekvienas pacientas jaustųsi užtikrintai – nuo pirmosios konsultacijos iki galutinio rezultato. Registruokitės ir ženkite pirmą žingsnį link sveikos šypsenos.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultacijos metu:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'atliekamas išsamus klinikinis įvertinimas',
                        'aptariami galimi gydymo metodai',
                        'paaiškinami procedūros etapai ir terminai',
                        'sudaromas individualus gydymo planas',
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1"><CheckIcon /></span>
                          <span className="leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/kontaktai"
                    className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
                  >
                    Registruotis vizitui
                  </Link>
                </div>
                {/* Right: doctor photo */}
                <div className="relative min-h-[320px] lg:min-h-full bg-sky-50">
                  <img
                    src="/team/Odeta-light.jpg"
                    alt="Odeta Balsienė – odontologė Bangų klinikoje"
                    className="absolute inset-0 w-full h-full object-cover object-[30%_10%] lg:object-[30%_100%]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_15%)]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════
              REVIEWS
          ══════════════════════════════════════════════════════════════════ */}
          <motion.div className="mb-10 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          {/* KAS TAI YRA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6 text-center sm:text-left">
                Kas yra danties plombavimas?
              </h2>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
                <p className="mb-4">
                  Danties plombavimas – tai odontologinė procedūra, kurios metu pašalinami ėduonies ar kitaip pažeisti danties audiniai, o susidariusi ertmė atkuriama specialia plombine medžiaga. Tokiu būdu dantis tampa sandarus, atgauna savo funkciją ir yra apsaugomas nuo bakterijų patekimo bei tolimesnio gedimo.
                </p>
                <p>
                  Plombavimo metu atkuriama ne tik danties struktūra, bet ir jo anatominė forma, leidžianti taisyklingai kramtyti ir išvengti netolygaus apkrovimo. Priklausomai nuo pažeidimo gylio ir vietos, gali būti taikomi skirtingi plombavimo sprendimai – nuo paprasto paviršinio plombavimo iki gilesnių restauracijų.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className={innerCard}>
                  <ToothIcon />
                  <h3 className="font-semibold text-darkblue-700 mb-2">Funkcijos atkūrimas</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Atkuriama danties kramtymo funkcija ir anatominė forma, leidžianti išvengti sąkandžio problemų.
                  </p>
                </div>
                <div className={innerCard}>
                  <ShieldIcon />
                  <h3 className="font-semibold text-darkblue-700 mb-2">Apsauga ir sandarumas</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Užkertamas kelias bakterijų plitimui ir danties nervo pažeidimams.
                  </p>
                </div>
                <div className={innerCard}>
                  <ClockIcon />
                  <h3 className="font-semibold text-darkblue-700 mb-2">Ilgaamžiškumas</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Laiku atliktas plombavimas leidžia išsaugoti natūralų dantį ilgus metus.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KADA REIKALINGA */}
          <motion.section id="kada-reikalingas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kada reikalingas dantų plombavimas?
              </h2>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-6">
                <p>
                  Dantų plombavimas reikalingas tuomet, kai danties audiniai yra pažeisti ir būtina sustabdyti tolimesnį gedimo procesą. Dažniausiai plombavimas atliekamas ankstyvose stadijose, kai problemą dar galima išspręsti konservatyviai. Į odontologą rekomenduojama kreiptis, jei pastebimi šie požymiai:
                </p>
              </div>

              <div className="grid sm:grid-cols-1 gap-4 mb-4">
                {[
                  "Matomi ėduonies pažeidimai ar tamsios dėmės ant danties paviršiaus",
                  "Danties skausmas ar jautrumas šalčiui, karščiui ar saldumui",
                  "Nuskilęs ar įtrūkęs dantis, pažeistas kramtant ar dėl traumos",
                  "Senos, nesandarios plombos, kurios gali leisti bakterijoms patekti į danties vidų",
                  "Maisto strigimas ar nemalonus pojūtis konkrečioje danties vietoje"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1"><CheckIcon /></span>
                    <span className="text-slate-700 font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 italic">
                Laiku atliktas plombavimas padeda apsaugoti dantį nuo tolimesnio irimo, sumažina skausmo riziką ir leidžia išvengti šaknų kanalų gydymo ar danties netekimo ateityje.
              </p>
            </div>
          </motion.section>

          {/* PLOMBAVIMO TIPAI */}
          <motion.section id="tipai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kokie dantų plombavimo tipai taikomi?
              </h2>

              <p className="text-slate-700 mb-6">
                Dantų plombavimas nėra vienodas visiems pacientams – plombavimo tipas parenkamas atsižvelgiant į danties pažeidimo pobūdį, gylį ir vietą. Bangų odontologijos klinikoje kiekvienam pacientui sudaromas individualus gydymo planas.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Gydomasis (funkcinis) plombavimas", desc: "Skirtas ėduonies pažeistiems dantims atkurti ir apsaugoti nuo tolimesnio gedimo." },
                  { title: "Estetinis plombavimas", desc: "Kai atkuriama ne tik danties funkcija, bet ir jo forma bei spalva (ypač aktualu priekiniams dantims)." },
                  { title: "Laikinas plombavimas", desc: "Taikomas tarp gydymo etapų arba kai reikia stebėti danties būklę prieš nuolatinį plombavimą." },
                  { title: "Gilus plombavimas", desc: "Kai pažeidimas yra arti danties nervo ir reikalingas ypatingas tikslumas bei papildomos apsauginės medžiagos." }
                ].map((type, i) => (
                  <div key={i} className={innerCard}>
                    <h3 className="font-bold text-darkblue-700 mb-2">{type.title}</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* EIGA (STEPS) */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kaip atliekamas dantų plombavimas?
              </h2>

              <p className="text-slate-700 mb-8">
                Dantų plombavimas Bangų odontologijos klinikoje atliekamas laikantis aiškios, saugios ir pacientui suprantamos procedūros eigos.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">
                    01
                  </div>
                  <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Apžiūra ir diagnostika</h3>
                  <p className="text-sm text-slate-600 relative z-10">
                    Odontologas įvertina danties būklę, nustato pažeidimo gylį ir, jei reikia, atlieka rentgeno tyrimą. Tai leidžia tiksliai suplanuoti gydymą.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">
                    02
                  </div>
                  <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Audinių paruošimas</h3>
                  <p className="text-sm text-slate-600 relative z-10">
                    Pašalinami ėduonies pažeisti ar susilpnėję danties audiniai, siekiant užtikrinti, kad bakterijos neplistų toliau. Svarbu švariai išvalyti ertmę.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">
                    03
                  </div>
                  <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Plombavimas</h3>
                  <p className="text-sm text-slate-600 relative z-10">
                    Paruošta ertmė atkuriama modernia plombine medžiaga, atstatant natūralią danties formą. Medžiaga sluoksniuojama ir kietinama.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">
                    04
                  </div>
                  <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Poliravimas</h3>
                  <p className="text-sm text-slate-600 relative z-10">
                    Plomba koreguojama ir poliruojama, kad būtų lygi, patogi sukandus ir natūraliai derėtų su kitais dantimis.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* INFO BLOKAI */}
          <motion.section id="svarbi-informacija" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Svarbi informacija pacientams
              </h2>

              <div className="space-y-6">
                <div className={innerCard}>
                  <h3 className="font-bold text-lg text-darkblue-700 mb-3">Ar dantų plombavimas skausmingas?</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Dantų plombavimas dažniausiai atliekamas be skausmo, taikant vietinę nejautrą. Prieš procedūrą odontologas pasirūpina, kad jaustumėtės komfortiškai. Procedūros metu galite jausti tik nežymų spaudimą ar vibraciją. Po plombavimo kai kuriais atvejais gali pasireikšti laikinas jautrumas, kuris greitai praeina.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-lg text-darkblue-700 mb-3">Kiek laiko tarnauja dantų plombos?</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Tarnavimo laikas priklauso nuo plombos dydžio, vietos ir priežiūros. Kokybiškai atliktos plombos tarnauja daugelį metų. Didžiausią įtaką ilgaamžiškumui turi asmeninė burnos higiena ir reguliarūs profilaktiniai patikrinimai, leidžiantys laiku pastebėti ir pakoreguoti senas plombas.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-lg text-darkblue-700 mb-3">Ką svarbu žinoti po dantų plombavimo?</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Pirmosiomis valandomis po gydymo rekomenduojama vengti kieto maisto ir nekramtyti plombuota puse, ypač jei buvo taikyta nejautra (kad neįsikąstumėte). Jei jaučiate laikiną jautrumą šalčiui ar kramtant – tai normalu ir dažniausiai praeina per kelias dienas. Svarbiausia – kruopšti kasdienė higiena.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KODĖL MES & FINAL CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={`${whiteCard} mb-6`}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kodėl verta rinktis Bangų odontologijos kliniką?
              </h2>
              <p className="text-slate-700 mb-0 max-w-3xl leading-relaxed">
                Renkantis danties plombavimą svarbu ne tik procedūros kaina, bet ir gydymo kokybė, naudojamos medžiagos bei specialisto patirtis. Bangų odontologijos klinikoje dantų plombavimas atliekamas laikantis šiuolaikinių odontologijos standartų, skiriant ypatingą dėmesį tikslumui, saugumui ir ilgalaikiam rezultatui.
              </p>
              <p>
                Klinikoje dirbantys specialistai kiekvieną atvejį vertina individualiai – nuo kruopščios diagnostikos iki tinkamiausio plombavimo metodo parinkimo. Naudojamos patikimos, ilgaamžės plombinės medžiagos, o procedūros metu taikomos papildomos saugumo priemonės, užtikrinančios komfortą ir sandarumą.
              </p>
              <p>
                Pacientai vertina aiškų bendravimą, skaidrią kainodarą ir nuoseklų gydymo procesą. Teigiami atsiliepimai dažnai pabrėžia profesionalų požiūrį, ramų procedūros atlikimą ir pasitikėjimą rezultatu. Tai leidžia Bangų odontologijos klinikai tapti patikimu pasirinkimu ieškantiems kokybiškos danties plombavimo paslaugos Klaipėdoje.
              </p>
            </div>

            <div className={whiteCard}>
              <h3 className="font-bold text-xl text-darkblue-700 mb-3">Kviečiame registruotis vizitui</h3>
              <p className="text-slate-600 mb-6 max-w-2xl">
                Jeigu pastebėjote danties pažeidimus, jautrumą ar skausmą, nelaukite. Laiku atliktas gydymas padeda išsaugoti dantis.
              </p>
              <p className="text-slate-600 mb-6 max-w-2xl">
                Bangų odontologijos klinikoje Jūsų laukia profesionali komanda, modernios technologijos ir individualus požiūris į kiekvieną pacientą. Užsiregistruokite vizitui ir pasirūpinkite savo dantų sveikata patikimai ir užtikrintai.
              </p>
              <Link to="/kontaktai" className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1">
                Registruotis vizitui
              </Link>
            </div>
          </motion.div>


        </div>
      </motion.div>
    </AnimatedSection>
  )
}