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
  { id: 'kas-yra', label: 'Kas ir balināšana ar kapām?' },
  { id: 'kam-tinka', label: 'Kam ir piemērotas?' },
  { id: 'procesas', label: 'Kā notiek procedūra?' },
  { id: 'ka-zinoti', label: 'Kas svarīgi zināt?' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function ZobuBalinesanasKapasLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/lv/pakalpojumi/zobu-balinesanas-kapas/#service",
    "name": "Zobu balināšanas kapas Klaipēdā",
    "serviceType": "Zobu balināšanas kapas",
    "description": "Individuālu zobu balināšanas kapu izgatavošana un balināšanas plānošana Bangų zobārstniecības klīnikā Klaipēdā.",
    "url": "https://www.banguklinika.lt/lv/pakalpojumi/zobu-balinesanas-kapas/",
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        title="Zobu balināšanas kapas Klaipēdā - Bangų klīnika"
        description="Individuālas zobu balināšanas kapas Klaipēdā – plānota mājās veicama balināšana Bangų zobārstniecības klīnikā. Cena no 200€ (bez balināšanas gēla).⏩Piesakieties konsultācijai."
        keywords="zobu balinasanas kapas, individualas balinasanas kapas, majas balinasana, opalescence, klaipeda"
        structuredData={structuredData}
        lang="lv"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-balinesanas-kapas`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-balinimo-kapos` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-balinesanas-kapas` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-balinimo-kapos` },
        ]}
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
              Zobu balināšanas kapas Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zobu krāsa laika gaitā var mainīties dabisku novecošanas procesu, kafijas, tējas, tabakas,
                  krāsojošu pārtikas produktu vai citu ikdienas ieradumu dēļ. Kad ir vēlme pakāpeniski padarīt
                  gaišāku dabisko zobu toni un procedūru veikt mājās, viens no iespējamiem risinājumiem ir
                  individuālas zobu balināšanas kapas.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā balināšana ar kapām tiek plānota individuāli, vispirms
                  izvērtējot zobu, smaganu, plombu un citu restaurāciju stāvokli. Pēc pacienta zobu formas
                  izgatavotās kapas palīdz vienmērīgi izkliedēt balināšanas līdzekli un samazināt tā nokļūšanu uz
                  smaganām.
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
                      Zobu balināšanas kapu cenas
                    </h2>
                    <p className="text-slate-600">
                      Balināšanas kapu cena ir atkarīga no izvēlētās sistēmas, individuālo kapu izgatavošanas,
                      balināšanas līdzekļa un nepieciešamo vizīšu skaita. Tāpēc precīza zobu balināšanas kapu cena
                      tiek noteikta pēc konsultācijas un mutes stāvokļa izvērtēšanas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Zobu balināšanas kapas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Individuālās balināšanas kapas (bez balināšanas gēla)', 'no 200 €'],
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
                  Precīza zobu balināšanas kapu cena Klaipēdā tiek pārrunāta individuālas konsultācijas laikā,
                  ņemot vērā konkrēto klīnisko situāciju.
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
                    konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā izvērtēsim Jūsu mutes stāvokli,
                    atbildēsim uz interesējošiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā tiecamies, lai katrs pacients justos droši – no pirmās
                    konsultācijas līdz gala rezultātam. Piesakieties un speriet pirmo soli veselīga smaida virzienā.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts pilnīgs klīniskais izvērtējums',
                        'tiek pārrunātas iespējamās ārstēšanas metodes',
                        'tiek izskaidroti procedūras posmi un termiņi',
                        'tiek sastādīts individuāls ārstēšanas plāns',
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
                <div className="relative aspect-[4/5] bg-sky-50">
                  <div className="pt-[125%]" />
                  <img
                    src="/team/Jonas-light%20LV.jpg"
                    alt="Bangų zobārstniecības klīnikas ārsts"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_15%)]" />
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir zobu balināšana ar kapām?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu balināšana ar kapām – tā ir mājās veicama estētiska procedūra, kuras laikā individuāli
                  izgatavotās kapās tiek ievietots neliels ārsta izvēlēta balināšanas līdzekļa daudzums. Kapas
                  tiek uzliktas uz zobiem un nēsātas noteiktu laiku dienā vai naktī, atkarībā no konkrētā produkta
                  lietošanas režīma.
                </p>
                <p>
                  Balināšanas līdzekļos visbiežāk tiek izmantoti ūdeņraža vai karbamīda peroksīda savienojumi.
                  Tie iedarbojas uz zoba audos esošajām krāsu noteicošajām vielām, tāpēc dabiskais zobu tonis
                  pakāpeniski kļūst gaišāks.
                </p>
                <p>
                  Individuālās kapas balināšanai tiek izgatavotas atbilstoši konkrēta pacienta zobu izliekumam.
                  Tām precīzi jāpieguļ, jābūt ērtām un jāsaglabā balināšanas līdzeklis vajadzīgajā vietā. Lielāks
                  gēla daudzums rezultātu neuzlabo ātrāk, taču var izplūst uz smaganām un tās kairināt.
                </p>
                <p>
                  Svarīgi zināt, ka zobu balināšanas kapas maina tikai dabisko zobu krāsu. Plombas, kroņi,
                  laminātes, tilti un citas restaurācijas nebalojas. Ja tās atrodas redzamajā smaida zonā, pēc
                  balināšanas var parādīties krāsu atšķirība, tāpēc tas tiek pārrunāts vēl pirms procedūras.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAM TINKA */}
          <motion.section id="kam-tinka" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kam ir piemērotas zobu balināšanas kapas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                <p>
                  Balināšanas kapas var būt piemērotas pacientiem, kuri vēlas pakāpeniski padarīt gaišāku dabisko
                  zobu toni un veikt procedūru ērtā laikā mājās. Šī metode bieži tiek izvēlēta, kad zobi kļuvuši
                  tumšāki pārtikas, dzērienu, tabakas vai dabisku ar vecumu saistītu pārmaiņu dēļ.
                </p>
                <p>
                  Pirms balināšanas ārsts izvērtē, vai nav aktīva kariesa, nehermētisku plombu, smaganu iekaisuma,
                  plaisu vai izteikta zoba jutīguma. Ja uz zobiem uzkrājies pigmentēts aplikums vai zobakmens,
                  var tikt ieteikta profesionāla mutes higiēna. Noņemot virsmas aplikumu, iespējams precīzāk
                  izvērtēt dabisko zobu toni un vienmērīgāk plānot balināšanu.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Zobu balināšanu var nākties atlikt, ja:</h3>

                <div className="grid gap-3">
                  {[
                    'mutē ir neārstēti kariesa bojājumi',
                    'smaganas asiņo vai ir stipri iekaisušas',
                    'ir konstatēts izteikts zobu jutīgums',
                    'ir nehermētiskas restaurācijas vai zobu plaisas',
                    'paciente ir grūtniecības stāvoklī vai baro bērnu ar krūti',
                    'balināšanas līdzekli nav iespējams droši lietot atbilstoši instrukcijām'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Ne visas krāsu izmaiņas uz balināšanu reaģē vienādi. Ja tumšāks kļuvis viens iepriekš sakņu
                  kanālos ārstēts zobs, ārējās balināšanas kapas var nesniegt vienmērīgu rezultātu. Šādā gadījumā
                  var tikt apsvērta zoba iekšējā balināšana vai cits estētisks risinājums.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā notiek zobu balināšana ar kapām?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Balināšana ar kapām tiek veikta vairākos secīgos posmos.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Mutes stāvokļa izvērtēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek apskatīti zobi, smaganas un esošās restaurācijas. Tiek izvērtēts sākotnējais zobu tonis,
                    jutīgums un pacienta gaidas. Ja tiek konstatētas mutes slimības, vispirms tiek izveidots to
                    ārstēšanas plāns.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zobu nospiedumu vai digitālā attēla iegūšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Lai kapas precīzi atbilstu zobu formai, tiek ņemti tradicionāli nospiedumi vai veikta digitāla
                    skenēšana. Pēc iegūtajiem datiem tiek izveidots zobu modelis.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Individuālu balināšanas kapu izgatavošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek izgatavotas plānas un caurspīdīgas kapas. Vizītes laikā tiek pārbaudīts, vai tās ir ērtas,
                    nespiež smaganas, viegli uzliekamas un stabili turas uz zobiem.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Balināšanas līdzekļa lietošana mājās</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pacientam tiek parādīts, cik līdzekļa likt kapās, kā tās uzlikt un cik ilgi nēsāt. Balināšanas
                    periods var ilgt no dažām dienām līdz vairākām nedēļām, taču to nevajadzētu patstāvīgi
                    pagarināt. Precīzs režīms ir atkarīgs no produkta koncentrācijas un zobu reakcijas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Rezultāta izvērtēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pēc ieteiktā balināšanas perioda var tikt veikta kontroles apskate. Tiek izvērtēts sasniegtais
                    tonis, jutīgums un turpmākās aprūpes nepieciešamība.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Gala rezultāts ir atkarīgs no sākotnējās zobu krāsas, pigmentācijas rakstura un individuālajām
                zobu audu īpašībām. Tāpēc precīzu gaišuma pakāpi nav iespējams garantēt iepriekš.
              </p>
            </div>
          </motion.section>

          {/* KĄ SVARBU ŽINOTI */}
          <motion.section id="ka-zinoti" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas svarīgi zināt, balinot zobus mājās?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Balināšanas kapas un līdzeklis jālieto tikai atbilstoši ārsta sniegtajiem ieteikumiem. Ilgāka
                  nēsāšana vai lielāks gēla daudzums ne vienmēr uzlabo rezultātu, taču var palielināt jutīguma un
                  smaganu kairinājuma risku.
                </p>
                <p>
                  Pārejošs jutīgums pret aukstumu vai siltumu ir viens no biežākajiem blakusefektiem. Ja tas ir
                  izteikts, var tikt ieteikts veikt pārtraukumus, mainīt lietošanas režīmu vai lietot jutīgumu
                  mazinošus līdzekļus. Ja rodas stipras sāpes vai ilgstoši saglabājas smaganu kairinājums,
                  balināšana jāpārtrauc un jāvēršas klīnikā.
                </p>
                <p>
                  Pēc katras lietošanas kapas tiek izskalotas vēsā vai remdenā ūdenī un glabātas kārbiņā. No karsta
                  ūdens un agresīviem tīrīšanas līdzekļiem vajadzētu izvairīties, jo kapas var deformēties vai tikt
                  bojātas.
                </p>
                <p>
                  Balināšanas periodā ir vērts ierobežot bieži lietotus stipri pigmentējošus produktus, piemēram,
                  kafiju, tēju, sarkanvīnu un tabaku. Vissvarīgāk ir ievērot konkrētajai balināšanas sistēmai
                  sniegtos ieteikumus.
                </p>
                <p>
                  „Opalescence” balināšanas kapas un citas profesionālās mājās veicamās balināšanas sistēmas var
                  atšķirties pēc koncentrācijas un lietošanas režīma. Tāpēc līdzekli nevajadzētu izvēlēties tikai
                  pēc nosaukuma vai internetā atrastiem padomiem.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc ir vērts izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu balināšana būtu jāplāno, izvērtējot ne tikai vēlamo krāsu, bet arī vispārējo mutes stāvokli.
                  Bangų zobārstniecības klīnikā vispirms tiek noteikts, vai balināšana pacientam ir piemērota un
                  kādu rezultātu var pamatoti sagaidīt.
                </p>
                <p>
                  Mūsu speciālisti izvērtē dabisko zobu krāsu, restaurācijas, jutīgumu un smaganu stāvokli.
                  Pacientam tiek izskaidrots, kā lietot kapas, cik daudz balināšanas līdzekļa likt, cik ilgi tās
                  nēsāt un kā rīkoties, ja rodas jutīgums.
                </p>
                <p>
                  Balināšanas kapu cena ir atkarīga no izvēlētās sistēmas, individuālo kapu izgatavošanas,
                  balināšanas līdzekļa un nepieciešamo vizīšu skaita. Tāpēc precīza zobu balināšanas kapu cena tiek
                  noteikta pēc konsultācijas un mutes stāvokļa izvērtēšanas.
                </p>
                <p>
                  Tiem, kuri meklē individuālas balināšanas kapas Klaipēdā, Bangų zobārstniecības klīnika piedāvā
                  profesionāli plānotu balināšanu, skaidrus lietošanas ieteikumus un pacienta mutes stāvoklim
                  pielāgotu ārstēšanas plānu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties zobu balināšanas kapu konsultācijai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja apsverat zobu balināšanu mājās, aicinām pierakstīties konsultācijai Bangų zobārstniecības
                  klīnikā. Vizītes laikā tiks izvērtēts Jūsu mutes stāvoklis, pārrunātas iespējamās ārstēšanas
                  alternatīvas un izraudzīts vispiemērotākais balināšanas režīms.
                </p>
                <p>
                  Piesakieties un parūpējieties par savu smaidu profesionāli.
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
