export interface EventFilters {
  category?: string;
  date?: string;
  priceRange?: string;
}

export interface EventsFiltersProps {
  onFiltersChange: (filters: EventFilters) => void;
}

export interface VenueDetails {
  layout: string;
  seating_capacity: number;
  standing_capacity: number;
  accessibility_features: string[];
  facilities: string[];
  [key: string]: string | number | string[] | undefined;
}

export interface ScheduleTimeline {
  setup_time: string;
  rehearsal_time: string;
  doors_open: string;
  main_event: string;
  intervals: Array<{
    start_time: string;
    end_time: string;
    description: string;
  }>;
  closing_time: string;
  [key: string]: string | Array<any> | undefined;
}

export interface Event {
  id: string;
  title: string;
  description: string | null;
  date: string;
  location: string;
  status: string | null;
  cover_image: string | null;
  capacity: number | null;
  category: string | null;
  venue_details: VenueDetails | null;
  schedule_timeline: ScheduleTimeline | null;
  price?: string;
}