import { ClipboardCheck, Paintbrush, Shield, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Free Estimate",
    description:
      "Contact us for a no-obligation quote. We'll assess your project and provide transparent pricing.",
  },
  {
    icon: Shield,
    step: "02",
    title: "Prep & Protection",
    description:
      "We protect your furniture, floors, and fixtures. Thorough surface prep ensures lasting results.",
  },
  {
    icon: Paintbrush,
    step: "03",
    title: "Professional Application",
    description:
      "Our skilled painters apply premium paints with precision and care for flawless finishes.",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Final Walkthrough",
    description:
      "We review every detail with you. Your satisfaction is guaranteed before we consider the job complete.",
  },
];

export const Process = () => {
  return (
    <section className="section-padding bg-gradient-card">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Our Process
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Simple, transparent, and focused on delivering exceptional results.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-border" />
              )}

              {/* Icon Circle */}
              <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-card border-2 border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Step Number */}
              <span className="inline-block mt-4 text-xs font-semibold text-primary tracking-widest">
                STEP {item.step}
              </span>

              {/* Title */}
              <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
