import { MainNavItem, SidebarNavItem } from '@/types/nav';

interface NavConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  policiesNav: MainNavItem[];
  helpdeskNav: MainNavItem[];
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Services',
      href: '/aboutus/services',
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
          href: '/aboutus/overview',
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
          icon: 'aerospace',
          items: [],
        },
        {
          title: 'Automotive & Transport',
          href: '/categories/automotive-and-transport',
          icon: 'automotive',
          items: [],
        },
        {
          title: 'Chemical & Materials',
          href: '/categories/chemicals-and-materials',
          icon: 'chemical',
          items: [],
        },
        {
          title: 'Consumer Goods',
          href: '/categories/consumer-goods',
          icon: 'consumer',
          items: [],
        },
        {
          title: 'Food & Beverages',
          href: '/categories/food-and-beverages',
          icon: 'food',
          items: [],
        },
        {
          title: 'Information Technology',
          href: '/categories/information-technology',
          icon: 'information',
          items: [],
        },
        {
          title: 'Life Science',
          href: '/categories/life-science',
          icon: 'life',
          items: [],
        },
        {
          title: 'Machinery & Equipment',
          href: '/categories/machinery-and-equipment',
          icon: 'machinery',
          items: [],
        },
        {
          title: 'Manufacturing & Construction',
          href: '/categories/manufacturing-construction',
          icon: 'manufacturing',
          items: [],
        },
        {
          title: 'Power & Energy',
          href: '/categories/power-and-energy',
          icon: 'power',
          items: [],
        },
        {
          title: 'Semiconductor & Electronics',
          href: '/categories/semiconductor-and-electronics',
          icon: 'semiconductor',
          items: [],
        },
        {
          title: 'Service Industries',
          href: '/categories/service-industries',
          icon: 'service',
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
  policiesNav: [
    {
      href: '/privacy-policy',
      title: 'Privacy Policy',
    },
    {
      href: '/refund-policy',
      title: 'Refund Policy',
    },
    {
      href: '/disclaimer',
      title: 'Disclaimer',
    },
    {
      href: '/terms-and-condition',
      title: 'Terms & Conditions',
    },
  ],
  helpdeskNav: [
    {
      href: '/format-delivery',
      title: 'Format & Delivery',
    },
    {
      href: '/subscription',
      title: 'Subscription',
    },
    {
      href: '/payment-options',
      title: 'Payment Options',
    },
    {
      href: '/career',
      title: 'Careers',
    },
    {
      href: '/sitemap.xml',
      title: 'XML Sitemap',
    },
    {
      href: '/faq',
      title: 'FAQs',
    },
  ],
};
