import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite'; // Añadido loadEnv
import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react'; // <--- ¡Esta línea es CRÍTICA y faltaba!

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

export default defineConfig(({ mode }) => { // Añadido { mode } para loadEnv
  const env = loadEnv(mode, '.', ''); // Añadido loadEnv para variables de entorno

  return {
    plugins: [
      react() // <--- ¡Esto es CRÍTICO! Habilita el soporte para React y JSX/TSX
    ],
    
    // Base URL para el despliegue de tu aplicación.
    // '' (cadena vacía) significa rutas relativas a la raíz del host,
    // ideal para Vercel y URLs limpias.
    base: '', // Es una buena práctica explicitarlo si no lo tienes

    define: { // Si usas variables de entorno como GEMINI_API_KEY
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': resolve(__dirname, '.'),
      },
    },

    build: {
      outDir: 'dist',
      assetsDir: 'assets', // Asegura que los assets se agrupan bien
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          prices: resolve(__dirname, 'prices.html'),
          client: resolve(__dirname, 'client.html'),
          register: resolve(__dirname, 'register.html'),
          imprint: resolve(__dirname, 'imprint.html'),
          privacy: resolve(__dirname, 'privacy.html'),
          contact: resolve(__dirname, 'contact.html'),
          inviajes: resolve(__dirname, 'inviajes-de.html'), // Asegúrate de que este HTML existe
        }
      }
    },

    server: { // Opciones para el servidor de desarrollo
      fs: {
        allow: ['.'] // Permite al servidor de desarrollo acceder a la raíz
      }
    }
  };
});