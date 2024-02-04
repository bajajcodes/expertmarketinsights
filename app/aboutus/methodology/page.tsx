/* eslint-disable @next/next/no-img-element */
'use client';

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
import { Separator } from '@radix-ui/react-separator';

export default function OverviewPage() {
  return (
    <div className="my-8">
      <PageHeader className="lg:py-0 items-start md:m-0 md:mb-4">
        <PageHeaderHeading className="md:text-4xl text-left ">
          Research Methodology
        </PageHeaderHeading>
        <Separator className="w-[124px] h-1 bg-orange-500" />
        <PageHeaderDescription className="font-bold text-left text-neutral-700">
          &quot;All we possess is the power of research!&quot;
        </PageHeaderDescription>
        <PageHeaderDescription className="text-left text-neutral-700">
          Expert Market Insights achieves top-notch outcomes by utilizing a
          variety of resources for clients. It broadens its global presence by
          identifying optimal markets, allowing clients to benefit from the
          reliability we offer.
        </PageHeaderDescription>
        <PageHeaderDescription className="text-left text-neutral-700">
          Our research methodology entails a superior combination of primary and
          secondary approaches, with the key steps outlined below:
        </PageHeaderDescription>
      </PageHeader>

      <Card className="border-none shadow-none">
        <CardContent className="max-w-4xl list-disc list-inside">
          <ul className="grid gap-6 list-disc list-inside">
            <li className="flex items-center justify-between space-x-2">
              <div className="flex flex-col space-y-1">
                <span>Primary Research</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Following the conclusion of the initial stage, a thorough
                  analysis of the gathered data is conducted by comparing
                  primary research with secondary sources. Subsequently, the
                  research team engages in interviews with industry
                  professionals to observe evolving trends.
                </span>
              </div>
            </li>
            <li className="flex items-center justify-between space-x-2">
              <div className="flex flex-col space-y-1">
                <span>Secondary Research</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  The groundwork is laid by collaborating with reputable online
                  sources, magazines, and industry trade groups and associations
                  heavily involved in the research field. The Research Insights
                  team then diligently extracts comprehensive market data. This
                  is followed by our in-house documentation service, which
                  assists in further expanding the information gathered.
                </span>
              </div>
            </li>
            <li className="flex items-center justify-between space-x-2">
              <div className="flex flex-col space-y-1">
                <span>Information Analyses</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  In this step, we conduct an analysis and planning process for
                  all the information obtained previously. This phase also
                  involves identifying and addressing any discrepancies observed
                  in the data from various sources.
                </span>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
