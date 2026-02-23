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
      "MCP client-server research tool: search 2M+ papers, AI summaries, and agentic reasoning -- full MCP protocol over SSE.",
    description:
      "An MCP (Model Context Protocol) client-server app built from scratch. The backend exposes 5 MCP tools, 3 resources, and 2 prompt templates via FastMCP. The web agent connects as a real SSE client, discovers tools dynamically, and executes them through the MCP protocol. LLM-agnostic architecture -- currently Gemini free tier, swappable to any LLM.",
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
      "FastMCP",
      "MCP SDK",
      "SSE-Starlette",
      "Pydantic",
      "Vercel",
      "Render",
    ],
    aiConcepts: [
      "MCP (Model Context Protocol)",
      "Agentic AI",
      "Tool Calling",
      "Prompt Engineering",
      "SSE Streaming",
      "Multi-step Reasoning",
    ],
    llms: ["Google Gemini (LLM-agnostic)"],
    architecture: `flowchart LR
    U[User] --> FE[Next.js Frontend]
    FE -->|SSE stream| API[FastAPI Backend]
    API --> AGENT[MCP Agent]
    AGENT -->|SSE client| MCP[MCP Server - FastMCP]
    MCP --> AX[arXiv API]
    AGENT --> LLM[LLM - Gemini]
    LLM -->|pick tool| AGENT
    MCP -->|tool result| AGENT`,
    highlights: [
      "Full MCP stack -- Server (FastMCP) with 5 tools, 3 resources, 2 prompts; SSE transport",
      "Real MCP client-server -- agent connects via SSE, discovers tools dynamically, executes through MCP protocol",
      "Agentic loop -- LLM decides which tools to call, evaluates results, loops up to 10 steps",
      "Prompt engineering -- system instruction forces tool usage; MCP prompt templates discoverable by any client",
      "Production resilience -- retry with backoff on rate limits, rate limit detection, arXiv retry with exponential delay",
      "Live reasoning UI -- users see tool calls and results streamed in real time via SSE",
      "LLM-agnostic -- currently Gemini free tier; swappable to Claude, GPT, Llama, Bedrock, or any LLM",
      "Any MCP client can connect -- Claude Desktop, Cursor, custom agents all work out of the box",
      "Search arXiv's 2M+ papers with AI summaries and Explain Like I'm 10 mode",
    ],
  },
];
