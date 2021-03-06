import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { Proxy } from './src/configs/proxy';
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  base: '/',
  server: {
    proxy: Proxy,
  },
  resolve: {
    alias: {
      '~': join(__dirname, 'src'),
    },
  },
});
