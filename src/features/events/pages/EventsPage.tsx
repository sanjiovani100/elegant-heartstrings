import EventsHeroSection from "../components/EventsHeroSection";
import EventsFilters from "../components/EventsFilters";
import EventsGrid from "../components/EventsGrid";
import EventsCTA from "../components/EventsCTA";
import { ResizeErrorBoundary } from "@/shared/components/error/ResizeErrorBoundary";
import { useEvents } from "../hooks/useEvents";

const EventsPage = () => {
  const { data: events, isLoading } = useEvents();

  const handleFiltersChange = (filters: any) => {
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
              <EventsGrid events={events || []} isLoading={isLoading} />
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

export default EventsPage;