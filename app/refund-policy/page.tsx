import { HeroHeader } from "@/components/hero-header";
import { refundPolicy } from "@/data/policies";

const Page = () => {
  return (
    <>
      <HeroHeader title="REFUND POLICY" />
      <div className="container max-w-screen-xl py-6 px-12">
        <p className="mb-4 text-base leading-[1.8] font-medium">
          {refundPolicy}
        </p>
      </div>
    </>
  );
};

Page.displayName = "RefundPolicyPage";

export default Page;
