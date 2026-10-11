import type { Metadata } from "next";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Revonis, our practical approach to software, and the values behind our work with growing teams.",
  path: "/about",
});

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
