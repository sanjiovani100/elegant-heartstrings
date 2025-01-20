export interface EventFilters {
  category?: string;
  date?: string;
  priceRange?: string;
}

export interface EventsFiltersProps {
  onFiltersChange: (filters: EventFilters) => void;
}