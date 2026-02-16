export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  status: "live" | "in-progress" | "planned";
  github: string;
  demo?: string;
  techStack: string[];
  aiConcepts: string[];
  llms: string[];
  architecture: string; // mermaid diagram code
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "arxiv-scholar-ai",
    number: "01",
    title: "ArXiv Scholar AI",
    tagline:
      "AI-powered research paper discovery and summarization with a modern full-stack web app.",
    description:
      "Search arXiv's database of 2M+ academic papers on any topic and get concise AI-powered summaries using Claude. Features a beautiful Next.js frontend, a Python FastAPI backend, and real-time paper search with direct PDF links.",
    status: "live",
    github: "https://github.com/hirenpurabiya/arxiv-scholar-ai",
    demo: "https://arxiv-scholar-ai.vercel.app",
    techStack: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "Pydantic",
      "Vercel",
      "Render",
    ],
    aiConcepts: [
      "AI Summarization",
      "Tool Use / Function Calling",
      "API Orchestration",
      "Prompt Engineering",
    ],
    llms: ["Anthropic Claude"],
    architecture: `flowchart LR
    U[User] --> FE[Next.js Frontend]
    FE --> API[FastAPI Backend]
    API --> AX[arXiv API]
    AX --> PROC[Result Processing]
    API --> CL[Claude API]
    CL --> SUM[AI Summary]
    PROC --> FE
    SUM --> FE`,
    highlights: [
      "Search arXiv's 2M+ papers by any topic with smart relevance ranking",
      "AI-powered summaries using Claude -- concise, readable explanations of complex research",
      "Direct PDF download links for every paper",
      "Topic-based organization -- articles saved and grouped for easy revisiting",
      "Full REST API backend with interactive Swagger documentation",
      "Modern, responsive UI built with Next.js and Tailwind CSS",
      "Learning journal documenting CS/AI/ML concepts explained simply",
    ],
  },
];
