import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Event } from "@/types/events";
import { transformVenueDetails, transformScheduleTimeline } from "@/shared/utils/transformers";

export const useEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select(`
          *,
          ticket_types (
            price
          )
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
        schedule_timeline: transformScheduleTimeline(event.schedule_timeline)
      }));

      return transformedEvents;
    },
  });
};