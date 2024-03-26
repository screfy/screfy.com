import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

import * as radixColors from '@radix-ui/colors';

const colors = Object.fromEntries(
	Object.keys(radixColors)
		.filter(
			(color) =>
				color.endsWith('Dark') &&
				!color.endsWith('P3') &&
				!color.endsWith('P3A')
		)
		.map((color) => {
			const colorName = color.replace('Dark', '');

			const scales = Object.keys(radixColors[color]).map((scale) => {
				const result = scale.match(/\d+/);

				if (!result?.length || !result[0]) {
					return [];
				}

				return [result[0], radixColors[color][scale]];
			});

			return [[colorName], Object.fromEntries(scales)];
		})
);

export default {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-karla)', ...fontFamily.sans],
			},
		},
		colors: {
			...colors,
			inherit: 'inherit',
			current: 'currentColor',
			transparent: 'transparent',
			black: '#000000',
			white: '#FFFFFF',
			spotify: '#1ED760',
		},
	},
	plugins: [],
} satisfies Config;
