import { getImagesWithPlaceholders } from "@/app/actions";
import { ImageKeys } from "@/app/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { images } from "@/data/services";
import Image from "next/image";

export default async function ServicesPage() {
  const imagesWithPlaceholders = await getImagesWithPlaceholders([
    {
      key: ImageKeys.BANNER1,
      source: images.banner1.src,
    },
    {
      key: ImageKeys.BANNER2,
      source: images.banner2.src,
    },
    {
      key: ImageKeys.BANNER3,
      source: images.banner3.src,
    },
  ]);
  return (
    <div className="container p-0 md:p-2 my-8 grid gap-8 lg:gap-4">
      <Card>
        <CardHeader className="bg-[#413c69]">
          <CardTitle className="text-white font-bold text-2xl">
            Syndicated Research
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-2 p-0">
          <div className="relative h-[240px] lg:h-auto">
            <Image
              sizes="100vw"
              placeholder="blur"
              alt="about banner"
              className={
                "w-full h-full absolute top-0 left-0 object-cover object-center"
              }
              {...imagesWithPlaceholders.BANNER1?.img}
              blurDataURL={imagesWithPlaceholders.BANNER1!.base64}
            />
          </div>
          <p className="px-4 py-2 text-xl leading-8">
            Expert Market Insights provides an extensive array of market reports
            across numerous industrial sectors. Our real-time support includes
            meticulous analysis and detailed segmentation at a micro level,
            readily accessible to our clients. We assist our clients in finding
            research that best fits their needs. Additionally, we offer the
            option to customize a syndicated report or create a comprehensive
            custom market research study. Syndicated market research is a
            business service that delivers comprehensive insights into the
            overall market, aiding clients in market strategy and brand
            positioning.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="bg-[#413c69]">
          <CardTitle className="text-white font-bold text-2xl">
            SUBJECT MATTER EXPERTISE ZONE
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-2 p-0">
          <p className="px-4 py-2 text-xl leading-8">
            We acknowledge the significant impact and positive changes that
            effective consulting can bring to any business. Our consulting and
            advisory services offer a comprehensive, research-based perspective
            crucial for enhancing business intelligence and overcoming market
            challenges. Furthermore, our assistance extends beyond evaluating
            tasks and solutions; we also guide you in anticipating future
            trends. As self-proclaimed Subject Matter Experts, our domain
            specialists adhere to established practices and continually refine
            their skills to offer the best services to both potential and
            existing clients.
          </p>
          <div className="relative h-[240px] lg:h-auto">
            <Image
              sizes="100vw"
              placeholder="blur"
              alt="about banner"
              className={
                "w-full h-full absolute top-0 left-0 object-cover object-center"
              }
              {...imagesWithPlaceholders.BANNER2?.img}
              blurDataURL={imagesWithPlaceholders.BANNER2!.base64}
            />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="bg-[#413c69]">
          <CardTitle className="text-white font-bold text-2xl">
            BESPOKE PROPOSALS
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-2 p-0">
          <div className="relative h-[240px] lg:h-auto bg-gray-50">
            <Image
              sizes="100vw"
              placeholder="blur"
              alt="about banner"
              className={
                "w-full h-full absolute top-0 left-0 object-cover object-center"
              }
              {...imagesWithPlaceholders.BANNER3?.img}
              blurDataURL={imagesWithPlaceholders.BANNER3!.base64}
            />
          </div>
          <p className="px-4 py-2 text-xl leading-8">
            We provide tailor-made and highly adaptable research studies,
            ensuring that you receive information precisely suited to make
            well-informed strategic organizational decisions. At Expert Market
            Insights, we offer fully customized statistical reports aligned with
            clients business objectives through a thorough evaluation of the
            input information. Our elaborate methodologies enable us to deliver
            solutions that are specific to the organization rather than generic
            to the industry. The research procedures we employ undergo rigorous
            analysis and adhere to a strict protocol. Furthermore, to prevent
            information recycling, the reports undergo regular updates.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
