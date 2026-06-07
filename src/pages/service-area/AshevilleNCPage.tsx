import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle, Truck, Phone, MapPin, Clock, Shield, Users, Package, Mountain } from "lucide-react";

const SITE_URL = "https://www.fs-expeditedllc.com";

const AshevilleNCPage = () => {
  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.fs-expeditedllc.com#asheville-nc",
    "name": "F&S Expedited LLC - Asheville, NC",
    "description": "Mountain terrain dump truck hauling specialists in Asheville, NC. Expert hauling for challenging terrain, weather considerations, and specialized Buncombe County projects.",
    "url": "https://www.fs-expeditedllc.com/service-area/asheville-nc",
    "telephone": "+18653649011",
    "email": "Aldrich2577@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Asheville",
      "addressRegion": "NC",
      "postalCode": "28801",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.5951,
      "longitude": -82.5515
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 35.5951,
        "longitude": -82.5515
      },
      "geoRadius": "96561"
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
      { "@type": "ListItem", "position": 3, "name": "Asheville, NC", "item": `${SITE_URL}/service-area/asheville-nc` },
    ],
  };

  const ashevilleServices = [
    { name: "Mountain Terrain Hauling", desc: "Specialized equipment for Asheville's challenging mountain terrain", icon: "⛰️" },
    { name: "Weather-Adaptive Services", desc: "Experienced with Asheville's variable weather conditions", icon: "🌦️" },
    { name: "Steep Grade Transport", desc: "Expert hauling on Asheville's steep grades and winding roads", icon: "🛣️" },
    { name: "Residential Mountain Projects", desc: "Specialized services for Asheville mountain home construction", icon: "🏡" },
    { name: "Commercial Development", desc: "Large-scale hauling for Asheville commercial development", icon: "🏢" },
    { name: "Emergency Mountain Response", desc: "Rapid response for Asheville urgent mountain hauling needs", icon: "⚡" },
  ];

  const ashevilleAdvantages = [
    { title: "Mountain Terrain Experts", desc: "Specialized equipment and experience for Asheville's challenging topography" },
    { title: "Weather Knowledge", desc: "Deep understanding of Asheville's seasonal weather patterns and their impact" },
    { title: "Route Optimization", desc: "Expert knowledge of Asheville mountain roads and optimal hauling routes" },
    { title: "Specialized Equipment", desc: "Right trucks and equipment for mountain-grade hauling challenges" },
  ];

  const ashevilleAreas = [
    "Downtown Asheville", "Biltmore Village", "West Asheville", "South Asheville",
    "North Asheville", "East Asheville", "Montford", "River Arts District",
    "Weaverville", "Black Mountain", "Woodfin", "Swannanoa", "Fairview", "Leicester"
  ];

  return (
    <>
      <SEOHead
        title="Dump Truck Hauling Services Asheville NC | F&S Expedited LLC | Mountain Terrain Specialists"
        description="Mountain terrain dump truck hauling specialists in Asheville, NC. Expert hauling for challenging terrain, weather considerations, and specialized Buncombe County projects. Call for mountain hauling quote!"
        url={`${SITE_URL}/service-area/asheville-nc`}
        schemas={[citySchema, breadcrumbSchema]}
      />

      <Navigation />

      <main className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Mountain className="mx-auto w-16 h-16 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Dump Truck Hauling Services in Asheville, NC
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Mountain terrain hauling specialists serving Asheville and Buncombe County. 
                Expert equipment for challenging topography, weather-adaptive services, and deep knowledge of Western North Carolina's unique hauling requirements.
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
                    Get Mountain Hauling Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Asheville Information Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                    Mountain Market Specialist
                  </span>
                  <h2 className="mt-4 text-3xl font-heading font-bold text-foreground mb-6">
                    Serving Asheville & Buncombe County
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Asheville's unique mountain terrain and variable weather conditions require specialized hauling expertise. 
                    Our team brings extensive experience in Western North Carolina's challenging topography, from steep grades 
                    to winding mountain roads. We understand the specific equipment, timing, and route considerations that make 
                    mountain hauling successful and safe in the Asheville area.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mountain className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Mountain terrain specialists</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground">1 hour 15 minutes from Shelby</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Weather-adaptive hauling solutions</span>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Asheville Service Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {ashevilleAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-primary" />
                        <span className="text-muted-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Response Time:</strong> 1 hour 15 minutes to Asheville
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <strong>Service Focus:</strong> Mountain terrain & weather expertise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Asheville Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Mountain Services
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                ASHEVILLE SPECIALIZED SERVICES
              </h2>
              <p className="mt-4 text-muted-foreground text-lg font-sans">
                Mountain-adapted dump truck and hauling services designed for Asheville's unique terrain and weather challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {ashevilleServices.map((service, index) => (
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

        {/* Why Choose F&S in Asheville Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                Mountain Expertise
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                WHY ASHEVILLE CHOOSES F&S
              </h2>
              <p className="mt-4 text-muted-foreground text-lg font-sans">
                Specialized mountain hauling expertise that standard services can't match.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {ashevilleAdvantages.map((advantage, index) => (
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

        {/* Mountain Logistics Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                  Mountain Logistics
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wider">
                  ASHEVILLE MOUNTAIN HAULING
                </h2>
                <p className="mt-4 text-muted-foreground text-lg font-sans">
                  Specialized equipment and expertise for Asheville's unique mountain challenges.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center bg-card border border-border rounded-xl p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mountain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Steep Grade Expert
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Specialized equipment for Asheville's steep terrain
                  </p>
                </div>
                <div className="text-center bg-card border border-border rounded-xl p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Mountain-Ready Fleet
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Trucks equipped for mountain hauling challenges
                  </p>
                </div>
                <div className="text-center bg-card border border-border rounded-xl p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Weather Adaptive
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Experienced with Asheville's variable conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Asheville CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-card rounded-2xl p-12 border border-border">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Need Mountain Hauling Expertise?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're building in the mountains of Asheville or need specialized hauling for Buncombe County's 
                  challenging terrain, our mountain hauling specialists have the equipment and experience to get the job done safely and efficiently.
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

export default AshevilleNCPage;
