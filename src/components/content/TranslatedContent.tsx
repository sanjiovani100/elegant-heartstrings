import { useLanguage } from "@/contexts/LanguageContext";
import { ContentTranslation } from "@/types/content";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

interface TranslatedContentProps {
  translations: ContentTranslation[];
  contentKey: string;
  defaultValue?: string;
  className?: string;
  showLoader?: boolean;
  isError?: boolean;
  errorMessage?: string;
}

export const TranslatedContent: React.FC<TranslatedContentProps> = ({
  translations,
  contentKey,
  defaultValue = '',
  className,
  showLoader = false,
  isError = false,
  errorMessage,
}) => {
  const { currentLanguage } = useLanguage();
  
  if (showLoader) {
    return <Skeleton className={cn("h-4 w-full max-w-[300px]", className)} />;
  }

  if (isError) {
    return (
      <Alert variant="destructive" className={className}>
        <AlertDescription>
          {errorMessage || 'Error loading translation'}
        </AlertDescription>
      </Alert>
    );
  }

  const translation = translations.find(t => t.key === contentKey);
  const content = translation ? translation[currentLanguage] : defaultValue;

  if (!content) {
    return <>{defaultValue || contentKey}</>;
  }

  if (translation?.contentType === 'html') {
    return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return <span className={className}>{content}</span>;
};