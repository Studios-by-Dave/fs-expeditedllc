import { readFileSync } from 'fs';

console.log('🗺️ SITEMAP VALIDATION FOR GOOGLE SEARCH CONSOLE\n');
console.log('==============================================\n');

// Test sitemap accessibility and structure
async function validateSitemap() {
  try {
    const response = await fetch('https://www.fs-expeditedllc.com/sitemap.xml');
    const sitemap = await response.text();
    
    console.log('✅ Sitemap is accessible (HTTP 200)');
    console.log(`📊 Content-Length: ${response.headers.get('content-length')} bytes`);
    console.log(`🕐 Last-Modified: ${response.headers.get('last-modified')}`);
    console.log(`🏷️  Content-Type: ${response.headers.get('content-type')}`);
    console.log(`🏷️  ETag: ${response.headers.get('etag')}`);
    console.log(`🌐 Cache: ${response.headers.get('x-vercel-cache')}`);
    console.log('');
    
    // Validate XML structure
    console.log('📋 XML STRUCTURE VALIDATION:');
    console.log('=============================');
    
    if (sitemap.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
      console.log('✅ XML declaration present');
    } else {
      console.log('❌ XML declaration missing');
    }
    
    if (sitemap.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) {
      console.log('✅ Correct sitemap namespace');
    } else {
      console.log('❌ Incorrect sitemap namespace');
    }
    
    // Count and validate URLs
    const urlMatches = sitemap.match(/<url>/g);
    const urlCount = urlMatches ? urlMatches.length : 0;
    console.log(`📊 Total URLs in sitemap: ${urlCount}`);
    
    // Check for required elements
    const locMatches = sitemap.match(/<loc>/g);
    const lastmodMatches = sitemap.match(/<lastmod>/g);
    const priorityMatches = sitemap.match(/<priority>/g);
    
    console.log(`📍 <loc> tags: ${locMatches ? locMatches.length : 0}`);
    console.log(`🕐 <lastmod> tags: ${lastmodMatches ? lastmodMatches.length : 0}`);
    console.log(`⭐ <priority> tags: ${priorityMatches ? priorityMatches.length : 0}`);
    
    // Check domain consistency
    const domainMatches = sitemap.match(/https:\/\/www\.fs-expeditedllc\.com/g);
    console.log(`🌐 Domain consistency: ${domainMatches ? domainMatches.length : 0} occurrences`);
    
    // Extract and validate individual URLs
    console.log('\n📄 INDIVIDUAL URL VALIDATION:');
    console.log('===============================');
    
    const urlRegex = /<url>[\s\S]*?<loc>([^<]+)<\/loc>[\s\S]*?<lastmod>([^<]+)<\/lastmod>/g;
    let match;
    let urlIndex = 1;
    
    while ((match = urlRegex.exec(sitemap)) !== null) {
      const url = match[1];
      const lastmod = match[2];
      
      console.log(`\n${urlIndex}. ${url}`);
      console.log(`   🕐 Last Modified: ${lastmod}`);
      
      // Test individual URL accessibility
      try {
        const urlResponse = await fetch(url);
        const accessible = urlResponse.ok;
        const status = accessible ? '✅' : '❌';
        console.log(`   ${status} HTTP ${urlResponse.status}`);
        
        if (!accessible) {
          console.log(`   ❌ ISSUE: URL not accessible - this causes GSC N/A errors`);
        }
      } catch (error) {
        console.log(`   ❌ ERROR: ${error.message}`);
      }
      
      urlIndex++;
    }
    
    // Check for common issues
    console.log('\n🚨 COMMON SITEMAP ISSUES:');
    console.log('========================');
    
    if (sitemap.includes('localhost')) {
      console.log('❌ Contains localhost URLs');
    }
    
    if (sitemap.includes('127.0.0.1')) {
      console.log('❌ Contains 127.0.0.1');
    }
    
    if (sitemap.includes('file://')) {
      console.log('❌ Contains file:// URLs');
    }
    
    if (!sitemap.includes('https://')) {
      console.log('❌ Missing HTTPS URLs');
    }
    
    if (urlCount === 0) {
      console.log('❌ No URLs found in sitemap');
    }
    
    console.log('\n🎯 RECOMMENDATIONS FOR GOOGLE SEARCH CONSOLE:');
    console.log('============================================');
    
    if (response.ok && urlCount > 0) {
      console.log('✅ Sitemap is valid and ready for submission');
      console.log('');
      console.log('📋 ACTIONS TO TAKE:');
      console.log('1. Go to Google Search Console');
      console.log('2. Navigate to Sitemaps section');
      console.log('3. Click "Add/Remove sitemap"');
      console.log('4. Enter: https://www.fs-expeditedllc.com/sitemap.xml');
      console.log('5. Wait for processing (1-2 hours)');
      console.log('6. Check "Submitted URLs" count');
      console.log('');
      console.log('🔍 VALIDATION OPTIONS:');
      console.log('- Use Google Rich Results Test tool');
      console.log('- Test individual URLs with URL Inspection');
      console.log('- Check Coverage report for indexing status');
      console.log('- Monitor Core Web Vitals in GSC');
    } else {
      console.log('❌ Sitemap has issues that need fixing');
    }
    
  } catch (error) {
    console.log('❌ Error accessing sitemap:', error.message);
    console.log('');
    console.log('🔧 TROUBLESHOOTING:');
    console.log('==================');
    console.log('1. Check if sitemap.xml exists in public folder');
    console.log('2. Verify deployment completed successfully');
    console.log('3. Test sitemap manually in browser');
    console.log('4. Check for server configuration issues');
  }
}

validateSitemap();
