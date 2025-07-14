import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    federation({
      name: 'core',
      filename: 'remoteEntry.js',
      exposes: {
        './Core': './src/index.ts',
      },
      shared: ['react', '@tanstack/react-query'],
    }),
  ],
});
