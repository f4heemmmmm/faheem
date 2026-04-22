import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-spacing border-t-[0.25px] border-white bg-white"
    >
      <div className="container-luxury">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="section-label mb-4">{"// skills"}</p>
          <h2
            id="skills-heading"
            className="font-display text-display-sm font-medium tracking-tight text-foreground md:text-display-md"
          >
            technical expertise
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white p-8">
              {/* Category title */}
              <h3 className="mb-8 font-mono text-caption uppercase tracking-normal text-foreground-subtle">
                {category.title}
              </h3>

              {/* Skills list */}
              <ul className="space-y-3" aria-label={`${category.title} skills`}>
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="group flex items-center gap-3 text-body-md text-foreground-muted transition-colors duration-300 hover:text-foreground"
                  >
                    <span
                      className="h-px w-4 bg-border transition-all duration-300 group-hover:w-6 group-hover:bg-foreground"
                      aria-hidden="true"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
