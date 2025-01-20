import { Event } from "@/types/events";
import { EventHeroContent } from "./EventHeroContent";

interface EventHeroProps {
  event: Event;
}

export const EventHero = ({ event }: EventHeroProps) => {
  return (
    <section className="relative h-[80vh] min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
        <img
          src={event.cover_image || "/hero1.jpg"}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <EventHeroContent event={event} />
    </section>
  );
};