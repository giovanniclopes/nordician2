/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**.tsx"],
  theme: {
    extend: {
      screens: {
        "mbl": { max: "630px" },
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
          normal: "#131313",
        },
        red: {
          main: "#B70000",
        },
      },
    },
  },
  plugins: [],
};
