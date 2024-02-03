import { siteConfig } from '@/config/site';
import { InputWithButton } from './input-with-button';
import { LeadGenerateForm } from './lead-generate-form';
import { SocialLinks } from './social-links';

export function SiteFooter() {
  return (
    <footer className="text-black">
      <div className=" bg-[#9cdaf5] p-8 flex flex-col md:flex-row md:items-center md:justify-center gap-8">
        <div className="mb-3 md:mb-0 text-2xl font-semibold">
          Subscribe to Our Latest and Trending Market Research
        </div>
        <InputWithButton />
      </div>
      <div className="bg-[#1a1e2c] px-2 py-8 md:px-8 ">
        <div className="container max-w-screen-md m-0">
          <div className="mb-8 grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <p className="uppercase text-[#3ba7e0] font-bold text-base underline">
                  COMPANY ADDRESS
                </p>
                <p className="text-white max-w-52">{siteConfig.address}</p>
              </div>
              {/* <div className="flex flex-col gap-4">
                <p className="uppercase text-[#3ba7e0] font-bold text-base underline">
                  ASIAN INTELLIGENCE CENTRE
                </p>
                <p className="text-white">
                  2nd floor, <br />
                  Arth Vishwa Complex, <br />
                  Lane no-5, Koregaon Park, <br />
                  Pune-411001
                </p>
              </div> */}
            </div>
            <div className="flex flex-col gap-4">
              <p className="uppercase text-[#3ba7e0] font-bold text-base underline">
                FREE CUSTOMIZED REPORT
              </p>
              <div>
                <LeadGenerateForm />
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-col md:flex-row md:items-end">
            <SocialLinks />
            <div className="text-[#3ba7e0] text-base font-bold uppercase">
              COPYRIGHT © 2024 ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
