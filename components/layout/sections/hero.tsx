"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Software Company</Badge>
            </span>
            <span> Let&apos;s build it together </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Build modern digital solutions with
              <span className="text-transparent px-2 bg-gradient-to-r from-sky-400 to-primary bg-clip-text">
                Primenet Systems
              </span>
              for your business.
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            We design and develop websites, mobile apps, and custom software
            that help companies operate better, serve customers faster, and
            grow with confidence.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link href="tel:+233546383716">
                Call Us
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href="#services">View Services</Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14 w-full max-w-6xl">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/40 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            priority
            className="w-full md:w-[1200px] mx-auto rounded-2xl relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30 shadow-2xl object-cover min-h-[320px] md:min-h-[560px]"
            src={
              theme === "light"
                ? "/hero-team-light.jpg"
                : "/hero-team-dark.jpg"
            }
            alt="Software developers collaborating on a product build"
          />

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/70 via-background/5 to-transparent"></div>

          <div className="absolute left-4 right-4 bottom-4 md:left-8 md:right-auto md:bottom-8">
            <div className="bg-background/85 backdrop-blur-md border border-border rounded-2xl p-4 md:p-5 shadow-xl max-w-xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">
                What We Build
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm md:text-base">
                <span className="rounded-full bg-primary/10 text-primary px-3 py-1.5">
                  Web Apps
                </span>
                <span className="rounded-full bg-primary/10 text-primary px-3 py-1.5">
                  Mobile Apps
                </span>
                <span className="rounded-full bg-primary/10 text-primary px-3 py-1.5">
                  Custom Software
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};
