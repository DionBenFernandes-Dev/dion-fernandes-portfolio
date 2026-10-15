"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const mainRef = useRef<HTMLElement | null>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    setMenuOpen(false);
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      requestAnimationFrame(() => mainRef.current?.focus({ preventScroll: true }));
    }
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const links = navigation.map(({ label, href }) => {
    const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
    return (
      <Link key={href} className={`nav-link${active ? " active" : ""}`} href={href} aria-current={active ? "page" : undefined} onClick={() => setMenuOpen(false)}>
        <span>{label}</span><span className="nav-index">{String(navigation.findIndex((item) => item.href === href) + 1).padStart(2, "0")}</span>
      </Link>
    );
  });

  return (
    <>
      <header className="mobile-header">
        <Link className="mobile-brand" href="/" aria-label="Dion Ben Fernandes home"><span className="brand-mark">DBF</span><span>Dion Ben Fernandes</span></Link>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>
      <aside className="sidebar" aria-label="Site sidebar">
        <Link className="brand" href="/" aria-label="Dion Ben Fernandes home">
          <span className="brand-mark">DBF</span><span className="brand-copy"><strong>Dion Ben<br />Fernandes</strong><small>Data &amp; automation</small></span>
        </Link>
        <nav id="primary-navigation" className={`primary-navigation${menuOpen ? " open" : ""}`} aria-label="Primary navigation">
          <span className="nav-caption">Navigate</span>
          {links}
          <div className="sidebar-note"><span className="status-dot" /> Open to thoughtful conversations</div>
          <a className="sidebar-email" href="mailto:dionbf.dev@gmail.com">Email me <ArrowUpRight size={14} /></a>
        </nav>
        <div className="sidebar-bottom"><span>PORTFOLIO</span><span>2026</span></div>
      </aside>
      <main id="main-content" ref={mainRef} className="main-content" tabIndex={-1}>{children}</main>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Dion Ben Fernandes</span>
      <span>Built around clarity, evidence, and useful work.</span>
      <Link href="/contact">Get in touch <ArrowUpRight size={13} /></Link>
    </footer>
  );
}