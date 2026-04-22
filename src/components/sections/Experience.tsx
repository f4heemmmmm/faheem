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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleHover = useCallback((i: number) => setHoveredIndex(i), []);
  const handleLeave = useCallback(() => setHoveredIndex(null), []);

  const hoveredItem =
    hoveredIndex !== null ? experiences[hoveredIndex] : null;
  const hoveredSplit = hoveredItem ? splitTitle(hoveredItem.title) : null;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="grain-overlay relative flex min-h-screen items-center overflow-hidden bg-[#2e2e2e]"
    >
      <div className="relative z-10 w-full px-6 py-16 md:px-12 lg:px-20">
        {/* Description panel — absolutely positioned on the left, never affects layout */}
        <div
          className="absolute left-6 top-1/2 hidden max-w-[300px] -translate-y-1/2 md:block md:left-12 lg:left-20"
          style={{
            opacity: hoveredIndex !== null ? 1 : 0,
            transform:
              hoveredIndex !== null
                ? "translateY(-50%) translateX(0)"
                : "translateY(-50%) translateX(-8px)",
            transition:
              "opacity 350ms cubic-bezier(0.16, 1, 0.3, 1), transform 350ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {hoveredSplit && hoveredItem && (
            <>
              <p className="mb-3 font-gt-america text-body-md font-bold tracking-normal text-white/30">
                {SECTION_LABELS[hoveredItem.category]}
              </p>
              <p className="font-gt-america text-body-xl leading-[1.7] text-white/60">
                {hoveredItem.description}
              </p>
              <div className="mt-3">
                <p className="font-gt-america text-body-sm font-medium uppercase tracking-normal text-white">
                  {hoveredSplit.role}
                </p>
                <p className="mt-1 font-gt-america text-body-sm uppercase tracking-normal text-white/40">
                  {hoveredItem.date}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Company names — always in the same position */}
        <div
          className="flex flex-col items-start gap-1 md:ml-[340px]"
          role="list"
          aria-label="Work experience"
          onMouseLeave={handleLeave}
        >
          {experiences.map((item, index) => {
            const { company } = splitTitle(item.title);
            const isHovered = hoveredIndex === index;

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

                {/* Mobile: description inline */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-luxury md:hidden"
                  style={{
                    maxHeight: isHovered ? "280px" : "0px",
                    opacity: isHovered ? 1 : 0,
                  }}
                >
                  <div className="pb-4 pt-2">
                    <p className="text-body-sm leading-relaxed text-white/60">
                      {item.description}
                    </p>
                    <p className="mt-3 font-mono text-caption uppercase tracking-normal text-white/90">
                      {splitTitle(item.title).role}
                    </p>
                    <p className="mt-1 font-mono text-caption uppercase tracking-normal text-white/40">
                      {item.date} / {SECTION_LABELS[item.category]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
