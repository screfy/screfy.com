/* eslint @typescript-eslint/no-var-requires: off */
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
				'tooltip-open': 'tooltip-open 200ms ease-in-out forwards',
				'tooltip-close': 'tooltip-close 200ms ease-in-out forwards',
			},
			keyframes: {
				'tooltip-open': {
					from: { transform: 'translateY(-4px) scale(0.8)', opacity: 0 },
					to: { transform: 'translateY(0) scale(1)', opacity: 1 },
				},
				'tooltip-close': {
					from: { transform: 'translateY(0) scale(1)', opacity: 1 },
					to: { transform: 'translateY(-4px) scale(0.8)', opacity: 0 },
				},
			},
		},
		colors: {
			...colors,
			spotify: {
				DEFAULT: '#1ED760',
			},
		},
	},
	plugins: [require('tailwindcss-radix')()],
};
