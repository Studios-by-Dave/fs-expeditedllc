import { writeFileSync } from 'fs';
import { readFileSync } from 'fs';

// Read services data directly
const servicesData = JSON.parse(readFileSync('./src/data/services.json', 'utf8'));

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

const servicePages = servicesData.map(service => ({
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

writeFileSync('./public/sitemap.xml', sitemap);

console.log('Sitemap generated:');
console.log(sitemap);
