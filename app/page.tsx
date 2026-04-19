import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";

export const metadata = {
  title: "Primenet Systems",
  description:
    "Primenet Systems builds custom software, web platforms, and mobile applications for businesses in Ghana and beyond.",
  openGraph: {
    type: "website",
    title: "Primenet Systems",
    description:
      "A software company focused on practical digital solutions, modern user experiences, and reliable delivery.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Primenet Systems",
    description:
      "Custom software, web development, mobile apps, and digital product support for growing businesses.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
