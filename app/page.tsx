/* eslint-disable @next/next/no-img-element */
'use client';

import { Icons } from '@/components/icons';
import { InputWithButton } from '@/components/input-with-button';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { navConfig } from '@/config/nav';
import Link from 'next/link';
import React from 'react';
import { images } from '@/data/home-page';
import Image from 'next/image';
import { Testimonies } from '@/components/testimonies';

export default function Home() {
  return (
    <React.Fragment>
      <div className="relative h-[500px]">
        <div className="w-full h-full relative bg-blend-screen bg-opacity-50 bg-gray-500/5"></div>
        <img
          src={images.header.src}
          alt={images.header.alt}
          className={
            'w-full h-full object-cover object-center absolute top-0 left-0 aspect-square'
          }
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <p className="mb-4 leading-10 font-semibold  drop-shadow text-4xl">
            We Use Research For Illumination!
          </p>
          <InputWithButton title="Search" />
        </div>
      </div>
      <section className="bg-gray-100">
        <section className="container flex flex-col lg:gap-2 md:flex-row justify-center pl-12 pr-4 pt-8">
          <div className="relative h-[1000px] z-0">
            <img
              src={images.introduction1.src}
              alt={images.introduction1.alt}
              className={
                'mb-4 w-[80%] h-[500px] object-cover object-center aspect-square'
              }
            />
            <img
              src={images.introduction2.src}
              alt={images.introduction2.alt}
              className={
                'mb-6 absolute -z-10 bottom-10 right-0 w-[80%] h-[500px] object-cover object-center aspect-square'
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
              With a focus on meeting our clients needs, we analyse drawbacks,
              prospects, conditions, and valuations, employing well-established
              methodologies and seasoned skills. This ensures our patrons
              experience innovative solutions and achieve desired outcomes.
            </PageHeaderDescription>
            <PageHeaderDescription className="mb-6">
              <strong>
                We consider beyond the conventional boundaries of the market.
              </strong>
              <br />
              <span>
                Data, data everywhere, yet we find ourselves immersed in an
                abundance of information.
              </span>
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
              our clients success because their triumph reflects positively on
              us as well.
            </PageHeaderDescription>
          </PageHeader>
        </section>
      </section>
      <section>
        <div className="container py-12 px-6">
          <div className="heading-section mb-5 mt-3 mt-lg-0">
            <h2 className="mb-3 text-center font-extrabold text-3xl text-expertmarketinsight">
              Industries
            </h2>
          </div>
          <div className="grid auto-rows-[1fr] gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 grid-flow-row mb-4 max-w-xs md:max-w-3xl m-auto">
            {navConfig.sidebarNav[1].items.map((item) => {
              const Icon = Icons[item.icon!];
              return (
                <Link href={item.href!} key={item.href} className="grid">
                  <div className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-4 ">
                    <div className="flex flex-col items-center justify-center hover:text-accent-foreground hover:transform hover:scale-105 hover:lg:scale-110 transition-all">
                      <h6 className="bg-expertmarketinsight text-white text-xl p-2 h-11  w-14 mx-auto rounded-[50%] hover:bg-blue-500 transition-all delay-0 transform ease-in-out hover:duration-2000 hover:rotate-360">
                        <Icon className="m-auto mb-3 h-6 w-6 text-white" />
                      </h6>
                      <p className="text-base text-center mb-4">
                        <strong>{item.title}</strong>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-slate-300">
        <div className="container grid place-items-center md:grid-cols-2 lg:grid-cols-4 py-16 px-10 md:flex-row flex-wrap gap-16">
          <div>
            <div className="text-expertmarketinsight mb-2 text-5xl font-bold">
              210,123
            </div>
            <div className="text-expertmarketinsight uppercase tracking-widest">
              REPORTS PUBLISHED
            </div>
          </div>
          <div>
            <div className="text-expertmarketinsight mb-2 text-5xl font-bold">
              1,123
            </div>
            <div className="text-expertmarketinsight uppercase tracking-widest">
              CLIENT INQUIRIES
            </div>
          </div>
          <div>
            <div className="text-expertmarketinsight mb-2 text-5xl font-bold">
              10,123
            </div>
            <div className="text-expertmarketinsight uppercase tracking-widest">
              SATISFIED CLIENTS
            </div>
          </div>
          <div>
            <div className="text-expertmarketinsight mb-2 text-5xl font-bold">
              510
            </div>
            <div className="text-expertmarketinsight uppercase tracking-widest">
              CUSTOM STUDIES
            </div>
          </div>
        </div>
      </section>
      <Testimonies />
      {/* <section className="container">
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
                    <p className="p-1 text-expertmarketinsight hover:text-cyan-500">
                      <strong>
                        Global Teleradiology Market Size, Trend & Forecast to
                        2031 <span>__{index}__</span>
                      </strong>
                    </p>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
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
                    <p className="p-1 text-expertmarketinsight hover:text-cyan-500">
                      <strong>
                        Global Teleradiology Market Size, Trend & Forecast to
                        2031 <span>__{index}__</span>
                      </strong>
                    </p>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section> */}
    </React.Fragment>
  );
}
