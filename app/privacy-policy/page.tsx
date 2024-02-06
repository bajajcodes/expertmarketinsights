import { HeroHeader } from "@/components/hero-header";
import { privacyPolicy } from "@/data/policies";

const Page = () => {
  return (
    <>
      <HeroHeader title="PRIVACY POLICY" />
      <div className="container max-w-screen-xl py-6 px-12">
        <ul className="list-disc">
          {privacyPolicy.map((item, index) => (
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

Page.displayName = "PrivacyPolicyPage";

export default Page;
