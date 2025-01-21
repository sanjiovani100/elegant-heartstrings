import React from "react";
import { useEvents } from "@/hooks/use-events";
import EventsHeroSection from "@/modules/public/components/events/EventsHeroSection";
import EventsFilters from "@/modules/public/components/events/EventsFilters";
import EventsGrid from "@/modules/public/components/events/EventsGrid";
import EventsCTA from "@/modules/public/components/events/EventsCTA";
import { ResizeErrorBoundary } from "@/components/error/ResizeErrorBoundary";
import { EventFilters } from "@/features/events/types/event.types";

const EventsListing = () => {
  const { data: events = [], isLoading } = useEvents();

  const handleFiltersChange = (filters: EventFilters) => {
    // Handle filter changes
    console.log("Filters changed:", filters);
  };

  return (
    <div className="min-h-screen bg-black">
      <ResizeErrorBoundary>
        <EventsHeroSection />
      </ResizeErrorBoundary>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <ResizeErrorBoundary>
            <EventsFilters onFiltersChange={handleFiltersChange} />
          </ResizeErrorBoundary>

          <main className="flex-1">
            <ResizeErrorBoundary>
              <EventsGrid events={events} isLoading={isLoading} />
            </ResizeErrorBoundary>
          </main>
        </div>
      </div>

      <ResizeErrorBoundary>
        <EventsCTA />
      </ResizeErrorBoundary>
    </div>
  );
};

export default EventsListing;