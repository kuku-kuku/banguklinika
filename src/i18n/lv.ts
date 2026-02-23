/** Latvian (lv) translations — banguklinika.lt/lv/ */

export const SITE_URL = 'https://banguklinika.lt'

/** Route map: LT path → LV path (and reverse) */
export const ROUTE_MAP_LT_TO_LV: Record<string, string> = {
  '/':                                   '/lv',
  '/paslaugos/dantu-implantacija':       '/lv/pakalpojumi/zobu-implantacija',
  '/paslaugos/dantu-protezavimas':       '/lv/pakalpojumi/zobu-protezesana',
  '/paslaugos/dantu-taisymas-gydymas':   '/lv/pakalpojumi/zobu-arstnieciba',
  '/paslaugos/dantu-tiesinimas':         '/lv/pakalpojumi/zobu-izlinesana',
  '/paslaugos/burnos-higiena':           '/lv/pakalpojumi/mutes-higiena',
  '/paslaugos/burnos-chirurgija':        '/lv/pakalpojumi/mutes-hirurgija',
  '/paslaugos/dantu-balinimas':          '/lv/pakalpojumi/zobu-balinesana',
  '/paslaugos/estetinis-plombavimas':    '/lv/pakalpojumi/estetiska-plombana',
  '/paslaugos/dantu-plombavimas':        '/lv/pakalpojumi/zobu-plombana',
  '/paslaugos/dantu-traukimas':          '/lv/pakalpojumi/zobu-ekstrakcija',
  '/paslaugos/endodontinis-gydymas':     '/lv/pakalpojumi/endodontija',
  '/paslaugos/vaiku-odontologija':       '/lv/pakalpojumi/bernu-odontologija',
  '/apie':                               '/lv/par-mums',
  '/kainos':                             '/lv/cenas',
  '/kontaktai':                          '/lv/kontakti',
  '/ypatingi-pasiulymai':               '/lv/ipasi-piedavajumi',
}

export const ROUTE_MAP_LV_TO_LT: Record<string, string> = Object.fromEntries(
  Object.entries(ROUTE_MAP_LT_TO_LV).map(([lt, lv]) => [lv, lt])
)

/** Navbar labels in Latvian */
export const navLv = [
  { to: '/lv', label: 'Sākums' },
  { to: '/lv/par-mums', label: 'Par mums' },
  {
    to: '/lv/pakalpojumi',
    label: 'Pakalpojumi',
    dropdown: [
      { to: '/lv/pakalpojumi/zobu-implantacija',  label: 'Zobu implantācija' },
      { to: '/lv/pakalpojumi/zobu-protezesana',   label: 'Zobu protezēšana' },
      { to: '/lv/pakalpojumi/zobu-arstnieciba',   label: 'Zobu ārstniecība' },
      { to: '/lv/pakalpojumi/zobu-izlinesana',    label: 'Zobu izlīdzināšana' },
      { to: '/lv/pakalpojumi/mutes-higiena',      label: 'Mutes higiēna' },
      { to: '/lv/pakalpojumi/mutes-hirurgija',    label: 'Mutes ķirurģija' },
      { to: '/lv/pakalpojumi/zobu-balinesana',    label: 'Zobu balināšana' },
      { to: '/lv/pakalpojumi/estetiska-plombana', label: 'Estētiskā plombēšana' },
      { to: '/lv/pakalpojumi/zobu-plombana',      label: 'Zobu plombēšana' },
      { to: '/lv/pakalpojumi/zobu-ekstrakcija',   label: 'Zobu ekstrakcija' },
      { to: '/lv/pakalpojumi/endodontija',        label: 'Endodontija' },
      { to: '/lv/pakalpojumi/bernu-odontologija', label: 'Bērnu zobārstniecība' },
    ],
  },
  { to: '/lv/cenas',               label: 'Cenas' },
  { to: '/lv/ipasi-piedavajumi',   label: 'Īpašie piedāvājumi' },
  { to: '/lv/kontakti',            label: 'Kontakti' },
]

