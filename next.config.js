/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	reactStrictMode: true,
	env: {
		APP_SERVER_URL: process.env.APP_SERVER_URL
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:4000/api/:path*`
			},
			{
				source: '/uploads/:path*',
				destination: `http://localhost:4000/uploads/:path*`
			}
		];
	}
};

module.exports = nextConfig;
