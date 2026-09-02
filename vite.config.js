import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://alan1321.github.io/aadhya_mushroom/ — GitHub Pages puts
  // a project site under the repo name, so every asset URL needs that prefix.
  // Change to '/' if the site ever moves to its own domain or an org root page.
  base: '/aadhya_mushroom/',
  plugins: [react()],
})
