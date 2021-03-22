import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       intro: 'const global = window;',
  //       globals,
  //     },
  //   },
  // },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       intro: 'const global = globalThis',
  //     },
  //   },
  // },
})