/** Home page (lv) */
export const homeLv = {
  seo: {
    title: 'Zobārstniecības klīnika Klaipēdā',
    description:
      'Zobārstniecības klīnika Klaipēdā: zobu ārstniecība, implantācija (Straumann®/Medentika®), CEREC protezēšana 1 vizītē, AIRFLOW® higiēna, estētiskā plombēšana. Bezmaksas sākotnējā konsultācija.',
    keywords:
      'zobārstniecības klīnika Klaipēda, zobu ārstniecība Klaipēda, zobu implanti, CEREC Klaipēda, mutes higiēna, estētiskā zobārstniecība, zobu protezēšana',
  },
  hero: {
    title: 'Smaids, ko gribi rādīt!',
    subtitle:
      'Meklējat visu vienuviet? Ārstniecība, implanti, CEREC tehnoloģija, estētika un higiēna — bez ilgas gaidīšanas, ar cilvēcisku pieeju un bez slēptajām maksām.',
    ctaPhone: 'Reģistrācija pa tālruni',
    ctaOnline: 'Reģistrācija tiešsaistē',
    bullets: [
      'Straumann® / Medentika® implanti',
      'CEREC – kroņi 1 vizītē',
      'Estētiskā plombēšana',
      'Profesionāla higiēna (AIRFLOW®)',
    ],
  },
  whyChoose: {
    title: 'Kāpēc izvēlēties Bangų klīniku?',
    subtitle:
      'Moderna iekārta, pieredzējusi komanda un skaidrs ārstniecības plāns — lai katrs vizīts būtu netraucēts un prognozējams.',
    items: [
      { t: 'Moderna iekārta', d: 'CEREC skenēšana — ātrāki un precīzāki vizīti.' },
      { t: 'Pieredzējusi komanda', d: 'Individuāli ārstniecības plāni un cieņpilna komunikācija bez stresa.' },
      { t: 'Skaidras cenas', d: 'Publisks cenrādis un caurredzami lēmumi — bez slēptajām maksām.' },
    ],
  },
  freeConsult: {
    title: 'Sākotnējā konsultācija ir bezmaksas',
    text: 'Pierakstieties sākotnējam novērtējumam un saņemiet 10–15% atlaidi turpmākajai ārstniecībai, pārejot uz pilnu plānu.',
    cta: 'Reģistrācija tiešsaistē',
    note: '* Atlaides tiek piemērotas saskaņā ar klīnikas noteikumiem. Vairāk informācijas — reģistrācijas laikā.',
  },
}

