import React from "react";
import { useEvents } from "@/hooks/use-events";
import { EventsGrid } from "@/components/events/EventsGrid";
import { useToast } from "@/hooks/use-toast";

const EventsListing = () => {
  const { toast } = useToast();
  const { data: events = [], isLoading, error } = useEvents();

  React.useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to load events",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  return <EventsGrid events={events} isLoading={isLoading} />;
};

export default EventsListing;