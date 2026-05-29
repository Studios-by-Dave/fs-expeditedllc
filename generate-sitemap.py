#!/usr/bin/env python3

"""
Automated Sitemap Generator for F&S Expedited LLC
This script generates a sitemap.xml file based on the pages and services in the project.
"""

import os
import sys
import re
from datetime import datetime
from pathlib import Path

# Configuration
pages_dir = Path('src/pages')
public_dir = Path('public')
output_file = public_dir / 'sitemap.xml'

# Ensure public directory exists
public_dir.mkdir(parents=True, exist_ok=True)

def get_last_modified_date(file_path):
    """Get the last modified date of a file in YYYY-MM-DD format."""
    mtime = os.path.getmtime(file_path)
    return datetime.fromtimestamp(mtime).strftime('%Y-%m-%d')

def get_static_url(filename):
    """Convert filename to URL path for static pages."""
    # Remove file extension
    name = filename.replace('.tsx', '').replace('.jsx', '').replace('.ts', '').replace('.js', '')
    
    # Map to actual URLs based on React Router configuration
    url_map = {
        'Index': '/',
        'ServicesPage': '/services',
        'WhyUsPage': '/why-us',
        'ProcessPage': '/process',
        'TestimonialsPage': '/reviews',
        'ContactPage': '/contact',
        'ServiceAreaPage': '/service-area',
        'GalleryPage': '/gallery',
        'PrivacyPolicyPage': '/privacy-policy',
        'TermsOfServicePage': '/terms-of-service'
    }
    
    return url_map.get(name, None)

def extract_slugs_from_ts_file(filepath, key_name):
    """Extract slug values from a TypeScript file."""
    slugs = []
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Use regex to find all slug values
        # Pattern: slug: "value",
        pattern = rf'{key_name}\s*:\s*"([^"]+)"'
        matches = re.findall(pattern, content)
        slugs = matches
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
    return slugs

def get_service_urls():
    """Generate URLs for all service detail pages."""
    return [f'/services/{slug}' for slug in extract_slugs_from_ts_file('src/data/services.ts', 'slug')]

def get_category_urls():
    """Generate URLs for all service category pages."""
    return [f'/services/{slug}' for slug in extract_slugs_from_ts_file('src/data/services.ts', 'slug') if slug in [
        'dump-trucks-hauling-services', 'material-delivery', 'site-services', 'emergency-expedited'
    ]]

def get_subcategory_urls():
    """Generate URLs for all service subcategory pages."""
    subcategory_map = {
        'material-delivery': ['gravel-delivery', 'sand-delivery', 'soil-delivery'],
        'site-services': ['land-clearing', 'site-prep', 'debris-removal', 'aggregate-transport', 
                         'retaining-walls', 'underground-utilities', 'land-grading'],
        'emergency-expedited': ['emergency-expedited', 'commercial-hauling', 'dump-truck-hauling']
    }
    
    urls = []
    for category, subcats in subcategory_map.items():
        for sub in subcats:
            urls.append(f'/services/{category}/{sub}')
    return urls

def get_priority(url):
    """Determine priority based on URL path."""
    if url == '/' or url == '/services':
        return '1.0'
    elif url in ['/contact', '/why-us', '/process', '/service-area', '/reviews', '/gallery']:
        return '0.9'
    elif '/services/' in url:
        return '0.8'
    else:
        return '0.5'

def get_changefreq(url):
    """Determine change frequency based on URL path."""
    if url == '/' or url == '/services':
        return 'daily'
    elif url in ['/contact', '/why-us', '/process', '/service-area', '/reviews', '/gallery']:
        return 'monthly'
    elif '/services/' in url:
        return 'weekly'
    else:
        return 'monthly'

def main():
    # Only include main pages for a hauling company - no excessive service variations
    main_urls = [
        ('/', '2026-05-29'),
        ('/services', '2026-05-29'),
        ('/why-us', '2026-05-29'),
        ('/why-us/promos', '2026-05-29'),
        ('/process', '2026-05-29'),
        ('/service-area', '2026-05-29'),
        ('/gallery', '2026-05-29'),
        ('/blog', '2026-05-29'),
        ('/contact', '2026-05-29'),
        ('/reviews', '2026-05-29'),
        ('/privacy-policy', '2026-05-29'),
        ('/terms-of-service', '2026-05-29')
    ]
    
    # Add blog article URLs if they exist
    blog_urls = [
        ('/blog/dump-trucks-expedited-local-hauling-shelby-charlotte-nc', '2026-05-29'),
        ('/blog/why-manufacturers-choose-fs-expedited-trucking-emergency-freight', '2026-05-29'),
        ('/blog/expedited-dump-truck-services-prevent-costly-project-delays-north-carolina', '2026-05-29')
    ]
    
    urls = set(main_urls + blog_urls)
    print(f"Found {len(urls)} total URLs for sitemap")
    
    # Generate sitemap XML
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    for url, lastmod in sorted(urls):
        priority = get_priority(url)
        changefreq = get_changefreq(url)
        
        xml += '  <url>\n'
        xml += f'    <loc>https://www.fs-expeditedllc.com{url}</loc>\n'
        xml += f'    <lastmod>{lastmod}</lastmod>\n'
        xml += f'    <changefreq>{changefreq}</changefreq>\n'
        xml += f'    <priority>{priority}</priority>\n'
        xml += '  </url>\n'
    
    xml += '</urlset>'
    
    # Write sitemap to file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(xml)
    
    print(f'Sitemap generated successfully: {output_file}')
    print(f'Generated {len(urls)} URLs')

if __name__ == '__main__':
    main()