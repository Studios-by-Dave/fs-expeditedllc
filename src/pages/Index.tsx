import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceArea } from "@/components/ServiceArea";
import { Process } from "@/components/Process";
import { CTABanner } from "@/components/CTABanner";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { localBusinessSchema, websiteSchema, breadcrumbSchema } from "@/data/seo-schemas";

const Index = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://fs-expeditedllc.lovable.app/" }
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema,
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
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <CTABanner />
        <ServiceArea />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
