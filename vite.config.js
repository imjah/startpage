import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  base: '/startpage/',
	test: {
		environment: 'jsdom'
	},
	resolve: process.env.VITEST
		? {
				conditions: ['browser']
			}
		: undefined
});
