export type ProjectFeature = {
  title: string;
  description: string;
  icon?: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  about: string;
  problem: string;
  solution: string;
  features: ProjectFeature[];
  techStack: string[];
  tools: string[];
  link: string;
  liveUrl?: string;
  images?: string[];
};

export const projectsData: Project[] = [
  {
    id: "uc-online-learning",
    title: "UC Online Learning",
    subtitle: "Student & Alumni Business Directory",
    about: "A comprehensive academic and business directory platform built for Universitas Ciputra Online. This platform bridges the gap between student/alumni entrepreneurs and potential clients or collaborators by showcasing their business profiles, achievements, and service catalogs.",
    problem: "Students and alumni entrepreneurs often lack a unified, university-backed platform to professionally showcase their portfolios and services to the wider academic and business community.",
    solution: "Developed a robust directory ecosystem with AI moderation to ensure content quality and a seamless onboarding system to handle mass data imports efficiently.",
    features: [
      { title: "AI-Powered Moderation", description: "Integrates Google Gemini API to analyze and moderate user-generated content and business descriptions.", icon: "BrainCircuit" },
      { title: "Automated Data Onboarding", description: "Custom CSV import system to batch-upload student and alumni profiles seamlessly.", icon: "Database" },
      { title: "Cloud Media Management", description: "Automated image optimization and storage scaling utilizing Cloudinary integration.", icon: "Cloud" },
      { title: "Role-Based Workflows", description: "Secure admin panel for reviewing, approving, or rejecting business profile submissions.", icon: "Lock" },
    ],
    techStack: ["Laravel 11 (PHP)", "React.js", "TypeScript", "Tailwind CSS", "Inertia.js", "MySQL"],
    tools: ["Docker", "Railway"],
    link: "https://github.com/Jeruk-Kurej/UC-Online-Learning",
    liveUrl: "https://uco-web.vercel.app",
    images: ["/images/uco/uco-1.png", "/images/uco/uco-2.png", "/images/uco/uco-3.png", "/images/uco/uco-4.png"]
  },
  {
    id: "gki-darmo-permai",
    title: "GKI Darmo Permai",
    subtitle: "Community Portal & Management System",
    about: "An interactive and highly secure community portal developed for GKI Darmo Permai. The platform serves as a centralized digital hub for congregation members to access worship schedules, digital bulletins, and multimedia content.",
    problem: "The church relied heavily on physical paper bulletins and fragmented communication channels for scheduling, leading to inefficiencies and reduced engagement.",
    solution: "Engineered a centralized digital portal to digitalize the weekly bulletin, integrate video streaming, and provide a secure management interface for church committees.",
    features: [
      { title: "Dynamic Scheduling & Media", description: "Real-time updates for worship schedules, integrated video streaming, and event galleries.", icon: "Calendar" },
      { title: "Digital Bulletin", description: "Paperless weekly newsletter distribution system.", icon: "BookOpen" },
      { title: "Enterprise-Grade Security", description: "Strict Two-Factor Authentication (2FA) enforcement and recovery code management for team/admin accounts.", icon: "Key" },
      { title: "Team Management", description: "Advanced permission and role management system for different church committees.", icon: "UsersRound" },
    ],
    techStack: ["Laravel (PHP)", "React.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Pest PHP"],
    tools: ["Vercel", "GitHub Actions (CI/CD)"],
    link: "https://github.com/Jeruk-Kurej/GKI-Darmo-Permai",
    liveUrl: "https://gki-darmo-permai.vercel.app",
    images: ["/images/gki/gki-1.png", "/images/gki/gki-2.png", "/images/gki/gki-3.png"]
  },
  {
    id: "yukdebat",
    title: "YukDebat",
    subtitle: "iOS Platform for the Debate Community",
    about: "YukDebat is an innovative iOS platform tailored for the competitive debate community. It serves as a centralized hub for debaters, adjudicators, and competition promoters to interact, practice, and evaluate debate motions.",
    problem: "Finding quality debate sparring partners, getting constructive feedback from certified adjudicators, and tracking debate competition schedules are often scattered across different social media groups.",
    solution: "YukDebat bridges this gap by offering a dedicated sparring lobby, an AI-powered motion generator, and a peer-review system where debaters can publish their case-building notes to be evaluated by verified adjudicators.",
    features: [
      { title: "AI Motion Generator", description: "Integrates with Google Gemini API to dynamically generate challenging debate motions.", icon: "Bot" },
      { title: "Sparring Lobby", description: "Create and join public/private debate sparring rooms with slot allocations.", icon: "Swords" },
      { title: "Case-Building & Evaluation", description: "Write debate notes, set visibility, and request feedback from verified adjudicators.", icon: "FileText" },
      { title: "Competition Tracker", description: "Browse, register, and track upcoming debate competitions.", icon: "Trophy" },
      { title: "Admin Moderation Dashboard", description: "Built-in moderation tools to approve adjudicator requests and manage public notes.", icon: "ShieldCheck" },
    ],
    techStack: ["Swift", "SwiftUI (MVVM)", "Firebase", "Google Gemini API", "CoreData / SwiftData"],
    tools: ["Xcode", "Swift Package Manager"],
    link: "https://github.com/Jeruk-Kurej/YukDebat"
  },
  {
    id: "dagify",
    title: "Dagify",
    subtitle: "Apple Ecosystem CRM & Business Tracker",
    about: "Dagify is a CRM and business management suite built natively for the Apple Ecosystem (macOS/iPadOS/iOS). It integrates deeply with Cloud infrastructure to provide business owners with a premium, synchronized overview of their operations.",
    problem: "Business owners using Apple devices often lack a native, high-performance CRM tool that synchronizes seamlessly across their Mac, iPad, and iPhone for tracking cash flow and loyal customers.",
    solution: "I built Dagify utilizing modern SwiftUI and Firebase to provide a seamless, native Apple experience. It centralizes customer data, tracks spending habits, and leverages SwiftData for high-speed local caching.",
    features: [
      { title: "CRM & Loyalty", description: "Tracks customer visits, spending habits, and automatically flags loyal customers based on store thresholds.", icon: "Users" },
      { title: "Cross-Device Sync", description: "Seamless data synchronization across iPhone, iPad, and Mac.", icon: "Cloud" },
      { title: "Real-Time Tracking", description: "Live updates for cashflow and customer interactions.", icon: "BarChart" },
    ],
    techStack: ["Swift", "SwiftUI", "SwiftData", "Firebase"],
    tools: ["Xcode", "Swift Package Manager"],
    link: "https://github.com/Jeruk-Kurej/Dagify"
  },
  {
    id: "sumo",
    title: "Sum-O",
    subtitle: "Android POS Ecosystem",
    about: "Sum-O is a comprehensive Android-native Point of Sale (POS) solution designed to empower small to medium businesses. It provides real-time business analytics, seamless offline-to-online synchronization, and robust multi-tenant data isolation.",
    problem: "Many small to medium businesses struggle with network instability paralyzing their cloud-dependent POS systems, causing major disruptions during cashier duties and inventory tracking.",
    solution: "I engineered an offline-first architecture for Sum-O, allowing transactions to be saved locally when the connection drops and synced seamlessly later. It includes strict user-data isolation for secure multi-branch operations.",
    features: [
      { title: "Smart POS", description: "Real-time cart management with dynamic price calculation and tax integration.", icon: "ShoppingCart" },
      { title: "Inventory & Recipe Management", description: "Automated stock deduction based on product recipes and low-stock/expiration alerts.", icon: "Package" },
      { title: "Business Analytics", description: "Real-time charts for revenue, expenses, and best-selling products.", icon: "BarChart" },
      { title: "Multi-User Security", description: "Robust JWT authentication and strictly isolated data access per user/branch.", icon: "Shield" },
    ],
    techStack: ["Kotlin", "Jetpack Compose", "MVVM", "Node.js", "Prisma"],
    tools: ["Android Studio", "GitHub", "Gradle"],
    link: "https://github.com/Jeruk-Kurej/Sum-O"
  },
  {
    id: "fixit",
    title: "FixIt",
    subtitle: "On-Demand Maintenance Service Marketplace",
    about: "An on-demand service marketplace connecting customers with verified technicians for appliance repairs and maintenance. FixIt streamlines the entire service lifecycle from diagnostics to scheduling and secure payments.",
    problem: "Customers face difficulties in finding reliable technicians, getting transparent pricing upfront, and tracking their repair progress efficiently.",
    solution: "Created a centralized marketplace with a guided, multi-step booking process, real-time chat, and dedicated dashboards for all user roles to ensure a transparent service lifecycle.",
    features: [
      { title: "Smart Multi-Step Booking", description: "A highly engaging booking flow guiding users through Appliance Selection ➔ Diagnostics ➔ Price Breakdown ➔ Scheduling.", icon: "ClipboardList" },
      { title: "Real-Time Communication", description: "Integrated live chat hub facilitating direct communication between customers and assigned technicians.", icon: "MessageSquare" },
      { title: "Automated Notifications", description: "Smart reminder engine and toast notifications to keep users updated on their order status.", icon: "BellRing" },
      { title: "Multi-Tenant Dashboards", description: "Dedicated, customized UI views for Admins, Customers, and Technicians.", icon: "LayoutDashboard" },
    ],
    techStack: ["Next.js (App Router)", "React", "TypeScript", "Prisma ORM", "NextAuth.js", "Tailwind CSS"],
    tools: ["Vercel", "PostgreSQL"],
    link: "https://github.com/Jeruk-Kurej/FixIt",
    liveUrl: "https://fix-it-project.vercel.app"
  }
];
