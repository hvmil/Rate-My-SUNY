/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dropShadow: {
          "test": [
            "0 0 7px #fff",
            "0 0 10px #fff",
            "0 0 21px #fff",
            "0 0 42px #0fa",
            "0 0 82px #0fa",
            "0 0 92px #0fa",
            "0 0 102px #0fa",
            "0 0 151px #0fa",
          ],
        },
        stardust: "#EAE7DC",
        opalFlame: {
          200: "#EA6B61",
          400: "#E85A4F",
        },
        pedigrey: {
          0: "#BBBBB9",
          100: "#B0AFAD",
          200: "#A5A4A1",
          300: "#999896",
          400: "#8E8D8A",
          500: "#807F7C",
          600: "#72716E",
          700: "#646360",
          800: "#555553",
          900: "#393837",
        },
        merguez: "#5D001E",
        swandive: "#E3E2DF",
        sakura: "#E3AFBC",
        wine: "#9A1750",
        lotus: "#EE4C7C",
      },
      fontFamily: {
        dealerplate: ["Dealerplate W00 Massachusetts", "sans-serif"],
        monsterrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
