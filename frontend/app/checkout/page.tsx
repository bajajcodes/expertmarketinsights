import { OrderSummaryForm } from "@/components/order-summary";
import { SearchReport } from "@/components/search-report";
import { isRedirectError } from "next/dist/client/components/redirect";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getReportForCheckoutById } from "../actions";
import {
  ReportBuyingUser,
  ReportBuyingUserLabel,
  ReportMetaData,
} from "../types";

//TODO: check is to good to generate static params
export default async function Checkout({
  searchParams,
}: {
  searchParams: Record<"id" | "user", string | undefined>;
}) {
  const id = searchParams.id;
  const user = searchParams.user as ReportBuyingUser;

  let report: ReportMetaData;
  let price: number | undefined;
  try {
    if (!id || !user) throw Error("Report ID or Buying User is Incorrect");
    report = await getReportForCheckoutById(id);
    price = report.attributes.buyingOptions.find(
      (item) => item.user === user
    )?.price;
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    notFound();
  }
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
              <div className="p-4 border rounded-md">
                <p className="text-sm">{report.attributes.reportTitle}</p>
                <p className="text-sm">
                  {report.attributes.reportCode} | {ReportBuyingUserLabel[user]}{" "}
                  | $ {price}
                </p>
              </div>
              <div className="p-4 border rounded-md">
                <div className="flex justify-between">
                  <h3 className="text-sm font-semibold">Buying Option</h3>
                  <p className="text-sm font-semibold">
                    {ReportBuyingUserLabel[user]}
                  </p>
                </div>
              </div>
              <div className="p-4 border rounded-md">
                <div className="flex justify-between">
                  <h3 className="text-sm font-semibold">TOTAL</h3>
                  <p className="text-sm font-semibold">${price}</p>
                </div>
              </div>
            </section>
            <section
              aria-labelledby="billing-details-title"
              className="space-y-4 md:col-span-2"
            >
              <h2 className="text-lg font-semibold" id="billing-details-title">
                Billing Details :
              </h2>
              <OrderSummaryForm
                {...report.attributes}
                id={id}
                user={user}
                price={price as unknown as string}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
