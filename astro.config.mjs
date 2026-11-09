// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/guides/configuring-astro/
export default defineConfig({
  site: 'https://smokyburger.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
