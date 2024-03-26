import { getLatestReportsMetaData } from "@/app/actions";
import { getSlug } from "@/utils/slugs";
import Link from "next/link";

export async function LatestReports() {
  const latestReports = await getLatestReportsMetaData(5);
  return (
    <div className="border">
      <div className="bg-gray-200 p-4 text-center text-xl font-semibold">
        Latest Reports
      </div>
      <div className="flex flex-col gap-4 md:gap-6 p-4">
        {latestReports.map((item) => {
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
  );
}
