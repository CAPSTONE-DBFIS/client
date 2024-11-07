import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vanilla-extract initial setup
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  cacheDir: './.vite',
})
