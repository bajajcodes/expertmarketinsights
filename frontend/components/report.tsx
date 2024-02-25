import { ReportMetaData } from "@/app/types";
import { getSlug } from "@/utils/slugs";
import Link from "next/link";
import { Button } from "./ui/button";

export function Report({
  id,
  attributes: { reportTitle, reportCode, numberOfPages },
  categorySlug,
}: ReportMetaData & { categorySlug: string }) {
  const reportSlug = getSlug(reportTitle, id);
  const href = `/reports/${categorySlug}/${reportSlug}`;
  return (
    <div className="bg-[#f3f4f6] p-6 rounded-lg flex flex-col md:flex-row md:justify-between md:items-start w-full">
      <div>
        <Link className="text-blue-600 hover:text-blue-800" href={href}>
          <h3 className="text-lg font-semibold cursor-pointer">
            {reportTitle}
          </h3>
        </Link>
        <p className="text-sm text-gray-600">
          Report Code:{reportCode} | No. of Pages:{numberOfPages}
        </p>
        <Link
          className="text-expertmarketinsight/95 hover:text-expertmarketinsight block mt-2"
          href={href}
        >
          READ MORE
        </Link>
      </div>
      <div className="flex items-center space-x-2 mt-4 md:mt-0">
        <Button className="bg-expertmarketinsight/90 hover:bg-expertmarketinsight text-white">
          BUY NOW
        </Button>
        <Button className="bg-blue-400 hover:bg-blue-500 text-white">
          REQUEST SAMPLE
        </Button>
      </div>
    </div>
  );
}
