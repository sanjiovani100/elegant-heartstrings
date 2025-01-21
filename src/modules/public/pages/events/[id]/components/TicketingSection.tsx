import { Event } from "@/types/events";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TicketingSectionProps {
  event: Event;
}

export const TicketingSection = ({ event }: TicketingSectionProps) => {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Initiated",
      description: "Redirecting to payment...",
    });
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
          Get Your Tickets
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-card p-6 space-y-6">
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
          </div>
          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-6">
            <h3 className="text-2xl font-montserrat text-white">Book Your Tickets</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quantity">Number of Tickets</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="bg-white/10 border-white/20"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-primary hover:bg-gradient-hover shadow-glow"
              >
                Proceed to Payment
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};