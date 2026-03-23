import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { TableOfContents } from '../components/TableOfContents'

// Animacijų nustatymai
const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

// UI helper klasės
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

const tocSections = [
  { id: "kainos", label: "Kainos" },
  { id: "kas-yra", label: "Kas yra burnos higiena?" },
  { id: "airflow", label: "AIRFLOW® technologija" },
  { id: "kodel-verta", label: "Kodėl verta rinktis?" },
  { id: "kada-reikalinga", label: "Kada ypač reikalinga?" },
  { id: "procesas", label: "Kaip atliekama?" },
  { id: "po-higienos", label: "Po higienos" },
  { id: "mitai", label: "Mitai" },
]

export default function BurnosHigiena() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Profesionali burnos higiena",
    "description": "Burnos higiena su AIRFLOW technologija Klaipėdoje.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klinika"
    }
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Burnos (dantų) higiena Klaipėdoje | Kaina su akcija | Geriausi atsiliepimai - Bangų klinika"
        description="Profesionali burnos higiena su AIRFLOW® technologija. Pašaliname akmenis, apnašas ir grąžiname dantims natūralų baltumą. Registruokitės vizitui Klaipėdoje."
        keywords="burnos higiena, airflow, dantų valymas, akmenų šalinimas, klaipėda"
        structuredData={structuredData}
      />

      <motion.div
        ref={pageRef}
        className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TableOfContents sections={tocSections} rootRef={pageRef} cta={{ label: "Registruotis vizitui", to: "/kontaktai" }} />
        <div className="min-w-0 flex-1">

          {/* HERO HEADER */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Profesionali burnos higiena Klaipėdoje su AIRFLOW® technologija
            </h1>

            <div className={`mb-8`}>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Net ir kasdien kruopščiai valant dantis namuose, šepetėlis bei tarpdančių siūlas nepasiekia visų burnos vietų. Ilgainiui susidariusios apnašos ir dantų akmenys gali sukelti kariesą, dantenų uždegimą ar nemalonų burnos kvapą. Būtent todėl profesionali burnos higiena yra viena svarbiausių profilaktinių procedūrų, padedančių išsaugoti sveikus dantis ir dantenas.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje atliekama burnos higiena naudojant modernią AIRFLOW® technologiją. Procedūros metu dantys ne tik kruopščiai išvalomi, bet ir tampa šviesesni, lygesni, gaivesni. Tai saugus ir efektyvus sprendimas tiek profilaktikai, tiek prieš kitas odontologines procedūras.
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <Link to="/kontaktai" className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                Registruotis vizitui
              </Link>
            </div>

            {/* KAINOS */}
            <div id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24">
              <div className="space-y-5">
                <div className="w-full">
                  <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                    Burnos higienos paslaugų kainos mūsų klinikoje
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Profesionalios burnos higienos kaina priklauso nuo individualios paciento burnos būklės, apnašų kiekio ir pasirenkamų papildomų procedūrų.
                  </p>
                </div>

                <div className="w-full rounded-2xl border border-brand/20 bg-white shadow-soft overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="md:border-r md:border-slate-100">
                      <div className="divide-y divide-slate-100">
                        <div className="flex justify-between items-center px-5 py-4 gap-4">
                          <span className="text-slate-700 font-medium">Pilna profesionali burnos higiena</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">60 – 80 €</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-4 gap-4">
                          <span className="text-slate-700 font-medium">Pakartotinė burnos higiena (reguliariai lankantis)</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">nuo 50 €</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 md:border-t-0">
                      <div className="divide-y divide-slate-100">
                        <div className="flex justify-between items-center px-5 py-4 gap-4">
                          <span className="text-slate-700 font-medium">Fluoro lako aplikacija</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">nuo 20 €</span>
                        </div>
                        <div className="flex justify-between items-center px-5 py-4 gap-4">
                          <span className="text-slate-700 font-medium">ICON gydymas (fluorozės dėmėms)</span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">60 €</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed text-sm">
                  Tiksli procedūros apimtis ir galutinė kaina aptariama individualios konsultacijos metu, atsižvelgiant į paciento poreikius ir burnos būklę.
                </p>
              </div>
            </div>
          </motion.header>

          {/* KAS YRA HIGIENA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas yra profesionali burnos higiena?
              </h2>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className={innerCard}>
                  <ToothIcon />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Profesionali burnos higiena – tai specialisto atliekama procedūra, kurios metu nuo dantų paviršių, tarpdančių ir po dantenomis pašalinamos minkštosios apnašos, dantų akmenys bei pigmentinės dėmės.
                  </p>
                </div>
                <div className={innerCard}>
                  <ShieldIcon />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Ilgainiui apnašos mineralizuojasi ir virsta dantų akmenimis. Tai sudaro palankią terpę bakterijoms, kurios gali sukelti dantenų uždegimą ir periodonto ligas. Higiena yra svarbiausia profilaktikos priemonė.
                  </p>
                </div>
                <div className={innerCard}>
                  <ClockIcon />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Reguliariai atliekama dantų higiena padeda palaikyti sveikas dantenas ir sumažina karieso riziką. Dažniausiai procedūra rekomenduojama kas 6 mėnesius, o esant problemoms – dažniau.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* AIRFLOW TECHNOLOGIJA */}
          <motion.section id="airflow" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas yra AIRFLOW® technologija?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  AIRFLOW® – tai moderni dantų apnašų šalinimo technologija, kurios metu naudojamas oro, vandens ir specialios sodos mišinys. Šis metodas leidžia švelniai, bet itin tiksliai pašalinti minkštąsias apnašas ir pigmentines dėmes net sunkiai pasiekiamose vietose.
                </p>
                <p>
                  AIRFLOW® technologija ypač tinkama pacientams, turintiems implantus, plombas, vainikėlius ar protezus, nes procedūra yra saugi dantų emaliui ir restauracijoms. Dėl komforto ir efektyvumo ši technologija dažnai pasirenkama tiek reguliariai profilaktikai, tiek kaip pagalbinė priemonė gydant dantenų ligas.
                </p>
                <p>
                  AIRFLOW® taip pat padeda atkurti natūralų dantų atspalvį ir užtikrina ilgiau išliekantį švaros pojūtį po profesionalios burnos higienos.
                </p>
              </div>
            </div>
          </motion.section>

          {/* NAUDA */}
          <motion.section id="kodel-verta" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kodėl verta rinktis profesionalią burnos higieną?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Profesionali burnos higiena yra ne tik estetinė, bet ir gydomoji bei profilaktinė procedūra. Reguliarus apnašų ir dantų akmenų šalinimas padeda išvengti daugelio burnos ligų, kurios dažnai vystosi nepastebimai ir ilgainiui sukelia rimtas komplikacijas. Bangų odontologijos klinikoje Klaipėdoje atliekama dantų higiena orientuota į ilgalaikį rezultatą.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Pašalinamos nematomos apnašos po dantenomis ir tarpdančiuose",
                  "Nuvalomi dantų akmenys – gingivito priežastis",
                  "Poliruojami dantų paviršiai (dantys tampa lygesni ir baltesni)",
                  "Pagerėja burnos kvapas",
                  "Sumažėja ankstyvo dantų netekimo rizika",
                  "Suteikiami individualūs higienos patarimai"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-0.5"><CheckIcon /></span>
                    <span className="text-slate-700 text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed">
                Ši procedūra ypač svarbi pacientams, kurie nori ne tik gražios šypsenos, bet ir ilgalaikės burnos sveikatos. Reguliari profesionali higiena padeda išvengti sudėtingų ir brangių gydymo etapų ateityje.
              </p>
            </div>
          </motion.section>

          {/* KADA REIKALINGA */}
          <motion.section id="kada-reikalinga" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kada profesionali burnos higiena yra ypač reikalinga?
              </h2>

              <div className={innerCard}>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Pacientams, kurie pastebi kraujuojančias dantenas, nemalonų kvapą ar jautrumą.</li>
                  <li>Turintiems implantus, tiltus, vainikėlius ar protezus (ilgaamžiškumui užtikrinti).</li>
                  <li>Nešiojantiems ortodontinius aparatus (kai higiena sudėtingesnė).</li>
                  <li>Rūkantiems ar dažnai vartojantiems kavą, arbatą.</li>
                  <li>Prieš atliekant dantų balinimą, plombavimą ar protezavimą.</li>
                  <li>Kaip reguliarią profilaktiką kas 6 mėnesius (arba kas 3 mėnesius esant problemoms).</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* EIGA */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kaip atliekama burnos higiena su AIRFLOW® technologija?
              </h2>

              <div className="space-y-6">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                    <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">1</span>
                    Dantų akmenų šalinimas ultragarsiniu skaleriu
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Procedūra pradedama dantų akmenų šalinimu naudojant ultragarsinį skalerį. Šis prietaisas vibracijų pagalba efektyviai suskaldo ir pašalina kietas apnašas nuo dantų paviršių ir po dantenomis, nepažeisdamas emalio.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                    <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">2</span>
                    Apnašų šalinimas AIRFLOW® metodu
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Toliau atliekamas dantų valymas AIRFLOW® aparatu. Naudojamas oro, vandens ir specialios sodos mišinys leidžia švelniai pašalinti minkštąsias apnašas bei pigmentines dėmes net sunkiai pasiekiamose vietose. Šis etapas ypač vertinamas dėl komforto ir akivaizdaus estetinio rezultato.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                    <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">3</span>
                    Dantų poliravimas specialia pasta
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Procedūra užbaigiama dantų poliravimu specialia pasta. Poliruotas dantų paviršius tampa lygesnis, todėl apnašos kaupiasi lėčiau, o dantys ilgiau išlieka švarūs ir blizgūs.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PO PROCEDŪROS */}
          <motion.section id="po-higienos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Ką svarbu žinoti po profesionalios burnos higienos?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Po profesionalios burnos higienos dauguma pacientų jau iš karto pastebi švaros, gaivumo ir lengvumo pojūtį burnoje. Dantų paviršiai tampa lygesni, vizualiai šviesesni, o burnos kvapas – malonesnis. Kai kuriais atvejais, ypač jei buvo daug dantų akmenų ar jautrios dantenos, trumpam gali pasireikšti nežymus dantenų jautrumas ar kraujavimas – tai normali ir laikina organizmo reakcija.
              </p>

              <div className={innerCard + ' mb-6'}>
                <h3 className="font-semibold text-darkblue-700 mb-3">Rekomendacijos rezultatui išlaikyti:</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Laikytis individualių higienisto patarimų.</li>
                  <li>Valyti dantis bent 2 kartus per dieną, naudoti tarpdančių siūlą/šepetėlius.</li>
                  <li>Pirmąsias valandas vengti dažančių produktų (kavos, vyno, arbatos).</li>
                  <li>Apsilankyti higienai kas 6 mėnesius (arba dažniau).</li>
                </ul>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Tinkama kasdienė burnos priežiūra ir reguliarūs profilaktiniai vizitai padeda ne tik išlaikyti švarius dantis, bet ir apsaugo nuo dantenų ligų bei sudėtingo gydymo ateityje.
              </p>
            </div>
          </motion.section>

          {/* MITAI */}
          <motion.section id="mitai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Dažniausi mitai apie profesionalią burnos higieną
              </h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mitas #1: higiena pažeidžia emalį</h3>
                  <p className="text-slate-600 text-sm">Tai klaidingas įsitikinimas. Naudojamos priemonės (AIRFLOW) yra saugios ir nepažeidžia emalio, o dantys išlieka lygūs ir nepažeisti.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mitas #2: procedūra skausminga</h3>
                  <p className="text-slate-600 text-sm">Dauguma pacientų procedūrą apibūdina kaip komfortišką. Diskomfortas minimalus ir laikinas, priklausomai nuo apnašų kiekio.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mitas #3: pakanka valyti dantis namuose</h3>
                  <p className="text-slate-600 text-sm">Namuose neįmanoma pasiekti visų vietų (pvz., po dantenomis). Profesionali higiena pašalina apnašas iš sunkiai prieinamų zonų.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mitas #4: higiena reikalinga tik tada, kai skauda</h3>
                  <p className="text-slate-600 text-sm">Ligos vystosi be skausmo. Reguliari higiena užkerta kelią problemoms (kraujavimui, kvapui) dar prieš joms pasireiškiant.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mitas #5: higiena tik dėl grožio</h3>
                  <p className="text-slate-600 text-sm">Nors dantys tampa šviesesni, pagrindinis tikslas – sveikata: karieso ir dantenų ligų prevencija.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis profesionaliai burnos higienai Bangų klinikoje
              </h2>

              <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
                Jeigu ieškote patikimos ir profesionalios odontologijos klinikos Klaipėdoje, kviečiame apsilankyti Bangų odontologijos klinikoje. Pacientų pasitikėjimą mūsų teikiamomis paslaugomis patvirtina teigiami atsiliepimai, kuriuose dažnai minimas procedūros švelnumas, aiškus situacijos apibendrinimas ir džiuginantis ilgalaikis rezultatas. Čia Jūsų laukia modernios technologijos, patyrę specialistai ir individualus požiūris į kiekvieną pacientą.
              </p>

              <Link to="/kontaktai" className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1">
                Registruotis vizitui
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}