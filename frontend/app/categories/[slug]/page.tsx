import { getReportsMetaData } from "@/app/actions";
import { ReportMetaData } from "@/app/types";
import { HeroHeader } from "@/components/hero-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Props) {
  const { categoryLabel, reports } = await getReportsMetaData(params.slug);

  return (
    <section>
      <HeroHeader title={categoryLabel} />
      <div className="bg-white p-8 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Report Details</h2>
        <div className="space-y-4">
          {reports.map((report) => (
            <Report {...report} key={report.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Report({
  id,
  attributes: { reportTitle, reportId, reportCode, numberOfPages },
}: ReportMetaData) {
  return (
    <div className="bg-[#f3f4f6] p-6 rounded-lg flex flex-col md:flex-row md:justify-between md:items-start">
      <div>
        <Link className="text-blue-600 hover:text-blue-800" href="#">
          <h3 className="text-lg font-semibold cursor-pointer">
            {reportTitle}
          </h3>
        </Link>
        <p className="text-sm text-gray-600">
          Report Code:{reportCode} | No. of Pages:{numberOfPages}
        </p>
        <Link
          className="text-expertmarketinsight/95 hover:text-expertmarketinsight block mt-2"
          href="#"
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
