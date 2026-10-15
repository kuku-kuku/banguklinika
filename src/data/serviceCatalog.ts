/* ----------------------------------------------------------------------------
 * The services page catalogue.
 *
 * The page used to hold a flat array of 37 titles and nothing else, which is
 * why the cards had nothing to show. Each entry now carries a one-line summary,
 * and the list is grouped: eight families, each with a photo that stands in for
 * the whole family. There is no per-service photography, and inventing 37 stock
 * images would say less than one honest photo per family does.
 *
 * `image` is the family's photo — every path here is covered by the responsive
 * pipeline (see scripts/responsive-images.mjs), so <Picture> finds a manifest
 * entry for all of them.
 * -------------------------------------------------------------------------- */

export type ServiceEntry = {
  id: string
  title: string
  /** One line, shown on the card and in the hover preview. */
  summary: string
  to: string
}

export type ServiceGroup = {
  id: string
  title: string
  /** Sits under the group heading — says what the family is for. */
  blurb: string
  image: string
  services: ServiceEntry[]
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: 'implantai',
    title: 'Dantų implantai',
    blurb: 'Prarastų dantų atkūrimas nuo vieno danties iki viso žandikaulio.',
    image: '/implantacija.webp',
    services: [
      {
        id: 'dantu-implantacija',
        title: 'Dantų implantacija',
        summary: 'Prarasto danties šaknies atkūrimas titano implantu su 3D planavimu.',
        to: '/paslaugos/dantu-implantacija',
      },
      {
        id: 'vienmomente-implantacija',
        title: 'Vienmomentė implantacija',
        summary: 'Implantas įsriegiamas tą patį vizitą, kai pašalinamas dantis.',
        to: '/paslaugos/vienmomente-implantacija',
      },
      {
        id: 'straumann-dantu-implantai',
        title: 'STRAUMANN dantų implantai',
        summary: 'Šveicariška sistema su ilgalaike gamintojo garantija.',
        to: '/paslaugos/straumann-dantu-implantai',
      },
      {
        id: 'visi-dantys-ant-4-implantu',
        title: 'Visi dantys ant 4 implantų (All-on-4)',
        summary: 'Visas žandikaulis atkuriamas remiantis į keturis implantus.',
        to: '/paslaugos/visi-dantys-ant-4-implantu',
      },
    ],
  },
  {
    id: 'protezavimas',
    title: 'Dantų protezavimas',
    blurb: 'Pažeistų ar prarastų dantų formos, funkcijos ir estetikos atkūrimas.',
    image: '/protezavimas.webp',
    services: [
      {
        id: 'dantu-protezavimas',
        title: 'Dantų protezavimas',
        summary: 'Pažeistų ar prarastų dantų atkūrimas vainikėliais ir protezais.',
        to: '/paslaugos/dantu-protezavimas',
      },
      {
        id: 'dantu-karunieles',
        title: 'Dantų karūnėlės (vainikėliai)',
        summary: 'Smarkiai pažeisto danties apsauga ir formos atkūrimas.',
        to: '/paslaugos/dantu-karunieles',
      },
      {
        id: 'cirkonio-keramikos-vainikelis',
        title: 'Cirkonio keramikos vainikėlis',
        summary: 'Tvirtas ir natūraliai atrodantis vainikėlis be metalo karkaso.',
        to: '/paslaugos/cirkonio-keramikos-vainikelis',
      },
      {
        id: 'dantu-tiltai',
        title: 'Dantų tiltai',
        summary: 'Kelių gretimų dantų atkūrimas remiantis į kaimyninius dantis.',
        to: '/paslaugos/dantu-tiltai',
      },
      {
        id: 'dantu-mikroprotezavimas',
        title: 'Dantų mikroprotezavimas',
        summary: 'Įklotai ir užklotai tada, kai plombos nebepakanka.',
        to: '/paslaugos/dantu-mikroprotezavimas',
      },
      {
        id: 'dantu-uzklotai',
        title: 'Dantų užklotai',
        summary: 'Priekinių dantų formos ir spalvos korekcija plonomis laminatėmis.',
        to: '/paslaugos/dantu-uzklotai',
      },
      {
        id: 'isimami-protezai',
        title: 'Išimami protezai',
        summary: 'Netekus daugelio dantų – lengvi, individualiai pritaikyti protezai.',
        to: '/paslaugos/isimami-protezai',
      },
      {
        id: 'kompensacija-protezavimui',
        title: 'Kompensacija protezavimui',
        summary: 'Padedame sutvarkyti valstybės kompensuojamo protezavimo dokumentus.',
        to: '/paslaugos/kompensacija-protezavimui',
      },
    ],
  },
  {
    id: 'gydymas',
    title: 'Dantų gydymas',
    blurb: 'Ėduonies, kanalų ir danties audinių gydymas išsaugant savo dantį.',
    image: '/plombavimas.webp',
    services: [
      {
        id: 'dantu-gydymas',
        title: 'Dantų gydymas',
        summary: 'Ėduonies ir kitų danties pažeidimų gydymas.',
        to: '/paslaugos/dantu-taisymas-gydymas',
      },
      {
        id: 'terapinis-dantu-gydymas',
        title: 'Terapinis dantų gydymas',
        summary: 'Gydymas išsaugant kuo daugiau sveikų danties audinių.',
        to: '/paslaugos/terapinis-dantu-gydymas',
      },
      {
        id: 'gydymas-icon-sistema',
        title: 'Gydymas „ICON“ sistema',
        summary: 'Ankstyvo ėduonies stabdymas visai be gręžimo.',
        to: '/paslaugos/gydymas-icon-sistema',
      },
      {
        id: 'endodontinis-gydymas',
        title: 'Endodontinis gydymas',
        summary: 'Danties kanalų valymas ir užpildymas, kad dantis išliktų.',
        to: '/paslaugos/endodontinis-gydymas',
      },
      {
        id: 'dantu-plombavimas',
        title: 'Dantų plombavimas',
        summary: 'Pažeisto danties atkūrimas ilgaamže plomba.',
        to: '/paslaugos/dantu-plombavimas',
      },
      {
        id: 'bruksizmo-dantu-kapa',
        title: 'Bruksizmo dantų kapa',
        summary: 'Individuali kapa, sauganti dantis nuo naktinio griežimo.',
        to: '/paslaugos/bruksizmo-dantu-kapa',
      },
    ],
  },
  {
    id: 'higiena',
    title: 'Burnos higiena ir profilaktika',
    blurb: 'Reguliari priežiūra, kuri pigiausiai sprendžia būsimas problemas.',
    image: '/higiena.webp',
    services: [
      {
        id: 'burnos-higiena',
        title: 'Burnos higiena',
        summary: 'Profesionalus apnašų ir dantų akmenų šalinimas.',
        to: '/paslaugos/burnos-higiena',
      },
      {
        id: 'dantu-fluoravimas',
        title: 'Dantų fluoravimas',
        summary: 'Emalio stiprinimas ir dantų jautrumo mažinimas.',
        to: '/paslaugos/dantu-fluoravimas',
      },
      {
        id: 'dantenu-uzdegimas-gingivitas',
        title: 'Dantenų uždegimas (gingivitas)',
        summary: 'Kraujuojančių ir uždegusių dantenų gydymas.',
        to: '/paslaugos/dantenu-uzdegimas-gingivitas',
      },
    ],
  },
  {
    id: 'estetika',
    title: 'Estetinė odontologija',
    blurb: 'Dantų spalva, forma ir eilė – matomas šypsenos rezultatas.',
    image: '/balinimas.webp',
    services: [
      {
        id: 'dantu-balinimas',
        title: 'Dantų balinimas',
        summary: 'Natūralios dantų spalvos pašviesinimas klinikoje.',
        to: '/paslaugos/dantu-balinimas',
      },
      {
        id: 'dantu-balinimo-kapos',
        title: 'Dantų balinimo kapos',
        summary: 'Individualios kapos balinimui namuose savo tempu.',
        to: '/paslaugos/dantu-balinimo-kapos',
      },
      {
        id: 'dantu-balinimas-su-lempa',
        title: 'Dantų balinimas su lempa',
        summary: 'Greitas balinimas, aktyvuojamas šviesos vieno vizito metu.',
        to: '/paslaugos/dantu-balinimas-su-lempa',
      },
      {
        id: 'estetinis-plombavimas',
        title: 'Estetinis plombavimas',
        summary: 'Nematomos plombos, atkuriančios natūralią danties formą.',
        to: '/paslaugos/estetinis-plombavimas',
      },
      {
        id: 'dantu-tiesinimas',
        title: 'Dantų tiesinimas',
        summary: 'Dantų eilės taisymas skaidriomis kapomis.',
        to: '/paslaugos/dantu-tiesinimas',
      },
    ],
  },
  {
    id: 'chirurgija',
    title: 'Burnos chirurgija',
    blurb: 'Chirurginės procedūros burnoje taikant vietinį nuskausminimą.',
    image: '/blog/kaulo-priauginimas.jpg',
    services: [
      {
        id: 'burnos-chirurgija',
        title: 'Burnos chirurgija',
        summary: 'Chirurginės procedūros burnoje su patyrusiu chirurgu.',
        to: '/paslaugos/burnos-chirurgija',
      },
      {
        id: 'sinuso-pakelimas',
        title: 'Sinuso pakėlimas',
        summary: 'Kaulo paruošimas implantui viršutiniame žandikaulyje.',
        to: '/paslaugos/sinuso-pakelimas',
      },
      {
        id: 'zandikaulio-kaulo-priauginimas',
        title: 'Žandikaulio kaulo priauginimas',
        summary: 'Kaulo tūrio atkūrimas, kai jo nepakanka implantui.',
        to: '/paslaugos/zandikaulio-kaulo-priauginimas',
      },
      {
        id: 'pulinio-atverimas',
        title: 'Pūlinio atvėrimas',
        summary: 'Skubus pūlinio atvėrimas ir uždegimo nuslopinimas.',
        to: '/paslaugos/pulinio-atverimas',
      },
      {
        id: 'dantu-traukimas',
        title: 'Dantų traukimas',
        summary: 'Nebegydomo danties šalinimas taikant nuskausminimą.',
        to: '/paslaugos/dantu-traukimas',
      },
      {
        id: 'protiniu-dantu-salinimas',
        title: 'Protinių dantų šalinimas',
        summary: 'Netinkamai dygstančių aštuntukų pašalinimas.',
        to: '/paslaugos/protiniu-dantu-salinimas',
      },
    ],
  },
  {
    id: 'vaikams',
    title: 'Vaikų odontologija',
    blurb: 'Pirmieji vizitai be baimės ir priežiūra, kol dantys dar keičiasi.',
    image: '/blog/vaikui-skauda-danti.jpg',
    services: [
      {
        id: 'vaiku-odontologija',
        title: 'Vaikų odontologija',
        summary: 'Draugiškas gydymas, pritaikytas mažiesiems pacientams.',
        to: '/paslaugos/vaiku-odontologija',
      },
      {
        id: 'vaiku-profilaktinis-patikrinimas',
        title: 'Vaikų profilaktinis patikrinimas',
        summary: 'Reguliarus patikrinimas, kad ėduonis būtų pastebėtas anksti.',
        to: '/paslaugos/vaiku-profilaktinis-patikrinimas',
      },
      {
        id: 'dantu-higiena-vaikams',
        title: 'Dantų higiena vaikams',
        summary: 'Švelni profesionali higiena ir valymosi įgūdžių mokymas.',
        to: '/paslaugos/dantu-higiena-vaikams',
      },
    ],
  },
  {
    id: 'skubi-pagalba',
    title: 'Skubi pagalba ir diagnostika',
    blurb: 'Kai skauda dabar, ir tyrimai, nuo kurių prasideda gydymo planas.',
    image: '/blog/kiek-laiko-skauda-danti-po-kanalu-valymo.jpg',
    services: [
      {
        id: 'skubi-pagalba',
        title: 'Skubi pagalba',
        summary: 'Ūmus dantų skausmas, patinimas ar trauma – priimame skubiai.',
        to: '/paslaugos/skubi-pagalba',
      },
      {
        id: 'rentgenologiniai-tyrimai',
        title: 'Rentgenologiniai tyrimai',
        summary: 'Skaitmeninės nuotraukos ir 3D vaizdas tiksliam gydymo planui.',
        to: '/paslaugos/rentgenologiniai-tyrimai',
      },
    ],
  },
]

/** Flat list, for anything that needs every service without the grouping. */
export const ALL_SERVICES: ServiceEntry[] = SERVICE_GROUPS.flatMap((g) => g.services)
