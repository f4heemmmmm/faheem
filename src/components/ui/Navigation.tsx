"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { NAV_LINKS, CONTACT_EMAIL } from "@/lib/constants";

const ACTIVE_COLOR = "#e87b35";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  function isLinkActive(href: string) {
    if (!href.includes("#")) {
      return pathname === href;
    }
    if (pathname === "/") {
      const hash = href.split("#")[1];
      return activeSection === hash;
    }
    return false;
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sectionIds = NAV_LINKS
      .filter((link) => link.href.includes("#"))
      .map((link) => link.href.split("#")[1]);

    const allIds = ["home", ...sectionIds];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const visibleId = visible[0].target.id;
          setActiveSection(visibleId === "home" ? null : visibleId);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5] }
    );

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 hidden h-screen w-[60px] flex-col items-center justify-between border-r border-border bg-white py-8 md:flex">
        <Link
          href="/"
          className="font-poppins text-sm font-semibold uppercase tracking-normal text-foreground transition-opacity duration-300 hover:opacity-50"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          faheem
        </Link>

        <ul className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="font-poppins text-sm font-medium uppercase tracking-normal transition-all duration-300 hover:opacity-50"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    color: active ? ACTIVE_COLOR : undefined,
                  }}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col items-center gap-6">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-poppins text-sm uppercase tracking-normal text-foreground-subtle transition-opacity duration-300 hover:opacity-50"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            contact
          </a>
          <a
            href="/images/my-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-poppins text-sm uppercase tracking-normal text-accent transition-all hover:underline hover:underline-offset-4 duration-300 hover:opacity-70"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            resume
          </a>
        </div>
      </nav>

      <div
        className={`fixed left-0 right-0 top-0 z-50 bg-white transition-transform duration-300 ease-out md:hidden ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex h-10 items-center justify-between px-4">
          <Link
            href="/"
            className="font-poppins text-xs font-bold uppercase tracking-normal text-foreground"
          >
            faheem
          </Link>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center text-foreground"
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
        </div>

        <div
          className={`overflow-hidden border-b border-border bg-white transition-all duration-400 ease-luxury ${
            isMobileMenuOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 border-b-0 opacity-0"
          }`}
        >
          <div className="px-5 py-6">
            <ul className="space-y-5">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block font-poppins text-sm font-medium uppercase tracking-normal transition-opacity duration-300 hover:opacity-50"
                      style={{ color: active ? ACTIVE_COLOR : undefined }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="block font-poppins text-sm font-medium uppercase tracking-normal text-foreground-subtle transition-opacity duration-300 hover:opacity-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  contact
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="/images/my-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins text-sm font-medium uppercase tracking-normal text-accent underline underline-offset-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
