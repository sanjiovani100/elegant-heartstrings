import React from "react";
import { useEvents } from "@/hooks/use-events";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { HeroSection } from "./components/HeroSection";
import { EventDetails } from "./components/EventDetails";
import { ScheduleTimeline } from "./components/ScheduleTimeline";
import { PricingSection } from "./components/PricingSection";
import { FAQSection } from "./components/FAQSection";

// Use the UUID from the event we just created
const VALENTINES_EVENT_ID = "90a276c5-62ee-4d02-8ef6-d4f5dbfa6e5c";

const ValentinesEvent = () => {
  const { toast } = useToast();

  const { data: event, isLoading, error } = useEvents(VALENTINES_EVENT_ID);

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
        <p className="text-gray-600 mt-2">The Valentine's 2025 event details are currently unavailable.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <HeroSection event={event} />
      <EventDetails event={event} />
      <ScheduleTimeline event={event} />
      <PricingSection event={event} />
      <FAQSection />
    </div>
  );
};

export default ValentinesEvent;