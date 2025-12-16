import { Home, Building2, Paintbrush, Sparkles } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Interior Painting",
    description:
      "Transform your living spaces with expert wall, trim, and ceiling finishes. We handle prep, priming, and flawless application.",
    features: ["Walls & Ceilings", "Trim & Molding", "Cabinet Refinishing"],
  },
  {
    icon: Building2,
    title: "Exterior Painting",
    description:
      "Protect and beautify your property with durable exterior coatings. Weather-resistant finishes that last.",
    features: ["Siding & Stucco", "Decks & Fences", "Pressure Washing"],
  },
  {
    icon: Paintbrush,
    title: "Commercial Painting",
    description:
      "Professional painting solutions for businesses. Minimal disruption, maximum impact for your commercial space.",
    features: ["Office Spaces", "Retail Stores", "Industrial Facilities"],
  },
  {
    icon: Sparkles,
    title: "Specialty Finishes",
    description:
      "Elevate your space with custom textures and decorative techniques. Faux finishes, Venetian plaster, and more.",
    features: ["Faux Finishes", "Textured Walls", "Accent Features"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-card">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From simple touch-ups to complete transformations, we deliver
            exceptional results every time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card border border-border rounded-xl p-6 hover-card-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
