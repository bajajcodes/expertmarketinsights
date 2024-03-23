import { getReportById, getReports } from "@/app/actions";
import { Report } from "@/app/types";
import { BuyingOptions } from "@/components/buying-options";
import { FAQ } from "@/components/faqs";
import { HeroHeader } from "@/components/hero-header";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { getIdFromSlug, getSlug } from "@/utils/slugs";
import { Metadata } from "next";
import { isRedirectError } from "next/dist/client/components/redirect";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface Props {
  params: {
    report: string;
    category: string;
  };
}

export const dynamicParams = false;

const tabsList = [
  {
    value: "summary",
    label: "Summary",
  },
  {
    value: "toc",
    label: "TOC",
  },
  {
    value: "methodology",
    label: "Methodology",
  },
];

const DEFAULT_TAB = tabsList.at(0)?.value;

export async function generateStaticParams() {
  const reports = await getReports();
  return reports.map((report) => {
    const categorySlug = getSlug(
      report.attributes.category.data.attributes.name,
      report.attributes.category.data.id
    );
    const reportSlug = getSlug(report.attributes.reportTitle, report.id);
    return { report: reportSlug, category: categorySlug };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const reportId = getIdFromSlug(params.report);
  const report = await getReportById(reportId!);
  //TODO: handle it beautifully
  if (!reportId || !report)
    return {
      title: `Report does not exists for ${params.report}`,
    };
  return {
    title: report.attributes.reportTitle,
    alternates: {
      canonical: `${siteConfig.url}/reports/${params.category}/${params.report}`,
    },
  };
}

function formatDate(dateString: string) {
  const [_year, month, day] = dateString.split("-");
  return `${day}-${month}`;
}

export default async function Page({ params }: Props) {
  let report: Report;
  try {
    const reportId = getIdFromSlug(params.report);
    if (!reportId) throw Error(`Report does not exists for ${params.report}`);
    report = await getReportById(reportId);
    if (!report) throw Error(`Report does not exists for ${params.report}`);
  } catch (error) {
    console.error({ error });
    if (isRedirectError(error)) {
      throw error;
    }
    notFound();
  }
  return (
    <>
      <HeroHeader title={report.attributes.reportTitle} />
      <section className="container bg-white mb-4 grid gap-4 md:grid-cols-[1fr_0.5fr]">
        <div>
          <PageHeader className="pb-1 md:pb-2 lg:pb-4">
            <PageHeaderHeading>
              {report.attributes.reportTitle}
            </PageHeaderHeading>
            <PageHeaderDescription>
              {report.attributes.reportCode} ID&nbsp;|&nbsp;
              {report.attributes.category.data.attributes.name}&nbsp;|&nbsp;
              {formatDate(report.attributes.publishedDate)}&nbsp;|&nbsp;
              {report.attributes.numberOfPages} Pages
            </PageHeaderDescription>
          </PageHeader>
          <Tabs defaultValue={DEFAULT_TAB} className="w-full">
            <TabsList className="mb-2 w-full items-start justify-start">
              {tabsList.map((item) => (
                <TabsTrigger
                  value={item.value}
                  key={item.value}
                  className="flex-1"
                >
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {/* REF: https://stackoverflow.com/questions/60332183/new-line-with-react-markdown */}
            {/* TODO: make the tabscontent part reusable */}
            <TabsContent value={tabsList.at(0)?.value!}>
              <ReactMarkdown
                remarkPlugins={[gfm]}
                className="whitespace-pre-wrap"
                components={{
                  thead: ({ className, ...props }) => (
                    <thead
                      {...props}
                      className={
                        (cn(className),
                        "align-top bg-expertmarketinsight text-white")
                      }
                    />
                  ),
                  th: ({ className, ...props }) => (
                    <th
                      {...props}
                      className={cn(className, "text-left p-4 w-1/2")}
                    />
                  ),
                  td: ({ className, ...props }) => (
                    <td
                      {...props}
                      className={cn(className, "text-left p-2 w-1/2")}
                    />
                  ),
                }}
              >
                {report.attributes.summary}
              </ReactMarkdown>
              {report.attributes.faqs.length > 0 && (
                <FAQ faqs={report.attributes.faqs} />
              )}
            </TabsContent>
            <TabsContent value={tabsList.at(1)?.value!}>
              <ReactMarkdown
                remarkPlugins={[gfm]}
                className="whitespace-pre-wrap"
                components={{
                  ol: ({ className, ...props }) => {
                    return (
                      <ol
                        {...props}
                        className={cn(
                          className,
                          "list-decimal whitespace-normal mx-8 md:mx-10"
                        )}
                      />
                    );
                  },
                  ul: ({ className, ...props }) => {
                    return (
                      <ul
                        {...props}
                        className={cn(
                          className,
                          "list-disc whitespace-normal mx-4 md:mx-8"
                        )}
                      />
                    );
                  },
                }}
              >
                {report.attributes.toc}
              </ReactMarkdown>
            </TabsContent>
            <TabsContent value={tabsList.at(2)?.value!}>
              <ReactMarkdown
                remarkPlugins={[gfm]}
                className="whitespace-pre-wrap"
              >
                {report.attributes.methodology}
              </ReactMarkdown>
            </TabsContent>
          </Tabs>
        </div>
        <BuyingOptions
          reportId={report.id}
          prices={report.attributes.buyingOptions}
        />
      </section>
    </>
  );
}
