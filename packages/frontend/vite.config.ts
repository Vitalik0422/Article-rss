import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
  },
  optimizeDeps: {
    include: ['@reduxjs/toolkit', 'react-redux'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
