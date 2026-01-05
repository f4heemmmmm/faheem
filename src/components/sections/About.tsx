"use client";

import { useEffect, useRef, useState } from "react";

function useScrollReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export default function About() {
  const header = useScrollReveal(0.3);
  const intro = useScrollReveal(0.3);
  const journey = useScrollReveal(0.2);
  const math = useScrollReveal(0.2);
  const sports = useScrollReveal(0.2);
  const travel = useScrollReveal(0.2);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="flex min-h-screen snap-start items-center section-spacing"
    >
      <div className="container-luxury">
        <div
          ref={header.ref}
          className={`mb-12 md:mb-16 transition-all duration-700 ease-out ${
            header.isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 text-caption tracking-widest text-foreground-subtle">
            about
          </p>
          <h2
            id="about-heading"
            className="font-display text-display-sm font-medium tracking-tight text-foreground md:text-display-md"
          >
            a brief introduction
          </h2>
        </div>
        <div
          ref={intro.ref}
          className={`mb-16 max-w-4xl transition-all duration-700 ease-out delay-100 ${
            intro.isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-body-xl leading-relaxed text-foreground-muted md:text-display-sm md:font-light">
            i am <span className="font-semibold">faheem kamel</span>, a year 3{" "}
            <span className="font-semibold">computer science</span> undergraduate
            at singapore management university, majoring in{" "}
            <span className="font-semibold">cybersecurity</span>.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
          <div
            ref={journey.ref}
            className={`transition-all duration-700 ease-out ${
              journey.isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <h3 className="mb-4 text-body-lg font-medium tracking-wider text-foreground">
              my journey
            </h3>
            <p className="text-body-lg text-foreground-muted">
              my coding journey started in junior college with a-level computing.
              after 1.5 years of struggling, i changed my approach. i dedicated 3
              hours daily to rebuilding concepts my way. by a-levels, i achieved a
              five-grade improvement that shaped my confidence.
            </p>
          </div>
          <div
            ref={math.ref}
            className={`md:pt-32 transition-all duration-700 ease-out delay-150 ${
              math.isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <h3 className="mb-4 text-body-lg font-medium tracking-wider text-foreground">
              passion for mathematics
            </h3>
            <p className="text-body-lg text-foreground-muted">
              i see mathematics as a universal language explaining how the world
              works. this passion for connecting ideas across fields shapes my
              approach to building logical, elegant software solutions.
            </p>
          </div>
          <div
            ref={sports.ref}
            className={`transition-all duration-700 ease-out ${
              sports.isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <h3 className="mb-4 text-body-lg font-medium tracking-wider text-foreground">
              sports & athletics
            </h3>
            <p className="text-body-lg text-foreground-muted">
              sports have shaped me since age 7 through soccer, teaching teamwork,
              perseverance, and leadership. now i represent my university in
              floorball and play for woodlands csc skyhawks.
            </p>
          </div>
          <div
            ref={travel.ref}
            className={`md:pt-32 transition-all duration-700 ease-out delay-150 ${
              travel.isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <h3 className="mb-4 text-body-lg font-medium tracking-wider text-foreground">
              travel & photography
            </h3>
            <p className="text-body-lg text-foreground-muted">
              traveling broadens my perspective and understanding of different
              cultures. i make it a point to capture these moments through
              photography. it really is a creative outlet that complements my
              technical work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
