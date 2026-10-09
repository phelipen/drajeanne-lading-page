import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
const deploymentUrl = process.env.SITE_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined)
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);
export default defineConfig({
  site: deploymentUrl,
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
