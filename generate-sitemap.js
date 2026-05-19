#!/usr/bin/env node

/**
 * Automated Sitemap Generator for F&S Expedited LLC
 * This script generates a sitemap.xml file based on the pages in the project.
 */

const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'src', 'pages');
const publicDir = path.join(__dirname, 'public');
const outputFile = path.join(publicDir, 'sitemap.xml');

// Get all page files
const pageFiles = fs.readdirSync(pagesDir)
  .filter(file => file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js'))
  .filter(file => !file.startsWith('_')) // Exclude private files
  .filter(file => file !== 'NotFound.tsx'); // Exclude 404 page

console.log(`Found ${pageFiles.length} pages`);

// Function to get last modified date of a file
function getLastModifiedDate(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return new Date(stats.mtime).toISOString().split('T')[0]; // Return YYYY-MM-DD format
  } catch (error) {
    return new Date().toISOString().split('T')[0]; // Default to today
  }
}

// Function to determine URL path from filename
function getUrlPath(filename) {
  // Remove file extension
  let name = filename.replace(/\.(tsx|jsx|ts|js)$/, '');
  
  // Handle special cases
  if (name === 'Index') return '/';
  if (name === 'Contact') return '/contact';
  if (name === 'Gallery') return '/gallery';
  if (name === 'Services') return '/services';
  if (name === 'WhyUs') return '/why-us';
  if (name === 'Process') return '/process';
  if (name === 'ServiceArea') return '/service-area';
  if (name === 'Testimonials') return '/testimonials';
  if (name === 'PrivacyPolicy') return '/privacy-policy';
  if (name === 'TermsOfService') return '/terms-of-service';
  
  // For other pages, use kebab-case
  return '/' + name.replace(/([A-Z])/g, (match) => '-' + match.toLowerCase()).toLowerCase();
}

// Generate sitemap XML
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n';

pageFiles.forEach(file => {
  const filePath = path.join(pagesDir, file);
  const lastmod = getLastModifiedDate(filePath);
  const urlPath = getUrlPath(file);
  
  // Skip if URL path is empty or invalid
  if (!urlPath || urlPath === '/') {
    // For Index.tsx, urlPath is already '/'
  }
  
  // Determine priority and changefreq based on page type
  let priority = '0.5';
  let changefreq = 'monthly';
  
  if (file === 'Index.tsx') {
    priority = '1.0';
    changefreq = 'daily';
  } else if (['Contact.tsx', 'Services.tsx', 'WhyUs.tsx', 'Process.tsx', 'ServiceArea.tsx', 'Testimonials.tsx'].includes(file)) {
    priority = '0.9';
    changefreq = 'monthly';
  } else if (file === 'Gallery.tsx') {
    priority = '0.8';
    changefreq = 'weekly';
  }
  
  xml += '  <url>\n';
  xml += `    <loc>https://www.fs-expeditedllc.com${urlPath}</loc>\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += `    <changefreq>${changefreq}</changefreq>\n`;
  xml += `    <priority>${priority}</priority>\n`;
  xml += '  </url>\n';
});

xml += '</urlset>';

// Write the sitemap to public directory
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(outputFile, xml, 'utf8');

console.log(`Sitemap generated successfully: ${outputFile}`);
console.log(`Generated ${pageFiles.length} URLs`);
