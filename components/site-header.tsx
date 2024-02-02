// TODO: store and use icons from compoennts/icons.tsx
import { Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95  md:p-2 pt-0 pb-4 text-black">
      <div className="container max-w-screen-xl">
        <div className="flex flex-wrap justify-between gap-2 items-center px-2 md:px-6 py-4 mb-2 bg-[#413c69] text-white">
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <div className="flex flex-wrap items-center gap-1">
              <span>
                <Phone className="h-4 w-4" />
              </span>
              <span>+91-89564-46619</span>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>
                <Mail className="h-4 w-4" />
              </span>
              <span>sales@theresearchinsights.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="link" size="icon" className="text-black bg-white">
              <span>
                <Facebook className="h-4 w-4" />
              </span>
            </Button>
            <Button variant="link" size="icon" className="text-black bg-white">
              <span>
                <Twitter className="h-4 w-4" />
              </span>
            </Button>
            <Button variant="link" size="icon" className="text-black bg-white">
              <span>
                <Linkedin className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </div>
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
