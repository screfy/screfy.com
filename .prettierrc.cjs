/** @type {import('prettier').Options} */
module.exports = {
	singleQuote: true,
	// I don't like commas everywhere, so... yes.
	// https://prettier.io/blog/2023/07/05/3.0.0.html#javascript
	trailingComma: 'es5',
	plugins: ['prettier-plugin-tailwindcss'],
};
