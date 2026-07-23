import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle, Truck, Phone, MapPin, Clock, Shield, Users, Package, Building2 } from "lucide-react";

const SITE_URL = "https://www.fs-expeditedllc.com";

const ForestCityNCPage = () => {
  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.fs-expeditedllc.com#forest-city-nc",
    "name": "F&S Expedited LLC - Forest City, NC",
    "description": "Professional dump truck hauling services in Forest City, NC. Residential and commercial hauling, gravel delivery, site preparation, and expedited services for Rutherford County.",
    "url": "https://www.fs-expeditedllc.com/service-area/forest-city-nc",
    "telephone": "+18653649011",
    "email": "Aldrich2577@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Forest City",
      "addressRegion": "NC",
      "postalCode": "28043",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.3357,
      "longitude": -81.8743
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 35.3357,
        "longitude": -81.8743
      },
      "geoRadius": "80467"
    },
    "openingHours": "Mo-Fr 06:00-18:00",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Check", "Credit Card"],
    "currenciesAccepted": "USD"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Service Area", "item": `${SITE_URL}/service-area` },
      { "@type": "ListItem", "position": 3, "name": "Forest City, NC", "item": `${SITE_URL}/service-area/forest-city-nc` },
    ],
  };

  const forestCityServices = [
    { name: "Residential Hauling", desc: "Home construction and renovation material transport for Forest City residents", icon: "🏠" },
    { name: "Commercial Projects", desc: "Small to medium commercial hauling for Forest City businesses", icon: "🏢" },
    { name: "Gravel & Sand Delivery", desc: "Driveway and landscaping material delivery for Forest City properties", icon: "🚚" },
    { name: "Site Preparation", desc: "Land clearing and site prep for Forest City construction projects", icon: "🏗️" },
    { name: "Debris Removal", desc: "Construction and demolition debris hauling for Forest City sites", icon: "🗑️" },
    { name: "Emergency Services", desc: "Rapid response hauling for urgent Forest City needs", icon: "⚡" },
  ];

  const forestCityAdvantages = [
    { title: "Local Presence", desc: "Serving Forest City and Rutherford County with quick response times" },
    { title: "Affordable Pricing", desc: "Competitive rates for Forest City residential and commercial projects" },
    { title: "Flexible Scheduling", desc: "Accommodating Forest City project timelines and deadlines" },
    { title: "Experienced Team", desc: "Knowledgeable about Forest City's local requirements and regulations" },
  ];

  const forestCityAreas = [
    "Forest City", "Rutherfordton", "Spindale", "Ruth", "Ellenboro",
    "Bostic", "Cliffside", "Caroleen", "Mooresboro", "Sunset Beach",
    "Lake Lure", "Chimney Rock", "Gastonia", "Shelby", "Kings Mountain"
  ];

  return (
    <>
      <SEOHead
        title="Dump Truck Hauling Services Forest City NC | F&S Expedited LLC | Rutherford County"
        description="Professional dump truck hauling services in Forest City, NC. Residential and commercial hauling, gravel delivery, site preparation for Rutherford County. Call for quote!"
        url={`${SITE_URL}/service-area/forest-city-nc`}
        schemas={[citySchema, breadcrumbSchema]}
      />

      <Navigation />

      <main className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Building2 className="mx-auto w-16 h-16 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Dump Truck Hauling Services in Forest City, NC
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Reliable dump truck hauling for Forest City's residential and commercial projects. 
                Gravel delivery, site preparation, and debris removal for Rutherford County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:8653649011">
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Call (865) 364-9011
                  </button>
                </a>
                <Link to="/contact">
                  <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                    Get Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Forest City Information Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                    Rutherford County Service
                  </span>
                  <h2 className="mt-4 text-3xl font-heading font-bold text-foreground mb-6">
                    Serving Forest City & Rutherford County
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Forest City is our home base in Rutherford County, providing reliable dump truck hauling 
                    services for residential and commercial projects. From driveway gravel delivery to 
                    commercial site preparation, we deliver the professional service and local expertise 
                    that Forest City residents and businesses trust.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Quick response to Forest City area</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Flexible scheduling for your timeline</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Local knowledge of Rutherford County</span>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <img
                    src="/assets/forest city nc_1.jpeg"
                    alt="Forest City, NC dump truck hauling services"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                      Forest City Service Areas
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {forestCityAreas.map((area, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          <span className="text-muted-foreground">{area}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <strong>Response Time:</strong> 30 minutes to Forest City
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Service Focus:</strong> Residential & commercial projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Forest City Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Local Services
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                FOREST CITY SPECIALIZED SERVICES
              </h2>
              <p className="mt-4 text-muted-foreground text-lg font-sans">
                Comprehensive dump truck and hauling services designed for Forest City's residential and commercial needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {forestCityServices.map((service, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose F&S in Forest City Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Local Advantage
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                WHY FOREST CITY CHOOSES F&S
              </h2>
              <p className="mt-4 text-muted-foreground text-lg font-sans">
                Local service with professional results at competitive prices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {forestCityAdvantages.map((advantage, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Package className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {advantage.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Forest City CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-card rounded-2xl p-12 border border-border">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Ready for Forest City Project Support?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're building a new home, renovating in Forest City, or need commercial hauling 
                  anywhere in Rutherford County, we have the equipment and expertise to get the job done right.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:8653649011">
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Call (865) 364-9011
                    </button>
                  </a>
                  <a href="tel:17047518141">
                    <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Call (704) 751-8141
                    </button>
                  </a>
                </div>
                <div className="mt-6">
                  <Link to="/service-area" className="text-primary hover:underline">
                    ← View Other Service Areas
                  </Link>
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

export default ForestCityNCPage;
