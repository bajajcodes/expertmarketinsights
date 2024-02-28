import { HeroHeader } from "@/components/hero-header";
import { disclaimer } from "@/data/policies";

const Page = () => {
  return (
    <>
      <HeroHeader title="DISCLAIMER" />
      <div className="container max-w-screen-xl py-6 px-12">
        <ul className="list-disc">
          {disclaimer.map((item, index) => (
            <li
              key={index}
              className="mb-4 text-base leading-[1.8] font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Page.displayName = "DisclaimerPage";

export default Page;
