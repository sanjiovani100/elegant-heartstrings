import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { EventHero } from "./components/EventHero";
import { EventInfo } from "./components/EventInfo";
import { EventSchedule } from "./components/EventSchedule";
import { VenueInfo } from "./components/VenueInfo";
import { TicketingSection } from "./components/TicketingSection";
import { ResizeErrorBoundary } from "@/components/error/ResizeErrorBoundary";
import { Event } from "@/types/events";
import { transformVenueDetails, transformScheduleTimeline } from "@/shared/utils/transformers";

const EventDetailsPage = () => {
  const params = useParams();
  const id = params.id;
  const { toast } = useToast();

  const { data: event, isLoading, error } = useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      if (!id) throw new Error('Event ID is required');
      
      // Validate UUID format using a regex
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      if (!uuidRegex.test(id)) {
        throw new Error('Invalid event ID format');
      }

      const { data, error } = await supabase
        .from('events')
        .select(`
          *,
          ticket_types (*)
        `)
        .eq('id', id)
        .single();
      
      if (error) throw error;
      if (!data) throw new Error('Event not found');
      
      // Transform the data to match our Event type
      const transformedEvent: Event = {
        ...data,
        venue_details: transformVenueDetails(data.venue_details),
        schedule_timeline: transformScheduleTimeline(data.schedule_timeline)
      };
      
      return transformedEvent;
    },
    enabled: !!id,
    retry: false
  });

  React.useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to load event details. Please try again later.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  if (isLoading) {
    return (
      <div className="space-y-8 p-4">
        <Skeleton className="h-[60vh] w-full" />
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Event not found</h1>
        <p className="text-gray-600 mt-2">The event you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return (
    <ResizeErrorBoundary>
      <div className="min-h-screen bg-black">
        <EventHero event={event} />
        <EventInfo event={event} />
        <EventSchedule event={event} />
        <VenueInfo event={event} />
        <TicketingSection event={event} />
      </div>
    </ResizeErrorBoundary>
  );
};

export default EventDetailsPage;