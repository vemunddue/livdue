import { defineConfig } from 'astro/config';

// STAGING=1 bygger för GitHub Pages-staging under /livdue
const staging = process.env.STAGING === '1';
// PUBLIC_FORHANDSVISNING=1 bygger förhandsvisningen (egen repo, noindex) under /livdue-forhandsvisning
const forhandsvisning = process.env.PUBLIC_FORHANDSVISNING === '1';

export default defineConfig({
  site: staging || forhandsvisning ? 'https://vemunddue.github.io' : 'https://livdue.com',
  base: staging ? '/livdue' : forhandsvisning ? '/livdue-forhandsvisning' : undefined,
  trailingSlash: 'ignore',
  // Gamla enspråkiga URL:er (kort live) → svenska språkvägen
  redirects: {
    '/verk': '/sv/verk',
    '/om': '/sv/om',
    '/kontakt': '/sv/kontakt',
  },
  image: {
    // Bilderna är konst — håll hög kvalitet men låt Astro generera responsiva storlekar
    responsiveStyles: true,
  },
});
