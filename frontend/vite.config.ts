<<<<<<< Updated upstream
import path from 'path'
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
=======
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import viteReact from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
>>>>>>> Stashed changes

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.pdf'],
  plugins: [TanStackRouterVite(), viteReact(), tailwindcss()],
  preview: {
    port: 3001,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
