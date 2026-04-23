export interface NavLink {
  readonly name: string;
  readonly href: string;
}

export interface SocialLink {
  readonly name: string;
  readonly url: string;
}

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

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  modelUrl?: string;
  mtlUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: string[];
}
