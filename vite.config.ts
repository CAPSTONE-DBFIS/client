import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vanilla-extract initial setup
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
// alias
import tsconfigPaths from 'vite-tsconfig-paths'
// svgr
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vanillaExtractPlugin({
            identifiers: 'debug',
        }),
        tsconfigPaths(),
        svgr(),
    ],
    cacheDir: './.vite',
})
