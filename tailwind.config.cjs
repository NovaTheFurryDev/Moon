/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['InterVariable', 'Inter']
			},
			colors: {
				moon: {
					base: '#232136',
					surface: '#2a273f',
					overlay: '#393552',
					muted: '#6e6a86',
					subtle: '#908caa',
					text: '#e0def4',
					love: '#eb6f92',
					gold: '#f6c177',
					rose: '#ea9a97',
					pine: '#3e8fb0',
					foam: '#9ccfd8',
					iris: '#c4a7e7',
					highlightLow: '#2a283e',
					highlightMed: '#44415a',
					highlightHigh: '#56526e'
				},
				dawn: {
					base: '#faf4ed',
					surface: '#fffaf3',
					overlay: '#f2e9e1',
					muted: '#9893a5',
					subtle: '#797593',
					text: '#575279',
					love: '#b4637a',
					gold: '#ea9d34',
					rose: '#d7827e',
					pine: '#286983',
					foam: '#56949f',
					iris: '#907aa9',
					highlightLow: '#f4ede8',
					highlightMed: '#dfdad9',
					highlightHigh: '#cecacd'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
