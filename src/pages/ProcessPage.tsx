import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Process } from "@/components/Process";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema } from "@/data/seo-schemas";
import { ChevronRight } from "lucide-react";

const ProcessPage = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "How We Work", url: "https://www.fs-expeditedllc.com/process" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How We Work — Our Hauling Process"
        description="Simple and transparent: call for a quote, schedule your haul, and we deliver on time. See how F&S Expedited gets the job done in 4 easy steps."
        canonical="/process"
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
        <Process />
        <section className="py-12 bg-background">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <img
                src="/assets/gallery/papaw-truck-closeup.jpg"
                alt="F&S Expedited LLC PaPaw dump truck ready for hauling service"
                className="w-full h-64 md:h-96 object-cover rounded-xl border border-border shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default ProcessPage;
