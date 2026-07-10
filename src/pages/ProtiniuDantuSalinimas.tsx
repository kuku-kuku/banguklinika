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
  { id: 'kas-yra', label: 'Kas yra protinių dantų šalinimas?' },
  { id: 'indikacijos', label: 'Kada reikia šalinti?' },
  { id: 'procesas', label: 'Kaip vyksta procedūra?' },
  { id: 'gijimas', label: 'Gijimas po procedūros' },
  { id: 'komplikacijos', label: 'Galimos komplikacijos' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function ProtiniuDantuSalinimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/protiniu-dantu-salinimas/#service",
    "name": "Protinių dantų šalinimas Klaipėdoje",
    "serviceType": "Protinių dantų šalinimas",
    "description": "Protinių dantų šalinimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekamas protinių dantų šalinimas pacientams Klaipėdos mieste.",
    "url": "https://www.banguklinika.lt/paslaugos/protiniu-dantu-salinimas/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Protinių dantų šalinimas Klaipėdoje - Bangų klinika"
        description="Protinių dantų šalinimas Klaipėdoje – saugiai☑️profesionaliai☑️Bangų klinikoje už kainą nuo 150€.⏩Registruokitės konsultacijai jau šiandien."
        keywords="protiniu dantu salinimas, protiniai dantys, dantu traukimas, klaipeda, chirurginis salinimas"
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
              Protinių dantų šalinimas Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Protinių dantų dygimas yra vienas dažniausių vėlyvojo dantų vystymosi etapų, kuris neretai sukelia
                  įvairių komplikacijų. Dėl vietos stokos žandikaulyje šie dantys dažnai išdygsta netaisyklingai, būna
                  dalinai neišdygę arba lieka visiškai retinuoti. Tokios situacijos gali lemti skausmą, dantenų
                  uždegimus, gretimų dantų spaudimą ar net sąkandžio pokyčius.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje protinių dantų šalinimas atliekamas taikant modernius
                  chirurginius metodus ir skaitmeninę diagnostiką, leidžiančią tiksliai įvertinti danties padėtį bei
                  šaknų anatomiją. Kiekvienas atvejis vertinamas individualiai, siekiant užtikrinti maksimalų saugumą,
                  audinių tausojimą ir sklandų gijimo procesą. Pagrindinis tikslas – ne tik pašalinti problemą
                  sukeliantį dantį, bet ir užkirsti kelią galimoms komplikacijoms ateityje.
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
                      Protinių dantų šalinimo kainos
                    </h2>
                    <p className="text-slate-600">
                      Protinių dantų šalinimo kaina priklauso nuo danties padėties, šaknų struktūros ir procedūros sudėtingumo.
                      Prieš atliekant procedūrą visuomet atliekama apžiūra, kurios metu įvertinama situacija ir parenkamas
                      saugiausias bei tinkamiausias danties šalinimo metodas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Protinių dantų šalinimas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Protinių dantų šalinimas', '150 – 300 €'],
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
                  Tiksli protinių dantų šalinimo Klaipėdoje kaina aptariama individualios konsultacijos metu, atsižvelgiant į
                  konkrečią klinikinę situaciją. Skaidri kainodara ir profesionalus požiūris leidžia pacientams jaustis
                  užtikrintai ir priimti informuotą sprendimą.
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra protinių dantų šalinimas ir kodėl jis atliekamas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Protinių dantų šalinimas – tai chirurginė odontologinė procedūra, kurios metu pašalinami tretieji
                  krūminiai dantys, dar vadinami protiniais dantimis. Jie dažniausiai išdygsta paskutiniai, todėl
                  žandikaulyje jiems neretai nepakanka vietos tinkamai išsidėstyti dantų lanke.
                </p>
                <p>
                  Kai protinis dantis dygsta netaisyklingai, jis gali sukelti spaudimą gretimiems dantims, formuoti
                  uždegiminius židinius ar tapti nuolatine infekcijos priežastimi. Taip pat dėl sudėtingos prieigos
                  šiuos dantis sunkiau išvalyti, todėl jie dažniau pažeidžiami karieso.
                </p>
                <p>
                  Protinių dantų šalinimas gali būti atliekamas tiek gydymo, tiek profilaktiniais tikslais. Kai
                  kuriais atvejais šie dantys šalinami dar ne pasireiškus ryškiems simptomams, siekiant išvengti
                  būsimų komplikacijų, ypač jei planuojamas ortodontinis gydymas ar dantų lanko korekcija. Toks
                  sprendimas padeda užtikrinti stabilesnę ilgalaikę burnos sveikatą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* INDIKACIJOS */}
          <motion.section id="indikacijos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada būtina šalinti protinius dantis?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Sprendimas dėl protinių dantų šalinimo priimamas tik atlikus išsamią klinikinę apžiūrą ir
                radiologinius tyrimus. Ne visi protiniai dantys turi būti šalinami, tačiau tam tikrose situacijose
                jie tampa aiškiu rizikos veiksniu burnos sveikatai.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Dažniausios indikacijos protinių dantų šalinimui:</h3>

                <div className="grid gap-3">
                  {[
                    'nuolatinis ar pasikartojantis skausmas danties srityje',
                    'dantenų uždegimas, patinimas ar pūliavimas aplink protinį dantį',
                    'netaisyklinga danties padėtis arba dalinis neišdygimas',
                    'gretimų dantų spaudimas ar jų pasislinkimas',
                    'karieso pažeidimai, kurių neįmanoma kokybiškai gydyti',
                    'pasiruošimas ortodontiniam gydymui ar sąkandžio korekcijai'
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

              <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Svarbu suprasti, kad net ir besimptomiai protiniai dantys gali kelti riziką ateityje. Dėl to
                  gydytojas visada vertina ne tik esamą situaciją, bet ir galimą ilgalaikę prognozę. Kai dantys yra
                  pilnai išdygę, stabilūs ir nesukelia jokių nusiskundimų, jie gali būti paliekami stebėjimui,
                  reguliariai kontroliuojant jų būklę.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip atliekamas protinių dantų šalinimas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Protinių dantų šalinimas yra kruopščiai suplanuota chirurginė procedūra, kurios eiga priklauso nuo
                danties padėties, šaknų formos ir aplinkinių audinių būklės. Kiekvienas atvejis yra individualus,
                todėl prieš procedūrą atliekama išsami diagnostika, leidžianti tiksliai įvertinti galimus
                sudėtingumo veiksnius ir parinkti saugiausią gydymo metodą.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Diagnostika ir planavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Prieš protinių dantų šalinimą atliekama klinikinė apžiūra ir rentgenologinis arba 3D
                    kompiuterinės tomografijos tyrimas. Šie duomenys leidžia įvertinti danties padėtį kaulo
                    atžvilgiu, šaknų struktūrą, nervų kanalų artumą bei galimas rizikas. Remiantis šia informacija
                    sudaromas individualus gydymo planas, kuris užtikrina maksimalų procedūros tikslumą ir saugumą.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Nuskausminimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Procedūra atliekama taikant vietinę nejautrą, kuri užtikrina, kad pacientas procedūros metu
                    nejaus skausmo. Esant sudėtingesniems atvejams ar padidėjusiam nerimui, gali būti taikomi
                    papildomi nuskausminimo metodai, siekiant užtikrinti visišką komfortą.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Danties pašalinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dantis atsargiai atlaisvinamas ir pašalinamas iš kaulo alveolės. Jei dantis yra retinuotas ar
                    sudėtingos padėties, gali būti taikomas dalinis šalinimas, leidžiantis sumažinti audinių traumą
                    ir užtikrinti kontroliuojamą procedūros eigą. Tokia taktika padeda išsaugoti aplinkinius
                    audinius ir sumažinti gijimo laikotarpį.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Žaizdos sutvarkymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Po danties pašalinimo žaizda kruopščiai išvaloma, prireikus uždedami siūlai arba naudojamos
                    hemostazinės priemonės. Tai padeda užtikrinti tinkamą kraujo krešulio formavimąsi, kuris yra
                    būtinas sklandžiam gijimui.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* GIJIMAS */}
          <motion.section id="gijimas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip vyksta gijimas po protinių dantų šalinimo?</h2>

              <div className="text-slate-700 leading-relaxed space-y-4 mb-6">
                <p>
                  Gijimas po protinių dantų šalinimo yra natūralus organizmo procesas, kuris vyksta etapais. Jo
                  trukmė priklauso nuo procedūros sudėtingumo, individualių paciento savybių ir to, kaip laikomasi
                  gydytojo rekomendacijų. Dažniausiai pirminis gijimas trunka 7–10 dienų, tačiau visiškas audinių
                  atsistatymas gali užtrukti ilgiau.
                </p>
                <p>
                  Pirmosiomis valandomis po procedūros svarbiausias procesas yra kraujo krešulio susiformavimas. Šis
                  krešulys apsaugo žaizdą ir yra būtinas normaliam gijimui. Jo pažeidimas gali sukelti komplikacijas
                  ir sulėtinti gijimą.
                </p>
              </div>

              <div className={innerCard + ' mb-6'}>
                <h3 className="font-semibold text-darkblue-700 mb-4">Tipinis gijimo procesas:</h3>
                <ul className="space-y-3">
                  {[
                    '1 diena – krešulio formavimasis, galimas lengvas kraujavimas',
                    '2–3 dienos – patinimo ir jautrumo pikas',
                    '4–7 dienos – audinių regeneracijos pradžia',
                    '1–2 savaitės – pirminis žaizdos užgijimas'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1">
                        <CheckIcon />
                      </span>
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Siekiant užtikrinti sklandų gijimą, rekomenduojama vengti karšto maisto, fizinio krūvio, rūkymo ir
                  intensyvaus burnos skalavimo pirmosiomis dienomis. Taip pat svarbu laikytis individualių gydytojo
                  nurodymų. Tinkama priežiūra ženkliai sumažina komplikacijų riziką ir pagreitina atsistatymą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KOMPLIKACIJOS */}
          <motion.section id="komplikacijos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokios galimos komplikacijos po protinių dantų šalinimo?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Nors protinių dantų šalinimas laikomas saugia ir įprasta chirurgine procedūra, kaip ir bet kuri
                intervencija, jis gali turėti tam tikrų galimų komplikacijų. Dažniausiai jos yra laikinos ir lengvai
                valdomos, jei pacientas laikosi pooperacinių rekomendacijų.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Galimos komplikacijos:</h3>

                <div className="grid gap-3">
                  {[
                    'alveolitas (sausa alveolė) dėl prarasto kraujo krešulio',
                    'laikinas patinimas ir jautrumas',
                    'nedidelis kraujavimas pirmosiomis valandomis',
                    'žandikaulio sustingimas ar ribotas išsižiojimas',
                    'retais atvejais – infekciniai procesai'
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
                  Alveolitas yra viena dažniausių komplikacijų, pasireiškianti stipresniu skausmu, kuris gali plisti
                  į ausies ar smilkinio sritį. Tokiu atveju reikalinga gydytojo apžiūra ir vietinis gydymas, kuris
                  dažniausiai greitai palengvina simptomus.
                </p>
                <p>
                  Svarbu pabrėžti, kad komplikacijų rizika reikšmingai sumažėja, kai procedūra atliekama
                  profesionaliai, o pacientas laikosi rekomendacijų. Daugeliu atvejų gijimas vyksta sklandžiai ir be
                  rimtesnių nesklandumų.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kodėl verta rinktis Bangų odontologijos kliniką protinių dantų šalinimui?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Protinių dantų šalinimas reikalauja ne tik chirurginės patirties, bet ir tikslaus planavimo bei
                  atsakingo diagnostinio įvertinimo. Todėl svarbu rinktis kliniką, kurioje kiekvienas atvejis
                  vertinamas individualiai, o gydymo sprendimai grindžiami ne tik simptomais, bet ir ilgalaike
                  paciento burnos sveikatos prognoze.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje protinių dantų šalinimas atliekamas naudojant modernią
                  diagnostiką ir šiuolaikinius chirurginius metodus. Prieš procedūrą kruopščiai įvertinama danties
                  padėtis, šaknų anatomija ir aplinkinių struktūrų rizikos, siekiant užtikrinti maksimalų saugumą.
                </p>
                <p>
                  Klinikoje didelis dėmesys skiriamas paciento komfortui. Taikoma efektyvi vietinė nejautra, o
                  sudėtingesniais atvejais parenkami papildomi nuskausminimo sprendimai. Procedūros eiga visada
                  aiškiai paaiškinama, kad pacientas jaustųsi užtikrintai ir suprastų kiekvieną gydymo etapą.
                </p>
                <p>
                  Pacientai vertina profesionalų požiūrį, nuoseklų gydymo procesą ir ramų bendravimą. Todėl Bangų
                  odontologijos klinika yra patikimas pasirinkimas, kai reikalingas saugus ir profesionalus protinių
                  dantų šalinimas Klaipėdoje.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis protinio danties šalinimui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu jaučiate skausmą, diskomfortą dėl dygstančio protinio danties ar gavote rekomendaciją jį
                  pašalinti, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu bus
                  įvertinta Jūsų burnos būklė, aptartos galimos gydymo alternatyvos ir, esant poreikiui, suplanuotas
                  saugus protinio danties šalinimas.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad net ir tokios procedūros kaip protinių dantų šalinimas
                  būtų aiškios, valdomos ir kuo mažiau keliančios streso. Čia Jūsų laukia patyrę specialistai, moderni
                  įranga ir rūpestingas požiūris į kiekvieną pacientą.
                </p>
                <p>
                  Registruokitės protinio danties šalinimui ir pasirūpinkite savo burnos sveikata laiku bei
                  profesionaliai.
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
