"use client";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "github",
    url: "https://github.com/faheem",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/faheem",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "email",
    url: "mailto:hello@faheem.dev",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
];

const navLinks = [
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "projects", href: "#projects" },
  { name: "skills", href: "#skills" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="flex min-h-screen snap-start flex-col justify-center border-t border-border">
      {/* Contact section */}
      <div className="section-spacing flex-grow flex items-center">
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
                href="mailto:hello@faheem.dev"
                className="inline-flex items-center gap-2 rounded-none border border-foreground bg-foreground px-8 py-4 text-body-sm font-medium tracking-wider text-background transition-all duration-400 ease-luxury hover:bg-transparent hover:text-foreground"
              >
                say hello
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
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
            <nav className="flex flex-wrap items-center justify-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-body-sm text-foreground-subtle transition-colors duration-300 hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Social links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.url.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="text-foreground-subtle transition-colors duration-300 hover:text-foreground"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 text-center">
            <p className="text-body-sm text-foreground-subtle/60">
              {currentYear} faheem. all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
