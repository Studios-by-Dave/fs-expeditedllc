import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema } from "@/data/seo-schemas";
import { ChevronRight } from "lucide-react";

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
      {/* Breadcrumb Navigation */}
      <Breadcrumb aria-label="breadcrumb" className="container px-4 pt-20">
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink asChild href={crumb.url} className={index === breadcrumbs.length - 1 ? "text-foreground font-semibold" : "text-primary hover:text-primary/70"}>
                {crumb.name}
              </BreadcrumbLink>
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator><ChevronRight /></BreadcrumbSeparator>}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <main className="pt-20">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
