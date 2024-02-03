import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export function Testimonies() {
  return (
    <div className="bg-gradient-to-br from-expertmarketinsight to-[#375274] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-center uppercase tracking-widest font-semibold text-xs text-white">
          TESTIMONIES
        </p>
        <h4 className="text-center text-3xl font-bold text-white mb-12">
          Happy Clients & Feedbacks
        </h4>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          // animation="ease"
          // autoplay
          className="overflow-hidden w-full max-w-xl lg:max-w-screen-xl m-auto"
          // responsive={{
          //   0: {
          //     items: 1,
          //   },
          //   768: {
          //     items: 2,
          //   },
          //   1024: {
          //     items: 3,
          //   },
          // }}
          // transitionDuration={500}
        >
          <CarouselContent className="items-stretch">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="flex-shrink-0 w-full px-4">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <QuoteIcon className="text-[#3b82f6] text-3xl mb-4" />
                  <p className="text-gray-600 mb-4">
                    Expert Market Insights delivers profound market
                    understanding. Their reports are meticulous, offering
                    actionable insights for strategic business growth.
                  </p>
                  <p className="font-semibold">Johan S.</p>
                  <p className="text-sm text-gray-500">Director</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="flex-shrink-0 w-full px-4">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <QuoteIcon className="text-[#3b82f6] text-3xl mb-4" />
                  <p className="text-gray-600 mb-4">
                    Expert Market Insights: Unparalleled depth, precise
                    insights. A game-changer in strategic marketing decisions.
                    Highly recommended!
                  </p>
                  <p className="font-semibold">Switty Adams</p>
                  <p className="text-sm text-gray-500">Marketing Head</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="flex-shrink-0 w-full px-4">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <QuoteIcon className="text-[#3b82f6] text-3xl mb-4" />
                  <p className="text-gray-600 mb-4">
                    Expert Market Insights delivers unparalleled marketing
                    research reports—comprehensive, meticulously researched, and
                    instrumental in shaping successful strategies.
                  </p>
                  <p className="font-semibold">Rodger Marvel</p>
                  <p className="text-sm text-gray-500">
                    Senior Marketing Manager
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="flex-shrink-0 w-full px-4">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <QuoteIcon className="text-[#3b82f6] text-3xl mb-4" />
                  <p className="text-gray-600 mb-4">
                    In a crowded market research landscape, Expert Market
                    Insights shines bright. Their reports are not just data;
                    they are strategic assets. Trustworthy, insightful, and
                    essential for any business aiming to stay ahead in todays
                    dynamic markets.
                  </p>
                  <p className="font-semibold">Matthew Hobert</p>
                  <p className="text-sm text-gray-500">Vice President</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="flex-shrink-0 w-full px-4">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <QuoteIcon className="text-[#3b82f6] text-3xl mb-4" />
                  <p className="text-gray-600 mb-4">
                    Expert Market Insights: Unmatched precision in marketing
                    research. Their reports deliver insights with precision and
                    clarity.
                  </p>
                  <p className="font-semibold">Scott Henry</p>
                  <p className="text-sm text-gray-500">
                    Chief Executive Officer
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        {/* <div className="flex flex-wrap overflow-hidden">
          <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <QuoteIcon className="text-[#3b82f6] text-3xl mb-4" />
              <p className="text-gray-600 mb-4">
                Expert Market Insights delivers profound market understanding.
                Their reports are meticulous, offering actionable insights for
                strategic business growth.
              </p>
              <p className="font-semibold">Johan S.</p>
              <p className="text-sm text-gray-500">Director</p>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <QuoteIcon className="text-[#3b82f6] text-3xl mb-4" />
              <p className="text-gray-600 mb-4">
                Expert Market Insights: Unparalleled depth, precise insights. A
                game-changer in strategic marketing decisions. Highly
                recommended!
              </p>
              <p className="font-semibold">Switty Adams</p>
              <p className="text-sm text-gray-500">Marketing Head</p>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <QuoteIcon className="text-[#3b82f6] text-3xl mb-4" />
              <p className="text-gray-600 mb-4">
                Expert Market Insights delivers unparalleled marketing research
                reports—comprehensive, meticulously researched, and instrumental
                in shaping successful strategies.
              </p>
              <p className="font-semibold">Rodger Marvel</p>
              <p className="text-sm text-gray-500">Senior Marketing Manager</p>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <QuoteIcon className="text-[#3b82f6] text-3xl mb-4" />
              <p className="text-gray-600 mb-4">
                In a crowded market research landscape, Expert Market Insights
                shines bright. Their reports are not just data; they are
                strategic assets. Trustworthy, insightful, and essential for any
                business aiming to stay ahead in today's dynamic markets.
              </p>
              <p className="font-semibold">Matthew Hobert</p>
              <p className="text-sm text-gray-500">Vice President</p>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <QuoteIcon className="text-[#3b82f6] text-3xl mb-4" />
              <p className="text-gray-600 mb-4">
                Expert Market Insights: Unmatched precision in marketing
                research. Their reports deliver insights with precision and
                clarity.
              </p>
              <p className="font-semibold">Scott Henry</p>
              <p className="text-sm text-gray-500">Chief Executive Officer</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

function QuoteIcon(props: React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}
