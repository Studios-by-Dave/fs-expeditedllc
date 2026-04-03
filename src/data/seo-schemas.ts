// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "F&S Expedited LLC",
  "description": "Professional dump truck hauling, gravel delivery, debris removal & expedited services within 100 miles of Shelby, NC. Licensed & insured.",
  "url": "https://fs-expeditedllc.vercel.app",
  "logo": "https://fs-expeditedllc.vercel.app/favicon-32x32.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-865-364-9011",
    "contactType": "Customer Service",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://fs-expeditedllc.vercel.app"
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
  "openingHours": "Mo-Fr 06:00-18:00",
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
  "name": "F&S Expedited LLC",
  "alternateName": "F&S Expedited",
  "description": "Professional dump truck hauling, gravel delivery, debris removal & expedited services within 100 miles of Shelby, NC. Licensed & insured.",
  "url": "https://fs-expeditedllc.vercel.app",
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://fs-expeditedllc.vercel.app/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    {
      "@type": "CommunicateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://fs-expeditedllc.vercel.app/contact"
      }
    }
  ],
  "publisher": {
    "@type": "Organization",
    "name": "F&S Expedited LLC",
    "url": "https://fs-expeditedllc.vercel.app"
  }
};

// LocalBusiness Schema (Updated)
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "F&S Expedited LLC",
  "description": "Professional dump truck hauling, gravel delivery, debris removal & expedited services within 100 miles of Shelby, NC. Licensed & insured.",
  "url": "https://fs-expeditedllc.vercel.app",
  "telephone": ["+1-865-364-9011", "+1-704-751-8141"],
  "email": "Aldrich2577@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Shelby",
    "addressRegion": "NC",
    "postalCode": "28152",
    "addressCountry": "US"
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
  "hasMap": true,
  "sameAs": [
    "https://fs-expeditedllc.vercel.app"
  ]
};

// Service Schema
export const serviceSchema = (serviceName: string, serviceDescription: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": serviceDescription,
  "provider": {
    "@type": "LocalBusiness",
    "name": "F&S Expedited LLC",
    "telephone": "+1-865-364-9011",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Shelby",
      "addressRegion": "NC",
      "postalCode": "28152",
      "addressCountry": "US"
    }
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
