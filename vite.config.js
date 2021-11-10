import { defineConfig } from 'vite';

// config react
import react from '@vitejs/plugin-react';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      exclude: './node_modules',
      babel: {
        babelrc: true,
      },
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    port: 9090,
    open: true,
  },
});
