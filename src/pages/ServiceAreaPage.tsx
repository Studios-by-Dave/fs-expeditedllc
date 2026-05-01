import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { ServiceArea } from "@/components/ServiceArea";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema } from "@/data/seo-schemas";

const ServiceAreaPage = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Service Area", url: "https://www.fs-expeditedllc.com/service-area" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Service Area — 100-Mile Radius of Shelby NC"
        description="F&S Expedited serves all areas within 100 miles of Shelby, NC (28152) including Charlotte, Gastonia, Hickory, Asheville, Greenville & Spartanburg."
        canonical="/service-area"
        schema={breadcrumbSchema(breadcrumbs)}
      />
      <Navigation />
      <main className="pt-20">
        <ServiceArea />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceAreaPage;
