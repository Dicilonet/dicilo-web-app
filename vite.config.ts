import { resolve } from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        prices: resolve(__dirname, 'prices.html'),
        client: resolve(__dirname, 'client.html'),
        register: resolve(__dirname, 'register.html'),
        imprint: resolve(__dirname, 'imprint.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        contact: resolve(__dirname, 'contact.html'),
        inviajes: resolve(__dirname, 'inviajes-de.html'),
      }
    }
  }
});