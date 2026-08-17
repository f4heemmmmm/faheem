import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { getProjectById, getAllProjectIds, projects } from "@/data/projects";
import ModelViewerWrapper from "@/components/ui/ModelViewerWrapper";

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
    return { title: "project not found | faheem" };
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

  const index = projects.findIndex((entry) => entry.id === project.id);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <main
      id="main-content"
      className="page-shell-flush mobile-bar-offset min-h-screen bg-white"
    >
      {/* In flow on small screens: a second fixed bar would sit underneath the
          global mobile bar and hide the back link. Fixed from md up, where the
          nav is the sidebar and the top edge is free. */}
      <header className="relative z-40 border-b border-border bg-white/90 backdrop-blur-sm md:fixed md:left-[var(--nav-width)] md:right-0 md:top-0">
        <div className="container-luxury flex h-16 items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-gt-america text-caption font-semibold uppercase tracking-normal text-foreground-muted transition-opacity duration-300 hover:opacity-60"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            all projects
          </Link>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-gt-america text-caption font-semibold uppercase text-foreground-muted transition-opacity duration-300 hover:opacity-60"
                aria-label={`View the ${project.title} source code on GitHub (opens in a new tab)`}
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 font-gt-america text-caption font-semibold uppercase text-white transition-opacity duration-300 hover:opacity-80"
                aria-label={`Open the live ${project.title} site (opens in a new tab)`}
              >
                <span className="hidden sm:inline">view live</span>
                <span className="sm:hidden">live</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="md:pt-16">
        {project.modelUrl ? (
          <div className="relative h-[70vh] w-full bg-background-subtle md:h-[80vh]">
            <ModelViewerWrapper
              modelUrl={project.modelUrl}
              mtlUrl={project.mtlUrl}
              className="h-full w-full"
            />
          </div>
        ) : (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-background-subtle md:aspect-[21/9]">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="100vw"
              className="object-cover object-top"
              priority
            />
          </div>
        )}

        <div className="container-luxury py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16">
              {project.featured && (
                <span className="section-label mb-4 inline-block">
                  featured project
                </span>
              )}
              <h1 className="font-extenda text-[clamp(2rem,6vw,4rem)] uppercase leading-[1.05] tracking-tight text-foreground [overflow-wrap:anywhere]">
                {project.title}
              </h1>
              {project.subtitle && (
                <p className="mt-4 font-gt-america text-body-lg text-foreground-subtle">
                  {project.subtitle}
                </p>
              )}
              <p className="mt-8 font-gt-america text-body-xl leading-relaxed text-foreground-muted">
                {project.longDescription || project.description}
              </p>
            </div>

            <div className="mb-16">
              <h2 className="section-label mb-6 block">technologies</h2>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-border px-3 py-1 font-gt-america text-body-sm text-foreground-muted"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-16">
                <h2 className="section-label mb-6 block">key highlights</h2>
                <ul className="space-y-4">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 font-gt-america text-body-lg text-foreground-muted"
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

            <div className="flex flex-col items-stretch gap-4 border-t border-border pt-12 sm:flex-row sm:flex-wrap sm:items-center">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-poppins text-xs font-semibold uppercase tracking-normal text-white transition-opacity duration-300 hover:opacity-80"
                >
                  view live demo
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 font-poppins text-xs font-semibold uppercase tracking-normal text-foreground transition-colors duration-300 hover:bg-background-subtle"
                >
                  view source code
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </div>

            {nextProject.id !== project.id && (
              <div className="mt-16 border-t border-border pt-8">
                <p className="section-label">next project</p>
                <Link
                  href={`/projects/${nextProject.id}`}
                  className="group mt-3 inline-flex items-center gap-3 font-extenda text-[clamp(1.5rem,4vw,2.5rem)] uppercase leading-tight tracking-tight text-foreground transition-opacity duration-300 hover:opacity-60 [overflow-wrap:anywhere]"
                >
                  {nextProject.title}
                  <ArrowRight
                    className="h-6 w-6 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
