import { HeroHeader } from "@/components/hero-header";
import { Report, ReportProps } from "@/components/report";
import { getSlug } from "@/utils/slugs";
import { isRedirectError } from "next/dist/client/components/redirect";
import { notFound } from "next/navigation";
import { getReports } from "../actions";

interface Props {
  params: {
    report: string;
    category: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const reports = await getReports();
  const slugsData = reports.map((report) => ({
    categoryName: report.attributes.category.data.attributes.name,
    categoryId: report.attributes.category.data.id,
    reportId: report.id,
    reportTitle: report.attributes.reportTitle,
  }));
  return slugsData.map((item) => {
    const category = getSlug(item.categoryName, item.categoryId);
    const report = getSlug(item.reportTitle, item.reportId);
    return {
      category,
      report,
    };
  });
}

export default async function Reports() {
  let reports: Array<ReportProps>;
  try {
    const rawReportsData = await getReports();
    reports = rawReportsData.map((report) => {
      const reportSlug = getSlug(report.attributes.reportTitle, report.id);
      const categorySlug = getSlug(
        report.attributes.category.data.attributes.name,
        report.attributes.category.data.id
      );
      return {
        id: report.id,
        ...report.attributes,
        reportSlug,
        categorySlug,
      };
    });
  } catch (error) {
    console.error({ error });
    if (isRedirectError(error)) {
      throw error;
    }
    notFound();
  }
  return (
    <>
      <HeroHeader title="ALL REPORTS" />
      <section className="container max-w-screen-lg py-8 ">
        <h2 className="text-xl font-semibold mb-4">Reports</h2>
        <ul className="grid gap-8 place-items-center">
          {reports.map((report) => (
            <Report {...report} key={report.id} />
          ))}
        </ul>
      </section>
    </>
  );
}
