import { experiences } from "@/data/experiences";
import { CATEGORY_ICONS, CATEGORY_LABELS } from "@/lib/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="flex min-h-screen snap-start items-center section-spacing bg-background-subtle"
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
                    <p className="text-body-sm font-semibold text-foreground-subtle md:text-body-md">
                      <time>{item.date}</time>
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Icon className="h-4 w-4 text-foreground-subtle" aria-hidden="true" />
                      <p className="text-body-sm font-medium tracking-wider text-foreground-subtle">
                        {CATEGORY_LABELS[item.category]}
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-display-sm font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-6 max-w-4xl text-body-lg text-foreground-muted">
                      {item.description}
                    </p>
                    {item.skills && item.skills.length > 0 && (
                      <ul className="mt-6 space-y-3" aria-label="Key achievements">
                        {item.skills.map((skill) => (
                          <li
                            key={skill}
                            className="flex items-start gap-3 text-body-md text-foreground-muted"
                          >
                            <span
                              className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-foreground-subtle"
                              aria-hidden="true"
                            />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Hover indicator */}
                <div
                  className="absolute -left-4 top-1/2 h-0 w-0.5 -translate-y-1/2 bg-foreground transition-all duration-400 ease-luxury group-hover:h-12"
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
