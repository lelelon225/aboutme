import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: vercel(),
  output: 'server',   // 👈 THIS is the missing piece
  redirects: {
    "/": "/home"
  }
});