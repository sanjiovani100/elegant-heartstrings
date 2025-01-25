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
    <div className="text-center px-4 space-y-12 max-w-5xl mx-auto">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair text-white mb-8 animate-fade-up drop-shadow-2xl leading-tight tracking-tight">
        <TranslatedContent
          translations={translations}
          contentKey="hero.title"
          defaultValue="Fashionistas: A Night of Glamour & Fashion"
          className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600"
        />
      </h1>

      <p className="text-2xl md:text-3xl text-gray-300 mb-12 animate-fade-up delay-100 font-montserrat max-w-3xl mx-auto leading-relaxed">
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
          className="text-white px-10 py-8 text-xl transition-all duration-300 hover:shadow-glow hover:scale-105 font-inter relative overflow-hidden group"
          onClick={() => navigate('/tickets')}
        >
          <span className="relative z-10">
            <TranslatedContent
              translations={translations}
              contentKey="hero.cta.tickets"
              defaultValue="Get Tickets"
            />
          </span>
          <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="bg-white/10 text-white hover:bg-white/20 px-10 py-8 text-xl transition-all duration-300 backdrop-blur-sm hover:scale-105 font-inter"
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