import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { TableOfContents } from '../components/TableOfContents'
import ReviewsCarousel from '../components/ReviewsCarousel'

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } },
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const sectionWrap = 'mb-12 scroll-mt-36 2xl:scroll-mt-24'
const whiteCard = 'bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft'
const innerCard = 'bg-white p-5 rounded-xl border border-slate-200 shadow-sm'

const P = '#002045'
const S = '#006b5f'
const SL = '#ecf5fb'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const tocSections = [
  { id: 'kainos', label: 'Kaina' },
  { id: 'kas-yra', label: 'Kas yra balinimas su lempa?' },
  { id: 'kam-tinka', label: 'Kam tinka?' },
  { id: 'procedura', label: 'Kaip atliekama procedūra?' },
  { id: 'po-procedūros', label: 'Ką svarbu žinoti po balinimo?' },
  { id: 'kodel-mes', label: 'Kodėl Bangų klinika?' },
]

const steps = [
  {
    n: '01',
    title: 'Burnos būklės ir pradinio atspalvio įvertinimas',
    text: 'Apžiūrimi dantys, dantenos ir esamos restauracijos. Įvertinama pradinė dantų spalva, jautrumas, pigmentacijos pobūdis ir paciento lūkesčiai. Jei nustatomos gydymo reikalaujančios problemos, balinimas atidedamas.',
  },
  {
    n: '02',
    title: 'Dantenų ir minkštųjų audinių apsauga',
    text: 'Prieš naudojant balinamąją medžiagą apsaugomos dantenos, lūpos ir kiti minkštieji burnos audiniai. Tai padeda sumažinti jų sąlytį su geliu ir sudirginimo riziką.',
  },
  {
    n: '03',
    title: 'Balinamosios priemonės užtepimas',
    text: 'Ant balinamų dantų paviršiaus užtepamas tolygus profesionalios priemonės sluoksnis. Gelis laikomas tik konkrečios sistemos protokole nustatytą laiką.',
  },
  {
    n: '04',
    title: 'Gelio veikimas naudojant LED lempą',
    text: 'Pagal pasirinktos sistemos metodiką balinamoji priemonė gali būti veikiama LED šviesa. Procedūros metu stebimi paciento pojūčiai. Prireikus gelis pašalinamas, užtepamas pakartotinai arba procedūra sustabdoma.',
  },
  {
    n: '05',
    title: 'Rezultato ir jautrumo įvertinimas',
    text: 'Baigus balinimą gelis kruopščiai pašalinamas, įvertinama dantų spalva ir paciento savijauta. Atspalvio pokytis dažniausiai pastebimas jau po procedūros, tačiau iš karto dantys gali atrodyti šviesesni ir dėl laikino išsausėjimo. Galutinį rezultatą tikslinga vertinti spalvai stabilizavusis.',
  },
]

