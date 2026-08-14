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
  { id: 'kainos', label: 'Kainos' },
  { id: 'kas-yra', label: 'Kas yra atkūrimas 4 implantais?' },
  { id: 'kada-rekomenduojamas', label: 'Kada rekomenduojamas?' },
  { id: 'kaip-veikia', label: 'Kaip veikia ALL-ON-4?' },
  { id: 'privalumai', label: 'Pagrindiniai privalumai' },
  { id: 'netinkamas', label: 'Kam gali būti netinkamas?' },
  { id: 'procedura', label: 'Kaip atliekamas procesas?' },
  { id: 'gijimas', label: 'Gijimas po procedūros' },
  { id: 'mitai', label: 'Mitai' },
  { id: 'duk', label: 'Dažniausiai užduodami klausimai' },
  { id: 'kodel-mes', label: 'Kodėl Bangų klinika?' },
]

type Package = {
  title: string
  price: string
  bullets: string[]
}

const packages: Package[] = [
  {
    title: 'ALL-ON-4 su „Straumann Group Neodent“ implantais',
    price: '3800 €',
    bullets: [
      '3D rentgeno nuotrauka',
      '4 „Straumann Group Neodent“ implantai',
      'Originalios protezavimo detalės',
      'Neišimamas laikinas protezas',
    ],
  },
  {
    title: 'ALL-ON-4 su „Straumann Group SLA“ implantais',
    price: '4900 €',
    bullets: [
      '3D rentgeno nuotrauka',
      '4 „Straumann Group SLA“ implantai',
      'Originalios protezavimo detalės',
      'Neišimamas laikinas protezas',
    ],
  },
  {
    title: 'ALL-ON-6 su „Straumann Group Neodent“ implantais',
    price: '5300 €',
    bullets: [
      '3D rentgeno nuotrauka',
      '6 „Straumann Group Neodent“ implantai',
      'Originalios protezavimo detalės',
      'Neišimamas laikinas protezas',
    ],
  },
]

const processSteps = [
  {
    n: '01',
    title: 'Diagnostika ir planavimas',
    text: 'Įvertinama burnos būklė, likę dantys, dantenos, sąkandis ir kaulo kiekis. Atliekami radiologiniai tyrimai, dažniausiai 3D kompiuterinė tomografija, leidžianti suplanuoti saugias implantų pozicijas.',
  },
  {
    n: '02',
    title: 'Gydymo plano sudarymas',
    text: 'Remiantis tyrimais pacientui paaiškinama, ar ALL-ON-4 metodas tinkamas, ar reikės papildomų procedūrų, kokio laikino ir galutinio protezo galima tikėtis. Aptariama procedūros eiga, gijimas, priežiūra ir individuali gydymo prognozė.',
  },
  {
    n: '03',
    title: 'Implantų įsriegimas',
    text: 'Procedūra atliekama taikant vietinę nejautrą. Į žandikaulį įsriegiami keturi implantai: du priekinėje dalyje ir du galinėje srityje pasviru kampu, kad būtų geriau išnaudojamas esamas kaulas.',
  },
  {
    n: '04',
    title: 'Laikino protezo tvirtinimas',
    text: 'Daugeliu atvejų po implantacijos pritvirtinamas laikinas fiksuotas protezas. Jis padeda atkurti estetiką ir dalinę funkciją gijimo laikotarpiu, kol implantai dar nėra visiškai integravęsi.',
  },
  {
    n: '05',
    title: 'Gijimo laikotarpis',
    text: 'Implantai palaipsniui suauga su kaulu. Šiuo metu svarbu laikytis mitybos, higienos ir kontrolinių vizitų rekomendacijų, vengti per didelės apkrovos ir stebėti savijautą.',
  },
  {
    n: '06',
    title: 'Galutinis protezas',
    text: 'Implantams prigijus, gaminamas galutinis protezas, pritaikytas sąkandžiui, estetikai ir ilgalaikiam naudojimui. Jis atkuriamas taip, kad būtų patogus kramtyti, kalbėti ir prižiūrėti kasdien.',
  },
]

