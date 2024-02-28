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
      items: [
        {
          title: "Aerospace & Defence",
          href: "/reports/aerospace-and-defence-1",
          icon: "aerospace",
          items: [],
        },
        {
          title: "Automotive & Transport",
          href: "/reports/automotive-and-transport-2",
          icon: "automotive",
          items: [],
        },
        {
          title: "Chemical & Materials",
          href: "/reports/chemicals-and-materials-3",
          icon: "chemical",
          items: [],
        },
        {
          title: "Consumer Goods",
          href: "/reports/consumer-goods-4",
          icon: "consumer",
          items: [],
        },
        {
          title: "Food & Beverages",
          href: "/reports/food-and-beverages-5",
          icon: "food",
          items: [],
        },
        {
          title: "Information Technology",
          href: "/reports/information-technology-6",
          icon: "information",
          items: [],
        },
        {
          title: "Life Science",
          href: "/reports/life-science-7",
          icon: "life",
          items: [],
        },
        {
          title: "Machinery & Equipment",
          href: "/reports/machinery-8",
          icon: "machinery",
          items: [],
        },
        {
          title: "Manufacturing & Construction",
          href: "/reports/manufacturing-construction-9",
          icon: "manufacturing",
          items: [],
        },
        {
          title: "Power & Energy",
          href: "/reports/power-and-energy-10",
          icon: "power",
          items: [],
        },
        {
          title: "Semiconductor & Electronics",
          href: "/reports/semiconductor-and-electronics-11",
          icon: "semiconductor",
          items: [],
        },
        {
          title: "Service Industries",
          href: "/reports/service-industries-12",
          icon: "service",
          items: [],
        },
      ],
    },
    {
      title: "Media",
      items: [
        {
          title: "Blogs",
          href: "/media/blogs",
          items: [],
        },
        {
          title: "Press Released",
          href: "/media/pressrelease",
          items: [],
        },
      ],
    },
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
