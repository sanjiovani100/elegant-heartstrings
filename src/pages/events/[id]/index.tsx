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

const EventDetailsPage = () => {
  const params = useParams();
  const id = params.id;
  const { toast } = useToast();

  const { data: event, isLoading, error } = useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      if (!id) throw new Error('Event ID is required');
      
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
      
      const transformedEvent: Event = {
        ...data,
        venue_details: transformVenueDetails(data.venue_details),
        schedule_timeline: transformScheduleTimeline(data.schedule_timeline),
        ticket_types: transformTicketTypes(data.ticket_types || [])
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
        description: error instanceof Error ? error.message : "Failed to load event details",
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