/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 50:"#eff8ff",100:"#dff1ff",200:"#b9e2ff",300:"#86cdff",400:"#4cb1ff",500:"#1894f8",600:"#0d76d6",700:"#0a5db0",800:"#0b4d90",900:"#0c4077" }
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
