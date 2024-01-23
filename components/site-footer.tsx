import { navConfig } from '@/config/nav';
import Link from 'next/link';
import { Button } from './ui/button';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { InputWithButton } from './input-with-button';
import { WeAreTrustedBy } from './we-are-trusted-by-carousel';

export function SiteFooter() {
  return (
    <>
      <WeAreTrustedBy />
      <div className=" bg-[#9cdaf5] p-8 flex flex-col md:flex-row md:items-center md:justify-center gap-8">
        <div className="mb-3 md:mb-0 text-2xl font-semibold">
          Subscribe to Our Latest and Trending Market Research
        </div>
        <InputWithButton />
      </div>
      <footer className="bg-[#1a1e2c] px-2 py-8 md:px-8 ">
        <div className="container max-w-screen-xl">
          <div className="flex flex-col lg:items-center lg:justify-between gap-4  md:flex-row mb-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-8">
                <p className="uppercase text-[#3ba7e0] font-bold text-base underline">
                  COMPANY ADDRESS
                </p>
                <p className="text-white">
                  1331 Johnson Dr, Buffalo, Grove. <br />
                  illinios, Chicago, USA.
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <p className="uppercase text-[#3ba7e0] font-bold text-base underline">
                  ASIAN INTELLIGENCE CENTRE
                </p>
                <p className="text-white">
                  2nd floor, <br />
                  Arth Vishwa Complex, <br />
                  Lane no-5, Koregaon Park, <br />
                  Pune-411001
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
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
            <div className="flex flex-col gap-8">
              <p className="uppercase text-[#3ba7e0] font-bold text-base underline">
                Help Desk
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
              </ul>
            </div>
          </div>
          <div className="flex gap-4 flex-col  lg:items-end lg:justify-between lg:flex-row">
            <div className="flex items-center space-x-2">
              <Button
                variant="link"
                size="icon"
                className="text-black bg-white"
              >
                <span>
                  <Facebook className="h-4 w-4" />
                </span>
              </Button>
              <Button
                variant="link"
                size="icon"
                className="text-black bg-white"
              >
                <span>
                  <Twitter className="h-4 w-4" />
                </span>
              </Button>
              <Button
                variant="link"
                size="icon"
                className="text-black bg-white"
              >
                <span>
                  <Linkedin className="h-4 w-4" />
                </span>
              </Button>
            </div>
            <div className="text-[#3ba7e0] text-base font-bold mb-8 lg:mb-0 uppercase">
              COPYRIGHT © 2024 ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
