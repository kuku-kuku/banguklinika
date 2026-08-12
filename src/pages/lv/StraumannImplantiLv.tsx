import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { TableOfContents } from '../../components/TableOfContents'
import { useRef } from 'react'
import ReviewsCarousel from '../../components/ReviewsCarousel'
import { SITE_URL } from '../../i18n/lv'

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
  { id: 'kainos', label: 'Cenas' },
  { id: 'kas-yra', label: 'Kas ir STRAUMANN implanti?' },
  { id: 'kada-rekomenduojami', label: 'Kad ir ieteicami?' },
  { id: 'privalumai', label: 'Sistēmas priekšrocības' },
  { id: 'procesas', label: 'Kā notiek implantācija?' },
  { id: 'trukme', label: 'Dzīšanas ilgums' },
  { id: 'prieziura', label: 'Kopšana pēc ārstēšanas' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function StraumannImplantiLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/lv/pakalpojumi/straumann-implanti/#service",
    "name": "STRAUMANN zobu implanti Klaipēdā",
    "serviceType": "STRAUMANN zobu implanti",
    "description": "Zobu implantācija ar STRAUMANN implantu sistēmu Bangų zobārstniecības klīnikā Klaipēdā.",
    "url": "https://www.banguklinika.lt/lv/pakalpojumi/straumann-implanti/",
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="STRAUMANN zobu implanti Klaipēdā - Bangų klīnika"
        description="STRAUMANN zobu implanti Klaipēdā – Šveices implantu sistēma Bangų zobārstniecības klīnikā. Implants no 650€. Pierakstieties konsultācijai jau šodien."
        keywords="straumann implanti, zobu implanti, sveices implanti, implantacija, klaipeda"
        canonical={`${SITE_URL}/lv/pakalpojumi/straumann-implanti`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/straumann-dantu-implantai` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/straumann-implanti` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/straumann-dantu-implantai` },
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
              STRAUMANN zobu implanti Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zaudējot vienu vai vairākus zobus, mainās ne tikai smaida estētika, bet arī ikdienas mutes funkcija.
                  Var kļūt grūtāk košļāt, skaidri runāt, un atlikušajiem zobiem tiek pielikta lielāka slodze. Laika gaitā
                  blakus esošie zobi var sākt slīdēt uz izveidojušos tukšo vietu, mainīties sakodiens un samazināties žokļa
                  kaula tilpums, tāpēc zaudētos zobus svarīgi atjaunot laikus.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā implantācijai tiek izmantoti STRAUMANN zobu implanti. Ārstēšana
                  tiek plānota individuāli, izvērtējot trūkstošo zobu skaitu, žokļa kaula un smaganu stāvokli,
                  sakodienu, pacienta vispārējo veselību un turpmākās protezēšanas iespējas. Uzmanība tiek pievērsta ne tikai
                  implanta ieskrūvēšanai, bet visam ārstēšanas procesam – no diagnostikas un piemērota implanta izvēles līdz
                  galīgai zoba atjaunošanai un ilgtermiņa kopšanai.
                </p>
              </div>
            </div>

            <div className="flex justify-start mt-6">
              <Link
                to="/lv/kontakti"
                className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Pierakstīties vizītei
              </Link>
            </div>

            {/* KAINOS */}
            <motion.section id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      STRAUMANN zobu implantu cenas
                    </h2>
                    <p className="text-slate-600">
                      STRAUMANN implantu cena ir atkarīga no implantu skaita, izmantotajiem komponentiem, diagnostikas,
                      ķirurģiskās procedūras, kaula atjaunošanas nepieciešamības un turpmākā protēzes veida. Precīzs ārstēšanas
                      apjoms, ilgums un cena tiek noteikti konsultācijas laikā.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>STRAUMANN implanti</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['STRAUMANN implants (tikai implants)', '650 €'],
                      ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between items-center py-2.5">
                          <span className="text-slate-600 text-sm">{name}</span>
                          <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-500 text-xs mt-4">
                      Cenā – tikai pats implants. Protēzes balsts, kronītis, ķirurģiskā procedūra un citi pakalpojumi
                      maksā papildus.
                    </p>
                  </div>
                </div>

                <p className="text-slate-500 text-sm mt-6">
                  Precīza STRAUMANN implantācijas cena Klaipēdā tiek pārrunāta individuālas konsultācijas laikā, ņemot
                  vērā konkrēto klīnisko situāciju.
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
                    Aicinām pierakstīties konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja Jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties
                    konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā izvērtēsim Jūsu mutes stāvokli, atbildēsim
                    uz jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs cenšamies, lai katrs pacients justos droši – no pirmās
                    konsultācijas līdz galīgajam rezultātam. Piesakieties un speriet pirmo soli pretī veselam smaidam.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikta detalizēta klīniskā izvērtēšana',
                        'tiek pārrunātas iespējamās ārstēšanas metodes',
                        'tiek izskaidroti procedūras posmi un termiņi',
                        'tiek sagatavots individuāls ārstēšanas plāns',
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
                <div className="relative lg:aspect-[4/5] bg-sky-50 min-h-[300px]">                  <img
                    src="/team/Jonas-light%20LV.jpg"
                    alt="Bangų zobārstniecības klīnikas ārsts"
                    className="absolute inset-0 w-full h-full object-cover lg:object-contain"
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir STRAUMANN zobu implanti?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zoba implants – tas ir žokļa kaulā ieskrūvējams elements, kas pilda zaudētā zoba saknes balsta
                  funkciju. Pats implants nav mākslīgā zoba redzamā daļa. Galīgo atjaunojumu veido implants, protēzes
                  balsts un uz tā stiprināts individuāli izgatavots kronītis, tilts vai cita protēzes konstrukcija.
                </p>
                <p>
                  Pēc implantācijas notiek osteointegrācija – bioloģisks process, kura laikā ap implanta virsmu
                  veidojas kaula kontakts. Tā tiek radīts stabils pamats turpmākajai restaurācijai. Ārstēšanas rezultātam
                  svarīga ir ne tikai implantu sistēma, bet arī tā precīzais novietojums, kaula un mīksto audu
                  stāvoklis, sakodiena slodze, protēzes pielāgošana un pacienta mutes higiēna.
                </p>
                <p>
                  STRAUMANN – Šveicē izstrādāta implantu sistēma, kas ietver dažādu konstrukciju, izmēru, materiālu un
                  virsmu implantus un protezēšanas komponentus. Plašā izvēle ļauj ārstam izvēlēties risinājumu atbilstoši
                  trūkstošā zoba vietai, žokļa anatomijai un plānotajai protēzei.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REKOMENDUOJAMI */}
          <motion.section id="kada-rekomenduojami" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad ir ieteicami STRAUMANN zobu implanti?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                STRAUMANN implanti var tikt apsvērti tad, kad nepieciešams atjaunot vienu, vairākus vai vēl vairāk
                zaudētu zobu. Implantācija palīdz izveidot stabilu pamatu protēzes konstrukcijai, atjaunot košļāšanas
                funkciju un saglabāt zobu loka viengabalainību.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Zobu implantācija var tikt ieteikta, kad:</h3>

                <div className="grid gap-3">
                  {[
                    'trūkst viena zoba un vēlaties izvairīties no blakus esošo veselo zobu slīpēšanas',
                    'zaudēti vairāki blakus esoši zobi',
                    'nepieciešams balsts zobu tiltam',
                    'izņemamā protēze nav pietiekami stabila',
                    'zaudēts vairākums vai visi viena žokļa zobi',
                    'pēc zoba izņemšanas plānota ilgtermiņa tā atjaunošana',
                    'tiek tiekts atjaunot košļāšanas funkciju un sakodiena stabilitāti'
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
                  Pat viena zoba trūkums laika gaitā var ietekmēt visu zobu sistēmu. Blakus esošie zobi var sākt slīdēt
                  uz tukšo vietu, un pretējā žokļa zobs – slīdēt zaudētā zoba virzienā. Tā dēļ var mainīties sakodiens,
                  parādīties grūtāk iztīrāmas vietas un nevienmērīgi sadalīties košļāšanas slodze.
                </p>
                <p>
                  Zoba zaudēšanas vietā kauls vairs nesaņem ierasto slodzi, tāpēc laika gaitā tā tilpums var samazināties.
                  Jo ilgāk zobs netiek atjaunots, jo sarežģītāka var kļūt vēlākā implantācijas plānošana.
                </p>
                <p>
                  Implantācija nav automātiski piemērota katram pacientam. Pirms ārstēšanas tiek izvērtēta mutes higiēna,
                  smaganu veselība, kaula tilpums un kvalitāte, sakodiens, smēķēšanas paradumi, lietotie medikamenti un
                  vispārējais veselības stāvoklis. Ja mutē ir aktīvi iekaisumi vai citas neārstētas problēmas, vispirms
                  var tikt ieteikta sagatavojoša ārstēšana.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIVALUMAI */}
          <motion.section id="privalumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Ar kādām priekšrocībām izceļas STRAUMANN implantu sistēma?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                STRAUMANN implantu sistēma izceļas ar dažādu ķirurģisko un protezēšanas risinājumu izvēli. Tas ļauj
                ārstēšanu pielāgot konkrētajai žokļa anatomijai, kaula stāvoklim, trūkstošo zobu skaitam un turpmākās
                restaurācijas veidam.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Plaša implantu izvēle</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    STRAUMANN sistēmā tiek piedāvāti dažādu konstrukciju, garumu un diametru implanti. Ārsts var
                    izvēlēties kaula vai mīksto audu līmenī stiprināmus risinājumus un pielāgot tos atbilstoši
                    operējamās vietas anatomijai un plānotajam protezēšanas veidam.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">„Roxolid” materiāls</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Daļa STRAUMANN implantu tiek izgatavoti no „Roxolid” – titāna un cirkonija sakausējuma. Šis
                    materiāls izceļas ar lielāku mehānisko izturību nekā tīrs titāns un var būt noderīgs gadījumos, kad
                    tiek apsvērti mazāka diametra implanti vai tiek ārstētas anatomiski ierobežotas vietas.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">„SLActive” virsma</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    „SLActive” ir hidrofila STRAUMANN implanta virsma, izstrādāta mijiedarbībai ar bioloģiskajiem
                    šķidrumiem un osteointegrācijas procesa atbalstam. To var izmantot, plānojot dažādus dzīšanas un
                    slogošanas protokolus.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Protezēšanas iespēju daudzveidība</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    STRAUMANN sistēma ietver implantus un dažādus protezēšanas komponentus. Uz implantiem var tikt
                    stiprināti atsevišķi kronīši, tilti vai lielāka apjoma konstrukcijas. Ārstēšana tiek plānota no
                    galīgā rezultāta, tāpēc implanta novietojums tiek izvēlēts, ņemot vērā turpmākās protēzes funkciju
                    un estētiku.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek veikta zobu implantācija ar STRAUMANN implantiem?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu implantācija Bangų zobārstniecības klīnikā tiek veikta secīgi, lai precīzi ieplānotu implanta
                novietojumu, radītu piemērotus dzīšanas apstākļus un sagatavotu stabilu pamatu turpmākajai protēzei.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultācija un diagnostika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Vispirms tiek izvērtēts mutes vispārējais stāvoklis, atlikušie zobi, smaganas, sakodiens un trūkstošā
                    zoba vieta. Tiek veikti nepieciešamie radioloģiskie izmeklējumi, kas palīdz noteikt kaula augstumu,
                    platumu un blakus esošās anatomiskās struktūras. Tāpat tiek pārrunāta pacienta veselība, lietotie
                    medikamenti un iepriekšējā ārstēšana.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Individuāla ārstēšanas plāna sastādīšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Balstoties uz diagnostikas datiem, tiek izvēlēts implantācijas veids, STRAUMANN implanta tips,
                    izmērs un plānotais novietojums. Pacientam tiek izskaidrota ārstēšanas gaita, iespējamās
                    alternatīvas, papildu procedūru nepieciešamība, orientējošais ilgums un cena.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Implantācijas vietas sagatavošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ja trūkstošais zobs jau ir izņemts, žokļa kaulā tiek sagatavota implantam paredzētā vieta. Dažos
                    gadījumos implants var tikt ieskrūvēts uzreiz pēc zoba izņemšanas. Tam nepieciešams pietiekams kaula
                    daudzums un iespēja nodrošināt implanta stabilitāti. Ja kaula nepietiek, pirms implantācijas vai tās
                    laikā var tikt veikta kaula augmentācija.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">STRAUMANN implanta ieskrūvēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Procedūras laikā tiek pielietota vietējā anestēzija. Sagatavotajā vietā tiek ieskrūvēts plānotais
                    implants un tiek izvērtēta tā primārā stabilitāte. Atkarībā no ārstēšanas plāna, implants var tikt
                    atstāts dzīt zem smaganām vai tam tiek piestiprināts dzīšanas balsts.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dzīšana un osteointegrācija</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pēc implantācijas sākas implanta integrācija žokļa kaulā. Dzīšanas periodā svarīgi ievērot ārsta
                    ieteikumus, rūpēties par mutes higiēnu un ierasties uz kontroles vizītēm.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">06</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Protezēšana uz implanta</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kad implants pietiekami stabili integrējas, tiek veikta digitāla skenēšana vai nospiedumi. Pēc tiem
                    tiek izgatavota individuāla protēzes konstrukcija. Galīgās pielāgošanas laikā tiek izvērtēta
                    restaurācijas forma, krāsa, kontakts ar blakus esošajiem zobiem, sakodiens un pacienta sajūta.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* TRUKMĖ */}
          <motion.section id="trukme" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Cik ilgi pieaug implants un no kā ir atkarīgs ārstēšanas ilgums?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Implanta dzīšanas un visas ārstēšanas ilgums katram pacientam ir atšķirīgs. To ietekmē implantācijas
                  vieta, kaula blīvums un tilpums, implanta primārā stabilitāte, ķirurģiskās procedūras apjoms, kaula
                  augmentācijas nepieciešamība, mutes higiēna un vispārējais veselības stāvoklis.
                </p>
                <p>
                  Dažos gadījumos var tikt veikta tūlītēja implantācija – implants tiek ieskrūvēts uzreiz pēc zoba
                  izņemšanas. Esot piemērotai primārajai stabilitātei un labvēlīgiem klīniskajiem apstākļiem, tajā pašā
                  dienā var tikt piestiprināta pagaidu restaurācija.
                </p>
                <p>
                  Svarīgi nošķirt tūlītēju implanta ieskrūvēšanu, pagaidu kronīša piestiprināšanu un galīgo protezēšanu.
                  Pat ja pēc procedūras tiek piestiprināts pagaidu zobs, bioloģiskā implanta dzīšana kaula iekšpusē
                  turpinās. Šajā periodā restaurācija ir jāsargā no pārmērīgas košļāšanas slodzes.
                </p>
                <p>
                  Pastāvīgā kronīša piestiprināšanas laiks ir atkarīgs no implanta stabilitātes, kaula un mīksto audu
                  dzīšanas un izvēlētā ārstēšanas protokola. Ja tiek veikta kaula augmentācija vai citas papildu
                  procedūras, ārstēšanas process var būt ilgāks.
                </p>
                <p>
                  STRAUMANN implantu cena ir atkarīga no implantu skaita, izmantotajiem komponentiem, diagnostikas,
                  ķirurģiskās procedūras, kaula atjaunošanas nepieciešamības un turpmākā protēzes veida. Precīzs
                  ārstēšanas apjoms, ilgums un cena tiek noteikti konsultācijas laikā.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIEŽIŪRA */}
          <motion.section id="prieziura" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā kopt STRAUMANN zobu implantus pēc ārstēšanas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Implanti nav pakļauti kariesa bojājumiem tā, kā dabīgie zobi, taču ap tiem var uzkrāties aplikums un
                  attīstīties mīksto un kaula audu iekaisums. Tāpēc implantiem un uz tiem piestiprinātajām protēzēm
                  nepieciešama regulāra kopšana.
                </p>
                <p>
                  Pēc ķirurģiskās procedūras svarīgi ievērot ārsta sniegtos ieteikumus. Pirmajās dienās var tikt ieteikts
                  izvairīties no intensīvas fiziskās slodzes, karsta vai cieta ēdiena un mehāniskas operētās vietas
                  kairināšanas. Medikamentus un mutes kopšanas līdzekļus vajadzētu izmantot tikai tā, kā norādīts.
                </p>
                <p>
                  Pēc audu sadzīšanas implants un protēzes konstrukcija ir jātīra divas reizes dienā. Īpaši svarīgi ir
                  notīrīt aplikumu pie smaganu malas un starpzobu telpās. Atkarībā no restaurācijas konstrukcijas, var
                  tikt ieteiktas starpzobu birstītes, īpaša diegs vai citi individuāli izvēlēti līdzekļi.
                </p>
                <p>
                  Regulāras profilaktiskās vizītes ļauj izvērtēt smaganu stāvokli, protēzes stabilitāti, sakodiena
                  slodzi un higiēnas kvalitāti. Ja parādās asiņošana, pietūkums, sāpes, nepatīkama garša vai protēzes
                  kustība, jāvēršas klīnikā.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties zobu implantācijas pakalpojumus, svarīga ir ne tikai izmantotā implantu sistēma, bet arī
                  tas, kā tiek veikta diagnostika, plānots implanta novietojums un nodrošināta ārstēšanas nepārtrauktība.
                  Bangų zobārstniecības klīnikā STRAUMANN implanti tiek izmantoti atbildīgi, cenšoties saskaņot funkciju,
                  estētiku un ilgtermiņa mutes veselību.
                </p>
                <p>
                  Klīnikā strādājošie speciālisti katru gadījumu vērtē individuāli, ņemot vērā žokļa kaula, smaganu,
                  sakodiena un atlikušo zobu stāvokli. Pirms implantācijas pacientam tiek izskaidroti iespējamie
                  ārstēšanas virzieni, papildu procedūru nepieciešamība, dzīšanas gaita un turpmākās protezēšanas
                  iespējas. Uzmanība tiek pievērsta ne tikai implanta ieskrūvēšanai, bet arī tā precīzam novietojumam un
                  piemērotai turpmākās restaurācijas pielāgošanai.
                </p>
                <p>
                  Pacienti novērtē profesionālu saziņu, skaidru ārstēšanas plānu un konsekventu kopšanu no konsultācijas
                  līdz galīgai protezēšanai. Tāpēc tiem, kas meklē profesionālu implantāciju ar STRAUMANN zobu
                  implantiem Klaipēdā, Bangų zobārstniecības klīnika ir uzticama izvēle.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties STRAUMANN implantācijas konsultācijai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja apsverat zaudēta zoba atjaunošanu ar implantu, aicinām pierakstīties konsultācijai Bangų
                  zobārstniecības klīnikā. Vizītes laikā tiks izvērtēts Jūsu mutes stāvoklis, pārrunātas iespējamās
                  ārstēšanas alternatīvas un ieplānota piemērotākā STRAUMANN implantācijas gaita.
                </p>
                <p>
                  Piesakieties un speriet pirmo soli pretī atjaunotam smaidam.
                </p>
              </div>

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
