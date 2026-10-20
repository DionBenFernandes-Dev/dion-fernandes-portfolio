import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectArt } from "@/components/project-art";
import { SiteFooter } from "@/components/site-shell";
import { projects } from "@/lib/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.summary } : { title: "Project not found" };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <div className="page-frame inner-page project-detail-page">
        <Link className="back-link" href="/projects"><ArrowLeft size={15} /> All projects</Link>
        <header className="detail-heading"><div className="directory-meta"><span>{project.category}</span><span className="status-text"><i /> {project.status}</span></div><h1>{project.title}</h1><p>{project.summary}</p><div className="detail-stage">{project.stage}</div></header>
        <div className="detail-art"><ProjectArt variant={project.visual} /><span>{project.status === "Proposed" ? "Concept illustration · not a working product" : "Portfolio illustration · not an application screenshot"}</span></div>
        <div className="detail-content">
          <section><span className="section-kicker">01 — PREMISE</span><h2>Why this idea</h2><p>{project.premise}</p></section>
          <section><span className="section-kicker">02 — {project.status === "Proposed" ? "PROPOSED SCOPE" : "IMPLEMENTED FEATURES"}</span><h2>{project.status === "Proposed" ? "What it could include" : "What it includes"}</h2><ul className="detail-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
          <section><span className="section-kicker">03 — {project.status === "Proposed" ? "TOOLS TO EXPLORE" : "TECH STACK"}</span><h2>{project.status === "Proposed" ? "Potential stack" : "Built with"}</h2><div className="tag-list">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>{project.repository && <a className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer">View GitHub repository <Github size={14} /></a>}</section>
          <aside className="limitation-note"><span className="section-kicker">LIMITATION / STATUS</span><p>{project.limitation}</p></aside>
          <div className="detail-bottom-nav"><Link className="text-link" href="/projects"><ArrowLeft size={14} /> Project index</Link><Link className="text-link" href={`/projects/${nextProject.slug}`}>Next project <ArrowRight size={14} /></Link></div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}