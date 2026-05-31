import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Footer } from "@/components/Footer";
import { breadcrumbSchema, localBusinessSchema } from "@/data/seo-schemas";
import { ChevronRight, Calendar, Clock, Truck, Wrench, AlertTriangle, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Blog", url: "https://www.fs-expeditedllc.com/blog" }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Role of Dump Trucks in Expedited Local Hauling Projects Around Shelby & Charlotte NC",
      excerpt: "Discover how dump trucks are essential for expedited local hauling projects in Shelby and Charlotte NC, serving construction sites and material delivery needs across the region.",
      date: "May 23, 2026",
      readTime: "8 min read",
      icon: Truck,
      category: "Local Hauling",
      fullContent: true,
      link: "/blog/dump-trucks-expedited-local-hauling-shelby-charlotte-nc"
    },
    {
      id: 2,
      title: "Why Manufacturers Choose F&S Expedited Trucking for Emergency Freight Solutions",
      excerpt: "Discover why manufacturers across North Carolina trust F&S Expedited Trucking for reliable emergency freight solutions that keep production lines moving.",
      date: "May 23, 2026",
      readTime: "7 min read",
      icon: Truck,
      category: "Emergency Freight",
      fullContent: true,
      link: "/blog/why-manufacturers-choose-fs-expedited-trucking-emergency-freight"
    },
    {
      id: 3,
      title: "How Expedited Dump Truck Services Prevent Costly Project Delays in North Carolina",
      excerpt: "Learn how expedited dump truck services can save your construction project from expensive delays and keep your timeline on track.",
      date: "May 23, 2026",
      readTime: "6 min read",
      icon: Truck,
      category: "Project Management",
      fullContent: true,
      link: "/blog/expedited-dump-truck-services-prevent-costly-project-delays-north-carolina"
    },
    {
      id: 4,
      title: "Why F&S Hauling is Your Go-To Choice for Reliable Dump Truck Services in Shelby, NC",
      excerpt: "Discover why F&S Hauling stands out as the premier choice for professional dump truck services in Shelby, NC. Fast, reliable, and fully licensed.",
      date: "May 29, 2026",
      readTime: "8 min read",
      icon: Truck,
      category: "Local Services",
      fullContent: true,
      link: "/blog/why-fs-hauling-reliable-dump-truck-services-shelby-nc"
    },
    {
      id: 5,
      title: "Complete Material Delivery Guide for Construction Projects in Shelby, NC",
      excerpt: "Your comprehensive guide to material delivery services in Shelby, NC. Learn about gravel, sand, soil delivery and how F&S Expedited keeps your construction projects on schedule.",
      date: "May 31, 2026",
      readTime: "10 min read",
      icon: Truck,
      category: "Material Delivery",
      fullContent: true,
      link: "/blog/material-delivery-guide-shelby-nc-construction-projects"
    }
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessSchema,
      breadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Blog — Trucking & Hauling Insights from F&S Expedited LLC"
        description="Expert insights and tips on dump truck hauling, material delivery, site preparation, and emergency expedited services in Shelby, NC."
        canonical="/blog"
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
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-wider mb-6 blog-glow-text">
                F&S INDUSTRY NEWS
              </h1>
              <p className="text-lg text-muted-foreground">
                Expert insights, tips, and industry news from the F&S Expedited LLC team
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="container px-4">
            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {blogPosts.map((post) => {
                const Icon = post.icon;
                return (
                  <Card key={post.id} className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground blog-glow-text">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                        {post.fullContent && post.link ? (
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/70" asChild>
                            <Link to={post.link}>
                              Read More
                            </Link>
                          </Button>
                        ) : (
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/70">
                            Read More
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary/5">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground tracking-wider mb-4 blog-glow-text">
                Need Hauling Services?
              </h2>
              <p className="text-muted-foreground mb-6">
                Contact F&S Expedited LLC for professional dump truck hauling and expedited services in Shelby, NC and surrounding areas.
              </p>
              <Button size="lg" asChild>
                <a href="/contact">Get Free Quote</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
