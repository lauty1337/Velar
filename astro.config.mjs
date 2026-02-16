// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  output: 'static',

  srcDir: './src',
  publicDir: './public',
  outDir: './dist',

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      target: 'esnext',
      assetsInlineLimit: 4096,
    },
  },

  compressHTML: true,
})
