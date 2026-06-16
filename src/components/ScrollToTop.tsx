// src/components/ScrollToTop.tsx
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "../hooks/useLenis";

export default function ScrollToTop() {
  const { key, hash } = useLocation();

  // scrollRestoration tik kartą
  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // VISAS scroll čia, layout'e (anksti)
  useLayoutEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));

      // 2 frame'ai – kad tikrai spėtų susimontuoti turinys
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ block: "start", behavior: "auto" });
        });
      });

      return;
    }

    // į viršų — per Lenis jei aktyvus, kitaip tiesiogiai
    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    // priverstinai "pranešam" scroll listeneriams (TOC)
    window.dispatchEvent(new Event("scroll"));
  }, [key, hash]);

  return null;
}