import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Experience",
  description: "Employment, education, recognition, and tools in Dion Ben Fernandes’s professional background.",
};

const roles = [
  { title: "Back Office Executive — Internal Controls", employer: "T & M Services Consulting Pvt. Ltd.", context: "Supporting Kotak Mahindra Bank’s Internal Control team", dates: "11 May 2026 — Present", summary: "Working in an internal-controls environment where careful data handling, reporting, and repeatable operational processes matter." },
  { title: "Auditor", employer: "G Jai Associates", context: "Contract auditor for Kotak Mahindra Bank", dates: "7 Jul 2025 — 10 May 2026", summary: "Supported audit work with a focus on verification, documentation, discrepancy investigation, and control-minded problem solving." },
  { title: "Management Trainee", employer: "Messe Duesseldorf India Pvt. Ltd.", context: "", dates: "12 Aug — 11 Dec 2024", summary: "Built experience in coordination and stakeholder communication." },
  { title: "Data Analyst", employer: "Teleperformance, Thane", context: "Client: TransUnion CIBIL", dates: "3 Jan 2022 — 23 Dec 2023", summary: "Worked with data processing, Excel-based cleaning, Abinitio job monitoring, Linux and Windows file handling, trackers, and Python automation." },
];

export default function ExperiencePage() {
  return (
    <>
      <div className="page-frame inner-page experience-page">
        <header className="page-intro"><span className="section-kicker">EXPERIENCE / SELECTED HISTORY</span><h1>Reliable work<br />starts with <em>the details.</em></h1><p>Experience across data processing, audit support, internal controls, and coordination.</p></header>
        <section className="timeline" aria-label="Employment history"><h2 className="section-kicker">EMPLOYMENT</h2>{roles.map((role, index) => <article className="timeline-item" key={role.title}><span className="timeline-mark">0{index + 1}</span><div className="timeline-main"><div className="timeline-title"><div><h3>{role.title}</h3><p className="timeline-employer">{role.employer}</p>{role.context && <p className="timeline-context">{role.context}</p>}</div><time>{role.dates}</time></div><p className="timeline-summary">{role.summary}</p></div></article>)}</section>
        <section className="credentials-grid"><article><span className="section-kicker">EDUCATION</span><h2>B.Sc. Computer Science</h2><p>RD and SH National College and SWA Science College, University of Mumbai</p><time>2018 — 2021</time></article><article><span className="section-kicker">RECOGNITION</span><h2>Certificate of Appreciation</h2><p>TransUnion CIBIL</p><span className="credential-note">Listed as stated; no reason or impact inferred.</span></article></section>
        <section className="skills-index"><div><span className="section-kicker">WORKING TOOLKIT</span><h2>Tools in context</h2></div><div className="skills-index-content"><div><span>DATA &amp; REPORTING</span><p>Excel · Power Query · Tableau · SQL / MySQL</p></div><div><span>AUTOMATION &amp; FILES</span><p>Python · VBA · file processing · validation</p></div><div><span>ENVIRONMENTS</span><p>Linux / Unix · Windows · Git · Microsoft Office</p></div></div></section>
        <aside className="privacy-note"><span className="section-kicker">CONFIDENTIALITY</span><p>Descriptions are generalized. No employer screenshots, internal processes, client data, or restricted materials are published here.</p></aside>
        <div className="resume-nudge"><p>Need a concise, print-friendly overview?</p><Link className="text-link" href="/resume">View the HTML resume <ArrowUpRight size={14} /></Link></div>
      </div>
      <SiteFooter />
    </>
  );
}