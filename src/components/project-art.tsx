import { ArrowDown, ArrowRight, Check, FileSpreadsheet, GitCompareArrows, ScanLine } from "lucide-react";

type ProjectArtProps = {
  variant: "workbench" | "formatter" | "pipeline";
  compact?: boolean;
};

export function ProjectArt({ variant, compact = false }: ProjectArtProps) {
  if (variant === "formatter") {
    return (
      <div className={`project-art formatter-art${compact ? " compact" : ""}`} role="img" aria-label="Illustrative report validation concept">
        <div className="art-file"><FileSpreadsheet size={19} strokeWidth={1.5} /><span>sample_report.xlsx</span><span className="art-file-state">synthetic</span></div>
        <div className="art-rule-list">
          <div><Check size={15} /><span>Required columns</span><b>Pass</b></div>
          <div><ScanLine size={15} /><span>Date format</span><b>Review</b></div>
          <div><ScanLine size={15} /><span>Record identifier</span><b>Review</b></div>
        </div>
        <div className="art-terminal-line"><span>›</span> validate sample_report.xlsx</div>
      </div>
    );
  }

  if (variant === "pipeline") {
    return (
      <div className={`project-art pipeline-art${compact ? " compact" : ""}`} role="img" aria-label="Illustrative reporting pipeline concept">
        <div className="pipeline-sources"><div><FileSpreadsheet size={16} /> source A</div><div><FileSpreadsheet size={16} /> source B</div></div>
        <div className="pipeline-arrow"><ArrowDown size={17} /></div>
        <div className="pipeline-transform"><GitCompareArrows size={17} /><span>transform &amp; validate</span></div>
        <div className="pipeline-arrow"><ArrowDown size={17} /></div>
        <div className="pipeline-output"><FileSpreadsheet size={16} /><span>report.xlsx</span><i>sample</i></div>
      </div>
    );
  }

  return (
    <div className={`project-art workbench-art${compact ? " compact" : ""}`} role="img" aria-label="Illustrative file reconciliation concept">
      <div className="workbench-topline"><span>FILE COMPARISON</span><span>CONCEPT VIEW</span></div>
      <div className="workbench-files"><div><FileSpreadsheet size={18} /><span>source_a.csv</span><small>synthetic</small></div><div><FileSpreadsheet size={18} /><span>source_b.csv</span><small>synthetic</small></div></div>
      <div className="compare-link"><span /><ArrowRight size={16} /><span /></div>
      <div className="exception-row"><i className="exception-mark" /><span>record_024</span><b>value mismatch</b><span className="exception-review">review</span></div>
    </div>
  );
}