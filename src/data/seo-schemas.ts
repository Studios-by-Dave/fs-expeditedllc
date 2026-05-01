const SITE_URL = 'https://www.fs-expeditedllc.com';
const FACEBOOK_URL = 'https://www.facebook.com/share/17MKXS5wLS/';
const OG_IMAGE = 'https://storage.googleapis.com/gpt-engineer-file-uploads/7yFZRN3a4zOnW6XxdC0mKKnJqbo1/social-images/social-1771915503507-ESExp.webp';

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": "F&S Expedited LLC",
  "description": "Professional dump truck hauling, gravel delivery, debris removal & expedited services within 100 miles of Shelby, NC. Licensed & insured.",
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/apple-touch-icon.png`,
    "width": 180,
    "height": 180
  },
  "image": OG_IMAGE,
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-865-364-9011",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-704-751-8141",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    }
  ],
  "sameAs": [
    FACEBOOK_URL
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Shelby",
    "addressRegion": "NC",
    "postalCode": "28152",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.2924,
    "longitude": -81.5356
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 35.2924,
      "longitude": -81.5356
    },
    "geoRadius": "160934"
  }
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "name": "F&S Expedited LLC",
  "alternateName": "F&S Expedited",
  "description": "Professional dump truck hauling, gravel delivery, debris removal & expedited services within 100 miles of Shelby, NC. Licensed & insured.",
  "url": SITE_URL,
  "publisher": {
    "@id": `${SITE_URL}/#organization`
  }
};

// LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  "name": "F&S Expedited LLC",
  "description": "Professional dump truck hauling, gravel delivery, debris removal & expedited services within 100 miles of Shelby, NC. Licensed & insured.",
  "url": SITE_URL,
  "image": OG_IMAGE,
  "telephone": ["+1-865-364-9011", "+1-704-751-8141"],
  "email": "Aldrich2577@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Shelby",
    "addressRegion": "NC",
    "postalCode": "28152",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.2924,
    "longitude": -81.5356
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 35.2924,
      "longitude": -81.5356
    },
    "geoRadius": "160934"
  },
  "openingHours": "Mo-Fr 06:00-18:00",
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Check", "Credit Card"],
  "currenciesAccepted": "USD",
  "sameAs": [
    FACEBOOK_URL
  ]
};

// Service Schema
export const serviceSchema = (serviceName: string, serviceDescription: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": serviceDescription,
  "provider": {
    "@id": `${SITE_URL}/#localbusiness`
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 35.2924,
      "longitude": -81.5356
    },
    "geoRadius": 160934
  }
});

// Breadcrumb Schema
export const breadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
