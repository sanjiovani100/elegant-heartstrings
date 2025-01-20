import { VenueDetails } from "@/types/events";
import { Check } from "lucide-react";

interface FacilitiesListProps {
  venue: VenueDetails | null;
}

export const FacilitiesList = ({ venue }: FacilitiesListProps) => {
  if (!venue) return null;

  return (
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
  );
};