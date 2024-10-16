import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy toutes les requêtes API commençant par /api vers le backend Node.js sur le port 3001
      '/api': 
         'http://localhost:3001'
    }
  }
});






