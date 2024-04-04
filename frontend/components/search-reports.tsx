import { images } from "@/data/layout";
import Image from "next/image";
import { Suspense } from "react";
import { SearchReportsForm } from "./search-reports-form";
import { Skeleton } from "./ui/skeleton";

function SearchBarFallback() {
  return <Skeleton className="h-16 w-full rounded-xl" />;
}

export function SearchReports() {
  return (
    <div className="relative h-32">
      <div className="w-full h-full relative bg-blend-screen bg-opacity-50 bg-gray-500/5"></div>
      <Image
        src={images.banner.src}
        alt="about banner"
        width={0}
        height={0}
        sizes="100vw"
        className={
          "w-full h-full object-cover object-center absolute top-0 left-0 aspect-square"
        }
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center min-w-72">
        <SearchReportsForm />
      </div>
    </div>
  );
}

export function SearchReportsWithSuspense() {
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <SearchReports />
    </Suspense>
  );
}
