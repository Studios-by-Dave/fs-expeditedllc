// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.fs-expeditedllc.com#organization",
  "name": "F&S Expedited LLC",
  "description": "Professional dump truck hauling, gravel delivery, debris removal & expedited services within 100 miles of Shelby, NC. Licensed & insured.",
  "url": "https://www.fs-expeditedllc.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.fs-expeditedllc.com/apple-touch-icon.png",
    "width": 180,
    "height": 180
  },
  "image": "https://storage.googleapis.com/gpt-engineer-file-uploads/7yFZRN3a4zOnW6XxdC0mKKnJqbo1/social-images/social-1771915503507-ESExp.webp",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+18653649011",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+17047518141",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    }
  ],
  "sameAs": [
    "https://www.facebook.com/share/17MKXS5wLS/"
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
  "@id": "https://www.fs-expeditedllc.com#website",
  "name": "F&S Expedited LLC",
  "alternateName": "F&S Expedited",
  "description": "Professional dump truck hauling, gravel delivery, debris removal & expedited services within 100 miles of Shelby, NC. Licensed & insured.",
  "url": "https://www.fs-expeditedllc.com",
  "potentialAction": [
    {
      "@type": "CommunicateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.fs-expeditedllc.com/contact"
      }
    }
  ],
  "publisher": {
    "@id": "https://www.fs-expeditedllc.com#organization"
  }
};

// LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.fs-expeditedllc.com#localbusiness",
  "name": "F&S Expedited LLC",
  "description": "Professional dump truck hauling, gravel delivery, debris removal & expedited services within 100 miles of Shelby, NC. Licensed & insured.",
  "url": "https://www.fs-expeditedllc.com",
  "telephone": ["+18653649011", "+17047518141"],
  "email": "Aldrich2577@gmail.com",
  "image": "https://storage.googleapis.com/gpt-engineer-file-uploads/7yFZRN3a4zOnW6XxdC0mKKnJqbo1/social-images/social-1771915503507-ESExp.webp",
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
    "https://www.facebook.com/share/17MKXS5wLS/"
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
