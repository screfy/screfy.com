const radixColors = require('@radix-ui/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

const colors = Object.fromEntries(
	Object.keys(radixColors)
		.filter((color) => color.includes('Dark') && !color.includes('A'))
		.map((color) => {
			const colorName = color.replace('Dark', '');

			const scales = Object.keys(radixColors[color]).map((scale) => {
				const [step] = scale.match(/\d+/);

				return [step, radixColors[color][scale]];
			});

			return [[colorName], Object.fromEntries(scales)];
		})
);

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}', './contentlayer.config.ts'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-karla)', ...fontFamily.sans],
			},
			animation: {
				'tooltip-open-top': 'tooltip-open-top 200ms ease-in-out forwards',
				'tooltip-close-top': 'tooltip-close-top 200ms ease-in-out forwards',
				'tooltip-open-bottom': 'tooltip-open-bottom 200ms ease-in-out forwards',
				'tooltip-close-bottom':
					'tooltip-close-bottom 200ms ease-in-out forwards',
			},
		},
		colors: {
			...colors,
			transparent: {
				DEFAULT: 'transparent',
			},
			spotify: {
				DEFAULT: '#1ED760',
			},
		},
	},
	plugins: [require('tailwindcss-radix')()],
};
