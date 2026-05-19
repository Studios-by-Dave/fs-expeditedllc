import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { services, serviceCategories } from "@/data/services";
import { ArrowRight, CheckCircle, Truck, Phone } from "lucide-react";

const SITE_URL = "https://www.fs-expeditedllc.com";

const DumpTrucksServicesPage = () => {
  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dump Trucks - Hauling and Services",
    "description": "Complete dump truck hauling and comprehensive site services for construction, landscaping, and emergency needs",
    "provider": {
      "@type": "LocalBusiness",
      "name": "F&S Expedited LLC",
      "telephone": "(865) 364-9011",
      "email": "Aldrich2577@gmail.com",
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 35.2924,
        "longitude": -81.5356,
      },
      "geoRadius": "160934",
    },
    "url": `${SITE_URL}/services/dump-trucks-hauling-services`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services` },
      { "@type": "ListItem", "position": 3, "name": "Dump Trucks - Hauling and Services", "item": `${SITE_URL}/services/dump-trucks-hauling-services` },
    ],
  };

  return (
    <>
      <SEOHead
        title="Dump Trucks - Hauling and Services | F&S Expedited LLC"
        description="Complete dump truck hauling and comprehensive site services: material delivery, site preparation, debris removal, emergency expedited services near Shelby, NC"
        url={`${SITE_URL}/services/dump-trucks-hauling-services`}
        schemas={[categorySchema, breadcrumbSchema]}
      />

      <Navigation />

      <main className="min-h-screen pt-32">
        {/* Hero Content Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Truck className="mx-auto w-16 h-16 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Dump Trucks - Hauling and Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Complete dump truck hauling and comprehensive site services for all your construction, landscaping, and emergency needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:8653649011">
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Call (865) 364-9011
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* All Service Categories */}
        {serviceCategories.map((category) => {
          if (category.slug === 'dump-trucks-hauling-services') return null;
          
          const categoryServices = services.filter((service) => service.category === category.slug);
          
          return (
            <section key={category.slug} className="py-20 bg-background">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Subcategories */}
                {(category.slug === 'material-delivery' || category.slug === 'site-services' || category.slug === 'emergency-expedited') && category.subcategories && (
                  <div className={`grid gap-8 max-w-6xl mx-auto mb-12 ${category.slug === 'site-services' ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                    {category.subcategories?.map((subcategory, index) => {
                      const serviceData = services.find(s => s.title === subcategory.title);
                      const serviceSlug = serviceData?.slug || subcategory.title.toLowerCase().replace(/\s+/g, '-');
                      
                      return (
                        <Link 
                          key={index} 
                          to={`/services/${category.slug}/${serviceSlug}`}
                          className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors block group"
                        >
                          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <div className="text-2xl">
                              {category.slug === 'material-delivery' && (
                                <>
                                  {subcategory.title === 'Gravel Delivery' && '🪨'}
                                  {subcategory.title === 'Sand Delivery' && '🏖️'}
                                  {subcategory.title === 'Soil Delivery' && '🌱'}
                                </>
                              )}
                              {category.slug === 'site-services' && (
                                <>
                                  {subcategory.title === 'Land Clearing' && '🌲'}
                                  {subcategory.title === 'Site Prep' && '🏗️'}
                                  {subcategory.title === 'Debris Removal' && '🗑️'}
                                  {subcategory.title === 'Aggregate Transport' && '🚚'}
                                  {subcategory.title === 'Retaining Walls' && '🛡️'}
                                  {subcategory.title === 'Underground Utilities' && '🔧'}
                                  {subcategory.title === 'Land Grading' && '⛰️'}
                                </>
                              )}
                              {category.slug === 'emergency-expedited' && (
                                <>
                                  {subcategory.title === 'Emergency Expedited' && '⚡'}
                                  {subcategory.title === 'Commercial Hauling' && '🚛'}
                                  {subcategory.title === 'Dump Truck Hauling' && '🚚'}
                                </>
                              )}
                            </div>
                          </div>
                          <h3 className="text-2xl font-heading font-semibold text-foreground mb-4 text-center group-hover:text-primary transition-colors">
                            {subcategory.title}
                          </h3>
                          <p className="text-muted-foreground mb-6 text-center">
                            {subcategory.description}
                          </p>
                          <div className="space-y-2">
                            {subcategory.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 text-center">
                            <span className="text-primary font-semibold text-sm group-hover:underline">
                              Learn More →
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}

                {/* Individual Services */}
                {categoryServices.length > 0 && (
                  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {categoryServices.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/50"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <service.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {service.features.slice(0, 3).map((feature, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                              Learn More
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-primary/10 rounded-2xl p-12 border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today for a free quote and let us show you why we're the trusted choice for dump truck hauling and site services in the Shelby, NC area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:8653649011">
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Call (865) 364-9011
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTABanner />
      <Footer />
    </>
  );
};

export default DumpTrucksServicesPage;
