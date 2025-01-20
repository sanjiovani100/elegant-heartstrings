import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Event } from "@/types/events";

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
            ticket_types (*)
          `)
          .eq('id', eventId)
          .maybeSingle();

        if (error) {
          throw error;
        }

        if (!data) {
          throw new Error("Event not found");
        }

        return data;
      } else {
        // Fetch all events
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

        return data;
      }
    },
  });
};