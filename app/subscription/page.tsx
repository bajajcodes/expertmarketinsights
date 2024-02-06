import { HeroHeader } from "@/components/hero-header";
import { whyChooseSubscription, whyChooseUs } from "@/data/helpdesk";

const Page = () => {
  return (
    <>
      <HeroHeader title="PAYMENT OPTION" />
      <div className="container max-w-screen-xl py-6 px-12">
        <div className="mb-4">
          <h2 className="font-bold text-2xl mb-2 leading-[1.5]">
            {whyChooseUs.title}
          </h2>
          <p className="mb-4 text-base leading-[1.8] font-medium py-1 px-2">
            {whyChooseUs.description}
          </p>
        </div>
        <div>
          <h2 className="font-bold text-2xl mb-2 leading-[1.5]">
            {whyChooseSubscription.title}
          </h2>
          <p className="mb-4 text-base leading-[1.8] font-medium py-1 px-2">
            {whyChooseSubscription.description}
          </p>
          <ul className="list-disc px-12">
            {whyChooseSubscription.advantages.map((item, index) => (
              <li
                key={index}
                className="mb-4 text-base leading-[1.8] font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

Page.displayName = "PaymentOptionsPage";

export default Page;
