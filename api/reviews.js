// api/reviews.js

const TTL = 15 * 60 * 1000; // 15 min in-memory cache
let cache = { ts: 0, data: null };

function normalizePlaceId(placeId) {
  if (!placeId) return "";
  const s = String(placeId).trim();
  return s.startsWith("places/") ? s.slice("places/".length) : s;
}

export default async function handler(req, res) {
  try {
    const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
    const PLACE_ID_RAW = process.env.GOOGLE_PLACE_ID;
    const LANGUAGE = process.env.REV_LANGUAGE || "lt";

    if (!API_KEY || !PLACE_ID_RAW) {
      return res
        .status(500)
        .json({ error: "Missing GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID" });
    }

    res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=86400");

    const now = Date.now();
    if (cache.data && now - cache.ts < TTL) {
      return res.status(200).json(cache.data);
    }

    const PLACE_ID = normalizePlaceId(PLACE_ID_RAW);

    // Places API v1 "name" format: places/{placeId}
    const placeV1Name = `places/${PLACE_ID}`;

    const url = `https://places.googleapis.com/v1/${placeV1Name}?languageCode=${encodeURIComponent(
      LANGUAGE
    )}`;

    const r = await fetch(url, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": [
          "id",
          "displayName",
          "formattedAddress",
          "rating",
          "userRatingCount",
          "googleMapsUri",
          "googleMapsLinks",
          "reviews.rating",
          "reviews.text",
          "reviews.relativePublishTimeDescription",
          "reviews.publishTime",
          "reviews.authorAttribution.displayName",
          "reviews.authorAttribution.uri",
          "reviews.authorAttribution.photoUri",
        ].join(","),
      },
    });

    if (!r.ok) {
      const errText = await r.text().catch(() => "");
      return res
        .status(r.status || 502)
        .json({ error: "Google API error", details: errText });
    }

    const place = await r.json();

    const reviews = Array.isArray(place.reviews)
      ? place.reviews
          .map((rv) => ({
            author_name: rv?.authorAttribution?.displayName || "Google User",
            profile_photo_url: rv?.authorAttribution?.photoUri || undefined,
            rating: typeof rv?.rating === "number" ? rv.rating : 0,
            text: rv?.text?.text || "",
            relative_time_description:
              rv?.relativePublishTimeDescription || undefined,
            author_url: rv?.authorAttribution?.uri || undefined,
          }))
          .filter((rv) => rv.rating >= 4)
      : [];

    // Fallback URL'ai pagal place_id (ne search)
    const fallback_maps_url = `https://www.google.com/maps/place/?q=place_id:${encodeURIComponent(
      PLACE_ID
    )}`;
    const fallback_reviews_url = `https://search.google.com/local/reviews?placeid=${encodeURIComponent(
      PLACE_ID
    )}`;

    const maps_url =
      place?.googleMapsLinks?.placeUri ||
      place?.googleMapsUri ||
      fallback_maps_url;

    const reviews_url =
      place?.googleMapsLinks?.reviewsUri ||
      fallback_reviews_url;

    const payload = {
      rating: typeof place?.rating === "number" ? place.rating : null,
      user_ratings_total:
        typeof place?.userRatingCount === "number" ? place.userRatingCount : null,
      name: place?.displayName?.text || null,
      address: place?.formattedAddress || null,

      maps_url,
      reviews_url, // ✅ svarbiausia FE

      // optional (gali būti naudinga FE fallbackui)
      place_id: PLACE_ID,

      reviews,

      // ✅ debug (laikinai paliekam)
      debug: {
        place_id: PLACE_ID,
        google_place_id_raw: PLACE_ID_RAW,
        google_id_field: place?.id || null,
        google_maps_uri: place?.googleMapsUri || null,
        google_place_uri: place?.googleMapsLinks?.placeUri || null,
        google_reviews_uri: place?.googleMapsLinks?.reviewsUri || null,
        fallback_maps_url,
        fallback_reviews_url,
      },
    };

    cache = { ts: now, data: payload };
    return res.status(200).json(payload);
  } catch (e) {
    return res.status(500).json({
      error: "Server error",
      details: String(e && e.message ? e.message : e),
    });
  }
}