import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface NavConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  policiesNav: MainNavItem[];
  helpdeskNav: MainNavItem[];
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/aboutus/services",
    },
    {
      title: "Contact US",
      href: "/contactus",
    },
  ],
  sidebarNav: [
    {
      title: "About US",
      items: [
        {
          title: "Overview",
          href: "/aboutus/overview",
          items: [],
        },
        {
          title: "Methodology",
          href: "/aboutus/methodology",
          items: [],
        },
      ],
    },
    {
      title: "Categories",
      href: "/categories",
      items: [],
    },
    // {
    //   title: "Media",
    //   items: [
    //     {
    //       title: "Blogs",
    //       href: "/media/blogs",
    //       items: [],
    //     },
    //     {
    //       title: "Press Released",
    //       href: "/media/pressrelease",
    //       items: [],
    //     },
    //   ],
    // },
  ],
  policiesNav: [
    {
      href: "/privacy-policy",
      title: "Privacy Policy",
    },
    {
      href: "/refund-policy",
      title: "Refund Policy",
    },
    {
      href: "/disclaimer",
      title: "Disclaimer",
    },
    {
      href: "/terms-and-condition",
      title: "Terms & Conditions",
    },
  ],
  helpdeskNav: [
    {
      href: "/format-delivery",
      title: "Format & Delivery",
    },
    {
      href: "/subscription",
      title: "Subscription",
    },
    {
      href: "/payment-options",
      title: "Payment Options",
    },
    {
      href: "/career",
      title: "Careers",
    },
  ],
};
