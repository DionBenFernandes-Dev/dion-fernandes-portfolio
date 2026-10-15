import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-shell";

export default function NotFound() {
  return (
    <>
      <div className="page-frame not-found-page"><span className="section-kicker">404 / NOT FOUND</span><h1>This page isn’t<br /><em>in the index.</em></h1><p>The address may have changed, or the page may not exist yet.</p><div className="hero-actions"><Link className="button button-dark" href="/projects"><ArrowLeft size={15} /> Browse projects</Link><Link className="text-link" href="/">Back home <ArrowUpRight size={14} /></Link></div></div>
      <SiteFooter />
    </>
  );
}