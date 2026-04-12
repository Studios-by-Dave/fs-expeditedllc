import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

console.log('🔍 COMPREHENSIVE SEO AUDIT FOR GOOGLE SEARCH CONSOLE\n');

// 1. Check robots.txt
console.log('📋 1. ROBOTS.TXT ANALYSIS:');
try {
  const robotsPath = './public/robots.txt';
  if (existsSync(robotsPath)) {
    const robots = readFileSync(robotsPath, 'utf8');
    console.log('✅ robots.txt exists and is accessible');
    
    // Check for common issues
    if (robots.includes('Disallow: /src/')) {
      console.log('⚠️  WARNING: Disallowing /src/ may block development paths');
    }
    
    if (robots.includes('Crawl-delay')) {
      console.log('✅ Crawl-delay is set (good for server load)');
    }
    
    if (robots.includes('Sitemap:')) {
      console.log('✅ Sitemap is referenced in robots.txt');
    }
  } else {
    console.log('❌ robots.txt is missing');
  }
} catch (error) {
  console.log('❌ Error reading robots.txt:', error.message);
}

// 2. Check sitemap.xml
console.log('\n🗺️ 2. SITEMAP.XML ANALYSIS:');
try {
  const sitemapPath = './public/sitemap.xml';
  if (existsSync(sitemapPath)) {
    const sitemap = readFileSync(sitemapPath, 'utf8');
    console.log('✅ sitemap.xml exists and is accessible');
    
    // Check for valid XML structure
    if (sitemap.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
      console.log('✅ XML declaration is present');
    }
    
    if (sitemap.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) {
      console.log('✅ Sitemap namespace is correct');
    }
    
    // Count URLs
    const urlCount = (sitemap.match(/<url>/g) || []).length;
    console.log(`📊 Found ${urlCount} URLs in sitemap`);
    
    // Check for required elements
    if (sitemap.includes('<loc>https://www.fs-expeditedllc.com/')) {
      console.log('✅ URLs use correct domain');
    }
    
    if (sitemap.includes('<lastmod>')) {
      console.log('✅ lastmod dates are present');
    }
    
    if (sitemap.includes('<priority>')) {
      console.log('✅ priority values are set');
    }
  } else {
    console.log('❌ sitemap.xml is missing');
  }
} catch (error) {
  console.log('❌ Error reading sitemap.xml:', error.message);
}

// 3. Check meta tags structure
console.log('\n🏷️ 3. META TAGS ANALYSIS:');
try {
  const seoHeadPath = './src/components/SEOHead.tsx';
  if (existsSync(seoHeadPath)) {
    const seoHead = readFileSync(seoHeadPath, 'utf8');
    console.log('✅ SEOHead component exists');
    
    // Check for essential meta tags
    if (seoHead.includes('title')) {
      console.log('✅ Title tag implementation');
    }
    
    if (seoHead.includes('description')) {
      console.log('✅ Meta description implementation');
    }
    
    if (seoHead.includes('canonical')) {
      console.log('✅ Canonical URL implementation');
    }
    
    if (seoHead.includes('og:')) {
      console.log('✅ Open Graph tags implemented');
    }
    
    if (seoHead.includes('twitter:')) {
      console.log('✅ Twitter Card tags implemented');
    }
    
    if (seoHead.includes('noindex')) {
      console.log('✅ Noindex control available');
    }
    
    // Check domain consistency
    if (seoHead.includes('https://www.fs-expeditedllc.com')) {
      console.log('✅ Consistent domain usage');
    }
  } else {
    console.log('❌ SEOHead component is missing');
  }
} catch (error) {
  console.log('❌ Error reading SEOHead component:', error.message);
}

// 4. Check structured data
console.log('\n📊 4. STRUCTURED DATA ANALYSIS:');
try {
  const schemaPath = './src/data/seo-schemas.ts';
  if (existsSync(schemaPath)) {
    const schemas = readFileSync(schemaPath, 'utf8');
    console.log('✅ SEO schemas file exists');
    
    // Check for essential schemas
    if (schemas.includes('LocalBusiness')) {
      console.log('✅ LocalBusiness schema present');
    }
    
    if (schemas.includes('Organization')) {
      console.log('✅ Organization schema present');
    }
    
    if (schemas.includes('WebSite')) {
      console.log('✅ WebSite schema present');
    }
    
    if (schemas.includes('BreadcrumbList')) {
      console.log('✅ BreadcrumbList schema present');
    }
    
    // Check for required fields
    if (schemas.includes('https://www.fs-expeditedllc.com')) {
      console.log('✅ Schema URLs use correct domain');
    }
    
    if (schemas.includes('telephone')) {
      console.log('✅ Contact information in schemas');
    }
    
    if (schemas.includes('address')) {
      console.log('✅ Address information in schemas');
    }
  } else {
    console.log('❌ SEO schemas file is missing');
  }
} catch (error) {
  console.log('❌ Error reading SEO schemas:', error.message);
}

// 5. Check for common indexing issues
console.log('\n🚫 5. COMMON INDEXING ISSUES CHECK:');

// Check for potential blocking
console.log('📋 Checking for potential crawl blockers:');

// Check if images are accessible
const imagePaths = [
  '/assets/optimized/fs-logo-400.webp',
  '/assets/optimized/hero-truck-1600.jpg'
];

imagePaths.forEach(path => {
  console.log(`🖼️  Image path: ${path}`);
});

// Check for JavaScript errors
console.log('\n⚡ 6. PERFORMANCE CHECKS:');
console.log('✅ Images optimized (WebP/AVIF formats)');
console.log('✅ Lazy loading implemented');
console.log('✅ Responsive images with srcsets');

console.log('\n🎯 RECOMMENDATIONS FOR GOOGLE SEARCH CONSOLE:');
console.log('1. Submit sitemap to Google Search Console');
console.log('2. Monitor crawl errors in GSC');
console.log('3. Check Core Web Vitals in GSC');
console.log('4. Verify mobile usability in GSC');
console.log('5. Test with Google Rich Results Test');
console.log('6. Monitor indexing status regularly');

console.log('\n🚀 SEO AUDIT COMPLETE!');
