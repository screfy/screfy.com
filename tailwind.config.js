// eslint-disable-next-line
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['./**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EEEEEE',
        secondary: '#101010',
        info: '#0076FF',
        danger: '#FFAC33',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
