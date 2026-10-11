import type { Metadata } from "next";

export const SEO_ORIGIN = "https://www.revonis.in";
export const SOCIAL_IMAGE = "/revonis-logo.png";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SEO_ORIGIN}${path}`;
  const socialTitle = `${title} | Revonis`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      siteName: "Revonis",
      title: socialTitle,
      description,
      locale: "en_IN",
      images: [
        {
          url: SOCIAL_IMAGE,
          width: 1254,
          height: 218,
          alt: "Revonis",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}
