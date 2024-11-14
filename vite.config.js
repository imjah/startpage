import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'jsdom'
	},
	resolve: process.env.VITEST
		? {
				conditions: ['browser']
			}
		: undefined
});
