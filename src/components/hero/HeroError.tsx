import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface HeroErrorProps {
  onRetry: () => void;
}

export const HeroError = ({ onRetry }: HeroErrorProps) => {
  return (
    <Alert variant="destructive" className="m-4">
      <AlertTitle>Error Loading Content</AlertTitle>
      <AlertDescription className="mt-2">
        <p className="mb-4">There was an error loading the content. Please try again.</p>
        <Button 
          variant="outline" 
          onClick={onRetry}
          className="flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Retry
        </Button>
      </AlertDescription>
    </Alert>
  );
};