import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    host: '0.0.0.0',
    port: 9090,
    open: true,
  },
});
