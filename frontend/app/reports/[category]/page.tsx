import {
  getCategoriesSlugs,
  getCategoryById,
  getCategoryReports,
} from "@/app/actions";
import { Category } from "@/app/types";
import { HeroHeader } from "@/components/hero-header";
import { Report, ReportProps } from "@/components/report";
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
export const revalidate = 1800;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = getIdFromSlug(params.category);
  const category = await getCategoryById(id!);
  //IDK How title will be used
  //IK 404 page will come up and later take over this title
  //TODO: handle it beautifully
  if (!id || !category)
    return {
      title: `Report does not exists for ${params.category}`,
    };
  return {
    title: category.attributes.name,
    alternates: {
      canonical: `${siteConfig.url}/categories/${params.category}`,
    },
  };
}

export default async function Page({ params }: Props) {
  let reports: Array<ReportProps>;
  let category: Category;
  try {
    const id = getIdFromSlug(params.category);
    if (!id) throw Error("Category Not Found");
    const rawReportsData = await getCategoryReports(id);
    category = await getCategoryById(id!);
    reports = rawReportsData.map((report) => {
      const reportSlug = getSlug(report.attributes.reportTitle, report.id);
      return {
        id: report.id,
        ...report.attributes,
        reportSlug,
        categorySlug: params.category,
      };
    });
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
            <Report {...report} key={report.id} />
          ))}
          {reports.length < 1 && (
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground text-center mb-8">
              No Reports Found
            </h4>
          )}
        </div>
      </div>
    </>
  );
}
