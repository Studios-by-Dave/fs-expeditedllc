import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema, articleSchema, faqSchema } from "@/data/seo-schemas";
import { ChevronRight, Calendar, Clock, Truck, MapPin, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const BlogArticlePage10 = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Blog", url: "https://www.fs-expeditedllc.com/blog" },
    { name: "Article", url: "https://www.fs-expeditedllc.com/blog/dump-truck-hauling-services-forest-city-nc" }
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      articleSchema(
        "Reliable Dump Truck Hauling Services in Forest City, NC: Your Local Material Delivery Partner",
        "Need dump truck hauling in Forest City, NC? F&S Expedited delivers gravel, dirt, topsoil, sand, and debris removal across Rutherford County with fast, same-day service.",
        "/blog/dump-truck-hauling-services-forest-city-nc",
        "2026-08-16"
      ),
      breadcrumbSchema(breadcrumbs),
      faqSchema([
        {
          question: "Do you provide dump truck hauling services in Forest City, NC?",
          answer: "Yes — F&S Expedited provides dump truck hauling, gravel and material delivery, and debris removal throughout Forest City, NC and Rutherford County, often with same-day response."
        },
        {
          question: "How fast can you respond to a hauling job in Forest City?",
          answer: "Because we operate out of nearby Shelby, NC, our typical response time to Forest City is 30 minutes, with same-day and 24/7 emergency hauling available."
        },
        {
          question: "What materials do you deliver in Forest City?",
          answer: "We deliver gravel, crushed stone, sand, fill dirt, topsoil, and haul construction and landscaping debris for Forest City projects."
        }
      ])
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Dump Truck Hauling Services in Forest City, NC | F&S Expedited"
        description="Need a dump truck service in Forest City, NC? F&S Expedited delivers gravel, dirt, topsoil, and sand, plus debris removal across Rutherford County. Call for same-day quote!"
        canonical="/blog/dump-truck-hauling-services-forest-city-nc"
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
                  <span>August 16, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>6 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="w-4 h-4" />
                  <span>Forest City Hauling</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-wider mb-6 blog-glow-text">
                Dump Truck Hauling Services in Forest City, NC
              </h1>

              <p className="text-xl text-muted-foreground font-sans mb-8 leading-relaxed">
                Construction, landscaping, and site work in Forest City moves faster when you have a reliable local dump truck partner. F&S Expedited brings gravel delivery, fill dirt, topsoil, sand, and debris removal right to your Forest City or Lake Wylie-area project.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 mb-8">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Serving Forest City and Rutherford County from our nearby Shelby, NC base — 30-minute average response, same-day service for urgent projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-padding">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto space-y-8">

              {/* Why Forest City */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Forest City Relies on Local Dump Truck Hauling</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                  Forest City sits at the crossroads of residential growth, agricultural activity, and construction around <strong>Lake Wylie</strong> and the Broad River. Whether you're upgrading a driveway in the Lake Wylie Shores neighborhood, grading a new home site, or clearing a commercial lot for a Forest City business, you need hauling that understands the local terrain and traffic patterns.
                </p>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">What we haul for Forest City, NC projects:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Gravel & Crushed Stone Delivery</h4>
                        <p className="text-muted-foreground">Road base, driveway stone, and landscaping rock delivered fast to Forest City homes and job sites.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Fill Dirt & Topsoil</h4>
                        <p className="text-muted-foreground">Screened topsoil and quality fill dirt for Forest City yards, gardens, and grading work.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Sand Delivery</h4>
                        <p className="text-muted-foreground">Mason sand, concrete sand, and playground sand for Forest City construction and masonry projects.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Construction & Yard Debris Removal</h4>
                        <p className="text-muted-foreground">Dump trailer hauling for brush, branches, concrete, and job-site cleanup in Forest City.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                  We're fully licensed and insured in North Carolina and operate out of nearby Shelby, which means shorter drive times and lower costs for Forest City and Rutherford County projects.
                </p>
              </div>

              {/* The Process */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Hauling Process for Forest City Jobs</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Simple, transparent, and fast — the same process we use for every Forest City customer:
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
                      <p className="text-muted-foreground">Tell us your Forest City address and what you need hauled or delivered. We reply with clear, competitive pricing — no hidden fees.</p>
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
                      <p className="text-muted-foreground">We match the right truck to your load and dispatch within 30 minutes to Forest City on most jobs — same-day when possible.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Haul & Deliver</h3>
                      </div>
                      <p className="text-muted-foreground">Our operators handle every load carefully and communicate with you on arrival.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">4</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Clean Up & Confirm</h3>
                      </div>
                      <p className="text-muted-foreground">We finish the job, clean the site as needed, and follow up to make sure you're satisfied.</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mt-6">
                  <p className="text-lg text-foreground">
                    This is why contractors, landscapers, and homeowners across Forest City and Rutherford County call F&S Expedited for reliable, expedited hauling they can count on.
                  </p>
                </div>
              </div>

              {/* Forest City Coverage */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Forest City & Lake Wylie Hauling Coverage</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From residential neighborhoods around Lake Wylie and <strong>Shelby City Lake Park</strong> to commercial sites along <strong>US-74</strong> and <strong>NC-10</strong>, we cover Forest City and the surrounding Rutherford County area:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-lg text-foreground">Lake Wylie and lakefront properties</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-lg text-foreground">Shelby City Lake Park area</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-lg text-foreground">US-74 / NC-10 commercial sites</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-lg text-foreground">Forest City residential neighborhoods</span>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20">
                <h2 className="text-3xl font-bold text-foreground mb-4">Need a Dump Truck in Forest City Today?</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Don't let material delivery or debris removal slow down your Forest City project. Contact F&S Expedited LLC for a free, no-obligation quote — same-day and 24/7 emergency hauling available.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 mb-6 items-center">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Call Joe!</span>
                    <Button size="lg" className="flex items-center gap-2" asChild>
                      <a href="tel:8653649011">
                        <Phone className="w-4 h-4 text-green-500" />
                        (865) 364-9011
                      </a>
                    </Button>
                  </div>
                  <Button size="lg" variant="outline" className="flex items-center gap-2" asChild>
                    <Link to="/contact">Get a Free Quote</Link>
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Serving Forest City, NC and a 100-mile radius</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>aldrich2577@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Related Articles</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Asheville Dump Truck Services</h3>
                      <p className="text-muted-foreground mb-4">Hauling and material delivery across the Asheville, NC area.</p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/blog/best-dump-truck-services-asheville-nc">Read the Asheville Guide</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Gravel Delivery Guide</h3>
                      <p className="text-muted-foreground mb-4">How much gravel you need and how we deliver it to NC job sites.</p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/blog/dump-trucks-expedited-local-hauling-shelby-charlotte-nc">Read the Guide</Link>
                      </Button>
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

export default BlogArticlePage10;
