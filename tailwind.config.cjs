/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        bgText: "url(/src/assets/mythology/realms/bg-musphelheim.webp)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'rune-pattern': "url('/src/assets/mythology/rune-pattern.svg')",
        'rune-border': "url('/src/assets/mythology/rune-border.svg')",
      },
      fontFamily: {
        mjolnir: ["Mjolnir", "sans-serif"],
        nordica: "Nordica, Arial, sans-serif",
        poppins: ["Poppins", "sans-serif"],
        norse: ['linotype-nordica', 'serif'],
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
        norse: {
          // Yggdrasil greens
          leaf: "#2D5A27",
          forest: "#1A3A1A",
          // Bifrost colors
          rainbow: {
            red: "#FF6B6B",
            amber: "#FFC06B",
            purple: "#9F7AEA",
          },
          // Asgard golds
          gold: "#FFD700",
          bronze: "#CD7F32",
          // Niflheim ice
          ice: "#A5F3FC",
          frost: "#0891B2",
          // Muspelheim fire
          fire: "#DC2626",
          ember: "#991B1B",
        },
      },
      keyframes: {
        runeGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(220, 38, 38, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 15px rgba(220, 38, 38, 0.8))' },
        },
        floatRune: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'rune-glow': 'runeGlow 4s infinite',
        'float-rune': 'floatRune 3s infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray[300]'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-lead': theme('colors.gray[300]'),
            '--tw-prose-links': theme('colors.red[400]'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.gray[400]'),
            '--tw-prose-bullets': theme('colors.gray[600]'),
            '--tw-prose-hr': theme('colors.gray[700]'),
            '--tw-prose-quotes': theme('colors.gray[300]'),
            '--tw-prose-quote-borders': theme('colors.red[500]'),
            '--tw-prose-captions': theme('colors.gray[400]'),
            '--tw-prose-code': theme('colors.red[300]'),
            '--tw-prose-pre-code': theme('colors.gray[300]'),
            '--tw-prose-pre-bg': theme('colors.gray[800]'),
            '--tw-prose-invert-th-borders': theme('colors.gray[700]'),
            '--tw-prose-invert-td-borders': theme('colors.gray[800]'),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
