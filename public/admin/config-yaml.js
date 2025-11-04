// api/config-yaml.js
export default function handler(req, res) {
  const yaml = `backend:
  name: github
  repo: kuku-kuku/banguklinika
  branch: main
  base_url: https://www.banguklinika.lt
  auth_endpoint: api/auth

media_folder: "public/uploads"
public_folder: "/uploads"

collections:
  - name: "home"
    label: "Pagrindinis"
    files:
      - file: "src/content/home.json"
        label: "Home turinys"
        name: "home_json"
        fields:
          - { label: SEO aprašymas, name: seo.description, widget: text }
          - { label: SEO raktažodžiai, name: seo.keywords, widget: string, required: false }
          - { label: Hero antraštė, name: hero.title, widget: string }
          - { label: Hero paantraštė, name: hero.subtitle, widget: text }
          - { label: Hero nuotraukos, name: hero.images, widget: list, field: { label: URL, name: item, widget: string } }
          - { label: CTA telefonui, name: hero.ctaPhone, widget: string }
          - { label: CTA internetui, name: hero.ctaOnline, widget: string }
          - { label: Bulletai, name: hero.bullets, widget: list, field: { label: Punktas, name: item, widget: string } }
          - label: Kodėl rinktis mus
            name: whyChoose
            widget: object
            fields:
              - { label: Antraštė, name: title, widget: string }
              - { label: Paantraštė, name: subtitle, widget: text, required: false }
              - label: Kortelės
                name: items
                widget: list
                fields:
                  - { label: Pavadinimas, name: t, widget: string }
                  - { label: Aprašymas, name: d, widget: text }
          - label: Nemokama konsultacija
            name: freeConsult
            widget: object
            fields:
              - { label: Antraštė, name: title, widget: string }
              - { label: Tekstas, name: text, widget: text }
              - { label: CTA, name: cta, widget: string }
              - { label: Pastaba, name: note, widget: string, required: false }
          - label: FAQ teaser
            name: faqTeaser
            widget: object
            fields:
              - { label: Antraštė, name: title, widget: string }
              - { label: Tekstas, name: text, widget: text }
              - { label: CTA, name: cta, widget: string }

  - name: "about"
    label: "Apie mus"
    files:
      - file: "src/content/about.json"
        label: "Apie mus (JSON)"
        name: "about_json"
        fields:
          - { label: SEO pavadinimas, name: seo.title, widget: string }
          - { label: SEO aprašymas, name: seo.description, widget: text }
          - { label: Hero antraštė, name: hero.title, widget: string }
          - { label: Įžanga, name: intro, widget: text }
          - { label: Paslaugų skilties pavadinimas, name: servicesTitle, widget: string }
          - { label: Paslaugų sąrašas, name: services, widget: list, field: { label: Punktas, name: item, widget: string } }
          - label: Laboratorija
            name: lab
            widget: object
            fields:
              - { label: Antraštė, name: title, widget: string }
              - { label: Tekstas 1, name: p1, widget: text }
              - { label: Tekstas 2, name: p2, widget: text }
              - { label: Pastaba, name: note, widget: text, required: false }
          - { label: Komandos skilties pavadinimas, name: teamTitle, widget: string }
          - label: Komanda
            name: team
            widget: list
            fields:
              - { label: Vardas, name: name, widget: string }
              - { label: Vaidmuo, name: role, widget: string }
              - { label: Licencija, name: license, widget: string, required: false }

  - name: "contact"
    label: "Kontaktai"
    files:
      - file: "src/content/contact.json"
        label: "Kontaktų turinys"
        name: "contact_json"
        fields:
          - { label: SEO pavadinimas, name: seo.title, widget: string }
          - { label: SEO aprašymas, name: seo.description, widget: text }
          - { label: Kanoninis URL, name: seo.canonical, widget: string, required: false }
          - label: Antraštės
            name: headings
            widget: object
            fields:
              - { label: Kontaktai, name: contact, widget: string }
              - { label: Darbo laikas, name: hours, widget: string }
              - { label: Parašykite mums, name: writeUs, widget: string }
              - { label: Info pastaba, name: infoNote, widget: string, required: false }
              - { label: Kainų CTA, name: pricesCta, widget: string, required: false }

  - name: "offers"
    label: "Akcijos"
    files:
      - file: "src/content/offers.json"
        label: "Ypatingi pasiūlymai"
        name: "offers_json"
        fields:
          - { label: SEO pavadinimas, name: seo.title, widget: string }
          - { label: SEO aprašymas, name: seo.description, widget: text }
          - label: Pasiūlymai
            name: offers
            widget: list
            fields:
              - { label: Žymė, name: label, widget: string, required: false }
              - { label: Pavadinimas, name: title, widget: string }
              - { label: Dabar kaina (Eur), name: priceNow, widget: number, value_type: "int" }
              - { label: Sena kaina (Eur), name: priceWas, widget: number, required: false }
              - { label: Viršutiniai punktai, name: bulletsTop, widget: list, field: { label: Punktas, name: item, widget: string }, required: false }
              - { label: Vidurinė antraštė, name: midTitle, widget: string, required: false }
              - { label: Vidurinis tekstas, name: midText, widget: text, required: false }
              - { label: Antra vidurinė antraštė, name: midTitle2, widget: string, required: false }
              - { label: Apatiniai punktai, name: bulletsBottom, widget: list, field: { label: Punktas, name: item, widget: string }, required: false }
          - label: Bendra akcija
            name: general
            widget: object
            fields:
              - { label: Antraštė, name: treatmentDiscountTitle, widget: string, required: false }
              - { label: Tekstas, name: treatmentDiscountText, widget: text, required: false }
              - { label: Pastaba apačioje, name: note, widget: string, required: false }

  - name: "pricing"
    label: "Kainos"
    files:
      - file: "src/content/pricing.json"
        label: "Kainų puslapis"
        name: "pricing_json"
        fields:
          - { label: SEO pavadinimas, name: seo.title, widget: string }
          - { label: SEO aprašymas, name: seo.description, widget: text }
          - { label: Įžanga, name: intro, widget: text, required: false }
          - { label: Pastaba apačioje, name: footnote, widget: string, required: false }`;

  res.setHeader('Content-Type', 'text/yaml; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).send(yaml);
}