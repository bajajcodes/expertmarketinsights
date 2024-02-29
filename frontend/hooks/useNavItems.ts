import { getCategoriesSlugs } from "@/app/actions";
import { navConfig } from "@/config/nav";
import { MainNavItem, SidebarNavItem } from "@/types/nav";
import { getSlug } from "@/utils/slugs";
import { useEffect, useState } from "react";

export const useNavItems = () => {
  const [navItems, setNavItems] = useState<{
    mainNav: MainNavItem[];
    sidebarNav: SidebarNavItem[];
  }>({
    mainNav: navConfig.mainNav,
    sidebarNav: navConfig.sidebarNav,
  });

  //TODO: change from useEffect to data fetching library
  useEffect(() => {
    const updateCategoriesNavItem = async () => {
      const categories = await getCategoriesSlugs();
      const categoriesItem = categories.map((category) => ({
        title: category.title,
        items: [],
        href: `/reports/${getSlug(category.title, category.id)}`,
      }));
      setNavItems((prevNavItems) => ({
        ...prevNavItems,
        sidebarNav: prevNavItems.sidebarNav.map((item) =>
          item.title === "Categories"
            ? { ...item, items: categoriesItem }
            : item
        ),
      }));
    };

    updateCategoriesNavItem();
  }, []);

  return navItems;
};
