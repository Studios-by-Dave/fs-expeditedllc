import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

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
            Proudly providing expedited hauling services within a 100-mile radius of Shelby, North Carolina.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Radius map visual */}
          <div className="bg-card border border-border p-6 mb-8">
            <div className="relative w-full flex items-center justify-center py-8">
              <svg
                viewBox="0 0 400 400"
                className="w-full max-w-md"
                aria-label="Map showing 100-mile service radius around Shelby, NC"
              >
                {/* Outer subtle ring */}
                <circle
                  cx="200"
                  cy="190"
                  r="155"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeDasharray="6 4"
                  opacity="0.25"
                />

                {/* Radius fill */}
                <circle
                  cx="200"
                  cy="190"
                  r="140"
                  fill="hsl(var(--primary))"
                  opacity="0.08"
                />

                {/* Radius border */}
                <circle
                  cx="200"
                  cy="190"
                  r="140"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  opacity="0.4"
                />

                {/* Crosshair lines */}
                <line x1="200" y1="46" x2="200" y2="334" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.15" />
                <line x1="56" y1="190" x2="344" y2="190" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.15" />

                {/* Inner rings for depth */}
                <circle cx="200" cy="190" r="70" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.12" />
                <circle cx="200" cy="190" r="35" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.1" />

                {/* Pin shadow */}
                <ellipse cx="200" cy="202" rx="10" ry="3" fill="hsl(var(--foreground))" opacity="0.15" />

                {/* Map pin */}
                <g transform="translate(200, 175)">
                  <path
                    d="M0-24C-8.8-24-16-17.2-16-8.8 0 6 0 16 0 16S16 6 16-8.8C16-17.2 8.8-24 0-24Z"
                    fill="hsl(var(--primary))"
                    stroke="hsl(var(--primary-foreground))"
                    strokeWidth="1.5"
                  />
                  <circle cx="0" cy="-9" r="5.5" fill="hsl(var(--primary-foreground))" />
                </g>

                {/* City label */}
                <text
                  x="200"
                  y="228"
                  textAnchor="middle"
                  className="fill-foreground"
                  style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em" }}
                >
                  SHELBY, NC
                </text>
                <text
                  x="200"
                  y="246"
                  textAnchor="middle"
                  className="fill-muted-foreground"
                  style={{ fontSize: "10px", letterSpacing: "0.05em" }}
                >
                  28152
                </text>

                {/* Radius label */}
                <text
                  x="200"
                  y="355"
                  textAnchor="middle"
                  className="fill-primary"
                  style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em" }}
                >
                  100-MILE RADIUS
                </text>

                {/* Compass tick marks — N/E/S/W */}
                <text x="200" y="38" textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em" }}>N</text>
                <text x="354" y="194" textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em" }}>E</text>
                <text x="200" y="348" textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em" }}>S</text>
                <text x="46" y="194" textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em" }}>W</text>
              </svg>
            </div>
          </div>

          {/* Info card */}
          <div className="bg-card border border-border p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-xl font-bold text-foreground tracking-wider">
                SHELBY, NC — 100 MILE RADIUS
              </h3>
            </div>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              We service all areas within 100 miles of Shelby, North Carolina (28152), including Charlotte, Gastonia, Hickory, Asheville, Greenville, Spartanburg, and surrounding communities.
            </p>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8 font-sans">
          Outside the 100-mile zone? <Link to="/contact" className="text-primary hover:underline font-semibold">Contact us</Link> — we travel for the right job.
        </p>
      </div>
    </section>
  );
};
