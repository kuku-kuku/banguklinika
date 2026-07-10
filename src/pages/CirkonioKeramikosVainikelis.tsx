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
  { id: 'kas-yra', label: 'Kas yra cirkonio keramikos vainikėlis?' },
  { id: 'reikalingumas', label: 'Kada reikalingas?' },
  { id: 'privalumai', label: 'Kodėl rinktis cirkonio keramiką?' },
  { id: 'procesas', label: 'Kaip vyksta procedūra?' },
  { id: 'trukme', label: 'Kiek laiko tarnauja?' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function CirkonioKeramikosVainikelis() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/cirkonio-keramikos-vainikelis/#service",
    "name": "Cirkonio keramikos vainikėlis Klaipėdoje",
    "serviceType": "Cirkonio keramikos vainikėlis",
    "description": "Cirkonio keramikos vainikėlių gamybos ir pritaikymo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atkuriami pažeisti ar estetiškai netinkami dantys pacientams Klaipėdos mieste.",
    "url": "https://www.banguklinika.lt/paslaugos/cirkonio-keramikos-vainikelis/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Cirkonio keramikos vainikėlis Klaipėdoje - Bangų klinika"
        description="Cirkonio keramikos vainikėlis Klaipėdoje – natūrali išvaizda☑️tvirtumas☑️kaina nuo 400€.⏩Registruokitės konsultacijai Bangų klinikoje jau šiandien."
        keywords="cirkonio keramikos vainikelis, cirkonio vainikelis, dantu karunele, klaipeda"
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
              Cirkonio keramikos vainikėlis Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Pažeistas, nusilpęs ar estetiškai pakitęs dantis gali turėti įtakos ne tik šypsenos išvaizdai,
                  bet ir kasdieniam komfortui. Kai danties audinių nepakanka patikimam atkūrimui plomba, o norima
                  išsaugoti jo funkciją, formą ir natūralų vaizdą, vienas dažniausiai pasirenkamų sprendimų yra
                  cirkonio keramikos vainikėlis. Tai tvirtas, estetiškas ir šiuolaikinėje odontologijoje plačiai
                  naudojamas danties atkūrimo būdas.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje dantų atkūrimas vainikėliais planuojamas individualiai,
                  įvertinus paciento burnos būklę, sąkandį, danties pažeidimo mastą ir estetinius lūkesčius. Gydymo
                  tikslas – ne tik atkurti gražią šypseną, bet ir užtikrinti, kad dantis būtų funkcionalus, patogus
                  kramtymui ir ilgainiui tarnautų stabiliai. Tinkamai parinkta cirkonio keramika leidžia suderinti
                  tvirtumą, natūralų vaizdą ir ilgalaikį rezultatą.
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
                      Cirkonio keramikos vainikėlio kainos
                    </h2>
                    <p className="text-slate-600">
                      Konkretūs tarifai aptariami individualiai konsultacijos metu, atsižvelgiant į specifinę situaciją.
                      Prieš atliekant procedūrą visuomet atliekama apžiūra, kurios metu įvertinama danties būklė ir parenkamas
                      tinkamiausias sprendimas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Cirkonio keramikos vainikėlis</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Vainikėlis ant danties', '400 €'],
                        ['Vainikėlis ant implanto', '450 €'],
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
                  Paruošiamieji darbai, tokie kaip vainiko atstatymas, danties šlifavimas ar atspaudų ėmimas, skaičiuojami atskirai.
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
                <div className="relative aspect-[4/5] bg-sky-50">
                  <div className="pt-[125%]" />
                  <img
                    src="/team/Jonas-light.jpg"
                    alt="Bangų odontologijos klinikos gydytojas"
                    className="absolute inset-0 w-full h-full object-contain"
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

          {/* KAS YRA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra cirkonio keramikos vainikėlis?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Cirkonio keramikos vainikėlis – tai individualiai pagaminta danties restauracija, kuri uždengia
                  pažeistą, nusilpusį ar estetiškai netinkamą dantį ir atkuria jo formą, spalvą, tvirtumą bei
                  kramtymo funkciją. Vainikėlis gali būti tvirtinamas ant paruošto natūralaus danties arba, tam
                  tikrais atvejais, ant implanto.
                </p>
                <p>
                  Šiuolaikinėje odontologijoje cirkonio oksido keramika vertinama dėl savo patvarumo, tikslumo ir
                  estetikos. Tai bemetalė medžiaga, todėl cirkonio oksido keramikos vainikėlis neturi metalinio
                  karkaso ir atrodo natūraliau, ypač ties dantenų kraštu. Dėl šios priežasties jis dažnai
                  pasirenkamas tiek priekinių, tiek šoninių dantų atkūrimui.
                </p>
                <p>
                  Pacientai šią restauraciją kartais vadina cirkonio karūnėlėmis arba cirkonio dantų karūnėlėmis.
                  Kasdienėje kalboje šie terminai vartojami gana dažnai, tačiau odontologijoje tikslesnis
                  pavadinimas yra cirkonio keramikos vainikėlis. Nepriklausomai nuo vartojamo termino, kalbama apie
                  individualiai pritaikytą restauraciją, kurios tikslas – atkurti danties funkciją, estetiką ir
                  apsaugoti likusius danties audinius.
                </p>
                <p>
                  Cirkonio keramikos vainikėliai gaminami atsižvelgiant į paciento dantų formą, spalvą, sąkandį ir
                  bendrą šypsenos vaizdą. Tinkamai pritaikytas vainikėlis vizualiai dera prie kitų dantų, nekelia
                  diskomforto ir leidžia pacientui patogiai kramtyti, kalbėti bei šypsotis.
                </p>
              </div>
            </div>
          </motion.section>

          {/* REIKALINGUMAS */}
          <motion.section id="reikalingumas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada reikalingas cirkonio keramikos vainikėlis?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Cirkonio keramikos vainikėlis rekomenduojamas tada, kai natūralaus danties audinių nepakanka
                patikimam ir ilgalaikiam atkūrimui paprasta plomba. Tokiais atvejais vainikėlis padeda apsaugoti
                likusią danties struktūrą, atkurti jo funkciją ir sumažinti tolimesnio skilimo ar lūžio riziką.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Cirkonio keramikos vainikėlis gali būti reikalingas, kai:</h3>
                <div className="grid gap-3">
                  {[
                    'dantis yra stipriai pažeistas ėduonies ar traumos',
                    'dantis yra nulūžęs, įskilęs ar stipriai nusidėvėjęs',
                    'po šaknų kanalų gydymo dantis tapo silpnesnis',
                    'yra didelė sena plomba, kuri nebeužtikrina stabilumo',
                    'reikia atkurti danties formą, spalvą ar estetinį vaizdą',
                    'atkuriamas dantis ant implanto',
                    'seni vainikėliai nebeatitinka funkcinių ar estetinių poreikių',
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

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Svarbu suprasti, kad kiekvienas atvejis vertinamas individualiai. Kartais pacientui gali pakakti
                  įkloto, užkloto ar kito mažiau invazyvaus sprendimo, o kitais atvejais cirkonio oksido keramikos
                  vainikėlis yra saugiausias ir ilgaamžiškiausias pasirinkimas. Todėl prieš pradedant gydymą
                  atliekama apžiūra, įvertinama danties būklė ir aptariamos visos galimos alternatyvos.
                </p>
                <p>
                  Laiku pasirinktas tinkamas danties atkūrimo būdas padeda išvengti sudėtingesnių problemų
                  ateityje. Jei silpnas ar stipriai pažeistas dantis ilgą laiką paliekamas neatkurtas, gali didėti
                  jo skilimo, infekcijos ar net pašalinimo rizika. Tinkamai suplanuotas vainikėlis padeda išsaugoti
                  dantį ir užtikrinti stabilesnę burnos sveikatą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIVALUMAI */}
          <motion.section id="privalumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kodėl verta rinktis cirkonio keramiką?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Cirkonio keramika yra viena pažangiausių medžiagų, naudojamų šiuolaikiniame dantų protezavime.
                  Ji pasižymi dideliu tvirtumu, atsparumu nusidėvėjimui ir estetišku vaizdu, todėl tinka
                  pacientams, kurie ieško patikimo ilgalaikio sprendimo.
                </p>
                <p>
                  Vienas svarbiausių cirkonio keramikos privalumų – natūrali išvaizda. Cirkonio oksido keramika
                  leidžia atkurti danties formą ir spalvą taip, kad restauracija harmoningai derėtų prie kitų
                  dantų. Tai ypač aktualu atkuriant priekinius ar šypsenos zonoje esančius dantis, kur estetinis
                  tikslumas yra labai svarbus.
                </p>
                <p>
                  Lyginant su metalo keramika, cirkonio keramikos vainikėlis neturi metalinio karkaso, todėl ties
                  dantenomis neatsiranda pilkšvo kraštelio. Tai leidžia pasiekti natūralesnį estetinį rezultatą ir
                  išvengti vizualinio kontrasto, kuris kartais pastebimas naudojant senesnio tipo restauracijas.
                </p>
                <p>
                  Cirkonio oksido keramika taip pat yra biologiškai suderinama, todėl gerai toleruojama burnos
                  audinių. Tinkamai pagamintas ir pritaikytas vainikėlis yra lygus, tiksliai priglunda prie danties
                  ir padeda sumažinti apnašų kaupimosi riziką. Dėl šių savybių cirkonio karūnėlės dažnai
                  pasirenkamos pacientų, kuriems svarbu ne tik gražus rezultatas, bet ir patogumas kasdienėje
                  burnos priežiūroje.
                </p>
                <p>
                  Ši medžiaga tinka tiek pavieniams vainikėliams, tiek sudėtingesniems protezavimo sprendimams. Ji
                  gali būti naudojama atkuriant priekinius dantis, kuriems svarbiausia estetika, ir krūminius
                  dantis, kuriems tenka didesnis kramtymo krūvis. Tinkamai parinkta restauracija padeda suderinti
                  estetinį vaizdą, funkcionalumą ir ilgalaikį patvarumą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip gaminamas ir uždedamas cirkonio keramikos vainikėlis?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Cirkonio keramikos vainikėlio gamyba ir pritaikymas Bangų odontologijos klinikoje atliekami pagal
                aiškią, pacientui suprantamą eigą. Kiekvienas etapas svarbus tam, kad galutinis rezultatas būtų
                tikslus, patogus ir ilgaamžis.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Diagnostika ir gydymo plano sudarymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atliekama klinikinė apžiūra, įvertinama danties būklė, sąkandis, aplinkiniai audiniai ir
                    paciento lūkesčiai. Aptariama, ar konkrečiu atveju tinkamiausias sprendimas yra cirkonio
                    keramikos vainikėlis.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Danties paruošimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pašalinami pažeisti ar nepatikimi audiniai, dantis suformuojamas taip, kad vainikėlis galėtų
                    tiksliai priglusti. Procedūros metu taikoma vietinė nejautra, todėl pacientas nejaučia skausmo.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Skaitmeninis skenavimas arba atspaudas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Paruošus dantį, užfiksuojama tiksli jo forma naudojant skaitmeninį skenavimą arba tradicinį
                    atspaudą. Tikslūs duomenys leidžia pagaminti individualų vainikėlį.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Vainikėlio gamyba</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagal surinktus duomenis gaminamas cirkonio oksido keramikos vainikėlis. Jo spalva, forma ir
                    dydis parenkami taip, kad restauracija harmoningai derėtų prie kitų dantų.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pritaikymas, fiksavimas ir rekomendacijos</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagamintas vainikėlis pamatuojamas, įvertinamas jo prigludimas, spalva ir paciento pojūtis.
                    Po fiksavimo pacientui paaiškinama, kaip prižiūrėti restauraciją ir kada atvykti apžiūrai.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* TRUKME */}
          <motion.section id="trukme" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kiek laiko tarnauja cirkonio keramikos vainikėlis?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Cirkonio keramikos vainikėlio tarnavimo laikas priklauso nuo kelių svarbių veiksnių: danties
                  būklės, restauracijos tikslumo, sąkandžio, paciento burnos higienos įpročių ir reguliarios
                  profilaktinės priežiūros. Tinkamai pagamintas ir prižiūrimas vainikėlis gali tarnauti daugelį
                  metų.
                </p>
                <p>
                  Cirkonio karūnėlės priežiūra nėra sudėtinga, tačiau ji turi būti nuosekli. Vainikėlį, kaip ir
                  natūralius dantis, reikia valyti du kartus per dieną, naudoti tarpdančių siūlą, tarpdančių
                  šepetėlius ar kitas specialisto rekomenduotas priemones. Taip pat svarbu reguliariai atlikti
                  profesionalią burnos higieną ir profilaktinius patikrinimus.
                </p>
                <p>
                  Nors cirkonio keramika yra tvirta ir atspari, svarbu vengti žalingų įpročių, pavyzdžiui, dantimis
                  nekramtyti labai kietų daiktų, neatidarinėti pakuočių ar nekąsti nagų. Jei pacientas griežia
                  dantimis, gali būti rekomenduojama apsauginė kapa nakčiai, padedanti sumažinti vainikėlio ir
                  natūralių dantų apkrovą.
                </p>
                <p>
                  Tiksli cirkonio keramikos vainikėlio kaina priklauso nuo individualios situacijos – danties
                  paruošimo, papildomo gydymo poreikio, vainikėlio tipo ir pasirinktos technologijos. Galutinė
                  kaina aptariama konsultacijos metu, kai įvertinama konkreti klinikinė situacija ir sudaromas
                  aiškus gydymo planas. Laikantis odontologo rekomendacijų, cirkonio keramikos vainikėlis išlieka
                  stabilus, estetiškas ir patogus kasdienėje veikloje.
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
                  Renkantis cirkonio keramikos vainikėlį svarbu ne tik estetiškas galutinis rezultatas, bet ir
                  visas danties atkūrimo procesas – nuo pirmos konsultacijos iki galutinio vainikėlio pritaikymo.
                  Bangų odontologijos klinikoje Klaipėdoje dantų atkūrimas atliekamas taikant šiuolaikinius,
                  pacientui patogius sprendimus, leidžiančius suderinti natūralų vaizdą, tvirtumą ir ilgalaikį
                  funkcionalumą.
                </p>
                <p>
                  Klinikoje didelis dėmesys skiriamas individualiam planavimui. Prieš pradedant gydymą įvertinama
                  danties būklė, sąkandis, aplinkiniai audiniai ir paciento lūkesčiai. Toks požiūris leidžia
                  aiškiai suprasti, ar cirkonio keramikos vainikėlis yra tinkamiausias sprendimas, ir priimti
                  informuotą sprendimą dėl gydymo.
                </p>
                <p>
                  Bangų odontologijos klinikoje specialistai skiria laiko paciento klausimams, aiškiai paaiškina
                  kiekvieną gydymo etapą ir užtikrina atsakingą požiūrį į ilgalaikį rezultatą. Pacientai vertina
                  profesionalų bendravimą, komfortą procedūros metu ir natūraliai atrodantį galutinį rezultatą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis cirkonio keramikos vainikėliui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu ieškote patikimo sprendimo pažeistam ar estetiškai netinkamam dančiui atkurti, kviečiame registruotis
                  konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta Jūsų burnos būklė, aptartos gydymo
                  galimybės ir, esant poreikiui, suplanuota cirkonio keramikos vainikėlio gamyba.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad kiekvienas pacientas gautų tvirtą, natūraliai atrodantį ir ilgai
                  tarnaujantį rezultatą. Čia Jūsų laukia patyrę specialistai, moderni įranga ir rūpestingas požiūris į
                  kiekvieną pacientą.
                </p>
                <p>
                  Registruokitės cirkonio keramikos vainikėliui ir pasirūpinkite savo šypsena laiku bei profesionaliai.
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
