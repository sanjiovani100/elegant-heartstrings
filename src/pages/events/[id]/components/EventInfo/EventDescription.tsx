import { Event } from "@/types/events";

interface EventDescriptionProps {
  event: Event;
}

export const EventDescription = ({ event }: EventDescriptionProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-montserrat gradient-text">About the Event</h2>
      <div className="glass-card p-6">
        <p className="text-gray-200 leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  );
};