const myths = [
  {
    title: '4 implantų nepakanka visam dantų lankui',
    text: 'Keturi implantai gali būti pakankama atrama visam dantų lankui, jei jie suplanuojami ir įsriegiami tinkamose pozicijose. Stabilumą lemia ne tik implantų skaičius, bet ir jų kampas, kaulo kokybė, protezo konstrukcija bei kramtymo apkrovos paskirstymas.',
  },
  {
    title: 'Procedūra yra labai skausminga',
    text: 'Dantų atkūrimas 4 implantais atliekamas taikant vietinę nejautrą, todėl procedūros metu pacientas skausmo neturėtų jausti. Po implantacijos gali būti maudimas, jautrumas ar patinimas, tačiau tai dažniausiai yra laikina gijimo dalis.',
  },
  {
    title: 'Šis metodas tinka tik vyresnio amžiaus žmonėms',
    text: 'ALL-ON-4 metodas nėra amžiaus klausimas. Jis gali būti tinkamas įvairaus amžiaus pacientams, netekusiems daugumos arba visų dantų. Svarbiausia yra kaulo būklė, bendra sveikata, burnos higiena ir gydymo prognozė.',
  },
  {
    title: 'Dantys ant 4 implantų atrodo nenatūraliai',
    text: 'Šiuolaikiniai protezavimo sprendimai leidžia atkurti natūraliai atrodančią šypseną. Protezas gaminamas individualiai, įvertinus paciento veido bruožus, lūpų liniją, sąkandį, dantenų estetiką ir pageidaujamą dantų formą.',
  },
  {
    title: 'Po procedūros galima iš karto valgyti viską',
    text: 'Nors laikinas protezas dažnai pritvirtinamas greitai, gijimo laikotarpiu implantų negalima perkrauti. Pirmuoju laikotarpiu rekomenduojamas minkštesnis maistas, kad implantai galėtų stabiliai suaugti su kaulu.',
  },
  {
    title: 'ALL-ON-4 tinka net tada, kai kaulo beveik nėra',
    text: 'Šis metodas gali padėti efektyviau išnaudoti esamą kaulą, tačiau jis netinka absoliučiai visais atvejais. Jei kaulo trūkumas labai ryškus, gali reikėti kaulo priauginimo, papildomų implantų ar kito gydymo plano.',
  },
  {
    title: 'Laikinas protezas yra toks pats kaip galutinis',
    text: 'Laikinas protezas skirtas gijimo laikotarpiui. Jis padeda atkurti estetiką ir dalinę funkciją, tačiau galutinis protezas gaminamas tik implantams prigijus. Jis yra tvirtesnis, tikslesnis ir skirtas ilgalaikiam naudojimui.',
  },
  {
    title: 'Dantų atkūrimas 4 implantais nereikalauja priežiūros',
    text: 'Fiksuotas protezas nereiškia, kad priežiūros nebereikia. Kasdienė higiena, specialios valymo priemonės ir reguliarūs profilaktiniai vizitai yra būtini, kad implantai, dantenos ir protezas išliktų stabilūs.',
  },
  {
    title: 'Jei nieko neskauda, kontroliniai vizitai nebūtini',
    text: 'Kontroliniai vizitai svarbūs net tada, kai pacientas jaučiasi gerai. Jų metu vertinama implantų, dantenų, protezo ir sąkandžio būklė, todėl galimus pokyčius galima pastebėti anksti.',
  },
  {
    title: 'Visiems pacientams tinka vienodas gydymo planas',
    text: 'Dantų atkūrimas 4 implantais visada planuojamas individualiai. Skiriasi kaulo kiekis, dantenų būklė, sąkandis, sveikatos istorija, estetiniai lūkesčiai ir protezavimo galimybės. Todėl galutinis planas sudaromas tik po diagnostikos ir konsultacijos.',
  },
]

