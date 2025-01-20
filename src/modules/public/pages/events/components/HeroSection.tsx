import { Event } from "@/types/events";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";

interface HeroSectionProps {
  event: Event;
}

export const HeroSection = ({ event }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
        <img
          src={event.cover_image || "/hero1.jpg"}
          alt="Valentine's Gala 2025"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-white">
        <div className="max-w-3xl space-y-6 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold bg-gradient-primary bg-clip-text text-transparent">
            {event.title}
          </h1>

          <div className="flex flex-wrap gap-4">
            <Badge variant="outline" className="flex items-center gap-2 text-lg py-1.5">
              <Calendar className="w-5 h-5" />
              {format(new Date(event.date), 'PPP')}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2 text-lg py-1.5">
              <MapPin className="w-5 h-5" />
              {event.location}
            </Badge>
          </div>

          <p className="text-lg md:text-xl text-gray-200">
            Join us for an enchanting evening of romance and celebration at our exclusive Valentine's Gala.
          </p>

          <Button 
            size="lg"
            className="bg-[#800000] hover:bg-[#800000]/90 text-white text-lg px-8 py-6 shadow-glow hover:shadow-glow-hover"
          >
            Reserve Your Spot
          </Button>
        </div>
      </div>
    </section>
  );
};