import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { TableOfContents } from '../../components/TableOfContents'
import ReviewsCarousel from '../../components/ReviewsCarousel'
import { SITE_URL } from '../../i18n/lv'

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
  { id: 'kainos', label: 'Cena' },
  { id: 'kas-yra', label: 'Kas ir balināšana ar lampu?' },
  { id: 'kam-tinka', label: 'Kam ir piemērota?' },
  { id: 'procedura', label: 'Kā notiek procedūra?' },
  { id: 'po-procedūros', label: 'Kas jāzina pēc balināšanas?' },
  { id: 'kodel-mes', label: 'Kāpēc Bangų klīnika?' },
]

const steps = [
  {
    n: '01',
    title: 'Mutes stāvokļa un sākotnējā toņa novērtējums',
    text: 'Tiek apskatīti zobi, smaganas un esošās restaurācijas. Tiek novērtēta sākotnējā zobu krāsa, jutīgums, pigmentācijas raksturs un pacienta vēlmes. Ja tiek konstatētas problēmas, kas prasa ārstēšanu, balināšana tiek atlikta.',
  },
  {
    n: '02',
    title: 'Smaganu un mīksto audu aizsardzība',
    text: 'Pirms balinošā līdzekļa lietošanas tiek aizsargātas smaganas, lūpas un citi mīkstie mutes audi. Tas palīdz samazināt to saskari ar gēlu un kairinājuma risku.',
  },
  {
    n: '03',
    title: 'Balinošā līdzekļa uzklāšana',
    text: 'Uz balināmo zobu virsmas tiek uzklāts vienmērīgs profesionāla līdzekļa slānis. Gēls tiek turēts tikai konkrētās sistēmas protokolā noteikto laiku.',
  },
  {
    n: '04',
    title: 'Gēla iedarbība, izmantojot LED lampu',
    text: 'Atbilstoši izvēlētās sistēmas metodikai balinošais līdzeklis var tikt iedarbots ar LED gaismu. Procedūras laikā tiek novērotas pacienta sajūtas. Ja nepieciešams, gēls tiek noņemts, uzklāts atkārtoti vai procedūra tiek pārtraukta.',
  },
  {
    n: '05',
    title: 'Rezultāta un jutīguma novērtējums',
    text: 'Pēc balināšanas gēls tiek rūpīgi noņemts, tiek novērtēta zobu krāsa un pacienta pašsajūta. Toņa izmaiņas visbiežāk ir pamanāmas jau pēc procedūras, tomēr uzreiz zobi var izskatīties gaišāki arī īslaicīgas izžūšanas dēļ. Galīgo rezultātu ir mērķtiecīgi vērtēt tad, kad krāsa ir stabilizējusies.',
  },
]

