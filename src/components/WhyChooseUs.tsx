import { Shield, Clock, Award, MapPin, DollarSign, Truck } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section id="why-us" className="py-12 bg-background relative">
      {/* Diamond plate top border */}
      <div className="absolute top-0 left-0 right-0 h-3 diamond-plate" />

      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
            Why F&S
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-wider">
            WHY CHOOSE US
          </h2>
          
          <p className="mt-4 text-muted-foreground text-xl font-sans">
            Built on hard work, reliability, and a commitment to getting the job done right. 
            <Link 
              to="/services/emergency-expedited" 
              className="text-primary hover:underline font-semibold ml-2"
            >
              See our emergency services →
            </Link>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="flex gap-4 group">
              <div className="w-12 h-12 shrink-0 bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                <reason.icon className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground tracking-wide">
                  {reason.title}
                </h3>
                <p className="text-lg text-muted-foreground mt-1 font-sans">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Licensed & Insured Badge */}
        <div className="mt-12 flex justify-center">
          <img 
            src="/assets/LiscensedInsured.jpeg"
            alt="Licensed & Insured Badge"
            className="h-20 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
