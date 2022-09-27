import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    port: 9090,
    open: true,
    https: true
  },
  plugins: [
    react({
      exclude: './node_modules',
      babel: {
        babelrc: true,
      },
    }),
  ],
});
