import { writeFileSync } from 'fs';
import { services } from './src/data/services';

const SITE_URL = 'https://www.fs-expeditedllc.com';

const pages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/why-us', changefreq: 'monthly', priority: 0.7 },
  { url: '/process', changefreq: 'monthly', priority: 0.7 },
  { url: '/service-area', changefreq: 'monthly', priority: 0.6 },
  { url: '/reviews', changefreq: 'weekly', priority: 0.8 },
];

const servicePages = services.map(service => ({
  url: `/services/${service.slug}`,
  changefreq: 'monthly',
  priority: 0.8
}));

const allPages = [...pages, ...servicePages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

console.log('Sitemap generated:');
console.log(sitemap);
