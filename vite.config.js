import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import config from './src/config'

export default defineConfig({
  plugins: [svelte()],
  base: config.base,
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
	test: {
		environment: 'jsdom'
	},
	resolve: process.env.VITEST
		? {
				conditions: ['browser']
			}
		: undefined,
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
	}
});
