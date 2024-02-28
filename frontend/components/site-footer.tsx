import { siteConfig } from '@/config/site';
import { InputWithButton } from './input-with-button';
import { LeadGenerateForm } from './lead-generate-form';
import { SocialLinks } from './social-links';
import { navConfig } from '@/config/nav';
import Link from 'next/link';

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
        <div className="container">
          <div className="mb-8 grid md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <p className="uppercase text-[#3ba7e0] font-bold text-base underline">
                  COMPANY ADDRESS
                </p>
                <p className="text-white max-w-52">{siteConfig.address}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="uppercase text-[#3ba7e0] font-bold text-base underline">
                POLICIES
              </p>
              <ul>
                {navConfig.policiesNav.map((item) => (
                  <li
                    key={item.href}
                    className="text-white hover:text-[#3ba7e0] py-1"
                  >
                    <Link href={item.href!}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="uppercase text-[#3ba7e0] font-bold text-base underline">
                HELP DESK
              </p>
              <ul>
                {navConfig.helpdeskNav.map((item) => (
                  <li
                    key={item.href}
                    className="text-white hover:text-[#3ba7e0] py-1"
                  >
                    <Link href={item.href!}>{item.title}</Link>
                  </li>
                ))}
              </ul>{' '}
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
