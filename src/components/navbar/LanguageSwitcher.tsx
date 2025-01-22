import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="hidden md:flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="inline-flex items-center px-3 py-2 text-[#F0F0F0] hover:text-white transition-colors">
          <Globe className="w-5 h-5 mr-2" />
          <span className="uppercase">{currentLanguage}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black/90 border border-white/10 z-50">
          <DropdownMenuItem 
            className="text-[#F0F0F0] hover:text-white hover:bg-white/10 cursor-pointer"
            onClick={() => setLanguage('en')}
          >
            English
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="text-[#F0F0F0] hover:text-white hover:bg-white/10 cursor-pointer"
            onClick={() => setLanguage('es')}
          >
            Español
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;