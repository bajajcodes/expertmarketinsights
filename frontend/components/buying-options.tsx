"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/qNLSalKcLtD
 */
// import { buyNow } from "@/actions/form";
import { buyNow } from "@/actions/form";
import {
  Price,
  ReportBuyingUser,
  ReportBuyingUserLabel,
  RequestInfoLabel,
  RequestInfoValue,
} from "@/app/types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";
import { FormMessage } from "./form";
import { SubmitButton } from "./submit-button";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface BuyingOptionsProps {
  reportId: string;
  prices: Price[];
}

interface RequestData {
  label: RequestInfoLabel;
  value: RequestInfoValue;
}

const requestLinks: RequestData[] = [
  {
    label: RequestInfoLabel.RequestSample,
    value: RequestInfoValue.RequestSample,
  },
  {
    label: RequestInfoLabel.RequestDiscount,
    value: RequestInfoValue.RequestDiscount,
  },
  {
    label: RequestInfoLabel.PreOrderEnquiry,
    value: RequestInfoValue.PreOrderEnquiry,
  },
  {
    label: RequestInfoLabel.RequestBulkReport,
    value: RequestInfoValue.RequestBulkReport,
  },
];

export function BuyingOptions(props: BuyingOptionsProps) {
  const [state, action] = useFormState(buyNow, { user: null, error: null });
  if (state.user) {
    redirect(`/checkout?id=${props.reportId}&user=${state.user}`);
  }
  return (
    <div className="flex flex-col space-y-6  py-8 md:py-12 lg:py-24 ">
      {props.prices.length > 0 ? (
        <div className="border">
          <div className="bg-gray-200 p-4 text-center text-xl font-semibold">
            Buying Options
          </div>
          <form className="space-y-4 px-6 py-4" action={action}>
            <RadioGroup
              defaultValue={ReportBuyingUser.SingleUser}
              required
              name="user"
            >
              {props.prices.map((item) => (
                <div className="flex items-center space-x-2" key={item.user}>
                  <RadioGroupItem id={item.user} value={item.user} />
                  <Label htmlFor={item.user}>
                    {ReportBuyingUserLabel[item.user]} ${item.price}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <SubmitButton textContent="Buy Now" />
            <FormMessage>{state.error}</FormMessage>
          </form>
        </div>
      ) : null}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 px-6">
        {requestLinks.map((button) => (
          <Link
            href={`/request?id=${props.reportId}&value=${button.value}`}
            className={cn(
              buttonVariants({ variant: "default" }),
              "text-white uppercase bg-expertmarketinsight hover:bg-expertmarketinsight/90"
            )}
            key={button.value}
          >
            {button.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
