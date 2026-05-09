import { useParams, Link, Navigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { services, serviceCategories } from "@/data/services";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";

const SITE_URL = "https://www.fs-expeditedllc.com";

const ServiceCategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = serviceCategories.find((c) => c.slug === slug);

  if (!category) return <Navigate to="/services" replace />;

  const categoryServices = services.filter((service) => service.category === slug);

  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": category.title,
    "description": category.description,
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
    "url": `${SITE_URL}/services/${category.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services` },
      { "@type": "ListItem", "position": 3, "name": category.title, "item": `${SITE_URL}/services/${category.slug}` },
    ],
  };

  return (
    <>
      <SEOHead
        title={`${category.title} | F&S Expedited LLC`}
        description={category.description}
        url={`${SITE_URL}/services/${category.slug}`}
        schemas={[categorySchema, breadcrumbSchema]}
      />

      <Navigation />

      <main className="min-h-screen pt-24">
        {/* Hero Image Section */}
        {category.backgroundImage && (
          <section className="relative py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <img 
                  src={category.backgroundImage}
                  alt={`${category.title} - F&S Expedited LLC`}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
        )}

        {/* Hero Content Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                {category.slug === 'material-delivery' && '🚚'}
                {category.slug === 'site-services' && '🏗️'}
                {category.slug === 'emergency-expedited' && '⚡'}
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                {category.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {category.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:8653649011">
                    <Phone className="mr-2 h-4 w-4" />
                    Call (865) 364-9011
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Subcategories Section - Only for Material Delivery, Site Services, and Emergency Expedited */}
        {(category.slug === 'material-delivery' || category.slug === 'site-services' || category.slug === 'emergency-expedited') && category.subcategories && (
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  {category.slug === 'material-delivery' ? 'Our Material Delivery Services' : 
                   category.slug === 'site-services' ? 'Our Site Services' : 
                   'Our Emergency Expedited Services'}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {category.slug === 'material-delivery' 
                    ? 'At F&S Expedited, we deliver premium quality materials directly to your job site. Whether you\'re building a new driveway, landscaping your property, or working on a large construction project, we have the right materials for your needs.'
                    : category.slug === 'site-services'
                    ? 'Every successful construction project starts with proper site preparation and management. At F&S Expedited, our comprehensive site services ensure your property is ready for development, from initial clearing to final cleanup.'
                    : 'When time is critical, F&S Expedited delivers. Our emergency and expedited services provide rapid response for urgent material needs, last-minute project changes, and time-sensitive hauling requirements. We prioritize speed without compromising quality or safety.'}
                </p>
              </div>

              <div className={`grid gap-8 max-w-6xl mx-auto ${category.slug === 'site-services' ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                {category.subcategories.map((subcategory, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        {category.slug === 'material-delivery' && (
                          <>
                            {subcategory.title === 'Gravel Delivery' && '🪨'}
                            {subcategory.title === 'Sand Delivery' && '🏖️'}
                            {subcategory.title === 'Soil Delivery' && '🌱'}
                          </>
                        )}
                        {category.slug === 'site-services' && (
                          <>
                            {subcategory.title === 'Aggregate Transport' && '🚚'}
                            {subcategory.title === 'Site Prep' && '🏗️'}
                            {subcategory.title === 'Land Clearing' && '🌲'}
                            {subcategory.title === 'Debris Removal' && '🗑️'}
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
                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-4 text-center">
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
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  {category.slug === 'material-delivery'
                    ? 'All materials are sourced from trusted local suppliers and delivered on your schedule. We offer bulk quantities, volume discounts, and flexible delivery options to meet your project requirements.'
                    : category.slug === 'site-services'
                    ? 'Our experienced team uses modern equipment and proven techniques to deliver exceptional results. We coordinate with your project timeline and ensure all work meets your specifications and local regulations.'
                    : 'Our emergency services team is ready to respond 24/7. We understand that construction delays are costly, so we prioritize rapid response, clear communication, and reliable service to keep your projects moving forward without interruption.'}
                </p>
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">
                    {category.slug === 'material-delivery' ? 'Get Material Delivery Quote' : 
                     category.slug === 'site-services' ? 'Get Site Services Quote' : 
                     'Get Emergency Service Quote'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Services in this Category */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Services in This Category
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Click on any service to learn more about how we can help with your specific needs.
              </p>
            </div>

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
          </div>
        </section>

        {/* Related Categories */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Related Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our other service categories to see how we can support your complete project needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {serviceCategories
                .filter(cat => cat.slug !== category.slug)
                .map((relatedCategory) => (
                  <Link
                    key={relatedCategory.slug}
                    to={`/services/${relatedCategory.slug}`}
                    className="group bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <div className="text-xl">
                          {relatedCategory.slug === 'material-delivery' && '🚚'}
                          {relatedCategory.slug === 'site-services' && '🏗️'}
                          {relatedCategory.slug === 'emergency-expedited' && '⚡'}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {relatedCategory.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {relatedCategory.description}
                        </p>
                        <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                          Explore {relatedCategory.title}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Why Choose {category.title}?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We deliver exceptional service with proven results and customer satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {categoryServices.slice(0, 6).flatMap((service) =>
                service.benefits.slice(0, 2).map((benefit, index) => (
                  <div key={`${service.slug}-${index}`} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-primary/10 rounded-2xl p-12 border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today for a free quote and let us show you why we're the trusted choice for {category.title.toLowerCase()} in the Shelby, NC area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:8653649011">
                    <Phone className="mr-2 h-4 w-4" />
                    Call (865) 364-9011
                  </a>
                </Button>
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

export default ServiceCategoryPage;
