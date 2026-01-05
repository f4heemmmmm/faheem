import type { NavLink, SocialLink } from "@/types";

export const NAV_LINKS: readonly NavLink[] = [
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "projects", href: "#projects" },
  { name: "skills", href: "#skills" },
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { name: "github", url: "https://github.com/faheem" },
  { name: "linkedin", url: "https://linkedin.com/in/faheem" },
  { name: "email", url: "mailto:hello@faheem.dev" },
] as const;

export const CONTACT_EMAIL = "hello@faheem.dev" as const;
