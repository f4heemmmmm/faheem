"use client";

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

// Resting tone for chips. #6b6b6b clears 4.5:1 on the #f8f8f8 chip background,
// so the labels stay readable on touch devices where hover never fires.
const CHIP_RESTING = "#6b6b6b";

function SkillChip({ skill }: { skill: string }) {
  const data = SKILLS[skill];
  const Icon = data?.icon;

  return (
    <li
      className="group flex cursor-default items-center gap-3 rounded-2xl border border-border bg-[#f8f8f8] py-3.5 pl-5 pr-5 transition-[background-color,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-foreground/15 hover:bg-[#f3f3f3]"
      style={
        {
          "--skill-color": data?.color ?? CHIP_RESTING,
          "--chip-resting": CHIP_RESTING,
        } as React.CSSProperties
      }
    >
      {Icon && (
        <Icon
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-[color:var(--chip-resting)] transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:text-[color:var(--skill-color)]"
        />
      )}
      <span className="whitespace-nowrap font-gt-america text-base font-semibold text-[color:var(--chip-resting)] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-foreground">
        {skill}
      </span>
    </li>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="flex min-h-screen items-center bg-white"
    >
      <div className="container-luxury w-full py-20 md:py-24">
        <h2
          id="skills-heading"
          className="mb-12 font-extenda text-[clamp(1.8rem,5vw,4.5rem)] uppercase leading-[1.05] tracking-tight text-foreground"
        >
          My Skills
        </h2>

        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-gt-america text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="font-gt-america text-sm text-foreground-muted">
                  {category.subtitle}
                </p>
              </div>

              <div className="mt-3 h-px bg-border" />

              <ul className="mt-5 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <SkillChip key={skill} skill={skill} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
