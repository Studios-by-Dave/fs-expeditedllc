import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

console.log('🔍 GOOGLE SEARCH CONSOLE DIAGNOSTIC TOOL\n');
console.log('=====================================\n');

// Test URL accessibility
async function testUrl(url) {
  try {
    const response = await fetch(url);
    return {
      url,
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      accessible: response.ok
    };
  } catch (error) {
    return {
      url,
      status: 'ERROR',
      statusText: error.message,
      headers: {},
      accessible: false
    };
  }
}

// Test critical URLs
const criticalUrls = [
  'https://www.fs-expeditedllc.com/',
  'https://www.fs-expeditedllc.com/sitemap.xml',
  'https://www.fs-expeditedllc.com/robots.txt',
  'https://www.fs-expeditedllc.com/favicon.ico',
  'https://www.fs-expeditedllc.com/favicon-32x32.png',
  'https://www.fs-expeditedllc.com/assets/optimized/fs-logo-400.webp',
  'https://www.fs-expeditedllc.com/assets/optimized/hero-truck-1600.webp'
];

console.log('🌐 1. CRITICAL URL ACCESSIBILITY TEST:');
console.log('=====================================');

for (const url of criticalUrls) {
  const result = await testUrl(url);
  const status = result.accessible ? '✅' : '❌';
  console.log(`${status} ${url}`);
  console.log(`   Status: ${result.status} ${result.statusText}`);
  if (!result.accessible) {
    console.log(`   ❌ ISSUE: URL not accessible - this causes GSC N/A errors`);
  }
  console.log('');
}

// Check robots.txt
console.log('🤖 2. ROBOTS.TXT ANALYSIS:');
console.log('==========================');
try {
  const robotsPath = './public/robots.txt';
  if (existsSync(robotsPath)) {
    const robots = readFileSync(robotsPath, 'utf8');
    console.log('✅ robots.txt exists');
    
    // Check for common issues
    if (robots.includes('Disallow: /')) {
      console.log('❌ WARNING: Disallowing root directory');
    }
    
    if (robots.includes('User-agent: *')) {
      console.log('✅ User-agent wildcard present');
    }
    
    if (robots.includes('Sitemap:')) {
      console.log('✅ Sitemap referenced');
    }
    
    // Check for blocking
    if (robots.includes('Disallow: /assets/')) {
      console.log('❌ CRITICAL: Blocking /assets/ - images won\'t load');
    }
    
    if (robots.includes('Disallow: /public/')) {
      console.log('❌ CRITICAL: Blocking /public/ - resources won\'t load');
    }
  } else {
    console.log('❌ robots.txt missing');
  }
} catch (error) {
  console.log('❌ Error reading robots.txt:', error.message);
}

// Check sitemap
console.log('\n🗺️ 3. SITEMAP.XML ANALYSIS:');
console.log('============================');
try {
  const sitemapPath = './public/sitemap.xml';
  if (existsSync(sitemapPath)) {
    const sitemap = readFileSync(sitemapPath, 'utf8');
    console.log('✅ sitemap.xml exists');
    
    // Check for valid XML
    if (sitemap.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
      console.log('✅ XML declaration present');
    }
    
    if (sitemap.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) {
      console.log('✅ Correct namespace');
    }
    
    // Count URLs
    const urlCount = (sitemap.match(/<url>/g) || []).length;
    console.log(`📊 URLs in sitemap: ${urlCount}`);
    
    // Check for required elements
    if (sitemap.includes('<loc>https://www.fs-expeditedllc.com/')) {
      console.log('✅ Correct domain used');
    }
    
    if (sitemap.includes('<lastmod>')) {
      console.log('✅ lastmod dates present');
    }
    
    if (sitemap.includes('<priority>')) {
      console.log('✅ priority values set');
    }
  } else {
    console.log('❌ sitemap.xml missing');
  }
} catch (error) {
  console.log('❌ Error reading sitemap.xml:', error.message);
}

// Check HTML structure
console.log('\n📄 4. HTML STRUCTURE ANALYSIS:');
console.log('===============================');
try {
  const htmlPath = './index.html';
  if (existsSync(htmlPath)) {
    const html = readFileSync(htmlPath, 'utf8');
    console.log('✅ index.html exists');
    
    // Check for critical elements
    if (html.includes('<title>')) {
      console.log('✅ Title tag present');
    }
    
    if (html.includes('name="description"')) {
      console.log('✅ Meta description present');
    }
    
    if (html.includes('rel="canonical"')) {
      console.log('✅ Canonical URL present');
    }
    
    if (html.includes('application/ld+json')) {
      console.log('✅ Structured data present');
    }
    
    if (html.includes('viewport')) {
      console.log('✅ Viewport meta tag present');
    }
    
    // Check for issues
    if (!html.includes('lang="en"')) {
      console.log('⚠️  WARNING: Missing lang attribute');
    }
    
    if (html.includes('http-equiv="refresh"')) {
      console.log('❌ WARNING: Meta refresh detected');
    }
  } else {
    console.log('❌ index.html missing');
  }
} catch (error) {
  console.log('❌ Error reading index.html:', error.message);
}

// Check structured data
console.log('\n📊 5. STRUCTURED DATA ANALYSIS:');
console.log('==============================');
try {
  const schemaPath = './src/data/seo-schemas.ts';
  if (existsSync(schemaPath)) {
    const schemas = readFileSync(schemaPath, 'utf8');
    console.log('✅ Schema file exists');
    
    // Check for required schemas
    if (schemas.includes('LocalBusiness')) {
      console.log('✅ LocalBusiness schema present');
    }
    
    if (schemas.includes('Organization')) {
      console.log('✅ Organization schema present');
    }
    
    if (schemas.includes('WebSite')) {
      console.log('✅ WebSite schema present');
    }
    
    // Check for required fields
    if (schemas.includes('https://www.fs-expeditedllc.com')) {
      console.log('✅ Correct domain in schemas');
    }
    
    if (schemas.includes('telephone')) {
      console.log('✅ Contact info in schemas');
    }
    
    if (schemas.includes('address')) {
      console.log('✅ Address info in schemas');
    }
    
    // Check for syntax errors
    if (schemas.includes('@context')) {
      console.log('✅ Schema context defined');
    }
    
    if (schemas.includes('@type')) {
      console.log('✅ Schema types defined');
    }
  } else {
    console.log('❌ Schema file missing');
  }
} catch (error) {
  console.log('❌ Error reading schemas:', error.message);
}

console.log('\n🎯 GOOGLE SEARCH CONSOLE RECOMMENDATIONS:');
console.log('========================================');
console.log('1. If URLs show N/A, check:');
console.log('   - URL accessibility (test above)');
console.log('   - robots.txt blocking rules');
console.log('   - sitemap.xml accessibility');
console.log('   - HTTP response codes (should be 200)');
console.log('');
console.log('2. Common N/A causes:');
console.log('   - Server errors (5xx)');
console.log('   - Client errors (4xx)');
console.log('   - Redirect loops');
console.log('   - Timeout issues');
console.log('   - DNS resolution problems');
console.log('');
console.log('3. Fix actions:');
console.log('   - Ensure all URLs return HTTP 200');
console.log('   - Check robots.txt doesn\'t block important paths');
console.log('   - Verify sitemap.xml is accessible');
console.log('   - Test with Google Rich Results tool');
console.log('   - Monitor Core Web Vitals');
console.log('');
console.log('🚀 DIAGNOSTIC COMPLETE!');
