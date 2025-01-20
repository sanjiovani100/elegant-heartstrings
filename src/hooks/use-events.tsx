import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Event } from "@/types/events";
import { transformVenueDetails, transformScheduleTimeline } from "@/types/utils/transformers";

export const useEvents = (eventId?: string) => {
  return useQuery({
    queryKey: ["events", eventId],
    queryFn: async () => {
      if (eventId) {
        // Fetch single event
        const { data, error } = await supabase
          .from("events")
          .select(`
            *,
            ticket_types (
              id,
              name,
              description,
              price,
              capacity,
              benefits
            )
          `)
          .eq('id', eventId)
          .maybeSingle();

        if (error) {
          throw error;
        }

        if (!data) {
          throw new Error("Event not found");
        }

        // Transform the data to match our Event type
        const transformedEvent: Event = {
          id: data.id,
          title: data.title,
          description: data.description,
          date: data.date,
          location: data.location,
          status: data.status,
          cover_image: data.cover_image,
          capacity: data.capacity,
          category: data.category,
          venue_details: transformVenueDetails(data.venue_details),
          schedule_timeline: transformScheduleTimeline(data.schedule_timeline),
          ticket_types: data.ticket_types || []
        };

        return transformedEvent;
      } else {
        // Fetch all events
        const { data, error } = await supabase
          .from("events")
          .select(`
            *,
            ticket_types (
              id,
              name,
              description,
              price,
              capacity,
              benefits
            )
          `)
          .eq("is_deleted", false)
          .order("date", { ascending: true });

        if (error) {
          throw error;
        }

        return data.map(event => ({
          ...event,
          venue_details: transformVenueDetails(event.venue_details),
          schedule_timeline: transformScheduleTimeline(event.schedule_timeline),
          ticket_types: event.ticket_types || []
        })) as Event[];
      }
    },
  });
};