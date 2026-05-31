import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema, articleSchema } from "@/data/seo-schemas";
import { ChevronRight, Calendar, Clock, Truck, MapPin, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BlogArticlePage5 = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Blog", url: "https://www.fs-expeditedllc.com/blog" },
    { name: "Article", url: "https://www.fs-expeditedllc.com/blog/material-delivery-guide-shelby-nc-construction-projects" }
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      articleSchema(
        "Complete Material Delivery Guide for Construction Projects in Shelby, NC",
        "Your comprehensive guide to material delivery services in Shelby, NC. Learn about gravel, sand, soil delivery and how F&S Expedited keeps your construction projects on schedule.",
        "/blog/material-delivery-guide-shelby-nc-construction-projects",
        "2026-05-31"
      ),
      breadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Complete Material Delivery Guide for Construction Projects in Shelby, NC"
        description="Your comprehensive guide to material delivery services in Shelby, NC. Learn about gravel, sand, soil delivery and how F&S Expedited keeps your construction projects on schedule."
        canonical="/blog/material-delivery-guide-shelby-nc-construction-projects"
        schema={combinedSchema}
      />
      <Navigation />
      {/* Breadcrumb Navigation */}
      <Breadcrumb aria-label="breadcrumb" className="container px-4 pt-20">
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink asChild href={crumb.url} className={index === breadcrumbs.length - 1 ? "text-foreground font-semibold" : "text-primary hover:text-primary/70"}>
                {crumb.name}
              </BreadcrumbLink>
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator><ChevronRight /></BreadcrumbSeparator>}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      
      <main className="pt-20">
        {/* Article Header */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>May 31, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>10 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="w-4 h-4" />
                  <span>Material Delivery</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-wider mb-6">
                Complete Material Delivery Guide for Construction Projects in Shelby, NC
              </h1>
              
              <p className="text-xl text-muted-foreground font-sans mb-8 leading-relaxed">
                Whether you're building a new home, paving a driveway, or managing a commercial construction site, reliable material delivery is crucial for project success. Learn how F&S Expedited LLC provides efficient gravel, sand, and soil delivery services throughout Shelby, NC and the surrounding 100-mile service area.
              </p>
              
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 mb-8">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Professional material delivery services that keep your project on schedule and within budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-padding">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Why Material Delivery Matters */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Why Professional Material Delivery Matters</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Construction projects depend on timely material delivery. Delays in getting gravel, sand, or soil to your site can cascade into costly schedule overruns. Professional material delivery services ensure your materials arrive when you need them, in the right quantities, and properly placed for easy access.
                </p>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Key Benefits of Professional Material Delivery:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">On-Time Delivery</h4>
                        <p className="text-muted-foreground">Scheduled deliveries that match your project timeline</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Accurate Quantities</h4>
                        <p className="text-muted-foreground">Right amount of material delivered every time</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Proper Placement</h4>
                        <p className="text-muted-foreground">Materials placed where you need them on-site</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Quality Materials</h4>
                        <p className="text-muted-foreground">High-grade gravel, sand, and soil for optimal results</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Types of Materials We Deliver */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Types of Materials We Deliver</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  F&S Expedited LLC delivers a wide range of construction materials to meet your project needs. Our modern fleet can handle various material types and quantities efficiently.
                </p>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">Gravel Delivery</h3>
                      <p className="text-muted-foreground mb-4">
                        Perfect for driveways, parking lots, road base preparation, and drainage projects. We deliver various gravel sizes from pea gravel to larger crushed stone for different applications.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Driveway gravel (crusher run, #57 stone)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Drainage gravel (#4, #5, #57 stone)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Decorative gravel (river rock, pea gravel)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">Sand Delivery</h3>
                      <p className="text-muted-foreground mb-4">
                        Essential for concrete work, masonry, landscaping, and fill applications. We deliver clean, high-quality sand suitable for various construction needs.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Concrete sand (masonry sand)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Fill sand (utility sand)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Play sand (for playgrounds and landscaping)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">Topsoil Delivery</h3>
                      <p className="text-muted-foreground mb-4">
                        Premium topsoil for landscaping, gardening, and site preparation. Our screened topsoil is free of debris and perfect for establishing healthy lawns and gardens.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Screened topsoil (nutrient-rich)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Garden mix (topsoil + compost)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Fill dirt (for grading and leveling)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Our Delivery Process */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Material Delivery Process</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We've streamlined our delivery process to make it easy for contractors and homeowners to get the materials they need, when they need them.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Request Quote</h3>
                      </div>
                      <p className="text-muted-foreground">Tell us what materials you need, quantities, and delivery location. We provide competitive pricing with no hidden fees.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Schedule Delivery</h3>
                      </div>
                      <p className="text-muted-foreground">Choose a delivery time that works for your project schedule. We offer same-day and next-day delivery options.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Professional Delivery</h3>
                      </div>
                      <p className="text-muted-foreground">Our experienced operators deliver materials safely and place them exactly where you need them on your site.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">4</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Project Completion</h3>
                      </div>
                      <p className="text-muted-foreground">We confirm delivery, ensure proper placement, and follow up to guarantee your complete satisfaction.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Service Area */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Material Delivery Service Area</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  F&S Expedited LLC provides material delivery services within a 100-mile radius of Shelby, NC. This includes major cities like Charlotte, Gastonia, Hickory, Asheville, Greenville, and Spartanburg, as well as surrounding communities.
                </p>
                
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Service Coverage</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Our material delivery services cover all areas within 100 miles of Shelby, NC (28152). Whether you're in downtown Charlotte, working on a project in Gastonia, or need materials delivered to a rural site in Cleveland County, we've got you covered with reliable, on-time delivery.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20">
                <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Schedule Your Material Delivery?</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Contact F&S Expedited LLC today for professional material delivery services in Shelby, NC and surrounding areas. Get your construction project moving with reliable gravel, sand, and soil delivery.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button size="lg" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call (865) 364-9011
                  </Button>
                  <Button size="lg" variant="outline" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Get a Free Quote
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Serving Shelby, NC and 100-mile radius</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>aldrich2577@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Related Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Dump Truck Hauling</h3>
                      <p className="text-muted-foreground mb-4">Efficient transport of dirt, rock, and construction debris.</p>
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Site Services</h3>
                      <p className="text-muted-foreground mb-4">Land clearing, site preparation, and debris removal.</p>
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogArticlePage5;
