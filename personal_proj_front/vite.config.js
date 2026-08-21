import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // resolve: {
  //   dedupe: ['react', 'react-dom'],
    
  // },
  plugins: [react()],
  server: {
    proxy: {
      '/api':'http://localhost:8000',
      // '/cat': {
      //   target: 'https://http.cat',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api-cat/, '')
      // }
    }
  }
})
// I have the dedupe to get rid of any duplicates of react and react-dom