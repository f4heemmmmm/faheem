import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "rallyrank",
    description:
      "tennis matchmaking and tournament management system built with agile methodologies, featuring automatic matchmaking using a custom elo ranking algorithm for fair competition.",
    technologies: ["react", "spring boot", "mongodb", "tailwind css", "axios"],
    liveUrl: "https://rally-rank-frontend.web.app/",
    featured: true,
  },
  {
    title: "hundrednow",
    description:
      "an original card game developed in java, implementing custom game mechanics, logic, and ui elements for an engaging player experience.",
    technologies: ["java", "oop", "game logic"],
    featured: true,
  },
  {
    title: "knightsbridge house",
    description:
      "official website for knightsbridge house, an educational institute. designed with modern ui/ux principles for seamless navigation and intuitive user experience.",
    technologies: ["responsive design", "ui/ux", "web development"],
    liveUrl: "https://knightsbridge-house.vercel.app/",
  },
  {
    title: "faheem's portfolio",
    description:
      "fully responsive portfolio website built from scratch, featuring engaging sections for skills, experiences, and projects with interactive animations.",
    technologies: ["react", "next.js", "tailwind css", "framer motion"],
    liveUrl: "https://www.faheemkamel.com/",
  },
];
