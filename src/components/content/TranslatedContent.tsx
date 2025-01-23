import { useLanguage } from "@/contexts/LanguageContext";
import { ContentTranslation } from "@/types/content";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
  const { currentLanguage, isChangingLanguage } = useLanguage();
  
  if (showLoader || isChangingLanguage) {
    return (
      <div className="animate-pulse">
        <Skeleton className={cn("h-4 w-full max-w-[300px]", className)} />
      </div>
    );
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

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentLanguage + contentKey}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {translation?.contentType === 'html' ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <span>{content}</span>
        )}
      </motion.div>
    </AnimatePresence>
  );
};