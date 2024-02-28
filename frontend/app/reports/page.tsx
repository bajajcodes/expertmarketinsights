import { HeroHeader } from "@/components/hero-header";
import { Report } from "@/components/report";
import { getReports } from "../actions";

export default async function Reports() {
  const reports = await getReports();
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
