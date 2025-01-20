import { EventStatus, EventCategory } from '@/types/supabase/enums';
import { Json } from '@/types/supabase/database';

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

export interface TicketType {
  id: string;
  name: string;
  description: string | null;
  price: number;
  capacity: number | null;
  benefits: any[] | null;
}

export interface Event {
  id: string;
  title: string;
  description: string | null;
  date: string;
  location: string;
  status: EventStatus | null;
  cover_image: string | null;
  capacity: number | null;
  category: EventCategory | null;
  venue_details: VenueDetails | null;
  schedule_timeline: ScheduleTimeline | null;
  ticket_types: TicketType[];
}