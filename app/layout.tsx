import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Primenet Systems | Software Company in Ghana",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Primenet Systems | Software Company in Ghana",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Primenet Systems software services preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Primenet Systems | Software Company in Ghana",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/primenet-favicon.ico?v=2", sizes: "any" },
      {
        url: "/primenet-icon.png?v=2",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/primenet-apple-icon.png?v=2",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/primenet-favicon.ico?v=2"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/site.css?v=1" />
      </head>
      <body className={cn("min-h-screen bg-background text-foreground")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
