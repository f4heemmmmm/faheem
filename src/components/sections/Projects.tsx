import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="flex min-h-screen snap-start items-center section-spacing"
    >
      <div className="container-luxury">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="mb-4 text-caption tracking-widest text-foreground-subtle">
            projects
          </p>
          <h2
            id="projects-heading"
            className="font-display text-display-sm font-medium tracking-tight text-foreground md:text-display-md"
          >
            selected work
          </h2>
        </div>

        {/* Projects grid */}
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
          role="list"
          aria-label="Featured projects"
        >
          {projects.map((project, index) => (
            <article
              key={project.title}
              role="listitem"
              className="group relative flex min-h-[400px] flex-col border border-border bg-background-subtle p-10 transition-all duration-400 ease-luxury hover:border-foreground-subtle/30 hover:bg-background-elevated lg:p-14"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute -top-px right-8 bg-foreground px-3 py-1">
                  <span className="text-caption font-medium tracking-wider text-background">
                    featured
                  </span>
                </div>
              )}

              {/* Project number */}
              <span
                className="mb-8 text-caption text-foreground-subtle/40"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="mb-4 font-display text-display-sm font-medium text-foreground">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-8 flex-grow text-body-md text-foreground-muted md:text-body-lg">
                {project.description}
              </p>

              {/* Technologies */}
              <ul
                className="mb-10 flex flex-wrap gap-2"
                aria-label={`Technologies used in ${project.title}`}
              >
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="border border-border px-3 py-1.5 text-caption text-foreground-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex items-center gap-6">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-body-sm text-foreground-muted transition-colors duration-300 hover:text-foreground"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    <span className="link-underline">code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-body-sm text-foreground-muted transition-colors duration-300 hover:text-foreground"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span className="link-underline">live demo</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/faheem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-body-md text-foreground-muted transition-colors duration-300 hover:text-foreground"
            aria-label="View all projects on GitHub"
          >
            <span className="link-underline">view all projects on github</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
