import { Event } from "@/types/events";
import { FacilitiesList } from "./FacilitiesList";
import { VenueMap } from "./VenueMap";

interface VenueInfoProps {
  event: Event;
}

export const VenueInfo = ({ event }: VenueInfoProps) => {
  return (
    <section className="py-20 bg-black">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
          Venue Information
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <FacilitiesList venue={event.venue_details} />
          <VenueMap location={event.location} />
        </div>
      </div>
    </section>
  );
};