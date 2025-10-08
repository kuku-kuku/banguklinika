// api/reviews.js

const TTL = 15 * 60 * 1000; // 15 min in-memory cache
let cache = { ts: 0, data: null };

export default async function handler(req, res) {
  try {
    const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
    const PLACE_ID = process.env.GOOGLE_PLACE_ID;
    const LANGUAGE = process.env.REV_LANGUAGE || 'lt';

    if (!API_KEY || !PLACE_ID) {
      return res
        .status(500)
        .json({ error: 'Missing GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID' });
    }

    // Edge (CDN) kešas + leidžiam rodyti seną kol fone atsinaujins
    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=86400');

    // Papildomas "warm lambda" cache
    const now = Date.now();
    if (cache.data && now - cache.ts < TTL) {
      return res.status(200).json(cache.data);
    }

    const url =
      `https://places.googleapis.com/v1/places/${encodeURIComponent(PLACE_ID)}` +
      `?languageCode=${encodeURIComponent(LANGUAGE)}`;

    const r = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': [
          'displayName',
          'formattedAddress',
          'rating',
          'userRatingCount',
          'reviews.rating',
          'reviews.text', // visas LocalizedText objektas
          'reviews.relativePublishTimeDescription',
          'reviews.publishTime',
          'reviews.authorAttribution.displayName',
          'reviews.authorAttribution.uri',
          'reviews.authorAttribution.photoUri',
        ].join(','),
      },
    });

    if (!r.ok) {
      const errText = await r.text().catch(() => '');
      return res
        .status(r.status || 502)
        .json({ error: 'Google API error', details: errText });
    }

    const place = await r.json();

    const reviews = Array.isArray(place.reviews)
      ? place.reviews.map((rv) => ({
          author_name: rv?.authorAttribution?.displayName || 'Google User',
          profile_photo_url: rv?.authorAttribution?.photoUri || undefined,
          rating: typeof rv?.rating === 'number' ? rv.rating : 0,
          text: rv?.text?.text || '',
          relative_time_description: rv?.relativePublishTimeDescription || undefined,
          author_url: rv?.authorAttribution?.uri || undefined,
          // time: rv?.publishTime,
          // language: rv?.text?.languageCode,
        }))
      : [];

    const payload = {
      rating: typeof place?.rating === 'number' ? place.rating : null,
      user_ratings_total:
        typeof place?.userRatingCount === 'number' ? place.userRatingCount : null,
      name: place?.displayName?.text || null,
      address: place?.formattedAddress || null,
      maps_url: `https://www.google.com/maps/place/?q=place_id:${encodeURIComponent(PLACE_ID)}`,
      reviews,
    };

    cache = { ts: now, data: payload };
    return res.status(200).json(payload);
  } catch (e) {
    return res
      .status(500)
      .json({ error: 'Server error', details: String(e && e.message ? e.message : e) });
  }
}
