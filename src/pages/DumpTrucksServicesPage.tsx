import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { serviceCategories } from "@/data/services";
import { ArrowRight, CheckCircle, Truck, Phone, Users, Package, Shield, Clock } from "lucide-react";

const SITE_URL = "https://www.fs-expeditedllc.com";

const DumpTrucksServicesPage = () => {
  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dump Truck Hauling Services",
    "description": "Professional dump truck hauling for construction debris, gravel delivery, fill dirt, sand, and site-to-site material transport within 1-hour of Shelby, NC",
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
      { "@type": "ListItem", "position": 3, "name": "Dump Truck Hauling", "item": `${SITE_URL}/services/dump-trucks-hauling-services` },
    ],
  };

  const materialsHauled = [
    { name: "Construction Debris", description: "Concrete, wood, drywall, and demolition waste", icon: "🗑️" },
    { name: "Gravel & Aggregates", description: "#57 stone, crusher run, river rock, and road base", icon: "🪨" },
    { name: "Fill Dirt & Topsoil", description: "Screened topsoil, compactable fill dirt, and garden soil", icon: "🌱" },
    { name: "Sand Types", description: "Masonry sand, play sand, fill sand, and concrete sand", icon: "🏖️" },
    { name: "Site-to-Site Transport", description: "Moving materials between job sites efficiently", icon: "🚚" },
    { name: "Specialty Materials", description: "Recycled concrete, asphalt millings, and custom aggregates", icon: "⚙️" },
  ];

  const fleetSpecs = [
    { spec: "Tandem Axle Trucks", capacity: "15-20 tons per load", description: "Standard dump trucks for most residential and commercial jobs" },
    { spec: "Tri-Axle Trucks", capacity: "25+ tons per load", description: "Heavy-duty trucks for large construction projects" },
    { spec: "Modern Fleet", capacity: "Well-maintained equipment", description: "All trucks regularly serviced and safety inspected" },
    { spec: "Flexible Scheduling", capacity: "Same-day available", description: "Multiple trucks ready for dispatch when you need them" },
  ];

  const targetAudience = [
    { type: "General Contractors", desc: "Large-scale construction and development projects" },
    { type: "Homeowners", desc: "Driveways, landscaping, and residential projects" },
    { type: "Developers", desc: "Site preparation and material transport for new builds" },
    { type: "Landscaping Companies", desc: "Bulk material delivery for commercial properties" },
    { type: "Municipal Projects", desc: "Public works and infrastructure development" },
    { type: "Industrial Clients", desc: "Manufacturing facilities and industrial sites" },
  ];

  return (
    <>
      <SEOHead
        title="Dump Truck Hauling Services | F&S Expedited LLC | Shelby NC"
        description="Professional dump truck hauling for construction debris, gravel, fill dirt, and sand. Serving Charlotte, Gastonia, Hickory and within 1-hour of Shelby, NC. Call for fast quote!"
        url={`${SITE_URL}/services/dump-trucks-hauling-services`}
        schemas={[categorySchema, breadcrumbSchema]}
      />

      <Navigation />

      <main className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/assets/gallery/fleet-sterling-trucks.jpg"
              alt="F&S Expedited LLC Sterling dump trucks fleet"
              className="w-full h-full object-cover opacity-15"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Truck className="mx-auto w-16 h-16 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Dump Truck Hauling Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional dump truck hauling for construction debris, gravel delivery, fill dirt, and site-to-site material transport. Fast, reliable service within 1-hour of Shelby, NC.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 animate-pulse">Call Joe!</span>
                  <a href="tel:8653649011">
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      <Phone className="inline w-4 h-4 mr-2" />
                      (865) 364-9011
                    </button>
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 animate-pulse">Call Luke!</span>
                  <a href="tel:7047518141">
                    <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                      <Phone className="inline w-4 h-4 mr-2" />
                      (704) 751-8141
                    </button>
                  </a>
                </div>
                <Link to="/contact">
                  <button className="bg-background border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors mt-6 sm:mt-0">
                    Get Free Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Showcase Image */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <img
                src="/assets/gallery/kenworth-w990-jobsite.jpg"
                alt="F&S Expedited LLC Kenworth W990 dump truck at construction jobsite"
                className="w-full h-auto rounded-xl border border-border shadow-lg"
                loading="lazy"
              />
              <p className="text-center text-sm text-muted-foreground mt-3 font-sans">Our Kenworth W990 "PaPaw" ready for action at the jobsite</p>
            </div>
          </div>
        </section>

        {/* What We Haul Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Materials We Transport
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                WHAT WE HAUL
              </h2>
              <p className="mt-4 text-muted-foreground text-lg font-sans">
                From construction debris to specialty aggregates, we handle all types of material transport for your project needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {materialsHauled.map((material, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">{material.icon}</span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {material.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {material.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet & Capacity Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Equipment & Capacity
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                FLEET & CAPACITY
              </h2>
              <p className="mt-4 text-muted-foreground text-lg font-sans">
                Modern dump truck fleet with various capacity options to handle projects of any size.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {fleetSpecs.map((spec, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Truck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                        {spec.spec}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-2">
                        {spec.capacity}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Service Is For Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Ideal Clients
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                WHO THIS SERVICE IS FOR
              </h2>
              <p className="mt-4 text-muted-foreground text-lg font-sans">
                Our dump truck hauling services are designed to meet the specific needs of various project types and clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {targetAudience.map((audience, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                        {audience.type}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {audience.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why F&S for Dump Truck Services Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Service Excellence
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                WHY CHOOSE F&S FOR DUMP TRUCK HAULING
              </h2>
              <p className="mt-4 text-muted-foreground text-lg font-sans">
                Service-specific advantages that make us the preferred choice for dump truck hauling in the Shelby area.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Licensed & Insured
                </h3>
                <p className="text-muted-foreground text-sm">
                  Fully licensed operators and comprehensive insurance coverage for peace of mind
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  On-Time Delivery
                </h3>
                <p className="text-muted-foreground text-sm">
                  Punctual service that keeps your project on schedule with reliable timelines
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Local Expertise
                </h3>
                <p className="text-muted-foreground text-sm">
                  Deep knowledge of Shelby area roads, regulations, and project requirements
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Other Services
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                RELATED SERVICES
              </h2>
              <p className="mt-4 text-muted-foreground text-lg font-sans">
                Explore our other hauling and site services that complement your dump truck needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {serviceCategories
                .filter(category => category.slug !== 'dump-trucks-hauling-services')
                .slice(0, 3)
                .map((category) => (
                  <Link
                    key={category.slug}
                    to={`/services/${category.slug}`}
                    className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors block"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      {category.slug === 'material-delivery' && (
                        <span className="text-2xl">🪨</span>
                      )}
                      {category.slug === 'site-services' && (
                        <span className="text-2xl">🏗️</span>
                      )}
                      {category.slug === 'emergency-expedited' && (
                        <span className="text-2xl">⚡</span>
                      )}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Single CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-card rounded-2xl p-12 border border-border">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Ready to Haul?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Call Joe or Luke for a free quote on your dump truck hauling needs. Fast, reliable service for construction, landscaping, and site projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 animate-pulse">Call Joe!</span>
                    <a href="tel:8653649011">
                      <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                        <Phone className="inline w-4 h-4 mr-2" />
                        (865) 364-9011
                      </button>
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 animate-pulse">Call Luke!</span>
                    <a href="tel:7047518141">
                      <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                        <Phone className="inline w-4 h-4 mr-2" />
                        (704) 751-8141
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DumpTrucksServicesPage;
