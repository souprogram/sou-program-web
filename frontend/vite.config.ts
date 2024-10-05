import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.pdf'],
  plugins: [TanStackRouterVite(), viteReact()],
  preview: {
    port: 3001,
  },
});
