"use client";

import { useEffect, useState, useRef } from "react";

const navLinks = [
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "projects", href: "#projects" },
  { name: "skills", href: "#skills" },
];

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Find the scroll container (has overflow-y-auto and snap-y classes)
    const scrollContainer = document.querySelector(".snap-y.snap-mandatory");

    if (!scrollContainer) return;

    const handleScroll = () => {
      const currentScrollY = scrollContainer.scrollTop;

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        // Hide navbar when scrolling down
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 bg-black transition-transform duration-300 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container-luxury">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-body-md font-medium tracking-wide text-foreground transition-colors duration-300 hover:text-foreground-muted"
          >
            {'<'}faheem&apos;s portfolio{' />'}
          </a>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-body-sm text-foreground-muted transition-colors duration-300 hover:text-foreground"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:hello@faheem.dev"
                className="rounded-none border border-foreground bg-foreground px-5 py-2.5 text-body-sm font-medium text-background transition-all duration-300 hover:bg-transparent hover:text-foreground"
              >
                contact
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative h-4 w-6">
              <span
                className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-full bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "top-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute left-0 right-0 border-b border-border bg-background transition-all duration-400 ease-luxury md:hidden ${
          isMobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <div className="container-luxury py-8">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-body-lg text-foreground-muted transition-colors duration-300 hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="mailto:hello@faheem.dev"
                className="inline-block rounded-none border border-foreground bg-foreground px-6 py-3 text-body-sm font-medium text-background transition-all duration-300 hover:bg-transparent hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
