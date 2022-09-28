/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/how-to-ask-good-questions/',
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['src/setupTests.ts'],
		coverage: {
			provider: 'istanbul',
			reporter: ['lcov', 'text'],
		},
	},
});
