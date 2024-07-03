import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  build: {
    outDir: 'dist',  // This ensures the output directory is 'dist'
  },
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
