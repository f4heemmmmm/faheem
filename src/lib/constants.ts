import type { NavLink } from "@/types";

export const NAV_LINKS: readonly NavLink[] = [
  { name: "projects", href: "/projects" },
  { name: "experience", href: "/experience" },
  { name: "about", href: "/#about" },
  { name: "skills", href: "/#skills" },
] as const;

export const CONTACT_EMAIL = "f4heemmmm@gmail.com" as const;

export const GITHUB_URL = "https://github.com/f4heemmmmm" as const;

export const LINKEDIN_URL = "https://linkedin.com/in/faheemkamel" as const;

export const RESUME_URL = "/images/my-resume.pdf" as const;
