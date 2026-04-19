import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: 350,
    description:
      "A good fit for smaller websites, landing pages, and early product ideas.",
    buttonText: "Request Quote",
    benefitList: [
      "Discovery session",
      "Basic UI design",
      "Responsive frontend",
      "Launch support",
      "Project handoff",
    ],
  },
  {
    title: "Business",
    popular: 1,
    price: 1200,
    description:
      "Ideal for businesses that need stronger product structure and feature depth.",
    buttonText: "Book a Call",
    benefitList: [
      "Custom design flow",
      "Business-focused features",
      "Admin or dashboard support",
      "Testing and deployment",
      "Post-launch guidance",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 3000,
    description:
      "For larger systems, product rebuilds, or long-term implementation support.",
    buttonText: "Contact Us",
    benefitList: [
      "Custom software planning",
      "Advanced integrations",
      "Scalable architecture",
      "Phone and WhatsApp support",
      "Maintenance roadmap",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Flexible Engagement Options
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Final pricing depends on project scope, features, timeline, and support
        needs. These ranges help frame typical engagements.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
