import { MainNavItem, SidebarNavItem } from '@/types/nav';

interface NavConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Services',
      href: '/services',
    },
    {
      title: 'Contact US',
      href: '/contactus',
    },
  ],
  sidebarNav: [
    {
      title: 'About US',
      items: [
        {
          title: 'Overview',
          href: '/aboutus/Overview',
          items: [],
        },
        {
          title: 'Methodology',
          href: '/aboutus/methodology',
          items: [],
        },
      ],
    },
    {
      title: 'Categories',
      items: [
        {
          title: 'Aerospace & Defence',
          href: '/categories/aerospace-and-defence',
          items: [],
        },
        {
          title: 'Automotive & Transport',
          href: '/categories/automotive-and-transport',
          items: [],
        },
        {
          title: 'Chemical & Materials',
          href: '/categories/chemicals-and-materials',
          items: [],
        },
        {
          title: 'Consumer Goods',
          href: '/categories/consumer-goods',
          items: [],
        },
        {
          title: 'Food & Beverages',
          href: '/categories/food-and-beverages',
          items: [],
        },
        {
          title: 'Information Technology',
          href: '/categories/information-technology',
          items: [],
        },
        {
          title: 'Life Science',
          href: '/categories/life-science',
          items: [],
        },
        {
          title: 'Machinery & Equipment',
          href: '/categories/machinery-and-equipment',
          items: [],
        },
        {
          title: 'Manufacturing & Construction',
          href: '/categories/manufacturing-construction',
          items: [],
        },
        {
          title: 'Power & Energy',
          href: '/categories/power-and-energy',
          items: [],
        },
        {
          title: 'Semiconductor & Electronics',
          href: '/categories/semiconductor-and-electronics',
          items: [],
        },
        {
          title: 'Service Industries',
          href: '/categories/service-industries',
          items: [],
        },
      ],
    },
    {
      title: 'Media',
      items: [
        {
          title: 'Blogs',
          href: '/media/blogs',
          items: [],
        },
        {
          title: 'Press Released',
          href: '/media/pressrelease',
          items: [],
        },
      ],
    },
  ],
};
