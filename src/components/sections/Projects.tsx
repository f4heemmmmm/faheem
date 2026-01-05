import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="flex min-h-screen snap-start items-center section-spacing"
    >
      <div className="w-full px-8 md:px-12 lg:px-16 xl:px-24">
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
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          role="list"
          aria-label="Featured projects"
        >
          {projects.map((project, index) => (
            <article
              key={project.id}
              role="listitem"
              className="group relative flex min-h-[420px] flex-col border border-border bg-background-subtle transition-all duration-400 ease-luxury hover:border-foreground-subtle/30 hover:bg-background-elevated"
            >
              {/* Card link overlay */}
              <Link
                href={`/projects/${project.id}`}
                className="absolute inset-0 z-10"
                aria-label={`View ${project.title} details`}
              />

              {/* Project image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-background-elevated">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover transition-transform duration-400 ease-luxury group-hover:scale-105"
                />
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute right-4 top-4 bg-foreground px-3 py-1">
                    <span className="text-caption font-medium tracking-wider text-background">
                      featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 lg:p-8">
                {/* Project number */}
                <span
                  className="mb-4 text-caption text-foreground-subtle/40"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="mb-3 font-display text-body-xl font-medium text-foreground md:text-display-sm">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-6 flex-grow text-body-sm text-foreground-muted line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <ul
                  className="mb-6 flex flex-wrap gap-2"
                  aria-label={`Technologies used in ${project.title}`}
                >
                  {project.technologies.slice(0, 4).map((tech) => (
                    <li
                      key={tech}
                      className="border border-border px-2 py-1 text-caption text-foreground-muted"
                    >
                      {tech}
                    </li>
                  ))}
                  {project.technologies.length > 4 && (
                    <li className="px-2 py-1 text-caption text-foreground-subtle">
                      +{project.technologies.length - 4}
                    </li>
                  )}
                </ul>

                {/* Links */}
                <div className="relative z-20 flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-body-sm text-foreground-muted transition-colors duration-300 hover:text-foreground"
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
                      className="inline-flex items-center gap-1.5 text-body-sm text-foreground-muted transition-colors duration-300 hover:text-foreground"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      <span className="link-underline">live</span>
                    </a>
                  )}
                  <span className="ml-auto text-body-sm text-foreground-subtle transition-colors duration-300 group-hover:text-foreground">
                    view details →
                  </span>
                </div>
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
