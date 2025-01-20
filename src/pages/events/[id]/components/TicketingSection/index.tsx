import { Event } from "@/types/events";
import { TicketCard } from "./TicketCard";
import { BookingForm } from "./BookingForm";

interface TicketingSectionProps {
  event: Event;
}

export const TicketingSection = ({ event }: TicketingSectionProps) => {
  return (
    <section className="py-20 bg-black">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
          Get Your Tickets
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <TicketCard event={event} />
          <BookingForm event={event} />
        </div>
      </div>
    </section>
  );
};