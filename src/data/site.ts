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
};

// TODO(Pass 2): replace with 2–3 real projects and final copy.
export const projects: Project[] = [
  {
    title: "Placeholder Project One",
    problem:
      "A mid-size operations team spent hours each week manually reconciling data across disconnected systems, creating delays and error-prone handoffs.",
    solution:
      "Designed an AI-enabled workflow that extracts, validates, and routes the data automatically, with a human review step for exceptions only.",
    technology: ["Workflow automation", "LLM extraction", "Internal APIs"],
    contribution:
      "Led discovery, mapped the current-state process, designed the target workflow, built the integration, and ran the adoption rollout with the team.",
    outcome:
      "Placeholder outcome — e.g. reduced cycle time from days to hours and eliminated a recurring category of manual errors.",
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
