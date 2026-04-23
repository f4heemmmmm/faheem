import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjectById, getAllProjectIds } from "@/data/projects";
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
    <main className="min-h-screen bg-white md:ml-[60px]">
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-border bg-white/80 backdrop-blur-sm md:left-[60px]">
        <div className="container-luxury flex h-16 items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-caption uppercase tracking-normal text-foreground-muted transition-opacity duration-300 hover:opacity-60"
          >
            <ArrowLeft className="h-4 w-4" />
            back to projects
          </Link>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-caption uppercase text-foreground-muted transition-opacity duration-300 hover:opacity-60"
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
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 font-mono text-caption uppercase text-white transition-opacity duration-300 hover:opacity-80"
                aria-label="View live demo"
              >
                <span className="hidden sm:inline">view live</span>
                <span className="sm:hidden">live</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="pt-16">
        {project.modelUrl ? (
          <div className="relative h-[70vh] w-full bg-background-subtle md:h-[80vh]">
            <ModelViewerWrapper modelUrl={project.modelUrl} mtlUrl={project.mtlUrl} className="h-full w-full" />
          </div>
        ) : (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-background-subtle md:aspect-[21/9]">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
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
              <h1 className="font-display text-display-md font-medium tracking-tight text-foreground md:text-display-lg">
                {project.title}
              </h1>
              {project.subtitle && (
                <p className="mt-4 text-body-lg text-foreground-subtle">
                  {project.subtitle}
                </p>
              )}
              <p className="mt-8 text-body-xl leading-relaxed text-foreground-muted">
                {project.longDescription || project.description}
              </p>
            </div>

            <div className="mb-16">
              <h2 className="mb-6 font-mono text-caption uppercase tracking-normal text-foreground-subtle">
                technologies
              </h2>
              <p className="font-mono text-body-sm uppercase tracking-normal text-foreground-muted">
                {project.technologies.join(" / ")}
              </p>
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-16">
                <h2 className="mb-6 font-mono text-caption uppercase tracking-normal text-foreground-subtle">
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

            <div className="flex flex-col items-stretch gap-4 border-t border-border pt-12 sm:flex-row sm:flex-wrap sm:items-center">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-mono text-caption uppercase tracking-normal text-white transition-opacity duration-300 hover:opacity-80"
                >
                  view live demo
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 font-mono text-caption uppercase tracking-normal text-foreground transition-all duration-300 hover:bg-background-subtle"
                >
                  view source code
                  <Github className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
