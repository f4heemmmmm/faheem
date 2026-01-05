import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "rallyrank",
    title: "rallyrank",
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
    description:
      "full-stack website for an international school expanding from singapore to thailand. features cambridge curriculum pages, admissions portal with faq system, contact form with gmail smtp integration, and instagram feed integration.",
    longDescription:
      "Knightsbridge House is a full-stack website built for an international school based in Singapore that is expanding to Thailand. The school is opening a new campus in Nonthaburi, Bangkok in May 2025, and this website serves as their primary digital presence for marketing, student recruitment, and information dissemination. The site features comprehensive pages for academics, admissions, student life, and contact information, with a modern tech stack ensuring optimal performance and user experience.",
    technologies: ["next.js", "typescript", "tailwind css", "shadcn/ui", "nodemailer"],
    image: "/images/kbh.png",
    liveUrl: "https://knightsbridge-house.vercel.app/",
    featured: true,
    highlights: [
      "Cambridge International curriculum overview pages",
      "Admissions portal with comprehensive 23-question FAQ system",
      "Contact form with Gmail SMTP integration via Nodemailer",
      "Instagram feed integration for social media presence",
      "Static site generation for optimal performance",
      "Responsive design with mobile-first approach",
    ],
  },
  {
    id: "portfolio",
    title: "faheem's portfolio",
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
