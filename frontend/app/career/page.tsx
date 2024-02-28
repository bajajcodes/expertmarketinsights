import { HeroHeader } from "@/components/hero-header";
import { carrer } from "@/data/helpdesk";

const Page = () => {
  return (
    <>
      <HeroHeader title="CAREER" />
      <div className="container max-w-screen-xl py-6 px-12">
        <p className="mb-4 text-base leading-[1.8] font-medium">{carrer}</p>
      </div>
    </>
  );
};

Page.displayName = "CarrerPage";

export default Page;
