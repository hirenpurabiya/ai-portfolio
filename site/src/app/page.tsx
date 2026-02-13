import Link from "next/link";
import { projects } from "@/data/projects";

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
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}
    >
      {status === "live" && (
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse" />
      )}
      {labels[status]}
    </span>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0];
}) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group relative rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:bg-surface-hover hover:shadow-lg hover:shadow-accent/5">
        <div className="flex items-start justify-between mb-4">
          <span className="text-text-tertiary font-mono text-sm">
            #{project.number}
          </span>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.llms.map((llm) => (
            <span
              key={llm}
              className="px-2 py-0.5 rounded-md bg-accent/10 text-accent text-xs font-medium"
            >
              {llm}
            </span>
          ))}
          {project.aiConcepts.slice(0, 2).map((concept) => (
            <span
              key={concept}
              className="px-2 py-0.5 rounded-md bg-zinc-800 text-text-secondary text-xs"
            >
              {concept}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 text-xs text-text-tertiary">
          {project.github && (
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </span>
          )}
          {project.demo && (
            <span className="flex items-center gap-1">
              <svg
                className="w-3.5 h-3.5"
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
            </span>
          )}
          <span className="ml-auto group-hover:text-accent transition-colors">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Hiren Purabiya</h1>
            <p className="text-text-tertiary text-sm">AI/ML Portfolio</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/hirenpurabiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-foreground transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hirenpurabiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-foreground transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://huggingface.co/hirenpurabiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-foreground transition-colors text-sm"
            >
              Hugging Face
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Building Production-Grade AI Systems
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
          A curated collection of projects in LLMs, RAG, AI Agents, MLOps, and
          enterprise AI — each with architecture, live demos, and measurable
          outcomes.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="flex flex-wrap gap-2">
          {[
            "Large Language Models",
            "RAG",
            "AI Agents",
            "Tool Use",
            "Prompt Engineering",
            "MLOps",
            "Python",
            "PyTorch",
            "LangChain",
            "LlamaIndex",
            "OpenAI API",
            "Anthropic API",
            "AWS Bedrock",
            "Hugging Face",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-surface border border-border text-text-secondary text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold mb-8">Projects</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between text-text-tertiary text-sm">
          <span>&copy; {new Date().getFullYear()} Hiren Purabiya</span>
          <span>Built with Next.js &middot; Hosted on Cloudflare Pages</span>
        </div>
      </footer>
    </div>
  );
}
