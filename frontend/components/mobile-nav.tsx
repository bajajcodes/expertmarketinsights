"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import logo from "@/public/logo.png";
import { MainNavItem, SidebarNavItem } from "@/types/nav";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function MobileNav({
  mainNav,
  sidebarNav,
}: {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  // const { mainNav, sidebarNav } = useNavItems();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <MobileLink
        href="/"
        className="flex items-center m-2 mt-0 md:hidden"
        onOpenChange={setOpen}
      >
        <div className="relative w-24 h-24 bg-expertmarketinsight">
          <Image
            className="object-cover absolute w-full h-full inset-0"
            sizes="100vw"
            width={0}
            height={0}
            loading="eager"
            placeholder="empty"
            src={logo}
            alt="logo"
          />
        </div>
        <span className="font-bold">{siteConfig.name}</span>
      </MobileLink>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden m-2 mt-0"
        >
          <Icons.menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 pl-4">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-3">
            {mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                    className={cn(
                      "hover:text-expertmarketinsight text-muted-foreground",
                      {
                        "bg-expertmarketinsight text-white hover:text-white/90":
                          pathname === item.href,
                      }
                    )}
                  >
                    {item.title}
                  </MobileLink>
                )
            )}
          </div>
          <div className="flex flex-col space-y-2">
            {sidebarNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">
                  {item.href ? (
                    <Link href={item.href}>{item.title}</Link>
                  ) : (
                    item.title
                  )}
                </h4>
                {item?.items?.length > 1 &&
                  item.items.map((item) => {
                    const Icon = Icons[item?.icon!];
                    return (
                      <React.Fragment key={item.href}>
                        {!item.disabled &&
                          (item.href ? (
                            <MobileLink
                              href={item.href}
                              onOpenChange={setOpen}
                              className={cn(
                                "hover:text-expertmarketinsight flex text-muted-foreground",
                                {
                                  "bg-expertmarketinsight text-white":
                                    pathname === item.href,
                                }
                              )}
                            >
                              {item.icon && <Icon className="h-6 w-6 mr-2" />}
                              {item.title}
                              {item.label && (
                                <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                  {item.label}
                                </span>
                              )}
                            </MobileLink>
                          ) : (
                            item.title
                          ))}
                      </React.Fragment>
                    );
                  })}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
