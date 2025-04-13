import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      'whitemirror.kiminjae.me',
      'whitemirror-api.kiminjae.me'
    ],
  },
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
