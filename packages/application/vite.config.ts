import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'application',
      remotes: {
        products: 'http://localhost:5001/assets/remoteEntry.js',
        core: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react', '@tanstack/react-query'],
    }),
  ],
  server: {
    port: 5000,
  },
});
