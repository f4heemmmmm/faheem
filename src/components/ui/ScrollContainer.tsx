"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface ScrollContainerProps {
  children: React.ReactNode;
  sectionIds: string[];
}

export default function ScrollContainer({ children, sectionIds }: ScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Update current section based on scroll position
  const handleScroll = useCallback(() => {
    if (!containerRef.current || isScrolling) return;

    const container = containerRef.current;
    const scrollPosition = container.scrollTop;
    const containerHeight = container.clientHeight;

    const newSection = Math.round(scrollPosition / containerHeight);
    if (newSection !== currentSection && newSection >= 0 && newSection < sectionIds.length) {
      setCurrentSection(newSection);
    }
  }, [currentSection, isScrolling, sectionIds.length]);

  // Scroll to a specific section
  const scrollToSection = useCallback((index: number) => {
    if (!containerRef.current || index < 0 || index >= sectionIds.length) return;

    setIsScrolling(true);
    const targetSection = document.getElementById(sectionIds[index]);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(index);

      // Reset scrolling flag after animation
      setTimeout(() => setIsScrolling(false), 800);
    }
  }, [sectionIds]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToSection(0);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToSection(sectionIds.length - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, scrollToSection, sectionIds.length]);

  // Scroll event listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {/* Main scroll container */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory scrollbar-hide"
      >
        {children}
      </div>

      {/* Section indicators */}
      <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
        {sectionIds.map((id, index) => (
          <button
            key={id}
            onClick={() => scrollToSection(index)}
            className={`group relative h-3 w-3 rounded-full border transition-all duration-300 ${
              index === currentSection
                ? "border-foreground bg-foreground scale-100"
                : "border-foreground-subtle bg-transparent hover:border-foreground hover:scale-110"
            }`}
            aria-label={`Go to ${id} section`}
          >
            {/* Tooltip */}
            <span className="absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {id}
            </span>
          </button>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="fixed bottom-8 right-6 z-50 hidden flex-col gap-2 md:flex">
        <button
          onClick={() => scrollToSection(currentSection - 1)}
          disabled={currentSection === 0}
          className={`rounded-full border border-border bg-background p-2 transition-all duration-300 ${
            currentSection === 0
              ? "cursor-not-allowed opacity-30"
              : "hover:border-foreground-subtle hover:bg-background-elevated"
          }`}
          aria-label="Previous section"
        >
          <ChevronUp className="h-4 w-4" />
        </button>
        <button
          onClick={() => scrollToSection(currentSection + 1)}
          disabled={currentSection === sectionIds.length - 1}
          className={`rounded-full border border-border bg-background p-2 transition-all duration-300 ${
            currentSection === sectionIds.length - 1
              ? "cursor-not-allowed opacity-30"
              : "hover:border-foreground-subtle hover:bg-background-elevated"
          }`}
          aria-label="Next section"
        >
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </>
  );
}
