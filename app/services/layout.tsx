import type { Metadata } from "next";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Software Development Services",
  description:
    "Explore Revonis services for business websites, custom tools, workflow automation, practical AI features, and growing systems.",
  path: "/services",
});

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
