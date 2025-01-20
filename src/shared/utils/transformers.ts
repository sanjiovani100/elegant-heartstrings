import { Json } from "@/types/supabase/database";
import { VenueDetails, ScheduleTimeline, isVenueDetails, isScheduleTimeline } from "@/types/events";

export const transformVenueDetails = (data: Json | null): VenueDetails | null => {
  if (!data || typeof data !== 'object') return null;
  
  try {
    const venueData = data as Record<string, unknown>;
    const transformedData: VenueDetails = {
      layout: String(venueData.layout || ''),
      seating_capacity: Number(venueData.seating_capacity || 0),
      standing_capacity: Number(venueData.standing_capacity || 0),
      accessibility_features: Array.isArray(venueData.accessibility_features) 
        ? venueData.accessibility_features.map(String)
        : [],
      facilities: Array.isArray(venueData.facilities) 
        ? venueData.facilities.map(String)
        : []
    };

    return isVenueDetails(transformedData) ? transformedData : null;
  } catch (error) {
    console.error('Error transforming venue details:', error);
    return null;
  }
};

export const transformScheduleTimeline = (data: Json | null): ScheduleTimeline | null => {
  if (!data || typeof data !== 'object') return null;
  
  try {
    const timelineData = data as Record<string, unknown>;
    const transformedData: ScheduleTimeline = {
      setup_time: String(timelineData.setup_time || ''),
      rehearsal_time: String(timelineData.rehearsal_time || ''),
      doors_open: String(timelineData.doors_open || ''),
      main_event: String(timelineData.main_event || ''),
      intervals: Array.isArray(timelineData.intervals) 
        ? timelineData.intervals.map(interval => ({
            start_time: String(interval.start_time || ''),
            end_time: String(interval.end_time || ''),
            description: String(interval.description || '')
          }))
        : [],
      closing_time: String(timelineData.closing_time || '')
    };

    return isScheduleTimeline(transformedData) ? transformedData : null;
  } catch (error) {
    console.error('Error transforming schedule timeline:', error);
    return null;
  }
};