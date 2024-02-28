import { HeroHeader } from "@/components/hero-header";
import { paymentOptions } from "@/data/helpdesk";

const Page = () => {
  return (
    <>
      <HeroHeader title="PAYMENT OPTION" />
      <div className="container max-w-screen-xl py-6 px-12">
        <h2 className="font-bold text-2xl mb-2 leading-[1.5]">
          There is one primary method through which you can simplify the
          purchasing process:
        </h2>
        <ul className="list-disc">
          <li className="mb-2">
            <strong>Bank Transfers:- </strong>&nbsp;
            <span>{paymentOptions.note}</span>
          </li>
          <li className="mb-2">
            Contact us at sales@expertmarketinsights.com for payment through
            Bank Wire Transfer.
          </li>
        </ul>
        <p className="mb-4 text-base leading-[1.8] font-medium py-1 px-2">
          {paymentOptions.paymentPrompt}
        </p>
      </div>
    </>
  );
};

Page.displayName = "PaymentOptionsPage";

export default Page;
