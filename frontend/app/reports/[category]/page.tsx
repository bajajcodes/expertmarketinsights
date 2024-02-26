import {
  getCategoriesSlugs,
  getCategoryById,
  getCategoryReports,
} from "@/app/actions";
import { Category, ReportMetaData } from "@/app/types";
import { HeroHeader } from "@/components/hero-header";
import { Report } from "@/components/report";
import { siteConfig } from "@/config/site";
import { getIdFromSlug, getSlug } from "@/utils/slugs";
import { Metadata } from "next";
import { isRedirectError } from "next/dist/client/components/redirect";
import { notFound } from "next/navigation";

interface Props {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const categories = await getCategoriesSlugs();
  return categories.map((item) => {
    const category = getSlug(item.title, item.id);
    return { category };
  });
}

export const dynamicParams = false;

export async function generateMetaData({ params }: Props): Promise<Metadata> {
  const id = getIdFromSlug(params.category);
  const category = await getCategoryById(id!);
  return {
    title: category.attributes.name,
    alternates: {
      canonical: `${siteConfig.url}/categories/${params.category}`,
    },
  };
}

export default async function Page({ params }: Props) {
  let reports: Array<ReportMetaData>;
  let category: Category;
  try {
    const id = getIdFromSlug(params.category);
    if (!id) throw Error("Category Not Found");
    reports = await getCategoryReports(id);
    category = await getCategoryById(id!);
    //TODO: add ability to check whether the current URL's readable portion matches the post's actual slug
    //REF: https://mikebifulco.com/posts/self-healing-urls-nextjs-seo#setting-up-pagetsx-where-the-magic-happens
  } catch (error) {
    console.error({ error });
    if (isRedirectError(error)) {
      throw error;
    }
    notFound();
  }
  return (
    <>
      <HeroHeader title={category.attributes.name} />
      <div className="container max-w-screen-lg bg-white py-8">
        <h2 className="text-xl font-semibold mb-4">Report Details</h2>
        <div className="space-y-4">
          {reports.map((report) => (
            <Report
              {...report}
              key={report.id}
              categorySlug={params.category}
            />
          ))}
          {reports.length < 1 && (
            <h4 className="text-base font-semibold text-muted-foreground">
              No Reports Found
            </h4>
          )}
        </div>
      </div>
    </>
  );
}
