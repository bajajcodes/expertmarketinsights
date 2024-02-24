import { getCategoriesSlugs, getCategoryReports } from "@/app/actions";
import { ReportMetaData } from "@/app/types";
import { HeroHeader } from "@/components/hero-header";
import { Report } from "@/components/report";
import { getIdFromSlug, getSlug } from "@/utils/slugs";
import { isRedirectError } from "next/dist/client/components/redirect";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const categories = await getCategoriesSlugs();
  return categories.map((category) => {
    const slug = getSlug(category.title, category.id);
    return { slug };
  });
}

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  let reports: Array<ReportMetaData>;
  try {
    const id = getIdFromSlug(params.slug);
    if (!id) throw Error("Category Not Found");
    reports = await getCategoryReports(id);
    //TODO: add ability to check whether the current URL's readable portion matches the post's actual slug
    //REF: https://mikebifulco.com/posts/self-healing-urls-nextjs-seo#setting-up-pagetsx-where-the-magic-happens
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    notFound();
  }
  return (
    <>
      <HeroHeader title={"NA"} />
      <div className="container max-w-screen-lg bg-white py-8">
        <h2 className="text-xl font-semibold mb-4">Report Details</h2>
        <div className="space-y-4">
          {reports.map((report) => (
            <Report {...report} key={report.id} />
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
