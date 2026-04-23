"use client";

import { useState, useCallback } from "react";
import { experiences } from "@/data/experiences";
import type { ExperienceCategory } from "@/types";

const SECTION_LABELS: Record<ExperienceCategory, string> = {
  internship: "internship",
  education: "part time job",
  volunteer: "community service",
  service: "national service",
  header: "",
};

const DISPLAY_NAMES: Record<string, string> = {
  "university of victoria": "meaningful",
  "friends2gather community service": "friends2gather",
};

function splitTitle(title: string) {
  const sep = title.indexOf(" – ");
  if (sep === -1) return { company: title, role: "" };
  const company = title.slice(0, sep);
  return {
    company: DISPLAY_NAMES[company] ?? company,
    role: title.slice(sep + 3),
  };
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleHover = useCallback((i: number) => setActiveIndex(i), []);
  const handleLeave = useCallback(() => setActiveIndex(null), []);
  const handleTap = useCallback(
    (i: number) => setActiveIndex((prev) => (prev === i ? null : i)),
    []
  );

  const activeItem =
    activeIndex !== null ? experiences[activeIndex] : null;
  const activeSplit = activeItem ? splitTitle(activeItem.title) : null;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="grain-overlay relative flex min-h-screen items-center overflow-hidden bg-[#2e2e2e]"
    >
      <div className="relative z-10 w-full px-6 py-16 md:px-12 lg:px-20">
        <div className="lg:hidden">
          <div
            className="flex flex-col items-start gap-1"
            role="list"
            aria-label="Work experience"
          >
            {experiences.map((item, index) => {
              const { company } = splitTitle(item.title);
              const isActive = activeIndex === index;

              return (
                <div
                  key={item.title}
                  role="listitem"
                  className="w-full cursor-default"
                  onClick={() => handleTap(index)}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleLeave}
                >
                  <h3
                    className="font-extenda text-[clamp(1.6rem,7vw,3.5rem)] uppercase leading-[1.05] tracking-tight transition-colors duration-300 ease-luxury"
                    style={{
                      color: isActive ? "#ffffff" : "#000000",
                    }}
                  >
                    {company}
                  </h3>

                  <div
                    className="overflow-hidden transition-all duration-400 ease-luxury"
                    style={{
                      maxHeight: isActive ? "320px" : "0px",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div className="pb-5 pt-3">
                      <p className="font-gt-america text-body-sm font-bold tracking-normal text-white/30">
                        {SECTION_LABELS[item.category]}
                      </p>
                      <p className="mt-2 font-gt-america text-body-md leading-relaxed text-white">
                        {item.description}
                      </p>
                      <p className="mt-3 font-gt-america text-body-sm font-medium uppercase tracking-normal text-white/90">
                        {splitTitle(item.title).role}
                      </p>
                      <p className="mt-1 font-gt-america text-caption uppercase tracking-normal text-white/40">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:block">
          <div
            className="absolute left-20 top-1/2 max-w-[300px] -translate-y-1/2"
            style={{
              opacity: activeIndex !== null ? 1 : 0,
              transform:
                activeIndex !== null
                  ? "translateY(-50%) translateX(0)"
                  : "translateY(-50%) translateX(-8px)",
              transition:
                "opacity 350ms cubic-bezier(0.16, 1, 0.3, 1), transform 350ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {activeSplit && activeItem && (
              <>
                <p className="mb-3 font-gt-america text-body-md font-bold tracking-normal text-white/30">
                  {SECTION_LABELS[activeItem.category]}
                </p>
                <p className="font-gt-america text-body-xl leading-[1.7] text-white">
                  {activeItem.description}
                </p>
                <div className="mt-3">
                  <p className="font-gt-america text-body-sm font-medium uppercase tracking-normal text-white">
                    {activeSplit.role}
                  </p>
                  <p className="mt-1 font-gt-america text-body-sm uppercase tracking-normal text-white/40">
                    {activeItem.date}
                  </p>
                </div>
              </>
            )}
          </div>

          <div
            className="ml-[340px] flex flex-col items-start gap-1"
            role="list"
            aria-label="Work experience"
            onMouseLeave={handleLeave}
          >
            {experiences.map((item, index) => {
              const { company } = splitTitle(item.title);
              const isHovered = activeIndex === index;

              return (
                <div
                  key={item.title}
                  role="listitem"
                  className="cursor-default"
                  onMouseEnter={() => handleHover(index)}
                >
                  <h3
                    className="font-extenda text-[clamp(1.8rem,5vw,4.5rem)] uppercase leading-[1.05] tracking-tight transition-colors duration-300 ease-luxury"
                    style={{
                      color: isHovered ? "#ffffff" : "#000000",
                    }}
                  >
                    {company}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
