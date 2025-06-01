import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    copyPublicDir: true
  },
  server: {
    // Ensure static files are served properly in development
    middlewareMode: false,
  },
  // Handle static file routing
  define: {
    // This ensures public files are accessible
    __PUBLIC_PATH__: JSON.stringify('/')
  }
})