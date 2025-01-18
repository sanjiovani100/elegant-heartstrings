import { Loader2 } from "lucide-react";

export const LoadingState = () => {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-fashionista-red" />
    </div>
  );
};