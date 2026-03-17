import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

const ServicesPage = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <div className="pt-20">
      <section className="section-padding bg-gradient-card">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
              What We Haul
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-wider">
              OUR SERVICES
            </h2>
            <p className="mt-4 text-muted-foreground text-lg font-sans">
              From gravel delivery to emergency expedited hauling — we move what you need, when you need it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group relative bg-card border border-border p-6 hover-card-lift block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-heading font-bold text-foreground mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-sans">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80 font-sans">
                      <span className="w-1.5 h-1.5 bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <span className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider font-sans group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>

                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-colors pointer-events-none" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
    <Footer />
  </div>
);

export default ServicesPage;
