import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DumpTruckGame } from "@/components/DumpTruckGame";
import { Footer } from "@/components/Footer";
import { ChevronRight, Gamepad2 } from "lucide-react";

const GamePage = () => {
  const breadcrumbs = [
    { name: "Home", url: "https://www.fs-expeditedllc.com/" },
    { name: "Dump Truck Battle", url: "https://www.fs-expeditedllc.com/game" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Dump Truck Battle — Mini Game | F&S Expedited LLC"
        description="Play our Dump Truck mini game! Sink hidden trucks to unlock exclusive hauling discounts and rewards from F&S Expedited LLC."
        canonical="/game"
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

      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="py-8 bg-gradient-to-b from-primary/5 to-background">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Gamepad2 className="w-8 h-8 text-primary" />
                <span className="text-primary font-semibold tracking-widest text-sm uppercase font-sans">
                  Interactive Mini Game
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-wider mb-4">
                DUMP TRUCK
              </h1>
              <p className="text-lg text-muted-foreground">
                You Sank My Dump Truck! Find all 3 hidden trucks to unlock exclusive rewards and discounts.
              </p>
            </div>
          </div>
        </section>

        {/* Game Section */}
        <section className="py-12">
          <div className="container px-4">
            <DumpTruckGame />
          </div>
        </section>

        {/* How to Play */}
        <section className="py-8 bg-muted/30">
          <div className="container px-4 max-w-2xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-center mb-6 tracking-wider">
              HOW TO PLAY
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💣</span>
                </div>
                <h3 className="font-semibold mb-1">5 Shots</h3>
                <p className="text-sm text-muted-foreground">You have 5 chances to find the hidden trucks</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-1">Click to Fire</h3>
                <p className="text-sm text-muted-foreground">Click grid cells to reveal hits or misses</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-semibold mb-1">Win Rewards</h3>
                <p className="text-sm text-muted-foreground">Sink all 3 trucks to unlock exclusive discounts</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GamePage;
