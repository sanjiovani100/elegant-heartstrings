import { Event } from "@/types/events";
import { format } from "date-fns";
import { MapPin, Calendar, Users } from "lucide-react";

interface EventInfoProps {
  event: Event;
}

export const EventInfo = ({ event }: EventInfoProps) => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-montserrat text-white">About the Event</h2>
            <p className="text-gray-200 leading-relaxed">
              {event.description}
            </p>
          </div>
          <div className="glass-card p-6 space-y-6">
            <h3 className="text-xl font-montserrat text-white mb-4">Event Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-fashionista-pink" />
                <span className="text-gray-200">{format(new Date(event.date), 'PPP')}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-fashionista-pink" />
                <span className="text-gray-200">{event.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-fashionista-pink" />
                <span className="text-gray-200">Capacity: {event.capacity} guests</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};