import type { Metadata } from "next";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { ProductsSection } from "@/components/layout/sections/products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Primenet Systems",
  description:
    "Primenet Systems builds custom software, web platforms, and mobile applications for businesses in Ghana and beyond.",
  keywords: [...siteConfig.keywords],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Primenet Systems",
    description:
      "A software company focused on practical digital solutions, modern user experiences, and reliable delivery.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Primenet Systems websites, mobile apps, and custom software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Primenet Systems",
    description:
      "Custom software, web development, mobile apps, and digital product support for growing businesses.",
    images: [siteConfig.ogImage],
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/primenet-icon.png`,
    description: siteConfig.description,
    telephone: "+233546383716",
    areaServed: "Ghana",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+233546383716",
      contactType: "customer service",
      areaServed: "GH",
      availableLanguage: ["English"],
    },
    sameAs: [siteConfig.url],
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "Custom Software Development",
      "UI/UX Design",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <ProductsSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
