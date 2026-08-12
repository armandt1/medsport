import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/planes", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/kinesiologia-temuco", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/rehabilitacion-deportiva-temuco", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/entrenamiento-personalizado-temuco", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/entrenamiento-deportivo-temuco", priority: 0.9, changeFrequency: "monthly" as const }
  ];

  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority
  }));
}
