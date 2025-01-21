import React, { useState } from "react";
import { useEvents } from "@/hooks/use-events";
import EventsGrid from "@/components/events/EventsGrid";
import EventFilters from "@/components/events/EventFilters";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { EventFilters as FilterType } from "@/features/events/types/event.types";
import { ResizeErrorBoundary } from "@/components/error/ResizeErrorBoundary";
import PublicLayout from "@/modules/public/layouts/PublicLayout";
import EventsHero from "@/components/events/EventsHero";
import EventsCTA from "@/components/events/EventCTA";

const EventsPage = () => {
  const { toast } = useToast();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterType>({
    category: undefined,
    date: undefined,
    priceRange: undefined,
  });

  const { data: events = [], isLoading, error } = useEvents();

  // Filter events based on selected criteria
  const filteredEvents = events.filter(event => {
    if (filters.category && event.category !== filters.category) return false;
    
    if (filters.date) {
      const eventDate = new Date(event.date);
      const today = new Date();
      
      switch (filters.date) {
        case 'today':
          if (eventDate.toDateString() !== today.toDateString()) return false;
          break;
        case 'this-week':
          const weekFromNow = new Date(today);
          weekFromNow.setDate(today.getDate() + 7);
          if (eventDate > weekFromNow || eventDate < today) return false;
          break;
        case 'this-month':
          if (eventDate.getMonth() !== today.getMonth() || 
              eventDate.getFullYear() !== today.getFullYear()) return false;
          break;
      }
    }
    
    return true;
  });

  React.useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to load events",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const handleFilterChange = (newFilters: FilterType) => {
    setFilters(newFilters);
    localStorage.setItem('eventFilters', JSON.stringify(newFilters));
  };

  React.useEffect(() => {
    const savedFilters = localStorage.getItem('eventFilters');
    if (savedFilters) {
      try {
        setFilters(JSON.parse(savedFilters));
      } catch (e) {
        console.error('Error loading saved filters:', e);
      }
    }
  }, []);

  return (
    <PublicLayout>
      <div className="min-h-screen bg-black">
        <ResizeErrorBoundary>
          <EventsHero />
        </ResizeErrorBoundary>

        <div className="container mx-auto px-4 py-16">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full text-white border-white/10 hover:bg-white/10">
                  <Menu className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-black/95 border-white/10">
                <div className="py-4">
                  <EventFilters onFiltersChange={handleFilterChange} />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Filters */}
            <div className="hidden lg:block w-1/4 flex-shrink-0">
              <div className="sticky top-24">
                <EventFilters onFiltersChange={handleFilterChange} />
              </div>
            </div>

            {/* Events Grid */}
            <div className="flex-grow">
              <EventsGrid 
                events={filteredEvents} 
                isLoading={isLoading} 
              />
            </div>
          </div>
        </div>

        <ResizeErrorBoundary>
          <EventsCTA />
        </ResizeErrorBoundary>
      </div>
    </PublicLayout>
  );
};

export default EventsPage;