import { Calendar, MapPin, Ticket } from "lucide-react";
import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { formatDate } from "@/shared/utils/formatting";
import { useNavigate } from "react-router-dom";
import { Event } from "../types/event.types";
import { transformVenueDetails } from "@/shared/utils/transformers";
import { ResizeErrorBoundary } from "@/shared/components/error/ResizeErrorBoundary";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const navigate = useNavigate();
  const venueDetails = transformVenueDetails(event.venue_details);

  return (
    <ResizeErrorBoundary>
      <Card className="bg-white/5 border-white/10 overflow-hidden group hover:border-fashionista-pink/50 transition-all duration-300">
        <div className="relative aspect-[4/3]">
          <img
            src={event.cover_image || '/placeholder.svg'}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute top-4 right-4">
            <span className="inline-block bg-gradient-primary px-3 py-1 rounded-full text-xs font-medium text-white">
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
                {venueDetails ? `${venueDetails.seating_capacity} seats available` : 'Contact for tickets'}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-white font-medium">
              {event.price || 'Price on request'}
            </span>
            <Button 
              variant="gradient"
              className="text-white hover:shadow-glow transition-all duration-300"
              onClick={() => navigate(`/events/${event.id}`)}
            >
              Get Tickets
            </Button>
          </div>
        </div>
      </Card>
    </ResizeErrorBoundary>
  );
};

export default EventCard;