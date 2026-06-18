import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceArea } from "@/components/ServiceArea";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import { localBusinessSchema, organizationSchema, websiteSchema, breadcrumbSchema } from "@/data/seo-schemas";

const Index = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" }
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema,
      organizationSchema,
      websiteSchema,
      breadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Expedited Hauling Services | F&S Expedited LLC | Charlotte, Gastonia, Hickory, Shelby NC"
        description="F&S Expedited LLC provides expedited dump truck hauling, gravel delivery, and debris removal services within 1-hour of Shelby, NC. Serving Charlotte, Gastonia, Hickory, Spartanburg, and 50+ cities. Licensed & insured. Call (865) 364-9011."
        canonical="/"
        schema={combinedSchema}
      />
      <Navigation />
      {/* Breadcrumb Navigation */}
      <Breadcrumb aria-label="breadcrumb" className="container px-4 pt-6">
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
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyChooseUs />
                        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
