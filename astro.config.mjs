import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import solidJs from '@astrojs/solid-js';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	site: 'https://moon.glitcher.dev',
	experimental: {
		assets: true
	},
	integrations: [tailwind(), sitemap(), robotsTxt(), solidJs()],
	output: 'server',
	adapter: node({
		mode: 'standalone'
	})
});
