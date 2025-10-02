// scripts/resolvePlaceId.mjs
import 'dotenv/config';

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const QUERY = process.argv.slice(2).join(' ') || process.env.GOOGLE_PLACE_QUERY || 'Bangų klinika Klaipėda';

if (!API_KEY) {
  console.error('Missing GOOGLE_MAPS_API_KEY in .env');
  process.exit(1);
}

const url = 'https://places.googleapis.com/v1/places:searchText';

const body = {
  textQuery: QUERY,
  // prireikus galima siaurinti paiešką, pvz.:
  // regionCode: "LT",
  // locationBias: { rectangle: { low: { latitude: 54.6, longitude: 21.0 }, high: { latitude: 56.0, longitude: 25.0 } } }
};

const r = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': API_KEY,
    'X-Goog-FieldMask': [
      'places.id',
      'places.displayName',
      'places.formattedAddress',
    ].join(','),
  },
  body: JSON.stringify(body),
});

if (!r.ok) {
  const t = await r.text().catch(() => '');
  console.error('Search error:', r.status, t);
  process.exit(2);
}

const data = await r.json();
if (!data.places || data.places.length === 0) {
  console.error('Nerasta vietų pagal užklausą:', QUERY);
  process.exit(3);
}

for (const p of data.places) {
  console.log('--------------------------------');
  console.log('PLACE_ID :', p.id);
  console.log('NAME     :', p.displayName?.text);
  console.log('ADDRESS  :', p.formattedAddress);
}
