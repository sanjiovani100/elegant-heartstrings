import { useState } from "react";
import { Event } from "@/types/events";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface BookingFormProps {
  event: Event;
}

export const BookingForm = ({ event }: BookingFormProps) => {
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
  );
};