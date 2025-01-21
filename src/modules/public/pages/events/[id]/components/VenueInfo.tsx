import { Event } from "@/types/events";
import { Check } from "lucide-react";

interface VenueInfoProps {
  event: Event;
}

export const VenueInfo = ({ event }: VenueInfoProps) => {
  const venue = event.venue_details;

  if (!venue) return null;

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
          Venue Information
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-card p-6 space-y-6">
            <h3 className="text-2xl font-montserrat text-white">Facilities</h3>
            <ul className="space-y-3">
              {venue.facilities.map((facility, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-200">
                  <Check className="w-5 h-5 text-fashionista-pink" />
                  <span>{facility}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-xl font-montserrat text-white mb-4">Accessibility</h4>
              <ul className="space-y-3">
                {venue.accessibility_features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-200">
                    <Check className="w-5 h-5 text-fashionista-pink" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="/hero3.jpg"
              alt={`${event.location} venue`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-montserrat text-white mb-2">{event.location}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};