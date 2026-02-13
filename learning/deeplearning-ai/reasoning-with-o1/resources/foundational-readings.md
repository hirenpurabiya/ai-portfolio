# Foundational Readings for o1 and Reasoning Models

Understanding the "why" behind o1's capabilities.

---

## 1. Chain-of-Thought Prompting (Google, 2022)

**Paper:** [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://openreview.net/pdf?id=_VjQlMeSB_J)

### The Simple Explanation

Imagine teaching a child math. If you ask "What's 47 + 38?" and they just guess, they'll often be wrong. But if you say "Show your work," suddenly they get it right more often.

That's exactly what this paper discovered for AI. When you show an AI a few examples of *thinking step-by-step*, it learns to think step-by-step too. And its accuracy on hard problems dramatically improves.

### Key Results

| Task | Without Thinking | With Thinking |
|------|------------------|---------------|
| Math word problems (GSM8K) | 18% | 58% |
| With larger model (PaLM 540B) | 56% | 93% |

### Executive Summary

**The Insight:** AI models already have knowledge locked inside them. The bottleneck isn't knowledge—it's *reasoning*. By prompting models to "show their work," we unlock reasoning capabilities without any retraining.

**Business Implication:** Before o1, enterprises needed expensive fine-tuning to improve AI on complex tasks. Chain-of-thought prompting showed that *how you ask* matters as much as the model itself. This shifted AI strategy from "train better models" to "prompt smarter."

**Limitation:** This only works for very large models (100B+ parameters). Smaller models write fluent but illogical reasoning steps.

---

## 2. Learning to Reason with LLMs (OpenAI, 2024)

**Source:** [OpenAI Blog - Learning to Reason with LLMs](https://openai.com/index/learning-to-reason-with-llms/)

### The Simple Explanation

Remember how the Google paper showed that AI can think step-by-step if you *show it examples*? OpenAI asked: "What if we *train* the AI to think step-by-step automatically?"

That's o1. Instead of you having to write out examples of thinking, o1 learned (through reinforcement learning) to think on its own. It doesn't just answer—it reasons first, then answers.

The cool part: the more time you give o1 to think, the better it gets. It's like giving a student more time on a test—they'll do better.

### Key Results

| Benchmark | GPT-4o | o1 |
|-----------|--------|-----|
| Competition Math (AIME) | 13% | 83% |
| Competition Coding (Codeforces) | 11th percentile | 89th percentile |
| PhD Science Questions (GPQA) | 50% | 77% |

o1 ranks among the **top 500 math students in America** on the AIME exam.

### Executive Summary

**The Insight:** o1 represents a fundamental shift in AI architecture. Previous models improved by training on more data ("pre-training compute"). o1 improves by *thinking longer at runtime* ("test-time compute"). This means you can trade compute cost for accuracy on demand.

**Business Implication:** 

1. **Quality vs. Cost Tradeoff**: For routine tasks, use fast/cheap models (GPT-4o-mini). For high-stakes decisions (legal analysis, complex coding, strategic planning), use o1 with extended thinking time.

2. **New Use Cases Unlocked**: Tasks previously requiring human experts—competition-level math, PhD-level science, complex multi-step analysis—are now accessible via API.

3. **Safety Improvements**: Because o1 "thinks out loud" internally, OpenAI can monitor its reasoning for manipulation or unsafe behavior. This is a meaningful step toward trustworthy AI.

**Limitation:** o1 is slower and more expensive than GPT-4o. It excels at *reasoning* tasks but isn't better at creative writing or casual conversation. Choose the right tool for the job.

---

## Key Concepts Glossary

| Term | Simple Definition | Why It Matters |
|------|-------------------|----------------|
| **Chain-of-Thought** | AI showing its reasoning steps before answering | Dramatically improves accuracy on hard problems |
| **Test-Time Compute** | AI spending more "thinking time" when answering | More thinking = better answers (new scaling dimension) |
| **Train-Time Compute** | Computing power used to train the model | Traditional way to improve AI |
| **Reinforcement Learning** | AI learns by trial and error with rewards | How o1 learned to reason without human examples |
| **Emergent Ability** | Capability that only appears in very large models | Chain-of-thought only works at 100B+ parameters |

---

## The Bottom Line

**For Technical Teams:** o1 is not a replacement for GPT-4o—it's a specialist. Use it for tasks requiring multi-step reasoning: complex analysis, planning, coding, and scientific problems.

**For Business Leaders:** AI just got dramatically better at the hard stuff. Tasks that required expensive human experts (legal analysis, financial modeling, research synthesis) can now be augmented or automated. But it costs more per query—so design your AI architecture to route simple tasks to cheap models and hard tasks to o1.

**For Strategy:** The models will keep getting better at reasoning. Build your AI roadmap assuming that "thinking" capabilities will continue to improve. What seems impossible today may be routine in 12 months.

---

*Last updated: February 2026*
