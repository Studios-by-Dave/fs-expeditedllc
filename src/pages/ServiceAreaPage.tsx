import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ServiceArea } from "@/components/ServiceArea";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema, localBusinessSchema } from "@/data/seo-schemas";
import { ChevronRight } from "lucide-react";

const ServiceAreaPage = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Service Area", url: "https://www.fs-expeditedllc.com/service-area" }
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema,
      breadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Service Area — Expedited Hauling Services in Charlotte, Gastonia, Hickory & Within 1-Hour of Shelby NC"
        description="F&S Expedited provides expedited hauling services to 50+ cities within 1-hour of Shelby, NC including Charlotte, Gastonia, Hickory, Spartanburg, Greenville, Rock Hill, Concord, and all surrounding areas."
        canonical="/service-area"
        schema={combinedSchema}
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
        <ServiceArea />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceAreaPage;
