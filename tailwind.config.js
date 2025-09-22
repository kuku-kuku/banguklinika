/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Turkio spalva (akcentams, kortelėms)
        primary: {
          50:  "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",  // pagrindinė turkio
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63"
        },
        // Tamsiai mėlyna (footer, antraštėms)
        darkblue: {
          500: "#10394F",
          600: "#0C2D3E",
          700: "#08212F"
        }
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(12,64,119,.15)"
      },
      borderRadius: {
        xl: "14px",
        "2xl": "20px"
      }
    }
  },
  plugins: [],
}
