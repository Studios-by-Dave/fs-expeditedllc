import { Truck, Mountain, Trash2, Package, Zap, HardHat, Trees, Construction, type LucideIcon } from "lucide-react";
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
  category?: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  services: string[];
  subcategories?: Array<{
    title: string;
    description: string;
    features: string[];
  }>;
  backgroundImage?: string;
}

export const serviceCategories = [
  {
    slug: "material-delivery",
    title: "Material Delivery",
    description: "Quality materials delivered directly to your job site",
    services: ["gravel-sand-delivery", "aggregate-transport"],
    subcategories: [
      {
        title: "Gravel Delivery",
        description: "Premium gravel for driveways, foundations, drainage, and landscaping projects",
        features: ["Crushed Stone", "Road Base", "Decorative Gravel", "Fill Gravel"]
      },
      {
        title: "Sand Delivery", 
        description: "High-quality sand for construction, landscaping, and specialized applications",
        features: ["Fill Sand", "Masonry Sand", "Play Sand", "Concrete Sand"]
      },
      {
        title: "Soil Delivery",
        description: "Topsoil and fill dirt for landscaping, gardening, and construction projects",
        features: ["Topsoil", "Fill Dirt", "Garden Soil", "Compost Mix"]
      }
    ],
    backgroundImage: "/assets/material-delivery.png"
  },
  {
    slug: "site-services", 
    title: "Site Services",
    description: "Professional site preparation and land management",
    services: ["site-prep", "land-clearing", "debris-removal"],
    subcategories: [
      {
        title: "Aggregate Transport",
        description: "Large-scale aggregate transport for construction and infrastructure projects across the region",
        features: ["Limestone Transport", "Recycled Concrete", "Base Materials", "DOT-Compliant Hauling"]
      },
      {
        title: "Site Prep", 
        description: "Professional site preparation including grading, excavation, and ground preparation for construction",
        features: ["Land Grading", "Excavation", "Ground Preparation", "Drainage Planning"]
      },
      {
        title: "Land Clearing",
        description: "Complete land clearing services including tree removal, brush clearing, and vegetation management",
        features: ["Tree Removal", "Brush Clearing", "Vegetation Management", "Environmentally Responsible"]
      },
      {
        title: "Debris Removal",
        description: "Construction debris removal and site cleanup services to keep your project safe and on schedule",
        features: ["Construction Waste", "Demolition Debris", "Yard Waste", "Site Cleanup"]
      }
    ],
    backgroundImage: "/assets/site-services.png"
  },
  {
    slug: "emergency-expedited",
    title: "Emergency Expedited", 
    description: "Fast response hauling and emergency services",
    services: ["emergency-expedited", "commercial-hauling", "dump-truck-hauling"],
    subcategories: [
      {
        title: "Emergency Expedited",
        description: "Same-day and next-day hauling services for urgent material needs and project emergencies",
        features: ["Same-Day Service", "Priority Dispatch", "24/7 Available", "Rapid Response"]
      },
      {
        title: "Commercial Hauling", 
        description: "Full-scale hauling solutions for contractors, developers, and commercial construction projects",
        features: ["Contract Rates", "Fleet Availability", "Project Management", "Dedicated Support"]
      },
      {
        title: "Dump Truck Hauling",
        description: "Heavy-duty dump truck services for construction sites, commercial projects, and residential needs",
        features: ["Bulk Material Transport", "Site-to-Site Hauling", "Flexible Scheduling", "On-Time Delivery"]
      }
    ],
    backgroundImage: "/assets/emergency-services.png"
  }
];

