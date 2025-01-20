import { format } from "date-fns";
import { Event } from "@/types/events";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventHeroContentProps {
  event: Event;
}

export const EventHeroContent = ({ event }: EventHeroContentProps) => {
  return (
    <div className="relative z-10 h-full flex items-center">
      <div className="section-container">
        <h1 className="text-5xl md:text-7xl font-montserrat font-bold gradient-text mb-6">
          {event.title}
        </h1>
        <div className="flex gap-4 mb-8">
          <Badge variant="outline">{format(new Date(event.date), 'PPP')}</Badge>
          <Badge variant="outline">{event.location}</Badge>
        </div>
        <Button 
          size="lg"
          className="bg-gradient-primary hover:bg-gradient-hover shadow-glow"
        >
          Reserve Your Spot
        </Button>
      </div>
    </div>
  );
};