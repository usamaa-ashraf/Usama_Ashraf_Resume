export const profile = {
  name: "Usama Ashraf",
  role: "Project & Operations Lead",
  email: "usamaashraf79@gmail.com",
  workEmail: "usama.ashraf@quantumbases.com",
  phone: "+92 313 4977229",
  phoneHref: "tel:+923134977229",
  location: "Lahore, Pakistan",
  availability: "Available for Project & Operations Leadership (2026)",
  calendly: "https://calendly.com/usamaashraf79/30min",
  linkedin: "https://www.linkedin.com/in/usama-qbx/",
  dribbble: "https://dribbble.com/Usama2",
  headline:
    "Bridging Technical Execution & Business Strategy Across Web3, AI & Fintech.",
  subheading:
    "Project Management & Operations Leader with 5+ years of experience steering cross-functional engineering, design, and finance teams to scale complex platforms from build to market.",
  about:
    "Business and project management professional with 5+ years of experience spanning operations, finance & admin, project management, and business development across tech, fintech, blockchain, and real estate ventures. Proven track record coordinating cross-functional delivery, managing client relationships, and scaling early-stage products from build to launch. Comfortable operating at the intersection of business strategy and technical execution.",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const heroMetrics = [
  {
    value: "5+",
    label: "Years Cross-Functional Leadership",
    detail: "Engineering, design, QA & finance",
  },
  {
    value: "28+",
    label: "Delivered Enterprise & Web3 Projects",
    detail: "From zero-to-one to scale",
  },
  {
    value: "100%",
    label: "On-Time Sprint & Launch Record",
    detail: "Predictable, accountable delivery",
  },
];

export const aboutHighlights = [
  {
    title: "Delivery Ownership",
    description:
      "I run the full lifecycle: scoping, sprint planning, QA sign-off, launch readiness, and post-release iteration.",
  },
  {
    title: "Cross-Functional Fluency",
    description:
      "Comfortable translating between engineers, designers, compliance teams, finance, and enterprise clients.",
  },
  {
    title: "Commercial Context",
    description:
      "Every roadmap decision is grounded in unit economics, operational risk, and the outcome the client actually needs.",
  },
  {
    title: "Calm Under Pressure",
    description:
      "Regulated launches, trading systems, and enterprise rollouts demand tight coordination. I keep teams aligned and moving.",
  },
];

export type SkillCategory =
  | "Project Leadership"
  | "Operations & Finance"
  | "Product & Design"
  | "Domain Expertise";

export const skillCategories: Array<"All" | SkillCategory> = [
  "All",
  "Project Leadership",
  "Operations & Finance",
  "Product & Design",
  "Domain Expertise",
];

export const skillGroups: {
  category: SkillCategory;
  icon: "clipboard" | "finance" | "design" | "domain";
  skills: string[];
}[] = [
  {
    category: "Project Leadership",
    icon: "clipboard",
    skills: [
      "Agile / Scrum",
      "Jira Sprint Planning",
      "Cross-functional Team Leadership",
      "Product Lifecycles",
      "Scope Management",
    ],
  },
  {
    category: "Operations & Finance",
    icon: "finance",
    skills: [
      "P&L Management",
      "Operational Workflows",
      "Client Relationship Management (CRM)",
      "Resource Allocation",
      "Financial Auditing",
    ],
  },
  {
    category: "Product & Design",
    icon: "design",
    skills: [
      "Figma Design Direction",
      "Product Discovery",
      "UX Review & QA",
      "Roadmap Prioritisation",
      "Stakeholder Alignment",
    ],
  },
  {
    category: "Domain Expertise",
    icon: "domain",
    skills: [
      "Web3 Protocols",
      "Smart Contracts",
      "AI / ML Infrastructure",
      "KYC / AML Compliance Systems",
      "REST APIs",
      "Token Launches & DeFi",
    ],
  },
];

export const tools = [
  "Jira",
  "Confluence",
  "Figma",
  "Google Workspace",
  "Notion",
  "Slack",
  "Trello",
  "Financial Auditing",
];

export type AdditionalRole = {
  role: string;
  period: string;
  note: string;
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  additionalRoles?: AdditionalRole[];
};

export const experiences: Experience[] = [
  {
    role: "Project Manager & Business Management",
    company: "Quantum Bases",
    location: "Lahore, Pakistan",
    period: "Jul 2023 – Present",
    current: true,
    summary:
      "Lead end-to-end project delivery and business development initiatives across client engagements.",
    highlights: [
      "Oversee operations and project financial oversight across concurrent client portfolios.",
      "Align engineering, design, QA, and finance teams around a single delivery plan.",
      "Own commercial conversations from scoping and proposals through launch and retention.",
    ],
    additionalRoles: [
      {
        role: "Operations & Finance (Part-time)",
        period: "Jan 2023 – Jun 2023",
        note: "Continued operations and finance responsibilities part-time while concurrently holding full-time roles at Meidan, Real Estate Firm, and Realty Revive.",
      },
      {
        role: "Operations & Finance",
        period: "May 2022 – Dec 2022",
        note: "Managed operational workflows and finance tracking for client projects.",
      },
    ],
  },
  {
    role: "Project Team Lead",
    company: "Verifi Lite LLC",
    location: "Remote",
    period: "Jul 2025 – Jan 2026",
    summary:
      "Led delivery of a B2B identity-verification SaaS product, coordinating engineering and compliance requirements.",
    highlights: [
      "Managed KYC / AML integrations and enterprise customer onboarding workflows.",
      "Worked across SaaS delivery and compliance considerations with the client team.",
      "Introduced sprint rituals and release checklists that improved delivery predictability.",
    ],
  },
  {
    role: "Assistant Project Manager (Project-based)",
    company: "Sublime Solution",
    location: "Remote",
    period: "Jul 2023 – Oct 2023",
    summary:
      "Supported project planning and coordination on a project-basis remote engagement.",
    highlights: [
      "Coordinated project planning, task tracking, and delivery communication.",
      "Worked alongside the client and delivery team to keep milestones on schedule.",
    ],
  },
  {
    role: "Business Manager (Own Startup)",
    company: "Realty Revive",
    location: "Lahore, Pakistan",
    period: "Apr 2023 – Jun 2023",
    summary:
      "Ran business operations for a self-founded real estate investment venture.",
    highlights: [
      "Built operating processes, investor materials, and outreach pipelines from scratch.",
      "Managed budgets, vendor relationships, and early client acquisition.",
    ],
  },
  {
    role: "Client Relationship Manager",
    company: "Real Estate Firm",
    location: "Lahore, Pakistan",
    period: "Jan 2023 – Mar 2023",
    summary:
      "Managed client relationships and communications for real estate transactions.",
    highlights: [
      "Owned client communication through the transaction lifecycle.",
      "Coordinated documentation, follow-ups, and handoffs with internal teams.",
    ],
  },
  {
    role: "Head of Product (Part-time)",
    company: "Meidan Technologies",
    location: "Lahore, Pakistan",
    period: "Nov 2022 – May 2023",
    summary:
      "Contributed to product direction and planning alongside the core management role at Quantum Bases.",
    highlights: [
      "Shaped product strategy and prioritised the roadmap with leadership.",
      "Translated client feedback into clear requirements for design and engineering.",
    ],
  },
  {
    role: "Sales, Operations & Finance",
    company: "NuGenesis Australia",
    location: "Australia",
    period: "Nov 2020 – May 2022",
    summary:
      "Managed sales operations and finance functions for a blockchain-focused organization.",
    highlights: [
      "Owned sales reporting, invoicing, and operational finance workflows.",
      "Maintained client relationships and coordinated delivery handoffs.",
    ],
  },
];

export type ProjectCategory =
  | "Enterprise & Logistics"
  | "AI & Compute"
  | "Identity & Compliance"
  | "Web3 & DeFi"
  | "Fintech & Payments"
  | "Product & Design"
  | "Real Estate"
  | "Government & Social";

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Enterprise & Logistics",
  "AI & Compute",
  "Identity & Compliance",
  "Web3 & DeFi",
  "Fintech & Payments",
  "Product & Design",
  "Real Estate",
  "Government & Social",
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  role: string;
  description: string;
  stack: string[];
  featured?: boolean;
  bullets?: string[];
};