export const services: ServiceData[] = [
  {
    slug: "dump-truck-hauling",
    icon: Truck,
    title: "Dump Truck Hauling",
    description: "Heavy-duty dump truck services for construction sites, commercial projects, and residential needs. On-time, every time.",
    features: ["Bulk Material Transport", "Site-to-Site Hauling", "Flexible Scheduling"],
    longDescription: "At F&S Expedited, dump truck hauling isn't just a service—it's our foundation. We've built our reputation on moving dirt, gravel, sand, and demolition debris with precision and reliability. Our fleet of heavy-duty dump trucks handles everything from small residential loads to large commercial projects. As your local Shelby hauling partner, we understand the urgency of construction timelines and the importance of having materials exactly where you need them, exactly when you need them. When you call F&S, you're not just getting a truck—you're getting a dedicated partner committed to keeping your project moving forward.",
    benefits: [
      "Modern, well-maintained fleet of dump trucks",
      "Experienced and licensed operators",
      "On-time delivery guaranteed",
      "Competitive per-load and hourly rates",
      "Same-day dispatch available",
      "Fully licensed and insured",
    ],
    backgroundImage: heroTruck,
    category: "emergency-expedited",
  },
  {
    slug: "gravel-sand-delivery",
    icon: Mountain,
    title: "Gravel & Sand Delivery",
    description: "Quality gravel, sand, and crushed stone delivered directly to your job site. Multiple grades available.",
    features: ["Crushed Stone", "Fill Sand", "Road Base Material"],
    longDescription: "At F&S Expedited, we understand that quality materials are the foundation of every successful project. That's why we've spent years building relationships with trusted local suppliers to bring you the finest gravel, sand, and crushed stone directly to your job site. Whether you're laying a driveway, building a foundation, creating proper drainage, or landscaping, we deliver exactly what you need, when you need it. Our team knows the difference between #57 stone and crusher run, between fill sand and mason sand—and we make sure you get the right material for your specific application. We're not just delivery drivers; we're material specialists committed to your project's success.",
    benefits: [
      "Multiple grades and types available",
      "Bulk delivery for large projects",
      "Sourced from quality local suppliers",
      "Spread or dumped to your specifications",
      "Volume discounts for repeat customers",
      "Fast turnaround on orders",
    ],
    backgroundImage: heroTruck,
    category: "material-delivery",
  },
  {
    slug: "debris-removal",
    icon: Trash2,
    title: "Debris Removal",
    description: "Construction debris removal and site cleanup services. We handle the mess so you can focus on building.",
    features: ["Construction Waste", "Demolition Debris", "Yard Waste"],
    longDescription: "At F&S Expedited, we believe a clean job site is a safe and productive job site. That's why we've made debris removal one of our core services. Our team handles everything from construction waste and demolition materials to concrete, wood, drywall, and yard waste. We understand that debris doesn't just look bad—it creates safety hazards, slows down work, and can cause costly delays. That's why we work quickly and efficiently to clear your site, sorting materials for responsible disposal and recycling when possible. When you choose F&S for debris removal, you're choosing a partner who understands that cleanup isn't an afterthought—it's essential to keeping your project on schedule and your team safe.",
    benefits: [
      "Fast site cleanup and clearing",
      "Responsible disposal and recycling",
      "Handles all types of construction debris",
      "Reduces safety hazards on-site",
      "Flexible scheduling around your project",
      "Competitive flat-rate and per-load pricing",
    ],
    backgroundImage: heroTruck,
    category: "emergency-expedited",
  },
  {
    slug: "aggregate-transport",
    icon: Package,
    title: "Aggregate Transport",
    description: "Reliable aggregate transport for large-scale construction and infrastructure projects across the region.",
    features: ["Limestone", "Recycled Concrete", "Base Materials"],
    longDescription: "At F&S Expedited, we understand that large-scale construction and infrastructure projects can't afford delays in material delivery. That's why we've specialized our aggregate transport service to handle the critical materials that form backbone of roads, foundations, and commercial builds. Whether you need limestone, recycled concrete, asphalt millings, or other base materials, our fleet ensures they arrive safely and on time. We've spent years building relationships with quarries and suppliers across our 100-mile service area, giving us the knowledge and coordination capabilities to keep your project moving. When you choose F&S for aggregate transport, you're choosing a partner who understands that your timeline depends on our reliability.",
    benefits: [
      "Large-capacity hauling for big projects",
      "Reliable scheduling for ongoing contracts",
      "100-mile service radius from Shelby, NC",
      "Coordination with quarries and suppliers",
      "DOT-compliant transport",
      "Dedicated project management support",
    ],
    backgroundImage: heroTruck,
    category: "material-delivery",
  },
  {
    slug: "emergency-expedited",
    icon: Zap,
    title: "Emergency Expedited",
    description: "Need materials hauled TODAY? Our expedited service gets your load where it needs to be — fast.",
    features: ["Same-Day Service", "Priority Dispatch", "24/7 Available"],
    longDescription: "At F&S Expedited, we know that in construction and hauling, 'emergency' means 'right now.' When your project hits an unexpected roadblock—whether it's a material shortage, a sudden debris removal need, or a last-minute project change—we're the team you call. Our emergency expedited service isn't just about speed; it's about being the reliable partner who steps up when others can't. We've built our entire operation around being ready, with priority dispatch that puts your needs ahead of standard orders and a team that understands urgency. When you call F&S for emergency service, you're getting more than a truck—you're getting peace of mind that your critical material needs will be handled.",
    benefits: [
      "Same-day and next-day hauling",
      "Priority dispatch over standard orders",
      "24/7 availability for emergencies",
      "Rapid response time",
      "Direct communication with dispatch",
      "No surprise fees — transparent pricing",
    ],
    backgroundImage: heroTruck,
    category: "emergency-expedited",
  },
  {
    slug: "commercial-hauling",
    icon: HardHat,
    title: "Commercial Hauling",
    description: "Full-scale hauling solutions for contractors, developers, and commercial construction projects.",
    features: ["Contract Rates", "Fleet Availability", "Project Management"],
    longDescription: "At F&S Expedited, we understand that commercial construction projects run on tight schedules and even tighter budgets. That's why we've built our commercial hauling service around being more than just a trucking company—we're your project partner. We offer contract rates that help you forecast costs, dedicated fleet availability so you never have to worry about equipment access, and project management support that integrates seamlessly with your construction timeline. We've earned trust of contractors and developers across our service area by understanding that commercial success depends on reliability, consistency, and having a hauling partner who shows up ready to work. When you choose F&S for commercial hauling, you're choosing a team that speaks your language and understands your business needs.",
    benefits: [
      "Dedicated account management",
      "Volume and contract-based pricing",
      "Multiple trucks available simultaneously",
      "Flexible long-term scheduling",
      "Coordination with your project timeline",
      "Proven track record with commercial clients",
    ],
    backgroundImage: heroTruck,
    category: "emergency-expedited",
  },
  {
    slug: "site-prep",
    icon: Construction,
    title: "Site Prep",
    description: "Professional site preparation services including grading, excavation, and ground preparation for construction projects.",
    features: ["Land Grading", "Excavation", "Ground Preparation"],
    longDescription: "At F&S Expedited, we know that every successful construction project starts long before first foundation is poured—it starts with proper site preparation. That's why we've made site prep one of our core specialties. Our team handles everything from basic land grading to complex excavation and ground preparation, using modern equipment and decades of experience to ensure your site is ready for construction. We understand that proper drainage, stable ground preparation, and precise grading aren't just nice-to-haves—they're essential to preventing costly problems down the road. When you choose F&S for site preparation, you're choosing a partner who understands that getting ground right first saves time, money, and headaches throughout your entire project.",
    benefits: [
      "Professional grading and excavation",
      "Proper drainage planning",
      "Site preparation to your specifications",
      "Experienced operators",
      "Modern equipment fleet",
      "Coordination with your construction timeline",
    ],
    backgroundImage: heroTruck,
    category: "site-services",
  },
  {
    slug: "land-clearing",
    icon: Trees,
    title: "Land Clearing",
    description: "Complete land clearing services including tree removal, brush clearing, and vegetation management for development projects.",
    features: ["Tree Removal", "Brush Clearing", "Vegetation Management"],
    longDescription: "At F&S Expedited, we understand that land clearing is often the first critical step in transforming property for development. That's why we approach every clearing project with both efficiency and respect for the land. Our team handles everything from selective tree removal to large-scale brush clearing and vegetation management, turning overgrown or wooded areas into development-ready sites. We believe in doing the job right the first time—clearing efficiently while minimizing environmental impact and ensuring your land is properly prepared for whatever comes next, whether it's construction, landscaping, or further development. When you choose F&S for land clearing, you're choosing a partner who sees the potential in your property and knows how to unlock it safely and effectively.",
    benefits: [
      "Complete land clearing solutions",
      "Selective tree removal or full clearing",
      "Brush and vegetation management",
      "Environmentally responsible practices",
      "Debris removal and cleanup included",
      "Preparation for construction or landscaping",
    ],
    backgroundImage: heroTruck,
    category: "site-services",
  },
];
