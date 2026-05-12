import React from "react";
import { useParams, Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, CheckCircle, ArrowLeft } from "lucide-react";
import { services, serviceCategories } from "@/data/services";
import { trackServicePageView, trackPhoneClick, trackGetQuoteClick } from "@/lib/analytics";
import { serviceSchema, breadcrumbSchema } from "@/data/seo-schemas";

const SubServicePage = () => {
  const { category, service } = useParams<{ category: string; service: string }>();
  
  // Find the service data
  const serviceData = services.find(s => s.slug === service);
  const categoryData = serviceCategories.find(c => c.slug === category);
  
  if (!serviceData || !categoryData) {
    return <div>Service not found</div>;
  }

  // Track page view
  React.useEffect(() => {
    trackServicePageView(serviceData.title, categoryData.title);
  }, [serviceData.title, categoryData.title]);

  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Services", url: "https://www.fs-expeditedllc.com/services" },
    { name: categoryData.title, url: `https://www.fs-expeditedllc.com/services/${category}` },
    { name: serviceData.title, url: `https://www.fs-expeditedllc.com/services/${category}/${service}` }
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      serviceSchema(serviceData.title, serviceData.description),
      breadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${serviceData.title} | ${categoryData.title} | F&S Expedited LLC`}
        description={serviceData.description}
        canonical={`/services/${category}/${service}`}
        schema={combinedSchema}
      />
      <Navigation />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                to={`/services/${category}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {categoryData.title}
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-wider mb-6">
                {serviceData.title}
              </h1>
              
              <p className="text-xl text-muted-foreground font-sans mb-8 leading-relaxed">
                {serviceData.description}
              </p>

              {/* Quick CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact" onClick={() => trackGetQuoteClick('Get Free Quote', 'service_page_hero')}>
                    Get Free Quote
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="tel:8653649011" onClick={() => trackPhoneClick('8653649011', 'service_page_hero')}>
                    <Phone className="w-5 h-5" />
                    Call (865) 364-9011
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Description */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-foreground tracking-wider mb-6">
                    About This Service
                  </h2>
                  <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                    {serviceData.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground tracking-wider mb-6">
                    Service Features
                  </h3>
                  <ul className="space-y-3">
                    {serviceData.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-sans">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-16">
                <h3 className="text-2xl font-heading font-bold text-foreground tracking-wider mb-8 text-center">
                  Why Choose F&S Expedited for {serviceData.title}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {serviceData.benefits.map((benefit, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-6">
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-foreground font-semibold font-sans">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground font-sans mb-8">
                Contact us today for a free estimate on your {serviceData.title.toLowerCase()} project.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact" onClick={() => trackGetQuoteClick('Get Free Quote', 'service_page_cta')}>
                    Get Free Quote
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="tel:8653649011" onClick={() => trackPhoneClick('8653649011', 'service_page_cta')}>
                    <Phone className="w-5 h-5" />
                    Call (865) 364-9011
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubServicePage;
