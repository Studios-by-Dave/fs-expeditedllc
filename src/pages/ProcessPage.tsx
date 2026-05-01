import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Process } from "@/components/Process";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema } from "@/data/seo-schemas";

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
      <main className="pt-20">
        <Process />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default ProcessPage;
