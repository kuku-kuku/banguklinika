// src/components/ScrollToTop.tsx
import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { key, hash } = useLocation();

  // Išjungiame naršyklės automatinį scroll atstatymą (kitaip konfliktuoja)
  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Jei naviguojame į #ankorą — scrollinam į elementą
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // vienas frame, kad DOM jau būtų
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ block: "start", behavior: "instant" as ScrollBehavior });
        }
      });
      return;
    }

    // Įprastas route change: absoliučiai į viršų (be smooth, kad nelagintų)
    requestAnimationFrame(() => {
      // trys būdai — padengia visus atvejus/OS
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, [key]); // reaguojam į KIEKVIENĄ RR navigaciją

  return null;
}
