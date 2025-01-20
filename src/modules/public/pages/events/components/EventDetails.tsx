import { Event } from "@/types/events";
import { Button } from "@/components/ui/button";

interface EventDetailsProps {
  event: Event;
}

export const EventDetails = ({ event }: EventDetailsProps) => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white">
              About the Event
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              {event.description}
            </p>
            <div className="space-y-4">
              <h3 className="text-2xl font-montserrat text-white">Event Highlights</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-center gap-3">
                  • Elegant dining experience
                </li>
                <li className="flex items-center gap-3">
                  • Live entertainment
                </li>
                <li className="flex items-center gap-3">
                  • Fashion showcase
                </li>
                <li className="flex items-center gap-3">
                  • Networking opportunities
                </li>
              </ul>
            </div>
            <Button 
              className="bg-[#800000] hover:bg-[#800000]/90 text-white"
            >
              Learn More
            </Button>
          </div>

          {/* Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img
              src="/hero2.jpg"
              alt="Event Atmosphere"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};