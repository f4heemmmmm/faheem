import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjectById, getAllProjectIds } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const ids = getAllProjectIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | faheem`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container-luxury flex h-16 items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-body-sm text-foreground-muted transition-colors duration-300 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            back to projects
          </Link>
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-body-sm text-foreground-muted transition-colors duration-300 hover:text-foreground"
                aria-label="View source code on GitHub"
              >
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-none border border-foreground bg-foreground px-4 py-2 text-body-sm font-medium text-background transition-all duration-300 hover:bg-transparent hover:text-foreground"
                aria-label="View live demo"
              >
                <span>view live</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="pt-16">
        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-background-subtle md:aspect-[21/9]">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Project Info */}
        <div className="container-luxury py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            {/* Title & Description */}
            <div className="mb-12">
              {project.featured && (
                <span className="mb-4 inline-block text-caption font-medium tracking-wider text-foreground-subtle">
                  featured project
                </span>
              )}
              <h1 className="font-display text-display-md font-medium tracking-tight text-foreground md:text-display-lg">
                {project.title}
              </h1>
              <p className="mt-6 text-body-xl leading-relaxed text-foreground-muted">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h2 className="mb-4 text-body-sm font-medium tracking-wider text-foreground">
                technologies
              </h2>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="border border-border bg-background-subtle px-4 py-2 text-body-sm text-foreground-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-12">
                <h2 className="mb-6 text-body-sm font-medium tracking-wider text-foreground">
                  key highlights
                </h2>
                <ul className="space-y-4">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-body-lg text-foreground-muted"
                    >
                      <span
                        className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground-subtle"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 border-t border-border pt-12">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-none border border-foreground bg-foreground px-6 py-3 text-body-sm font-medium tracking-wider text-background transition-all duration-400 ease-luxury hover:bg-transparent hover:text-foreground"
                >
                  view live demo
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-none border border-border px-6 py-3 text-body-sm font-medium tracking-wider text-foreground transition-all duration-400 ease-luxury hover:border-foreground-subtle hover:bg-foreground/5"
                >
                  view source code
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
