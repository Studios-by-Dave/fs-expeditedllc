import { MapPin } from "lucide-react";

const areas = [
  { region: "North Carolina", cities: ["Charlotte", "Gastonia", "Concord", "Hickory", "Shelby", "Mooresville"] },
  { region: "Tennessee", cities: ["Knoxville", "Maryville", "Oak Ridge", "Sevierville", "Morristown", "Johnson City"] },
];

export const ServiceArea = () => {
  return (
    <section className="section-padding bg-gradient-card relative">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
            Coverage Area
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-wider">
            WHERE WE SERVE
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans">
            Proudly providing expedited hauling services across the Carolinas and Tennessee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {areas.map((area) => (
            <div key={area.region} className="bg-card border border-border p-6">
              <h3 className="font-heading text-xl font-bold text-primary tracking-wider mb-4">
                {area.region.toUpperCase()}
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {area.cities.map((city) => (
                  <li key={city} className="flex items-center gap-2 text-foreground/80 font-sans text-sm">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8 font-sans">
          Don't see your area? <a href="#contact" className="text-primary hover:underline font-semibold">Contact us</a> — we travel for the right job.
        </p>
      </div>
    </section>
  );
};
