

# Update Sitemap and SEO References for Production Domain

## The Problem

Your sitemap and robots.txt currently reference `https://fs-expeditedllc.lovable.app` instead of your actual domain `https://www.fs-expeditedllc.com`. This is why online sitemap generators show missing pages -- they're looking at the wrong domain, and Google won't properly index your site under the real domain.

You don't need to generate a sitemap externally. The sitemap already exists in the project with all 15 pages. It just needs the domain updated.

## What Will Change

### 1. Update `public/sitemap.xml`
Replace all instances of `https://fs-expeditedllc.lovable.app` with `https://www.fs-expeditedllc.com` across all 15 URLs. Also add the two newer services (site-prep and demolition) if missing with correct slugs.

### 2. Update `public/robots.txt`
Change the Sitemap directive from:
```
Sitemap: https://fs-expeditedllc.lovable.app/sitemap.xml
```
to:
```
Sitemap: https://www.fs-expeditedllc.com/sitemap.xml
```

### 3. Update `index.html` canonical/meta references
Update any canonical URL or Open Graph references from the Lovable domain to `https://www.fs-expeditedllc.com`.

### 4. Update `src/components/SEOHead.tsx`
Update the base URL used for canonical links and OG meta tags to `https://www.fs-expeditedllc.com`.

### 5. Update `src/data/seo-schemas.ts`
Update any structured data (JSON-LD) URL references to use the production domain.

### 6. Update `generate-sitemap.js`
Change the `SITE_URL` constant to `https://www.fs-expeditedllc.com`.

## After Deployment

Once deployed to Vercel, your sitemap will be live at:
**https://www.fs-expeditedllc.com/sitemap.xml**

You should then submit this URL to Google Search Console for indexing.

