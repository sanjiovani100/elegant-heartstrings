import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Event, TicketType } from "@/types/events";
import { transformVenueDetails, transformScheduleTimeline } from "@/types/utils/transformers";

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
        
        // Transform the ticket types to match our TicketType interface
        const transformedTicketTypes: TicketType[] = (data.ticket_types || []).map(ticket => ({
          id: ticket.id,
          name: ticket.name,
          description: ticket.description,
          price: ticket.price,
          capacity: ticket.capacity,
          benefits: Array.isArray(ticket.benefits) ? ticket.benefits : [],
          event_id: ticket.event_id,
          sale_start_date: ticket.sale_start_date,
          sale_end_date: ticket.sale_end_date,
          status: ticket.status,
          created_at: ticket.created_at,
          updated_at: ticket.updated_at
        }));

        // Transform the event data to match our Event type
        const transformedEvent: Event = {
          ...data,
          venue_details: transformVenueDetails(data.venue_details),
          schedule_timeline: transformScheduleTimeline(data.schedule_timeline),
          ticket_types: transformedTicketTypes
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
        ticket_types: (event.ticket_types || []).map(ticket => ({
          id: ticket.id,
          name: ticket.name,
          description: ticket.description,
          price: ticket.price,
          capacity: ticket.capacity,
          benefits: Array.isArray(ticket.benefits) ? ticket.benefits : [],
          event_id: ticket.event_id,
          sale_start_date: ticket.sale_start_date,
          sale_end_date: ticket.sale_end_date,
          status: ticket.status,
          created_at: ticket.created_at,
          updated_at: ticket.updated_at
        }))
      })) as Event[];
    },
  });
};