# ArXiv Paper Finder

> AI-powered chatbot that searches and summarizes research papers from arXiv.

| | |
|---|---|
| **GitHub** | [github.com/hirenpurabiya/arxiv-paper-finder](https://github.com/hirenpurabiya/arxiv-paper-finder) |
| **Live Demo** | [arxiv-paper-finder.hirenpurabiya.com](https://arxiv-paper-finder.hirenpurabiya.com) *(coming soon)* |
| **Status** | In Progress |

## Tech Stack

- **LLM:** OpenAI GPT-4o
- **Search:** arXiv API
- **Concepts:** RAG, tool use, prompt engineering
- **Hosting:** Cloudflare Pages + Workers

## Architecture

```mermaid
flowchart LR
    U[User Query] --> CB[Chatbot UI]
    CB --> API[API Layer]
    API --> AX[arXiv Search API]
    AX --> PROC[Result Processing]
    PROC --> LLM[LLM - Summarize & Answer]
    LLM --> CB
```

## What It Does

Ask natural language questions and instantly discover relevant arXiv papers with AI-generated summaries, follow-up conversation, and filtering by date, category, and relevance.

---

*Full project: [github.com/hirenpurabiya/arxiv-paper-finder](https://github.com/hirenpurabiya/arxiv-paper-finder)*
