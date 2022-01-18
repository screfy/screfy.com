// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['./**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    // Remove all unnecessary Tailwind colors:
    colors: {
      white: '#FFFFFF',
      gray: {
        50: '#FBFBFB',
        100: '#EAEAEA',
        200: '#D4D4D4',
        300: '#696C71',
        400: '#55575B',
        500: '#3A3A3C',
        600: '#181B20',
        700: '#0F1214',
        800: '#0C0E10',
      },
      orange: '#FFAC33',
      green: '#1ED760',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
