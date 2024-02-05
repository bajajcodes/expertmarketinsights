"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { navConfig } from "@/config/nav";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export function MainNav() {
  const pathname = usePathname();
  return (
    <div className="mr-4 hidden md:flex md:items-center">
      <Link href="/" className="mr-6 flex flex-wrap items-center space-x-2">
        <Image
          width={72}
          height={72}
          className="mr-2"
          src="/logo.png"
          alt="logo"
        />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <NavigationMenu.Root className="relative z-10 flex max-w-max flex-1 items-center justify-center ml-auto">
        <NavigationMenu.List className="group flex flex-1 list-none items-center justify-center space-x-1 relative">
          {navConfig.mainNav?.map(
            (item) =>
              item.href && (
                <NavigationMenu.Item key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenu.Link
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-muted-foreground font-semibold hover:text-expertmarketinsight ",
                        {
                          "bg-expertmarketinsight text-white hover:bg-expertmarketinsight/90 hover:text-white focus:bg-expertmarketinsight focus:text-white":
                            pathname === item.href,
                        }
                      )}
                    >
                      {item.title}
                    </NavigationMenu.Link>
                  </Link>
                </NavigationMenu.Item>
              )
          )}
          {navConfig.sidebarNav.map((item, index) => (
            <NavigationMenu.Item key={item.href || item.title}>
              <NavigationMenu.Trigger
                className={cn(navigationMenuTriggerStyle(), "group")}
              >
                {item.title}{" "}
                <ChevronDownIcon
                  className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content
                className={cn(
                  "bg-white top-full w-full max-w-max md:absolute md:w-auto data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 rounded-tl-sm rounded-md border bg-popover text-popover-foreground shadow",
                  { "right-1/4": index === 0 },
                  { "-right-10": index === 1 },
                  { "-right-12": index === 2 }
                )}
              >
                <ul
                  className={cn("grid w-max gap-3 p-4 md:grid-flow-col", {
                    "md:grid-cols-2 md:grid-flow-row": index === 1,
                  })}
                >
                  {item.items.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        {!item.disabled &&
                          (item.href ? (
                            <ListItem
                              href={item.href}
                              title={item.title}
                              icon={item.icon}
                              className={cn({
                                "bg-expertmarketinsight text-white hover:bg-expertmarketinsight/90 hover:text-white focus:bg-expertmarketinsight focus:text-white":
                                  pathname === item.href,
                              })}
                            />
                          ) : (
                            item.title
                          ))}
                      </React.Fragment>
                    );
                  })}
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}

interface ListItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  icon?: keyof typeof Icons;
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & ListItemProps
>(({ className, title, children, icon, ...props }, ref) => {
  const Icon = Icons[icon!];
  return (
    <li>
      <NavigationMenu.Link asChild className={navigationMenuTriggerStyle()}>
        <a
          ref={ref}
          className={cn(
            "text-muted-foreground font-semibold hover:text-expertmarketinsight",
            navigationMenuTriggerStyle(),
            className
          )}
          {...props}
        >
          {icon && <Icon className="w-6 h-6 mr-2" />}
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenu.Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
