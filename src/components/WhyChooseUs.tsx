import { Shield, Clock, Award, MapPin, DollarSign, Truck } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Licensed & Insured", description: "Full coverage protects your project and our crew." },
  { icon: Clock, title: "Fast Turnaround", description: "Same-day and next-day hauling when you need it." },
  { icon: Award, title: "Reliable Service", description: "On-time delivery you can count on, every load." },
  { icon: MapPin, title: "Local & Regional", description: "Serving Charlotte, Knoxville & surrounding areas." },
  { icon: DollarSign, title: "Competitive Rates", description: "Fair, transparent pricing with no hidden fees." },
  { icon: Truck, title: "Heavy Equipment", description: "Modern fleet ready for any size hauling job." },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-background relative">
      {/* Diamond plate top border */}
      <div className="absolute top-0 left-0 right-0 h-3 diamond-plate" />

      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
            Why F&S
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-wider">
            WHY CHOOSE US
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans">
            Built on hard work, reliability, and a commitment to getting the job done right.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="flex gap-4 group">
              <div className="w-12 h-12 shrink-0 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground tracking-wide">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 font-sans">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
