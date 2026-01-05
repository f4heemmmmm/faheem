import type { NavLink, SocialLink } from "@/types";

export const NAV_LINKS: readonly NavLink[] = [
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "projects", href: "#projects" },
  { name: "skills", href: "#skills" },
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { name: "github", url: "https://github.com/f4heemmmmm" },
  { name: "linkedin", url: "https://linkedin.com/in/faheemkamel" },
  { name: "email", url: "mailto:f4heemmmm@gmail.com" },
] as const;

export const CONTACT_EMAIL = "f4heemmmm@gmail.com" as const;
