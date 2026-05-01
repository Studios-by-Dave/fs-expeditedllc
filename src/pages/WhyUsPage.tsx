import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema } from "@/data/seo-schemas";

const WhyUsPage = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Why Choose Us", url: "https://www.fs-expeditedllc.com/why-us" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Why Choose F&S Expedited LLC — Licensed & Insured Hauling"
        description="Licensed, insured, and reliable. F&S Expedited offers fast turnaround, competitive rates, and a modern fleet for dump truck hauling near Shelby, NC."
        canonical="/why-us"
        schema={breadcrumbSchema(breadcrumbs)}
      />
      <Navigation />
      <main className="pt-20">
        <WhyChooseUs />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default WhyUsPage;
