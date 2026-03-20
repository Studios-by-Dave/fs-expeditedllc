import { ClipboardCheck, Truck, Shield, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Request a Quote",
    description: "Give us a call. We'll assess your hauling needs and provide a transparent, no-obligation estimate.",
  },
  {
    icon: Truck,
    step: "02",
    title: "Schedule & Dispatch",
    description: "We confirm your timeline and dispatch the right equipment for your job — same-day available.",
  },
  {
    icon: Shield,
    step: "03",
    title: "Haul & Deliver",
    description: "Our experienced operators handle the load safely and efficiently, on schedule.",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Job Complete",
    description: "We confirm delivery, clean up, and make sure you're 100% satisfied with the work.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="section-padding bg-gradient-card">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-wider">
            OUR PROCESS
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans">
            Simple, transparent, and built for speed. Here's how we get the job done.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center group">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-border" />
              )}

              <div className="relative z-10 w-20 h-20 mx-auto bg-card border-2 border-border flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>

              <span className="inline-block mt-4 text-xs font-bold text-primary tracking-widest font-sans">
                STEP {item.step}
              </span>

              <h3 className="mt-2 font-heading text-lg font-bold text-foreground tracking-wide">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
