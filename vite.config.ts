import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages project site: https://seanbman.github.io/seanburman.com/
  // Change to '/' if you attach a custom domain (seanburman.com)
  base: '/seanburman.com/',
})
