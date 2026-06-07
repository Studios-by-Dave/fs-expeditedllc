import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle, Truck, Phone, MapPin, Clock, Shield, Users, Package, Building2 } from "lucide-react";

const SITE_URL = "https://www.fs-expeditedllc.com";

const CharlotteNCPage = () => {
  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.fs-expeditedllc.com#charlotte-nc",
    "name": "F&S Expedited LLC - Charlotte, NC",
    "description": "Professional dump truck hauling services in Charlotte, NC. Large-scale commercial projects, construction debris removal, gravel delivery, and expedited hauling for Mecklenburg County.",
    "url": "https://www.fs-expeditedllc.com/service-area/charlotte-nc",
    "telephone": "+18653649011",
    "email": "Aldrich2577@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Charlotte",
      "addressRegion": "NC",
      "postalCode": "28202",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.2271,
      "longitude": -80.8431
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 35.2271,
        "longitude": -80.8431
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
      { "@type": "ListItem", "position": 3, "name": "Charlotte, NC", "item": `${SITE_URL}/service-area/charlotte-nc` },
    ],
  };

  const charlotteServices = [
    { name: "Commercial Construction Hauling", desc: "Large-scale dump truck services for Charlotte commercial projects", icon: "🏢" },
    { name: "Site Development Services", desc: "Complete material transport for Charlotte development sites", icon: "🏗️" },
    { name: "Infrastructure Projects", desc: "Dump truck support for Charlotte public works and infrastructure", icon: "🛣️" },
    { name: "Industrial Hauling", desc: "Heavy-duty material transport for Charlotte industrial facilities", icon: "🏭" },
    { name: "Emergency Response", desc: "Rapid response hauling for Charlotte urgent construction needs", icon: "⚡" },
    { name: "Fleet Management", desc: "Multiple truck coordination for large Charlotte projects", icon: "🚚" },
  ];

  const charlotteAdvantages = [
    { title: "Metro Area Expertise", desc: "Experienced in Charlotte's large-scale commercial and industrial projects" },
    { title: "Fleet Capacity", desc: "Multiple trucks available for simultaneous Charlotte job sites" },
    { title: "Strategic Location", desc: "45 minutes from Shelby - optimal response time for Charlotte metro" },
    { title: "Commercial Focus", desc: "Specialized equipment and experience for Charlotte's construction industry" },
  ];

  const charlotteAreas = [
    "Uptown Charlotte", "South End", "NoDa", "Plaza Midwood", "Dilworth",
    "SouthPark", "Ballantyne", "University City", "Huntersville", "Matthews",
    "Mooresville", "Concord", "Gastonia", "Fort Mill", "Pineville"
  ];

  return (
    <>
      <SEOHead
        title="Dump Truck Hauling Services Charlotte NC | F&S Expedited LLC | Commercial Projects"
        description="Professional dump truck hauling services in Charlotte, NC. Large-scale commercial projects, construction debris removal, fleet capacity for Mecklenburg County. Call for commercial quote!"
        url={`${SITE_URL}/service-area/charlotte-nc`}
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
                Dump Truck Hauling Services in Charlotte, NC
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Large-scale dump truck hauling for Charlotte's commercial construction and development projects. 
                Fleet capacity, experienced operators, and reliable service for Mecklenburg County's biggest jobs.
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
                    Get Commercial Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Charlotte Information Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                    Largest Metro Market
                  </span>
                  <h2 className="mt-4 text-3xl font-heading font-bold text-foreground mb-6">
                    Serving Charlotte & Mecklenburg County
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    As Charlotte's trusted dump truck hauling partner, we bring the capacity and expertise needed for 
                    the Queen City's largest construction and development projects. Our strategic location just 45 minutes 
                    from Charlotte allows us to provide responsive service while maintaining the competitive pricing 
                    and personal attention that sets us apart from larger metro competitors.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Multiple trucks for large-scale projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground">45-minute response time to Charlotte</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Commercial construction specialists</span>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Charlotte Service Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {charlotteAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-primary" />
                        <span className="text-muted-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Response Time:</strong> 45 minutes to Charlotte metro
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <strong>Service Focus:</strong> Commercial & industrial projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Charlotte Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Commercial Services
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                CHARLOTTE SPECIALIZED SERVICES
              </h2>
              <p className="mt-4 text-muted-foreground text-lg font-sans">
                Heavy-duty dump truck and hauling services designed for Charlotte's commercial construction and development needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {charlotteServices.map((service, index) => (
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

        {/* Why Choose F&S in Charlotte Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Metro Advantage
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                WHY CHARLOTTE CHOOSES F&S
              </h2>
              <p className="mt-4 text-muted-foreground text-lg font-sans">
                Big city capability with local company service and pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {charlotteAdvantages.map((advantage, index) => (
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

        {/* Fleet Capacity Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                  Fleet Resources
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                  CHARLOTTE FLEET CAPACITY
                </h2>
                <p className="mt-4 text-muted-foreground text-lg font-sans">
                  Multiple trucks ready for Charlotte's largest construction projects.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center bg-card border border-border rounded-xl p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Multiple Trucks
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Fleet capacity for simultaneous Charlotte job sites
                  </p>
                </div>
                <div className="text-center bg-card border border-border rounded-xl p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Heavy-Duty Equipment
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Tri-axle trucks for Charlotte's largest loads
                  </p>
                </div>
                <div className="text-center bg-card border border-border rounded-xl p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Experienced Team
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Commercial construction specialists
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Charlotte CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-card rounded-2xl p-12 border border-border">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Ready for Charlotte Project Support?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're developing in Uptown, building in SouthPark, or working anywhere in the Charlotte metro area, 
                  we have the fleet capacity and expertise to keep your commercial project on schedule.
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

export default CharlotteNCPage;
