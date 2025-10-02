// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const LANGUAGE = process.env.REV_LANGUAGE || "lt"; // v1: languageCode

// 15 min cache
let cache = { data: null, ts: 0 };
const TTL = 15 * 60 * 1000;

app.get("/api/reviews", async (_req, res) => {
  try {
    if (!API_KEY || !PLACE_ID) {
      return res
        .status(500)
        .json({ error: "Missing GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID" });
    }

    const now = Date.now();
    if (cache.data && now - cache.ts < TTL) {
      return res.json(cache.data);
    }

    // v1 endpoint be reviewsSort
    const url =
      `https://places.googleapis.com/v1/places/${encodeURIComponent(PLACE_ID)}` +
      `?languageCode=${encodeURIComponent(LANGUAGE)}`;

    const r = await fetch(url, {
      method: "GET",
      headers: {
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": [
          "displayName",
          "formattedAddress",
          "rating",
          "userRatingCount",
          "reviews.rating",
          "reviews.text", // visą objektą (text.text + text.languageCode)
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
      console.error("Google Places v1 error:", r.status, errText);
      return res
        .status(r.status || 502)
        .json({ error: "Google API error", details: errText });
    }

    const place = await r.json();

    // Transformas į tavo komponento laukus
    const reviews = Array.isArray(place.reviews)
      ? place.reviews.map((rv) => ({
          author_name: rv.authorAttribution?.displayName || "Google User",
          profile_photo_url: rv.authorAttribution?.photoUri || undefined,
          rating: typeof rv.rating === "number" ? rv.rating : 0,
          text: rv.text?.text || "",
          relative_time_description:
            rv.relativePublishTimeDescription || undefined,
          author_url: rv.authorAttribution?.uri || undefined,
          // time: rv.publishTime, // ISO – jei prireiks
          // language: rv.text?.languageCode, // jei prireiks
        }))
      : [];

    const payload = {
      rating: typeof place.rating === "number" ? place.rating : null,
      user_ratings_total:
        typeof place.userRatingCount === "number" ? place.userRatingCount : null,
      name: place.displayName?.text || null,
      address: place.formattedAddress || null,
      reviews,
      // Nuoroda į pilną Google atsiliepimų sąrašą
      maps_url: `https://www.google.com/maps/search/?api=1&query_place_id=${encodeURIComponent(
        PLACE_ID
      )}`,
    };

    cache = { data: payload, ts: now };
    return res.json(payload);
  } catch (e) {
    console.error("Server error:", e);
    return res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Reviews proxy running http://localhost:${PORT}`);
});
