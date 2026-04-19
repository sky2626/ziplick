import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
            <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
              <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold">
                Need a dependable
                <span className="text-transparent pl-2 bg-gradient-to-r from-sky-400 to-primary bg-clip-text">
                  technology partner?
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Primenet Systems helps businesses launch new digital products,
              improve existing platforms, and plan the right technical path for
              growth.
            </CardContent>

            <CardFooter>
              <Button asChild>
                <a href="https://wa.me/233546383716" target="_blank">
                  Start a Conversation
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
