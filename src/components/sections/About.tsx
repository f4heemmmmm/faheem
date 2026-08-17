"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";

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

const HOBBIES = [
  "floorball",
  "movies",
  "music",
  "traveling",
  "photography",
] as const;

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
      // Transitioning only opacity/transform: `transition-all` would also pick up
      // the inherited `visibility` the loading screen toggles and delay the reveal.
      className={`rounded-[24px] bg-[#f5f5f7] transition-[opacity,transform] duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="flex min-h-screen items-center bg-white py-20 md:py-24"
    >
      <div className="container-luxury max-w-[1500px]">
        <div className="grid gap-5 lg:grid-cols-4">
          <Bubble className="flex flex-col justify-between p-8 md:p-10 lg:col-span-3" delay={0}>
            <div>
              <p className="mb-4 font-gt-america text-sm font-semibold tracking-normal text-brand-ink">
                Who I Am
              </p>

              <h2
                id="about-heading"
                className="mb-6 font-gt-america text-[2rem] font-bold leading-tight tracking-tight text-foreground md:text-[2.5rem]"
              >
                I&apos;m Faheem Kamel
              </h2>

              <div className="space-y-5 font-gt-america text-[17px] leading-[1.75] text-slate-700">
                <p>
                  A Year 4{" "}
                  <span className="font-semibold text-foreground">Computer Science</span>{" "}
                  undergraduate at{" "}
                  <span className="font-semibold text-foreground">
                    Singapore Management University
                  </span>
                  , majoring in{" "}
                  <span className="font-semibold text-foreground">Cybersecurity</span>.
                </p>
                <p>
                  My coding journey began in Junior College, when I chose
                  Computing as one of my A-Level subjects. My programming
                  journey wasn&apos;t exactly smooth sailing. The first 1.5 years
                  were challenging. I struggled significantly, failing most
                  of my tests and exams and receiving below-average grades for
                  my assignments. It was especially discouraging (and humiliating)
                  to see all my friends succeed in areas I thought I could never.
                  <span className = "font-bold"> Fun Fact: </span>I actually almost repeated my JC Year 1 because of this subject.
                </p>
                <p>
                  Instead of giving up, I changed my approach. I dedicated 3 hours
                  everyday to rebuild my understanding of concepts in a way that worked
                  for me. That shift made all the difference. By the time I sat for my
                  A-Levels, I achieved a 5-grade improvement, an experience that transformed
                  not just my results, but confidence in myself.
                </p>
                <p>
                  The mindset of adapting and learning differently is what
                  contributes to drive me today. It has allowed me to grow
                  beyond the classroom. I&apos;m now building websites, softwares,
                  applications (sometimes just for fun), and real-world
                  solutions, which was something I never thought I could
                  accomplish at the start of my journey.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-white transition-opacity duration-300 hover:opacity-70"
                aria-label="Faheem on GitHub (opens in a new tab)"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0077b5] text-white transition-opacity duration-300 hover:opacity-70"
                aria-label="Faheem on LinkedIn (opens in a new tab)"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-solid text-white transition-opacity duration-300 hover:opacity-70"
                aria-label={`Email Faheem at ${CONTACT_EMAIL}`}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Bubble>

          <div className="flex flex-col gap-5 lg:col-span-1 lg:h-full">
            <Bubble className="p-6" delay={100}>
              <p className="font-gt-america text-sm font-semibold tracking-normal text-slate-600">
                Based In
              </p>
              <p className="mt-1 font-gt-america text-xl font-semibold text-foreground">
                Singapore
              </p>
              <div className="mt-4 border-t border-border pt-4">
                <p className="font-gt-america text-sm font-semibold tracking-normal text-slate-600">
                  Studying At
                </p>
                <p className="mt-1 font-gt-america text-xl font-semibold text-foreground">
                  SMU
                </p>
                <p className="mt-0.5 font-gt-america text-base italic text-foreground-muted">
                  B.Sc Computer Science
                </p>
              </div>
            </Bubble>

            <Bubble className="flex flex-col p-6" delay={200}>
              <p className="font-gt-america text-sm font-semibold tracking-normal text-slate-600">
                Hobbies
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {HOBBIES.map((hobby) => (
                  <li
                    key={hobby}
                    className="rounded-full bg-white px-3 py-1 font-gt-america text-sm text-slate-700"
                  >
                    {hobby}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-gt-america text-base leading-relaxed text-slate-700">
                I capture moments through my lens — a creative outlet that
                complements my technical work.
              </p>
            </Bubble>
          </div>
        </div>
      </div>
    </section>
  );
}
