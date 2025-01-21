import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { EventFilters as FilterType } from "@/features/events/types/event.types";

interface EventFiltersProps {
  onFiltersChange: (filters: FilterType) => void;
}

const EventFilters = ({ onFiltersChange }: EventFiltersProps) => {
  const [filters, setFilters] = useState<FilterType>({
    category: undefined,
    date: undefined,
    priceRange: undefined,
  });

  const handleFilterChange = (key: keyof FilterType, value: string | undefined) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      category: undefined,
      date: undefined,
      priceRange: undefined,
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
    localStorage.removeItem('eventFilters');
  };

  // Load saved filters on mount
  useEffect(() => {
    const savedFilters = localStorage.getItem('eventFilters');
    if (savedFilters) {
      try {
        const parsedFilters = JSON.parse(savedFilters);
        setFilters(parsedFilters);
        onFiltersChange(parsedFilters);
      } catch (e) {
        console.error('Error loading saved filters:', e);
      }
    }
  }, [onFiltersChange]);

  return (
    <div className="space-y-6 bg-white/5 border border-white/10 rounded-lg p-6">
      <div>
        <h3 className="text-lg font-montserrat text-white mb-4">Filters</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Category</label>
            <Select
              value={filters.category}
              onValueChange={(value) => handleFilterChange("category", value)}
            >
              <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fashion-show">Fashion Shows</SelectItem>
                <SelectItem value="showcase">Showcases</SelectItem>
                <SelectItem value="party">Launch Parties</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400">Date</label>
            <Select
              value={filters.date}
              onValueChange={(value) => handleFilterChange("date", value)}
            >
              <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="All Dates" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-400">Price Range</label>
            <Select
              value={filters.priceRange}
              onValueChange={(value) => handleFilterChange("priceRange", value)}
            >
              <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-100">$0 - $100</SelectItem>
                <SelectItem value="100-200">$100 - $200</SelectItem>
                <SelectItem value="200+">$200+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Button 
        variant="outline" 
        className="w-full border-white/20 text-white hover:bg-white/10"
        onClick={handleClearFilters}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default EventFilters;