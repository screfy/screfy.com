/* eslint @typescript-eslint/no-var-requires: off */
const { withContentlayer } = require('next-contentlayer');

const securityHeaders = [
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on'
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=31536000; includeSubDomains; preload'
	},
	{
		key: 'X-Frame-Options',
		value: 'DENY'
	},
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=()'
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff'
	},
	{
		key: 'Referrer-Policy',
		value: 'origin-when-cross-origin'
	}
];

module.exports = withContentlayer({
	swcMinify: true,
	reactStrictMode: true,
	images: {
		domains: ['s2.googleusercontent.com', 'i.scdn.co']
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders
			}
		];
	},
	experimental: {
		legacyBrowsers: false,
		browsersListForSwc: true,
		newNextLinkBehavior: true
	}
});
