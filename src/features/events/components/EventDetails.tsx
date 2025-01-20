import { Button } from "@/shared/ui/button";
import { Event } from "../types/event.types";
import { transformVenueDetails, transformScheduleTimeline } from "@/shared/utils/transformers";

interface EventDetailsProps {
  event: Event;
}

const EventDetails = ({ event }: EventDetailsProps) => {
  const venueDetails = transformVenueDetails(event.venue_details);
  const scheduleTimeline = transformScheduleTimeline(event.schedule_timeline);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-montserrat text-white">
              {event.title}
            </h2>
            <div className="space-y-4 text-[#F0F0F0]">
              <p className="text-lg">
                {event.description}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-fashionista-red">Date:</span>
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </li>
                {scheduleTimeline && (
                  <>
                    <li className="flex items-center space-x-2">
                      <span className="text-fashionista-red">Doors Open:</span>
                      <span>{scheduleTimeline.doors_open}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-fashionista-red">Main Event:</span>
                      <span>{scheduleTimeline.main_event}</span>
                    </li>
                  </>
                )}
                {venueDetails && (
                  <li className="flex items-center space-x-2">
                    <span className="text-fashionista-red">Capacity:</span>
                    <span>{venueDetails.seating_capacity} seats</span>
                  </li>
                )}
              </ul>
            </div>
            <Button 
              className="bg-fashionista-red hover:bg-fashionista-red/90 text-white"
            >
              Reserve Your Spot
            </Button>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src={event.cover_image || "/hero1.jpg"}
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;