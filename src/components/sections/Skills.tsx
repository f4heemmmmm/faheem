import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="flex min-h-screen snap-start items-center section-spacing bg-background-subtle"
    >
      <div className="container-luxury">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <p className="mb-4 text-caption tracking-widest text-foreground-subtle">
            skills
          </p>
          <h2
            id="skills-heading"
            className="font-display text-display-sm font-medium tracking-tight text-foreground md:text-display-md"
          >
            technical expertise
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              {/* Category title */}
              <h3 className="mb-8 text-body-sm font-medium tracking-wider text-foreground">
                {category.title}
              </h3>

              {/* Skills list */}
              <ul className="space-y-4" aria-label={`${category.title} skills`}>
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="group flex items-center gap-3 text-body-md text-foreground-muted transition-colors duration-300 hover:text-foreground"
                  >
                    <span
                      className="h-px w-4 bg-border transition-all duration-300 group-hover:w-6 group-hover:bg-foreground-subtle"
                      aria-hidden="true"
                    />
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
