"use client";

import { useCallback, useState } from "react";
import { experiences } from "@/data/experiences";
import type { Experience as ExperienceItem, ExperienceCategory } from "@/types";

const SECTION_LABELS: Record<ExperienceCategory, string> = {
  internship: "internship",
  education: "part time job",
  volunteer: "community service",
  service: "national service",
};

const DISPLAY_NAMES: Record<string, string> = {
  "university of victoria": "meaningful",
  "friends2gather community service": "friends2gather",
};

// The resting tone for an unselected entry. Black on #2e2e2e sat at roughly
// 1.5:1, which left the whole list unreadable until it was hovered — and on
// touch devices, unreadable full stop. #8a8a8a keeps the same "dimmed until
// selected" effect while clearing 3:1 for large text.
const RESTING_COLOR = "#8a8a8a";
const ACTIVE_COLOR = "#ffffff";

function splitTitle(title: string) {
  const sep = title.indexOf(" – ");
  if (sep === -1) return { company: title, role: "" };
  const company = title.slice(0, sep);
  return {
    company: DISPLAY_NAMES[company] ?? company,
    role: title.slice(sep + 3),
  };
}

function Detail({
  item,
  compact = false,
}: {
  item: ExperienceItem;
  compact?: boolean;
}) {
  const { role } = splitTitle(item.title);
  const label = SECTION_LABELS[item.category];
  // "singapore police force – national service" would otherwise print
  // "national service" twice: once as the kind of role, once as the job title.
  const showRole = role !== "" && role.toLowerCase() !== label.toLowerCase();

  return (
    <>
      <p
        className={`font-gt-america font-bold tracking-normal text-white/60 ${
          compact ? "text-body-sm" : "mb-3 text-body-md"
        }`}
      >
        {label}
      </p>
      <p
        className={`font-gt-america text-white ${
          compact
            ? "mt-2 text-body-md leading-relaxed"
            : "text-body-xl leading-[1.7]"
        }`}
      >
        {item.description}
      </p>
      <div className="mt-3">
        {showRole && (
          <p className="font-gt-america text-body-sm font-medium uppercase tracking-normal text-white">
            {role}
          </p>
        )}
        <p className="mt-1 font-gt-america text-body-sm uppercase tracking-normal text-white/70">
          {item.date}
        </p>
      </div>
    </>
  );
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleHover = useCallback((i: number) => setActiveIndex(i), []);
  const handleLeave = useCallback(() => setActiveIndex(null), []);
  const handleToggle = useCallback(
    (i: number) => setActiveIndex((prev) => (prev === i ? null : i)),
    [],
  );

  const activeItem = activeIndex !== null ? experiences[activeIndex] : null;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="grain-overlay relative flex min-h-screen items-center overflow-hidden bg-[#2e2e2e]"
    >
      <div className="relative z-10 w-full px-6 py-20 md:px-12 md:py-24 lg:px-20">
        {/* Small and medium screens: each entry expands in place. */}
        <div className="lg:hidden">
          <ul className="flex flex-col items-start gap-1">
            {experiences.map((item, index) => {
              const { company } = splitTitle(item.title);
              const isActive = activeIndex === index;
              const panelId = `experience-panel-${index}`;

              return (
                <li key={item.title} className="w-full">
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    className="w-full text-left"
                  >
                    <span
                      className="block font-extenda text-[clamp(1.6rem,7vw,3.5rem)] uppercase leading-[1.05] tracking-tight transition-colors duration-300 ease-luxury"
                      style={{ color: isActive ? ACTIVE_COLOR : RESTING_COLOR }}
                    >
                      {company}
                    </span>
                  </button>

                  {/* grid-rows 0fr -> 1fr animates open without a fixed max-height,
                      so a long description can never be clipped. */}
                  <div
                    id={panelId}
                    className="grid transition-[grid-template-rows,opacity] duration-400 ease-luxury"
                    style={{
                      gridTemplateRows: isActive ? "1fr" : "0fr",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-5 pt-3">
                        <Detail item={item} compact />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Large screens: names on the right, the selected detail on the left. */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(240px,300px)_1fr] lg:gap-16">
          <div className="min-h-[280px] self-center" aria-live="polite">
            <div
              style={{
                opacity: activeItem ? 1 : 0,
                transform: activeItem ? "translateX(0)" : "translateX(-8px)",
                transition:
                  "opacity 350ms cubic-bezier(0.16, 1, 0.3, 1), transform 350ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {activeItem && <Detail item={activeItem} />}
            </div>
          </div>

          <ul
            className="flex flex-col items-start gap-1"
            onMouseLeave={handleLeave}
          >
            {experiences.map((item, index) => {
              const { company } = splitTitle(item.title);
              const isActive = activeIndex === index;

              return (
                <li key={item.title}>
                  <button
                    type="button"
                    onMouseEnter={() => handleHover(index)}
                    onFocus={() => handleHover(index)}
                    onClick={() => handleToggle(index)}
                    aria-expanded={isActive}
                    className="text-left"
                  >
                    <span
                      className="block font-extenda text-[clamp(1.8rem,5vw,4.5rem)] uppercase leading-[1.05] tracking-tight transition-colors duration-300 ease-luxury"
                      style={{ color: isActive ? ACTIVE_COLOR : RESTING_COLOR }}
                    >
                      {company}
                    </span>
                    <span className="sr-only">
                      {isActive ? " — showing details" : " — show details"}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
