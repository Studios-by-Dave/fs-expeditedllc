import { Link } from "react-router-dom";
import { services, serviceCategories } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-card">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
            What We Haul
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-4xl font-heading font-bold text-foreground tracking-wider">
            OUR SERVICES
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans">
            From material delivery to emergency expedited services — we provide comprehensive hauling and site solutions for your project needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {serviceCategories.map((category, index) => (
            <Link
              key={category.slug}
              to={`/services/${category.slug}`}
              className="group relative bg-card border border-border p-6 rounded-xl hover-card-lift block overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              {category.backgroundImage && (
                <div className="absolute inset-0">
                  <img
                    src={category.backgroundImage}
                    alt={`${category.title} background - ${category.description}`}
                    className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
                    loading="lazy"
                  />
                </div>
              )}
              
              {/* Overlay to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-card/90 via-card/70 to-card/90" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  {category.slug === 'dump-trucks-hauling-services' && (
                    <img src="/assets/icons/dump-truck.svg" alt="Dump Trucks Hauling Services" className="w-10 h-10 object-contain" />
                  )}
                  {category.slug === 'material-delivery' && (
                    <img src="/assets/icons/material-delivery.svg" alt="Material Delivery" className="w-10 h-10 object-contain" />
                  )}
                  {category.slug === 'site-services' && (
                    <img src="/assets/icons/site-services.svg" alt="Site Services" className="w-10 h-10 object-contain" />
                  )}
                  {category.slug === 'emergency-expedited' && (
                    <img src="/assets/icons/emergency-expedited.svg" alt="Emergency Expedited" className="w-10 h-10 object-contain" />
                  )}
                </div>

                <h3 className="text-2xl font-heading font-bold text-foreground mb-3 tracking-wide">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-4 font-sans">
                  {category.description}
                </p>

                {category.subcategories && (
                  <ul className="space-y-2 mb-6">
                    {category.subcategories.slice(0, 3).map((subcategory) => (
                      <li key={subcategory.title} className="flex items-center gap-2 text-base text-foreground/80 font-sans">
                        <span className="w-1.5 h-1.5 bg-primary" />
                        {subcategory.title}
                      </li>
                    ))}
                    {category.subcategories.length > 3 && (
                      <li className="flex items-center gap-2 text-base text-foreground/80 font-sans">
                        <span className="w-1.5 h-1.5 bg-primary" />
                        +{category.subcategories.length - 3} more
                      </li>
                    )}
                  </ul>
                )}

                <span className="flex items-center gap-2 text-primary font-semibold text-base uppercase tracking-wider font-sans group-hover:gap-3 transition-all">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-colors pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Additional CTA for individual services */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Looking for a specific service? Explore our complete range of hauling and site solutions.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
