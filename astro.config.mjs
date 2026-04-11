import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zhenyige.github.io',
  base: '/menblog/',
  build: {
    assets: '_assets'
  },
  vite: {
    build: {
      assetsDir: '_assets'
    }
  }
});
