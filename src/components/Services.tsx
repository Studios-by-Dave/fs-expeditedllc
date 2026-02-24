import { Truck, Mountain, Trash2, Package, Zap, HardHat } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Dump Truck Hauling",
    description: "Heavy-duty dump truck services for construction sites, commercial projects, and residential needs. On-time, every time.",
    features: ["Bulk Material Transport", "Site-to-Site Hauling", "Flexible Scheduling"],
  },
  {
    icon: Mountain,
    title: "Gravel & Sand Delivery",
    description: "Quality gravel, sand, and crushed stone delivered directly to your job site. Multiple grades available.",
    features: ["Crushed Stone", "Fill Sand", "Road Base Material"],
  },
  {
    icon: Trash2,
    title: "Debris Removal",
    description: "Construction debris removal and site cleanup services. We handle the mess so you can focus on building.",
    features: ["Construction Waste", "Demolition Debris", "Yard Waste"],
  },
  {
    icon: Package,
    title: "Aggregate Transport",
    description: "Reliable aggregate transport for large-scale construction and infrastructure projects across the region.",
    features: ["Limestone", "Recycled Concrete", "Base Materials"],
  },
  {
    icon: Zap,
    title: "Emergency Expedited",
    description: "Need materials hauled TODAY? Our expedited service gets your load where it needs to be — fast.",
    features: ["Same-Day Service", "Priority Dispatch", "24/7 Available"],
  },
  {
    icon: HardHat,
    title: "Commercial Hauling",
    description: "Full-scale hauling solutions for contractors, developers, and commercial construction projects.",
    features: ["Contract Rates", "Fleet Availability", "Project Management"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-card">
      <div className="container px-4">
        {/* Section Header */}
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card border border-border p-6 hover-card-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Yellow top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-3 tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-sans">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80 font-sans">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
