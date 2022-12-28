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
        contact: "url(/src/assets/bg-contact.webp)",
        effect: "url(/src/assets/bg-effect.png)",
        gradient: "linear-gradient(-150deg, #131313, #000000, #131313)",
      },
      fontFamily: {
        mjolnir: "Mjolnir, Arial, sans-serif",
        nordica: "Nordica, Arial, sans-serif",
        poppins: "Poppins, sans-serif",
      },
      colors: {
        gray: {
          100: "#FFFCF8",
          300: "#c3c1c3",
          400: "#373c3b",
          450: "#282828",
          500: "#202020",
          600: "#131313",
        },
        red: {
          300: "#C33434",
          400: "#D42121 ",
          500: "#AA1A1A",
          600: "#6A1111",
        },
        maroon: {
          100: "#DFC8AC",
        },
      },
    },
  },
  plugins: [],
};
