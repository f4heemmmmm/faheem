"use client";

import { experiences } from "@/data/experiences";
import { Briefcase, GraduationCap, Heart, Shield } from "lucide-react";

const categoryIcons = {
  internship: Briefcase,
  education: GraduationCap,
  volunteer: Heart,
  service: Shield,
  header: Briefcase,
};

const categoryLabels = {
  internship: "internship",
  education: "education",
  volunteer: "volunteer",
  service: "national service",
  header: "",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex min-h-screen snap-start items-center section-spacing bg-background-subtle"
    >
      <div className="max-w-8xl mx-auto">
        <div className="mb-12 md:mb-18">
          <p className="mb-4 text-base font-normal tracking-widest text-foreground-subtle">
            experience
          </p>
          <h2 className="text-4xl font-light tracking-tight text-foreground md:text-5xl">
            what i&apos;ve been through
          </h2>
        </div>

        <div className="w-full">
          {experiences.map((item, index) => {
            const Icon = categoryIcons[item.category];
            return (
              <div
                key={index}
                className="group relative border-b border-border py-10 first:pt-0 last:border-b-0 last:pb-0 md:py-12"
              >
                <div className="grid gap-4 md:grid-cols-12 md:gap-8 md:items-baseline">
                  <div className="md:col-span-3">
                    <p className="text-base text-foreground-subtle font-semibold md:text-lg md:leading-[1.75rem]">{item.date}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Icon className="h-4 w-4 text-white/70" />
                      <p className="text-base font-medium tracking-wider text-white/70">
                        {categoryLabels[item.category]}
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-2xl font-medium leading-normal text-foreground md:text-3xl md:leading-[1.75rem]">
                      {item.title}
                    </h3>
                    <p className="mt-6 max-w-4xl text-xl leading-relaxed text-foreground-muted">
                      {item.description}
                    </p>
                    {item.skills && (
                      <ul className="mt-6 space-y-4">
                        {item.skills.map((skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className="flex items-start gap-2 text-xl leading-relaxed text-white/80"
                          >
                            <span className="mt-3.5 h-1 w-1 flex-shrink-0 rounded-full bg-foreground-subtle/80" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute -left-4 top-1/2 h-0 w-0.5 -translate-y-1/2 bg-foreground transition-all duration-400 ease-luxury group-hover:h-12" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
