// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['./**/*.{ts,tsx}'],
  theme: {
    // Remove all unnecessary Tailwind colors:
    colors: {
      white: '#FFFFFF',
      gray: {
        50: '#EAEAEA',
        100: '#696C71',
        200: '#181B20',
        300: '#0F1214',
        400: '#0C0E10',
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
