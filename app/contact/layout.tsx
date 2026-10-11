import type { Metadata } from "next";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Revonis to discuss a website, software, or automation project for your business.",
  path: "/contact",
});

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
