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
    id: "arxiv-paper-finder",
    number: "01",
    title: "ArXiv Paper Finder",
    tagline:
      "AI-powered chatbot that searches and summarizes research papers from arXiv.",
    description:
      "Ask natural language questions and instantly discover relevant arXiv papers with AI-generated summaries, follow-up conversation, and filtering by date, category, and relevance.",
    status: "in-progress",
    github: "https://github.com/hirenpurabiya/arxiv-paper-finder",
    demo: undefined,
    techStack: ["Python 3.11+", "Gradio", "Cloudflare Pages", "Cloudflare Workers"],
    aiConcepts: [
      "Retrieval-Augmented Generation (RAG)",
      "Tool Use / Function Calling",
      "Prompt Engineering",
      "API Orchestration",
    ],
    llms: ["OpenAI GPT-4o"],
    architecture: `flowchart LR
    U[User Query] --> CB[Chatbot UI]
    CB --> API[API Layer]
    API --> AX[arXiv Search API]
    AX --> PROC[Result Processing]
    PROC --> LLM[LLM - Summarize & Answer]
    LLM --> CB`,
    highlights: [
      "Natural language paper search across arXiv",
      "AI-generated summaries of paper abstracts",
      "Multi-turn conversation for follow-up questions",
      "Filter by date, category, and relevance",
    ],
  },
];
