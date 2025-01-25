import { Heart, ArrowDown, Users } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { HeroContent } from "./hero/HeroContent";
import { HeroSkeleton } from "./hero/HeroSkeleton";
import { HeroError } from "./hero/HeroError";
import { ResizeErrorBoundary } from "./error/ResizeErrorBoundary";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const FloatingHeart = ({ delay, position }: { delay: number; position: { top: string; left: string } }) => (
  <div 
    className="absolute animate-float"
    style={{
      top: position.top,
      left: position.left,
      animationDelay: `${delay}s`,
      opacity: 0.4
    }}
  >
    <Heart className="text-pink-400 w-4 h-4 animate-pulse" />
  </div>
);

const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <ArrowDown className="text-white/70 w-6 h-6" />
  </div>
);

const SocialProof = () => {
  const { data: visitorCount } = useQuery({
    queryKey: ['visitorCount'],
    queryFn: async () => {
      const { count } = await supabase
        .from('events')
        .select('*', { count: 'exact' });
      return count || 0;
    }
  });

  return (
    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-sm rounded-full px-6 py-2 flex items-center gap-2">
      <Users className="text-pink-400 w-4 h-4" />
      <span className="text-white/90 text-sm">
        {visitorCount}+ fashion enthusiasts have joined
      </span>
    </div>
  );
};

const Hero = () => {
  const { data: translations, isLoading, error, refetch } = useTranslations('hero-section');

  // Predefined heart positions for better control
  const heartPositions = [
    { top: '15%', left: '10%' },
    { top: '25%', left: '85%' },
    { top: '45%', left: '15%' },
    { top: '65%', left: '90%' },
    { top: '75%', left: '20%' },
    { top: '85%', left: '80%' },
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Floating Hearts with better positioning */}
      {heartPositions.map((position, i) => (
        <FloatingHeart key={i} delay={i * 2} position={position} />
      ))}

      {/* Dynamic Background with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[20s] hover:scale-110"
        style={{
          backgroundImage: 'url(/hero1.jpg)',
        }}
      />

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90 animate-gradient-shift" />

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

      {/* Social Proof */}
      <SocialProof />

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
};

export default Hero;