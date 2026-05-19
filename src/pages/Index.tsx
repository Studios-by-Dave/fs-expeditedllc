import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceArea } from "@/components/ServiceArea";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { BlogPreview } from "@/components/BlogPreview";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
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
        title="F&S Expedited LLC | Dump Truck & Hauling Services Shelby NC"
        description="F&S Expedited LLC — Professional dump truck hauling, gravel delivery, debris removal & expedited services within 100 miles of Shelby, NC. Licensed & insured. Call (865) 364-9011 for fast, reliable hauling services."
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
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
