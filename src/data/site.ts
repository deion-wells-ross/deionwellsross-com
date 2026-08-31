/*
  Central content + config store.
  PASS 1: placeholder copy. PASS 2: final positioning language, bio, projects,
  real contact URLs, résumé filename.
*/

export const site = {
  name: "Deion Wells Ross",
  domain: "deionwellsross.com",
  url: "https://deionwellsross.com",
  // One-line positioning used in <meta> and social share.
  tagline:
    "I help organizations turn operational problems into AI-enabled workflows that change how work gets done.",
  description:
    "Portfolio of Deion Wells Ross — translating business problems into AI-enabled solutions across implementation leadership, forward-deployed engineering, consulting, and adoption.",
};

// TODO(Pass 2): confirm real URLs + résumé file.
export const contact = {
  email: "hello@deionwellsross.com",
  linkedin: "https://www.linkedin.com/in/deionwellsross/",
  github: "https://github.com/deion-wells-ross",
  resume: "/resume.pdf",
};

export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  title: string;
  problem: string;
  solution: string;
  technology: string[];
  contribution: string;
  outcome: string;
  links?: { label: string; href: string }[];
};

// TODO(Pass 2): replace with 2–3 real projects and final copy.
export const projects: Project[] = [
  {
    title: "AURI Finance",
    problem:
      "Finance teams rely on manual workflows, deterministic accounting systems, human judgment, and financial controls to run processes like month-end close — simply adding an LLM doesn't make that trustworthy. The real question: how can specialized AI agents do real financial work while deterministic systems keep the math correct, independent controls catch agent mistakes, and humans keep authority over consequential decisions?",
    solution:
      "I built AURI Finance, an agentic finance department for a fictional B2B SaaS company. Seven Claude-powered agents — bookkeeping, accounts payable, accounts receivable, payroll, controller, FP&A, and CFO — handle the judgment calls, using scoped tools to investigate exceptions and escalate uncertainty instead of guessing. Two deterministic (non-AI) components, an orchestrator and a dashboard publisher, calculate every number and sequence the workflow. A close moves through the specialist agents, an independent control re-check, FP&A/CFO analysis, and a human approval gate before the period closes — so no agent's self-report is ever taken at face value.",
    technology: [
      "Agentic AI",
      "Multi-Agent Systems",
      "Human-in-the-Loop",
      "Claude API",
    ],
    contribution:
      "I defined the problem and the bar this system had to clear — that agents do real financial work rather than just demonstrate intelligence — and directed the architecture: specialized agents, deterministic services, scoped permissions, independent controls, and human approval gates. I used Claude and Claude Code as my agentic development environment to build, test, debug, and document the system end to end; this project is itself a demonstration of AI-native development.",
    outcome:
      "Tested end to end against a fresh synthetic database the agents had never seen: 6 of 6 seeded anomalies found, 55/55 tests passing, $0.00 trial balance discrepancy, a 202-row audit trail, and a required human approval before close — for about $7.10 in total Claude API spend. Real agent mistakes surfaced during live testing; the independent controls caught them before they could complete a close.",
    links: [
      {
        label: "View Case Study",
        href: "https://deion-wells-ross.github.io/auri-finance/",
      },
      {
        label: "View GitHub",
        href: "https://github.com/deion-wells-ross/auri-finance",
      },
    ],
  },
  {
    title: "Placeholder Project Two",
    problem:
      "Customer-facing staff lacked fast access to institutional knowledge, so answers were inconsistent and onboarding was slow.",
    solution:
      "Built a retrieval-backed assistant grounded in vetted internal documentation, embedded directly in the tools the team already used.",
    technology: ["RAG", "Vector search", "Embedded UI integration"],
    contribution:
      "Defined the use case and success metrics, curated the knowledge base, directed the build, and coached the team through adoption.",
    outcome:
      "Placeholder outcome — e.g. cut average research time per inquiry and improved answer consistency across the team.",
  },
  {
    title: "Placeholder Project Three",
    problem:
      "Leadership wanted to adopt AI but had no framework for deciding where it would actually create value.",
    solution:
      "Ran a structured opportunity assessment, scored candidate workflows on impact and feasibility, and delivered a sequenced roadmap.",
    technology: ["Opportunity assessment", "Process mapping", "Roadmapping"],
    contribution:
      "Facilitated stakeholder interviews, built the scoring model, and produced the prioritized implementation plan.",
    outcome:
      "Placeholder outcome — e.g. a prioritized portfolio of initiatives with a clear first project underway within the quarter.",
  },
];
