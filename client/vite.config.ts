import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import * as path from 'path';

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
  plugins: [
    vue(),
    nodeResolve(),
    NodeGlobalsPolyfillPlugin({
      buffer: true,
    }),
  ],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  optimizeDeps: {
    include: [
      '@esbuild-plugins/node-globals-polyfill',
      '@rollup/plugin-node-resolve',
    ],
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
});
