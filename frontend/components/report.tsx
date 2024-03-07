import { ReportBuyingUser, RequestInfoValue } from "@/app/types";
import Link from "next/link";
import { Button } from "./ui/button";

export interface ReportProps {
  id: string;
  reportTitle: string;
  reportCode: string;
  numberOfPages: number;
  reportId: number;
  publishedDate: string;
  reportSlug: string;
  categorySlug: string;
}

export function Report({
  categorySlug,
  reportSlug,
  reportTitle,
  reportCode,
  numberOfPages,
  ...rest
}: ReportProps) {
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
          <Link
            href={`/checkout?id=${rest.id}&user=${ReportBuyingUser.SingleUser}`}
            className="hover:no-underline"
          >
            BUY NOW
          </Link>
        </Button>
        <Button className="bg-blue-400 hover:bg-blue-500 text-white">
          <Link
            href={`/request?id=${rest.id}&value=${RequestInfoValue.RequestSample}`}
            className="hover:no-underline"
          >
            REQUEST SAMPLE
          </Link>
        </Button>
      </div>
    </div>
  );
}
