'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

export function WeAreTrustedBy() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="container max-w-md mb-4">
      <div className="text-center px-4 mb-2">
        <p className="text-3xl font-bold leading-6">We Are Trusted By</p>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full m-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="max-w-2xl">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className=" border-2 h-36">
              <div className="p-1">
                <span className="text-4xl font-semibold">
                  Image Placeholder: {index + 1}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
