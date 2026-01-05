"use client";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "frontend",
    skills: [
      "react",
      "next.js",
      "typescript",
      "javascript",
      "html5",
      "css3",
      "tailwind css",
      "vue.js",
    ],
  },
  {
    title: "backend",
    skills: [
      "node.js",
      "python",
      "express",
      "postgresql",
      "mongodb",
      "rest apis",
      "graphql",
      "prisma",
    ],
  },
  {
    title: "tools & technologies",
    skills: [
      "git",
      "docker",
      "vs code",
      "figma",
      "linux",
      "aws",
      "vercel",
      "jest",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="flex min-h-screen snap-start items-center section-spacing bg-background-subtle">
      <div className="container-luxury">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <p className="mb-4 text-caption tracking-widest text-foreground-subtle">
            skills
          </p>
          <h2 className="font-display text-display-sm font-medium tracking-tight text-foreground md:text-display-md">
            technical expertise
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          {skillCategories.map((category, index) => (
            <div key={index}>
              {/* Category title */}
              <h3 className="mb-8 text-body-sm font-medium tracking-wider text-foreground">
                {category.title}
              </h3>

              {/* Skills list */}
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="group flex items-center gap-3 text-body-md text-foreground-muted transition-colors duration-300 hover:text-foreground"
                  >
                    <span className="h-px w-4 bg-border transition-all duration-300 group-hover:w-6 group-hover:bg-foreground-subtle" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <p className="text-body-md leading-relaxed text-foreground-subtle">
            always learning, always growing. currently exploring cloud
            architecture, system design patterns, and advanced typescript
            patterns.
          </p>
        </div>
      </div>
    </section>
  );
}
