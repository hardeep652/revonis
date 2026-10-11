import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SEO_ORIGIN } from "./seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_ORIGIN),
  applicationName: "Revonis",
  title: {
    default: "Revonis — Software Development & Digital Solutions",
    template: "%s | Revonis",
  },
  description:
    "Revonis designs, builds, and maintains websites, custom software, and automations for growing businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SEO_ORIGIN,
    siteName: "Revonis",
    title: "Revonis — Software Development & Digital Solutions",
    description:
      "Revonis designs, builds, and maintains websites, custom software, and automations for growing businesses.",
    locale: "en_IN",
    images: [
      {
        url: "/revonis-logo.png",
        width: 1254,
        height: 218,
        alt: "Revonis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revonis — Software Development & Digital Solutions",
    description:
      "Revonis designs, builds, and maintains websites, custom software, and automations for growing businesses.",
    images: ["/revonis-logo.png"],
  },
  icons: {
    icon: "/R_Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SEO_ORIGIN}/#organization`,
      name: "Revonis",
      url: SEO_ORIGIN,
      logo: {
        "@type": "ImageObject",
        url: `${SEO_ORIGIN}/R_Logo.png`,
        width: 1254,
        height: 1254,
      },
      email: "hello@revonis.com",
    },
    {
      "@type": "WebSite",
      "@id": `${SEO_ORIGIN}/#website`,
      name: "Revonis",
      url: SEO_ORIGIN,
      publisher: { "@id": `${SEO_ORIGIN}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};
