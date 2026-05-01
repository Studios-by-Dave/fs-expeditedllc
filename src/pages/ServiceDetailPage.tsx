import { useParams, Link, Navigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";

const SITE_URL = "https://www.fs-expeditedllc.com";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const otherServices = services.filter((s) => s.slug !== slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.longDescription,
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
    "url": `${SITE_URL}/services/${service.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services` },
      { "@type": "ListItem", "position": 3, "name": service.title, "item": `${SITE_URL}/services/${service.slug}` },
    ],
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      serviceSchema,
      breadcrumbSchema
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${service.title} — Shelby NC Hauling`}
        description={service.longDescription.slice(0, 155) + "…"}
        canonical={`/services/${service.slug}`}
        schema={combinedSchema}
      />
      <Navigation />
      <main className="pt-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="container px-4 pt-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li>/</li>
            <li className="text-foreground font-semibold">{service.title}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="section-padding bg-gradient-card relative">
          <div className="absolute top-0 left-0 right-0 h-3 diamond-plate" />
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-6 mt-6">
                <div className="w-20 h-20 bg-primary/10 flex items-center justify-center shrink-0">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-wider">
                  {service.title.toUpperCase()}
                </h1>
              </div>

              <p className="mt-8 text-muted-foreground text-lg leading-relaxed font-sans max-w-3xl">
                {service.longDescription}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button variant="hero" asChild>
                  <a href="tel:8653649011">
                    <Phone className="w-5 h-5" />
                    (865) 364-9011
                  </a>
                </Button>
                <Button variant="hero" asChild>
                  <a href="tel:7047518141">
                    <Phone className="w-5 h-5" />
                    (704) 751-8141
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-wider mb-8">
                WHY CHOOSE THIS SERVICE
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 p-4 bg-card border border-border">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/90 font-sans">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="section-padding bg-gradient-card">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-wider mb-8">
                OTHER SERVICES
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherServices.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group flex items-center gap-3 p-4 bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <s.icon className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-heading font-bold text-foreground tracking-wide text-sm group-hover:text-primary transition-colors">
                      {s.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
