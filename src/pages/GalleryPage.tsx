import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema } from "@/data/seo-schemas";

const GalleryPage = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Gallery", url: "https://www.fs-expeditedllc.com/gallery" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Gallery — F&S Expedited LLC Project Showcase"
        description="Browse our completed hauling projects and see the quality of our dump truck hauling, debris removal, and expedited services in Shelby, NC and surrounding areas."
        canonical="/gallery"
        schema={breadcrumbSchema(breadcrumbs)}
      />
      <Navigation />
      <main className="pt-20">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
