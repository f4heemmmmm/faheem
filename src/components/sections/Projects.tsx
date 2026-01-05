"use client";

import { Github, ExternalLink, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "rallyrank",
    description:
      "tennis matchmaking and tournament management system built with agile methodologies, featuring automatic matchmaking using a custom elo ranking algorithm for fair competition.",
    technologies: ["react", "spring boot", "mongodb", "tailwind css", "axios"],
    liveUrl: "https://rally-rank-frontend.web.app/",
    featured: true,
  },
  {
    title: "hundrednow",
    description:
      "an original card game developed in java, implementing custom game mechanics, logic, and ui elements for an engaging player experience.",
    technologies: ["java", "oop", "game logic"],
    featured: true,
  },
  {
    title: "knightsbridge house",
    description:
      "official website for knightsbridge house, an educational institute. designed with modern ui/ux principles for seamless navigation and intuitive user experience.",
    technologies: ["responsive design", "ui/ux", "web development"],
    liveUrl: "https://knightsbridge-house.vercel.app/",
  },
  {
    title: "faheem's portfolio",
    description:
      "fully responsive portfolio website built from scratch, featuring engaging sections for skills, experiences, and projects with interactive animations.",
    technologies: ["react", "next.js", "tailwind css", "framer motion"],
    liveUrl: "https://www.faheemkamel.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex min-h-screen snap-start items-center section-spacing">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <p className="mb-4 text-base tracking-widest text-foreground-subtle">
            projects
          </p>
          <h2 className="text-4xl font-light tracking-tight text-foreground md:text-5xl">
            selected work
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
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
              <span className="mb-8 text-sm text-foreground-subtle/40">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-medium text-foreground md:text-3xl">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-8 flex-grow text-lg leading-relaxed text-foreground-subtle md:text-xl">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-10 flex flex-wrap gap-3">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="border border-border px-4 py-2 text-sm text-foreground-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-8">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base text-foreground-muted transition-colors duration-300 hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                    <span className="link-underline">code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base text-foreground-muted transition-colors duration-300 hover:text-foreground"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span className="link-underline">live demo</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-20 text-center">
          <a
            href="https://github.com/faheem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-lg text-foreground-muted transition-colors duration-300 hover:text-foreground"
          >
            <span className="link-underline">view all projects on github</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
