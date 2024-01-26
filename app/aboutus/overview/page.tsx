/* eslint-disable @next/next/no-img-element */
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function OverviewPage() {
  return (
    <div className="mb-8">
      <div className="grid md:gap-8 md:grid-cols-[384px_1fr] py-8 md:px-8">
        <div className="relative h-[400px] md:h-auto md:max-w-sm">
          <div className="w-full h-full relative bg-blend-screen bg-opacity-50 bg-gray-500/5"></div>
          <img
            src="https://www.theresearchinsights.com/images/overview.webp"
            alt="about banner"
            className={
              'w-full h-full object-cover object-center absolute top-0 left-0 aspect-square'
            }
          />
        </div>
        <PageHeader className="lg:py-0">
          <PageHeaderHeading className='md:text-4xl'>Overview</PageHeaderHeading>
          <PageHeaderDescription className="text-left text-neutral-700">
            Expert Market Insights stands at the forefront of global data
            analytics, serving as a vital resource for addressing inquiries and
            gaining insights into the intricate interplay of internal and
            external factors influencing market dynamics. Through innovative,
            descriptive, and comprehensive market research, we offer revelations
            that align with your individual and organizational goals. Our aim is
            to empower you to make well-informed, profound, and advantageous
            decisions, capitalizing on emerging trends, advancements,
            estimations, and opportunities in the market.
          </PageHeaderDescription>
          <PageHeaderDescription className="text-left text-neutral-700">
            Our reports serve as the foundation for sustained business growth,
            providing fresh insights and solutions to effectively navigate
            various industry challenges and scenarios. The precision of our data
            is underpinned by relevant supporting information, employing a
            systematic approach and rigorous validation through experienced
            skills and verified methodologies. We equip our clients to analyze
            and foresee their business needs, enabling insightful
            decision-making that yields a significant impact. Thus, we
            contribute value to our clients by aiding in their customer
            management processes in ways that benefit the organization and its
            stakeholders.
          </PageHeaderDescription>
        </PageHeader>
      </div>
      <div className="md:container">
        <h3 className="text-2xl lg:text-3xl font-bold text-center leading-6 mb-6 md:mb-4">
          A Ride Through Our Uniqueness
        </h3>
        {/* md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] */}
        <div className="md:grid md:gap-4">
          <Card className="hover:drop-shadow hover:shadow-blue-400 hover:shadow-lg text-center mb-4 md:mb-0">
            <CardHeader>
              <CardTitle>Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We aim to accomplish the pinnacle and a unique space in market
                research and business intelligence.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:drop-shadow hover:shadow-blue-400 hover:shadow-lg text-center mb-4 md:mb-0">
            <CardHeader>
              <CardTitle>Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We want to attain customer fulfilment, be a forefront in the
                industry and become the firmest decision support system for our
                clients’.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:drop-shadow hover:shadow-blue-400 hover:shadow-lg text-center mb-4 md:mb-0">
            <CardHeader>
              <CardTitle>Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                As a values-driven organization, we prioritize client
                confidentiality, innovation, timely report delivery,
                satisfaction, and uphold excellence and integrity in all aspects
                of our work. These favorable norms guide our approach and
                commitment.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:drop-shadow hover:shadow-blue-400 hover:shadow-lg text-center mb-4 md:mb-0">
            <CardHeader>
              <CardTitle>Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                At The Research Insights, we believe that perfection is not
                attainable, but if we chase for it, we can catch excellence.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:drop-shadow hover:shadow-blue-400  hover:shadow-lg text-center col-span-2 mb-4 md:mb-0">
            <CardHeader>
              <CardTitle>Integrity</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The team of Research Insights, does the right thing even when no
                one is watching them; that’s how we define our integrity.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
