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
const sectionWrap = 'mb-12 scroll-mt-36 2xl:scroll-mt-24'
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

const tocSections = [
  { id: 'kainos', label: 'Kainos' },
  { id: 'kas-yra', label: 'Kas yra rentgenologiniai tyrimai?' },
  { id: 'paslaugu-tipai', label: 'Tyrimų rūšys' },
  { id: 'indikacijos', label: 'Kada reikalingas?' },
  { id: 'privalumai', label: 'Klinikos privalumai' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function RentgenologiniaiTyrimai() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/rentgenologiniai-tyrimai/#service",
    "name": "Rentgenologiniai tyrimai Klaipėdoje",
    "serviceType": "Rentgenologiniai tyrimai",
    "description": "Rentgenologinės diagnostikos paslaugos teikiamos Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekami dantų rentgeno tyrimai naudojant modernią skaitmeninę įrangą.",
    "url": "https://www.banguklinika.lt/paslaugos/rentgenologiniai-tyrimai/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Rentgenologiniai tyrimai Klaipėdoje - Bangų klinika"
        description="Rentgenologiniai tyrimai ir dantų rentgenas Klaipėdoje☑️moderni skaitmeninė įranga☑️tiksli diagnostika už kainą nuo 30€.⏩Registruokitės Bangų klinikoje jau dabar."
        keywords="rentgenologiniai tyrimai, dantu rentgenas, panoramine nuotrauka, kompiuterine tomografija, 3D CBCT, klaipeda"
        structuredData={structuredData}
      />

      <motion.div
        ref={pageRef}
        className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TableOfContents sections={tocSections} rootRef={pageRef} cta={{ label: 'Registruotis vizitui', to: '/kontaktai' }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Rentgenologiniai tyrimai Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Rentgenologiniai tyrimai yra neatsiejama tikslios odontologinės diagnostikos dalis. Jie leidžia gydytojui
                  pamatyti tai, kas nėra matoma įprastos apžiūros metu – danties šaknis, žandikaulio kaulo struktūrą, aplinkinius
                  audinius bei galimus paslėptus pažeidimus.
                </p>
                <p>
                  Bangų odontologijos klinika Klaipėdoje teikia rentgenologinės diagnostikos paslaugas naudodama modernią
                  skaitmeninę įrangą. Tai leidžia atlikti tyrimus greitai, saugiai ir su minimalia spinduliuotės doze, o gauti
                  vaizdai yra aiškūs ir tikslūs, todėl padeda gydytojui priimti pagrįstus sprendimus dėl tolimesnio gydymo.
                </p>
              </div>
            </div>

            <div className="flex justify-start mt-6">
              <Link
                to="/kontaktai"
                className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Registruotis vizitui
              </Link>
            </div>

            {/* KAINOS */}
            <motion.section id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Rentgenologinių tyrimų kainos
                    </h2>
                    <p className="text-slate-600">
                      Rentgenologinio tyrimo kaina priklauso nuo pasirinkto tyrimo tipo ir jo apimties. Tinkamiausią tyrimą
                      parenka gydytojas, atsižvelgdamas į klinikinį poreikį – ar tai būtų dantų skausmo priežasties nustatymas,
                      implantacijos planavimas ar ortodontinio gydymo vertinimas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Rentgenologiniai tyrimai</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Panoraminė rentgeno nuotrauka', '30 €'],
                        ['Kompiuterinė tomografo nuotrauka (3D)', '80 €'],
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
                  Tiksli rentgenologinio tyrimo Klaipėdoje kaina aptariama konsultacijos metu, atsižvelgiant į konkretų
                  klinikinį poreikį. Skaidri kainodara ir profesionalus požiūris leidžia pacientams jaustis užtikrintai ir
                  priimti informuotą sprendimą.
                </p>
              </div>
            </motion.section>
          </motion.header>

          {/* ═══════════════════════════════════════════════════════════════
              DOCTOR CTA
          ══════════════════════════════════════════════════════════════════ */}
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
                    src="/team/Jonas-light.jpg"
                    alt="Bangų odontologijos klinikos gydytojas"
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

          {/* KAS YRA RENTGENOLOGINIAI TYRIMAI */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra rentgenologiniai tyrimai?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Rentgenologiniai tyrimai – tai diagnostikos metodai, leidžiantys gauti vaizdą apie dantų, jų šaknų ir
                  žandikaulio kaulo struktūrą. Šie tyrimai atskleidžia informaciją, kurios nepavyksta pastebėti įprastos
                  vizualinės apžiūros metu, todėl jie yra svarbi tikslios diagnostikos dalis.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje rentgenologiniai tyrimai atliekami naudojant modernią skaitmeninę
                  įrangą, kuri užtikrina aiškius, tikslius vaizdus ir minimalią spinduliuotės dozę. Priklausomai nuo klinikinio
                  poreikio, gydytojas parenka tinkamiausią tyrimo tipą – nuo vieno danties nuotraukos iki trimatės kaulo
                  struktūros vizualizacijos.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PASLAUGŲ TIPAI */}
          <motion.section id="paslaugu-tipai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Rentgenologinių tyrimų rūšys</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Klinika atlieka įvairius rentgenologinių tyrimų tipus, kurie parenkami priklausomai nuo konkretaus klinikinio
                poreikio ir gydymo plano.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Dentalinės nuotraukos</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Vieno ar kelių dantų vaizdas, leidžiantis įvertinti šaknų kanalus, jų būklę bei aplinkinius audinius. Šis
                    tyrimas dažniausiai atliekamas tikslinei konkretaus danties problemai įvertinti.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Panoraminės nuotraukos</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Bendras žandikaulio vaizdas, apimantis visus dantis, jų šaknis ir kaulo struktūrą. Tokia nuotrauka
                    suteikia platų vaizdą apie bendrą burnos ertmės būklę.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">3D kompiuterinė tomografija (CBCT)</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Trimatis kaulo struktūros vertinimas, suteikiantis itin tikslią informaciją apie žandikaulio kaulo tankį,
                    formą ir tūrį. Šis tyrimas ypač naudingas planuojant sudėtingesnes procedūras.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Cefalometriniai tyrimai</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Specializuotas tyrimas, atliekamas ortodontiniam gydymui, leidžiantis įvertinti veido kaulų ir žandikaulių
                    tarpusavio santykį bei suplanuoti tikslų gydymo eigą.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Intraoralinis skenavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Skaitmeninis dantų modeliavimas, kurio metu sukuriamas tikslus, be klasikinių atspaudų gaunamas dantų ir
                    dantenų vaizdas, naudojamas tolimesniam gydymo planavimui.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* INDIKACIJOS */}
          <motion.section id="indikacijos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada reikalingas rentgenologinis tyrimas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Rentgenologinis tyrimas skiriamas tuomet, kai gydytojui reikalinga papildoma informacija, kurios nepavyksta
                gauti įprastos klinikinės apžiūros metu. Tyrimai atliekami šiais atvejais:
              </p>

              <div className="grid gap-3">
                {[
                  'jaučiamas dantų skausmas, kurio priežastis nėra aiški iš išorinės apžiūros',
                  'planuojama implantacija ir reikalingas tikslus žandikaulio kaulo įvertinimas',
                  'atliekamas ortodontinis gydymas, kuriam būtinas tikslus dantų ir žandikaulių santykio vertinimas',
                  'planuojamas dantų šalinimas ir reikia įvertinti šaknų padėtį bei formą',
                  'reikia įvertinti traumos pasekmes dantims, dantenoms ar žandikaulio kaului',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    <span className="text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* PRIVALUMAI */}
          <motion.section id="privalumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Klinikos privalumai</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bangų odontologijos klinika pabrėžia kompleksišką požiūrį į diagnostiką, derindama rentgenologinių tyrimų
                  duomenis su klinikine apžiūra. Toks derinys leidžia gydytojui susidaryti pilną vaizdą apie paciento burnos
                  sveikatą ir priimti pagrįstus sprendimus dėl tolimesnio gydymo.
                </p>
                <p>
                  Tyrimas atliekamas greitai, saugiai ir su minimalia spinduliuotės doze, todėl pacientai gali jaustis ramūs
                  dėl procedūros saugumo. Naudojama moderni skaitmeninė įranga užtikrina aiškius ir tikslius vaizdus, o rezultatai
                  gaunami itin operatyviai, sudarant sąlygas greitam ir efektyviam gydymo planavimui.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Renkantis rentgenologinius tyrimus svarbu ne tik pati procedūra, bet ir tai, kaip tiksliai bei saugiai ji
                  atliekama. Bangų odontologijos klinikoje diagnostika atliekama atsakingai, siekiant maksimaliai apsaugoti
                  paciento sveikatą ir suteikti tikslią informaciją tolimesniam gydymui.
                </p>
                <p>
                  Klinikoje dirbantys specialistai kiekvieną atvejį vertina individualiai, parenka tinkamiausią tyrimo tipą ir
                  derina gautus duomenis su klininiu vertinimu. Naudojama moderni skaitmeninė įranga leidžia atlikti tyrimus
                  greitai ir su minimalia spinduliuotės doze, nepakenkiant tyrimo tikslumui.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, aiškų situacijos paaiškinimą ir rūpestingą požiūrį viso vizito
                  metu. Todėl ieškantiems patikimų rentgenologinių tyrimų Klaipėdoje, Bangų odontologijos klinika yra patikimas
                  pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis rentgenologiniam tyrimui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu Jums reikalingas rentgenologinis tyrimas – ar tai būtų dantų skausmo priežasties nustatymas,
                  implantacijos planavimas ar ortodontinio gydymo vertinimas – kviečiame registruotis konsultacijai Bangų
                  odontologijos klinikoje. Vizito metu bus parinktas tinkamiausias tyrimo tipas ir aptarti tolimesni žingsniai.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad diagnostika būtų tiksli, greita ir kuo mažiau varginanti
                  pacientą. Čia Jūsų laukia patyrę specialistai, moderni skaitmeninė įranga ir rūpestingas požiūris į kiekvieną
                  pacientą.
                </p>
                <p>
                  Registruokitės rentgenologiniam tyrimui ir pasirūpinkite savo burnos sveikata laiku bei profesionaliai.
                </p>
              </div>

              <Link
                to="/kontaktai"
                className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Registruotis vizitui
              </Link>
            </div>
          </motion.div>


        </div>
      </motion.div>
    </AnimatedSection>
  )
}
