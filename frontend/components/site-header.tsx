import { siteConfig } from "@/config/site";
import { Mail, Phone } from "lucide-react";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { SocialLinks } from "./social-links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 md:p-2 pt-0 pb-4 text-black">
      <div className="container max-w-screen-xl bg-white">
        <div className="flex flex-wrap justify-between gap-2 items-center px-2 md:px-6 py-4 mb-2 bg-expertmarketinsight text-white">
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <div className="flex flex-wrap items-center gap-1 text-xs md:text-sm">
              <span>
                <Phone className="h-4 w-4" />
              </span>
              <span>{siteConfig.mobile}</span>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span>
                <Mail className="h-4 w-4" />
              </span>
              <span>{siteConfig.email}</span>
            </div>
          </div>
          <SocialLinks />
        </div>
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
