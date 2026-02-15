// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Inline CSS menor a 4kb para reducir requests
      cssMinify: true,
      // Mejor tree-shaking
      target: 'esnext',
      // Inline assets pequeños
      assetsInlineLimit: 4096,
    },
  },
  // Comprimir HTML
  compressHTML: true,
})
