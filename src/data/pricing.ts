export type PriceItem = { name: string; from?: number; to?: number; note?: string }
export type PriceGroup = { title: string; items: PriceItem[] }

export const PRICING: PriceGroup[] = [
  {
    title: "Dantų gydymas (suaugusiesiems)",
    items: [
      { name: "Konsultacija, profilaktinis patikrinimas, gydymo plano sudarymas", from: 20 },
      { name: "Danties plombavimas helio plomba", from: 60, to: 80 },
      { name: "Danties plombavimas stiklojonomerine plomba", from: 30, to: 50 },
      { name: "Gydomasis pamušalas (kalcio arba stiklojonomerinis)", from: 15 },
      { name: "Laikina plomba", from: 40 },
      { name: "Nuskausminimas gydant dantis", from: 15 },
      { name: "Vienkartinės priemonės", from: 15 },
      { name: "Nuotrauka", from: 10 },
    ],
  },
  {
    title: "Dantų gydymas (vaikams)",
    items: [
      { name: "Konsultacija, profilaktinis patikrinimas", from: 20 },
      { name: "Pieninių dantų gydymas", from: 50 },
      { name: "Stiklojonomerinė plomba", from: 30 },
      { name: "Kompomerinė plomba", from: 20 },
      { name: "Komplikuotas ėduonies gydymas", from: 60 },
      { name: "Apsilankymas iki 30 min., kai vaikas nesileidžia gydyti dantų", from: 30 },
    ],
  },
  {
    title: "Endodontija",
    items: [
      { name: "Pirminė endodontinė pagalba", from: 70 },
      { name: "Kanalų vaistai", from: 30 },
      { name: "Vieno danties šaknies kanalo chemomechaninis paruošimas", from: 35 },
      { name: "Vieno danties šaknies kanalo plombavimas", from: 35 },
    ],
  },
  {
    title: "Burnos higiena",
    items: [
      { name: "Pilna profesionali burnos higiena", from: 60, to: 80 },
      { name: "Pakartotinė burnos higiena", from: 50 },
    ],
  },
  {
    title: "Dantų balinimas",
    items: [
      { name: "Ofisinis dantų balinimas BEYOND® sistema", from: 250, note: "BEYOND® sistema" },
      { name: "Balinimo kapų atspaudai", from: 30 },
      { name: "Balinimo kapos (2 kapos + balinimo gelis)", from: 200, note: "2 kapos + gelis" },
      { name: "Danties papuošalas", from: 50 },
    ],
  },
  {
    title: "Burnos chirurgija",
    items: [
      { name: "Kaulo augmentacija", from: 150, to: 600 },
      { name: "Šaknies šalinimas", from: 60, to: 80 },
      { name: "Danties šalinimas", from: 80, to: 100 },
      { name: "Komplikuotas trečiųjų apatinių krūminių dantų šalinimas", from: 120, to: 150 },
    ],
  },
  {
    title: "Dantų protezavimas",
    items: [
      { name: "CEREC vainikėlis (ant danties)", from: 400 },
      { name: "CEREC vainikėlis (ant implanto)", from: 450 },
      { name: "CEREC užklotas, laminatė", from: 600 },
      { name: "Metalo keramikos vainikėlis", from: 350 },
      { name: "Bemetalės E-max keramikos vainikėlis (ant danties)", from: 400 },
      { name: "Bemetalės E-max keramikos vainikėlis (ant implanto)", from: 450 },
      { name: "Cirkonio keramikos vainikėlis (ant danties)", from: 400 },
      { name: "Cirkonio keramikos vainikėlis (ant implanto)", from: 450 },
      { name: "Laminatė", from: 600 },
      { name: "Laikinas vainikėlis (kabinete)", from: 40 },
      { name: "Laikinas vainikėlis (laboratorijoje)", from: 70 },
      { name: "Stiklo pluošto kaištis", from: 120 },
      { name: "Metalinis KKĮ", from: 70, to: 100 },
      { name: "Atspaudai (silikonas/skenavimas)", from: 150 },
      { name: "Atramos ant implantų (Medentika®, Straumann®)", from: 200, note: "Medentika®, Straumann®" },
      { name: "Dantų plokštelės", from: 350 },
    ],
  },
  {
    title: "Implantai",
    items: [
      { name: "Straumann® implantas", from: 650, note: "Straumann®" },
      { name: "Medentika® implantas", from: 550, note: "Medentika®" },
    ],
  },
  {
    title: "Dantų tiesinimas (suaugusiesiems)",
    items: [
      { name: "Konsultacija dėl dantų tiesinimo", from: 50 },
      { name: "Dantų tiesinimas ORDOLINE kapų sistema", from: 1800, to: 4000, note: "ORDOLINE sistema" },
    ],
  },
  {
    title: "Estetinis dantų plombavimas",
    items: [
      { name: "Estetinis vieno danties plombavimas", from: 150, to: 200 },
    ],
  },
]
