import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectArt } from "@/components/project-art";
import { SiteFooter } from "@/components/site-shell";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Proposed personal demonstrations and project concepts focused on data quality, automation, and reporting.",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="page-frame inner-page">
        <header className="page-intro"><span className="section-kicker">PROJECT INDEX / 2026</span><h1>Useful work,<br /><em>made inspectable.</em></h1><p>A collection of tools and experiments focused on reliable data, repeatable workflows, and useful software.</p></header>
        <div className="directory-notice"><span className="status-text"><i /> Evidence status</span><p>No public project repository or demo has been supplied. The entries below are roadmap concepts and are labeled <strong>Proposed</strong>.</p></div>
        <section className="directory-list" aria-label="Proposed project concepts">
          {projects.map((project, index) => (
            <article className="directory-project" key={project.slug}>
              <Link className="directory-art-link" href={`/projects/${project.slug}`} aria-label={`Open ${project.title} concept`}><ProjectArt variant={project.visual} /><span className="art-open"><ArrowUpRight size={17} /></span></Link>
              <div className="directory-project-info"><div className="directory-meta"><span>{String(index + 1).padStart(2, "0")} / {project.category}</span><span className="status-text"><i /> {project.status}</span></div><h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2><p>{project.summary}</p><div className="tag-list">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><Link className="text-link" href={`/projects/${project.slug}`}>Explore the concept <ArrowUpRight size={14} /></Link></div>
            </article>
          ))}
        </section>
        <div className="page-endnote"><span className="section-kicker">PUBLISHING PRINCIPLE</span><p>Projects move out of the roadmap only when there is a working artifact, a clear README, and enough evidence to describe what was actually built.</p></div>
      </div>
      <SiteFooter />
    </>
  );
}