import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface HeroErrorProps {
  onRetry: () => void;
}

export const HeroError = ({ onRetry }: HeroErrorProps) => {
  return (
    <div className="max-w-lg mx-auto px-4">
      <Alert variant="destructive" className="animate-fade-up">
        <AlertTitle className="text-lg font-semibold mb-2">
          Error Loading Content
        </AlertTitle>
        <AlertDescription className="space-y-4">
          <p>
            We encountered an error while loading the content. Please try again or contact support if the problem persists.
          </p>
          <Button 
            variant="outline" 
            onClick={onRetry}
            className="flex items-center gap-2 mt-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  );
};