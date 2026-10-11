import type { MetadataRoute } from "next";
import { SEO_ORIGIN } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/work", "/about", "/services", "/contact"].map((path) => ({
    url: `${SEO_ORIGIN}${path === "/" ? "" : path}`,
  }));
}
