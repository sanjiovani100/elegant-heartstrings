import { Heart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { HeroContent } from "./hero/HeroContent";
import { HeroSkeleton } from "./hero/HeroSkeleton";
import { HeroError } from "./hero/HeroError";
import { ResizeErrorBoundary } from "./error/ResizeErrorBoundary";
import { ContentTranslation } from "@/types/content";

const FloatingHeart = ({ delay }: { delay: number }) => (
  <div 
    className="absolute animate-float"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      opacity: 0.3
    }}
  >
    <Heart className="text-white w-4 h-4" />
  </div>
);

const Hero = () => {
  const { data: rawTranslations, isLoading, error, refetch } = useQuery({
    queryKey: ['translations', 'hero'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('content_translations')
        .select('*')
        .in('key', ['hero.title', 'hero.subtitle', 'hero.cta.tickets', 'hero.cta.signup']);
      
      if (error) throw error;
      return data;
    },
    retry: 2,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });

  // Transform the data to match ContentTranslation interface
  const translations: ContentTranslation[] | undefined = rawTranslations?.map(item => ({
    id: item.id,
    sectionId: item.section_id || 'hero-section', // Provide a default if null
    key: item.key,
    en: item.en,
    es: item.es,
    contentType: item.content_type as 'text' | 'html' | 'markdown'
  }));

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <FloatingHeart key={i} delay={i * 2} />
      ))}

      {/* Main Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: 'url(/hero1.jpg)',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ResizeErrorBoundary>
          {isLoading ? (
            <HeroSkeleton />
          ) : error ? (
            <HeroError onRetry={() => refetch()} />
          ) : translations ? (
            <HeroContent translations={translations} />
          ) : null}
        </ResizeErrorBoundary>
      </div>
    </div>
  );
};

export default Hero;