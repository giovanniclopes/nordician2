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
        blueGradient: "linear-gradient(-140deg, #7D8E85, #38454A, #212C30)",
      },
      fontFamily: {
        mjolnir: "Mjolnir, Arial, sans-serif",
        nordica: "Nordica, Arial, sans-serif",
        poppins: "Poppins, sans-serif",
      },
      colors: {
        gray: {
          0.5: "rgba(16, 16, 16, 0.7)",
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
        blue: {
          300: "#7D8E85",
          500: "#38454A",
          700: "#212C30",
        },
        maroon: {
          100: "#DFC8AC",
        },
      },
    },
  },
  plugins: [],
};
