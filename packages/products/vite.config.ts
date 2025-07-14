import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/index.tsx',
      },
      shared: ['react', '@tanstack/react-query'],
    }),
  ],
  server: {
    port: 5001,
  },
});
