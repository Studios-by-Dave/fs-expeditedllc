import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema, articleSchema } from "@/data/seo-schemas";
import { ChevronRight, Calendar, Clock, Truck, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BlogArticlePage8 = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Blog", url: "https://www.fs-expeditedllc.com/blog" },
    {
      name: "Article",
      url: "https://www.fs-expeditedllc.com/blog/soil-delivery-vs-gravel-delivery-which-material-does-your-project-need"
    }
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      articleSchema(
        "Soil Delivery vs. Gravel Delivery: Which Material Does Your Project Need? - F&S Expedited LLC",
        "Compare soil and gravel delivery for your next project. Learn when to use soil, when to use gravel, and how F&S Expedited can help with both.",
        "/blog/soil-delivery-vs-gravel-delivery-which-material-does-your-project-need",
        "2026-06-18"
      ),
      breadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Soil Delivery vs. Gravel Delivery: Which Material Does Your Project Need? - F&S Expedited LLC"
        description="Compare soil and gravel delivery for your next project. Learn when to use soil, when to use gravel, and how F&S Expedited can help with both."
        canonical="/blog/soil-delivery-vs-gravel-delivery-which-material-does-your-project-need"
        schema={combinedSchema}
      />
      <Navigation />
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
        <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>June 18, 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>7 min read</span>
                </div>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider rounded">
                  Material Delivery
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-wider mb-6 blog-glow-text">
                Soil Delivery vs. Gravel Delivery: Which Material Does Your Project Need?
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you're building a new driveway, preparing a construction site, or transforming your landscape, choosing the right materials can make or break your project. Two of the most commonly delivered materials are soil and gravel—but many property owners aren't always sure which one they need.
              </p>
            </div>
          </div>
        </section>

        <article className="section-padding">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto prose prose-lg text-lg">
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                At F&S Expedited LLC, we provide fast, reliable soil delivery and gravel delivery services throughout Shelby, NC and surrounding areas. Understanding the differences between these materials can help you save time, money, and frustration while ensuring your project gets off to the right start.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Understanding Soil Delivery</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Soil is the foundation of nearly every landscaping and construction project. Different types of soil serve different purposes, making it important to select the right material before scheduling a delivery.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Common Uses for Delivered Soil</h3>
              <ul className="list-disc list-inside text-muted-foreground text-lg space-y-2 mb-6">
                <li>Lawn installation and repair</li>
                <li>Garden bed preparation</li>
                <li>Tree and shrub planting</li>
                <li>Grading and leveling yards</li>
                <li>Filling low spots and erosion areas</li>
                <li>Site preparation for landscaping projects</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Quality soil helps improve drainage, supports healthy plant growth, and creates a stable foundation for outdoor improvements. Having bulk soil delivered directly to your property eliminates the hassle of multiple trips to a garden center and ensures you get the volume you need.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Signs You Need Soil Delivery</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                You may benefit from soil delivery if:
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-lg space-y-2 mb-6">
                <li>Your yard has uneven or sunken areas.</li>
                <li>You're installing new grass or landscaping.</li>
                <li>Construction has left bare or damaged ground.</li>
                <li>You need fill dirt for grading or leveling.</li>
                <li>You're creating raised garden beds.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Professional soil delivery ensures the material arrives where you need it, when you need it, helping your project stay on schedule.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">When Gravel Delivery Is the Better Choice</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                While soil supports growth and landscaping, gravel provides strength, drainage, and durability. Gravel is one of the most versatile materials used in residential and commercial projects.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Popular Uses for Gravel Delivery</h3>
              <ul className="list-disc list-inside text-muted-foreground text-lg space-y-2 mb-6">
                <li>Driveway installation and repair</li>
                <li>Parking areas</li>
                <li>Construction site access roads</li>
                <li>Drainage systems</li>
                <li>Foundation support</li>
                <li>Walkways and pathways</li>
                <li>Decorative landscaping</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Gravel offers excellent drainage characteristics and long-lasting performance, making it ideal for high-traffic areas and projects requiring a stable base.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Benefits of Gravel Delivery</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Many property owners choose gravel because it:
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-lg space-y-2 mb-6">
                <li>Reduces mud and standing water</li>
                <li>Creates durable surfaces</li>
                <li>Requires minimal maintenance</li>
                <li>Improves site accessibility</li>
                <li>Supports heavy equipment and vehicles</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                With professional gravel delivery, large quantities can be transported directly to your property without the need for expensive equipment rentals or multiple pickup trips.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Projects That Need Both Soil and Gravel</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Some of the most successful property improvements actually require both materials.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-2">New Driveways</h4>
                  <p className="text-muted-foreground">Gravel provides the base and driving surface, while soil is often needed to grade surrounding areas and improve drainage.</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-2">New Home Construction</h4>
                  <p className="text-muted-foreground">Gravel helps create stable foundations and access roads, while soil is used for final grading and landscaping.</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-2">Drainage Improvements</h4>
                  <p className="text-muted-foreground">Gravel allows water to flow properly, while soil helps shape and direct runoff around the property.</p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-2">Commercial Site Development</h4>
                  <p className="text-muted-foreground">Many commercial projects require bulk deliveries of both materials throughout different phases of construction.</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Coordinating soil delivery and gravel delivery through one trusted hauling company simplifies logistics and helps keep projects moving efficiently.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Professional Material Delivery Matters</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Ordering materials is only half the battle. Timely delivery can significantly impact project timelines and costs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Professional material delivery services help by:
              </p>

              <Card className="border border-border mb-6">
                <CardContent className="p-6">
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span className="text-foreground"><strong>Eliminating transportation headaches</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span className="text-foreground"><strong>Delivering bulk quantities efficiently</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span className="text-foreground"><strong>Reducing labor costs</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span className="text-foreground"><strong>Keeping projects on schedule</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <span className="text-foreground"><strong>Ensuring materials are placed in the proper location</strong></span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                At F&S Expedited LLC, we understand that every hour matters on a job site. That's why we focus on fast turnaround times, reliable scheduling, and dependable service for homeowners, contractors, and businesses throughout the Shelby area. Our experienced team delivers materials safely and efficiently so you can focus on completing your project.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Choosing the Right Delivery Partner</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                When searching for soil delivery or gravel delivery, look for a company that offers:
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-lg space-y-2 mb-6">
                <li>Fast response times</li>
                <li>Competitive pricing</li>
                <li>Reliable scheduling</li>
                <li>Experienced operators</li>
                <li>Licensed and insured services</li>
                <li>Flexible delivery options</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                The right hauling partner can save you valuable time while ensuring your materials arrive exactly when and where they're needed.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Schedule Your Soil or Gravel Delivery Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Whether you're tackling a landscaping project, building a driveway, or preparing a construction site, F&S Expedited LLC is ready to help. We provide dependable soil delivery and gravel delivery services throughout Shelby, NC and surrounding communities with the speed and reliability your project deserves.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Contact us today for a free quote and let our team deliver the materials you need—on time, every time.
              </p>

              <div className="text-center mb-10 pt-8">
                <Button size="lg" asChild>
                  <a href="/contact">Request a Free Quote →</a>
                </Button>
              </div>
            </div>
          </div>
        </article>

        <section className="section-padding bg-primary/5">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground tracking-wider mb-4 blog-glow-text">
                Need Soil or Gravel Delivery?
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Contact F&S Expedited LLC for professional material delivery in Shelby, NC and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Button size="lg" asChild>
                  <a href="/contact">Get Free Quote</a>
                </Button>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 animate-pulse">Call Joe!</span>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:8653649011">
                      <Phone className="w-4 h-4 mr-2 text-green-500" />
                      (865) 364-9011
                    </a>
                  </Button>
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

export default BlogArticlePage8;
