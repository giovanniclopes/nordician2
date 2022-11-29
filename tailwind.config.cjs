/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url(/src/assets/background.png)",
      },
    },
  },
  plugins: [],
};
