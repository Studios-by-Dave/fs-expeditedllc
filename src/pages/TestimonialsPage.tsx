import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema } from "@/data/seo-schemas";
import { ChevronRight } from "lucide-react";

const TestimonialsPage = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Reviews", url: "https://www.fs-expeditedllc.com/reviews" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Customer Reviews — F&S Expedited LLC"
        description="Read what clients say about F&S Expedited's dump truck hauling and delivery services near Shelby, NC. Real verified reviews from our customers."
        canonical="/reviews"
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
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
