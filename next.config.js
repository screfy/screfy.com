/* eslint @typescript-eslint/no-var-requires: off */
const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
	swcMinify: true,
	reactStrictMode: true,
	images: {
		domains: ['s2.googleusercontent.com', 'i.scdn.co']
	},
	experimental: {
		newNextLinkBehavior: true
	}
});
