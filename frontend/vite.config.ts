import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // Esto expondrá el servidor en todas las interfaces de red
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      Axios: path.resolve(__dirname, './src/lib/axios.ts')
    }
  }
});
