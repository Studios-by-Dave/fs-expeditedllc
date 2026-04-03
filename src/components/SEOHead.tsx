import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  schema?: object;
  noindex?: boolean;
  alternateLanguage?: string;
  ogImage?: string;
}

const SITE_URL = 'https://fs-expeditedllc.vercel.app';
const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/7yFZRN3a4zOnW6XxdC0mKKnJqbo1/social-images/social-1771915503507-ESExp.webp";

export const SEOHead = ({ 
  title, 
  description, 
  canonical, 
  type = "website", 
  schema, 
  noindex = false,
  alternateLanguage = "en",
  ogImage = OG_IMAGE
}: SEOHeadProps) => {
  const fullTitle = title.includes("F&S Expedited") ? title : `${title} | F&S Expedited LLC`;
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      <html lang={alternateLanguage} />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="dump truck hauling, expedited hauling, gravel delivery, sand delivery, construction hauling, trucking company Shelby NC, hauling services Charlotte NC, debris removal, aggregate transport, emergency hauling, commercial hauling, dump truck services, licensed insured hauling, site prep, land clearing" />
      <meta name="author" content="F&S Expedited LLC" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={url} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="F&S Expedited LLC" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="F&S Expedited LLC - Professional Dump Truck Hauling Services" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@FSExpeditedLLC" />
      <meta name="twitter:creator" content="@FSExpeditedLLC" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="F&S Expedited LLC - Professional Dump Truck Hauling Services" />
      
      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="US-NC" />
      <meta name="geo.placename" content="Shelby, North Carolina" />
      <meta name="geo.position" content="35.2924;-81.5356" />
      <meta name="ICBM" content="35.2924, -81.5356" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="language" content={alternateLanguage} />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Business Contact Info */}
      <meta name="contact" content="Aldrich2577@gmail.com" />
      <meta name="telephone" content="+1-865-364-9011" />
      <meta name="telephone" content="+1-704-751-8141" />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Helmet>
  );
};
