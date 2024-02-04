'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Icons } from './icons';
import { siteConfig } from '@/config/site';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { navConfig } from '@/config/nav';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function MainNav() {
  const pathname = usePathname();
  return (
    <div className="mr-4 hidden md:flex md:items-center">
      <Link href="/" className="mr-6 flex flex-wrap items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
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
      <NavigationMenu className="ml-auto">
        <NavigationMenuList>
          {navConfig.mainNav?.map(
            (item) =>
              item.href && (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'text-muted-foreground font-semibold hover:text-expertmarketinsight ',
                        {
                          'bg-expertmarketinsight text-white hover:bg-expertmarketinsight/90 hover:text-white focus:bg-expertmarketinsight focus:text-white':
                            pathname === item.href,
                        }
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
          )}
          {navConfig.sidebarNav.map((item) => (
            <NavigationMenuItem key={item.href || item.title}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-max gap-3 p-4 md:grid-cols-2">
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
                                'bg-expertmarketinsight text-white hover:bg-expertmarketinsight/90 hover:text-white focus:bg-expertmarketinsight focus:text-white':
                                  pathname === item.href,
                              })}
                              // key={item.href}
                            />
                          ) : (
                            item.title
                          ))}
                      </React.Fragment>
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

interface ListItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  icon?: keyof typeof Icons;
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & ListItemProps
>(({ className, title, children, icon, ...props }, ref) => {
  const Icon = Icons[icon!];
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'text-muted-foreground font-semibold hover:text-expertmarketinsight',
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
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
