/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./components/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
        ssm2: { max: "460px" },
        ssm: { max: "375px" },
        sm2: { min: "640px", max: "767px" },
        md2: { min: "768px", max: "1023px" },
        md3: { min: "768px" },
        mmd2: { min: "900px", max: "1265px" },
        lg2: { min: "1024px", max: "1279px" },
        xl2: { min: "1280px", max: "1535px" },
        "1xl2": { min: "1265px" },
        "2xl2": { min: "1536px" },
      },

      colors: {
        mainDark: "#020617",
        mainDarkLvl2: "#0F172A",
        mainLight: "#1E293B",
        mainH1: "#94A3B8",
        mainFontColor: "#F1F5F9",
        succesColor: "#0D9488",
        GET: "#2DD4BF",
        POST: "#FACC15",
        PUT: "#FB923C",
        PATCH: "#A78BFA",
        DELETE: "#F87171",
      },

      fontFamily: {
        bigFont: "Bebas Neue, sans-serif",
        montserrat: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
};
