import { SearchReport } from "@/components/search-report";
import Link from "next/link";
import { ReportBuyingUser } from "../types";

//TODO: check is to good to generate static params
export default async function Checkout({
  searchParams,
}: {
  searchParams: Record<"id" | "user", string | undefined>;
}) {
  const id = searchParams.id;
  const user = searchParams.user as ReportBuyingUser;

  console.log({ id, user });
  return (
    <>
      <div>
        <SearchReport />
        <div className="bg-[#413c69] px-8 py-4 text-white gap-2 flex items-center">
          <span>
            <Link href="/" className="text-[#b0e0e6]">
              HOME
            </Link>
          </span>
          <span>/</span>
          <span>CHECKOUT</span>
        </div>
      </div>
      <div className={"container bg-gray-100 p-8"}>
        <div className="bg-white p-6 rounded-md shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section
              aria-labelledby="order-summary-title"
              className="space-y-4 border py-2 px-4"
            >
              <h2
                className="text-lg font-semibold text-center"
                id="order-summary-title"
              >
                ORDER SUMMARY
              </h2>
            </section>
            <section
              aria-labelledby="billing-details-title"
              className="space-y-4 md:col-span-2"
            >
              <h2 className="text-lg font-semibold" id="billing-details-title">
                Billing Details :
              </h2>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
