"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { experiences } from "@/data/experiences";
import { CATEGORY_ICONS, CATEGORY_LABELS } from "@/lib/experience";

function SkillsDropdown({ skills }: { skills: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [skills]);

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 text-body-sm font-medium tracking-wider text-foreground-subtle transition-colors duration-300 hover:text-foreground"
      >
        key achievements
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
        className="overflow-hidden transition-[max-height] duration-500 ease-out"
      >
        <div ref={contentRef}>
          <ul className="mt-4 space-y-3" aria-label="Key achievements">
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex items-start gap-3 text-body-sm text-foreground-muted md:text-body-md"
              >
                <span
                  className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-foreground-subtle"
                  aria-hidden="true"
                />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-spacing bg-background-subtle"
    >
      <div className="container-luxury">
        <div className="mb-12 md:mb-16">
          <p className="mb-4 text-caption tracking-widest text-foreground-subtle">
            experience
          </p>
          <h2
            id="experience-heading"
            className="font-display text-display-sm font-medium tracking-tight text-foreground md:text-display-md"
          >
            what i&apos;ve been through
          </h2>
        </div>

        <div className="w-full" role="list" aria-label="Work experience">
          {experiences.map((item) => {
            const Icon = CATEGORY_ICONS[item.category];
            return (
              <article
                key={item.title}
                role="listitem"
                className="group relative border-b border-border py-10 first:pt-0 last:border-b-0 last:pb-0 md:py-12"
              >
                <div className="grid gap-4 md:grid-cols-12 md:gap-8 md:items-baseline">
                  <div className="md:col-span-3">
                    <p className="text-caption font-semibold text-foreground-subtle md:text-body-md">
                      <time>{item.date}</time>
                    </p>
                    <div className="mt-1 flex items-center gap-2 md:mt-2">
                      <Icon className="h-3.5 w-3.5 text-foreground-subtle md:h-4 md:w-4" aria-hidden="true" />
                      <p className="text-caption font-medium tracking-wider text-foreground-subtle md:text-body-sm">
                        {CATEGORY_LABELS[item.category]}
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-body-lg font-medium text-foreground md:text-display-sm">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-4xl text-body-sm text-foreground-muted md:mt-6 md:text-body-lg">
                      {item.description}
                    </p>
                    {item.skills && item.skills.length > 0 && (
                      <SkillsDropdown skills={item.skills} />
                    )}
                  </div>
                </div>

                {/* Hover indicator */}
                <div
                  className="absolute -left-2 top-1/2 hidden h-0 w-0.5 -translate-y-1/2 bg-foreground transition-all duration-400 ease-luxury group-hover:h-12 md:-left-4 md:block"
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
