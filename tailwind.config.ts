import type { Config } from 'tailwindcss';
import { fontFamily, transitionDuration } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
	content: ['./src/**/*.{ts,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-geist-sans)', ...fontFamily.sans],
			},
			transitionDuration: {
				DEFAULT: transitionDuration[200],
			},
			keyframes: {
				equalizer: {
					'0%': { transform: 'scaleY(1)' },
					'25%': { transform: 'scaleY(0.3)' },
					'50%': { transform: 'scaleY(1.2)' },
					'75%': { transform: 'scaleY(0.6)' },
					'100%': { transform: 'scaleY(1)' },
				},
			},
		},
	},
	plugins: [
		plugin(({ addBase, addUtilities }) => {
			addBase({
				'*': {
					// Prevent grid and flex items from spilling out of their container:
					'min-width': '0px',
				},
				'h1, h2, h3, h4, h5, h6': {
					// Balance headings across multiple lines into an even block:
					'text-wrap': 'balance',
				},
				p: {
					// Prevent single words on last line:
					'text-wrap': 'pretty',
				},
			});

			addUtilities({
				'.optimize-legibility': {
					'text-rendering': 'optimizeLegibility',
				},
			});
		}),
	],
} satisfies Config;
