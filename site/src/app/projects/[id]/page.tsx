import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Hiren Purabiya`,
    description: project.tagline,
  };
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    live: "bg-green-500/10 text-green-400 border-green-500/20",
    "in-progress": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
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

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-text-tertiary hover:text-foreground transition-colors text-sm flex items-center gap-2"
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
          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border text-sm hover:border-accent/40 transition-colors"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm hover:bg-accent-hover transition-colors"
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

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-text-tertiary font-mono text-sm">
              #{project.number}
            </span>
            <StatusBadge status={project.status} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-3">
            {project.title}
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Architecture */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Architecture</h2>
          <div className="rounded-xl border border-border bg-surface p-6">
            <pre className="text-sm text-text-secondary font-mono overflow-x-auto">
              <code>{project.architecture}</code>
            </pre>
            <p className="text-text-tertiary text-xs mt-3">
              Rendered as a Mermaid diagram when viewed on GitHub.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-surface border border-border text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* AI Concepts */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">AI Concepts</h2>
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
        </section>

        {/* LLMs Used */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">LLMs / Models</h2>
          <div className="flex flex-wrap gap-2">
            {project.llms.map((llm) => (
              <span
                key={llm}
                className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 text-sm font-medium"
              >
                {llm}
              </span>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-3">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-text-secondary">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between text-text-tertiary text-sm">
          <Link href="/" className="hover:text-foreground transition-colors">
            &larr; Back to Portfolio
          </Link>
          <span>&copy; {new Date().getFullYear()} Hiren Purabiya</span>
        </div>
      </footer>
    </div>
  );
}
