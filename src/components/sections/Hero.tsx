"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import PressureText from "@/components/ui/PressureText";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { RESUME_URL } from "@/lib/constants";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Only opacity and transform are transitioned. `transition-all` would also
  // transition the inherited `visibility` the loading screen toggles, which
  // held the hero blank for well over a second after the page was ready.
  const reveal = `transition-[opacity,transform] duration-800 ease-luxury ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-[30%] opacity-0"
  }`;

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-white pt-[var(--mobile-bar-height)] md:pt-0"
    >
      <AnimatedBackground />

      {/* The shader drifts through a deep navy phase where dark text on it falls
          to roughly 3:1. This scrim holds the area behind the copy above 4.5:1
          while leaving the right of the hero as clear background. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.62)_0%,rgba(255,255,255,0.4)_100%)] md:bg-[linear-gradient(to_right,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.42)_48%,rgba(255,255,255,0)_75%)]"
      />

      <div className="container-luxury relative z-10">
        <div className={`mt-6 ${reveal}`} style={{ transitionDelay: "120ms" }}>
          <p className="font-gt-america text-base font-semibold text-foreground sm:text-lg">
            hi, i am
          </p>
          <h1
            id="hero-heading"
            aria-label="faheem kamel"
            className="font-sans text-[clamp(3rem,14vw,8rem)] font-normal leading-none tracking-tight text-foreground"
          >
            <PressureText text="faheem" minWeight={200} maxWeight={900} radius={250} />
            <PressureText text="kamel" minWeight={200} maxWeight={900} radius={250} />
          </h1>
        </div>

        <p
          className={`mt-6 max-w-md font-gt-america text-base font-semibold leading-relaxed text-foreground sm:mt-8 sm:text-lg ${reveal}`}
          style={{ transitionDelay: "240ms" }}
        >
          an aspiring software developer, hungry to make meaningful impact in
          the tech industry.
        </p>

        <div
          className={`mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4 ${reveal}`}
          style={{ transitionDelay: "360ms" }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-poppins text-xs font-semibold uppercase tracking-normal text-white transition-opacity duration-300 hover:opacity-80"
          >
            view projects
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/90 px-6 py-3 font-poppins text-xs font-semibold uppercase tracking-normal text-foreground backdrop-blur-sm transition-colors duration-300 hover:bg-white"
          >
            resume
            <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
            <span className="sr-only">(opens a PDF in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
