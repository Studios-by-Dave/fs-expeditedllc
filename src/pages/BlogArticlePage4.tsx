import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema, articleSchema } from "@/data/seo-schemas";
import { ChevronRight, Calendar, Clock, Truck, MapPin, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BlogArticlePage4 = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Blog", url: "https://www.fs-expeditedllc.com/blog" },
    { name: "Article", url: "https://www.fs-expeditedllc.com/blog/why-fs-expedited-reliable-dump-truck-services-shelby-nc" }
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      articleSchema(
        "Why F&S Expedited is Your Go-To Choice for Reliable Dump Truck Services in Shelby, NC",
        "F&S Expedited provides professional dump truck services in Shelby, NC. Fast, reliable material delivery, site services, and emergency hauling for construction and landscaping projects.",
        "/blog/why-fs-expedited-reliable-dump-truck-services-shelby-nc",
        "2026-05-29"
      ),
      breadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Why F&S Expedited is Your Go-To Choice for Reliable Dump Truck Services in Shelby, NC"
        description="F&S Expedited provides professional dump truck services in Shelby, NC. Fast, reliable material delivery, site services, and emergency hauling for construction and landscaping projects."
        canonical="/blog/why-fs-expedited-reliable-dump-truck-services-shelby-nc"
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
                  <span>May 29, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="w-4 h-4" />
                  <span>F&S Expedited Services</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-wider mb-6">
                Why F&S Expedited is Your Go-To Choice for Reliable Dump Truck Services in Shelby, NC
              </h1>
              
              <p className="text-xl text-muted-foreground font-sans mb-8 leading-relaxed">
                In the fast-paced world of construction, landscaping, and site development across North Carolina, finding a dependable hauling partner can make or break your project timeline. That's where F&S Expedited stands out. We specialize in professional dump truck services that combine speed, reliability, and local expertise.
              </p>
              
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 mb-8">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Whether you're a contractor managing a large commercial build or a homeowner tackling a driveway renovation, F&S Expedited provides the heavy-duty support you need — right here in Shelby, NC.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-padding">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* What Makes F&S Hauling Different */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">What Makes F&S Expedited Different?</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At F&S Expedited LLC, we don't just move materials — we deliver solutions. Our modern fleet of dump trucks and experienced team handle everything from routine deliveries to emergency jobs with precision and care.
                </p>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Key services offered by F&S Expedited include:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Dump Truck Hauling</h4>
                        <p className="text-muted-foreground">Efficient transport of dirt, rock, gravel, sand, and construction debris.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Material Delivery</h4>
                        <p className="text-muted-foreground">High-quality gravel, sand, topsoil, and aggregate delivered directly to your job site.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Site Services</h4>
                        <p className="text-muted-foreground">Land clearing, site preparation, debris removal, and more.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Emergency & Expedited Hauling</h4>
                        <p className="text-muted-foreground">Same-day or next-day response when projects demand urgency.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Commercial & Residential Hauling</h4>
                        <p className="text-muted-foreground">Scaled solutions for any project size within our 100-mile service radius.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                  Our operations are fully licensed and insured, giving you complete peace of mind. We serve Shelby, NC and surrounding areas including Charlotte, Gastonia, and up toward the South Carolina border.
                </p>
              </div>

              {/* The F&S Hauling Process */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">The F&S Expedited Process: Simple, Transparent, and Fast</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We keep things straightforward so you can focus on your project:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Request a Quote</h3>
                      </div>
                      <p className="text-muted-foreground">Call or contact us with your hauling needs. We provide clear, competitive pricing with no hidden fees.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Schedule & Dispatch</h3>
                      </div>
                      <p className="text-muted-foreground">We match the right equipment to your job and offer fast turnaround, often same-day.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Safe & Professional Hauling</h3>
                      </div>
                      <p className="text-muted-foreground">Our skilled operators ensure every load is handled securely and delivered on time.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">4</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Job Completion</h3>
                      </div>
                      <p className="text-muted-foreground">We confirm delivery, clean up as needed, and follow up to ensure your full satisfaction.</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mt-6">
                  <p className="text-lg text-foreground">
                    This efficient process is why local contractors and property owners consistently choose F&S Expedited for their material transport and site work.
                  </p>
                </div>
              </div>

              {/* Common Projects */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Common Projects We Support with F&S Expedited</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-primary" />
                    <span className="text-lg text-foreground">New construction and road base preparation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-primary" />
                    <span className="text-lg text-foreground">Driveway and parking lot gravel delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-primary" />
                    <span className="text-lg text-foreground">Post-storm debris cleanup</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-primary" />
                    <span className="text-lg text-foreground">Landscaping and excavation support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-primary" />
                    <span className="text-lg text-foreground">Commercial site development and maintenance</span>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                  Our ability to handle both small residential loads and large-volume commercial hauls makes us a versatile partner across the region.
                </p>
              </div>

              {/* Why Local Customers Trust F&S Hauling */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Why Local Customers Trust F&S Expedited</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground">Fast Response Times</h3>
                      </div>
                      <p className="text-muted-foreground">Expedited service when you need it most.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground">Competitive Rates</h3>
                      </div>
                      <p className="text-muted-foreground">Honest pricing without surprises.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground">Experienced Team</h3>
                      </div>
                      <p className="text-muted-foreground">Professional operators who respect your property and timeline.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Truck className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground">Local Knowledge</h3>
                      </div>
                      <p className="text-muted-foreground">We understand the terrain, regulations, and needs of projects around Shelby and Western North Carolina.</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border mt-6">
                  <p className="text-lg text-foreground">
                    F&S Expedited is built on a foundation of hard work, reliability, and customer focus — values that have helped us become a trusted name in dump truck services.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20">
                <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started with F&S Expedited?</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Don't let hauling slow down your next project. Contact F&S Expedited LLC today for a free, no-obligation quote. Whether you need gravel delivered tomorrow or full-site debris removal, we're here to help.
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
                    <span>Serving Shelby, NC and a 100-mile radius</span>
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
                      <h3 className="text-xl font-semibold text-foreground mb-2">Emergency Expedited Services</h3>
                      <p className="text-muted-foreground mb-4">Same-day and next-day hauling for urgent project needs.</p>
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Material Delivery Services</h3>
                      <p className="text-muted-foreground mb-4">Quality gravel, sand, and soil delivered to your site.</p>
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

export default BlogArticlePage4;
