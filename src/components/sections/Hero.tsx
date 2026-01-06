"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen snap-start items-center overflow-hidden pt-24 pb-8 md:h-screen md:pt-20 md:pb-0"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      <div className="container-luxury relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1
              className={`text-3xl font-light leading-tight tracking-tight md:text-4xl lg:text-5xl transition-all duration-800 ease-luxury delay-100 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              hi, i am
              <br />
              <span className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl">faheem kamel</span>
            </h1>
            <p
              className={`mt-8 max-w-xl text-lg font-normal leading-relaxed text-foreground-muted md:text-xl transition-all duration-800 ease-luxury delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              an aspiring software developer, hungry to make meaningful impact in
              the tech industry.
            </p>
            <div
              className={`mt-12 flex flex-col items-start gap-4 sm:flex-row sm:gap-6 transition-all duration-800 ease-luxury delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-none border border-foreground bg-foreground px-7 py-3 text-base font-medium tracking-wider text-background transition-all duration-400 ease-luxury hover:bg-transparent hover:text-foreground"
              >
                view projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="/my-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-none border border-border bg-transparent px-7 py-3 text-base font-medium tracking-wider text-foreground transition-all duration-400 ease-luxury hover:border-foreground-subtle hover:bg-foreground/5"
              >
                view resume
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
          <div
            className={`relative transition-all duration-800 ease-luxury delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative mx-auto aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden rounded-full bg-background-elevated">
              <Image
                src="/images/profile.JPG"
                alt="faheem kamel"
                fill
                className="object-cover scale-150"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-800 ease-luxury delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-foreground-subtle transition-colors duration-300 hover:text-foreground"
        >
          <span className="text-xs font-normal tracking-widest">scroll</span>
          <div className="relative h-12 w-px overflow-hidden bg-border">
            <div className="absolute inset-x-0 top-0 h-full animate-pulse bg-gradient-to-b from-foreground-subtle to-transparent" />
          </div>
        </a>
      </div>
    </section>
  );
}
