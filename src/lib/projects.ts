export type ProjectStatus = "MVP" | "Proposed";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  status: ProjectStatus;
  stage: string;
  repository?: string;
  premise: string;
  features: string[];
  tools: string[];
  limitation: string;
  visual: "workbench" | "formatter" | "pipeline";
};

export const projects: PortfolioProject[] = [
  {
    slug: "data-quality-workbench",
    title: "Data Quality & Reconciliation Workbench",
    category: "Data & reporting",
    summary: "A local-first app for comparing CSV and Excel datasets, reviewing exceptions, and exporting reports.",
    status: "MVP",
    stage: "Runnable MVP · v0.1.0",
    repository: "https://github.com/DionBenFernandes-Dev/data-quality-reconciliation-workbench",
    premise: "The workbench compares two datasets using explicit matching and normalization rules, then presents exceptions for review. It is designed to surface differences without silently cleaning or overwriting source files.",
    features: ["Upload and inspect CSV, XLSX, and XLSM files", "Match on single or composite keys and compare selected fields", "Review searchable exceptions and export CSV or XLSX reports", "Save rule profiles and inspect run history and audit events"],
    tools: ["Python", "pandas", "FastAPI", "SQLite", "React", "Vite"],
    limitation: "This is a local-development MVP, not a production-approved release. It has no authentication or multi-user controls; use synthetic or non-sensitive data and do not expose it to a network.",
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
    features: ["Documented input and output formats", "Validation for date and identifier edge cases", "Readable logs and synthetic example files"],
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
    features: ["Configurable input transformations", "Multi-sheet output generation", "Logging and recoverable error handling"],
    tools: ["Python", "pandas", "openpyxl"],
    limitation: "This project has no working demo or measured results. Any future examples will use generated data and document their synthetic nature.",
    visual: "pipeline",
  },
];