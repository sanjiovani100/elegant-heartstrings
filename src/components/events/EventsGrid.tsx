import React from "react";
import EventCard from "./EventCard";
import { Event } from "@/types/events";
import { ResizeErrorBoundary } from "../error/ResizeErrorBoundary";

export interface EventsGridProps {
  events: Event[];
  isLoading: boolean;
}

const EventsGrid = ({ events, isLoading }: EventsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading ? (
        // Loading skeleton cards
        [...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-lg h-[400px] animate-pulse"
          />
        ))
      ) : (
        events.map((event) => (
          <ResizeErrorBoundary key={event.id}>
            <EventCard event={event} />
          </ResizeErrorBoundary>
        ))
      )}
    </div>
  );
};

export default EventsGrid;