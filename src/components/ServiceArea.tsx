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
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-4xl font-heading font-bold text-foreground tracking-wider">
            WHERE WE SERVE
          </h2>
          <p className="mt-4 text-muted-foreground text-lg font-sans">
            Proudly providing expedited hauling services within a 100-mile radius of Shelby, North Carolina.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
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
                  stroke="url(#gradient1)"
                  strokeWidth="1"
                  strokeDasharray="6 4"
                  opacity="0.3"
                />

                {/* Radius fill with texture */}
                <defs>
                  <radialGradient id="gradient1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#10B981" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.05" />
                  </radialGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="33%" stopColor="#10B981" />
                    <stop offset="66%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                  
                  {/* Terrain/Topographic Pattern */}
                  <pattern id="terrain-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    {/* Subtle topographic lines */}
                    <path d="M10,20 Q30,15 50,30 T90,20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/10" />
                    <path d="M5,40 Q25,35 45,50 T85,40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary/10" />
                    <path d="M15,60 Q35,55 55,70 T95,60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/5" />
                    <path d="M0,80 Q20,75 40,90 T80,80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary/5" />
                    {/* Tiny dots for texture */}
                    <circle cx="20" cy="20" r="0.5" fill="currentColor" className="text-primary/20" />
                    <circle cx="70" cy="50" r="0.5" fill="currentColor" className="text-secondary/20" />
                  </pattern>

                  <pattern id="texture1" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <rect width="40" height="40" fill="#FEF3C7" opacity="0.1"/>
                    <circle cx="10" cy="10" r="2" fill="#3B82F6" opacity="0.1"/>
                    <circle cx="30" cy="30" r="1.5" fill="#10B981" opacity="0.1"/>
                    <circle cx="5" cy="35" r="1" fill="#F59E0B" opacity="0.1"/>
                    <circle cx="35" cy="5" r="1.5" fill="#EF4444" opacity="0.1"/>
                  </pattern>
                </defs>
                
                {/* Background Terrain Layer (Clipped to Radius) */}
                <g clipPath="url(#radius-clip)">
                  <circle
                    cx="200"
                    cy="190"
                    r="140"
                    fill="url(#terrain-pattern)"
                    opacity="0.4"
                  />
                  
                  {/* Appalachian-style mountain ridges to suggest Western NC terrain */}
                  {/* Western Ridges */}
                  <path d="M40,150 Q70,120 100,160 T160,140" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/15" />
                  <path d="M50,170 Q80,140 110,180 T170,160" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary/15" />
                  
                  {/* Peaks */}
                  <path d="M80,210 L105,160 L130,210" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-primary/10" />
                  <path d="M110,200 L135,150 L160,200" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-primary/10" />
                  <path d="M260,170 L285,120 L310,170" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-primary/10" />
                  <path d="M280,180 L305,135 L330,180" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-primary/10" />
                  
                  {/* Subtle valley lines */}
                  <path d="M200,190 L240,240 L300,280" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-blue-500/10" />
                  <path d="M200,190 L160,250 L100,300" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-blue-500/10" />
                </g>

                <clipPath id="radius-clip">
                  <circle cx="200" cy="190" r="140" />
                </clipPath>

                <circle
                  cx="200"
                  cy="190"
                  r="140"
                  fill="url(#texture1)"
                  opacity="0.15"
                />

                {/* Radius border with gradient */}
                <circle
                  cx="200"
                  cy="190"
                  r="140"
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  opacity="0.5"
                />

                {/* Crosshair lines */}
                <line x1="200" y1="46" x2="200" y2="334" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2" />
                <line x1="56" y1="190" x2="344" y2="190" stroke="#10B981" strokeWidth="0.5" opacity="0.2" />

                {/* Inner rings for depth with colors */}
                <circle cx="200" cy="190" r="70" fill="none" stroke="#F59E0B" strokeWidth="0.5" opacity="0.15" />
                <circle cx="200" cy="190" r="35" fill="none" stroke="#EF4444" strokeWidth="0.5" opacity="0.12" />

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

          {/* Comprehensive city list */}
          <div className="bg-card border border-border p-6">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-xl font-bold text-foreground tracking-wider">
                CITIES WE SERVE
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* North Carolina Cities */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 text-lg">North Carolina Cities</h4>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-primary mb-2">Under 30 Minutes</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <span>• Gastonia</span>
                      <span>• Lincolnton</span>
                      <span>• Kings Mountain</span>
                      <span>• Dallas</span>
                      <span>• Cherryville</span>
                      <span>• Bessemer City</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-primary mb-2">30-45 Minutes</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <span>• Charlotte</span>
                      <span>• Gaffney, SC</span>
                      <span>• Mooresville</span>
                      <span>• Concord</span>
                      <span>• Monroe</span>
                      <span>• Indian Trail</span>
                      <span>• Matthews</span>
                      <span>• Mint Hill</span>
                      <span>• Cornelius</span>
                      <span>• Davidson</span>
                      <span>• Huntersville</span>
                      <span>• Denver</span>
                      <span>• Newton</span>
                      <span>• Maiden</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-primary mb-2">45-60 Minutes</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <span>• Hickory</span>
                      <span>• Statesville</span>
                      <span>• Kannapolis</span>
                      <span>• Salisbury</span>
                      <span>• Spencer</span>
                      <span>• Lexington</span>
                      <span>• Thomasville</span>
                      <span>• High Point</span>
                      <span>• Mocksville</span>
                      <span>• Taylorsville</span>
                      <span>• Lenoir</span>
                      <span>• Morganton</span>
                      <span>• Valdese</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* South Carolina Cities */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 text-lg">South Carolina Cities</h4>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-primary mb-2">Under 30 Minutes</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <span>• Gaffney</span>
                      <span>• Blacksburg</span>
                      <span>• Cowpens</span>
                      <span>• Chesnee</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-primary mb-2">30-45 Minutes</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <span>• Spartanburg</span>
                      <span>• Rock Hill</span>
                      <span>• Fort Mill</span>
                      <span>• Clover</span>
                      <span>• York</span>
                      <span>• Lake Wylie</span>
                      <span>• Tega Cay</span>
                      <span>• Boiling Springs</span>
                      <span>• Inman</span>
                      <span>• Landrum</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-primary mb-2">45-60 Minutes</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <span>• Greenville</span>
                      <span>• Greer</span>
                      <span>• Easley</span>
                      <span>• Simpsonville</span>
                      <span>• Mauldin</span>
                      <span>• Fountain Inn</span>
                      <span>• Travelers Rest</span>
                      <span>• Pickens</span>
                      <span>• Liberty</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Major City Service Areas */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="text-center font-semibold text-foreground mb-8 text-lg">Major Service Areas</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link to="/service-area/shelby-nc" className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center hover:bg-primary/10 transition-colors hover:shadow-lg hover:border-primary/40 group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h5 className="font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors">Shelby, NC</h5>
                  <p className="text-sm text-muted-foreground">Home Base</p>
                  <p className="text-xs text-primary mt-2 font-medium">Immediate Response</p>
                </Link>
                <Link to="/service-area/charlotte-nc" className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center hover:bg-primary/10 transition-colors hover:shadow-lg hover:border-primary/40 group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h5 className="font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors">Charlotte, NC</h5>
                  <p className="text-sm text-muted-foreground">45 minutes</p>
                  <p className="text-xs text-primary mt-2 font-medium">Commercial Focus</p>
                </Link>
                <Link to="/service-area/gastonia-nc" className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center hover:bg-primary/10 transition-colors hover:shadow-lg hover:border-primary/40 group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <h5 className="font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors">Gastonia, NC</h5>
                  <p className="text-sm text-muted-foreground">30 minutes</p>
                  <p className="text-xs text-primary mt-2 font-medium">Fastest Service</p>
                </Link>
                <Link to="/service-area/asheville-nc" className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center hover:bg-primary/10 transition-colors hover:shadow-lg hover:border-primary/40 group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">⛰️</span>
                  </div>
                  <h5 className="font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors">Asheville, NC</h5>
                  <p className="text-sm text-muted-foreground">1h 15min</p>
                  <p className="text-xs text-primary mt-2 font-medium">Mountain Experts</p>
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-center text-sm text-muted-foreground">
                <strong>Expedited hauling services available 24/7</strong> for all cities within our 1-hour service radius. 
                Outside our service area? <Link to="/contact" className="text-primary hover:underline font-semibold">Contact us</Link> — we travel for the right project.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8 font-sans">
          Outside the 100-mile zone? <Link to="/contact" className="text-primary hover:underline font-semibold">Contact us</Link> — we travel for the right job.
        </p>
      </div>
    </section>
  );
};
