import { RequestForm } from "@/components/request-form";
import { SearchReports } from "@/components/search-reports";
import { isRedirectError } from "next/dist/client/components/redirect";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getReportForCheckoutById } from "../actions";
import { ReportMetaData, RequestInfoLabel, RequestInfoValue } from "../types";

export const dynamic = "force-dynamic";

export default async function RequestPage({
  searchParams,
}: {
  searchParams: Record<"id" | "value", string>;
}) {
  const id = searchParams.id;
  const value =
    (searchParams.value as RequestInfoValue) || RequestInfoLabel.sample;
  const label = RequestInfoLabel[value as keyof typeof RequestInfoLabel];
  let report: ReportMetaData;

  try {
    if (!id) throw Error("Report ID is Incorrect");
    report = await getReportForCheckoutById(id);
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    notFound();
  }
  return (
    <>
      <div>
        <SearchReports />
        <div className="bg-[#413c69] px-8 py-4 text-white gap-2 flex items-center">
          <span>
            <Link href="/" className="text-[#b0e0e6]">
              HOME
            </Link>
          </span>
          <span>/</span>
          <span>{label}</span>
        </div>
      </div>
      <section className="container max-w-4xl my-8 p-4 md:p-8 rounded-lg bg-expertmarketinsight">
        <h2 className="text-2xl font-semibold text-white text-center">
          {report.attributes.reportTitle}
        </h2>
        <RequestForm defaultRequest={value} />
      </section>
    </>
  );
}
