import { Industries } from "@/components/industries";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { SearchReportsForm } from "@/components/search-reports-form";
import { Stats } from "@/components/stats";
import { Testimonies } from "@/components/testimonies";
import { images } from "@/data/home-page";
import Image from "next/image";
import React from "react";
import { getImagesWithPlaceholders } from "./actions";
import { ImageKeys } from "./types";

export default async function Home() {
  const imagesWithPlaceholders = await getImagesWithPlaceholders([
    {
      key: ImageKeys.HEADER,
      source: images.header.src,
    },
    {
      key: ImageKeys.INTRODUCTION1,
      source: images.introduction1.src,
    },
    {
      key: ImageKeys.INTRODUCTION2,
      source: images.introduction2.src,
    },
  ]);

  return (
    <React.Fragment>
      <div className="relative w-full h-[500px]">
        <Image
          alt={images.header.alt}
          className="object-cover absolute w-full h-full inset-0"
          placeholder="blur"
          {...imagesWithPlaceholders.HEADER!.img}
          blurDataURL={imagesWithPlaceholders.HEADER!.base64}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <p className="mb-4 leading-10 font-semibold drop-shadow text-4xl text-center">
            We Use Research For Illumination!
          </p>
          <SearchReportsForm />
        </div>
      </div>
      <section className="bg-gray-100">
        <section className="container flex flex-col lg:gap-2 md:flex-row justify-center pl-12 pr-4 pt-8">
          <div className="relative h-[1000px] z-0">
            <Image
              alt={images.introduction1.alt}
              sizes={"100vw"}
              placeholder="blur"
              className={
                "mb-4 w-[80%] h-[500px] object-cover object-center aspect-square"
              }
              {...imagesWithPlaceholders.INTRODUCTION1!.img}
              blurDataURL={imagesWithPlaceholders.INTRODUCTION1!.base64}
            />
            <Image
              alt={images.introduction2.alt}
              sizes={"100vw"}
              placeholder="blur"
              className={
                "mb-6 absolute -z-10 bottom-10 right-0 w-[80%] h-[500px] object-cover object-center aspect-square"
              }
              {...imagesWithPlaceholders.INTRODUCTION2!.img}
              blurDataURL={imagesWithPlaceholders.INTRODUCTION2!.base64}
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
      <Industries />
      <Stats />
      <Testimonies />
    </React.Fragment>
  );
}
