import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, CircleDashed, FileSpreadsheet, ScanLine } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-shell";
import { ProjectArt } from "@/components/project-art";
import { projects } from "@/lib/projects";

const experience = [
  { role: "Back Office Executive — Internal Controls", organization: "T & M Services Consulting · supporting Kotak Mahindra Bank", date: "May 2026 — Present" },
  { role: "Auditor", organization: "G Jai Associates · contract audit for Kotak Mahindra Bank", date: "Jul 2025 — May 2026" },
  { role: "Data Analyst", organization: "Teleperformance · client: TransUnion CIBIL", date: "Jan 2022 — Dec 2023" },
];

export default function HomePage() {
  return (
    <>
      <div className="page-frame home-page">
        <section className="hero" aria-labelledby="home-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> Data <i /> Reporting <i /> Automation</div>
            <h1 id="home-title">I build reliable data workflows <em>and practical automation.</em></h1>
            <p className="hero-intro">Working across reporting, validation, reconciliation, and Python-based process improvement, with a growing focus on reusable tools.</p>
            <div className="hero-actions"><Link className="button button-dark" href="/projects">Explore projects <ArrowRight size={16} /></Link><Link className="text-link" href="/resume">View resume <ArrowUpRight size={15} /></Link></div>
            <div className="hero-footnote"><span>01 / 04</span><span>Data accuracy, made practical</span><ArrowDownRight size={15} /></div>
          </div>
          <div className="hero-visual" aria-label="Illustrative data validation workflow">
            <div className="visual-top"><span>WORKFLOW STUDY</span><span>FIG. 01</span></div>
            <div className="visual-title">From incoming files<br />to verified outputs.</div>
            <div className="flow-step"><span className="flow-icon"><FileSpreadsheet size={17} /></span><span><strong>Inspect inputs</strong><small>Structure · fields · formats</small></span><span className="flow-state">01</span></div>
            <div className="flow-connector" />
            <div className="flow-step"><span className="flow-icon green"><ScanLine size={17} /></span><span><strong>Apply checks</strong><small>Rules · completeness · edge cases</small></span><span className="flow-state">02</span></div>
            <div className="flow-connector" />
            <div className="flow-step"><span className="flow-icon blue"><Check size={17} /></span><span><strong>Review outputs</strong><small>Traceable · repeatable · documented</small></span><span className="flow-state">03</span></div>
            <div className="visual-bottom"><CircleDashed size={14} /><span>Illustrative workflow · not a live system</span></div>
            <span className="visual-index">DBF—01</span>
          </div>
        </section>

        <section className="proof-strip" aria-label="Professional areas"><span>OPERATIONS-MINDED</span><span>DATA-LED</span><span>BUILT FOR REPEATABILITY</span><span>EVIDENCE-LED</span></section>

        <section className="section-block capability-section" aria-labelledby="capability-title">
          <div className="section-heading"><div><span className="section-kicker">01 — PRACTICE</span><h2 id="capability-title">What I work on</h2></div><p>Making the careful parts of a workflow easier to repeat, inspect, and explain.</p></div>
          <div className="capability-grid">
            <article className="capability-item"><span className="capability-number">01</span><h3>Data quality &amp; reconciliation</h3><p>Checking completeness, consistency, mismatches, and edge cases in operational datasets.</p><span className="capability-line" /></article>
            <article className="capability-item"><span className="capability-number">02</span><h3>Reporting systems</h3><p>Turning recurring reporting steps into more structured, repeatable workflows.</p><span className="capability-line" /></article>
            <article className="capability-item"><span className="capability-number">03</span><h3>Python automation</h3><p>Using scripts to make data manipulation more reproducible and easier to verify.</p><span className="capability-line" /></article>
            <article className="capability-item"><span className="capability-number">04</span><h3>Practical software tools</h3><p>Exploring how a workflow can become a small, useful tool for other people.</p><span className="capability-line" /></article>
          </div>
        </section>

        <section className="section-block work-section" aria-labelledby="work-title">
          <div className="section-heading"><div><span className="section-kicker">02 — IN DEVELOPMENT</span><h2 id="work-title">Work in progress</h2></div><Link className="text-link" href="/projects">Project roadmap <ArrowRight size={15} /></Link></div>
          <div className="evidence-note"><span className="note-index">NOTE 01</span><p>One project has a public source repository; the remaining roadmap concepts are listed as proposed.</p><Link href="/projects" aria-label="Browse the project list"><ArrowUpRight size={17} /></Link></div>
          <div className="proposal-grid">
            {projects.map((project, index) => (
              <Link className={`proposal-card proposal-card-${index + 1}`} href={`/projects/${project.slug}`} key={project.slug}>
                <div className="proposal-art"><ProjectArt variant={project.visual} compact /><span className="art-label">{project.status === "Proposed" ? "CONCEPT" : "PROJECT"} / {String(index + 1).padStart(2, "0")}</span></div>
                <div className="proposal-meta"><span>{project.category}</span><span className="status-text"><i /> {project.status}</span></div>
                <h3>{project.title}</h3><p>{project.summary}</p><span className="proposal-open">{project.status === "Proposed" ? "View concept" : "View project"} <ArrowUpRight size={14} /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-block experience-preview" aria-labelledby="experience-title">
          <div className="section-heading"><div><span className="section-kicker">03 — EXPERIENCE</span><h2 id="experience-title">Grounded in the work</h2></div><Link className="text-link" href="/experience">Full experience <ArrowRight size={15} /></Link></div>
          <div className="experience-list">
            {experience.map((item, index) => <article className="experience-row" key={item.role}><span className="experience-count">0{index + 1}</span><div><h3>{item.role}</h3><p>{item.organization}</p></div><time>{item.date}</time></article>)}
          </div>
        </section>

        <section className="section-block method-section" aria-labelledby="method-title">
          <div className="section-heading"><div><span className="section-kicker">04 — APPROACH</span><h2 id="method-title">A careful way through</h2></div><p>A practical framework for turning a recurring task into something more dependable.</p></div>
          <ol className="method-steps"><li><span>01</span><strong>Understand {" "}<br />the workflow</strong></li><li><span>02</span><strong>Inspect {" "}<br />the inputs</strong></li><li><span>03</span><strong>Define {" "}<br />the checks</strong></li><li><span>04</span><strong>Automate {" "}<br />repeatable steps</strong></li><li><span>05</span><strong>Verify {" "}<br />and document</strong></li></ol>
        </section>

        <section className="contact-band" aria-labelledby="contact-title"><div><span className="section-kicker">A GOOD PLACE TO START</span><h2 id="contact-title">Have a workflow<br />worth improving?</h2></div><div className="contact-band-copy"><p>I’m open to conversations about data, reporting automation, and practical software tools.</p><Link className="button button-light" href="/contact">Get in touch <ArrowUpRight size={15} /></Link></div><span className="band-mark">DBF</span></section>
      </div>
      <SiteFooter />
    </>
  );
}