import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import EventDetailsComponent from "@/components/events/EventDetails";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Event, TicketType } from "@/types/events";
import { transformVenueDetails, transformScheduleTimeline } from "@/types/utils/transformers";

const EventDetails = () => {
  const { id } = useParams();
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
      
      // Transform ticket types
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
      
      // Transform the event data
      const transformedEvent: Event = {
        ...data,
        venue_details: transformVenueDetails(data.venue_details),
        schedule_timeline: transformScheduleTimeline(data.schedule_timeline),
        ticket_types: transformedTicketTypes
      };
      
      return transformedEvent;
    },
    enabled: !!id
  });

  React.useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to load event details. Please try again later.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-48 w-full mb-4" />
        <Skeleton className="h-24 w-2/3" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Event not found</h1>
        <p className="text-gray-600 mt-2">The event you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return <EventDetailsComponent event={event} />;
};

export default EventDetails;