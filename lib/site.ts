export const siteConfig = {
  name: "Primenet Systems",
  shortName: "Primenet",
  description:
    "Primenet Systems is a software company in Ghana building websites, mobile apps, and custom business software for modern organizations.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.primenetsystem.com",
  ogImage: "/primenet.png",
  creator: "Primenet Systems",
  keywords: [
    "Primenet Systems",
    "software company in Ghana",
    "web development Ghana",
    "mobile app development Ghana",
    "custom software development",
    "business software solutions",
    "UI UX design Ghana",
    "software consulting Ghana",
  ],
} as const;
