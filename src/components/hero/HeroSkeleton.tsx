import { Skeleton } from "@/components/ui/skeleton";

export const HeroSkeleton = () => {
  return (
    <div className="text-center px-4 space-y-8 max-w-4xl mx-auto animate-fade-up">
      {/* Title Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-16 md:h-20 lg:h-24 w-3/4 mx-auto rounded-lg" />
        <Skeleton className="h-16 md:h-20 lg:h-24 w-2/3 mx-auto rounded-lg" />
      </div>

      {/* Subtitle Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-8 md:h-10 w-5/6 mx-auto rounded-lg" />
        <Skeleton className="h-8 md:h-10 w-4/6 mx-auto rounded-lg" />
      </div>

      {/* Buttons Skeleton */}
      <div className="flex justify-center space-x-6">
        <Skeleton className="h-[72px] w-[180px] rounded-lg" />
        <Skeleton className="h-[72px] w-[180px] rounded-lg" />
      </div>
    </div>
  );
};