const faqs = [
  {
    q: 'Ar dantų atkūrimas 4 implantais yra skausmingas?',
    a: 'Procedūra atliekama taikant vietinę nejautrą, todėl jos metu pacientas skausmo neturėtų jausti. Po implantacijos gali pasireikšti patinimas, maudimas ar jautrumas, tačiau tai dažniausiai yra įprasta gijimo reakcija, kuri kontroliuojama gydytojo rekomendacijomis ir paskirtais vaistais.',
  },
  {
    q: 'Kada dantų atkūrimas 4 implantais yra tinkamas sprendimas?',
    a: 'Šis metodas dažniausiai rekomenduojamas pacientams, netekusiems visų arba daugumos dantų viename žandikaulyje. Jis taip pat gali būti tinkamas tada, kai likę dantys yra stipriai pažeisti, nebetinkami išsaugojimui arba kai pacientas nori atsisakyti nestabilių išimamų protezų.',
  },
  {
    q: 'Kuo šis metodas skiriasi nuo išimamų protezų?',
    a: 'Skirtingai nei išimami protezai, dantų atkūrimas 4 implantais suteikia fiksuotą sprendimą. Protezas tvirtinamas ant implantų, todėl nejuda valgant, kalbant ar šypsantis. Tai padeda jaustis stabiliau, patogiau ir užtikrinčiau kasdienėse situacijose.',
  },
  {
    q: 'Ar galima visus dantis atkurti per vieną dieną?',
    a: 'Kai kuriais atvejais taip. Po implantų įsriegimo gali būti pritvirtinamas laikinas fiksuotas protezas, todėl pacientas gali išeiti iš klinikos su atkurta šypsena. Galutinis protezas gaminamas vėliau, kai implantai pilnai suauga su žandikaulio kaulu.',
  },
  {
    q: 'Kiek laiko trunka gijimas po implantacijos?',
    a: 'Gijimo trukmė priklauso nuo paciento burnos būklės, kaulo kokybės, bendros sveikatos, higienos ir procedūros apimties. Dažniausiai implantų prigijimo laikotarpis trunka kelis mėnesius. Šiuo metu vyksta osteointegracija – implantų suaugimas su kaulu.',
  },
  {
    q: 'Ar šis metodas tinka, jei yra sumažėjęs žandikaulio kaulas?',
    a: 'Dantų atkūrimas 4 implantais dažnai leidžia efektyviau išnaudoti esamą kaulą, nes galiniai implantai gali būti sriegiami pasviru kampu. Vis dėlto tinkamumas priklauso nuo individualios situacijos ir tiksliai įvertinamas atlikus 3D kompiuterinės tomografijos tyrimą.',
  },
  {
    q: 'Nuo ko priklauso visi dantys ant 4 implantų kaina?',
    a: 'Visi dantys ant 4 implantų kaina priklauso nuo pasirinktos implantų sistemos, laikino ir galutinio protezo tipo, diagnostikos, papildomų procedūrų poreikio bei individualaus gydymo plano. Tiksli kaina nustatoma konsultacijos metu, įvertinus paciento burnos būklę.',
  },
  {
    q: 'Kaip pasiruošti dantų atkūrimui 4 implantais?',
    a: 'Prieš procedūrą atliekama konsultacija, klinikinė apžiūra ir radiologiniai tyrimai. Pacientui svarbu informuoti gydytoją apie vartojamus vaistus, lėtines ligas, alergijas ir bendrą sveikatos būklę. Prireikus prieš implantaciją gali būti rekomenduojama profesionali burnos higiena ar kitas paruošiamasis gydymas.',
  },
  {
    q: 'Ką svarbu žinoti po dantų atkūrimo 4 implantais?',
    a: 'Po procedūros svarbu laikytis gydytojo rekomendacijų: rinktis minkštesnį maistą, vengti didelio fizinio krūvio, nerūkyti, atsakingai prižiūrėti burną ir atvykti į kontrolinius vizitus. Tinkama priežiūra padeda sumažinti komplikacijų riziką ir užtikrinti sklandesnį gijimą.',
  },
  {
    q: 'Ar protezas ant 4 implantų atrodo natūraliai?',
    a: 'Taip, protezas gaminamas individualiai, atsižvelgiant į paciento veido bruožus, šypsenos liniją, sąkandį, dantenų estetiką ir pageidaujamą dantų formą. Tinkamai suplanuotas protezas atrodo natūraliai, padeda atkurti šypsenos estetiką ir leidžia patogiai kramtyti.',
  },
]

