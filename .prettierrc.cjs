/** @type {import('prettier').Options} */
module.exports = {
	singleQuote: true,
	// I don't like commas everywhere, so... yes.
	// https://prettier.io/blog/2023/07/05/3.0.0.html#javascript
	trailingComma: 'es5',
	tailwindStylesheet: './src/styles/globals.css',
	importOrder: ['<THIRD_PARTY_MODULES>', '', '^~/(.*)$', '', '^[.]'],
	importOrderTypeScriptVersion: '5.6.3',
	plugins: [
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss',
	],
};
