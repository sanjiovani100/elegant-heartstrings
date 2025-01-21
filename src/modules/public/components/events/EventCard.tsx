import { Calendar, MapPin, Ticket } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { Event } from "@/types/events";

interface EventCardProps {
  event: Event & {
    capacity?: number;
  };
}

const EventCard = ({ event }: EventCardProps) => {
  const navigate = useNavigate();
  const lowestPrice = event.ticket_types.length > 0 
    ? `$${Math.min(...event.ticket_types.map(t => t.price))}`
    : 'Price on request';

  return (
    <Card className="bg-white/5 border-white/10 overflow-hidden group hover:border-fashionista-pink/50 transition-all duration-300">
      <div className="relative aspect-[4/3]">
        <img
          src={event.cover_image || '/placeholder.svg'}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="inline-block bg-fashionista-red px-3 py-1 rounded-full text-xs font-medium text-white">
            {event.category}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-playfair text-white group-hover:text-fashionista-pink transition-colors">
          {event.title}
        </h3>

        <div className="space-y-2 text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-fashionista-pink" />
            <span className="text-sm">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-fashionista-pink" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Ticket className="w-4 h-4 text-fashionista-pink" />
            <span className="text-sm">
              {event.capacity ? `${event.capacity} tickets available` : lowestPrice}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-white font-medium">{lowestPrice}</span>
          <Button 
            variant="outline"
            className="border-fashionista-pink text-fashionista-pink hover:bg-fashionista-pink hover:text-white"
            onClick={() => navigate(`/events/${event.id}`)}
          >
            Get Tickets
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;