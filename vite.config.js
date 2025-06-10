import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/customers': {
        target: 'http://203.194.113.92:8000',
        changeOrigin: true,
        secure: false, // jika menggunakan HTTP
      },
      '/customer': {
        target: 'http://203.194.113.92:8000',
        changeOrigin: true,
        secure: false, // jika menggunakan HTTP
      },
      '/login': {
        target: 'http://203.194.113.92:8000',
        changeOrigin: true,
        secure: false, // jika menggunakan HTTP
      },
    },
  },
});