export default function DantuBalinimasSuLempa() {
  const pageRef = useRef(null)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.banguklinika.lt/paslaugos/dantu-balinimas-su-lempa/#service',
    name: 'Dantų balinimas su lempa Klaipėdoje',
    serviceType: 'Dantų balinimas su LED lempa',
    description:
      'Dantų balinimas su LED lempa Bangų odontologijos klinikoje Klaipėdoje – klinikoje atliekama estetinė procedūra dantų spalvai pašviesinti. Kaina 270 €.',
    url: 'https://www.banguklinika.lt/paslaugos/dantu-balinimas-su-lempa/',
    areaServed: { '@type': 'City', name: 'Klaipėda' },
    provider: { '@id': 'https://www.banguklinika.lt/#dentist' },
  }

  return (
    <AnimatedSection>
      <SEO
        title="Dantų balinimas su lempa Klaipėdoje nuo 270€ | Bangų klinika"
        description="Dantų balinimas su lempa Klaipėdoje, tai efektyvus būdas pašviesinti dantis☑️ir susigrąžinti spindinčią šypseną☑️. Registruokitės procedūrai⏩Bangų klinikoje."
        keywords="dantu balinimas su lempa, led balinimas, dantu balinimas klaipeda, kabinetinis balinimas, bangų klinika"
        structuredData={structuredData}
        lang="lt"
        alternates={[
          { lang: 'lt', url: 'https://banguklinika.lt/paslaugos/dantu-balinimas-su-lempa' },
          { lang: 'lv', url: 'https://banguklinika.lt/lv/pakalpojumi/zobu-balinesana-ar-lampu' },
          { lang: 'x-default', url: 'https://banguklinika.lt/paslaugos/dantu-balinimas-su-lempa' },
        ]}
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
              Dantų balinimas su lempa Klaipėdoje
            </h1>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                Dantų spalva laikui bėgant gali keistis dėl natūralių senėjimo procesų, kavos, arbatos, tabako,
                pigmentuojančių maisto produktų ar kitų kasdienių įpročių. Atspalviui įtakos turi ne tik ant
                dantų paviršiaus susikaupusios apnašos, bet ir danties audiniuose vykstantys pokyčiai. Kai
                norima pašviesinti natūralių dantų spalvą per klinikoje atliekamą procedūrą, gali būti
                pasirenkamas dantų balinimas su lempa.
              </p>
              <p>
                Bangų odontologijos klinikoje Klaipėdoje balinimas planuojamas individualiai, įvertinus dantų,
                dantenų, plombų ir kitų restauracijų būklę. Procedūros metu natūralūs dantys padengiami
                balinamąja medžiaga, minkštieji burnos audiniai apsaugomi, o pagal naudojamos sistemos
                protokolą gelis gali būti veikiamas LED lempa.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                to="/kontaktai"
                className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
              >
                Registruotis vizitui
              </Link>
              <a
                href="#kainos"
                className="rounded-full px-7 py-3 font-semibold text-base inline-block border border-brand/20 text-darkblue-700 hover:bg-brand-50 transition"
              >
                Žiūrėti kainą
              </a>
            </div>
          </motion.header>

          {/* KAINA */}
          <motion.section id="kainos" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                  Dantų balinimo su lempa kaina
                </h2>
                <p className="text-slate-600">
                  Dantų balinimo su LED lempa kaina priklauso nuo naudojamos sistemos, procedūros apimties ir
                  prieš balinimą reikalingo paruošimo. Tiksli kaina nurodoma po burnos būklės įvertinimo.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div
                  className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all"
                  style={{ borderColor: S }}
                >
                  <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>
                    Kabinetinis balinimas su lempa
                  </h3>
                  <div className="divide-y divide-slate-100">
                    {[['Dantų balinimas su LED lempa', '270 €']].map(([name, price], i) => (
                      <div key={i} className="flex justify-between items-center py-2.5">
                        <span className="text-slate-600 text-sm">{name}</span>
                        <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs mt-4">
                    Prireikus prieš balinimą gali būti rekomenduojama profesionali burnos higiena ar kitas
                    paruošiamasis gydymas – jis apmokestinamas atskirai.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* DOCTOR CTA */}
          <motion.div className="mt-8 mb-12" variants={item}>
            <div className="bg-white rounded-[28px] border border-sky-200 shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[5fr_4fr] gap-0 items-stretch">
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-700 mb-4">
                    Kviečiame registruotis konsultacijai Bangų klinikoje
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Jeigu turite klausimų ar norite sužinoti daugiau apie dantų balinimą su lempa, kviečiame
                    registruotis konsultacijai. Vizito metu įvertinsime Jūsų dantų būklę, atsakysime į rūpimus
                    klausimus ir padėsime suprasti visą procedūros eigą.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Siekiame, kad kiekvienas pacientas jaustųsi užtikrintai – nuo pirmosios konsultacijos iki
                    galutinio rezultato.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultacijos metu:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'atliekamas išsamus klinikinis įvertinimas',
                        'aptariami galimi balinimo sprendimai',
                        'paaiškinami procedūros etapai ir rezultatai',
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
                <div className="relative bg-sky-50">
                  <img
                    src="/team/Jonas-light.jpg"
                    alt="Bangų odontologijos klinikos gydytojas"
                    className="w-full lg:absolute lg:inset-0 lg:h-full object-contain"
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas yra dantų balinimas su lempa?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų balinimas su lempa – tai odontologijos klinikoje atliekama estetinė procedūra. Ant
                  natūralių dantų paviršiaus užtepama profesionaliam naudojimui skirta balinamoji medžiaga,
                  kurios veikimas pagrįstas vandenilio peroksido junginiais.
                </p>
                <p>
                  Pagrindinį balinamąjį poveikį sukuria veiklioji medžiaga, veikianti dantų spalvą lemiančius
                  junginius. LED lempa naudojama pagal konkrečios balinimo sistemos gamintojo nustatytą
                  metodiką. Jos naudojimo trukmė ir paskirtis priklauso nuo pasirinkto produkto, todėl
                  skirtingos kabinetinio balinimo procedūros gali būti atliekamos nevienodai.
                </p>
                <p>
                  LED dantų balinimas pasirenkamas dėl galimybės visą procesą atlikti klinikoje, prižiūrint
                  specialistui. Procedūros metu kontroliuojamas gelio kiekis, jo veikimo laikas, minkštųjų
                  audinių apsauga ir paciento pojūčiai.
                </p>
                <p>
                  Balinamos tik natūralios dantų struktūros. Plombos, vainikėliai, laminatės, tiltai ir kitos
                  restauracijos spalvos nekeičia. Jei jos yra matomoje šypsenos zonoje, po balinimo gali
                  atsirasti atspalvio skirtumas. Restauracijų koregavimas ar keitimas svarstomas tik tada, kai
                  spalvos neatitikimas yra pastebimas ir pacientui estetiškai aktualus.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAM TINKA */}
          <motion.section id="kam-tinka" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kam tinka dantų balinimas su lempa?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                <p>
                  Dantų balinimas LED lempa gali būti tinkamas pacientams, norintiems pašviesinti natūralių
                  dantų spalvą per klinikoje atliekamą procedūrą. Jis dažniausiai svarstomas, kai dantys
                  patamsėję dėl pigmentuojančių gėrimų, maisto produktų, tabako ar natūralių amžinių pokyčių.
                </p>
                <p>
                  Prieš balinimą įvertinama visa burnos būklė. Aktyvus kariesas, nesandarios plombos, dantų
                  įtrūkimai, dantenų uždegimas ar ryškus jautrumas gali padidinti nepageidaujamų pojūčių
                  riziką. Tokiais atvejais pirmiausia rekomenduojama gydyti nustatytas problemas.
                </p>
                <p>
                  Jei ant dantų yra pigmentinių apnašų ar akmenų, prieš procedūrą gali būti atliekama
                  profesionali burnos higiena. Pašalinus paviršines apnašas galima tiksliau įvertinti natūralią
                  dantų spalvą ir tolygiau planuoti balinimą.
                </p>
              </div>

              <h3 className="font-semibold text-darkblue-700 mb-4">
                Procedūrą gali reikėti atidėti arba rinktis kitą sprendimą, kai:
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'yra negydytų ėduonies pažeidimų',
                  'dantenos stipriai uždegusios ar kraujuoja',
                  'nustatytas ryškus dantų jautrumas',
                  'yra nesandarių restauracijų ar dantų įtrūkimų',
                  'pacientė laukiasi arba maitina krūtimi',
                  'tikimasi pakeisti plombų, vainikėlių ar laminačių spalvą',
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1"><CheckIcon /></span>
                    <span className="text-slate-700">{t}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Jei patamsėjęs vienas anksčiau šaknų kanalais gydytas dantis, išorinis dantų balinimas lempa
                gali nesuteikti tolygaus rezultato. Tokiu atveju gali būti svarstomas vidinis danties balinimas
                arba kitas estetinis gydymas.
              </p>
            </div>
          </motion.section>

          {/* PROCEDURA */}
          <motion.section id="procedura" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kaip atliekamas dantų balinimas su lempa?
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Tiksli procedūros eiga ir trukmė priklauso nuo naudojamos balinimo sistemos, gelio aplikacijų
                skaičiaus, pasiruošimo ir paciento reakcijos.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {steps.map((s) => (
                  <div key={s.n} className={innerCard}>
                    <div className="text-4xl font-bold text-brand/20 mb-2">{s.n}</div>
                    <h3 className="font-bold text-darkblue-700 mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Kai kuriems pacientams vienos procedūros rezultato pakanka. Kitais atvejais gali būti
                svarstomas papildomas kabinetinis arba palaikomasis balinimas individualiomis kapomis.
              </p>
            </div>
          </motion.section>

          {/* PO PROCEDŪROS */}
          <motion.section id="po-procedūros" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Ką svarbu žinoti po dantų balinimo?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Po procedūros gali pasireikšti laikinas dantų jautrumas šalčiui, šilumai ar orui. Jo stiprumas
                  ir trukmė individualūs. Jei jautrumas ryškus, specialistas gali rekomenduoti jautrumą
                  mažinančias burnos priežiūros priemones. Atsiradus stipriam ar ilgai nepraeinančiam skausmui,
                  reikėtų kreiptis į kliniką.
                </p>
                <p>
                  Po balinimo svarbu laikytis individualiai pateiktų rekomendacijų. Gali būti patariama riboti
                  dažnai vartojamus stipriai pigmentuojančius produktus, pavyzdžiui, kavą, arbatą, raudonąjį
                  vyną ir tabaką.
                </p>
                <p>
                  Balinimo rezultatas nėra visam laikui nekintantis. Dantų spalvą gali vėl paveikti mitybos
                  įpročiai, rūkymas, burnos higiena ir natūralūs senėjimo procesai. Rezultatą padeda išlaikyti
                  reguliari kasdienė priežiūra, profesionali burnos higiena ir individualiai parinktas
                  palaikomasis balinimas.
                </p>
                <p>
                  Vertinant dantų balinimo LED lempa atsiliepimus svarbu prisiminti, kad kito paciento
                  patirtis negali tiksliai numatyti individualaus rezultato. Atspalvio pokytis, jautrumas ir
                  galimas papildomų procedūrų poreikis priklauso nuo pradinės burnos būklės bei dantų audinių
                  savybių.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL MES */}
          <motion.section id="kodel-mes" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Profesionalus dantų balinimas turėtų būti atliekamas tik įvertinus burnos būklę ir paciento
                  estetinius lūkesčius. Bangų odontologijos klinikoje pirmiausia nustatoma, ar dantų balinimas
                  lempa konkrečiu atveju yra tinkamas.
                </p>
                <p>
                  Mūsų specialistai įvertina natūralių dantų spalvą, restauracijas, dantenų būklę ir galimą
                  jautrumo riziką. Pacientui paaiškinama procedūros eiga, galimi pojūčiai, balinimo ribos ir
                  dantų priežiūra po vizito.
                </p>
                <p>
                  Dėmesys skiriamas minkštųjų audinių apsaugai, tiksliam balinamosios priemonės naudojimui ir
                  paciento reakcijos stebėjimui. Nežadamas konkretus baltumo lygis, nes rezultatas priklauso
                  nuo individualių dantų savybių ir spalvos pokyčių priežasties.
                </p>
                <p>
                  Dantų balinimo su LED lempa kaina priklauso nuo naudojamos sistemos, procedūros apimties ir
                  prieš balinimą reikalingo paruošimo. Tiksli kaina nurodoma po burnos būklės įvertinimo.
                </p>
                <p>
                  Ieškantiems profesionalaus dantų balinimo su LED lempa Klaipėdoje, Bangų odontologijos
                  klinika siūlo atsakingai suplanuotą procedūrą, aiškias priežiūros rekomendacijas ir
                  individualia burnos būkle pagrįstą gydymo planą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* FINAL CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Registruokitės dantų balinimo procedūrai
              </h2>
              <p className="text-slate-700 max-w-3xl leading-relaxed mb-6">
                Vizito metu bus įvertinta Jūsų burnos būklė, aptartos galimos balinimo galimybės ir suplanuota
                individuali procedūros eiga.
              </p>
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
