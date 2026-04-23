"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import PressureText from "@/components/ui/PressureText";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white"
    >
      <AnimatedBackground />

      <div className="container-luxury relative z-10">

        <div
          className={`mt-6 transition-all duration-800 ease-luxury ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[30%] opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <p className="text-lg font-medium text-slate-800">hi, i am</p>
          <PressureText
            text="faheem"
            className="font-sans text-display-2xl leading-none tracking-tight text-foreground sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem]"
            minWeight={100}
            maxWeight={900}
            radius={250}
          />
          <PressureText
            text="kamel"
            className="font-sans text-display-2xl leading-none tracking-tight text-foreground sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem]"
            minWeight={100}
            maxWeight={900}
            radius={250}
          />
        </div>
        <p
          className={`mt-8 font-bold max-w-md text-lg leading-relaxed text-slate-800 transition-all duration-800 ease-luxury ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[30%] opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          an aspiring software developer, hungry to make meaningful impact in
          the tech industry.
        </p>

        <div
          className={`mt-10 flex items-center gap-4 transition-all duration-800 ease-luxury ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[30%] opacity-0"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <Link
            href="/projects"
            className="font-poppins group text-xs font-semibold inline-flex items-center gap-2 rounded-full bg-foreground/10 px-6 py-3 font-mono text-caption uppercase tracking-normal text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-foreground/20"
          >
            view projects
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <a
            href="/images/my-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-poppins text-xs font-semibold group inline-flex items-center gap-2 rounded-full bg-foreground/10 px-6 py-3 font-mono text-caption uppercase tracking-normal text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-foreground/20"
          >
            resume
            <Download className="h-3.5 w-3.5 font-semibold transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
