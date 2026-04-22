"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin, GraduationCap, Trophy, Camera, Brain, Github, Linkedin, Mail } from "lucide-react";

function useScrollReveal(threshold = 0.15) {
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

function Bubble({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`rounded-[24px] bg-[#f5f5f7] transition-all duration-700 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function About() {
  const header = useScrollReveal(0.3);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-spacing bg-white"
    >
      <div className="container-luxury">
        {/* Section header */}
        <div
          ref={header.ref}
          className={`mb-12 md:mb-16 md:transition-all md:duration-700 md:ease-out ${
            header.isVisible
              ? "md:translate-y-0 md:opacity-100"
              : "md:translate-y-8 md:opacity-0"
          }`}
        >
          <p className="section-label mb-4">{"// about"}</p>
          <h2
            id="about-heading"
            className="font-display text-display-sm font-medium tracking-tight text-foreground md:text-display-md"
          >
            a brief introduction
          </h2>
        </div>

        {/* Two-column bento layout — 4 explicit rows shared between left & right */}
        <div className="grid gap-5 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto_auto]">
          {/* ── LEFT: Main bio bubble (spans all 4 rows) ── */}
          <Bubble className="flex flex-col justify-between p-8 md:p-10 lg:row-span-4" delay={0}>
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e87b35]/10">
                  <span className="text-xl">👋</span>
                </div>
                <div>
                  <p className="font-poppins text-sm font-semibold uppercase tracking-normal text-[#e87b35]">
                    who i am
                  </p>
                </div>
              </div>

              <h3 className="mb-6 font-display text-[2rem] font-medium leading-tight tracking-tight text-foreground md:text-[2.5rem]">
                i&apos;m faheem kamel
              </h3>

              <div className="space-y-5 text-[17px] leading-[1.75] text-foreground-muted">
                <p>
                  a year 3{" "}
                  <span className="font-semibold text-foreground">computer science</span>{" "}
                  undergraduate at{" "}
                  <span className="font-semibold text-foreground">
                    singapore management university
                  </span>
                  , majoring in{" "}
                  <span className="font-semibold text-foreground">cybersecurity</span>.
                </p>
                <p>
                  my coding journey started in junior college with a-level
                  computing. after 1.5 years of struggling, i changed my
                  approach — dedicating 3 hours daily to rebuilding concepts my
                  way. by a-levels, i achieved a five-grade improvement that
                  shaped my confidence.
                </p>
                <p>
                  i see mathematics as a universal language explaining how the
                  world works. this passion for connecting ideas across fields
                  shapes my approach to building logical, elegant software
                  solutions.
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://github.com/f4heemmmmm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-white transition-opacity duration-300 hover:opacity-70"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/faheemkamel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0077b5] text-white transition-opacity duration-300 hover:opacity-70"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:f4heemmmm@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e87b35] text-white transition-opacity duration-300 hover:opacity-70"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </Bubble>

          {/* ── RIGHT: Row 1 — Location & Education (side by side) ── */}
          <div className="grid grid-cols-2 gap-5">
            <Bubble className="relative overflow-hidden p-6" delay={100}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#e87b35]/10">
                <MapPin className="h-5 w-5 text-[#e87b35]" />
              </div>
              <p className="font-poppins text-xs font-medium uppercase tracking-normal text-foreground-subtle">
                based in
              </p>
              <p className="mt-1 text-xl font-semibold text-foreground">
                Singapore 🇸🇬
              </p>
            </Bubble>

            <Bubble className="relative overflow-hidden p-6" delay={200}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
                <GraduationCap className="h-5 w-5 text-blue-500" />
              </div>
              <p className="font-poppins text-xs font-medium uppercase tracking-normal text-foreground-subtle">
                studying at
              </p>
              <p className="mt-1 text-xl font-semibold text-foreground">
                SMU
              </p>
              <p className="mt-0.5 text-sm text-foreground-muted">
                B.Sc Computer Science
              </p>
            </Bubble>
          </div>

          {/* ── RIGHT: Row 2 — Photo & Sports (side by side, equal height) ── */}
          <div className="grid grid-cols-2 gap-5">
            <Bubble className="relative min-h-[220px] overflow-hidden p-0" delay={300}>
              <Image
                src="/images/profile.JPG"
                alt="Faheem Kamel"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover"
              />
            </Bubble>

            <Bubble className="relative flex flex-col overflow-hidden p-6" delay={400}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                <Trophy className="h-5 w-5 text-green-500" />
              </div>
              <p className="font-poppins text-xs font-medium uppercase tracking-normal text-foreground-subtle">
                athletics
              </p>
              <p className="mt-1 text-lg font-semibold text-foreground">
                Floorball
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground-muted">
                university team & woodlands csc skyhawks
              </p>
            </Bubble>
          </div>

          {/* ── RIGHT: Row 3 — Travel & Photography (full width) ── */}
          <Bubble className="relative overflow-hidden p-6" delay={500}>
            <div className="flex items-start gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500/10">
                <Camera className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="font-poppins text-xs font-medium uppercase tracking-normal text-foreground-subtle">
                  travel & photography
                </p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-foreground-muted">
                  traveling broadens my perspective and understanding of
                  different cultures. i capture moments through photography —
                  a creative outlet that complements my technical work.
                </p>
              </div>
            </div>
          </Bubble>

          {/* ── RIGHT: Row 4 — What drives me (full width) ── */}
          <Bubble className="relative overflow-hidden p-6" delay={600}>
            <div className="flex items-start gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e87b35]/10">
                <Brain className="h-5 w-5 text-[#e87b35]" />
              </div>
              <div>
                <p className="font-poppins text-xs font-medium uppercase tracking-normal text-foreground-subtle">
                  what drives me
                </p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-foreground-muted">
                  i love tackling problems that sit at the intersection of
                  logic and creativity. whether it&apos;s optimizing an algorithm
                  or designing a user experience, i&apos;m always looking for
                  elegant solutions.
                </p>
              </div>
            </div>
          </Bubble>
        </div>
      </div>
    </section>
  );
}
