import type { MetadataRoute } from "next";
import { SEO_ORIGIN } from "./seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SEO_ORIGIN}/sitemap.xml`,
  };
}
