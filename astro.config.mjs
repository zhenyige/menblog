import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blog.1g6.top',
  base: '/',
  build: {
    assets: '_assets'
  },
  vite: {
    build: {
      assetsDir: '_assets'
    }
  }
});
