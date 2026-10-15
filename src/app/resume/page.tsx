import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { SiteFooter } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Resume",
  description: "An accessible HTML resume for Dion Ben Fernandes, focused on data processing, reporting, reconciliation, and automation.",
};

export default function ResumePage() {
  return (
    <>
      <div className="page-frame inner-page resume-page">
        <header className="resume-top"><div><span className="section-kicker">RESUME / HTML EDITION</span><h1>Dion Ben Fernandes</h1><p>Data processing · Reporting · Reconciliation · Automation</p></div><PrintButton /></header>
        <div className="resume-columns"><main>
          <section className="resume-section"><h2>Profile</h2><p>Data and reporting professional with experience in data processing, reconciliation, validation, and reporting across credit-bureau and banking environments. Uses Excel, Power Query, and Python to make recurring work more systematic, with a growing focus on reusable software tools.</p></section>
          <section className="resume-section"><h2>Experience</h2><article><div className="resume-role"><h3>Back Office Executive — Internal Controls</h3><time>May 2026 — Present</time></div><p className="resume-company">T &amp; M Services Consulting Pvt. Ltd. · supporting Kotak Mahindra Bank</p><p>Supporting the bank’s Internal Control team. Work is described at a general level to protect employer and client information.</p></article><article><div className="resume-role"><h3>Auditor</h3><time>Jul 2025 — May 2026</time></div><p className="resume-company">G Jai Associates · contract auditor for Kotak Mahindra Bank</p><p>Audit support involving verification, documentation, discrepancy investigation, and control-minded problem solving.</p></article><article><div className="resume-role"><h3>Management Trainee</h3><time>Aug — Dec 2024</time></div><p className="resume-company">Messe Duesseldorf India Pvt. Ltd.</p><p>Coordination and stakeholder communication.</p></article><article><div className="resume-role"><h3>Data Analyst</h3><time>Jan 2022 — Dec 2023</time></div><p className="resume-company">Teleperformance, Thane · client: TransUnion CIBIL</p><p>Data processing, Excel data cleaning, Abinitio job monitoring, Linux and Windows file handling, trackers, and Python automation.</p></article></section>
          <section className="resume-section"><h2>Education &amp; recognition</h2><article><div className="resume-role"><h3>B.Sc. Computer Science</h3><time>2018 — 2021</time></div><p className="resume-company">RD and SH National College and SWA Science College, University of Mumbai</p></article><article><h3>Certificate of Appreciation</h3><p className="resume-company">TransUnion CIBIL</p></article></section>
        </main><aside className="resume-aside"><section><h2>Core</h2><p>Excel, Power Query, Python, data validation, reconciliation, reporting, file processing, operational controls</p></section><section><h2>Also used</h2><p>VBA, SQL / MySQL, Tableau, Git, Linux / Unix, Windows, Microsoft Office</p></section><section><h2>Learning</h2><p>Tableau Certified Data Analyst training (ongoing), Ethereum and Solidity coursework, Graphic Design Masterclass</p><span>Coursework is not presented as completed certification.</span></section></aside></div>
        <p className="resume-footnote">An accessible HTML resume is provided here. A downloadable PDF has not been supplied for this site.</p>
        <div className="resume-bottom"><Link href="/experience">Full experience details</Link><Link href="/contact">Contact</Link></div>
      </div>
      <SiteFooter />
    </>
  );
}