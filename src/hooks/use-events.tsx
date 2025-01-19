import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Event, transformDatabaseEvent } from "@/types/events";

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

      return data.map(transformDatabaseEvent);
    },
  });
};