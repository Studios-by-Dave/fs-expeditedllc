import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle, Truck, Phone, MapPin, Clock, Shield, Users, Package } from "lucide-react";

const SITE_URL = "https://www.fs-expeditedllc.com";

const ShelbyNCPage = () => {
  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.fs-expeditedllc.com#shelby-nc",
    "name": "F&S Expedited LLC - Shelby, NC",
    "description": "Premier dump truck hauling services in Shelby, NC. Local experts providing expedited hauling, gravel delivery, debris removal, and site services with fastest response times in Cleveland County.",
    "url": "https://www.fs-expeditedllc.com/service-area/shelby-nc",
    "telephone": "+18653649011",
    "email": "Aldrich2577@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Shelby",
      "addressRegion": "NC",
      "postalCode": "28152",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.2924,
      "longitude": -81.5356
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 35.2924,
        "longitude": -81.5356
      },
      "geoRadius": "160934"
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
      { "@type": "ListItem", "position": 3, "name": "Shelby, NC", "item": `${SITE_URL}/service-area/shelby-nc` },
    ],
  };

  const localServices = [
    { name: "Same-Day Dump Truck Hauling", desc: "Immediate response for Shelby and Cleveland County projects", icon: "🚚" },
    { name: "Gravel & Stone Delivery", desc: "Local suppliers, fast delivery to any Shelby location", icon: "🪨" },
    { name: "Construction Debris Removal", desc: "Quick cleanup for Shelby construction sites", icon: "🗑️" },
    { name: "Site Preparation", desc: "Land grading and prep for Shelby development projects", icon: "🏗️" },
    { name: "Fill Dirt & Topsoil", desc: "Quality soil delivery for Shelby landscaping projects", icon: "🌱" },
    { name: "Emergency Hauling", desc: "24/7 emergency service for Shelby urgent needs", icon: "⚡" },
  ];

  const shelbyAdvantages = [
    { title: "Home Base Advantage", desc: "We're located right here in Shelby - fastest response times guaranteed" },
    { title: "Local Knowledge", desc: "Deep understanding of Shelby roads, regulations, and project requirements" },
    { title: "Cleveland County Expert", desc: "Most experienced dump truck service in Shelby and surrounding areas" },
    { title: "Immediate Availability", desc: "Fleet ready for dispatch - no travel time to reach your job site" },
  ];

  const neighborhoods = [
    "Downtown Shelby", "South Shelby", "West Shelby", "East Shelby", "North Shelby",
    "Shelby Heights", "Fallston", "Lawndale", "Waco", "Polkville"
  ];

  return (
    <>
      <SEOHead
        title="Dump Truck Hauling Services Shelby NC | F&S Expedited LLC | Local Experts"
        description="Premier dump truck hauling services in Shelby, NC. Same-day response, local experts, fastest service in Cleveland County. Call for immediate quote!"
        url={`${SITE_URL}/service-area/shelby-nc`}
        schemas={[citySchema, breadcrumbSchema]}
      />

      <Navigation />

      <main className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <MapPin className="mx-auto w-16 h-16 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Dump Truck Hauling Services in Shelby, NC
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your local dump truck hauling experts - home-based in Shelby for fastest response times. 
                Same-day service for construction, landscaping, and site projects throughout Cleveland County.
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
                    Get Free Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Shelby Information Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                    Home Base Location
                  </span>
                  <h2 className="mt-4 text-3xl font-heading font-bold text-foreground mb-6">
                    Serving Shelby & Cleveland County
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    As Shelby's premier dump truck hauling service, we're proud to call this community home. 
                    Our local presence means zero travel time to reach your job site, immediate dispatch capability, 
                    and unmatched knowledge of Cleveland County's roads, regulations, and construction requirements.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Immediate response - no travel time</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Local experts on Shelby roads and regulations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Fully licensed and insured in North Carolina</span>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Shelby Service Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {neighborhoods.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-primary" />
                        <span className="text-muted-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Response Time:</strong> Under 1 hour to any Shelby location
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <strong>Service Radius:</strong> Full Cleveland County coverage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Shelby Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Local Services
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                SERVICES IN SHELBY, NC
              </h2>
              <p className="mt-4 text-muted-foreground text-lg font-sans">
                Specialized dump truck and hauling services tailored for Shelby's construction and development needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {localServices.map((service, index) => (
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

        {/* Why Choose F&S in Shelby Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Local Advantage
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                WHY CHOOSE F&S IN SHELBY
              </h2>
              <p className="mt-4 text-muted-foreground text-lg font-sans">
                Home-based advantages that make us Shelby's preferred dump truck hauling service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {shelbyAdvantages.map((advantage, index) => (
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

        {/* Response Time & Logistics Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                  Fast Service
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                  SHELBY RESPONSE TIMES
                </h2>
                <p className="mt-4 text-muted-foreground text-lg font-sans">
                  Being local means we can respond faster than any competitor in Shelby.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center bg-card border border-border rounded-xl p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Under 1 Hour
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Average response time to any Shelby location
                  </p>
                </div>
                <div className="text-center bg-card border border-border rounded-xl p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Same-Day Service
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Emergency hauling available 24/7 for Shelby projects
                  </p>
                </div>
                <div className="text-center bg-card border border-border rounded-xl p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Local Team
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Shelby-based operators who know the area intimately
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shelby CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-card rounded-2xl p-12 border border-border">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Ready for Fast Service in Shelby?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  As your local Shelby dump truck experts, we're ready to respond immediately to your hauling needs. 
                  Call Joe or Luke for fast, reliable service that keeps your Shelby project on schedule.
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

export default ShelbyNCPage;