export default function ZobuBalinesanaArLampuLv() {
  const pageRef = useRef<HTMLDivElement | null>(null)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.banguklinika.lt/lv/pakalpojumi/zobu-balinesana-ar-lampu/#service',
    name: 'Zobu balināšana ar lampu Klaipēdā',
    serviceType: 'Zobu balināšana ar LED lampu',
    description:
      'Zobu balināšana ar LED lampu Bangų zobārstniecības klīnikā Klaipēdā – klīnikā veikta estētiska procedūra zobu krāsas paspilgtinājumam. Cena 270 €.',
    url: 'https://www.banguklinika.lt/lv/pakalpojumi/zobu-balinesana-ar-lampu/',
    areaServed: { '@type': 'City', name: 'Klaipēda' },
    provider: { '@id': 'https://www.banguklinika.lt/#dentist' },
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu balināšana ar lampu Klaipēdā no 270€ | Bangų klīnika"
        description="Zobu balināšana ar lampu Klaipēdā — efektīvs veids, kā paspilgtināt zobus☑️un atgūt starojošu smaidu☑️. Pierakstieties procedūrai⏩Bangų klīnikā."
        keywords="zobu balinesana ar lampu, led balinesana, zobu balinesana klaipeda, kabinetu balinesana, bangų klinika"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-balinesana-ar-lampu`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-balinimas-su-lempa` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-balinesana-ar-lampu` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-balinimas-su-lempa` },
        ]}
        structuredData={structuredData}
      />

      <motion.div
        ref={pageRef}
        className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TableOfContents sections={tocSections} rootRef={pageRef} title="Saturs" cta={{ label: 'Pierakstīties vizītei', to: '/lv/kontakti' }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Zobu balināšana ar lampu Klaipēdā
            </h1>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                Zobu krāsa laika gaitā var mainīties dabisku novecošanās procesu, kafijas, tējas, tabakas,
                pigmentējošu pārtikas produktu vai citu ikdienas paradumu dēļ. Toni ietekmē ne tikai uz zobu
                virsmas uzkrājušās aplikums, bet arī zoba audos notiekošās izmaiņas. Kad tiek vēlēts
                paspilgtināt dabīgo zobu krāsu ar klīnikā veiktu procedūru, var tikt izvēlēta zobu
                balināšana ar lampu.
              </p>
              <p>
                Bangų zobārstniecības klīnikā Klaipēdā balināšana tiek plānota individuāli, izvērtējot zobu,
                smaganu, plombu un citu restaurāciju stāvokli. Procedūras laikā dabīgie zobi tiek pārklāti
                ar balinošu vielu, mīkstie mutes audi tiek aizsargāti, un atbilstoši izmantotās sistēmas
                protokolam gēls var tikt iedarbots ar LED lampu.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                to="/lv/kontakti"
                className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
              >
                Pierakstīties vizītei
              </Link>
              <a
                href="#kainos"
                className="rounded-full px-7 py-3 font-semibold text-base inline-block border border-brand/20 text-darkblue-700 hover:bg-brand-50 transition"
              >
                Skatīt cenu
              </a>
            </div>
          </motion.header>

          {/* KAINA */}
          <motion.section id="kainos" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                  Zobu balināšanas ar lampu cena
                </h2>
                <p className="text-slate-600">
                  Zobu balināšanas ar LED lampu cena ir atkarīga no izmantotās sistēmas, procedūras apjoma
                  un pirms balināšanas nepieciešamās sagatavošanas. Precīza cena tiek norādīta pēc mutes
                  stāvokļa novērtēšanas.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div
                  className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all"
                  style={{ borderColor: S }}
                >
                  <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>
                    Kabineta balināšana ar lampu
                  </h3>
                  <div className="divide-y divide-slate-100">
                    {[['Zobu balināšana ar LED lampu', '270 €']].map(([name, price], i) => (
                      <div key={i} className="flex justify-between items-center py-2.5">
                        <span className="text-slate-600 text-sm">{name}</span>
                        <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs mt-4">
                    Ja nepieciešams, pirms balināšanas var tikt ieteikta profesionāla mutes higiēna vai cita
                    sagatavošanas ārstēšana — tā tiek maksāta atsevišķi.
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
                    Aicinām pierakstīties konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja jums ir jautājumi vai vēlaties uzzināt vairāk par zobu balināšanu ar lampu, aicinām
                    pierakstīties konsultācijai. Vizītes laikā mēs novērtēsim jūsu zobu stāvokli, atbildēsim
                    uz interesējošajiem jautājumiem un palīdzēsim izprast visu procedūras gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Mēs tiecamies, lai katrs pacients justos droši — no pirmās konsultācijas līdz galīgajam
                    rezultātam.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts detalizēts klīniskais novērtējums',
                        'tiek apspriesti iespējamie balināšanas risinājumi',
                        'tiek paskaidroti procedūras posmi un rezultāti',
                        'tiek sastādīts individuāls ārstniecības plāns',
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1"><CheckIcon /></span>
                          <span className="leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/lv/kontakti"
                    className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
                  >
                    Pierakstīties vizītei
                  </Link>
                </div>
                <div className="relative bg-sky-50">
                  <img
                    src="/team/Jonas-light.jpg"
                    alt="Bangų zobārstniecības klīnikas ārsts"
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
                Kas ir zobu balināšana ar lampu?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu balināšana ar lampu ir zobārstniecības klīnikā veikta estētiska procedūra. Uz dabīgo
                  zobu virsmas tiek uzklāts profesionālai lietošanai paredzēts balinošs līdzeklis, kura
                  darbība balstīta uz ūdeņraža peroksīda savienojumiem.
                </p>
                <p>
                  Galveno balinošo iedarbību rada aktīvā viela, kas iedarbojas uz zobu krāsu nosakošajiem
                  savienojumiem. LED lampa tiek izmantota atbilstoši konkrētas balināšanas sistēmas ražotāja
                  noteiktai metodikai. Tās lietošanas ilgums un nolūks ir atkarīgs no izvēlētā produkta,
                  tāpēc dažādas kabineta balināšanas procedūras var tikt veiktas atšķirīgi.
                </p>
                <p>
                  LED zobu balināšana tiek izvēlēta iespējas dēļ visu procesu veikt klīnikā speciālista
                  uzraudzībā. Procedūras laikā tiek kontrolēts gēla daudzums, tā iedarbības laiks, mīksto
                  audu aizsardzība un pacienta sajūtas.
                </p>
                <p>
                  Balinātas tiek tikai dabīgās zobu struktūras. Plombas, kronīši, laminātes, tilti un citas
                  restaurācijas krāsu nemaina. Ja tās atrodas redzamajā smaida zonā, pēc balināšanas var
                  parādīties toņa atšķirība. Restaurāciju koriģēšana vai maiņa tiek apsvērta tikai tad, kad
                  krāsu neatbilstība ir pamanāma un pacientam estētiski aktuāla.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAM TINKA */}
          <motion.section id="kam-tinka" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kam ir piemērota zobu balināšana ar lampu?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                <p>
                  Zobu balināšana ar LED lampu var būt piemērota pacientiem, kuri vēlas paspilgtināt dabīgo
                  zobu krāsu ar klīnikā veiktu procedūru. Tā visbiežāk tiek apsvērta, kad zobi ir kļuvuši
                  tumšāki pigmentējošu dzērienu, pārtikas produktu, tabakas vai dabisku vecuma izmaiņu dēļ.
                </p>
                <p>
                  Pirms balināšanas tiek novērtēts viss mutes stāvoklis. Aktīvs kariess, neblīvas plombas,
                  zobu plaisas, smaganu iekaisums vai izteikts jutīgums var palielināt nevēlamu sajūtu risku.
                  Šādos gadījumos vispirms ir ieteicams ārstēt konstatētās problēmas.
                </p>
                <p>
                  Ja uz zobiem ir pigmentētas aplikumas vai akmeņi, pirms procedūras var tikt veikta
                  profesionāla mutes higiēna. Noņemot virsmas aplikumus, var precīzāk izvērtēt dabīgo zobu
                  krāsu un vienmērīgāk plānot balināšanu.
                </p>
              </div>

              <h3 className="font-semibold text-darkblue-700 mb-4">
                Procedūru var būt nepieciešams atlikt vai izvēlēties citu risinājumu, ja:
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'ir neārstētu kariesa bojājumu',
                  'smaganas ir stipri iekaisušas vai asiņo',
                  'konstatēts izteikts zobu jutīgums',
                  'ir neblīvas restaurācijas vai zobu plaisas',
                  'paciente ir grūtniece vai baro bērnu ar krūti',
                  'tiek gaidīts, ka mainīsies plombu, kronīšu vai laminātu krāsa',
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1"><CheckIcon /></span>
                    <span className="text-slate-700">{t}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Ja ir kļuvis tumšāks viens iepriekš ar sakņu kanāliem ārstēts zobs, ārējā zobu balināšana ar
                lampu var nesniegt vienmērīgu rezultātu. Šādā gadījumā var tikt apsvērta iekšējā zoba
                balināšana vai cita estētiskā ārstēšana.
              </p>
            </div>
          </motion.section>

          {/* PROCEDURA */}
          <motion.section id="procedura" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kā notiek zobu balināšana ar lampu?
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Precīza procedūras gaita un ilgums ir atkarīgs no izmantotās balināšanas sistēmas, gēla
                aplikāciju skaita, sagatavošanas un pacienta reakcijas.
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
                Dažiem pacientiem vienas procedūras rezultāta pietiek. Citos gadījumos var tikt apsvērta
                papildu kabineta vai uzturošā balināšana ar individuālām kapām.
              </p>
            </div>
          </motion.section>

          {/* PO PROCEDŪROS */}
          <motion.section id="po-procedūros" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas ir svarīgi zināt pēc zobu balināšanas?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Pēc procedūras var parādīties īslaicīgs zobu jutīgums pret aukstumu, siltumu vai gaisu. Tā
                  intensitāte un ilgums ir individuāls. Ja jutīgums ir izteikts, speciālists var ieteikt
                  jutīgumu mazinošus mutes kopšanas līdzekļus. Ja rodas stipras vai ilgstoši nepārejošas
                  sāpes, jāvēršas klīnikā.
                </p>
                <p>
                  Pēc balināšanas svarīgi ievērot individuāli sniegtos ieteikumus. Var tikt ieteikts
                  ierobežot bieži lietotus stipri pigmentējošus produktus, piemēram, kafiju, tēju, sarkanvīnu
                  un tabaku.
                </p>
                <p>
                  Balināšanas rezultāts nav mūžīgs. Zobu krāsu var atkal ietekmēt uztura paradumi, smēķēšana,
                  mutes higiēna un dabiski novecošanās procesi. Rezultātu palīdz saglabāt regulāra ikdienas
                  kopšana, profesionāla mutes higiēna un individuāli izvēlēta uzturošā balināšana.
                </p>
                <p>
                  Vērtējot zobu balināšanas ar LED lampu atsauksmes, ir svarīgi atcerēties, ka cita pacienta
                  pieredze nevar precīzi paredzēt individuālo rezultātu. Toņa izmaiņas, jutīgums un iespējamā
                  papildu procedūru nepieciešamība ir atkarīga no sākotnējā mutes stāvokļa un zobu audu
                  īpašībām.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL MES */}
          <motion.section id="kodel-mes" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Profesionāla zobu balināšana būtu jāveic tikai pēc mutes stāvokļa un pacienta estētisko
                  gaidu izvērtēšanas. Bangų zobārstniecības klīnikā vispirms tiek noteikts, vai zobu
                  balināšana ar lampu konkrētajā gadījumā ir piemērota.
                </p>
                <p>
                  Mūsu speciālisti izvērtē dabīgo zobu krāsu, restaurācijas, smaganu stāvokli un iespējamo
                  jutīguma risku. Pacientam tiek paskaidrota procedūras gaita, iespējamās sajūtas,
                  balināšanas robežas un zobu kopšana pēc vizītes.
                </p>
                <p>
                  Uzmanība tiek pievērsta mīksto audu aizsardzībai, precīzai balinošā līdzekļa lietošanai un
                  pacienta reakcijas novērošanai. Netiek solīts konkrēts baltuma līmenis, jo rezultāts ir
                  atkarīgs no individuālām zobu īpašībām un krāsu izmaiņu cēloņa.
                </p>
                <p>
                  Zobu balināšanas ar LED lampu cena ir atkarīga no izmantotās sistēmas, procedūras apjoma
                  un pirms balināšanas nepieciešamās sagatavošanas. Precīza cena tiek norādīta pēc mutes
                  stāvokļa novērtēšanas.
                </p>
                <p>
                  Meklējot profesionālu zobu balināšanu ar LED lampu Klaipēdā, Bangų zobārstniecības klīnika
                  piedāvā atbildīgi plānotu procedūru, skaidrus kopšanas ieteikumus un uz individuālu mutes
                  stāvokli balstītu ārstniecības plānu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* FINAL CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Pierakstieties zobu balināšanas procedūrai
              </h2>
              <p className="text-slate-700 max-w-3xl leading-relaxed mb-6">
                Vizītes laikā tiks novērtēts jūsu mutes stāvoklis, apspriestas iespējamās balināšanas
                iespējas un plānota individuāla procedūras gaita.
              </p>
              <Link
                to="/lv/kontakti"
                className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Pierakstīties vizītei
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}
