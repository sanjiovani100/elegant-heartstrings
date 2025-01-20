import { Event } from "@/types/events";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface TicketCardProps {
  event: Event;
}

export const TicketCard = ({ event }: TicketCardProps) => {
  return (
    <Card className="glass-card p-6 space-y-6">
      <h3 className="text-2xl font-montserrat text-white">Ticket Information</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-200">Regular Admission</span>
          <span className="text-fashionista-pink font-semibold">$99</span>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-gray-200">
            <Check className="w-5 h-5 text-fashionista-pink" />
            <span>Access to all main event areas</span>
          </li>
          <li className="flex items-center gap-3 text-gray-200">
            <Check className="w-5 h-5 text-fashionista-pink" />
            <span>Welcome drink included</span>
          </li>
          <li className="flex items-center gap-3 text-gray-200">
            <Check className="w-5 h-5 text-fashionista-pink" />
            <span>Professional photography</span>
          </li>
        </ul>
      </div>
    </Card>
  );
};