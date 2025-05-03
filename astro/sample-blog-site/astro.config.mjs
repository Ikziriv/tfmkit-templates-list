import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

import prefetch from '@astrojs/prefetch';

import sitemap from '@astrojs/sitemap';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), prefetch(), sitemap(), image()],
  output: 'server',
  adapter: vercel()
});