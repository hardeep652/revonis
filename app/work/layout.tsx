import type { Metadata } from "next";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Work",
  description:
    "See selected Revonis projects and how we build websites and software around real business needs.",
  path: "/work",
});

export default function WorkLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
