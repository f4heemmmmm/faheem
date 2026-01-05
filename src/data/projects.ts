import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "actionhub",
    title: "actionhub",
    subtitle: "AI-powered meeting intelligence platform built for Meaningful.",
    description:
      "meeting management system with automatic transcription, GPT-4 powered analysis, intelligent action item extraction, and bi-directional calendar sync across Google Meet, Teams, and Zoom.",
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
    image: "/images/projects/actionhub.png",
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
      "enterprise-grade feature module for nonprofit management, featuring an intelligent email assistant with Model Context Protocol integration, workflow automation, and multi-channel communications.",
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
    image: "/images/projects/smartmail.png",
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
    id: "threadroom",
    title: "threadroom",
    subtitle: "Personal fashion e-commerce platform with AI shopping assistant.",
    description:
      "full-stack e-commerce application for selling second-hand clothing, featuring an AI-powered chatbot for product discovery and outfit styling recommendations.",
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
    id: "insider-threat-system",
    title: "insider threat system",
    subtitle: "Enterprise SOC platform built during internship at Ensign Infosecurity.",
    description:
      "full-stack security operations center platform for detecting and investigating insider threats, featuring automated alert ingestion, incident correlation, and MITRE ATT&CK framework integration.",
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
    image: "/images/projects/insider-threat.png",
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
    id: "orbit",
    title: "orbit",
    subtitle: "All-in-one mobile productivity and personal finance application.",
    description:
      "cross-platform mobile app combining financial tracking, task management, bill splitting, and scheduling with AI-powered features including receipt scanning and task prioritization.",
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
    image: "/images/projects/orbit.png",
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
    id: "rallyrank",
    title: "rallyrank",
    subtitle: "Tennis matchmaking and tournament platform with ELO ranking.",
    description:
      "tennis matchmaking and tournament management system built with agile methodologies, featuring automatic matchmaking using a custom elo ranking algorithm for fair competition.",
    longDescription:
      "RallyRank is a comprehensive tennis matchmaking and tournament management platform designed to bring fair competition to players of all skill levels. The system implements a custom ELO ranking algorithm that automatically matches players based on their performance history, ensuring balanced and competitive games. Built using agile methodologies with a focus on user experience, the platform streamlines tournament organization and player management.",
    technologies: ["react", "spring boot", "mongodb", "tailwind css", "axios"],
    image: "/images/projects/rallyrank.png",
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
    id: "hundrednow",
    title: "hundrednow",
    subtitle: "Original card game with custom mechanics built in Java.",
    description:
      "an original card game developed in java, implementing custom game mechanics, logic, and ui elements for an engaging player experience.",
    longDescription:
      "HundredNow is an original card game developed entirely in Java, showcasing strong object-oriented programming principles and game development fundamentals. The project features custom game mechanics, intuitive UI elements, and engaging gameplay logic that creates an immersive player experience. The game demonstrates proficiency in algorithm design, state management, and user interface development.",
    technologies: ["java", "oop", "game logic"],
    image: "/images/projects/hundrednow.png",
    featured: true,
    highlights: [
      "Original game concept with unique mechanics",
      "Object-oriented architecture for maintainable code",
      "Custom game state management system",
      "Intuitive user interface design",
      "Comprehensive game logic and rule implementation",
    ],
  },
  {
    id: "knightsbridge-house",
    title: "knightsbridge house",
    subtitle: "Marketing website for an international school expanding from Singapore to Thailand.",
    description:
      "full-stack website for an international school, featuring dynamic content pages, contact form with email integration, and interactive carousels.",
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
      "fully responsive portfolio website built from scratch, featuring engaging sections for skills, experiences, and projects with interactive animations.",
    longDescription:
      "A personal portfolio website designed and developed from scratch to showcase my skills, experiences, and projects. Built with modern web technologies and a focus on performance, the site features a dark, minimal aesthetic with smooth animations and intuitive navigation. The design emphasizes readability and user experience while maintaining a professional, high-end feel.",
    technologies: ["react", "next.js", "tailwind css", "typescript"],
    image: "/images/projects/portfolio.png",
    liveUrl: "https://www.faheemkamel.com/",
    highlights: [
      "Dark, minimal aesthetic with serif and monospace typography",
      "Full-page scroll navigation with keyboard support",
      "Server-side rendering for optimal performance",
      "Responsive design across all device sizes",
      "Accessible markup following WCAG guidelines",
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id);
}
