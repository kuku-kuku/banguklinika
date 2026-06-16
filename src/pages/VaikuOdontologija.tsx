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

// Ikonos
function SmileIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

// Kainų dizaino žetonai
const P  = '#002045'
const S  = '#006b5f'
const SL = '#ecf5fb'

const tocSections = [
  { id: 'kainos', label: 'Kainos' },
  { id: 'kas-yra', label: 'Kas yra vaikų odontologija?' },
  { id: 'pieniniai', label: 'Pieninių dantų priežiūra' },
  { id: 'kada-kreiptis', label: 'Kada kreiptis?' },
  { id: 'paslaugos', label: 'Teikiamos paslaugos' },
  { id: 'procesas', label: 'Kaip vyksta gydymas?' },
  { id: 'paruosimas', label: 'Kaip paruošti vaiką?' },
  { id: 'ar-skausminga', label: 'Ar skausminga?' },
  { id: 'kodel-mes', label: 'Kodėl Bangų klinika?' },
]

export default function VaikuOdontologija() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/vaiku-odontologija/#service",
    "name": "Vaikų odontologija Klaipėdoje",
    "serviceType": "Vaikų odontologija",
    "description": "Vaikų odontologijos paslaugos teikiamos Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekama vaikų dantų priežiūra ir gydymas pacientams Klaipėdos mieste.",
    "url": "https://www.banguklinika.lt/paslaugos/vaiku-odontologija/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Vaikų odontologija Klaipėdoje - Bangų klinika"
        description="Ieškote vaikų odontologo Klaipėdoje?✅ Bangų klinikoje dirba patyrę specialistai, užtikrinantys švelnų✅ saugų✅ gydymą vaikams. Patogi registracija ir profesionali priežiūra."
        keywords="vaiku odontologas, pieniniu dantu gydymas, vaiku dantu prieziura, klaipeda, silantai, be baimes"
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
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Vaikų odontologija Klaipėdoje
            </h1>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
              <p className="mb-4">
                Vaikų dantų priežiūra reikalauja ne tik odontologinių žinių, bet ir ypatingo dėmesio vaiko emocinei savijautai. Pirmieji apsilankymai pas odontologą dažnai formuoja vaiko požiūrį į dantų gydymą visam gyvenimui, todėl svarbu, kad ši patirtis būtų rami, saugi ir pozityvi.
              </p>
              <p>
                Bangų odontologijos klinikoje Klaipėdoje dirbantis vaikų odontologas siekia sukurti draugišką aplinką, kurioje vaikas jaustųsi suprastas ir nebijotų gydymo. Klinikoje didelis dėmesys skiriamas ne tik dantų gydymui, bet ir profilaktikai, adaptacijai bei nuosekliam vaiko supažindinimui su odontologinėmis procedūromis. Toks požiūris padeda formuoti teigiamus įpročius ir ilgalaikį pasitikėjimą gydytoju.
              </p>
            </div>

            <div className="flex justify-start">
              <Link
                to="/kontaktai"
                className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Registruotis vizitui
              </Link>
            </div>
          </motion.header>

          <motion.section id="kainos" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                    Vaikų odontologijos kainos
                  </h2>
                  <p className="text-slate-600">
                    Vaikų dantų gydymo kaina priklauso nuo vaiko amžiaus, dantų būklės, pasirinkto gydymo metodo ir procedūros sudėtingumo. Bangų odontologijos klinikoje prieš pradedant bet kokį gydymą pirmiausia atliekama apžiūra, kurios metu įvertinama situacija ir parenkamas tinkamiausias sprendimas, atsižvelgiant į vaiko savijautą.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {[
                  ['Pirminė konsultacija ir profilaktika', '20 €'],
                ].map(([name, price], i) => (
                  <div key={i} className="flex justify-between items-center bg-white rounded-2xl px-5 py-3 border" style={{ borderColor: S }}>
                    <span className="text-slate-700 text-sm font-medium">{name}</span>
                    <span className="font-extrabold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                  <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Vaikų gydymas</h3>
                  <div className="divide-y divide-slate-100">
                    {[
                      ['Pieninių dantų tvarkymas (gydymas)', 'nuo 50 €'],
                      ['Stiklojonomerinė / kompomerinė plomba', 'nuo 30 €'],
                      ['Komplikuoto ėduonies gydymas', 'nuo 60 €'],
                      ['Adaptacinis vizitas (iki 30 min.)', 'nuo 30 €'],
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
                Galutinė vaikų dantų gydymo kaina aptariama individualiai, atsižvelgiant į konkrečią situaciją ir vaiko poreikius. Skaidrus kainų pateikimas leidžia tėvams jaustis ramiai planuojant vaiko odontologinę priežiūrą.
              </p>
            </div>
          </motion.section>

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
                <div className="relative min-h-[320px] lg:min-h-full bg-sky-50">
                  <img
                    src="/team/Rugile-light.jpg"
                    alt="Rugilė – vaikų odontologė Bangų klinikoje"
                    className="absolute inset-0 w-full h-full object-cover object-[30%_10%] lg:object-[30%_100%]"
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

          <motion.section id="kas-yra" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
            <div className="bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft space-y-4 text-slate-700 leading-relaxed">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700">
                Kas yra vaikų odontologija?
              </h2>

              <p>
                Vaikų odontologija – tai odontologijos sritis, skirta vaikų dantų ir burnos priežiūrai nuo pirmųjų pieninių dantų iki nuolatinių dantų susiformavimo. Ji apima ne tik dantų gydymą, bet ir profilaktiką, ankstyvą problemų nustatymą bei vaiko adaptaciją prie odontologinių vizitų.
              </p>
              <p>
                Vaikų dantys skiriasi nuo suaugusiųjų – pieniniai dantys yra jautresni, o ėduonis juose gali plisti greičiau. Dėl šios priežasties vaikų odontologijoje taikomi specialūs metodai ir medžiagos, pritaikytos vaiko amžiui ir dantų vystymosi etapui. Patyręs vaikų odontologas ne tik gydo dantis, bet ir moko vaiką bei tėvus taisyklingos burnos priežiūros, padedančios išvengti problemų ateityje.
              </p>
              <p>
                Tinkamai prižiūrimi pieniniai dantys yra svarbūs ne tik kramtymui ir kalbos vystymuisi, bet ir nuolatinių dantų sveikatai. Todėl reguliarios apžiūros ir laiku pradėta priežiūra yra svarbi vaiko burnos sveikatos dalis.
              </p>
            </div>
          </motion.section>

          <motion.section id="pieniniai" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                  Kodėl svarbu prižiūrėti pieninius dantis?
                </h2>

                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Nors pieniniai dantys laikini, jų priežiūra yra labai svarbi vaiko burnos sveikatai ir vystymuisi. Pieniniai dantys padeda vaikui taisyklingai kramtyti, formuoti kalbą ir palaikyti vietą nuolatiniams dantims. Negydomi pieninių dantų pažeidimai gali sukelti skausmą, infekcijas ir turėti neigiamos įtakos nuolatinių dantų formavimuisi.
                  </p>
                  <p>
                    Pieninių dantų ėduonis dažnai vystosi greičiau nei suaugusiųjų dantyse, todėl problemos gali progresuoti nepastebimai. Laiku apsilankius pas specialistą, vaikų odontologas gali anksti nustatyti pakitimus ir taikyti švelnius, vaikui pritaikytus gydymo ar profilaktikos metodus.
                  </p>
                  <p>
                    Svarbu paneigti mitą, kad pieninių dantų gydyti nereikia, nes jie vis tiek iškris. Priešingai – tinkamai prižiūrėti pieniniai dantys padeda išvengti sudėtingesnių problemų ateityje ir formuoja vaiko teigiamą požiūrį į burnos priežiūrą.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-brand/20 bg-brand-50 shadow-soft p-6 flex flex-col items-start">
                  <SmileIcon />
                  <h3 className="font-semibold text-darkblue-700 mb-2">Vystymasis</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Pieniniai dantys padeda vaikui taisyklingai kramtyti, formuoti kalbą ir palaikyti vietą nuolatiniams dantims.
                  </p>
                </div>

                <div className="rounded-2xl border border-brand/20 bg-brand-50 shadow-soft p-6 flex flex-col items-start">
                  <StarIcon />
                  <h3 className="font-semibold text-darkblue-700 mb-2">Greitas gedimas</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Pieninių dantų ėduonis vystosi greičiau. Laiku apsilankius, galima nustatyti pakitimus ir taikyti švelnius metodus.
                  </p>
                </div>

                <div className="rounded-2xl border border-brand/20 bg-brand-50 shadow-soft p-6 flex flex-col items-start">
                  <HeartIcon />
                  <h3 className="font-semibold text-darkblue-700 mb-2">Ateities sveikata</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Paneigiame mitą, kad jų gydyti nereikia. Sveiki pieniniai dantys formuoja teigiamą vaiko požiūrį į burnos priežiūrą.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section id="kada-kreiptis" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
            <div className="bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kada vaikui reikalingas apsilankymas pas odontologą?
              </h2>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Pirmasis vaiko apsilankymas pas odontologą rekomenduojamas vos išdygus pirmiesiems dantims arba ne vėliau kaip iki vienerių metų amžiaus. Ankstyvas vizitas leidžia vaikui susipažinti su aplinka, o tėvams – gauti naudingų patarimų apie dantų priežiūrą namuose.
              </p>

              <div className="space-y-4">
                <h3 className="font-semibold text-darkblue-700">Į odontologą taip pat reikėtų kreiptis, jei pastebimi šie požymiai:</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'vaikas skundžiasi dantų skausmu ar jautrumu',
                    'ant dantų matomos baltos ar tamsios dėmės',
                    'dantenos paraudusios ar kraujuoja',
                    'vaikas vengia kramtyti viena puse',
                    'atėjo laikas profilaktiniam patikrinimui, net jei nėra nusiskundimų',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-700 mt-6 leading-relaxed">
                Reguliarūs patikrinimai padeda užkirsti kelią rimtesnėms problemoms ir leidžia palaipsniui pratinti vaiką prie odontologinių vizitų. Toks nuoseklus požiūris užtikrina, kad vaiko dantų priežiūra būtų rami, o gydymas – minimalus ir savalaikis.
              </p>
            </div>
          </motion.section>

          <motion.section id="paslaugos" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
            <div className="bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kokias vaikų odontologijos paslaugas teikiame?
              </h2>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Bangų odontologijos klinikoje vaikų odontologija apima visą paslaugų spektrą – nuo pirmųjų profilaktinių patikrinimų iki gydomųjų procedūrų. Kiekviena paslauga parenkama atsižvelgiant į vaiko amžių, dantų vystymosi etapą ir individualius poreikius, siekiant kuo švelnesnio ir efektyvesnio gydymo.
              </p>

              <h3 className="font-semibold text-darkblue-700 mb-4">Vaikams teikiamos šios pagrindinės paslaugos:</h3>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  'Konsultacijos ir profilaktiniai patikrinimai, padedantys anksti pastebėti galimus pakitimus',
                  'Pieninių dantų gydymas, taikant vaikams pritaikytas medžiagas',
                  'Dantų plombavimas, siekiant atkurti pažeistus dantis ir sustabdyti ėduonį',
                  'Ėduonies profilaktika, skirta apsaugoti dantis nuo pažeidimų',
                  'Profesionali burnos higiena vaikams, formuojanti taisyklingus priežiūros įpročius',
                  'Dantų šalinimas, kai tai neišvengiama ir būtina vaiko sveikatai',
                ].map((service, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-700 mt-6 leading-relaxed">
                Platus paslaugų spektras leidžia užtikrinti, kad vaiko dantų priežiūra būtų nuosekli ir atliekama vienoje vietoje, o vaikų odontologas galėtų stebėti paciento dantų būklę ilgalaikėje perspektyvoje.
              </p>
            </div>
          </motion.section>

          <motion.section id="procesas" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
            <div className="bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kaip vyksta vaikų dantų gydymas klinikoje?
              </h2>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Vaikų dantų gydymas Bangų odontologijos klinikoje pradedamas nuo vaiko pažinties su aplinka ir specialistu. Pirmojo vizito metu siekiama užmegzti pasitikėjimą, todėl gydymas dažnai nepradedamas iš karto – vaikas supažindinamas su procedūromis jam suprantama ir draugiška forma.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Adaptacija ir apžiūra</h3>
                  <p className="text-sm text-slate-600">
                    Vaiko vizitas pradedamas nuo ramios pažinties su aplinka ir odontologu. Specialistui svarbu užmegzti pasitikėjimą, todėl apžiūra atliekama neskubant, vaikui suprantama forma. Odontologas apžiūri dantukus, įvertina jų būklę, o tuo pačiu paprastai ir draugiškai paaiškina, kas bus daroma vizito metu. Toks požiūris padeda vaikui jaustis saugiai ir sumažina įtampą dar prieš pradedant bet kokias procedūras.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gydymas arba profilaktika</h3>
                  <p className="text-sm text-slate-600">
                    Jeigu nustatoma, kad reikalingas gydymas ar profilaktinės procedūros, jos atliekamos švelniai ir atsižvelgiant į vaiko emocinę bei fizinę savijautą. Odontologas dirba vaiko tempu, stebi jo reakcijas ir, esant poreikiui, daro pertraukas. Procedūrų metu naudojami vaikams pritaikyti metodai ir priemonės, kad vizitas būtų kuo komfortiškesnis ir nesukeltų neigiamų asociacijų.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Paskatinimas ir rekomendacijos</h3>
                  <p className="text-sm text-slate-600">
                    Po vizito vaikas visuomet paskatinamas už drąsą ir bendradarbiavimą, kad apsilankymas pas odontologą būtų siejamas su teigiama patirtimi. Tėvams pateikiamos aiškios ir praktiškos burnos priežiūros rekomendacijos, atsižvelgiant į vaiko amžių ir dantų būklę. Taip pat aptariamas kito profilaktinio vizito laikas, siekiant užtikrinti nuoseklią ir ilgalaikę vaiko burnos sveikatos priežiūrą.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 mt-6 leading-relaxed">
                Toks nuoseklus ir ramus procesas padeda sukurti teigiamą patirtį ir mažina baimę ateities vizitams. Dėl to apsilankymai pas vaikų odontologą tampa įprasta ir nebaugia vaiko kasdienybės dalimi.
              </p>
            </div>
          </motion.section>

          <motion.section id="paruosimas" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
            <div className="bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kaip paruošti vaiką vizitui pas odontologą?
              </h2>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Tinkamas pasiruošimas vizitui pas odontologą gali turėti didelę įtaką vaiko patirčiai. Pagrindinis tikslas – suformuoti pozityvų požiūrį ir sumažinti nerimą dar prieš atvykstant į kliniką.
              </p>

              <h3 className="font-semibold text-darkblue-700 mb-4">Tėvams rekomenduojama:</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>apie vizitą kalbėti ramiai ir pozityviai, vengiant bauginančių žodžių ar neigiamų asmeninių patirčių</li>
                <li>paaiškinti vaikui, kad odontologas padeda dantukams būti sveikiems</li>
                <li>nevartoti žodžių, susijusių su skausmu ar baime</li>
                <li>pasirinkti vizitui laiką, kai vaikas yra pailsėjęs ir geros nuotaikos</li>
              </ul>

              <p className="text-slate-700 mt-6 leading-relaxed">
                Taip pat svarbu neperdėti vizito reikšmės – odontologo apsilankymas turėtų būti pateikiamas kaip įprasta ir natūrali veikla. Patyręs vaikų odontologas vizito metu pasirūpina, kad vaikas jaustųsi saugiai, todėl tėvų ramybė ir pasitikėjimas specialistu yra itin svarbūs.
              </p>
            </div>
          </motion.section>

          <motion.section className="mb-12 space-y-8" variants={item}>
            <div id="ar-skausminga" className="scroll-mt-36 2xl:scroll-mt-24">
              <div className="bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft">
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                  Ar vaikų dantų gydymas yra skausmingas?
                </h2>

                <p className="text-slate-700 leading-relaxed">
                  Vienas dažniausių tėvų klausimų – ar vaikų dantų gydymas sukelia skausmą. Šiuolaikinėje vaikų odontologijoje didelis dėmesys skiriamas komfortui ir švelniam gydymui, todėl procedūros dažniausiai atliekamos be skausmo arba su minimaliu diskomfortu.
                </p>

                <p className="text-slate-700 leading-relaxed mt-4">
                  Jei reikalingas gydymas, taikomi vaikams pritaikyti nuskausminimo metodai, o procedūros atliekamos atsižvelgiant į vaiko savijautą ir reakcijas. Odontologas dirba vaiko tempu, prireikus daromos pertraukos, kad vaikas jaustųsi kuo ramiau.
                </p>

                <p className="text-slate-700 leading-relaxed mt-4">
                  Daugeliu atvejų didžiausią baimę vaikams sukelia ne pats gydymas, o nežinomybė. Todėl aiškus paaiškinimas, draugiškas bendravimas ir palaipsniui vykstanti adaptacija leidžia sukurti teigiamą patirtį. Dėl šios priežasties apsilankymai pas vaikų odontologą mūsų klinikoje Klaipėdoje dažnai tampa nebaugūs net ir jautresniems vaikams.
                </p>
              </div>
            </div>

            <div id="kodel-mes" className="scroll-mt-36 2xl:scroll-mt-24">
              <div className="bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft">
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                  Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
                </h2>

                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Renkantis odontologijos kliniką vaikui svarbu ne tik gydymo rezultatas, bet ir pati patirtis. Bangų odontologijos klinikoje vaikų odontologija grindžiama kantrybe, pagarba vaiko jausmams ir nuosekliu pasitikėjimo kūrimu nuo pirmojo vizito.
                  </p>
                  <p>
                    Klinikoje dirbantis vaikų odontologas kiekvieną vaiką vertina individualiai, atsižvelgdamas į jo amžių, emocinę būklę ir ankstesnę patirtį. Didelis dėmesys skiriamas adaptacijai, aiškiam paaiškinimui vaikui suprantama kalba ir švelniems gydymo metodams. Tai leidžia sumažinti baimę ir formuoti teigiamą požiūrį į odontologinius vizitus ateityje.
                  </p>
                  <p>
                    Tėvai vertina ramią aplinką, aiškią komunikaciją ir skaidrią kainodarą. Teigiami atsiliepimai dažnai pabrėžia ne tik profesionalų gydymą, bet ir nuoširdų bendravimą su vaikais. Tokia patirtis leidžia Bangų odontologijos klinikai tapti patikimu pasirinkimu šeimoms, ieškančioms atsakingos ir ilgalaikės vaikų dantų priežiūros.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className="bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis vaikų odontologo konsultacijai Bangų klinikoje
              </h2>

              <div className="text-slate-700 mb-8 max-w-3xl leading-relaxed space-y-4">
                <p>
                  Jeigu norite pasirūpinti savo vaiko dantų sveikata nuo pat pirmųjų dantukų arba pastebėjote požymių, kad reikalingas gydymas, kviečiame registruotis vizitui Bangų odontologijos klinikoje. Ankstyva priežiūra padeda išvengti sudėtingesnių problemų ir leidžia vaikui priprasti prie odontologo be streso.
                </p>
                <p>
                  Bangų odontologijos klinikoje Jūsų vaiko laukia saugi aplinka, patyrę specialistai ir dėmesingas požiūris. Užsiregistruokite konsultacijai ir leiskite vaikų odontologui pasirūpinti Jūsų vaiko šypsena ramiai, atsakingai ir profesionaliai.
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