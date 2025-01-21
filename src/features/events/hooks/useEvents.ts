import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Event, TicketType } from "@/types/events";
import { transformVenueDetails, transformScheduleTimeline } from "@/shared/utils/transformers";

const transformTicketTypes = (ticketTypes: any[]): TicketType[] => {
  return ticketTypes.map(ticket => ({
    id: ticket.id,
    name: ticket.name,
    description: ticket.description || null,
    price: ticket.price,
    capacity: ticket.capacity || null,
    benefits: Array.isArray(ticket.benefits) 
      ? ticket.benefits.map(String)
      : typeof ticket.benefits === 'string'
      ? JSON.parse(ticket.benefits)
      : [],
    event_id: ticket.event_id,
    sale_start_date: ticket.sale_start_date,
    sale_end_date: ticket.sale_end_date,
    status: ticket.status,
    created_at: ticket.created_at,
    updated_at: ticket.updated_at
  }));
};

export const useEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select(`
          *,
          ticket_types (*)
        `)
        .eq("is_deleted", false)
        .order("date", { ascending: true });

      if (error) {
        throw error;
      }

      // Transform the data to match our Event type
      const transformedEvents: Event[] = data.map(event => ({
        ...event,
        venue_details: transformVenueDetails(event.venue_details),
        schedule_timeline: transformScheduleTimeline(event.schedule_timeline),
        ticket_types: transformTicketTypes(event.ticket_types || [])
      }));

      return transformedEvents;
    },
  });
};