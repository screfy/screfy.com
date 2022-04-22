/* eslint @typescript-eslint/no-var-requires: off */
const {
	fontFamily,
	spacing,
	transitionProperty,
	transitionDuration
} = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				gray: {
					50: '#FBFBFB',
					100: '#EAEAEA',
					200: '#D4D4D4',
					300: '#84888F',
					400: '#55575B',
					500: '#3A3A3C',
					600: '#181B20',
					700: '#0F1214',
					800: '#0C0E10'
				},
				orange: '#FFAC33',
				spotify: '#1ED760'
			},
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans]
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.gray.400'),
						strong: { color: theme('colors.gray.500') },
						code: { color: theme('colors.gray.500') },
						'h2,h3,h4': {
							color: theme('colors.gray.700'),
							marginBottom: spacing[3],
							scrollMarginTop: spacing[8]
						},
						a: {
							color: theme('colors.gray.500'),
							'&:hover': { color: `${theme('colors.gray.800')} !important` },
							'code:hover': { color: `${theme('colors.gray.800')} !important` },
							textDecoration: 'none',
							transitionProperty: transitionProperty['colors'],
							transitionDuration: transitionDuration['DEFAULT']
						},
						hr: {
							borderColor: theme('colors.gray.200'),
							marginTop: spacing[6],
							marginBottom: spacing[6]
						}
					}
				},
				dark: {
					css: {
						color: theme('colors.gray.300'),
						strong: { color: theme('colors.gray.100') },
						code: { color: theme('colors.gray.100') },
						'h2,h3,h4': {
							color: theme('colors.gray.100')
						},
						a: {
							color: theme('colors.gray.100'),
							'&:hover': { color: `${theme('colors.white')} !important` },
							'code:hover': { color: `${theme('colors.white')} !important` }
						},
						hr: {
							borderColor: theme('colors.gray.600')
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
