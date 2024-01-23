/* eslint-disable @next/next/no-img-element */
'use client';

import { Icons } from '@/components/icons';
import { InputWithButton } from '@/components/input-with-button';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { navConfig } from '@/config/nav';
import { images } from '@/data/hero-section';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

//TODO: replace web `<img />` tag with `<Image />` next/image tag
export default function Home() {
  const plugin1 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const plugin2 = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <React.Fragment>
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-[500px]">
              <div className="w-full h-full relative bg-blend-screen bg-opacity-50 bg-gray-500/5"></div>
              <img
                src={images[0].src}
                alt={images[0].alt}
                className={
                  'w-full h-full object-cover object-center absolute top-0 left-0 aspect-square'
                }
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                <p className="mb-4 leading-10 font-bold text-white drop-shadow text-4xl">
                  We Use Research For Illumination!
                </p>
                <InputWithButton />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[500px]">
              <div className="w-full h-full relative bg-blend-screen bg-opacity-50 bg-gray-700/5"></div>
              <img
                src={images[1].src}
                alt={images[1].alt}
                className={
                  'w-full h-full object-cover object-center absolute top-0 left-0 aspect-square'
                }
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                <p className="mb-4 leading-10 font-bold text-white text-4xl">
                  What we relevant is signifcant!
                </p>
                <Button variant="secondary" size="lg">
                  Connect With US
                </Button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
      <section className="bg-gray-100">
        <section className="container flex flex-col lg:gap-2 md:flex-row justify-center px-4 pt-4">
          <div className="relative h-[700px] z-0">
            <img
              src="https://placehold.co/400/orange/white/png"
              alt="loerum ispum"
              className={
                'mb-4 w-[80%] h-[400px] object-cover object-center aspect-square'
              }
            />
            <img
              src="https://placehold.co/400/red/white/png"
              alt="loerum ispum"
              className={
                'mb-6 absolute -z-10 bottom-0 right-0 w-[80%] h-[400px] object-cover object-center aspect-square'
              }
            />
          </div>
          <PageHeader className="flex-1">
            <PageHeaderHeading>Introduction</PageHeaderHeading>
            <PageHeaderDescription className="mb-4">
              Expert Market Insights is a conscientious organization and a
              global trailblazer in market research, business analytics, and
              advisory services. We produce sophisticated and informative
              reports designed to assist you in transforming your business,
              refining your approach, and making bold decisions. Our team of
              analysts at Expert Market Insights delivers accurate market
              surveys, along with trendsetting and cutting-edge industry
              reports, offering comprehensive information on both leading and
              niche company profiles.
            </PageHeaderDescription>
            <PageHeaderDescription className="mb-4">
              With a focus on meeting our clients' needs, we analyse drawbacks,
              prospects, conditions, and valuations, employing well-established
              methodologies and seasoned skills. This ensures our patrons
              experience innovative solutions and achieve desired outcomes.
            </PageHeaderDescription>
            <PageHeaderDescription className="mb-6">
              <strong>
                We consider beyond the conventional boundaries of the market.
              </strong>
              <br />
              "Data, data everywhere, yet we find ourselves immersed in an
              abundance of information."
            </PageHeaderDescription>
            <PageHeaderDescription className="mb-4">
              At Expert Market Insights, we generate exceptional value for our
              clients by introducing ground-breaking opportunities for them in
              the global market. Our reports encompass a wide range of essential
              industries, and we continuously update our database to provide our
              clients with swift access to the inventory.
            </PageHeaderDescription>
            <PageHeaderDescription className="mb-4">
              Leveraging the expertise of our Subject Matter Experts (SMEs), we
              have successfully guided businesses worldwide with our market
              research reports and are strongly positioned to spearhead digital
              transformations. In conclusion, we consider it our duty to ensure
              our clients' success because their triumph reflects positively on
              us as well.
            </PageHeaderDescription>
          </PageHeader>
        </section>
      </section>
      <section>
        <div className="container">
          <div className="heading-section mb-5 mt-3 mt-lg-0">
            <h2 className="mb-3 text-center font-extrabold text-3xl text-[#5539f3]">
              Industries
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
            {navConfig.sidebarNav[1].items.map((item) => (
              <Link href={item.href!} key={item.href}>
                <div className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground">
                  <h6 className="bg-[#5539f3] text-white text-xl p-2 h-11  w-14 mx-auto rounded-[50%]">
                    <Icons.factory className="m-auto mb-3 h-6 w-6 text-white" />
                  </h6>
                  <p className="text-base text-center mb-4">
                    <strong>{item.title}</strong>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="container">
        <h2 className="mb-8 text-center text-3xl">
          <strong>Latest Reports</strong>
        </h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-center">
          <Carousel
            opts={{
              align: 'start',
            }}
            plugins={[plugin1.current]}
            orientation="vertical"
            className="w-full max-w-xs"
          >
            <CarouselContent className="-mt-1 h-[200px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pt-1 md:basis-1/2">
                  <Link href="#">
                    <p className="p-1 text-[#5539f3] hover:text-cyan-500">
                      <strong>
                        Global Teleradiology Market Size, Trend & Forecast to
                        2031 <span>__{index}__</span>
                      </strong>
                    </p>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
              <CarouselNext /> */}
          </Carousel>
          <Carousel
            opts={{
              align: 'start',
            }}
            plugins={[plugin2.current]}
            orientation="vertical"
            className="w-full max-w-xs"
          >
            <CarouselContent className="-mt-1 h-[200px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pt-1 md:basis-1/2">
                  <Link href="#">
                    <p className="p-1 text-[#5539f3] hover:text-cyan-500">
                      <strong>
                        Global Teleradiology Market Size, Trend & Forecast to
                        2031 <span>__{index}__</span>
                      </strong>
                    </p>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
              <CarouselNext /> */}
          </Carousel>
        </div>
      </section>
    </React.Fragment>
  );
}
