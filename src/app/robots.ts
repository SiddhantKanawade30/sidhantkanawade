import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://siddhantkanawade.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private", "/api"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
