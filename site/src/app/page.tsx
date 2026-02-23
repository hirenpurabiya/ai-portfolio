"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";

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
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status]}`}
    >
      {status === "live" && (
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse" />
      )}
      {labels[status]}
    </span>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group glass card-glow rounded-2xl p-8 h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-text-tertiary font-mono text-xs tracking-wider">
            #{project.number}
          </span>
          <StatusBadge status={project.status} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {project.tagline}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.llms.map((llm) => (
            <span
              key={llm}
              className="px-2.5 py-1 rounded-lg bg-accent/10 text-accent text-xs font-medium border border-accent/20"
            >
              {llm}
            </span>
          ))}
          {project.aiConcepts.slice(0, 2).map((concept) => (
            <span
              key={concept}
              className="px-2.5 py-1 rounded-lg bg-white/5 text-text-secondary text-xs border border-white/5"
            >
              {concept}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-text-tertiary pt-4 border-t border-white/5">
          <div className="flex items-center gap-4">
            {project.github && (
              <span className="flex items-center gap-1.5">
                <GitHubIcon className="w-3.5 h-3.5" />
                GitHub
              </span>
            )}
            {project.demo && (
              <span className="flex items-center gap-1.5">
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
          </div>
          <span className="group-hover:text-accent transition-colors duration-300 font-medium">
            View Details
            <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-white/5">
        <div className="w-full mx-auto px-8 lg:px-16 xl:px-24 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-purple flex items-center justify-center text-white text-xs font-bold">
              HP
            </div>
            <div>
              <h1 className="text-sm font-semibold leading-tight">
                Hiren Purabiya
              </h1>
              <p className="text-text-tertiary text-xs">AI/ML Portfolio</p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="https://linkedin.com/in/hirenpurabiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-foreground transition-colors duration-300 text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hirenpurabiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-foreground transition-colors duration-300 text-sm"
            >
              GitHub
            </a>
            <a
              href="https://huggingface.co/hirenpurabiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-foreground transition-colors duration-300 text-sm"
            >
              Hugging Face
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-text-tertiary hover:text-foreground transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-3 animate-fade-in">
            <a
              href="https://linkedin.com/in/hirenpurabiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-foreground transition-colors text-sm py-1"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hirenpurabiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-foreground transition-colors text-sm py-1"
            >
              GitHub
            </a>
            <a
              href="https://huggingface.co/hirenpurabiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-foreground transition-colors text-sm py-1"
            >
              Hugging Face
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="hero-gradient relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32">
        <div className="w-full mx-auto px-8 lg:px-16 xl:px-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight animate-fade-in-up">
            Building With <span className="gradient-text">AI</span>
          </h2>
          <p className="text-text-secondary text-lg sm:text-xl leading-relaxed mt-6 animate-fade-in-up animation-delay-200">
            A portfolio of hands-on projects exploring the latest GenAI technologies — MCPs, A2A, Agent Skills, AI Agents, LLMs, RAG, Transformers, and more.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-full border border-white/10 text-sm text-text-secondary hover:text-foreground hover:border-white/20 transition-all duration-300 animate-fade-in-up animation-delay-400"
          >
            View Projects
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="w-full mx-auto px-8 lg:px-16 xl:px-24 pb-24 lg:pb-32">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-10 tracking-tight animate-fade-in-up animation-delay-600">
          Projects
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="w-full mx-auto px-8 lg:px-16 xl:px-24 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-text-tertiary text-sm">
          <span>&copy; {new Date().getFullYear()} Hiren Purabiya</span>
          <span>Hosted on GitHub Pages</span>
        </div>
      </footer>
    </div>
  );
}
