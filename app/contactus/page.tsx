import { Icons } from '@/components/icons';
import { InputWithButton } from '@/components/input-with-button';
import { LeadGenerateForm } from '@/components/lead-generate-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import { images } from '@/data/layout';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactUsPage() {
  return (
    <>
      <div>
        <div className="relative h-[100px]">
          <div className="w-full h-full relative bg-blend-screen bg-opacity-50 bg-gray-500/5"></div>
          <Image
            src={images.banner.src}
            width={100}
            height={100}
            alt="about banner"
            className={
              'w-full h-full object-cover object-center absolute top-0 left-0 aspect-square'
            }
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            <InputWithButton className="min-w-[max-content]" />
          </div>
        </div>
        <div className="bg-[#413c69] px-8 py-4 text-white gap-2 flex items-center">
          <span>
            <Link href="/" className="text-[#b0e0e6]">
              HOME
            </Link>
          </span>
          <span>/</span>
          <span>CONTACT US</span>
        </div>
      </div>
      <div className="bg-gray-100 mb-8">
        <div className="container py-8 grid md:grid-cols-2">
          <div className="bg-white p-4 md:p-3">
            <h2 className="text-3xl mb-8 font-bold leading-8 text-center">
              Have Questions? Reach Out to Us
            </h2>
            {/* <div> */}
            <LeadGenerateForm className="place-items-center text-black" />
            {/* </div> */}
          </div>
          <Card
            className="bg-[#3ba7e0] text-white p-4 md:p-3 rounded-none"
            style={{ overflowWrap: 'anywhere' }}
          >
            <CardHeader className="pb-4 p-1 md:p-6">
              <CardTitle className="text-2xl font-bold">
                Let&apos;s get in touch
              </CardTitle>
              <CardDescription className="text-white">
                We&apos;re open for any suggestion or just to have a chat
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-1 md:p-6">
              <div className="flex items-center space-x-2">
                <div className="border-2 border-gray-300 p-2 rounded-[50%] flex items-center">
                  <Icons.map className="h-6 w-6 text-white" />
                </div>
                <span>{siteConfig.address}</span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <div className="border-2 border-gray-300 p-2 rounded-[50%] flex items-center">
                    <Icons.phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p>Phone:</p>
                    <p>
                      <a href={siteConfig.mobile} title="The Research Insights">
                        {siteConfig.mobile}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="border-2 border-gray-300 p-2 rounded-[50%] flex items-center">
                  <Icons.send className="h-6 w-6 text-white" />
                </div>
                <span>
                  Email:
                  <a
                    href={`mailto:${siteConfig.email}`}
                    title="The Research Insights"
                  >
                    {siteConfig.email}
                  </a>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
