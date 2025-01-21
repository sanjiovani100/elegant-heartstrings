import { Event } from "@/types/events";

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
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-white mb-6">
            {event.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            {event.description}
          </p>
        </div>
      </div>
    </section>
  );
};