export default function VisiDantysAnt4Implantu() {
  const pageRef = useRef(null)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.banguklinika.lt/paslaugos/visi-dantys-ant-4-implantu/#service',
    name: 'Visi dantys ant 4 implantų (All-on-4 implantai) Klaipėdoje',
    serviceType: 'All-on-4 implantacija',
    description:
      'Visi dantys ant 4 implantų (All-on-4) Klaipėdoje – viso žandikaulio dantų lanko atkūrimas ant 4 implantų Bangų odontologijos klinikoje. Kaina nuo 3800 €.',
    url: 'https://www.banguklinika.lt/paslaugos/visi-dantys-ant-4-implantu/',
    areaServed: { '@type': 'City', name: 'Klaipėda' },
    provider: { '@id': 'https://www.banguklinika.lt/#dentist' },
  }

  return (
    <AnimatedSection>
      <SEO
        title="Visi dantys ant 4 implantų (All-on-4 implantai) Klaipėdoje | Kaina nuo 3800€ | Bangų klinika"
        description="Visi dantys ant 4 implantų (All-on-4) Klaipėdoje – patikimas☑️modernus☑️sprendimas visam dantų lankui atkurti. Registruokitės konsultacijai⏩Bangų klinikoje."
        keywords="visi dantys ant 4 implantu, all-on-4, all on 4, dantu implantacija, straumann, neodent, klaipeda, bangų klinika"
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
              Visi dantys ant 4 implantų (All-on-4 implantai)
            </h1>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                Dantų netekimas – tai ne tik estetinė, bet ir funkcinė problema, kuri tiesiogiai veikia
                kramtymą, kalbėjimą ir bendrą burnos sveikatą. Netekus didesnio kiekio dantų, tradiciniai
                protezavimo sprendimai ne visada užtikrina stabilumą ar komfortą, todėl šiuolaikinėje
                implantologijoje vis dažniau pasirenkamas dantų atkūrimas 4 implantais.
              </p>
              <p>
                Tai modernus gydymo metodas, leidžiantis atkurti visą dantų lanką vos ant keturių implantų,
                strategiškai įsriegiamų žandikaulyje. Tokia technologija suteikia galimybę pacientams atgauti
                pilnavertę kramtymo funkciją, estetiką ir pasitikėjimą savimi per ženkliai trumpesnį laiką nei
                taikant įprastus implantacijos metodus.
              </p>
              <p>
                Bangų odontologijos klinikoje Klaipėdoje šis gydymo sprendimas planuojamas individualiai,
                remiantis detalia diagnostika, skaitmeniniais tyrimais ir ilgalaikės sėkmės prognoze. Siekiama
                ne tik atkurti dantis, bet ir užtikrinti natūralią sąkandžio funkciją bei ilgalaikį rezultatą.
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
                Žiūrėti kainas
              </a>
            </div>
          </motion.header>

          {/* KAINOS */}
          <motion.section id="kainos" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                    Visi dantys ant 4 implantų – kainos
                  </h2>
                  <p className="text-slate-600">
                    Į kiekvieną pasiūlymą įeina 3D rentgeno nuotrauka, implantai, originalios protezavimo
                    detalės ir neišimamas laikinas protezas. Po „All-on-4“ implantacijos iš karto pritvirtinami
                    laikini protezai, kad pacientas galėtų normaliai šypsotis ir kramtyti gijimo laikotarpiu.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {packages.map((p, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 sm:p-7 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all flex flex-col"
                    style={{ borderColor: S }}
                  >
                    <h3 className="text-base font-extrabold mb-3 leading-snug" style={{ color: P }}>
                      {p.title}
                    </h3>
                    <div className="text-3xl font-extrabold mb-4" style={{ color: P }}>
                      {p.price}
                    </div>
                    <ul className="space-y-2 text-sm text-slate-700 mb-4 flex-1">
                      {p.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="mt-1"><CheckIcon /></span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="text-slate-600 text-sm mt-6 space-y-3">
                <p>
                  Laikini protezai paprastai nešiojami apie 3–6 mėnesius, kol implantai pilnai prigyja
                  kaule. Po šio laikotarpio atliekamas galutinis įvertinimas, nuimami tikslūs atspaudai,
                  pagaminami ir pritvirtinami nuolatiniai (pastovūs) protezai, kurie yra tvirtesni, estetiškesni
                  ir ilgaamžiškesni.
                </p>
                <p>
                  Nuolatiniai protezai dažniausiai dedami praėjus maždaug 4 mėnesiams po implantacijos
                  (priklausomai nuo individualaus gijimo). Tiksli kaina nustatoma konsultacijos metu, įvertinus
                  paciento burnos būklę ir individualų gydymo planą.
                </p>
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
                    Jeigu turite klausimų ar norite sužinoti daugiau apie gydymo galimybes, kviečiame
                    registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu įvertinsime Jūsų
                    burnos būklę, atsakysime į rūpimus klausimus ir padėsime suprasti visą gydymo eigą.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Siekiame, kad kiekvienas pacientas jaustųsi užtikrintai – nuo pirmosios konsultacijos iki
                    galutinio rezultato. Registruokitės ir ženkite pirmą žingsnį link sveikos šypsenos.
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
                <div className="relative bg-sky-50">
                  <img
                    src="/team/donataskubilius.jpg"
                    alt="Donatas Kubilius – implantologas Bangų klinikoje"
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
                Kas yra dantų atkūrimas 4 implantais?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų atkūrimas 4 implantais (ALL-ON-4 metodas) – tai šiuolaikinis implantologinis
                  sprendimas, kai visas viršutinio arba apatinio žandikaulio dantų lankas atkuriamas tvirtinant
                  fiksuotą protezą ant keturių implantų. Du implantai dažniausiai sriegami priekinėje
                  žandikaulio dalyje vertikaliai, o du galiniai – pasviru kampu, kad būtų geriau išnaudojamas
                  esamas kaulas ir sukuriama stabili atrama būsimam protezui.
                </p>
                <p>
                  Šis metodas skirtas pacientams, netekusiems daugumos arba visų dantų, kai išimami protezai
                  nebesuteikia pakankamo stabilumo, kramtymo komforto ar pasitikėjimo kasdienėse situacijose.
                  Ant implantų gali būti tvirtinamas laikinas protezas, leidžiantis greičiau atkurti šypsenos
                  estetiką, o implantams prigijus gaminamas galutinis protezas, pritaikytas sąkandžiui,
                  dantenoms ir veido proporcijoms.
                </p>
                <p>
                  Dantų atkūrimas 4 implantais leidžia atkurti ne pavienius dantis, o visą dantų lanką kaip
                  vientisą funkcinę sistemą. Tai padeda pagerinti kramtymą, kalbos aiškumą, veido atramą ir
                  bendrą gyvenimo kokybę. Svarbu suprasti, kad tai nėra vien greitas estetinis sprendimas –
                  gydymas turi būti pagrįstas tikslia diagnostika, implantų stabilumo įvertinimu ir ilgalaikės
                  priežiūros planu. Galutinis sprendimas visuomet priimamas individualiai, įvertinus kaulo
                  kiekį, dantenų būklę, sąkandį, bendrą sveikatą ir paciento lūkesčius. Tokia analizė padeda
                  pasirinkti saugiausią atkūrimo kelią ir užtikrinti, kad protezas būtų patogus, stabilus bei
                  tinkamas kasdieniam naudojimui. Tai ypač svarbu pacientams, siekiantiems ne laikino
                  kompromiso, o aiškaus, mediciniškai pagrįsto dantų atkūrimo sprendimo bei tikruosius
                  ilgalaikius paciento poreikius.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REKOMENDUOJAMAS */}
          <motion.section id="kada-rekomenduojamas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kada rekomenduojamas dantų atkūrimas 4 implantais?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų atkūrimas 4 implantais rekomenduojamas pacientams, kurie yra netekę daugumos arba visų
                  dantų viename ar abiejuose žandikauliuose ir nori fiksuoto, patogesnio sprendimo nei
                  išimami protezai. Šis metodas dažniausiai svarstomas tada, kai siekiama atkurti visą dantų
                  lanką, pagerinti kramtymą, kalbėjimą, šypsenos estetiką ir kasdienį pasitikėjimą.
                </p>
                <p>
                  Toks gydymas gali būti tinkamas, kai likę dantys yra stipriai pažeisti ėduonies, periodonto
                  ligų, traumų ar senų restauracijų ir jų nebeįmanoma patikimai išsaugoti. Jis taip pat aktualus
                  pacientams, kurie jau naudoja išimamus protezus, tačiau jaučia jų judėjimą, spaudimą, trynimą,
                  prastą laikymąsi arba diskomfortą valgant ir kalbant.
                </p>
                <p>
                  Dantų atkūrimas 4 implantais gali būti svarstomas ir tada, kai stebimas kaulo nykimas, tačiau
                  dar galima strategiškai išnaudoti esamas kaulo zonas. Pasvirai sriegiamų galinių implantų
                  principas kai kuriais atvejais padeda sumažinti kaulo priauginimo poreikį, todėl gydymas gali
                  būti trumpesnis ir mažiau sudėtingas.
                </p>
                <p>
                  Vis dėlto tinkamumas šiam metodui nustatomas tik individualiai. Gydytojas įvertina kaulo
                  tūrį, dantenų būklę, sąkandį, bendrą sveikatą, vartojamus vaistus, burnos higieną ir paciento
                  galimybes laikytis pooperacinių rekomendacijų. Tik po tokio įvertinimo galima nuspręsti, ar
                  ALL-ON-4 metodas suteiks saugų, stabilų ir ilgalaikį rezultatą. Jei šis sprendimas netinka,
                  aptariamos kitos implantacijos ar protezavimo galimybės. Tokia eiga padeda išvengti
                  nepagrįstų lūkesčių ir parinkti gydymą pagal realią burnos klinikinę situaciją bei prognozę.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAIP VEIKIA */}
          <motion.section id="kaip-veikia" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kaip veikia ALL-ON-4 implantų metodas?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  ALL-ON-4 implantų metodas pagrįstas tiksliu implantų išdėstymu ir kramtymo apkrovos
                  paskirstymu. Vietoje daugelio implantų visam dantų lankui naudojami keturi implantai: du
                  dažniausiai įsriegami priekinėje žandikaulio dalyje vertikaliai, o du galiniai – pasviru
                  kampu. Toks sprendimas leidžia geriau išnaudoti esamą kaulą ir sukurti stabilų pagrindą
                  fiksuotam protezui.
                </p>
                <p>
                  Priekinėje žandikaulio dalyje kaulas dažnai būna tankesnis, todėl ten įsriegti implantai
                  padeda užtikrinti pirminį stabilumą. Galiniai pasvirę implantai padidina atramos plotą,
                  leidžia išvengti tam tikrų anatominių sričių, pavyzdžiui, sinusų ar nervų, ir padeda
                  tolygiau paskirstyti kramtymo jėgas.
                </p>
                <p>
                  Ant keturių implantų tvirtinamas laikinas protezas, kuris gijimo laikotarpiu atkuria estetiką
                  ir dalinę funkciją. Implantams suaugus su kaulu, gaminamas galutinis protezas, tiksliai
                  pritaikytas paciento sąkandžiui, dantenoms, veido proporcijoms ir kasdieniam kramtymo krūviui.
                </p>
                <p>
                  Šio metodo sėkmė priklauso nuo diagnostikos, 3D planavimo ir individualaus protezavimo
                  sprendimo. Todėl prieš procedūrą vertinamas kaulo aukštis, plotis, minkštųjų audinių būklė,
                  sąkandžio santykis ir bendra gydymo prognozė. Toks planavimas padeda numatyti, ar pacientui
                  reikės papildomų procedūrų, ar implantus galima sriegti pasirinktu kampu, ir kaip laikinas
                  protezas pereis į galutinį atkūrimą. Kiekvienas sprendimas priimamas pagal klinikinę
                  situaciją, todėl metodas išlieka saugus, prognozuojamas ir pritaikytas ilgalaikiam
                  naudojimui. Tai suteikia pacientui daugiau aiškumo prieš gydymą ir leidžia tiksliau
                  suplanuoti visus etapus. Tai svarbu ilgalaikės burnos sveikatos požiūriu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIVALUMAI */}
          <motion.section id="privalumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kokie yra pagrindiniai dantų atkūrimo 4 implantais privalumai?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų atkūrimas 4 implantais turi kelis svarbius privalumus, dėl kurių šis metodas dažnai
                  pasirenkamas atkuriant visą viršutinio arba apatinio žandikaulio dantų lanką. Pirmiausia,
                  tai fiksuotas sprendimas. Protezas tvirtinamas ant implantų, todėl nejuda valgant, kalbant
                  ar šypsantis ir suteikia daugiau stabilumo nei išimami protezai.
                </p>
                <p>
                  Kitas privalumas – greitesnis funkcijos ir estetikos atkūrimas. Daugeliu atvejų laikinas
                  protezas gali būti pritvirtinamas netrukus po implantacijos, todėl pacientas nelieka be
                  dantų gydymo proceso metu. Tai ypač svarbu psichologiniam komfortui, pasitikėjimui savimi
                  ir kasdieniam bendravimui.
                </p>
                <p>
                  Svarbus ir mažesnis chirurginės intervencijos poreikis. Naudojant keturis implantus, galima
                  sumažinti implantų skaičių, o dėl pasvirai sriegiamų galinių implantų kai kuriais atvejais
                  pavyksta išvengti sudėtingesnio kaulo priauginimo.
                </p>
                <p>
                  Šis metodas taip pat padeda atkurti kramtymo funkciją, aiškesnę kalbą, veido atramą ir
                  natūralesnę šypsenos estetiką. Vis dėlto didžiausias privalumas yra ne vien greitis, o
                  individualiai suplanuotas, ilgalaikis sprendimas, pritaikytas konkretaus paciento kaulo
                  būklei, sąkandžiui ir sveikatos situacijai. Tinkamai prižiūrimas protezas ant implantų gali
                  padėti pacientui grįžti prie įprastos mitybos, aiškesnio tarimo ir laisvesnio bendravimo.
                  Kartu sumažėja išimamų protezų keliamas nepatogumas, trynimas ar baimė, kad protezas
                  pajudės netinkamu metu kasdien. Dėl to atkuriama ne tik dantų funkcija, bet ir bendras
                  gyvenimo komfortas bei pasitikėjimas savimi kasdien.
                </p>
              </div>
            </div>
          </motion.section>

          {/* NETINKAMAS */}
          <motion.section id="netinkamas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kam gali būti netinkamas ALL-ON-4 metodas?
              </h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Nors dantų atkūrimas 4 implantais yra pažangus ir dažnai taikomas metodas, jis nėra
                universalus sprendimas visiems pacientams. Tinkamumas priklauso nuo burnos būklės, kaulo
                kiekio, bendros sveikatos, higienos įpročių ir paciento galimybių laikytis gydytojo
                rekomendacijų po procedūros. Todėl prieš pasirenkant ALL-ON-4 būtina įvertinti ne tik norimą
                rezultatą, bet ir realias medicinines sąlygas.
              </p>

              <h3 className="font-semibold text-darkblue-700 mb-4">ALL-ON-4 gali būti nerekomenduojamas, jei:</h3>
              <div className="grid gap-3">
                {[
                  'burnoje yra aktyvi infekcija, negydomas uždegimas ar pažengusi periodonto liga',
                  'nustatomas labai ryškus kaulo trūkumas, neleidžiantis saugiai įsriegti implantų',
                  'pacientas serga nekontroliuojamomis sisteminėmis ligomis, galinčiomis trikdyti gijimą',
                  'burnos higiena yra nepakankama ir jos nepavyksta pagerinti prieš gydymą',
                  'pacientas rūko, nekontroliuoja bruksizmo arba negali laikytis pooperacinių nurodymų',
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1"><CheckIcon /></span>
                    <span className="text-slate-700">{t}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Tokiais atvejais gydytojas pirmiausia gali rekomenduoti paruošiamąjį gydymą: infekcijų
                suvaldymą, profesionalią burnos higieną, periodontologinį gydymą, kaulo priauginimą ar kitą
                implantacijos planą. Kartais vietoje keturių implantų gali būti siūlomas didesnis implantų
                skaičius arba etapinis dantų atkūrimas.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                Svarbiausia tai, kad sprendimas nėra priimamas pagal vieną požymį. Galutinis tinkamumas
                nustatomas tik po konsultacijos, 3D tyrimo ir individualios rizikų analizės. Toks atsargus
                vertinimas padeda pasirinkti saugiausią kelią, išvengti nepagrįstų lūkesčių ir užtikrinti
                ilgalaikę gydymo prognozę konkrečiam pacientui. Jeigu rizikos yra koreguojamos, gydymas gali
                būti planuojamas vėliau, kai burnos audiniai ir bendra sveikatos būklė tampa stabilesni.
              </p>
            </div>
          </motion.section>

          {/* PROCEDURA */}
          <motion.section id="procedura" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kaip atliekamas dantų atkūrimas 4 implantais?
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Bangų odontologijos klinikoje procedūra atliekama nuosekliai, remiantis diagnostikos duomenimis
                ir individualia paciento situacija. Tikslus planavimas padeda parinkti implantų padėtį,
                įvertinti protezavimo galimybes ir numatyti gijimo eigą.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {processSteps.map((s) => (
                  <div key={s.n} className={innerCard}>
                    <div className="text-4xl font-bold text-brand/20 mb-2">{s.n}</div>
                    <h3 className="font-bold text-darkblue-700 mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* GIJIMAS */}
          <motion.section id="gijimas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kaip vyksta gijimas po dantų atkūrimo 4 implantais?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                <p>
                  Gijimas po dantų atkūrimo 4 implantais yra svarbus gydymo etapas, nuo kurio priklauso
                  implantų prigijimas, protezo stabilumas ir ilgalaikis rezultatas. Nors laikinas fiksuotas
                  protezas dažnai gali būti pritvirtinamas greitai, pirmosiomis savaitėmis implantai dar nėra
                  pilnai suaugę su kaulu, todėl labai svarbu saugoti gydytą sritį ir laikytis gydytojo
                  rekomendacijų.
                </p>
                <p>
                  Pirmosiomis dienomis po implantacijos gali būti patinimas, maudimas, jautrumas ar nedidelis
                  kraujavimas. Tai įprasta organizmo reakcija į chirurginę procedūrą. Diskomfortas paprastai
                  mažėja palaipsniui, o gijimo eiga priklauso nuo paciento sveikatos, burnos higienos, rūkymo
                  įpročių, mitybos ir procedūros apimties.
                </p>
              </div>

              <h3 className="font-semibold text-darkblue-700 mb-4">Gijimo etapai:</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ['Pirmos 24–72 val.', 'Galimas patinimas, jautrumas ir poreikis laikytis švelnesnio režimo.'],
                  ['3–7 dienos', 'Minkštųjų audinių gijimo pradžia, svarbi atsargi higiena ir minkštesnis maistas.'],
                  ['2–6 savaitės', 'Audiniai stabilizuojasi, tačiau implantų apkrova vis dar turi būti kontroliuojama.'],
                  ['3–6 mėn.', 'Vyksta osteointegracija – implantų suaugimas su žandikaulio kaulu.'],
                ].map(([title, text], i) => (
                  <div key={i} className={innerCard}>
                    <div className="font-bold text-darkblue-700 mb-1">{title}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Gijimo laikotarpiu rekomenduojama vengti kieto maisto, didelio fizinio krūvio, rūkymo ir
                savavališko vaistų vartojimo. Reguliarūs kontroliniai vizitai leidžia įvertinti, ar implantai
                gyja pagal planą, ar laikinas protezas tinkamai paskirsto apkrovą ir kada galima planuoti
                galutinį protezą. Tinkama priežiūra padeda sumažinti komplikacijų riziką ir sudaro geresnes
                sąlygas ilgalaikiam rezultatui.
              </p>
            </div>
          </motion.section>

          {/* MITAI */}
          <motion.section id="mitai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Mitai apie dantų atkūrimą 4 implantais
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų atkūrimas 4 implantais vis dar apipintas įvairiais mitais, kurie pacientams gali kelti
                abejonių ar nereikalingą nerimą. Šiuolaikinė implantologija remiasi tikslia diagnostika,
                individualiu planavimu ir pažangiais gydymo metodais, todėl daugelis senų įsitikinimų apie
                ALL-ON-4 metodą šiandien nebeatitinka realybės.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {myths.map((m, i) => (
                  <div key={i} className={innerCard}>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm font-extrabold text-brand">#{i + 1}</span>
                      <h3 className="font-bold text-darkblue-700 leading-snug">{m.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* DUK */}
          <motion.section id="duk" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Dažniausiai užduodami klausimai
              </h2>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <details key={i} className="group bg-white rounded-xl border border-slate-200 shadow-sm">
                    <summary className="cursor-pointer list-none p-4 sm:p-5 flex items-start justify-between gap-4 font-semibold text-darkblue-700">
                      <span>{f.q}</span>
                      <span className="text-brand transition-transform group-open:rotate-45 text-2xl leading-none shrink-0">+</span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-5 text-slate-700 leading-relaxed">{f.a}</div>
                  </details>
                ))}
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
                  Renkantis dantų atkūrimą 4 implantais svarbu ne tik pati implantacijos procedūra, bet ir
                  visas gydymo procesas – nuo tikslios diagnostikos iki laikino protezo pritaikymo, gijimo
                  kontrolės ir galutinio dantų atkūrimo plano. Bangų odontologijos klinikoje dantų atkūrimas
                  4 implantais planuojamas individualiai, įvertinus paciento kaulo tūrį, dantenų būklę,
                  sąkandį, likusių dantų situaciją, estetikos poreikius ir būsimo protezo padėtį.
                </p>
                <p>
                  Klinikoje didelis dėmesys skiriamas individualiam planavimui. Prieš pradedant gydymą
                  atliekama išsami diagnostika, padedanti tiksliai įvertinti, ar ALL-ON-4 metodas yra tinkamas
                  konkrečiu atveju, kokios implantų pozicijos būtų saugiausios, ar reikalingos papildomos
                  procedūros ir kokio protezavimo sprendimo gali reikėti. Toks požiūris leidžia pacientui
                  aiškiai suprasti gydymo eigą, galimus etapus, gijimo laikotarpį ir priimti informuotą
                  sprendimą.
                </p>
                <p>
                  Bangų odontologijos klinikoje pacientui aiškiai paaiškinama, kaip vyksta dantų atkūrimas 4
                  implantais, kuo laikinas protezas skiriasi nuo galutinio ir ko tikėtis po implantacijos. Po
                  gydymo suteikiamos rekomendacijos dėl gijimo, higienos, mitybos ir kontrolinių vizitų, kad
                  būtų sudarytos kuo geresnės sąlygos implantų prigijimui, protezo stabilumui ir ilgalaikiam
                  dantų atkūrimo rezultatui.
                </p>
              </div>
            </div>
          </motion.section>

          {/* FINAL CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Registruokitės konsultacijai Bangų klinikoje
              </h2>
              <div className="text-slate-700 max-w-3xl leading-relaxed mb-6 space-y-4">
                <p>
                  Vizito metu bus įvertinta Jūsų burnos būklė, aptartos galimos gydymo alternatyvos ir
                  suplanuota tinkamiausia ALL-ON-4 implantacijos eiga. Ženkite pirmą žingsnį link atkurtos
                  šypsenos.
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
