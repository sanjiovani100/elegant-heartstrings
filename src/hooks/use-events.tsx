import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Event, TicketType } from "@/types/events";
import { transformVenueDetails, transformScheduleTimeline } from "@/types/utils/transformers";
import { Json } from "@/types/supabase/database";

const transformTicketTypes = (ticketTypes: any[]): TicketType[] => {
  return ticketTypes.map(ticket => ({
    id: ticket.id,
    name: ticket.name,
    description: ticket.description,
    price: ticket.price,
    capacity: ticket.capacity,
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

export const useEvents = (eventId?: string) => {
  return useQuery({
    queryKey: ["events", eventId],
    queryFn: async () => {
      if (eventId) {
        const { data, error } = await supabase
          .from("events")
          .select(`
            *,
            ticket_types (*)
          `)
          .eq('id', eventId)
          .maybeSingle();
        
        if (error) throw error;
        if (!data) throw new Error("Event not found");
        
        const transformedEvent: Event = {
          ...data,
          venue_details: transformVenueDetails(data.venue_details),
          schedule_timeline: transformScheduleTimeline(data.schedule_timeline),
          ticket_types: transformTicketTypes(data.ticket_types || [])
        };
        
        return transformedEvent;
      }

      const { data, error } = await supabase
        .from("events")
        .select(`
          *,
          ticket_types (*)
        `)
        .eq("is_deleted", false)
        .order("date", { ascending: true });

      if (error) throw error;

      return data.map(event => ({
        ...event,
        venue_details: transformVenueDetails(event.venue_details),
        schedule_timeline: transformScheduleTimeline(event.schedule_timeline),
        ticket_types: transformTicketTypes(event.ticket_types || [])
      })) as Event[];
    },
  });
};