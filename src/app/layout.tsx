import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dion Ben Fernandes — Data & Automation",
    template: "%s — Dion Ben Fernandes",
  },
  description: "A portfolio focused on data quality, reporting, reconciliation, and practical automation.",
  openGraph: {
    title: "Dion Ben Fernandes — Data & Automation",
    description: "Reliable data workflows and practical automation.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><a className="skip-link" href="#main-content">Skip to content</a><SiteShell>{children}</SiteShell></body>
    </html>
  );
}