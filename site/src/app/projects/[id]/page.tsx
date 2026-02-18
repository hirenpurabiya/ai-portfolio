import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Hiren Purabiya`,
    description: project.tagline,
  };
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    live: "bg-green-500/10 text-green-400 border-green-500/20",
    "in-progress": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    planned: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
  };
  const labels: Record<string, string> = {
    live: "Live",
    "in-progress": "In Progress",
    planned: "Planned",
  };
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${styles[status]}`}
    >
      {status === "live" && (
        <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
      )}
      {labels[status]}
    </span>
  );
}

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold mb-4 tracking-tight">{title}</h2>
      <div className="glass rounded-2xl p-6">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-white/5">
        <div className="w-full mx-auto px-8 lg:px-16 xl:px-24 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-text-tertiary hover:text-foreground transition-colors duration-300 text-sm flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm hover:border-white/20 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-sm hover:bg-accent-hover transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="hero-gradient pt-28 pb-16 sm:pt-32 sm:pb-20">
        <main className="w-full mx-auto px-8 lg:px-16 xl:px-24">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-text-tertiary font-mono text-xs tracking-wider">
              #{project.number}
            </span>
            <StatusBadge status={project.status} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            {project.description}
          </p>
        </main>
      </div>

      {/* Content */}
      <div className="w-full mx-auto px-8 lg:px-16 xl:px-24 py-12">
        {/* Architecture */}
        <SectionCard title="Architecture">
          <pre className="text-sm text-text-secondary font-mono overflow-x-auto leading-relaxed">
            <code>{project.architecture}</code>
          </pre>
          <p className="text-text-tertiary text-xs mt-4">
            Rendered as a Mermaid diagram when viewed on GitHub.
          </p>
        </SectionCard>

        {/* Tech Stack + AI Concepts + LLMs in a grid */}
        <div className="grid gap-6 sm:grid-cols-3 mb-8">
          <section>
            <h2 className="text-lg font-semibold mb-4 tracking-tight">
              Tech Stack
            </h2>
            <div className="glass rounded-2xl p-5">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4 tracking-tight">
              AI Concepts
            </h2>
            <div className="glass rounded-2xl p-5">
              <div className="flex flex-wrap gap-2">
                {project.aiConcepts.map((concept) => (
                  <span
                    key={concept}
                    className="px-3 py-1.5 rounded-lg bg-accent/10 text-accent border border-accent/20 text-sm"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4 tracking-tight">
              LLMs / Models
            </h2>
            <div className="glass rounded-2xl p-5">
              <div className="flex flex-wrap gap-2">
                {project.llms.map((llm) => (
                  <span
                    key={llm}
                    className="px-3 py-1.5 rounded-lg bg-accent-purple/10 text-accent-purple border border-accent-purple/20 text-sm font-medium"
                  >
                    {llm}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Key Features */}
        <SectionCard title="Key Features">
          <ul className="space-y-4">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-text-secondary leading-relaxed">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="w-full mx-auto px-8 lg:px-16 xl:px-24 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-text-tertiary text-sm">
          <Link
            href="/"
            className="hover:text-foreground transition-colors duration-300"
          >
            &larr; Back to Portfolio
          </Link>
          <span>&copy; {new Date().getFullYear()} Hiren Purabiya</span>
        </div>
      </footer>
    </div>
  );
}
