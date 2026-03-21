import { Truck, Mountain, Trash2, Package, Zap, HardHat, type LucideIcon } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  longDescription: string;
  benefits: string[];
  backgroundImage?: string;
}

export const services: ServiceData[] = [
  {
    slug: "dump-truck-hauling",
    icon: Truck,
    title: "Dump Truck Hauling",
    description: "Heavy-duty dump truck services for construction sites, commercial projects, and residential needs. On-time, every time.",
    features: ["Bulk Material Transport", "Site-to-Site Hauling", "Flexible Scheduling"],
    longDescription: "Our dump truck hauling service is the backbone of F&S Expedited. Whether you're moving dirt, gravel, sand, or demolition debris, our fleet of heavy-duty dump trucks is equipped to handle loads of all sizes. We serve construction companies, contractors, landscapers, and homeowners within a 100-mile radius of Shelby, North Carolina.",
    benefits: [
      "Modern, well-maintained fleet of dump trucks",
      "Experienced and licensed operators",
      "On-time delivery guaranteed",
      "Competitive per-load and hourly rates",
      "Same-day dispatch available",
      "Fully licensed and insured",
    ],
    backgroundImage: heroTruck,
  },
  {
    slug: "gravel-sand-delivery",
    icon: Mountain,
    title: "Gravel & Sand Delivery",
    description: "Quality gravel, sand, and crushed stone delivered directly to your job site. Multiple grades available.",
    features: ["Crushed Stone", "Fill Sand", "Road Base Material"],
    longDescription: "We deliver a wide range of gravel, sand, and crushed stone products directly to your job site. Whether you need material for driveways, foundations, drainage, or landscaping, we source quality aggregates and deliver them on your schedule. Bulk quantities available with competitive pricing.",
    benefits: [
      "Multiple grades and types available",
      "Bulk delivery for large projects",
      "Sourced from quality local suppliers",
      "Spread or dumped to your specifications",
      "Volume discounts for repeat customers",
      "Fast turnaround on orders",
    ],
    backgroundImage: heroTruck,
  },
  {
    slug: "debris-removal",
    icon: Trash2,
    title: "Debris Removal",
    description: "Construction debris removal and site cleanup services. We handle the mess so you can focus on building.",
    features: ["Construction Waste", "Demolition Debris", "Yard Waste"],
    longDescription: "Keep your job site clean and safe with our professional debris removal service. We haul away construction waste, demolition materials, concrete, wood, drywall, and more. Our team works quickly and efficiently to clear your site so your project stays on schedule.",
    benefits: [
      "Fast site cleanup and clearing",
      "Responsible disposal and recycling",
      "Handles all types of construction debris",
      "Reduces safety hazards on-site",
      "Flexible scheduling around your project",
      "Competitive flat-rate and per-load pricing",
    ],
    backgroundImage: heroTruck,
  },
  {
    slug: "aggregate-transport",
    icon: Package,
    title: "Aggregate Transport",
    description: "Reliable aggregate transport for large-scale construction and infrastructure projects across the region.",
    features: ["Limestone", "Recycled Concrete", "Base Materials"],
    longDescription: "For large-scale construction and infrastructure projects, our aggregate transport service ensures your materials arrive safely and on time. We handle limestone, recycled concrete, asphalt millings, and other base materials critical to roads, foundations, and commercial builds.",
    benefits: [
      "Large-capacity hauling for big projects",
      "Reliable scheduling for ongoing contracts",
      "100-mile service radius from Shelby, NC",
      "Coordination with quarries and suppliers",
      "DOT-compliant transport",
      "Dedicated project management support",
    ],
    backgroundImage: heroTruck,
  },
  {
    slug: "emergency-expedited",
    icon: Zap,
    title: "Emergency Expedited",
    description: "Need materials hauled TODAY? Our expedited service gets your load where it needs to be — fast.",
    features: ["Same-Day Service", "Priority Dispatch", "24/7 Available"],
    longDescription: "When time is critical, our emergency expedited hauling service delivers. Whether you have an urgent material need, a last-minute project change, or need emergency debris removal, our team is ready to roll. We prioritize expedited requests and can have a truck on-site within hours.",
    benefits: [
      "Same-day and next-day hauling",
      "Priority dispatch over standard orders",
      "24/7 availability for emergencies",
      "Rapid response time",
      "Direct communication with dispatch",
      "No surprise fees — transparent pricing",
    ],
    backgroundImage: heroTruck,
  },
  {
    slug: "commercial-hauling",
    icon: HardHat,
    title: "Commercial Hauling",
    description: "Full-scale hauling solutions for contractors, developers, and commercial construction projects.",
    features: ["Contract Rates", "Fleet Availability", "Project Management"],
    longDescription: "Our commercial hauling service is designed for contractors, developers, and commercial construction companies that need a reliable hauling partner. We offer contract rates, dedicated fleet availability, and project management support to keep your builds on track and on budget.",
    benefits: [
      "Dedicated account management",
      "Volume and contract-based pricing",
      "Multiple trucks available simultaneously",
      "Flexible long-term scheduling",
      "Coordination with your project timeline",
      "Proven track record with commercial clients",
    ],
    backgroundImage: heroTruck,
  },
];
