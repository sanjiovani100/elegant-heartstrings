import { Skeleton } from "@/components/ui/skeleton";

export const HeroSkeleton = () => {
  return (
    <div className="text-center px-4 space-y-8 max-w-4xl mx-auto">
      <Skeleton className="h-24 md:h-32 lg:h-40 w-3/4 mx-auto" />
      <Skeleton className="h-12 md:h-16 w-2/3 mx-auto" />
      <div className="space-x-6 flex justify-center">
        <Skeleton className="h-14 w-32" />
        <Skeleton className="h-14 w-32" />
      </div>
    </div>
  );
};