/** Zobu implantācija page (lv) */
export const implantacijaLv = {
  seo: {
    title: 'Zobu implantācija Klaipēdā',
    description:
      'Zobu implantācija Klaipēdā — modernākais zaudēto zobu atjaunošanas risinājums. Straumann® un Neodent® implanti. Bezmaksas konsultācija.',
    keywords:
      'zobu implantācija Klaipēda, zobu implanti, Straumann implanti, ALL-ON-4, zobu atjaunošana',
    canonical: `${SITE_URL}/lv/pakalpojumi/zobu-implantacija`,
    alternates: [
      { lang: 'lt',        url: `${SITE_URL}/paslaugos/dantu-implantacija` },
      { lang: 'lv',        url: `${SITE_URL}/lv/pakalpojumi/zobu-implantacija` },
      { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-implantacija` },
    ],
  },
  hero: {
    h1: 'Zobu implantācija',
    h2: 'Zobu implantācija Klaipēdā — modernākais zaudēto zobu atjaunošanas risinājums',
    intro: [
      'Zaudēti zobi ir ne tikai estētiska problēma. Tie tieši ietekmē košļāšanas funkciju, runu, sakodumu, sejas proporcijas un vispārējo dzīves kvalitāti. Laika gaitā, zaudējot vienu vai vairākus zobus, mainās visa mutes sistēma: blakus zobi sāk pārvietoties, palielinās slodze uz pārējiem zobiem, izzūd žokļa kauls, un sejas vaibsti var kļūt iegrimuši. Tāpēc mūsdienu zobārstniecībā arvien lielāka uzmanība tiek pievērsta ne tikai pagaidu risinājumiem, bet ilgtspējīgai, uzticamai un fizioloģiski pareizai zobu atjaunošanai.',
      'Tieši tāpēc zobu implantācija šodien tiek uzskatīta par modernāko un efektīvāko metodi zaudēto zobu atjaunošanai. Tas ir risinājums, kas ļauj atjaunot ne tikai redzamo zoba daļu, bet arī tā sakni, nodrošinot dabīgu funkciju, stabilitāti un estētiku. Atšķirībā no izņemamajām protēzēm vai tiltiem, implanti kļūst par stingru atbalstu mākslīgajiem zobiem un palīdz saglabāt žokļa kaulu un dabīgo sejas formu.',
      'Bangų zobārstniecības klīnikā Klaipēdā implantācija tiek veikta, izmantojot tikai augstākās kvalitātes, pasaulē atzītus risinājumus. Pacientiem tiek piedāvāti ilgmūžīgi zobu implanti, izgatavoti pēc stingriem medicīnas standartiem un piemēroti ilgstošai lietošanai.',
    ],
    cta: 'Pierakstīties vizītei',
  },
  prices: {
    heading: 'Izmantotie zobu implanti un to cenas',
    items: [
      {
        name: 'Straumann® implants',
        price: '650 €',
        desc: 'Viens no vadošajiem implantu ražotājiem pasaulē, slavens ar ārkārtīgi augstu pielāgošanās rādītāju, ilgmūžību un uzticamību.',
      },
      {
        name: 'Neodent® implants',
        price: '500 €',
        desc: 'Augstas kvalitātes implanti ar uzticamu konstrukciju un labu cenas un kvalitātes attiecību. Piemēroti dažādām klīniskām situācijām.',
      },
    ],
    additional: {
      heading: 'Papildu procedūras',
      items: [
        {
          name: 'Sinusa paaugstināšanas operācija',
          price: '500–700 €',
          desc: 'Šī procedūra tiek veikta, kad augšžoklī nav pietiekami daudz kaula implanta stabilitātei.',
        },
      ],
    },
    priceNote: {
      heading: 'No kā atkarīga galīgā implantācijas cena?',
      text: 'Galīgā zobu implantācijas cena nav vienāda visiem pacientiem, jo tā ir atkarīga no vairākiem individuāliem faktoriem: nepieciešamo implantu skaita, izvēlētā implanta veida un žokļa kaula stāvokļa. Tāpēc pirms ārstniecības uzsākšanas vienmēr tiek veikta plaša konsultācija un diagnostika.',
    },
  },
  sections: {
    whatIs: {
      heading: 'Kas ir zobu implantācija?',
      text: 'Zobu implantācija ir procedūra, kuras laikā mākslīgā zoba sakne (implants) tiek ievietota žokļa kaulā. Uz implanta tiek uzlikts mākslīgais zobs — kronis, kas izskatās un darbojas tāpat kā dabīgais zobs. Implants saplūst ar kaulu (osteointegration) un kļūst par pastāvīgu, stabilu atbalstu.',
    },
    suitable: {
      heading: 'Vai implantācija piemērota visiem?',
      items: [
        'Pieaugušiem pacientiem ar pilnībā izveidojušos žokļa kaulu',
        'Cilvēkiem ar labu vispārējo veselību bez nekontrolētas diabētes vai asins recēšanas traucējumiem',
        'Nesmēķētājiem vai tiem, kas gatavi atteikties no smēķēšanas ārstniecības laikā',
        'Pacientiem ar pietiekami daudz žokļa kaula vai tiem, kas gatavi kaula papildināšanas procedūrai',
      ],
    },
    whyFast: 'Kāpēc svarīgi ātri atjaunot zobus?',
    allOn4: {
      heading: 'ALL-ON-4 implantācija',
      text: 'ALL-ON-4 ir moderns risinājums pacientiem, kuriem trūkst daudzu vai visu zobu. Izmantojot tikai četrus implantus, tiek nostiprināts pilns mākslīgo zobu tilts — bez ilgstošas gaidīšanas un ar minimālu iejaukšanos.',
    },
    cta: {
      heading: 'Pierakstieties konsultācijai',
      text: 'Mūsu implantologi novērtēs jūsu situāciju un piedāvās optimālo risinājumu.',
      btnPhone: 'Zvanīt',
      btnContact: 'Rakstīt mums',
    },
  },
}
