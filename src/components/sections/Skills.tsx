"use client";

import { useState } from "react";
import { skillCategories } from "@/data/skills";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiPython,
  SiC,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiJira,
  SiPostman,
  SiSupabase,
  SiDocker,
  SiBlender,
  SiAssemblyscript,
} from "react-icons/si";
import { FaJava, FaDatabase, FaAws } from "react-icons/fa";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import {
  MdLoop,
  MdWaterfallChart,
  MdDeveloperMode,
  MdAccountTree,
} from "react-icons/md";
import type { IconType } from "react-icons";

const SKILLS: Record<string, { icon: IconType; color: string }> = {
  Java: { icon: FaJava, color: "#e76f00" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  React: { icon: SiReact, color: "#61dafb" },
  "React Native": { icon: TbBrandReactNative, color: "#61dafb" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  Python: { icon: SiPython, color: "#3776ab" },
  C: { icon: SiC, color: "#a8b9cc" },
  Assembly: { icon: SiAssemblyscript, color: "#007aac" },
  SQL: { icon: FaDatabase, color: "#336791" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169e1" },
  MySQL: { icon: SiMysql, color: "#4479a1" },
  Git: { icon: SiGit, color: "#f05032" },
  Jira: { icon: SiJira, color: "#0052cc" },
  Postman: { icon: SiPostman, color: "#ff6c37" },
  "REST APIs": { icon: TbApi, color: "#009688" },
  Supabase: { icon: SiSupabase, color: "#3ecf8e" },
  Docker: { icon: SiDocker, color: "#2496ed" },
  AWS: { icon: FaAws, color: "#ff9900" },
  Blender: { icon: SiBlender, color: "#f5792a" },
  Agile: { icon: MdLoop, color: "#4caf50" },
  Waterfall: { icon: MdWaterfallChart, color: "#2196f3" },
  SDLC: { icon: MdDeveloperMode, color: "#9c27b0" },
  "Object-Oriented Programming": { icon: MdAccountTree, color: "#607d8b" },
};

function SkillChip({ skill }: { skill: string }) {
  const [hovered, setHovered] = useState(false);
  const data = SKILLS[skill];
  if (!data) return null;

  const Icon = data.icon;

  return (
    <div
      className="group flex cursor-default items-center rounded-2xl border border-border bg-[#f8f8f8] py-3.5 pl-5 pr-5 transition-[background-color,border-color,padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-foreground/15 hover:bg-[#f3f3f3] hover:pr-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon
        className="h-6 w-6 flex-shrink-0 transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          color: hovered ? data.color : "#999999",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      />
      <div
        className="overflow-hidden"
        style={{
          maxWidth: hovered ? "220px" : "0px",
          opacity: hovered ? 1 : 0,
          marginLeft: hovered ? "12px" : "0px",
          transform: hovered ? "translateX(0)" : "translateX(-8px)",
          transition: "max-width 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), margin-left 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <span className="whitespace-nowrap font-gt-america text-base font-semibold text-foreground">
          {skill}
        </span>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="flex min-h-screen items-center bg-white"
    >
      <div className="container-luxury w-full py-8">
        <h2
          id="skills-heading"
          className="mb-12 font-extenda text-[clamp(1.8rem,5vw,4.5rem)] uppercase leading-[1.05] tracking-tight text-foreground"
        >
          My Skills
        </h2>

        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-baseline justify-between">
                <h3 className="font-gt-america text-lg font-semibold text-foreground">
                  {category.title}
                </h3>

              </div>

              <div className="mt-3 h-px bg-border" />

              <div className="mt-5 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <SkillChip key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
