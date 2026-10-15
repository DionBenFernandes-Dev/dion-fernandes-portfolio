import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About",
  description: "The working principles and professional through-line behind Dion Ben Fernandes’s data and automation portfolio.",
};

const principles = [
  ["01", "Clarity before spectacle", "Make the purpose and behavior easy to understand."],
  ["02", "Evidence before claims", "Show what exists, distinguish what is planned, and be precise about limitations."],
  ["03", "Systems over tool lists", "Choose tools to serve a reliable workflow, not the other way around."],
  ["04", "Useful by design", "Make careful work practical for the person who has to do it again."],
];

export default function AboutPage() {
  return (
    <>
      <div className="page-frame inner-page about-page">
        <header className="page-intro"><span className="section-kicker">ABOUT / THE THROUGH-LINE</span><h1>Accuracy is a form<br />of <em>care.</em></h1><p>My work has centred on making operational data more accurate, traceable, and useful.</p></header>
        <section className="about-lead"><span className="section-kicker">A LITTLE CONTEXT</span><div><p>Across data processing, audit support, and internal-control reporting, I’ve worked with structured data, validation, reporting tools, and repetitive workflows.</p><p>I’m using that foundation to build more reusable automation and software tools. The public project ideas on this site are proposed personal demonstrations, separate from any employer system or data.</p></div></section>
        <section className="about-principles"><div className="section-heading"><div><span className="section-kicker">HOW I LIKE TO WORK</span><h2>Working principles</h2></div></div><div className="principle-list">{principles.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
        <section className="about-skills"><div><span className="section-kicker">TOOLS &amp; PRACTICE</span><h2>Built from experience,<br /><em>extended with intent.</em></h2></div><div className="skill-groups"><div><h3>Core practice</h3><p>Excel · Power Query · Python · data validation · reconciliation · reporting · file processing · operational controls</p></div><div><h3>Supporting tools</h3><p>VBA · SQL / MySQL · Tableau · Git · Linux / Unix · Windows</p></div><div><h3>Learning</h3><p>Tableau Certified Data Analyst training, Ethereum and Solidity coursework, and a Graphic Design Masterclass. The training is not presented as a completed certification.</p></div></div></section>
        <section className="about-next"><span className="section-kicker">NEXT</span><p>Interested in the details behind the experience?</p><Link className="text-link" href="/experience">Explore experience <ArrowUpRight size={14} /></Link></section>
      </div>
      <SiteFooter />
    </>
  );
}