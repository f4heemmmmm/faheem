// Navigation & Layout
export interface NavLink {
  readonly name: string;
  readonly href: string;
}

export interface SocialLink {
  readonly name: string;
  readonly url: string;
}

// Experience
export type ExperienceCategory =
  | "header"
  | "internship"
  | "education"
  | "volunteer"
  | "service";

export interface Experience {
  title: string;
  description: string;
  date: string;
  category: ExperienceCategory;
  skills?: string[];
}

// Projects
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

// Skills
export interface SkillCategory {
  title: string;
  skills: string[];
}
