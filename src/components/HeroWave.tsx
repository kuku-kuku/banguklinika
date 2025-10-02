// src/components/HeroWave.tsx
import React, { useId, useEffect, useState } from "react";

type Props = { className?: string };

export default function HeroWave({ className = "" }: Props) {
  const uid = useId().replace(/[:]/g, "");
  const animName = `pathAnim_${uid}`;
  const pathClass = `wavePath_${uid}`;

  // --- Safari/iOS detection ---
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent;
      // WebKit Safari (not Chrome/Edge/Opera), including iOS Safari
      const isWebKit = /AppleWebKit/i.test(ua);
      const isChrome = /(Chrome|CriOS|CrMo)/i.test(ua);
      const isEdge = /Edg/i.test(ua);
      const isOpera = /OPR/i.test(ua);
      const isMobileSafari = /iP(hone|ad|od).+Safari/i.test(ua);
      const isDesktopSafari = /Safari/i.test(ua) && !isChrome && !isEdge && !isOpera;

      setIsSafari(isWebKit && (isMobileSafari || isDesktopSafari));
    }
  }, []);

  // Wave path keyframes
  const paths = [
    "M 0,250 L 0,100 C 75,70 150,40 250,60 C 350,80 475,155 590,170 C 705,185 810,140 913,130 C 1016,120 1117,145 1205,150 C 1293,155 1366,140 1440,125 L 1440,250 L 0,250 Z",
    "M 0,250 L 0,100 C 100,120 197,140 286,150 C 375,160 455,160 544,145 C 633,130 730,100 827,98 C 924,96 1020,122 1122,130 C 1224,138 1332,125 1440,115 L 1440,250 L 0,250 Z",
    "M 0,250 L 0,100 C 71,118 142,136 239,123 C 336,110 458,66 556,59 C 654,52 727,82 814,95 C 901,108 1003,95 1110,92 C 1217,89 1328,95 1440,100 L 1440,250 L 0,250 Z",
    "M 0,250 L 0,100 C 104,90 207,80 310,72 C 413,64 514,61 606,75 C 698,89 781,119 860,112 C 939,105 1016,63 1112,55 C 1208,47 1324,73 1440,100 L 1440,250 L 0,250 Z",
  ];

  return (
    <div
      aria-hidden
      className={`pointer-events-none select-none relative z-0 overflow-visible ${className}`}
      style={{ lineHeight: 0 }}
    >
      {/* Full-bleed wrapper */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-visible">
        <svg
          className="block w-screen h-full"
          viewBox="0 0 1440 250"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          overflow="visible"
        >
          <style>{`
            .${pathClass}{ animation: ${animName} 10s linear infinite; }
            @keyframes ${animName}{
              0%{   d: path("${paths[0]}"); }
              25%{  d: path("${paths[1]}"); }
              50%{  d: path("${paths[2]}"); }
              75%{  d: path("${paths[3]}"); }
              100%{ d: path("${paths[0]}"); }
            }
          `}</style>

          <path
            d={paths[0]}
            fill="#33ceda"
            fillOpacity="0.6"
            className={!isSafari ? pathClass : ""}
            transform="rotate(-180 720 125)"
          >
            {/* Safari/iOS fallback: SMIL animation with begin attribute */}
            {isSafari && (
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                calcMode="linear"
                begin="0s"
                keyTimes="0;0.25;0.5;0.75;1"
                values={`${paths[0]};${paths[1]};${paths[2]};${paths[3]};${paths[0]}`}
              />
            )}
          </path>
        </svg>
      </div>
    </div>
  );
}