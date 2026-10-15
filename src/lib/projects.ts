export type ProjectStatus = "Proposed";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  status: ProjectStatus;
  stage: string;
  premise: string;
  plannedFeatures: string[];
  tools: string[];
  limitation: string;
  visual: "workbench" | "formatter" | "pipeline";
};

export const projects: PortfolioProject[] = [
  {
    slug: "data-quality-workbench",
    title: "Data Quality & Reconciliation Workbench",
    category: "Data & reporting",
    summary: "A proposed workspace for comparing files and reviewing data exceptions.",
    status: "Proposed",
    stage: "Roadmap · flagship concept",
    premise: "Recurring data checks are easier to trust when the rules are explicit and every exception can be inspected. This concept explores a small, local-first workbench for comparing two datasets with synthetic sample data.",
    plannedFeatures: ["Configurable schema and completeness checks", "Key-based comparison between two files", "A row-level exception report with review states"],
    tools: ["Python", "pandas", "React"],
    limitation: "This is a proposed personal demonstration, not a completed tool. No employer data, screenshots, or systems are involved.",
    visual: "workbench",
  },
  {
    slug: "report-formatter-validator",
    title: "Report Formatter & Validator CLI",
    category: "Developer tools",
    summary: "A proposed command-line utility for checking and formatting recurring report files.",
    status: "Proposed",
    stage: "Roadmap · proof project",
    premise: "Small file checks can catch inconsistent dates, identifiers, and required fields before a report moves downstream. This concept keeps those rules repeatable in a compact command-line tool.",
    plannedFeatures: ["Documented input and output formats", "Validation for date and identifier edge cases", "Readable logs and synthetic example files"],
    tools: ["Python", "Typer", "pytest"],
    limitation: "No CLI, tests, sample files, or repository have been published yet. The project remains proposed until those artifacts exist.",
    visual: "formatter",
  },
  {
    slug: "multi-source-reporting-pipeline",
    title: "Multi-Source Reporting Pipeline",
    category: "Automation",
    summary: "A proposed, configurable pipeline for transforming sample inputs into a reproducible report.",
    status: "Proposed",
    stage: "Roadmap · supporting concept",
    premise: "A reporting workflow that draws from several inputs needs clear transformations, predictable outputs, and useful failure messages. This concept would demonstrate that flow with entirely synthetic data.",
    plannedFeatures: ["Configurable input transformations", "Multi-sheet output generation", "Logging and recoverable error handling"],
    tools: ["Python", "pandas", "openpyxl"],
    limitation: "This project has no working demo or measured results. Any future examples will use generated data and document their synthetic nature.",
    visual: "pipeline",
  },
];