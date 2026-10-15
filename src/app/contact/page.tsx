import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Dion Ben Fernandes about data, reporting automation, and practical software tools.",
};

export default function ContactPage() {
  return (
    <>
      <div className="page-frame inner-page contact-page">
        <header className="page-intro"><span className="section-kicker">CONTACT / START A CONVERSATION</span><h1>Have a workflow<br /><em>worth improving?</em></h1><p>I’m open to conversations about data, reporting automation, and practical software tools.</p></header>
        <section className="contact-options"><a className="contact-option" href="mailto:dionbf.dev@gmail.com"><span className="contact-option-icon"><Mail size={19} /></span><span><small>EMAIL</small><strong>dionbf.dev@gmail.com</strong><em>For a direct note about a role, project, or workflow.</em></span><ArrowUpRight className="contact-option-arrow" size={18} /></a><div className="contact-option unavailable"><span className="contact-option-icon"><span>in</span></span><span><small>LINKEDIN</small><strong>Profile link not provided</strong><em>A profile URL will appear here once confirmed.</em></span><span className="contact-option-state">NOT LINKED</span></div><div className="contact-option unavailable"><span className="contact-option-icon"><span>GH</span></span><span><small>GITHUB</small><strong>Profile link not provided</strong><em>Repository links will appear alongside published work.</em></span><span className="contact-option-state">NOT LINKED</span></div></section>
        <aside className="contact-privacy"><span className="section-kicker">A NOTE ON PRIVACY</span><p>This page does not collect or store form submissions. Email opens in your mail application; please avoid sending confidential employer or client information.</p></aside>
        <div className="contact-signoff"><span>Thank you for stopping by.</span><Link href="/projects">Browse the project roadmap <ArrowUpRight size={14} /></Link></div>
      </div>
      <SiteFooter />
    </>
  );
}