/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**.tsx"],
  theme: {
    extend: {
      screens: {
        mbl: { max: "630px" }, // mbl == mobile
        // => @media (max-width: 630px) { ... }
      },
      backgroundImage: {
        main: "url(/src/assets/background.webp)",
        gradient: "linear-gradient(-150deg, #131313, #000000, #131313)",
      },
      fontFamily: {
        mjolnir: "Mjolnir, Arial, sans-serif",
        nordica: "Nordica, Arial, sans-serif",
      },
      colors: {
        gray: {
          400: "#373c3b",
          500: "#131313",
        },
        red: {
          400: "#ae3335",
          500: "#B70000",
        },
      },
    },
  },
  plugins: [],
};
