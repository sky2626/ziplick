import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Layers3",
    title: "Business-Focused Solutions",
    description:
      "Every product is aligned to real operational goals, user needs, and measurable outcomes.",
  },
  {
    icon: "ShieldCheck",
    title: "Reliable Delivery",
    description:
      "We prioritize stable builds, clean implementation, and dependable releases you can trust.",
  },
  {
    icon: "Smartphone",
    title: "Responsive Experiences",
    description:
      "Your website or app is designed to work smoothly across phones, tablets, and desktops.",
  },
  {
    icon: "Workflow",
    title: "Scalable Architecture",
    description:
      "We build systems that can evolve with your business instead of forcing expensive rewrites too soon.",
  },
  {
    icon: "Settings",
    title: "Ongoing Support",
    description:
      "From upgrades to fixes and improvements, we help you maintain momentum after launch.",
  },
  {
    icon: "SearchCheck",
    title: "Clear Discovery Process",
    description:
      "We listen first, define scope carefully, and recommend the right technical path for the job.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Primenet Systems combines product thinking, modern development
        practices, and practical support to deliver software that is useful
        from day one.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
