import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { TableOfContents } from '../components/TableOfContents'
import { useRef } from 'react'

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
  { id: 'kas-yra', label: 'Kas yra dantų traukimas?' },
  { id: 'kada-reikalingas', label: 'Kada reikalingas?' },
  { id: 'rusys', label: 'Traukimo rūšys' },
  { id: 'vaikams', label: 'Vaikams ir paaugliams' },
  { id: 'kodel-laiku', label: 'Kodėl svarbu laiku?' },
  { id: 'procesas', label: 'Kaip atliekamas?' },
  { id: 'ar-skausminga', label: 'Ar skausminga?' },
  { id: 'pries-traukima', label: 'Jei skauda prieš traukimą' },
  { id: 'po-traukimo', label: 'Po traukimo' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function DantuTraukimas() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Dantų traukimas',
    description:
      'Profesionalus dantų traukimas Klaipėdoje. Neskausmingas dantų šalinimas, protiniai dantys, vaikų dantų traukimas.',
    provider: {
      '@type': 'Dentist',
      name: 'Bangų klinika'
    }
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Dantų traukimas (rovimas) Klaipėdoje - Bangų klinika"
        description="Profesionalus ir saugus dantų traukimas Klaipėdoje. Protinių dantų šalinimas, chirurginis traukimas, vaikų dantų šalinimas. Registruokitės vizitui."
        keywords="dantu traukimas, dantu salinimas, protiniai dantys, chirurginis traukimas, klaipeda, neskausmingai"
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
              Profesionalus dantų traukimas Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų traukimas yra odontologinė procedūra, atliekama tuomet, kai danties išsaugoti nebeįmanoma arba kai jis
                  kelia grėsmę bendrai burnos sveikatai. Nors šiuolaikinė odontologija visada siekia išsaugoti natūralius dantis,
                  tam tikrose situacijose jų pašalinimas tampa būtinu ir racionaliausiu sprendimu.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje atliekamas dantų traukimas yra saugus, kruopščiai suplanuotas ir
                  orientuotas į paciento komfortą. Procedūros metu naudojami šiuolaikiniai nuskausminimo metodai, leidžiantys
                  išvengti skausmo ir sumažinti stresą. Kiekvienu atveju sprendimas dėl danties šalinimo priimamas individualiai,
                  įvertinus danties būklę, galimas alternatyvas ir ilgalaikę burnos sveikatos perspektyvą.
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
            <div id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">Dantų traukimo kainos</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                <p>
                  Dantų traukimo kaina priklauso nuo procedūros sudėtingumo, danties padėties, šaknų struktūros ir aplinkinių
                  audinių būklės. Prieš atliekant procedūrą visuomet atliekama apžiūra, kurios metu įvertinama situacija ir
                  parenkamas saugiausias bei tinkamiausias danties šalinimo metodas.
                </p>
              </div>

              <div className="rounded-2xl border border-brand/20 bg-white shadow-soft overflow-hidden mb-6">
                <div className="grid md:grid-cols-2">
                  <div className="divide-y divide-slate-100">
                    <div className="flex justify-between items-center px-5 py-4 gap-4">
                      <span className="text-slate-700">Šaknies šalinimas</span>
                      <span className="text-darkblue-700 font-bold whitespace-nowrap">60 – 80 €</span>
                    </div>
                    <div className="flex justify-between items-center px-5 py-4 gap-4">
                      <span className="text-slate-700">Paprastas danties šalinimas</span>
                      <span className="text-darkblue-700 font-bold whitespace-nowrap">80 – 100 €</span>
                    </div>
                  </div>

                  <div className="divide-y divide-slate-100 md:border-l md:border-slate-100">
                    <div className="flex justify-between items-center px-5 py-4 gap-4">
                      <span className="text-slate-700">Komplikuotas protinių dantų šalinimas</span>
                      <span className="text-darkblue-700 font-bold whitespace-nowrap">120 – 150 €</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm">
                Tiksli dantų traukimo Klaipėdoje kaina aptariama individualios konsultacijos metu, atsižvelgiant į konkrečią
                klinikinę situaciją. Skaidri kainodara ir profesionalus požiūris leidžia pacientams jaustis užtikrintai ir
                priimti informuotą sprendimą.
              </p>
            </div>
          </motion.header>

          {/* KAS YRA TRAUKIMAS */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra dantų traukimas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų traukimas – tai odontologinė procedūra, kurios metu dantis pašalinamas iš žandikaulio kaulo alveolės. Ši
                  procedūra taikoma tais atvejais, kai dantis yra stipriai pažeistas ėduonies, traumos ar infekcijos,
                  netaisyklingai išdygęs arba trukdo kitų dantų gydymui ar taisyklingam sąkandžiui.
                </p>
                <p>
                  Procedūra gali būti paprasta arba sudėtingesnė, priklausomai nuo danties padėties, šaknų formos ir aplinkinių
                  audinių būklės. Prieš atliekant dantų traukimą, visada atliekama apžiūra ir, jei reikia, radiologiniai tyrimai,
                  leidžiantys suplanuoti saugų ir tikslų gydymą. Tinkamai atliktas dantų traukimas padeda išvengti komplikacijų,
                  sumažina skausmą ir sudaro sąlygas tolimesniam gydymui, pavyzdžiui, protezavimui ar implantacijai.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REIKALINGA */}
          <motion.section id="kada-reikalingas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada reikalingas dantų traukimas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų traukimas atliekamas tik tuomet, kai nėra galimybės danties išsaugoti arba kai jo palikimas burnoje gali
                sukelti rimtesnių sveikatos problemų. Prieš priimant sprendimą, visuomet įvertinamos galimos alternatyvos, tačiau
                tam tikrais atvejais danties pašalinimas yra saugiausias ir efektyviausias sprendimas.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Dantų traukimas gali būti reikalingas, kai:</h3>

                <div className="grid gap-3">
                  {[
                    'dantis yra stipriai pažeistas ėduonies ar traumos, o atkūrimas nebeįmanomas',
                    'pasireiškia ūmus skausmas, uždegimas ar infekcija, kuri plinta į aplinkinius audinius',
                    'dantis yra netaisyklingai išdygęs arba įstrigęs ir trukdo kitiems dantims',
                    'reikia sudaryti vietos ortodontiniam gydymui',
                    'dantis kelia grėsmę bendrai burnos ir žandikaulio sveikatai'
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
                  <span className="font-semibold text-darkblue-700">Pastaba:</span>{' '}
                  Laiku atliktas dantų traukimas padeda išvengti sudėtingesnių komplikacijų ir sudaro sąlygas tolimesniam gydymui, pavyzdžiui,
                  protezavimui ar implantacijai.
                </p>
              </div>
            </div>
          </motion.section>

          {/* TRAUKIMO RŪŠYS */}
          <motion.section id="rusys" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokios yra dantų traukimo rūšys?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų traukimo būdas parenkamas individualiai, atsižvelgiant į danties padėtį, šaknų struktūrą ir aplinkinių audinių
                būklę. Dažniausiai skiriami du pagrindiniai dantų traukimo tipai.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Paprastas dantų traukimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Paprastas dantų traukimas atliekamas tuomet, kai dantis yra visiškai išdygęs ir lengvai pasiekiamas. Procedūros metu odontologas, naudodamas specialius instrumentus, švelniai atlaisvina dantį ir jį pašalina. Šis metodas paprastai atliekamas greitai, o gijimas – sklandus.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Chirurginis dantų traukimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Chirurginis dantų traukimas taikomas sudėtingesniais atvejais – kai dantis yra dalinai ar visiškai neišdygęs, įstrigęs, nulūžęs arba kai šaknys yra sudėtingos formos. Procedūros metu gali būti atliekamas nedidelis pjūvis dantenose ar dantis pašalinamas dalimis. Nepaisant sudėtingumo, naudojant šiuolaikinius metodus ir tinkamą nuskausminimą, procedūra atliekama saugiai ir kontroliuojamai.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* VAIKAMS IR PAAUGLIAMS */}
          <motion.section id="vaikams" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Dantų traukimas vaikams ir paaugliams</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų traukimas vaikams ar paaugliams dažniausiai atliekamas tik tuomet, kai tai yra būtina ir kai nėra galimybės išsaugoti danties. Tai gali būti pieninių dantų šalinimas, kai jie trukdo nuolatinių dantų dygimui, arba nuolatinių dantų traukimas esant dideliems pažeidimams ar ortodontinio gydymo poreikiui.
                </p>
                <p>
                  Bangų odontologijos klinikoje dantų traukimas jauniems pacientams atliekamas ypač švelniai, atsižvelgiant į vaiko amžių, emocinę būklę ir individualius poreikius. Prieš procedūrą odontologas skiria laiko paaiškinimui, ramiai supažindina vaiką su eiga ir atsako į visus jam kylančius klausimus. Tai padeda sumažinti baimę ir sukurti teigiamą patirtį.
                </p>
                <p>
                  Procedūros metu taikomi vaikams pritaikyti nuskausminimo metodai, o pats dantų traukimas atliekamas atsargiai ir kontroliuojamai. Po procedūros tėvams pateikiamos aiškios rekomendacijos, kaip prižiūrėti burną namuose ir į ką atkreipti dėmesį gijimo laikotarpiu. Toks požiūris padeda užtikrinti sklandų gijimą ir teigiamą vaiko požiūrį į būsimus apsilankymus pas odontologą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* DELSIMAS */}
          <motion.section id="kodel-laiku" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas vyksta, jei dantis nepašalinamas laiku?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Atidėliojamas dantų traukimas gali lemti ne tik užsitęsusį skausmą, bet ir rimtesnes burnos sveikatos problemas. Pažeistas ar infekuotas dantis dažnai tampa nuolatiniu bakterijų židiniu, kuris ilgainiui gali paveikti aplinkinius audinius, dantenas ir žandikaulio kaulą.
                </p>
                <p>
                  Jeigu probleminis dantis nėra pašalinamas laiku, uždegimas gali plisti į gilesnius audinius, sukelti stipresnį patinimą, skausmą ar net bendros savijautos pablogėjimą. Tokiais atvejais gydymas tampa sudėtingesnis ir gali reikalauti papildomų procedūrų ar ilgesnio gijimo laikotarpio.
                </p>
                <p>
                  Be to, uždelstas dantų traukimas gali neigiamai paveikti gretimus dantis. Infekcija ar nuolatinis spaudimas gali paskatinti aplinkinių dantų pažeidimus, dantenų atsitraukimą ar kaulo nykimą. Tai ypač svarbu planuojant tolimesnį gydymą, pavyzdžiui, implantaciją ar protezavimą, nes prarastas kaulas gali apsunkinti šias procedūras.
                </p>
                <p>
                  Laiku atliktas dantų traukimas padeda išvengti šių komplikacijų, sumažina gydymo apimtį ir leidžia greičiau pereiti prie sprendimų, kurie atkuria funkciją ir komfortą. Todėl svarbu neignoruoti simptomų ir kreiptis į odontologą vos pastebėjus problemą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAIP ATLIEKAMA */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip atliekamas dantų traukimas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų traukimas Bangų odontologijos klinikoje atliekamas pagal aiškią ir saugią eigą, kad procedūra būtų kuo
                komfortiškesnė pacientui ir nekeltų papildomo streso. Kiekvienas atvejis vertinamas individualiai, todėl procedūros eiga gali nežymiai skirtis priklausomai nuo danties padėties ir sudėtingumo.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Apžiūra ir pasiruošimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Prieš atliekant dantų traukimą, odontologas kruopščiai įvertina danties ir visos burnos ertmės būklę. Atliekama klinikinė apžiūra, įvertinama danties padėtis, aplinkinių audinių būklė ir galimi rizikos veiksniai. Jei situacija reikalauja detalesnio įvertinimo, paskiriamas rentgeno tyrimas, kuris leidžia tiksliai nustatyti danties šaknų formą, jų padėtį žandikaulio kaulo atžvilgiu bei artumą gretimiems dantims ar nervams. Ši informacija yra būtina, norint parinkti saugiausią ir efektyviausią dantų traukimo metodą bei išvengti galimų komplikacijų.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Nuskausminimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Prieš pradedant procedūrą taikoma vietinė nejautra, kuri patikimai nuskausmina gydomą sritį. Tai užtikrina, kad dantų traukimo metu pacientas nejaus skausmo, o tik lengvą spaudimą ar judesį. Nuskausminimo metodas parenkamas individualiai, atsižvelgiant į paciento jautrumą, procedūros sudėtingumą ir bendrą savijautą. Esant poreikiui, gali būti taikomi papildomi nuskausminimo sprendimai, kad procedūra būtų kuo komfortiškesnė.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Danties pašalinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kai nuskausminimas pradeda veikti, odontologas atsargiai atlaisvina dantį iš alveolės ir jį pašalina. Procedūra atliekama švelniai, stengiantis kuo mažiau traumuoti aplinkinius audinius. Sudėtingesniais atvejais, pavyzdžiui, kai dantis yra tvirtai įsitvirtinęs ar dalinai neišdygęs, jis gali būti šalinamas dalimis. Toks metodas leidžia išlaikyti maksimalų saugumą ir užtikrinti kontroliuojamą procedūros eigą.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Žaizdos sutvarkymas ir rekomendacijos</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pašalinus dantį, žaizda kruopščiai išvaloma, siekiant sumažinti infekcijos riziką ir sudaryti sąlygas natūraliam gijimui. Prireikus uždedami siūlai ar specialios hemostatinės priemonės, kurios padeda sustabdyti kraujavimą ir pagreitina gijimo procesą. Procedūros pabaigoje pacientui pateikiamos aiškios ir suprantamos rekomendacijos, kaip elgtis po dantų traukimo, ko vengti pirmosiomis dienomis ir kada kreiptis pakartotinei apžiūrai.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SKAUSMAS */}
          <motion.section id="ar-skausminga" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Ar dantų traukimas yra skausmingas?
              </h2>

              <div className="text-slate-700 leading-relaxed space-y-4">
                <p>
                  Šiuolaikinėje odontologijoje dantų traukimas atliekamas taip, kad pacientas nepatirtų skausmo. Taikant veiksmingą vietinę nejautrą, procedūros metu skausmas nejaučiamas, o dauguma pacientų procedūrą apibūdina kaip trumpą ir lengviau pakeliamą, nei tikėjosi.
                </p>
                <p>
                  Po procedūros, kai nuskausminimo poveikis baigiasi, gali pasireikšti lengvas maudimas, patinimas ar jautrumas – tai normali organizmo reakcija. Šie pojūčiai paprastai sumažėja per kelias dienas ir gali būti kontroliuojami odontologo rekomenduotomis priemonėmis. Laikantis pateiktų nurodymų, gijimas vyksta sklandžiai ir be komplikacijų.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIEŠ TRAUKIMĄ */}
          <motion.section id="pries-traukima" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Ką daryti, jei dantį skauda dar prieš traukimą?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                <p>
                  Danties skausmas dažnai yra signalas, kad burnos ertmėje vyksta uždegiminiai procesai ar pažeidimai, kurių ignoruoti nereikėtų. Jeigu dantį skauda stipriai, nuolat ar skausmas stiprėja, svarbu nedelsti ir kreiptis į odontologą. Laiku atlikta apžiūra leidžia įvertinti situaciją ir nuspręsti, ar dantį galima gydyti, ar reikalingas dantų traukimas.
                </p>
                <p>
                  Kol laukiate vizito, rekomenduojama vengti veiksmų, kurie gali pabloginti būklę. Nereikėtų šildyti skaudančios vietos, spausti ar bandyti savarankiškai „gydyti“ danties liaudiškomis priemonėmis. Taip pat patariama vengti kieto maisto skaudančioje pusėje ir palaikyti įprastą, bet švelnią burnos higieną.
                </p>
                <p>
                  Esant poreikiui, trumpam skausmo malšinimui galima vartoti odontologo ar vaistininko rekomenduotus nuskausminamuosius vaistus, tačiau jie neišsprendžia pagrindinės problemos. Jei pasireiškia stiprus patinimas, karščiavimas ar skausmas plinta, būtina kuo greičiau kreiptis į specialistus, nes tai gali rodyti infekciją.
                </p>
                <p>
                  Profesionalus įvertinimas leidžia ne tik sumažinti skausmą, bet ir pasirinkti saugiausią gydymo sprendimą. Laiku suplanuotas dantų traukimas, jei jis būtinas, padeda išvengti rimtesnių komplikacijų ir palengvina tolimesnį gydymą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PO TRAUKIMO */}
          <motion.section id="po-traukimo" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Ką svarbu žinoti po dantų traukimo?</h2>

              <div className="text-slate-700 leading-relaxed space-y-4 mb-6">
                <p>
                  Po dantų traukimo organizmui reikalingas laikas gijimui, todėl pirmosios dienos po procedūros yra ypač svarbios. Tinkama priežiūra padeda sumažinti diskomfortą, užtikrina sklandų gijimą ir padeda išvengti galimų komplikacijų.
                </p>
                <p>
                  Pirmosiomis valandomis po procedūros rekomenduojama vengti intensyvios fizinės veiklos ir leisti organizmui pailsėti. Traukimo vietoje susiformuoja kraujo krešulys, kuris yra būtinas gijimo procesui, todėl labai svarbu jo nepažeisti. Dėl šios priežasties patariama neplauti burnos intensyviai, nesiurbti per šiaudelį ir neliesti žaizdos liežuviu ar pirštais.
                </p>
              </div>

              <div className={innerCard + ' mb-6'}>
                <h3 className="font-semibold text-darkblue-700 mb-4">Taip pat rekomenduojama:</h3>
                <ul className="space-y-3">
                  {[
                    'pirmąją parą vengti karšto maisto ir gėrimų, rinktis minkštą, drungną maistą',
                    'nerūkyti ir nevartoti alkoholio bent 24–48 valandas, nes tai gali sulėtinti gijimą',
                    'laikytis odontologo paskirtų nuskausminamųjų ar kitų vaistų vartojimo rekomendacijų',
                    'palaikyti burnos higieną, tačiau valyti dantis atsargiai, vengiant traukimo vietos'
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
                  Lengvas patinimas, jautrumas ar maudimas pirmosiomis dienomis yra normali organizmo reakcija. Šie pojūčiai paprastai palaipsniui silpnėja. Jeigu skausmas stiprėja, atsiranda intensyvus patinimas ar kiti neįprasti simptomai, svarbu nedelsti ir kreiptis į odontologą.
                </p>
                <p>
                  Laikantis pateiktų rekomendacijų, gijimas po dantų traukimo vyksta sklandžiai, o burnos audiniai atsistato be komplikacijų.
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
                  Renkantis dantų traukimo paslaugas svarbu ne tik pati procedūra, bet ir tai, kaip ji atliekama – nuo sprendimo priėmimo iki priežiūros po procedūros. Bangų odontologijos klinikoje dantų traukimas atliekamas atsakingai, siekiant maksimaliai apsaugoti paciento komfortą ir burnos sveikatą.
                </p>
                <p>
                  Klinikoje dirbantys specialistai kiekvieną atvejį vertina individualiai, neskuba priimti sprendimo ir visuomet pirmiausia ieško galimybių išsaugoti dantį. Jei dantų traukimas yra neišvengiamas, procedūra atliekama taikant šiuolaikinius nuskausminimo metodus ir kruopščiai suplanuotą eigą. Dėmesys skiriamas ne tik pačiai procedūrai, bet ir aiškiam situacijos paaiškinimui bei rekomendacijoms po jos.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, ramų požiūrį ir aiškias instrukcijas, kurios padeda jaustis saugiai viso gydymo metu. Todėl ieškantiems patikimo ir profesionalaus dantų traukimo Klaipėdoje, Bangų odontologijos klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis dantų traukimui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu jaučiate danties skausmą, diskomfortą ar gavote rekomendaciją šalinti dantį, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta Jūsų burnos būklė, aptartos galimos gydymo alternatyvos ir, esant poreikiui, suplanuotas saugus dantų traukimas.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad net ir tokios procedūros kaip dantų traukimas būtų aiškios, valdomos ir kuo mažiau keliančios streso. Čia Jūsų laukia patyrę specialistai, moderni įranga ir rūpestingas požiūris į kiekvieną pacientą.
                </p>
                <p>
                  Registruokitės dantų traukimui ir pasirūpinkite savo burnos sveikata laiku bei profesionaliai.
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