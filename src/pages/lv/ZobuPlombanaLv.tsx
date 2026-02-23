import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { SITE_URL } from '../../i18n/lv'

// Animāciju iestatījumi
const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

// Ikonas
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

export default function ZobuPlombanaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Zobu plombēšana",
    "description": "Profesionāla zobu plombēšana Klaipēdā. Estētiskā un ārstnieciskā plombēšana, kariesa ārstēšana.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klīnika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu plombēšana Klaipēdā | Cena — Bangų klīnika"
        description="Profesionāla zobu plombēšana Klaipēdā. Estētiskā un funkcionālā plombēšana, kariesa ārstēšana, kvalitatīvi materiāli un ilgstošs rezultāts."
        keywords="zobu plombēšana, estētiskā plombēšana, zobu ārstēšana, kariess, Klaipēda, zobārsts"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-plombana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-plombavimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-plombana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-plombavimas` },
        ]}
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">

        {/* HERO */}
        <motion.header className="mb-12 text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionāla zobu plombēšana Klaipēdā
          </h1>
          <p className="text-xl text-brand font-medium mb-6">
            Zoba funkcijas un estētikas atjaunošana
          </p>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Zobu plombēšana ir viena no visbiežāk veiktajām zobārstniecības procedūrām, kas paredzēta, lai apturētu zoba bojājumu progresēšanu un atjaunotu tā funkciju un hermētiskumu. Savlaicīgi veikta zobu plombēšana palīdz aizsargāt zobu no tālākas bojāšanās, samazināt sāpju risku un izvairīties no sarežģītākas ārstēšanas nākotnē.
            </p>
            <p>
              Bangų zobārstniecības klīnikā Klaipēdā veiktā zobu plombēšana balstās uz rūpīgu diagnostiku, modernajiem plombēšanas materiāliem un individuālu pieeju katram pacientam. Procedūras laikā tiek censties ne tikai noņemt bojātās audis, bet arī atjaunot dabīgo zoba formu un košļāšanas funkciju. Pirms ārstēšanas tiek novērtēts zoba stāvoklis, tāpēc tiek izvēlēts piemērotākais plombēšanas veids, kas nodrošina ilgstošu un uzticamu rezultātu.
            </p>
          </div>

          {/* CTA POGA AUGŠĀ */}
          <div className="flex justify-start">
            <Link to="/lv/kontakti" className="btn-primary rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
              Pierakstīties vizītam
            </Link>
          </div>

          {/* CENAS */}
          <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Zobu plombēšanas cena
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 mb-6">
            <p>
              Zobu plombēšanas cena ir atkarīga no zoba stāvokļa, bojājuma apjoma, izmantotajiem materiāliem un procedūras sarežģītības. Pirms ārstēšanas uzsākšanas Bangų zobārstniecības klīnikā vienmēr tiek veikta konsultācija un profilaktiskā pārbaude, kuru laikā tiek izstrādāts individuāls ārstēšanas plāns.
            </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden">
            <div className="divide-y divide-slate-100">
              {[
                { name: "Konsultācija, profilaktiskā pārbaude", price: "20 €" },
                { name: "Zobu plombēšana ar gaismas plombu", price: "70 – 90 €" },
                { name: "Zobu plombēšana ar stikla jonomēru", price: "40 – 60 €" },
                { name: "Pagaidu plomba", price: "no 40 €" },
                { name: "Ārstnieciskais pamats (kalcija/stikla jonomērs)", price: "no 15 €" },
                { name: "Pretsāpju injekcija", price: "10 €" },
                { name: "Vienreizējie materiāli", price: "15 €" },
                { name: "Rentgena uzņēmums", price: "10 €" },
                { name: "Koferdama sistēmas izmantošana", price: "10 €" }
              ].map((service, index) => (
                <div key={index} className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                  <span className="text-slate-700 font-medium">{service.name}</span>
                  <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            Precīza zobu plombēšanas cena tiek apspriesta individuālās konsultācijas laikā.
          </p>
          </div>
        </motion.header>

        {/* KAS TAS IR */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6 text-center sm:text-left">
            Kas ir zobu plombēšana?
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Zobu plombēšana ir zobārstniecības procedūra, kuras laikā tiek noņemtas kariesa vai citādi bojātās zobu audis, bet izveidotā dobums tiek atjaunots ar speciālu plombēšanas materiālu. Šādā veidā zobs kļūst hermētisks, atgūst savu funkciju un tiek aizsargāts no baktēriju iekļūšanas un tālākas bojāšanās.
            </p>
            <p>
              Plombēšanas laikā tiek atjaunota ne tikai zoba struktūra, bet arī tā anatomiskā forma, kas ļauj pareizi košļāt un izvairīties no nevienmērīgas slodzes. Atkarībā no bojājuma dziļuma un vietas var tikt piemēroti dažādi plombēšanas risinājumi — no vienkāršas virsmas plombēšanas līdz dziļākām restaurācijām.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ToothIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Funkcijas atjaunošana</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Tiek atjaunota zoba košļāšanas funkcija un anatomiskā forma, novēršot sakodiens problēmas.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ShieldIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Aizsardzība un hermētiskums</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Tiek novērsta baktēriju izplatīšanās un zoba nerva bojājumi.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ClockIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Ilgmūžība</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Savlaicīgi veikta plombēšana ļauj saglabāt dabīgo zobu daudzus gadus.
              </p>
            </div>
          </div>
        </motion.section>

        {/* KAD NEPIECIEŠAMA */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kad nepieciešama zobu plombēšana?
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-6">
            <p>
              Zobu plombēšana ir nepieciešama, kad zobu audis ir bojātas un nepieciešams apturēt tālāko bojājuma procesu. Visbiežāk plombēšana tiek veikta agrīnās stadijās, kad problēmu vēl var atrisināt konservatīvi. Pie zobārsta ieteicams vērsties, ja pamanāmas šādas pazīmes:
            </p>
          </div>
          <div className="grid sm:grid-cols-1 gap-4">
            {[
              "Redzami kariesa bojājumi vai tumšas plankumi uz zoba virsmas",
              "Zoba sāpes vai jutīgums pret aukstumu, siltumu vai saldu",
              "Saplaisājis vai ieplīsis zobs, bojāts košļājot vai traumas rezultātā",
              "Vecas, hermētiski nesaistītas plombas, kas var ļaut baktērijām iekļūt zoba iekšpusē",
              "Ēdiena iespiešanās vai nepatīkama sajūta konkrētā zoba vietā"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <span className="mt-1"><CheckIcon /></span>
                <span className="text-slate-700 font-medium">{text}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-slate-700 italic">
            Savlaicīgi veikta plombēšana palīdz aizsargāt zobu no tālākas bojāšanās, samazina sāpju risku un ļauj izvairīties no sakņu kanālu ārstēšanas vai zoba zaudēšanas nākotnē.
          </p>
        </motion.section>

        {/* PLOMBĒŠANAS VEIDI */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kādi zobu plombēšanas veidi tiek piemēroti?
          </h2>
          <p className="text-slate-700 mb-6">
            Zobu plombēšana nav vienāda visiem pacientiem — plombēšanas veids tiek izvēlēts, ņemot vērā zoba bojājuma raksturu, dziļumu un vietu. Bangų zobārstniecības klīnikā katram pacientam tiek izstrādāts individuāls ārstēšanas plāns.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Ārstnieciskā (funkcionālā) plombēšana", desc: "Paredzēta kariesa bojāto zobu atjaunošanai un aizsardzībai no tālākas bojāšanās." },
              { title: "Estētiskā plombēšana", desc: "Kad tiek atjaunota ne tikai zoba funkcija, bet arī tā forma un krāsa (īpaši aktuāli priekšzobiem)." },
              { title: "Pagaidu plombēšana", desc: "Tiek piemērota starp ārstēšanas posmiem vai kad nepieciešams novērot zoba stāvokli pirms pastāvīgās plombēšanas." },
              { title: "Dziļā plombēšana", desc: "Kad bojājums ir tuvu zoba nervam un nepieciešama īpaša precizitāte un papildu aizsargmateriāli." }
            ].map((type, i) => (
              <div key={i} className="bg-brand-50/50 p-5 rounded-xl border border-brand/10 hover:bg-brand-50 transition">
                <h3 className="font-bold text-darkblue-700 mb-2">{type.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* GAITA (SOĻI) */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kā tiek veikta zobu plombēšana?
          </h2>
          <p className="text-slate-700 mb-8">
            Zobu plombēšana Bangų zobārstniecības klīnikā tiek veikta, ievērojot skaidru, drošu un pacientam saprotamu procedūras gaitu.
          </p>
          <div className="grid gap-6 md:grid-cols-2">

            {/* 01 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">
                01
              </div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Apskate un diagnostika</h3>
              <p className="text-sm text-slate-600 relative z-10">
                Zobārsts novērtē zoba stāvokli, nosaka bojājuma dziļumu un, ja nepieciešams, veic rentgena izmeklēšanu. Tas ļauj precīzi plānot ārstēšanu.
              </p>
            </div>

            {/* 02 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">
                02
              </div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Audu sagatavošana</h3>
              <p className="text-sm text-slate-600 relative z-10">
                Tiek noņemtas kariesa bojātās vai vājinātās zobu audis, lai nodrošinātu, ka baktērijas neizplatās tālāk. Svarīgi tīri iztīrīt dobumu.
              </p>
            </div>

            {/* 03 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">
                03
              </div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Plombēšana</h3>
              <p className="text-sm text-slate-600 relative z-10">
                Sagatavotais dobums tiek atjaunots ar modernu plombēšanas materiālu, atjaunojot dabīgo zoba formu. Materiāls tiek slāņots un sacietināts.
              </p>
            </div>

            {/* 04 */}
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">
                04
              </div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Pulēšana</h3>
              <p className="text-sm text-slate-600 relative z-10">
                Plomba tiek koriģēta un pulēta, lai būtu gluda, ērta sakodinot un dabiski iederos ar pārējiem zobiem.
              </p>
            </div>

          </div>
        </motion.section>

        {/* INFO BLOKI */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Svarīga informācija pacientiem
          </h2>
          <div className="space-y-6">
            <div className="bg-brand-50/30 p-6 rounded-2xl border border-brand/10">
              <h3 className="font-bold text-lg text-darkblue-700 mb-3">Vai zobu plombēšana ir sāpīga?</h3>
              <p className="text-slate-700 leading-relaxed">
                Zobu plombēšana parasti tiek veikta bez sāpēm, izmantojot vietējo anestēziju. Pirms procedūras zobārsts parūpējas, lai justos komfortabli. Procedūras laikā var sajust tikai nelielu spiedienu vai vibrāciju. Pēc plombēšanas dažos gadījumos var rasties īslaicīgs jutīgums, kas ātri pāriet.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-lg text-darkblue-700 mb-3">Cik ilgi kalpo zobu plombas?</h3>
              <p className="text-slate-700 leading-relaxed">
                Kalpošanas laiks ir atkarīgs no plombas lieluma, vietas un kopšanas. Kvalitatīvi veiktas plombas kalpo daudzus gadus. Lielāko ietekmi uz ilgmūžību atstāj personīgā mutes higiēna un regulāras profilaktiski pārbaudes, kas ļauj savlaicīgi pamanīt un koriģēt vecās plombas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-lg text-darkblue-700 mb-3">Ko svarīgi zināt pēc zobu plombēšanas?</h3>
              <p className="text-slate-700 leading-relaxed">
                Pirmajās stundās pēc ārstēšanas ieteicams izvairīties no cieta ēdiena un nekošļāt ar plombēto pusi, īpaši ja tika piemērota anestēzija (lai neiekodieties). Ja jūtat īslaicīgu jutīgumu pret aukstumu vai košļājot — tā ir normāla reakcija, kas parasti pāriet dažu dienu laikā. Vissvarīgākais ir rūpīga ikdienas higiēna.
              </p>
            </div>
          </div>
        </motion.section>

        {/* KĀPĒC MĒS UN CTA */}
        <motion.div className="mt-8 mb-12 text-left" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kāpēc vērts izvēlēties Bangų zobārstniecības klīniku?
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
            Izvēloties zobu plombēšanu, svarīga ne tikai cena, bet arī kvalitāte. Bangų zobārstniecības klīnikā izmantojam modernos materiālus un tehnoloģijas, nodrošinām caurspīdīgu cenu noteikšanu un profesionālismu. Mūsu speciālisti katru gadījumu novērtē individuāli, tiecoties pēc ilgstoša un estētiska rezultāta.
          </p>

          <div className="bg-brand-50 rounded-3xl p-8 max-w-2xl">
            <h3 className="font-bold text-xl text-darkblue-700 mb-3">Aicinām pierakstīties vizītam</h3>
            <p className="text-slate-600 mb-6">
              Ja pamanījāt zoba bojājumus, jutīgumu vai sāpes, negaidiet. Savlaicīgi veikta ārstēšana palīdz saglabāt zobus.
            </p>
            <Link to="/lv/kontakti" className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
              Pierakstīties vizītam
            </Link>
          </div>
        </motion.div>

      </motion.div>
    </AnimatedSection>
  )
}
