import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="grid md:grid-cols-[1fr 3fr] space-y-3">
      <Skeleton className="h-36 w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-96 w-full" />
      </div>
    </div>
  );
}
