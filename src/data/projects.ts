import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "operis",
    title: "operis",
    subtitle: "Multi-tenant CRM/ERP platform for PCA Company Services, forked from Open Mercato.",
    description:
      "TypeScript modular-monolith CRM/ERP rebuilt on an independent fork of Open Mercato, with per-tenant module entitlement, a real-time chat stack bridged to WhatsApp, and machine identities for automation.",
    longDescription:
      "Operis is PCA's second-generation ERP, rebuilding the modules of the earlier PCA ERP on an independent fork of Open Mercato v0.7.0, a multi-tenant open-source platform of around 40 business modules. I created the fork, wrote its architecture decision records, and lead delivery as project manager across several teams working from one repository. On top of the inherited foundation I added tenant and per-user module entitlement, an internal chat module bridged to Matrix and WhatsApp, machine principals for automation runs, and an OAuth-protected MCP endpoint for task management, while keeping the interface familiar to existing PCA ERP users.",
    technologies: [
      "typescript",
      "next.js",
      "mikroorm",
      "postgresql",
      "redis",
      "matrix",
      "docker",
      "github actions",
    ],
    image: "/images/operis.png",
    featured: true,
    highlights: [
      "Wrote 9 architecture decision records, then sealed module boundaries after an audit found 99.6% of 1,306 cross-module imports reached into internals",
      "Tenant and per-user module entitlement with grant history and a platform-wide kill switch",
      "Real-time chat built from scratch: threads, reactions, read receipts, full-text search and per-user translation",
      "Matrix transport with a WhatsApp inbox over mautrix bridges, so a new network is a container, not an integration",
      "Login-less machine principals whose permissions are capped by each workflow's declared grant",
      "Cut Playwright startup from ~5 minutes to 3 seconds across 1,986 tests; pinned every CI action to a commit digest",
    ],
  },
  {
    id: "pca-erp",
    title: "pca erp",
    subtitle: "Multi-tenant SaaS ERP built from scratch as the sole engineer at PCA Company Services.",
    description:
      "Modular ERP for client companies in Vietnam with eight business modules, schema-per-module tenant isolation, a durable workflow engine, and enterprise single sign-on.",
    longDescription:
      "PCA ERP is a multi-tenant SaaS ERP I built from scratch as the sole engineer for commercial launch to client companies in Vietnam. It is a pnpm monorepo with a NestJS and Prisma backend and a React frontend, where every business module lives in its own PostgreSQL schema and can be switched on per tenant. I shipped CRM, invoicing with government e-invoice sync, a no-code form builder, a drag-and-drop email campaign builder, task management, document management, HR, and the workflow automation engine that ties them together, plus the CI/CD pipeline that deploys it.",
    technologies: [
      "nestjs",
      "prisma",
      "postgresql",
      "react",
      "redis",
      "bullmq",
      "zitadel oidc",
      "docker",
    ],
    image: "/images/pca-erp.png",
    featured: true,
    highlights: [
      "Schema-per-module tenant isolation across 12 PostgreSQL schemas and 150+ versioned migrations",
      "Workflow engine with lease-based run claiming, recovery sweeps and per-tenant concurrency limits",
      "Transactional outbox publishing domain events to BullMQ with bounded retries",
      "Migrated from local passwords to ZITADEL OIDC with PKCE and revocable Redis-backed sessions",
      "Department-based permission model replacing a hard admin/user split",
      "8-stage GitHub Actions pipeline running 2,800+ tests, migration replay and container scanning",
    ],
  },
  {
    id: "invoiceflow",
    title: "invoiceflow",
    subtitle: "Accounts payable/receivable and government e-invoice sync for Vietnamese companies.",
    description:
      "B2B invoicing workspace built on Vietnam's government e-invoice data, with a sync service that pulls issued and received invoices from the tax authority's portal.",
    longDescription:
      "InvoiceFlow is a React and NestJS app where companies sign in with their tax code, switch between entities in a company group, and track payables and receivables. I built the entity scoping, the payables and receivables pages, and a step-by-step workflow for drafting debtor reminders. I then prototyped a sync service that fetches invoice streams from the General Department of Taxation portal, normalises and deduplicates them, and exports CSVs; that design became the production invoice sync inside PCA ERP.",
    technologies: [
      "nestjs",
      "prisma",
      "postgresql",
      "react",
      "vite",
      "bullmq",
      "redis",
      "minio",
    ],
    image: "/images/invoiceflow.png",
    highlights: [
      "Server-enforced group scoping: every invoice read or write re-checks the caller is the seller or buyer",
      "Natural-key deduplication backed by PostgreSQL row-level security on tenant tables",
      "Portal tokens cached in Redis so same-day re-syncs skip login; passwords are never stored or logged",
      "Portal client behind a DI token, with a fake client for tests and the real one in production",
      "Step-by-step debtor reminder workflow with saved drafts and debounced recipient search",
    ],
  },
  {
    id: "actionhub",
    title: "action hub",
    subtitle: "AI-powered meeting intelligence platform built for Meaningful.",
    description:
      "Meeting management system with automatic transcription, GPT-4 powered analysis, intelligent action item extraction, and bi-directional calendar sync across Google Meet, Teams, and Zoom.",
    longDescription:
      "ActionHub is an AI-powered meeting intelligence platform built as a feature module for Meaningful. The system features automatic meeting transcription via Nylas Notetaker, GPT-4 Turbo analysis for extracting summaries and action items, and an interactive GPT-4o chatbot for querying meeting content. Built with real-time SSE updates, the platform includes intelligent duplicate notetaker prevention, hybrid S3/MongoDB transcript storage with SHA-256 deduplication, and bi-directional calendar sync with all major providers.",
    technologies: [
      "next.js",
      "express.js",
      "typescript",
      "mongodb",
      "aws s3",
      "openai api",
      "nylas sdk",
    ],
    image: "/images/actionhub.png",
    liveUrl: "https://meaningful-crm.notion.site/Action-Hub-2a310bc3a934802c9731f339fccd5b45",
    featured: true,
    highlights: [
      "Nylas Notetaker integration for automatic meeting transcription",
      "GPT-4 Turbo analysis extracting summaries, decisions, and action items",
      "Interactive GPT-4o chatbot with prompt injection prevention",
      "Real-time SSE streaming as AI processing completes",
      "Bi-directional calendar sync with Google, Outlook, and Zoom",
      "Intelligent duplicate notetaker prevention with time-overlap detection",
    ],
  },
  {
    id: "smartmail",
    title: "smartmail",
    subtitle: "AI-powered nonprofit operations platform built for Meaningful.",
    description:
      "Enterprise-grade feature module for nonprofit management, featuring an intelligent email assistant with Model Context Protocol integration, workflow automation, and multi-channel communications.",
    longDescription:
      "SmartMail is an AI-powered nonprofit operations platform built as a feature module for Meaningful, a company based in Victoria. The system features an intelligent email assistant powered by GPT-4 with Model Context Protocol (MCP) integration for secure, context-aware communications. Built with Next.js and Express.js, the platform includes a visual workflow automation engine with BullMQ distributed queues, multi-tenant architecture with complete data isolation, and comprehensive CRM capabilities with 95+ MongoDB schemas.",
    technologies: [
      "next.js",
      "express.js",
      "typescript",
      "mongodb",
      "redis",
      "openai api",
      "aws",
    ],
    image: "/images/smartmail.png",
    featured: true,
    highlights: [
      "Model Context Protocol (MCP) for secure, local-data AI operations",
      "GPT-4 powered email assistant with organizational context awareness",
      "Visual workflow automation with BullMQ distributed job queues",
      "Multi-tenant architecture with complete data isolation",
      "Nylas integration for Gmail, Outlook, and Exchange sync",
      "ActionHub meeting intelligence with automatic transcription",
    ],
  },
  {
    id: "insider-threat-system",
    title: "insiderguard",
    subtitle: "Enterprise SOC platform built during internship at Ensign Infosecurity.",
    description:
      "Full-stack security operations center platform for detecting and investigating insider threats, featuring automated alert ingestion, incident correlation, and MITRE ATT&CK framework integration.",
    longDescription:
      "An enterprise-grade Security Operations Center (SOC) platform designed to detect, track, and investigate insider threats. The system features automated CSV-based alert ingestion with SHA-256 deduplication, intelligent incident correlation using time-window matching, and comprehensive analytics dashboards. Built with Next.js and NestJS, it includes JWT authentication with HTTP-only cookies, full audit trails for compliance, and MITRE ATT&CK framework integration for industry-standard threat classification.",
    technologies: [
      "next.js",
      "nestjs",
      "typescript",
      "postgresql",
      "typeorm",
      "tailwind css",
      "docker",
    ],
    image: "/images/insiderguard.png",
    featured: true,
    highlights: [
      "Automated CSV ingestion with SHA-256 duplicate detection",
      "Intelligent alert-to-incident correlation via time-window matching",
      "MITRE ATT&CK framework integration for threat classification",
      "Real-time analytics with Recharts visualizations",
      "JWT authentication with HTTP-only cookies and security headers",
      "Full audit trails for incident status changes and compliance",
    ],
  },
  {
    id: "nest",
    title: "nest",
    subtitle: "AI fitness tracker where the model never touches a number you act on.",
    description:
      "Installable fitness tracker for logging meals from photos, workouts and weight, with an AI coach and an MCP server, where every calorie and macro target is computed in code rather than by the model.",
    longDescription:
      "Nest is a personal fitness tracker installed to the iPhone home screen as a PWA. An AI reads meal photos, answers questions about your own log, and writes coaching notes, but it is never allowed to set, suggest, or adjust a target. That line is enforced three ways: the structured-output schemas have no field for a target, a guardrail rejects any energy or macro figure the model was not shown, and the MCP tools offer no way to change a goal. The targets themselves come from pure, unit-tested TypeScript, including an adaptive TDEE that re-estimates maintenance from logged intake and the weight trend.",
    technologies: [
      "next.js",
      "react",
      "typescript",
      "supabase",
      "openai api",
      "model context protocol",
      "zod",
      "vitest",
    ],
    image: "/images/nest.png",
    githubUrl: "https://github.com/f4heemmmmm/nest",
    featured: true,
    highlights: [
      "Numeric guardrail rejects any figure not in the model's context, retries once, then falls back to fixed text",
      "Adaptive TDEE clamped to ±15% of the formula, at most 5% per update, and never below BMR",
      "Meal estimates stored as ranges, counted at the bound that keeps the goal honest",
      "MCP server with 13 tools, OAuth with mandatory PKCE, and an audit log shown in settings",
      "Offline-first logging through an IndexedDB queue that replays idempotently",
      "Around 320 tests covering nutrition maths, timezone edges, the guardrail and the OAuth flow",
    ],
  },
  {
    id: "threadroom",
    title: "threadroom",
    subtitle: "Personal fashion e-commerce platform with AI shopping assistant.",
    description:
      "Full-stack e-commerce application for selling second-hand clothing, featuring an AI-powered chatbot for product discovery and outfit styling recommendations.",
    longDescription:
      "Threadroom is a personal fashion e-commerce platform built with Next.js 15 App Router, Server Components, and Server Actions. The application features an AI shopping assistant powered by GPT-4o-mini that enables natural language product search and outfit styling recommendations using color theory and category pairing rules. Built with Supabase for authentication and PostgreSQL with row-level security, the platform includes a full admin dashboard for product management, bulk CSV/Excel imports, and customer messaging.",
    technologies: [
      "next.js",
      "typescript",
      "react",
      "tailwind css",
      "supabase",
      "openai api",
      "zustand",
    ],
    image: "/images/threadroom.png",
    liveUrl: "https://threadroom.faheemkamel.com",
    featured: true,
    highlights: [
      "AI shopping assistant with natural language product search",
      "Outfit styling recommendations using color theory and category pairing",
      "Admin dashboard with bulk CSV/Excel product imports",
      "Real-time customer-seller messaging system",
      "Row-level security for data isolation",
      "OWASP-aligned security with rate limiting and SSRF prevention",
    ],
  },
  {
    id: "orbit",
    title: "orbit",
    subtitle: "All-in-one mobile productivity and personal finance application.",
    description:
      "Cross-platform mobile app combining financial tracking, task management, bill splitting, and scheduling with AI-powered features including receipt scanning and task prioritization.",
    longDescription:
      "Orbit is a comprehensive mobile productivity platform built with React Native and Expo, designed to consolidate daily tools into a single unified experience. The app features financial tracking with AI-powered receipt scanning using OpenAI Vision, complex bill splitting with item-level assignments, task management with GPT-powered prioritization, and location-aware prayer time tracking. Built with a clean service-layer architecture, the app uses Supabase for authentication and PostgreSQL database with row-level security ensuring complete data isolation between users.",
    technologies: [
      "react native",
      "expo",
      "typescript",
      "supabase",
      "postgresql",
      "openai api",
      "nativewind",
    ],
    image: "/images/orbit.png",
    featured: true,
    highlights: [
      "AI-powered receipt scanning with OpenAI Vision for expense extraction",
      "GPT-3.5-turbo task prioritization with custom sorting algorithms",
      "Complex bill splitting with item-level participant assignments",
      "Row-level security ensuring complete user data isolation",
      "Cross-platform support for iOS, Android, and web",
      "Location-aware prayer times via Aladhan API integration",
    ],
  },
  {
    id: "stockpilot",
    title: "stockpilot",
    subtitle: "Inventory management and supplier price comparison for small businesses.",
    description:
      "Full-stack inventory tool with typo-tolerant search, a CSV importer that understands Shopify, WooCommerce and QuickBooks exports, and supplier prices normalised to a common unit.",
    longDescription:
      "StockPilot is an inventory tool for SMEs with a NestJS and Prisma REST API over PostgreSQL and a Next.js frontend. Search falls back from exact matching to trigram similarity in PostgreSQL and offers a \"did you mean?\" suggestion, with no separate search service. The CSV importer maps arbitrary column headers through aliases and fuzzy keyword matching and pulls weights out of columns, headers, values, or product names. Supplier offers are normalised to price per 100g, per 100ml, or per piece so that different pack sizes compare fairly.",
    technologies: [
      "next.js",
      "nestjs",
      "prisma",
      "postgresql",
      "typescript",
      "swr",
      "zod",
      "recharts",
    ],
    image: "/images/stockpilot.png",
    liveUrl: "https://stockpilot-murex.vercel.app",
    highlights: [
      "Three-tier search: substring, pg_trgm similarity across name, SKU, brand and category, then suggestions",
      "Schema-agnostic CSV import tested against Shopify, WooCommerce, QuickBooks, POS and wholesale exports",
      "Weight extraction cascading from paired columns to header units, value units and product names",
      "Idempotent imports that upsert by SKU in batched transactions",
      "Supplier price normalisation with best/worst offer and savings per product",
      "Validation in three layers: Zod forms, API DTOs and database constraints",
    ],
  },
  {
    id: "prompt-patrol",
    title: "prompt patrol",
    subtitle: "SMU CS480 capstone: triage tool for AI-generated short answers.",
    description:
      "Web tool that helps university instructors flag short student answers that may be AI-generated, giving a calibrated signal for review rather than a verdict.",
    longDescription:
      "Prompt Patrol is a team capstone project for SMU CS480. Instructors and teaching assistants screen short answers one at a time or in batches and get back one of three results, AI-generated, human-written, or uncertain, with every check kept in an audit trail. I built most of the React frontend and much of the FastAPI authentication and session security, including the role-aware app shell, the screening flows, sign-in hardening, and server-side screening history. On the data side I built two adversarial dataset passes for the detector's training corpus: paraphrased answers and human-edited AI answers.",
    technologies: [
      "react",
      "typescript",
      "vite",
      "tailwind css",
      "tanstack query",
      "fastapi",
      "postgresql",
      "vitest",
    ],
    image: "/images/prompt-patrol.png",
    githubUrl: "https://github.com/zylooooo/Prompt-Patrol",
    featured: true,
    highlights: [
      "Hashed session tokens with idle and absolute timeouts, and explicit expiry reasons",
      "Session renewals and sign-outs synced across browser tabs with BroadcastChannel",
      "Closed an SSO account-rebinding takeover path and removed insecure dev login bypasses",
      "Screening history moved from the browser to a scoped, paginated server-side table",
      "Paraphrase dataset filtered by embedding similarity and surface-change scores",
      "Human-edit dataset matched to genuine edit distributions and checked with a KS statistic",
    ],
  },
  {
    id: "accordcrm",
    title: "accordcrm",
    subtitle: "SMU CS301: cloud-native CRM for a retail bank, with an AI copilot.",
    description:
      "Microservices CRM where bank agents and admins manage clients, accounts, transactions and audit logs, deployed on AWS with Terraform and assisted by a Claude-powered copilot.",
    longDescription:
      "AccordCRM is a five-person team project for SMU CS301 built for a fictional retail bank. Spring Boot microservices sit behind a Next.js backend-for-frontend and run on AWS, provisioned with Terraform. I started the Next.js frontend and built most of the agent and admin dashboards, wrote the JWT authentication layer used by every microservice, containerised the stack, set up the first Terraform deployment to S3 and CloudFront, and built SmartCRM, an AI copilot on AWS Bedrock with tool calling and guardrails.",
    technologies: [
      "next.js",
      "typescript",
      "spring boot",
      "postgresql",
      "aws bedrock",
      "terraform",
      "docker",
      "redis",
    ],
    image: "/images/accordcrm.png",
    liveUrl: "https://d2rovljjp79ivt.cloudfront.net",
    featured: true,
    highlights: [
      "AI copilot on AWS Bedrock with tools for client search, churn risk, portfolios and transaction history",
      "Guardrails that block prompt injection, redact sensitive output and rate-limit per user",
      "Copilot switchable through an SSM feature flag without a redeploy",
      "JWT verification and role-based access control in every microservice behind a BFF proxy",
      "Fuzzy search with \"did you mean?\" suggestions and URL-backed pagination",
      "Terraform for S3, CloudFront and Route 53, with GitHub Actions deploying on push",
    ],
  },
  {
    id: "netemu",
    title: "netemu",
    subtitle: "SMU CS441: IP-over-Ethernet network emulator with attacks and defences.",
    description:
      "Java emulator of three LANs and a router running as separate processes over UDP, demonstrating ping, DHCP, spoofing, sniffing and ping floods alongside a firewall and intrusion detection.",
    longDescription:
      "NetEmu is a four-person team project for SMU CS441, Security. Every node, router and LAN segment runs as its own Java process, talking over localhost UDP, with each LAN emulator copying Ethernet broadcast to every endpoint on its segment. I wrote the base code, around 3,000 lines covering frame and packet codecs, nodes, the router, the firewall and the IDS, and later added a full DHCP server and client with DHCP snooping feeding the IDS.",
    technologies: [
      "java",
      "maven",
      "junit",
      "udp sockets",
      "multithreading",
      "bash",
    ],
    image: "/images/netemu.png",
    githubUrl: "https://github.com/f4heemmmmm/cs441-g1-t3",
    highlights: [
      "Custom binary Ethernet, IP, ICMP and DHCP formats with round-trip timing",
      "Router forwarding across three interfaces and re-framing packets for each LAN",
      "IDS in passive or active mode detecting IP spoofing and ping floods",
      "DHCP client state machine with exponential backoff, and lease tables with lazy expiry",
      "Attacker node for spoofing, sniffing and flooding, against a runtime-configurable firewall",
      "170 JUnit tests including an end-to-end DHCP integration test",
    ],
  },
  {
    id: "rallyrank",
    title: "rallyrank",
    subtitle: "Tennis matchmaking and tournament platform with ELO ranking.",
    description:
      "Tennis matchmaking and tournament management system built with agile methodologies, featuring automatic matchmaking using a custom ELO ranking algorithm for fair competition.",
    longDescription:
      "RallyRank is a comprehensive tennis matchmaking and tournament management platform designed to bring fair competition to players of all skill levels. The system implements a custom ELO ranking algorithm that automatically matches players based on their performance history, ensuring balanced and competitive games. Built using agile methodologies with a focus on user experience, the platform streamlines tournament organization and player management.",
    technologies: ["react", "spring boot", "mongodb", "tailwind css", "axios"],
    image: "/images/rallyrank.png",
    liveUrl: "https://rally-rank-frontend.web.app/",
    featured: true,
    highlights: [
      "Custom ELO ranking algorithm for fair player matchmaking",
      "Real-time tournament bracket generation and management",
      "Player statistics tracking and performance analytics",
      "Responsive design for mobile and desktop users",
      "Built with agile methodologies and iterative development",
    ],
  },
  {
    id: "knightsbridge-house",
    title: "knightsbridge house",
    subtitle: "Marketing website for an international school expanding from Singapore to Thailand.",
    description:
      "Full-stack website for an international school, featuring dynamic content pages, contact form with email integration, and interactive carousels.",
    longDescription:
      "A full-stack marketing website built with Next.js 15 App Router and React 19. The project uses Static Site Generation for performance while maintaining client-side interactivity for carousels and forms. Implemented a contact form with Gmail SMTP integration using Nodemailer and Next.js API routes. UI built with shadcn/ui components and Radix UI primitives, styled with Tailwind CSS.",
    technologies: [
      "next.js",
      "typescript",
      "tailwind css",
      "shadcn/ui",
      "nodemailer",
      "embla carousel",
    ],
    image: "/images/kbh.png",
    liveUrl: "https://knightsbridge-house.vercel.app/",
    featured: true,
    highlights: [
      "Next.js 15 App Router with Static Site Generation (SSG)",
      "Contact form with Gmail SMTP via Nodemailer API routes",
      "Interactive Embla Carousel for image galleries",
      "Component library built with shadcn/ui and Radix UI",
      "Responsive mobile-first design with custom theming",
    ],
  },
  {
    id: "portfolio",
    title: "faheem's portfolio",
    subtitle: "Personal portfolio showcasing skills, experience, and projects.",
    description:
      "Fully responsive portfolio website built from scratch, featuring engaging sections for skills, experiences, and projects with interactive animations.",
    longDescription:
      "A personal portfolio website designed and developed from scratch to showcase my skills, experiences, and projects. Built with modern web technologies and a focus on performance, the site pairs a light, minimal layout with a WebGL hero, a scroll-driven 3D project gallery, and smooth navigation. The design emphasizes readability and user experience while maintaining a professional, high-end feel.",
    technologies: ["react", "next.js", "tailwind css", "typescript", "three.js"],
    image: "/images/website.png",
    liveUrl: "https://www.faheemkamel.com/",
    highlights: [
      "Light, minimal aesthetic built on a small set of shared type and colour tokens",
      "WebGL hero background and a scroll-driven 3D project gallery",
      "Smooth scroll navigation with section-based layout",
      "Static rendering for fast first loads",
      "Responsive from small phones through to large desktops",
      "Keyboard-accessible navigation and WCAG-checked colour contrast",
    ],
  },
  {
    id: "3d-room",
    title: "3d room",
    subtitle: "Interactive 3D scene modeled in Blender.",
    description:
      "A detailed 3D room environment modeled and textured in Blender, rendered as an interactive WebGL experience that users can explore by orbiting, zooming, and panning.",
    longDescription:
      "A fully modeled 3D room environment created in Blender, featuring detailed textures, materials, and lighting. Exported as an optimized GLB file with Draco mesh compression and displayed in the browser using Three.js and React Three Fiber. Users can interactively orbit, zoom, and pan to explore the scene from any angle.",
    technologies: ["blender", "three.js", "react three fiber", "webgl", "draco"],
    image: "/images/3d-room.png",
    modelUrl: "/models/TEST.obj",
    mtlUrl: "/models/TEST.mtl",
    featured: true,
    highlights: [
      "Detailed room environment modeled in Blender",
      "PBR materials and textures for realistic rendering",
      "Draco mesh compression for optimized web delivery",
      "Interactive orbit controls for 360° exploration",
      "Environment lighting with HDR image-based lighting",
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id);
}
