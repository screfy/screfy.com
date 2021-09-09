// eslint-disable-next-line
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2BBC8A',
          light: '#EEEEEE',
        },
        secondary: {
          DEFAULT: '#1D1F21',
          light: '#555555',
          dark: '#252525',
        },
      },
      fontFamily: {
        sans: ['Ubuntu Mono', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
