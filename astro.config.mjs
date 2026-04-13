import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare(),
  integrations: [tailwind(), sitemap()],
  site: 'https://holarentia.com',
});
