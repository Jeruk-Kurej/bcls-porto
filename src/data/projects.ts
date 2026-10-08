export type ProjectFeature = {
  title: string;
  description: string;
  icon?: string;
};

export type ProjectPlatform = "Web" | "iOS" | "Android";

export type ProjectRepo = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  platform: ProjectPlatform;
  /** When the repository was active, from first to last commit */
  period: string;
  /** "Solo" or the number of developers */
  team: string;
  /** My share of the repository's commits, for team projects */
  commitShare?: string;
  /** What I personally built */
  role: string;
  /** Set when the project is not finished, e.g. "In development" */
  status?: string;
  /** A decision or lesson from the build, in my own words */
  decision?: string;
  about: string;
  problem: string;
  solution: string;
  features: ProjectFeature[];
  techStack: string[];
  repos: ProjectRepo[];
  liveUrl?: string;
  images?: string[];
};

export const projectsData: Project[] = [
  {
    id: "uc-online-learning",
    title: "UC Online Learning",
    subtitle: "Student & Alumni Business Directory",
    platform: "Web",
    period: "Dec 2025 – Sep 2026",
    team: "2 developers",
    commitShare: "494 of 655",
    status: "In development",
    decision: "The university already had a website and a database, so the obvious route was to reuse that data. The existing tables had more than a hundred columns, many of them empty or inconsistent, so we designed our own schema for the showcase instead and revised it several times as the requirements became clearer.",
    role: "I wrote most of the application: the business, user, and featured-profile pages, the controllers and routes behind them, the spreadsheet import, and the Docker and Railway deployment setup.",
    about: "A directory for Universitas Ciputra Online Learning where students and alumni publish their business profiles, products, and services, so potential clients and collaborators can find them in one place.",
    problem: "Student and alumni entrepreneurs had no university-backed place to present their businesses and services to the wider academic and business community.",
    solution: "We built a Laravel directory with business profiles, product and service catalogs, and regional mapping. Admins review submissions before they go public, student data is imported in bulk from spreadsheets, and testimonies are screened with the Gemini API.",
    features: [
      { title: "AI testimony moderation", description: "Screens submitted testimonies with the Google Gemini API before they are published.", icon: "BrainCircuit" },
      { title: "Bulk data import", description: "Imports student and alumni profiles from spreadsheets in a single batch.", icon: "Database" },
      { title: "Cloud image storage", description: "Stores and optimizes profile and product images through Cloudinary.", icon: "Cloud" },
      { title: "Admin approval workflow", description: "Admins review, approve, or reject business profiles before they appear in the directory.", icon: "Lock" },
    ],
    techStack: ["Laravel 12 (PHP)", "Blade", "Alpine.js", "Tailwind CSS", "MySQL", "Google Gemini API", "Cloudinary", "Pest"],
    repos: [{ label: "Source code", href: "https://github.com/Jeruk-Kurej/UC-Online-Learning" }],
    liveUrl: "https://uco-web.vercel.app",
    images: ["/images/uco/uco-1.png", "/images/uco/uco-2.png", "/images/uco/uco-3.png", "/images/uco/uco-4.png"]
  },
  {
    id: "gki-darmo-permai",
    title: "GKI Darmo Permai",
    subtitle: "Community Portal & Management System",
    platform: "Web",
    period: "Apr 2026 – Sep 2026",
    team: "Solo",
    status: "On hold, waiting for the next briefing",
    role: "I designed and built the whole project on my own, from the data model and admin panel to the public pages.",
    about: "A website and admin panel for GKI Darmo Permai church. Members check worship schedules, read the weekly e-bulletin, and browse events, videos, and galleries, while committees manage the content themselves.",
    problem: "The church relied on printed bulletins and scattered communication channels for schedules and announcements, which made information slow to reach the congregation.",
    solution: "I built a public site backed by an admin panel where committees manage schedules, bulletins, events, and media. Access is organised into teams with roles and invitations, and accounts can be protected with two-factor authentication.",
    features: [
      { title: "Worship schedules and events", description: "Admins publish service schedules and church events that appear on the public site.", icon: "Calendar" },
      { title: "E-bulletin", description: "The weekly bulletin is published online instead of on paper.", icon: "BookOpen" },
      { title: "Media library", description: "Worship videos and photo galleries collected in one place.", icon: "Video" },
      { title: "Two-factor authentication", description: "Accounts can enable 2FA with recovery codes through Laravel Fortify.", icon: "Key" },
      { title: "Teams and roles", description: "Committee members are invited into teams with role-based permissions.", icon: "UsersRound" },
    ],
    techStack: ["Laravel 13 (PHP)", "Inertia.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Laravel Fortify", "Pest"],
    repos: [{ label: "Source code", href: "https://github.com/Jeruk-Kurej/GKI-Darmo-Permai" }],
    liveUrl: "https://gki-darmo-permai.vercel.app",
    images: ["/images/gki/gki-1.png", "/images/gki/gki-2.png", "/images/gki/gki-3.png"]
  },
  {
    id: "yukdebat",
    title: "YukDebat",
    subtitle: "iOS Platform for the Debate Community",
    platform: "iOS",
    period: "May 2026 – Jun 2026",
    team: "4 developers",
    commitShare: "60 of 210",
    decision: "We first planned to store images in Firebase Storage, but it turned out to need a paid plan. We moved image uploads to Cloudinary and kept Firestore for the rest of the data.",
    role: "In a team of four, I worked on the sparring rooms (capacity checks, team slots, visibility, and automatic start and cancel), the Gemini motion generator and its fallback, the adjudicator evaluation form, and the admin moderation screens.",
    about: "An iOS app for the competitive debate community. Debaters find sparring partners, generate practice motions, share case-building notes for feedback from adjudicators, and follow upcoming competitions.",
    problem: "Finding sparring partners, getting feedback from adjudicators, and tracking competition schedules were scattered across different social media groups.",
    solution: "We built a SwiftUI app on Firebase with a sparring lobby that updates in real time, a motion generator powered by the Gemini API, and a review flow where approved adjudicators evaluate debaters' notes.",
    features: [
      { title: "AI motion generator", description: "Generates debate motions with the Google Gemini API, with a fallback list when the request fails.", icon: "Bot" },
      { title: "Sparring lobby", description: "Create and join public or private sparring rooms with limited slots.", icon: "Swords" },
      { title: "Case-building and evaluation", description: "Write case notes, set their visibility, and request feedback from approved adjudicators.", icon: "FileText" },
      { title: "Competition tracker", description: "Browse upcoming debate competitions and their details.", icon: "Trophy" },
      { title: "Admin moderation", description: "Admins approve adjudicator requests and moderate public notes.", icon: "ShieldCheck" },
    ],
    techStack: ["Swift", "SwiftUI (MVVM)", "Firebase Auth", "Cloud Firestore", "Google Gemini API", "Cloudinary"],
    repos: [{ label: "Source code", href: "https://github.com/Jeruk-Kurej/YukDebat" }],
    images: ["/images/yukdebat/yukdebat-1.png", "/images/yukdebat/yukdebat-2.png"]
  },
  {
    id: "dagify",
    title: "Dagify",
    subtitle: "Business Management Suite for iPhone, iPad, and Mac",
    platform: "iOS",
    period: "May 2026 – Jun 2026",
    team: "3 developers",
    commitShare: "54 of 166",
    role: "In a team of three, I built the customer (CRM) module and authentication, worked on the offline order sync, and wrote unit tests for the view models.",
    about: "A business management app for small shops on iPhone, iPad, and Mac. It combines a point of sale, ingredient-level inventory, cashflow records, and a customer list in one native app.",
    problem: "Small business owners on Apple devices often track sales, stock, cash flow, and customers in separate tools, and a dropped connection can interrupt the cashier.",
    solution: "We built a native SwiftUI app backed by Firebase. Orders taken offline are stored on the device with SwiftData and synced when the connection returns, and the same data is available on iPhone, iPad, and a dedicated Mac app.",
    features: [
      { title: "Point of sale with offline orders", description: "Orders taken without a connection are saved on the device and synced later.", icon: "ShoppingCart" },
      { title: "Inventory and recipes", description: "Tracks ingredients in batches, links them to products through recipes, and warns before a batch expires.", icon: "Package" },
      { title: "Cashflow reports", description: "Records income and expenses and exports them as a PDF report.", icon: "FileText" },
      { title: "Customer loyalty", description: "Tracks customer visits and spending, and flags loyal customers based on store thresholds.", icon: "Users" },
      { title: "Sales analytics", description: "Charts for product performance and daily results.", icon: "BarChart" },
    ],
    techStack: ["Swift", "SwiftUI", "SwiftData", "Firebase Auth", "Cloud Firestore", "Swift Charts", "Swift Testing"],
    repos: [{ label: "Source code", href: "https://github.com/Jeruk-Kurej/Dagify" }],
    images: ["/images/dagify/dagify-1.png", "/images/dagify/dagify-2.png"]
  },
  {
    id: "sumo",
    title: "Sum-O",
    subtitle: "Android Point of Sale with a REST API",
    platform: "Android",
    period: "Dec 2025 – Jan 2026",
    team: "3 developers",
    commitShare: "95 of 143",
    role: "I wrote most of both codebases: store and product management, the order and cart flow, and navigation in the Android app, plus the store, product, order, and image-upload endpoints and the Railway deployment on the backend.",
    about: "A point-of-sale app for small businesses on Android. Owners manage one or more stores, their product catalog, and incoming orders, and see revenue by day, week, and month.",
    problem: "Small shops that run more than one outlet need a cashier app that keeps each outlet's menu, orders, and revenue separate and easy to check.",
    solution: "We built a Jetpack Compose app on top of our own Express and Prisma API. Each owner signs in, creates stores, assigns products to them, takes orders with cash or QRIS payment, and reviews revenue in an analysis view.",
    features: [
      { title: "Cashier flow", description: "A cart with automatic totals and tax, followed by cash or QRIS payment.", icon: "ShoppingCart" },
      { title: "Multi-store management", description: "One owner can run several stores and assign products to each of them.", icon: "Store" },
      { title: "Revenue analysis", description: "Revenue by day, week, and month, calculated from recorded orders.", icon: "BarChart" },
      { title: "Per-owner data isolation", description: "JWT authentication, with every store, category, and product scoped to its owner.", icon: "Shield" },
    ],
    techStack: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit", "Node.js (Express)", "Prisma", "PostgreSQL", "Cloudinary"],
    repos: [
      { label: "Android app source", href: "https://github.com/Jeruk-Kurej/Sum-O_Frontend" },
      { label: "API source", href: "https://github.com/Jeruk-Kurej/Sum-O_Backend" },
    ],
    images: ["/images/sumo/sumo-1.png", "/images/sumo/sumo-2.png"]
  },
  {
    id: "fixit",
    title: "FixIt",
    subtitle: "On-Demand Maintenance Service Marketplace",
    platform: "Web",
    period: "May 2026",
    team: "Solo",
    decision: "The order chat was the part I learned the most from. It was my first time building messaging, and getting two people to see each other's messages inside one order made the whole app feel real to me.",
    role: "I designed and built the whole project on my own, including the Prisma data model, authentication, and all three dashboards.",
    about: "A marketplace that connects customers with technicians for appliance repair and maintenance, covering booking, payment verification, chat, and reviews.",
    problem: "Customers struggle to find reliable technicians, see prices upfront, and follow the progress of a repair.",
    solution: "I built a Next.js application with a guided booking flow, order status tracking, per-order chat, and separate dashboards for customers, technicians, and admins.",
    features: [
      { title: "Multi-step booking", description: "Guides customers through appliance selection, diagnostics, price breakdown, and scheduling.", icon: "ClipboardList" },
      { title: "Order chat", description: "Customers and their assigned technician message each other inside an order.", icon: "MessageSquare" },
      { title: "Notifications and reminders", description: "In-app notifications and reminders keep both sides updated on order status.", icon: "BellRing" },
      { title: "Payment verification", description: "Down payments and final payments are checked and approved by an admin.", icon: "ShieldCheck" },
      { title: "Role-based dashboards", description: "Separate views for admins, customers, and technicians.", icon: "LayoutDashboard" },
    ],
    techStack: ["Next.js (App Router)", "React", "TypeScript", "Prisma ORM", "MySQL", "NextAuth.js", "Tailwind CSS"],
    repos: [{ label: "Source code", href: "https://github.com/Jeruk-Kurej/FixIt" }],
    liveUrl: "https://fix-it-project.vercel.app",
    images: ["/images/fixit/fixit-1.png", "/images/fixit/fixit-2.png", "/images/fixit/fixit-3.png"]
  }
];

const platformOrder: ProjectPlatform[] = ["Web", "iOS", "Android"];

/** e.g. "6 projects: 3 web, 2 iOS, 1 Android" */
export const projectSummary = `${projectsData.length} projects: ${platformOrder
  .map((platform) => {
    const count = projectsData.filter((project) => project.platform === platform).length;
    return `${count} ${platform === "Web" ? "web" : platform}`;
  })
  .join(", ")}`;
