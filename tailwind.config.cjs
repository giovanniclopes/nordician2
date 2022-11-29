/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**.tsx"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "800px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "620px" },
        // => @media (max-width: 639px) { ... }
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
