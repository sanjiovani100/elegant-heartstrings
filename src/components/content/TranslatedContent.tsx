import { useLanguage } from "@/contexts/LanguageContext";
import { ContentTranslation } from "@/types/content";

interface TranslatedContentProps {
  translations: ContentTranslation[];
  contentKey: string;
  defaultValue?: string;
}

export const TranslatedContent: React.FC<TranslatedContentProps> = ({
  translations,
  contentKey,
  defaultValue = '',
}) => {
  const { currentLanguage } = useLanguage();
  
  const translation = translations.find(t => t.key === contentKey);
  const content = translation ? translation[currentLanguage] : defaultValue;

  if (translation?.contentType === 'html') {
    return <div dangerouslySetInnerHTML={{ __html: content || '' }} />;
  }

  return <>{content}</>;
};