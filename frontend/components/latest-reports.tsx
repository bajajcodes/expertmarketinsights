import { getLatestReportsMetaData } from "@/app/actions";
import { ReportMetaData } from "@/app/types";
import { divideArray } from "@/lib/utils";
import { getSlug } from "@/utils/slugs";
import Link from "next/link";

export async function LatestReports() {
  const latestReports = await getLatestReportsMetaData();
  const { firstHalf, secondHalf } = divideArray<ReportMetaData>(latestReports);
  return (
    <section className="pb-4">
      <div className="container ">
        <div className="heading-section mb-5 mt-lg-0">
          <h2 className="mb-3 text-center font-extrabold text-3xl ">
            Latest Reports
          </h2>
        </div>
        <div className="grid auto-rows-[1fr] gap-4 md:gap-6 md:grid-cols-2  grid-flow-row mb-4 max-w-3xl m-auto">
          <div className="flex flex-col gap-4 md:gap-6">
            {firstHalf.map((item) => {
              const href = `/reports/${getSlug(
                item.attributes.category.data.attributes.name,
                item.attributes.category.data.id
              )}/${getSlug(item.attributes.reportTitle, item.id)}`;
              return (
                <Link
                  href={href}
                  key={item.id}
                  className="font-bold text-expertmarketinsight hover:text-[#3ba7e0]/90"
                >
                  <span>{item.attributes.reportTitle}</span>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            {secondHalf.map((item) => {
              const href = `/reports/${getSlug(
                item.attributes.category.data.attributes.name,
                item.attributes.category.data.id
              )}/${getSlug(item.attributes.reportTitle, item.id)}`;
              return (
                <Link
                  href={href}
                  key={item.id}
                  className="font-bold text-expertmarketinsight hover:text-[#3ba7e0]/90"
                >
                  <span>{item.attributes.reportTitle}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
