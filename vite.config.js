// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    exclude: [
      '**/e2e/**/*.{test,spec}.{js,jsx,ts,tsx}',
      '**/node_modules/**',
      '**/dist/**',
      '**/scripts/**/*.test.js',
    ],
  },
});