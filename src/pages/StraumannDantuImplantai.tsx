import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { TableOfContents } from '../components/TableOfContents'
import { useRef } from 'react'
import ReviewsCarousel from '../components/ReviewsCarousel'

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

const sectionWrap = 'mb-12 scroll-mt-36 2xl:scroll-mt-24'
const whiteCard = 'bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft'
const innerCard = 'bg-white p-5 rounded-xl border border-slate-200 shadow-sm'

const P  = '#002045'
const S  = '#006b5f'
const SL = '#ecf5fb'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const tocSections = [
  { id: 'kainos', label: 'Kainos' },
  { id: 'kas-yra', label: 'Kas yra STRAUMANN implantai?' },
  { id: 'kada-rekomenduojami', label: 'Kada rekomenduojami?' },
  { id: 'privalumai', label: 'Sistemos privalumai' },
  { id: 'procesas', label: 'Kaip atliekama implantacija?' },
  { id: 'trukme', label: 'Gijimo trukmė' },
  { id: 'prieziura', label: 'Priežiūra po gydymo' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function StraumannDantuImplantai() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/straumann-dantu-implantai/#service",
    "name": "STRAUMANN dantų implantai Klaipėdoje",
    "serviceType": "STRAUMANN dantų implantai",
    "description": "Dantų implantacija STRAUMANN implantų sistema Bangų odontologijos klinikoje Klaipėdoje.",
    "url": "https://www.banguklinika.lt/paslaugos/straumann-dantu-implantai/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="STRAUMANN dantų implantai Klaipėdoje - Bangų klinika"
        description="STRAUMANN dantų implantai Klaipėdoje – Šveicariška implantų sistema Bangų odontologijos klinikoje. Implantas nuo 650€.⏩Registruokitės konsultacijai jau šiandien."
        keywords="straumann implantai, dantu implantai, sveicariski implantai, implantacija, klaipeda"
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
              STRAUMANN dantų implantai Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Praradus vieną ar kelis dantis, keičiasi ne tik šypsenos estetika, bet ir kasdienė burnos funkcija.
                  Gali tapti sunkiau kramtyti, aiškiai kalbėti, o likusiems dantims tenka didesnė apkrova. Ilgainiui
                  gretimi dantys gali pradėti krypti į atsiradusią tuščią vietą, keistis sąkandis ir mažėti žandikaulio
                  kaulo tūris, todėl prarastus dantis svarbu atkurti laiku.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje implantacijai naudojami STRAUMANN dantų implantai. Gydymas
                  planuojamas individualiai, įvertinus trūkstamų dantų skaičių, žandikaulio kaulo ir dantenų būklę,
                  sąkandį, bendrą paciento sveikatą bei būsimo protezavimo galimybes. Dėmesys skiriamas ne tik implanto
                  įsriegimui, bet ir visam gydymo procesui – nuo diagnostikos bei tinkamo implanto parinkimo iki
                  galutinio danties atkūrimo ir ilgalaikės priežiūros.
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
                      STRAUMANN dantų implantų kainos
                    </h2>
                    <p className="text-slate-600">
                      STRAUMANN implantų kaina priklauso nuo implantų skaičiaus, naudojamų komponentų, diagnostikos,
                      chirurginės procedūros, kaulo atkūrimo poreikio ir būsimo protezo tipo. Tiksli gydymo apimtis,
                      trukmė ir kaina nustatomos konsultacijos metu.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>STRAUMANN implantai</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['STRAUMANN implantas (tik implantas)', '650 €'],
                      ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between items-center py-2.5">
                          <span className="text-slate-600 text-sm">{name}</span>
                          <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-500 text-xs mt-4">
                      Kainoje – tik pats implantas. Protezinė atrama, vainikėlis, chirurginė procedūra ir kitos
                      paslaugos kainuoja papildomai.
                    </p>
                  </div>
                </div>

                <p className="text-slate-500 text-sm mt-6">
                  Tiksli STRAUMANN implantacijos Klaipėdoje kaina aptariama individualios konsultacijos metu,
                  atsižvelgiant į konkrečią klinikinę situaciją.
                </p>
              </div>
            </motion.section>
          </motion.header>

          {/* DOCTOR CTA */}
          <motion.div className="mt-8 mb-12" variants={item}>
            <div className="bg-white rounded-[28px] border border-sky-200 shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[5fr_4fr] gap-0 items-stretch">
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-700 mb-4">
                    Kviečiame registruotis konsultacijai Bangų klinikoje
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Jeigu turite klausimų ar norite sužinoti daugiau apie gydymo galimybes, kviečiame registruotis
                    konsultacijai Bangų odontologijos klinikoje. Vizito metu įvertinsime Jūsų burnos būklę, atsakysime
                    į rūpimus klausimus ir padėsime suprasti visą gydymo eigą.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų odontologijos klinikoje siekiame, kad kiekvienas pacientas jaustųsi užtikrintai – nuo pirmosios
                    konsultacijos iki galutinio rezultato. Registruokitės ir ženkite pirmą žingsnį link sveikos šypsenos.
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
                <div className="relative aspect-[4/5] bg-sky-50">                  <img
                    src="/team/Jonas-light.jpg"
                    alt="Bangų odontologijos klinikos gydytojas"
                    className="absolute inset-0 w-full h-full object-contain"
                  loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_15%)] hidden lg:block" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* REVIEWS */}
          <motion.div className="mb-10 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          {/* KAS YRA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra STRAUMANN dantų implantai?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų implantas – tai į žandikaulio kaulą įsriegiamas elementas, atliekantis prarasto danties šaknies
                  atramos funkciją. Pats implantas nėra matoma dirbtinio danties dalis. Galutinį atkūrimą sudaro
                  implantas, protezinė atrama ir ant jos tvirtinamas individualiai pagamintas vainikėlis, tiltas ar
                  kita protezinė konstrukcija.
                </p>
                <p>
                  Po implantacijos vyksta osteointegracija – biologinis procesas, kurio metu aplink implanto paviršių
                  formuojasi kaulinis kontaktas. Taip sukuriamas stabilus pagrindas būsimai restauracijai. Gydymo
                  rezultatui svarbi ne tik implanto sistema, bet ir tiksli jo padėtis, kaulo bei minkštųjų audinių
                  būklė, sąkandžio apkrova, protezo pritaikymas ir paciento burnos higiena.
                </p>
                <p>
                  STRAUMANN – Šveicarijoje sukurta implantų sistema, apimanti skirtingų konstrukcijų, dydžių, medžiagų
                  ir paviršių implantus bei protezavimo komponentus. Platus pasirinkimas leidžia gydytojui parinkti
                  sprendimą pagal trūkstamo danties vietą, žandikaulio anatomiją ir planuojamą protezą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REKOMENDUOJAMI */}
          <motion.section id="kada-rekomenduojami" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada rekomenduojami STRAUMANN dantų implantai?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                STRAUMANN implantai gali būti svarstomi tada, kai reikia atkurti vieną, kelis ar daugiau prarastų dantų.
                Implantacija padeda sukurti stabilų pagrindą protezinei konstrukcijai, atkurti kramtymo funkciją ir
                išlaikyti dantų lanko vientisumą.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Dantų implantacija gali būti rekomenduojama, kai:</h3>

                <div className="grid gap-3">
                  {[
                    'trūksta vieno danties ir norima išvengti gretimų sveikų dantų šlifavimo',
                    'prarasti keli šalia esantys dantys',
                    'reikalinga atrama dantų tiltui',
                    'išimamas protezas nėra pakankamai stabilus',
                    'prarasta dauguma arba visi vieno žandikaulio dantys',
                    'po danties pašalinimo planuojamas ilgalaikis jo atkūrimas',
                    'siekiama atkurti kramtymo funkciją ir sąkandžio stabilumą'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Net ir vieno danties trūkumas ilgainiui gali turėti įtakos visai dantų sistemai. Greta esantys dantys
                  gali pradėti krypti į tuščią vietą, o priešingo žandikaulio dantis – slinkti prarasto danties kryptimi.
                  Dėl to gali keistis sąkandis, atsirasti sunkiau išvalomų vietų ir netolygiai pasiskirstyti kramtymo
                  krūvis.
                </p>
                <p>
                  Danties netekimo vietoje kaulas nebegauna įprastos apkrovos, todėl laikui bėgant jo tūris gali
                  mažėti. Kuo ilgiau dantis neatkuriamas, tuo sudėtingesnis gali tapti vėlesnis implantacijos
                  planavimas.
                </p>
                <p>
                  Implantacija nėra automatiškai tinkama kiekvienam pacientui. Prieš gydymą vertinama burnos higiena,
                  dantenų sveikata, kaulo tūris ir kokybė, sąkandis, rūkymo įpročiai, vartojami vaistai bei bendra
                  sveikatos būklė. Jei burnoje yra aktyvių uždegimų ar kitų negydytų problemų, pirmiausia gali būti
                  rekomenduojamas paruošiamasis gydymas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIVALUMAI */}
          <motion.section id="privalumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokiais privalumais pasižymi STRAUMANN implantų sistema?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                STRAUMANN implantų sistema pasižymi skirtingų chirurginių ir protezavimo sprendimų pasirinkimu. Tai
                leidžia gydymą pritaikyti pagal konkrečią žandikaulio anatomiją, kaulo būklę, trūkstamų dantų skaičių
                ir būsimos restauracijos tipą.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Platus implantų pasirinkimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    STRAUMANN sistemoje siūlomi skirtingų konstrukcijų, ilgių ir skersmenų implantai. Gydytojas gali
                    rinktis kaulo arba minkštųjų audinių lygyje tvirtinamus sprendimus ir pritaikyti juos pagal
                    operuojamos vietos anatomiją bei planuojamą protezavimo būdą.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">„Roxolid“ medžiaga</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dalis STRAUMANN implantų gaminama iš „Roxolid“ – titano ir cirkonio lydinio. Ši medžiaga pasižymi
                    didesniu mechaniniu atsparumu nei grynas titanas ir gali būti naudinga tais atvejais, kai svarstomi
                    mažesnio skersmens implantai ar gydomos anatomiškai ribotos vietos.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">„SLActive“ paviršius</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    „SLActive“ yra hidrofilinis STRAUMANN implanto paviršius, sukurtas sąveikai su biologiniais
                    skysčiais ir osteointegracijos procesui palaikyti. Jis gali būti naudojamas planuojant skirtingus
                    gijimo ir apkrovimo protokolus.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Protezavimo galimybių įvairovė</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    STRAUMANN sistema apima implantus ir skirtingus protezavimo komponentus. Ant implantų gali būti
                    tvirtinami pavieniai vainikėliai, tiltai ar didesnės apimties konstrukcijos. Gydymas planuojamas
                    nuo galutinio rezultato, todėl implanto padėtis parenkama atsižvelgiant į būsimo protezo funkciją
                    ir estetiką.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip atliekama dantų implantacija STRAUMANN implantais?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų implantacija Bangų odontologijos klinikoje atliekama nuosekliai, siekiant tiksliai suplanuoti
                implanto padėtį, sudaryti tinkamas gijimo sąlygas ir paruošti stabilų pagrindą būsimam protezui.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultacija ir diagnostika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pirmiausia įvertinama bendra burnos būklė, likę dantys, dantenos, sąkandis ir trūkstamo danties
                    vieta. Atliekami reikalingi radiologiniai tyrimai, padedantys nustatyti kaulo aukštį, plotį ir šalia
                    esančias anatomines struktūras. Taip pat aptariama paciento sveikata, vartojami vaistai ir
                    ankstesnis gydymas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Individualaus gydymo plano sudarymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Remiantis diagnostikos duomenimis, parenkamas implantacijos būdas, STRAUMANN implanto tipas, dydis
                    ir planuojama padėtis. Pacientui paaiškinama gydymo eiga, galimos alternatyvos, papildomų procedūrų
                    poreikis, preliminari trukmė ir kaina.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Implantacijos vietos paruošimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Jei trūkstamas dantis jau pašalintas, žandikaulio kaule paruošiama implantui suplanuota vieta. Kai
                    kuriais atvejais implantas gali būti įsriegiamas iš karto po danties pašalinimo. Tam būtinas
                    pakankamas kaulo kiekis ir galimybė užtikrinti implanto stabilumą. Jei kaulo nepakanka, prieš
                    implantaciją arba jos metu gali būti atliekama kaulo augmentacija.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">STRAUMANN implanto įsriegimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Procedūros metu taikoma vietinė nejautra. Paruoštoje vietoje įsriegiamas suplanuotas implantas ir
                    įvertinamas jo pirminis stabilumas. Atsižvelgiant į gydymo planą, implantas gali būti paliekamas
                    gyti po dantenomis arba prie jo pritvirtinama gijimo atrama.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gijimas ir osteointegracija</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Po implantacijos prasideda implanto integracija į žandikaulio kaulą. Gijimo laikotarpiu svarbu
                    laikytis gydytojo rekomendacijų, prižiūrėti burnos higieną ir atvykti kontroliniams vizitams.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">06</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Protezavimas ant implanto</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kai implantas pakankamai stabiliai integruojasi, atliekamas skaitmeninis skenavimas arba atspaudai.
                    Pagal juos gaminama individuali protezinė konstrukcija. Galutinio pritaikymo metu vertinama
                    restauracijos forma, spalva, kontaktas su gretimais dantimis, sąkandis ir paciento pojūtis.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* TRUKMĖ */}
          <motion.section id="trukme" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kiek laiko prigyja implantas ir nuo ko priklauso gydymo trukmė?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Implanto gijimo ir viso gydymo trukmė kiekvienam pacientui skiriasi. Jai įtakos turi implantacijos
                  vieta, kaulo tankis ir tūris, implanto pirminis stabilumas, chirurginės procedūros apimtis, kaulo
                  augmentacijos poreikis, burnos higiena ir bendra sveikatos būklė.
                </p>
                <p>
                  Kai kuriais atvejais gali būti atliekama momentinė implantacija – implantas įsriegiamas iš karto po
                  danties pašalinimo. Esant tinkamam pirminiam stabilumui ir palankioms klinikinėms sąlygoms, tą pačią
                  dieną gali būti pritvirtinama laikina restauracija.
                </p>
                <p>
                  Svarbu atskirti momentinį implanto įsriegimą, laikino vainikėlio pritvirtinimą ir galutinį
                  protezavimą. Net jei po procedūros pritvirtinamas laikinas dantis, biologinis implanto gijimas kaulo
                  viduje tebevyksta. Šiuo laikotarpiu restauracija turi būti saugoma nuo per didelės kramtymo apkrovos.
                </p>
                <p>
                  Nuolatinio vainikėlio tvirtinimo laikas priklauso nuo implanto stabilumo, kaulo bei minkštųjų audinių
                  gijimo ir pasirinkto gydymo protokolo. Jei atliekama kaulo augmentacija ar kitos papildomos
                  procedūros, gydymo procesas gali būti ilgesnis.
                </p>
                <p>
                  STRAUMANN implantų kaina priklauso nuo implantų skaičiaus, naudojamų komponentų, diagnostikos,
                  chirurginės procedūros, kaulo atkūrimo poreikio ir būsimo protezo tipo. Tiksli gydymo apimtis, trukmė
                  ir kaina nustatomos konsultacijos metu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIEŽIŪRA */}
          <motion.section id="prieziura" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip prižiūrėti STRAUMANN dantų implantus po gydymo?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Implantai nėra pažeidžiami ėduonies taip, kaip natūralūs dantys, tačiau aplink juos gali kauptis
                  apnašos ir vystytis minkštųjų bei kaulinių audinių uždegimas. Todėl implantams ir ant jų
                  pritvirtintiems protezams reikalinga nuosekli priežiūra.
                </p>
                <p>
                  Po chirurginės procedūros svarbu laikytis gydytojo pateiktų rekomendacijų. Pirmosiomis dienomis gali
                  būti patariama vengti intensyvaus fizinio krūvio, karšto ar kieto maisto ir mechaninio operuotos
                  vietos dirginimo. Vaistus ir burnos priežiūros priemones reikėtų naudoti tik taip, kaip nurodyta.
                </p>
                <p>
                  Sugijus audiniams, implantą ir protezinę konstrukciją reikia valyti du kartus per dieną. Ypač svarbu
                  pašalinti apnašas ties dantenų kraštu ir tarpdančiuose. Priklausomai nuo restauracijos konstrukcijos,
                  gali būti rekomenduojami tarpdančių šepetėliai, specialus siūlas ar kitos individualiai parinktos
                  priemonės.
                </p>
                <p>
                  Reguliarūs profilaktiniai vizitai leidžia įvertinti dantenų būklę, protezo stabilumą, sąkandžio
                  apkrovą ir higienos kokybę. Jei atsiranda kraujavimas, patinimas, skausmas, nemalonus skonis ar
                  protezo judėjimas, reikėtų kreiptis į kliniką.
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
                  Renkantis dantų implantacijos paslaugas svarbu ne tik naudojama implantų sistema, bet ir tai, kaip
                  atliekama diagnostika, planuojama implanto padėtis bei užtikrinamas gydymo tęstinumas. Bangų
                  odontologijos klinikoje STRAUMANN implantai naudojami atsakingai, siekiant suderinti funkciją,
                  estetiką ir ilgalaikę burnos sveikatą.
                </p>
                <p>
                  Klinikoje dirbantys specialistai kiekvieną atvejį vertina individualiai, atsižvelgdami į žandikaulio
                  kaulo, dantenų, sąkandžio ir likusių dantų būklę. Prieš implantaciją pacientui paaiškinamos galimos
                  gydymo kryptys, papildomų procedūrų poreikis, gijimo eiga ir būsimo protezavimo galimybės. Dėmesys
                  skiriamas ne tik implanto įsriegimui, bet ir tiksliai jo padėčiai bei tinkamam būsimos restauracijos
                  pritaikymui.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, aiškų gydymo planą ir nuoseklią priežiūrą nuo konsultacijos
                  iki galutinio protezavimo. Todėl ieškantiems profesionalios implantacijos STRAUMANN dantų implantais
                  Klaipėdoje, Bangų odontologijos klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis STRAUMANN implantacijos konsultacijai Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu svarstote apie prarasto danties atkūrimą implantu, kviečiame registruotis konsultacijai Bangų
                  odontologijos klinikoje. Vizito metu bus įvertinta Jūsų burnos būklė, aptartos galimos gydymo
                  alternatyvos ir suplanuota tinkamiausia STRAUMANN implantacijos eiga.
                </p>
                <p>
                  Registruokitės ir ženkite pirmą žingsnį link atkurtos šypsenos.
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
