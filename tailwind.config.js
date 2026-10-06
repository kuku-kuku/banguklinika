/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Tomato Grotesk"', '"Tomato Fallback"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        /* ---- Redesign tokens (see src/styles/tokens.css for AA ratios) ----
           tide is FILL/GRAPHICS ONLY — use tide-text for turquoise text. */
        paper: "var(--paper)",
        shell: "var(--shell)",
        ink: "var(--ink)",
        tide: {
          DEFAULT: "var(--tide)",
          deep: "var(--tide-deep)",
          text: "var(--tide-text)",
          bright: "var(--tide-bright)",
        },
        hairline: {
          DEFAULT: "var(--hairline)",
          strong: "var(--hairline-strong)",
        },

        /* ---- Legacy palette — kept so the ~90 untouched service pages
           keep rendering. Values realigned to the new turquoise so the
           whole site shifts hue together instead of clashing. ---------- */
        primary: {
          50:  "#effbfa",
          100: "#d7f5f3",
          200: "#aeeae7",
          300: "#76d9d4",
          400: "#3cc4be",
          500: "#0fb5ae",  // --tide
          600: "#0b8a85",  // --tide-deep
          700: "#097873",  // --tide-text (AA-safe for text)
          800: "#086b67",
          900: "#07534f"
        },
        darkblue: {
          500: "#2b3236",
          600: "#1f2427",  // --ink
          700: "#171b1d"
        }
      },
      fontSize: {
        display: ["var(--fs-display)", { lineHeight: "var(--lh-display)", letterSpacing: "var(--tr-display)" }],
        h1:      ["var(--fs-h1)",      { lineHeight: "var(--lh-head)",    letterSpacing: "var(--tr-head)" }],
        h2:      ["var(--fs-h2)",      { lineHeight: "var(--lh-head)",    letterSpacing: "var(--tr-head)" }],
        h3:      ["var(--fs-h3)",      { lineHeight: "1.25",              letterSpacing: "var(--tr-head)" }],
        lead:    ["var(--fs-lead)",    { lineHeight: "1.5" }],
        body:    ["var(--fs-body)",    { lineHeight: "var(--lh-body)" }],
        small:   ["var(--fs-small)",   { lineHeight: "1.55" }],
        micro:   ["var(--fs-micro)",   { lineHeight: "1.5" }],
      },
      spacing: {
        section: "var(--section-y)",
        "section-tight": "var(--section-y-tight)",
        gutter: "var(--gutter)",
        nav: "var(--nav-h)",
      },
      maxWidth: {
        measure: "var(--measure)",
      },
      borderRadius: {
        image: "var(--r-image)",
        card: "var(--r-card)",
        ctl: "var(--r-ctl)",
        pill: "var(--r-pill)",
        /* legacy */
        xl: "14px",
        "2xl": "20px"
      },
      boxShadow: {
        lift: "var(--shadow-lift)",
        deep: "var(--shadow-deep)",
        /* legacy */
        soft: "0 10px 30px -12px rgba(31,36,39,.15)"
      },
      transitionDuration: {
        fast: "var(--t-fast)",
        mid: "var(--t-mid)",
        slow: "var(--t-slow)",
      },
      transitionTimingFunction: {
        "ease-out-soft": "var(--ease-out)",
        "ease-inout-soft": "var(--ease-inout)",
      },
    }
  },
  plugins: [],
}