export const projects: Project[] = [
  {
    id: "ngss",
    title: "NGSS",
    subtitle: "Enterprise Logistics & Trucking Platform",
    category: "Enterprise & Logistics",
    role: "Project Manager",
    description:
      "Enterprise-grade platform delivered for Australia's largest trucking company, featuring a driver app, client-side portal, and sub-contractor management.",
    stack: ["Logistics", "Jira", "Payments", "Finance"],
    featured: true,
    bullets: [
      "Directed end-to-end delivery with Jira-based task management and sprint planning.",
      "Led the Front-end, Back-end, and QA teams across the connected modules.",
      "Integrated calendar scheduling, payments processing, and a dedicated finance module.",
    ],
  },
  {
    id: "stablet",
    title: "Stablet",
    subtitle: "Mobile Wallet & In-App Payments",
    category: "Fintech & Payments",
    role: "UI/UX & Finance Lead",
    description:
      "Mobile application paired with a companion mobile wallet, delivered for Sublime Solutions. Enabled secure in-app transactions through an integrated wallet experience.",
    stack: ["Mobile", "Wallet", "UI/UX", "Fintech"],
  },
  {
    id: "webpay",
    title: "WebPay",
    subtitle: "Cross-Border Fintech Gateway",
    category: "Fintech & Payments",
    role: "Creative Director & Design Lead",
    description:
      "Fintech and cross-border payment gateway project delivered under Quantum Bases. Supported real-time transaction processing for merchants across regulated markets.",
    stack: ["Fintech", "Payments", "UX", "Compliance"],
    featured: true,
    bullets: [
      "Exclusively led the design team and creative direction for the product.",
      "Supported real-time transaction processing for merchants across regulated markets.",
      "Aligned the experience with compliance and operational requirements.",
    ],
  },
  {
    id: "microwest",
    title: "MicroWest",
    subtitle: "Enterprise Operations Platform",
    category: "Enterprise & Logistics",
    role: "Project Manager & Business Manager",
    description:
      "Enterprise-level platform supporting client operations across multiple business functions. Combined workflow management with integrated financial oversight.",
    stack: ["Enterprise", "Workflows", "Finance", "Reporting"],
  },
  {
    id: "sgc-techs",
    title: "SGC Techs",
    subtitle: "Regulated DEX with KYC Gating",
    category: "Identity & Compliance",
    role: "Operations POC",
    description:
      "A regulated decentralized exchange with integrated KYC identity gating. Combined secure trading infrastructure with compliance-first onboarding flows.",
    stack: ["DEX", "KYC", "Compliance", "Web3"],
  },
  {
    id: "nft-city",
    title: "NFT City",
    subtitle: "NFT Marketplace & Smart Contract Suite",
    category: "Web3 & DeFi",
    role: "Design & Blockchain Team Manager",
    description:
      "End-to-end NFT marketplace with custom smart contracts, IPFS storage, and lazy minting. Supported by a high-performance front-end for browsing and trading digital collectibles.",
    stack: ["NFT", "IPFS", "Smart Contracts", "UX"],
    featured: true,
    bullets: [
      "Managed the Design team and the Blockchain Development team.",
      "Delivered custom smart contracts, IPFS storage, and lazy minting.",
      "Supported a high-performance front-end for browsing and trading assets.",
    ],
  },
  {
    id: "nu-coin",
    title: "NU Coin",
    subtitle: "Crypto Ecosystem, Staking & Block Explorer",
    category: "Web3 & DeFi",
    role: "Team & Project Lead",
    description:
      "Quantum Bases' flagship crypto and blockchain project, spanning staking mechanics, governance, and a block explorer. Delivered a mobile app and an Australia-focused hub for the ecosystem.",
    stack: ["Blockchain", "Staking", "Governance", "Mobile"],
  },
  {
    id: "andso-finance",
    title: "Andso Finance",
    subtitle: "Solana DeFi & Staking Ecosystem",
    category: "Web3 & DeFi",
    role: "Operations & Team Manager",
    description:
      "A Solana-based DeFi platform that completed a successful ICO launch. Offered staking, token swapping, and yield-farming within one ecosystem.",
    stack: ["Solana", "DeFi", "Staking", "ICO"],
    featured: true,
    bullets: [
      "Directed full team handling, task management, and overall operational execution.",
      "Supported a successful ICO launch across staking, swapping, and yield farming.",
      "Coordinated engineering, finance, and go-to-market workstreams.",
    ],
  },
  {
    id: "zephyr",
    title: "Zephyr Tribe & Steve",
    subtitle: "AI Super App + Web3",
    category: "AI & Compute",
    role: "Full-Account Client & Operations Manager",
    description:
      "End-to-end engagement for a personal client, spanning an AI-powered super app blending AI features with blockchain functionality. Delivered as a next-generation platform combining AI and Web3.",
    stack: ["AI", "Web3", "Blockchain", "Client Ops"],
    featured: true,
    bullets: [
      "Managed the Blockchain, Front-end, Back-end, Finance, and Operations teams.",
      "Owned client relations through complete, whole-account management.",
      "Aligned the product roadmap across AI features and Web3 functionality.",
    ],
  },
  {
    id: "sniper-bot",
    title: "Sniper Bot",
    subtitle: "AI Algorithmic Trading Bot on Solana",
    category: "AI & Compute",
    role: "AI Team & Finance Manager",
    description:
      "A fast, AI-based algorithmic trading bot built for newly listed Solana tokens. Provided real-time market data alongside automated trade execution.",
    stack: ["Solana", "AI", "Trading", "Finance"],
    featured: true,
    bullets: [
      "Managed the AI development team and oversaw financial management.",
      "Supported real-time market data and automated trade execution.",
      "Balanced execution speed, risk controls, and operational reporting.",
    ],
  },
  {
    id: "bitnatix",
    title: "Bitnatix",
    subtitle: "Blockchain Shipping & Supply Chain",
    category: "Enterprise & Logistics",
    role: "Operations & Finance",
    description:
      "A blockchain-based platform re-architected for shipping and supply-chain logistics. Focused on transparent, secure transaction tracking across the supply chain.",
    stack: ["Blockchain", "Logistics", "Supply Chain", "Finance"],
  },
  {
    id: "warbit",
    title: "Warbit",
    subtitle: "NFT, Metaverse & Cross-Chain Bridge",
    category: "Web3 & DeFi",
    role: "Operations, Finance & Team Manager",
    description:
      "A decentralized protocol spanning an NFT marketplace, a metaverse platform, and gas-optimized cross-chain bridging. Enabled users to discover, buy, and sell digital assets across chains.",
    stack: ["NFT", "Metaverse", "Bridge", "Web3"],
  },
  {
    id: "rare-pawa",
    title: "Rare Pawa Token",
    subtitle: "Referral & Donation Campaign Platform",
    category: "Web3 & DeFi",
    role: "Blockchain Team & Internal Manager",
    description:
      "A blockchain-based referral and donation campaign platform built for a political fundraising initiative. Provided transparent, on-chain donation and referral tracking.",
    stack: ["Blockchain", "Donations", "Referrals", "Campaign"],
  },
  {
    id: "open-fund",
    title: "Open Fund",
    subtitle: "Decentralized Launchpad & Presale Platform",
    category: "Web3 & DeFi",
    role: "Project Manager",
    description:
      "A decentralized launchpad and presale platform for emerging blockchain projects. Built to keep community fundraising fair and transparent.",
    stack: ["Launchpad", "Presale", "Web3", "Fundraising"],
  },
  {
    id: "zero-land",
    title: "Zero Land",
    subtitle: "Non-Custodial Lending Protocol",
    category: "Web3 & DeFi",
    role: "Back-end Team Lead",
    description:
      "A decentralized lending protocol supporting non-custodial borrowing and lending. Focused on high efficiency and low transaction fees.",
    stack: ["Lending", "DeFi", "Back-end", "Web3"],
  },
  {
    id: "cryo-platform",
    title: "Cryo Platform",
    subtitle: "Creator & Collector Portal",
    category: "Web3 & DeFi",
    role: "Front-end Team Manager",
    description:
      "Dual-sided viewer and creator portal application for minting, managing, and showcasing digital collectibles. One portal served collectors while the other served creators minting new assets.",
    stack: ["NFT", "Front-end", "Creator Tools", "Web3"],
  },
  {
    id: "simple-fintech",
    title: "Simple FinTech",
    subtitle: "Mobile Financial Services App",
    category: "Fintech & Payments",
    role: "Design Lead",
    description:
      "A financial-services mobile app with a clean landing page, built for the Iraqi market. Simplified access to core financial services for local users.",
    stack: ["Fintech", "Mobile", "Landing Page", "Design"],
  },
  {
    id: "real-hackathon",
    title: "Real Hackathon",
    subtitle: "Luxury Real Estate Platform",
    category: "Real Estate",
    role: "Client Relations & Design Manager",
    description:
      "A luxury real estate platform presenting premium property listings. Built around an elegant, image-first browsing experience.",
    stack: ["Real Estate", "Design", "Client Relations", "UX"],
  },
  {
    id: "indigo",
    title: "Indigo",
    subtitle: "Domestic Real Estate Website",
    category: "Real Estate",
    role: "Back-end Support & Debugging",
    description:
      "A domestic real estate website showcasing premium residential and commercial properties. Focused on lifestyle appeal alongside investment value.",
    stack: ["Real Estate", "Back-end", "Debugging", "Web"],
  },
  {
    id: "asy-paper",
    title: "ASY Paper",
    subtitle: "AI Exam Preparation App",
    category: "AI & Compute",
    role: "Design & UI/UX Lead",
    description:
      "An AI-powered exam-preparation app with adaptive practice tests. Gave students personalized study paths based on performance.",
    stack: ["AI", "EdTech", "UI/UX", "Adaptive Learning"],
  },
  {
    id: "klust-ai",
    title: "Klust AI",
    subtitle: "On-Demand GPU Cloud Compute Platform",
    category: "AI & Compute",
    role: "End-to-End Team & Project Manager",
    description:
      "An on-demand GPU cloud rental platform built for AI and machine-learning workloads. Gave developers and researchers scalable compute without owning hardware.",
    stack: ["AI / ML", "GPU Cloud", "Infrastructure", "Jira"],
    featured: true,
    bullets: [
      "Directed end-to-end team management, project tasks, and overall execution.",
      "Delivered scalable GPU compute rental for AI and machine-learning workloads.",
      "Coordinated infrastructure, product, and commercial workstreams.",
    ],
  },
  {
    id: "coding-planner",
    title: "Coding Planner",
    subtitle: "Gamified EdTech Dashboard",
    category: "Product & Design",
    role: "Design Manager",
    description:
      "A gamified EdTech dashboard for learning to code. Combined learning management, progress tracking, and coding challenges.",
    stack: ["EdTech", "Gamification", "Design", "Dashboard"],
  },
  {
    id: "b-education",
    title: "B-Education",
    subtitle: "Education News & Information Portal",
    category: "Government & Social",
    role: "Client Relationship Manager",
    description:
      "Pakistan's education news and information portal. Connected students, parents, and educators with admissions news and results.",
    stack: ["Education", "Portal", "Media", "Client Relations"],
  },
  {
    id: "hunarmand-punjab",
    title: "Hunarmand Punjab",
    subtitle: "Official Government Vocational Skills Portal",
    category: "Government & Social",
    role: "End-to-End Delivery",
    description:
      "An official Government of Punjab skills-development portal. Connected youth with vocational training programs and career pathways.",
    stack: ["Government", "Portal", "Vocational Skills", "Delivery"],
  },
  {
    id: "beta-bed",
    title: "Beta Bed",
    subtitle: "Online Sports Betting Platform",
    category: "Product & Design",
    role: "Design Manager",
    description:
      "A modern online betting platform with live odds across multiple sports. Built around a seamless, secure betting experience.",
    stack: ["Gaming", "Sports", "Design", "Live Odds"],
  },
  {
    id: "crave",
    title: "Crave",
    subtitle: "U.S. Online Casino & Gaming Platform",
    category: "Product & Design",
    role: "Design, Branding & Project Manager",
    description:
      "A U.S.-based online casino platform with a premium gaming experience. Featured slots, table games, and live-dealer experiences.",
    stack: ["Gaming", "Branding", "Design", "Delivery"],
  },
  {
    id: "sega-motor",
    title: "Sega Motor",
    subtitle: "Automotive Accessories Pricing Page",
    category: "Product & Design",
    role: "Design Manager",
    description:
      "A pricing and comparison page for Pakistan's leading automotive-accessories retailer. Built as a clean, conversion-focused layout for package comparisons.",
    stack: ["E-commerce", "Pricing", "Design", "Conversion"],
  },
  {
    id: "verifilite",
    title: "VerifiLite",
    subtitle: "B2B Identity Verification & Compliance SaaS",
    category: "Identity & Compliance",
    role: "Project Team Lead",
    description:
      "A B2B identity-verification SaaS product with KYC/AML compliance workflows and enterprise customer onboarding.",
    stack: ["KYC / AML", "SaaS", "Compliance", "APIs"],
    featured: true,
    bullets: [
      "Led delivery of a B2B identity-verification SaaS product.",
      "Coordinated engineering and compliance requirements across the client team.",
      "Worked across SaaS delivery and KYC/AML compliance considerations.",
    ],
  },
];

export const education = [
  {
    title: "Bachelor of Business Administration (BBA)",
    institution: "Government Graduate College of Science, Lahore",
    period: "Sep 2019 – Nov 2023",
    type: "Degree" as const,
  },
  {
    title: "Web Designing & Development",
    institution: "VTI Vocational Training Institute, Governor House, Lahore",
    period: "2019 · 1-Year Diploma",
    type: "Certification" as const,
  },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
  { name: "Punjabi", level: "Native" },
];

export const principles = [
  "Clarity before velocity",
  "Own the outcome, not the ticket",
  "Make risk visible early",
  "Ship, measure, refine",
];
