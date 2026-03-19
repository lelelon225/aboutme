import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  redirects: {
    "/": "/home"
  },
  adapter: vercel(),
  output: 'server',
});