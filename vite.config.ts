import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Custom domain (seanburman.com) via GitHub Pages — assets served from root
  base: '/',
})
