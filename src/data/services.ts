export type Service = { id: string; title: string; description: string; highlights: string[] }
export const SERVICES: Service[] = [
  { id: "plombavimas", title: "Dantų gydymas ir plombavimas", description: "Estetinis plombavimas, ėduonies gydymas, pažangi medžiagų kokybė.", highlights: ["Estetinis atkūrimas", "Mikroskopinis tikslumas", "Ilgaamžės plombos"] },
  { id: "implantai", title: "Dantų implantacija", description: "Straumann® ir Medentika® sistemos, vienmomentė implantacija.", highlights: ["3D planavimas", "Mažesnis diskomfortas", "Ilgaamžiai rezultatai"] },
  { id: "protezavimas", title: "Skaitmeninis protezavimas (CEREC)", description: "Vainikėliai ir įklotai per vieną vizitą su CEREC.", highlights: ["Per 1 vizitą", "Tikslus pritaikymas", "Natūrali estetika"] },
  { id: "estetika", title: "Estetinė odontologija", description: "Balinimas, laminatės, šypsenos dizainas.", highlights: ["Saugu ir veiksminga", "Natūrali išvaizda", "Individualus planas"] },
  { id: "higiena", title: "Profesionali burnos higiena", description: "Apnašų, akmenų šalinimas, profilaktika ir mokymai.", highlights: ["AIRFLOW®", "Poliravimas", "Profilaktika"] }
]
