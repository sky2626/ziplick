import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Web Development",
    description:
      "Build fast, secure, and scalable websites that represent your brand and support your business goals.",
    pro: 0,
  },
  {
    title: "Mobile Apps",
    description:
      "Develop user-friendly mobile applications for customer engagement, service delivery, and internal operations.",
    pro: 0,
  },
  {
    title: "Custom Software",
    description:
      "Create tailored systems for workflows, business automation, dashboards, and day-to-day operations.",
    pro: 1,
  },
  {
    title: "UI/UX Design",
    description:
      "Design intuitive interfaces that make your product easier to understand, use, and trust.",
    pro: 0,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Software Services Built Around Your Goals
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From company websites to custom business platforms, Primenet Systems
        delivers practical digital products with a strong focus on usability
        and performance.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
