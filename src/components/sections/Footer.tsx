import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_EMAIL } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const SOCIAL_ICONS: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="flex min-h-screen snap-start flex-col justify-center border-t border-border"
    >
      {/* Contact section */}
      <div className="section-spacing flex flex-grow items-center">
        <div className="container-luxury">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-caption tracking-widest text-foreground-subtle">
              get in touch
            </p>
            <h2 className="font-display text-display-sm font-medium tracking-tight text-foreground md:text-display-md">
              let&apos;s work together
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-body-lg text-foreground-muted">
              i&apos;m currently open to new opportunities and collaborations.
              feel free to reach out if you&apos;d like to connect.
            </p>

            {/* Contact button */}
            <div className="mt-10">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-none border border-foreground bg-foreground px-8 py-4 text-body-sm font-medium tracking-wider text-background transition-all duration-400 ease-luxury hover:bg-transparent hover:text-foreground"
              >
                say hello
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-border py-12">
        <div className="container-luxury">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* Logo / Name */}
            <a
              href="#home"
              className="text-body-md font-medium tracking-wide text-foreground transition-colors duration-300 hover:text-foreground-muted"
            >
              faheem
            </a>

            {/* Navigation */}
            <nav
              className="flex flex-wrap items-center justify-center gap-8"
              aria-label="Footer navigation"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-body-sm text-foreground-subtle transition-colors duration-300 hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Social links */}
            <div className="flex items-center gap-6" role="list" aria-label="Social links">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICONS[link.name];
                const isEmail = link.url.startsWith("mailto");
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    className="text-foreground-subtle transition-colors duration-300 hover:text-foreground"
                    aria-label={link.name}
                    role="listitem"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 text-center">
            <p className="text-body-sm text-foreground-subtle/60">
              © {currentYear} faheem. all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
