

// https://vitejs.dev/config/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Path to your postcss.config.js
  },
  server: {
    host: true,
  },
});


