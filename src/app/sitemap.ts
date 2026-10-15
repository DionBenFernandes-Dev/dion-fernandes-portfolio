import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/projects", "/experience", "/resume", "/contact"];
  return [
    ...pages.map((page) => ({ url: `${siteUrl}${page}`, lastModified: new Date() })),
    ...projects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, lastModified: new Date() })),
  ];
}