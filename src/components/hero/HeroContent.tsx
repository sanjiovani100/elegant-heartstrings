import { TranslatedContent } from "@/components/content/TranslatedContent";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ContentTranslation } from "@/types/content";

interface HeroContentProps {
  translations: ContentTranslation[];
}

export const HeroContent = ({ translations }: HeroContentProps) => {
  const navigate = useNavigate();

  return (
    <div className="text-center px-4 space-y-8 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair text-white mb-6 animate-fade-up drop-shadow-lg leading-tight">
        <TranslatedContent
          translations={translations}
          contentKey="hero.title"
          defaultValue="Fashionistas: A Night of Glamour & Fashion"
          className="block"
        />
      </h1>

      <p className="text-xl md:text-2xl text-[#F0F0F0] mb-8 animate-fade-up delay-100 font-montserrat">
        <TranslatedContent
          translations={translations}
          contentKey="hero.subtitle"
          defaultValue="Celebrate Valentine's Day with Medellín's most glamorous lingerie fashion show."
          className="block"
        />
      </p>

      <div className="space-x-6 animate-fade-up delay-200">
        <Button 
          size="lg" 
          variant="gradient"
          className="text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-glow font-inter"
          onClick={() => navigate('/tickets')}
        >
          <TranslatedContent
            translations={translations}
            contentKey="hero.cta.tickets"
            defaultValue="Get Tickets"
          />
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-lg transition-all duration-300 font-inter"
          onClick={() => navigate('/signup')}
        >
          <TranslatedContent
            translations={translations}
            contentKey="hero.cta.signup"
            defaultValue="Sign Up Now"
          />
        </Button>
      </div>
    </div>
  );
};