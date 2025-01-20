import { Event } from "@/types/events";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MapPin } from "lucide-react";

interface EventMetadataProps {
  event: Event;
}

export const EventMetadata = ({ event }: EventMetadataProps) => {
  return (
    <div className="glass-card p-6 space-y-6">
      <h3 className="text-xl font-montserrat text-white mb-4">Event Details</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-fashionista-pink" />
          <span className="text-gray-200">{new Date(event.date).toLocaleDateString()}</span>
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
      <div className="flex flex-wrap gap-2 mt-4">
        <Badge>{event.category}</Badge>
        <Badge variant="outline">{event.status}</Badge>
      </div>
    </div>
  );
};