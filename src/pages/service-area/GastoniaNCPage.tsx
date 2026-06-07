import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle, Truck, Phone, MapPin, Clock, Shield, Users, Package, Factory } from "lucide-react";

const SITE_URL = "https://www.fs-expeditedllc.com";

const GastoniaNCPage = () => {
  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.fs-expeditedllc.com#gastonia-nc",
    "name": "F&S Expedited LLC - Gastonia, NC",
    "description": "Fastest dump truck hauling services in Gastonia, NC. 30-minute response time, industrial projects, cost-effective hauling solutions for Gaston County. Immediate service available.",
    "url": "https://www.fs-expeditedllc.com/service-area/gastonia-nc",
    "telephone": "+18653649011",
    "email": "Aldrich2577@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gastonia",
      "addressRegion": "NC",
      "postalCode": "28052",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.2621,
      "longitude": -81.1873
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 35.2621,
        "longitude": -81.1873
      },
      "geoRadius": "40234"
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
      { "@type": "ListItem", "position": 3, "name": "Gastonia, NC", "item": `${SITE_URL}/service-area/gastonia-nc` },
    ],
  };

  const gastoniaServices = [
    { name: "Industrial Hauling", desc: "Fast material transport for Gastonia industrial facilities", icon: "🏭" },
    { name: "Manufacturing Support", desc: "Just-in-time hauling for Gastonia manufacturing plants", icon: "⚙️" },
    { name: "Construction Debris", desc: "Quick cleanup for Gastonia construction sites", icon: "🗑️" },
    { name: "Site Preparation", desc: "Rapid land grading and prep for Gastonia developments", icon: "🏗️" },
    { name: "Material Delivery", desc: "Fast gravel, sand, and dirt delivery to Gastonia", icon: "🪨" },
    { name: "Emergency Response", desc: "30-minute emergency hauling for Gastonia urgent needs", icon: "⚡" },
  ];

  const gastoniaAdvantages = [
    { title: "Closest to You", desc: "Only 30 minutes from Shelby - fastest response time to Gastonia" },
    { title: "Industrial Expertise", desc: "Specialized experience with Gastonia's manufacturing and industrial clients" },
    { title: "Cost-Effective", desc: "Minimal travel time means lower costs for Gastonia projects" },
    { title: "Immediate Availability", desc: "Fleet positioned for rapid Gastonia dispatch" },
  ];

  const gastoniaAreas = [
    "Downtown Gastonia", "West Gastonia", "East Gastonia", "South Gastonia",
    "Highland", "Ranlo", "Cramerton", "Dallas", "Cherryville", "Bessemer City",
    "Mount Holly", "Belmont", "McAdenville", "Lowell", "Stanley"
  ];

  return (
    <>
      <SEOHead
        title="Dump Truck Hauling Services Gastonia NC | F&S Expedited LLC | 30-Minute Response"
        description="Fastest dump truck hauling services in Gastonia, NC. 30-minute response time, industrial projects, cost-effective hauling for Gaston County. Immediate service available!"
        url={`${SITE_URL}/service-area/gastonia-nc`}
        schemas={[citySchema, breadcrumbSchema]}
      />

      <Navigation />

      <main className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Factory className="mx-auto w-16 h-16 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Dump Truck Hauling Services in Gastonia, NC
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Fastest response time to Gastonia - just 30 minutes away. Cost-effective dump truck hauling 
                for industrial projects, construction sites, and manufacturing support throughout Gaston County.
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
                    Get Fast Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gastonia Information Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                    Closest Major City
                  </span>
                  <h2 className="mt-4 text-3xl font-heading font-bold text-foreground mb-6">
                    Serving Gastonia & Gaston County
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    As the closest major city to our Shelby base, Gastonia receives our fastest response times and 
                    most cost-effective hauling services. Our proximity to Gastonia's industrial corridor and growing 
                    construction market means we can provide immediate support for manufacturing plants, construction sites, 
                    and development projects throughout Gaston County.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground">30-minute response time to Gastonia</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Factory className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Industrial hauling specialists</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Cost-effective due to proximity</span>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Gastonia Service Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {gastoniaAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-primary" />
                        <span className="text-muted-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Response Time:</strong> 30 minutes to Gastonia
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <strong>Service Focus:</strong> Industrial & cost-effective solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Gastonia Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Fast Services
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                GASTONIA SPECIALIZED SERVICES
              </h2>
              <p className="mt-4 text-muted-foreground text-lg font-sans">
                Rapid-response dump truck and hauling services optimized for Gastonia's industrial and construction needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {gastoniaServices.map((service, index) => (
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

        {/* Why Choose F&S in Gastonia Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Proximity Advantage
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                WHY GASTONIA CHOOSES F&S
              </h2>
              <p className="mt-4 text-muted-foreground text-lg font-sans">
                Closest service means fastest response and most competitive pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {gastoniaAdvantages.map((advantage, index) => (
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

        {/* Response Time Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                  Speed Advantage
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                  GASTONIA RESPONSE TIMES
                </h2>
                <p className="mt-4 text-muted-foreground text-lg font-sans">
                  Being closest to Gastonia means we can respond faster than anyone else.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center bg-card border border-border rounded-xl p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    30 Minutes
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Average response time to Gastonia locations
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
                    Emergency hauling available immediately for Gastonia
                  </p>
                </div>
                <div className="text-center bg-card border border-border rounded-xl p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Industrial Focus
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Specialized equipment for Gastonia industrial needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gastonia CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-card rounded-2xl p-12 border border-border">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Need Fast Service in Gastonia?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  As Gastonia's closest dump truck service, we're ready to respond in 30 minutes or less. 
                  Call Joe or Luke for the fastest, most cost-effective hauling solutions in Gaston County.
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

export default GastoniaNCPage;
