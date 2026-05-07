import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, GraduationCap, UtensilsCrossed, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProductProps {
  icon: React.ReactNode;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  href: string;
  cta: string;
}

const productList: ProductProps[] = [
  {
    icon: <MessageSquare size={32} className="text-primary" />,
    title: "SendNest",
    badge: "Live",
    description:
      "Reach thousands of customers instantly with SendNest — a reliable bulk SMS platform for sending promotional messages, alerts, and transactional notifications at scale, built for Ghanaian businesses.",
    highlights: [
      "High-volume message delivery",
      "Scheduled & instant sending",
      "Delivery reports & analytics",
      "Simple API integration",
    ],
    href: "#contact",
    cta: "Get Started",
  },
  {
    icon: <GraduationCap size={32} className="text-primary" />,
    title: "campusGH",
    badge: "New",
    description:
      "A multi-tenant school management system with dedicated learning platforms for students and teachers — giving every school its own managed space to run classes, track progress, and collaborate.",
    highlights: [
      "Multi-tenant: each school gets its own environment",
      "Teacher tools: classes, assignments & grading",
      "Student portal: courses, results & resources",
      "Admin dashboard for school management",
    ],
    href: "#contact",
    cta: "Learn More",
  },
  {
    icon: <UtensilsCrossed size={32} className="text-primary" />,
    title: "Foody",
    badge: "Coming Soon",
    description:
      "A multi-tenant food ordering and delivery platform — giving restaurants and vendors their own storefront while customers enjoy seamless ordering, real-time tracking, and fast delivery.",
    highlights: [
      "Multi-tenant: each vendor gets their own store",
      "Customer ordering & real-time delivery tracking",
      "Vendor dashboard for menu & order management",
      "Delivery agent app & dispatch management",
    ],
    href: "#contact",
    cta: "Get Early Access",
  },
];

export const ProductsSection = () => {
  return (
    <section id="products" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Products
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Built by Primenet, Made for You
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-12">
        Beyond client projects, we build and operate our own products —
        practical tools designed to solve real problems for businesses and
        communities in Ghana.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {productList.map(({ icon, title, badge, description, highlights, href, cta }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card flex flex-col h-full relative group hover:shadow-md transition-shadow"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-3 rounded-xl ring-1 ring-primary/15">
                  {icon}
                </div>
                <Badge variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              </div>
              <CardTitle className="text-2xl">{title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <ul className="flex flex-col gap-2">
                {highlights.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="pt-4">
              <Button asChild className="w-full gap-2">
                <Link href={href}>
                  {cta}
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
