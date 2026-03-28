import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  schema?: object;
  noindex?: boolean;
  alternateLanguage?: string;
}

const SITE_URL = "https://www.fs-expeditedllc.com";
const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/7yFZRN3a4zOnW6XxdC0mKKnJqbo1/social-images/social-1771915503507-ESExp.webp";

export const SEOHead = ({ 
  title, 
  description, 
  canonical, 
  type = "website", 
  schema, 
  noindex = false,
  alternateLanguage = "en"
}: SEOHeadProps) => {
  const fullTitle = title.includes("F&S Expedited") ? title : `${title} | F&S Expedited LLC`;
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="dump truck hauling, expedited hauling, gravel delivery, sand delivery, construction hauling, trucking company Shelby NC, hauling services Charlotte NC, debris removal, aggregate transport, emergency hauling, commercial hauling, dump truck services, licensed insured hauling" />
      <meta name="author" content="F&S Expedited LLC" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="F&S Expedited LLC - Professional dump truck and hauling services" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="F&S Expedited LLC" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content="F&S Expedited LLC - Professional dump truck and hauling services" />

      {/* Additional SEO Meta Tags */}
      <meta name="language" content={alternateLanguage} />
      <meta name="geo.region" content="US-NC" />
      <meta name="geo.placename" content="Shelby, North Carolina" />
      <meta name="geo.position" content="35.2924;-81.5356" />
      <meta name="ICBM" content="35.2924, -81.5356" />
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
