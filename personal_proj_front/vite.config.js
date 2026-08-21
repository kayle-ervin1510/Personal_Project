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

      '/cat': 'https://http.cat'
    }
  }
})
// Tried changing the api by proxy 
// as I did for the backend
// isn't working as I'd like it
// but I'm keeping it for reference
// in case I can redo so it works
