import { Event } from "@/types/events";
import { EventDescription } from "./EventDescription";
import { EventMetadata } from "./EventMetadata";

interface EventInfoProps {
  event: Event;
}

export const EventInfo = ({ event }: EventInfoProps) => {
  return (
    <section className="py-20 bg-black">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12">
          <EventDescription event={event} />
          <EventMetadata event={event} />
        </div>
      </div>
    </section>
  );
};