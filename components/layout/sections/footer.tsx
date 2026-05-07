import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <Image
                src="/logo.png"
                alt="Primenet Systems logo"
                width={44}
                height={44}
                className="w-11 h-11 mr-2 object-contain"
              />
              <h3 className="text-2xl">Primenet Systems</h3>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              We build practical software solutions for businesses that need
              reliable websites, mobile apps, and custom systems.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <div>
              <Link href="#benefits" className="opacity-60 hover:opacity-100">
                Benefits
              </Link>
            </div>

            <div>
              <Link href="#services" className="opacity-60 hover:opacity-100">
                Services
              </Link>
            </div>

            <div>
              <Link href="#products" className="opacity-60 hover:opacity-100">
                Products
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Services</h3>
            <div>
              <Link href="#services" className="opacity-60 hover:opacity-100">
                Web Development
              </Link>
            </div>

            <div>
              <Link href="#services" className="opacity-60 hover:opacity-100">
                Mobile Apps
              </Link>
            </div>

            <div>
              <Link href="#services" className="opacity-60 hover:opacity-100">
                Custom Software
              </Link>
            </div>

            <h3 className="font-bold text-lg mt-4">Products</h3>
            <div>
              <Link href="#products" className="opacity-60 hover:opacity-100">
                SendNest
              </Link>
            </div>

            <div>
              <Link href="#products" className="opacity-60 hover:opacity-100">
                campusGH
              </Link>
            </div>

            <div>
              <Link href="#products" className="opacity-60 hover:opacity-100">
                Foody
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link
                href="tel:+233546383716"
                className="opacity-60 hover:opacity-100"
              >
                +233 54 638 3716
              </Link>
            </div>

            <div>
              <Link
                href="https://wa.me/233546383716"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                WhatsApp
              </Link>
            </div>

            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Start a Project
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Company</h3>
            <div>
              <Link href="/" className="opacity-60 hover:opacity-100">
                Home
              </Link>
            </div>

            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact
              </Link>
            </div>

            <div>
              <Link href="#footer" className="opacity-60 hover:opacity-100">
                Footer
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; {new Date().getFullYear()} Primenet Systems. All rights
            reserved.
          </h3>
        </section>
      </div>
    </footer>
  );
};
