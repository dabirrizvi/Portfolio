import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    vue(),
    copy({
      targets: [
        { src: '_redirects', dest: 'dist' }
      ]
    })
  ]
});
