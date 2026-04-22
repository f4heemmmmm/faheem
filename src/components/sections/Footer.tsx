import Link from "next/link";
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
    <footer id="contact" className="border-t-[0.25px] border-white bg-white">
      {/* Contact section */}
      <div className="section-spacing">
        <div className="container-luxury">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label mb-4">{"// get in touch"}</p>
            <h2 className="font-display text-display-sm font-medium tracking-tight text-foreground md:text-display-md">
              let&apos;s work together
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-body-lg text-foreground-muted">
              i&apos;m currently open to new opportunities and collaborations.
              feel free to reach out if you&apos;d like to connect.
            </p>

            <div className="mt-10">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 font-mono text-caption uppercase tracking-normal text-white transition-all duration-300 hover:opacity-80"
              >
                say hello
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t-[0.25px] border-white py-10">
        <div className="container-luxury">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <Link
              href="/"
              className="font-mono text-body-sm font-bold uppercase tracking-normal text-foreground transition-opacity duration-300 hover:opacity-50"
            >
              faheem
            </Link>

            <nav
              className="flex flex-wrap items-center justify-center gap-8"
              aria-label="Footer navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-caption uppercase tracking-normal text-foreground-subtle transition-opacity duration-300 hover:opacity-60"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-5" role="list" aria-label="Social links">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICONS[link.name];
                const isEmail = link.url.startsWith("mailto");
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    className="text-foreground-subtle transition-opacity duration-300 hover:opacity-60"
                    aria-label={link.name}
                    role="listitem"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="font-mono text-[10px] uppercase tracking-normal text-foreground-subtle">
              faheem &middot; all rights reserved &middot; {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
