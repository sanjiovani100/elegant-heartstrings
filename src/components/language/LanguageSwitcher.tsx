import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

export const LanguageSwitcher = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-4 w-4 text-gray-400" />
      <div className="flex rounded-lg border border-white/10 p-1">
        <Button
          variant={currentLanguage === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="px-3"
        >
          EN
        </Button>
        <Button
          variant={currentLanguage === 'es' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('es')}
          className="px-3"
        >
          ES
        </Button>
      </div>
    </div>
  );
};