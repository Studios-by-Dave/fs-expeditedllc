import { writeFileSync } from 'fs';

console.log('🔧 GENERATING CORRECTED SITEMAP FOR GOOGLE SEARCH CONSOLE\n');

// Define only the pages that actually exist in your React Router
const existingPages = [
  {
    url: 'https://www.fs-expeditedllc.com/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: 'https://www.fs-expeditedllc.com/services',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: 'https://www.fs-expeditedllc.com/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: 'https://www.fs-expeditedllc.com/why-us',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: 'https://www.fs-expeditedllc.com/process',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: 'https://www.fs-expeditedllc.com/service-area',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: '0.6'
  },
  {
    url: 'https://www.fs-expeditedllc.com/reviews',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: '0.8'
  }
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${existingPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap to public folder
writeFileSync('./public/sitemap.xml', sitemap);

console.log('✅ FIXED SITEMAP GENERATED:');
console.log('==========================');
console.log(`📊 Total URLs: ${existingPages.length}`);
console.log('📄 Pages included:');
existingPages.forEach((page, index) => {
  console.log(`${index + 1}. ${page.url}`);
  console.log(`   🕐 Last Modified: ${page.lastmod}`);
  console.log(`   🔄 Change Frequency: ${page.changefreq}`);
  console.log(`   ⭐ Priority: ${page.priority}`);
  console.log('');
});

console.log('🎯 KEY FIXES:');
console.log('==============');
console.log('✅ Removed non-existent service detail pages');
console.log('✅ Only included actual React Router routes');
console.log('✅ All URLs should return HTTP 200');
console.log('✅ No more 404 errors causing GSC N/A');

console.log('\n🚀 ACTIONS FOR GOOGLE SEARCH CONSOLE:');
console.log('====================================');
console.log('1. Go to Google Search Console');
console.log('2. Navigate to Sitemaps section');
console.log('3. Remove old sitemap if present');
console.log('4. Add new sitemap: https://www.fs-expeditedllc.com/sitemap.xml');
console.log('5. Wait for processing (1-2 hours)');
console.log('6. Check Coverage report');
console.log('7. URLs should now show "Valid" instead of "N/A"');

console.log('\n🎉 FIXED SITEMAP READY FOR SUBMISSION!');
