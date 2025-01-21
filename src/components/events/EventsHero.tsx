import { Users, MapPin, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const EventsHero = () => {
  const { data: stats } = useQuery({
    queryKey: ["eventStats"],
    queryFn: async () => {
      const { data: events } = await supabase
        .from("events")
        .select("id, location, date")
        .eq("status", "published");

      const uniqueLocations = new Set(events?.map(event => event.location));
      
      return {
        totalEvents: events?.length || 0,
        locations: uniqueLocations.size || 0,
        upcomingEvents: events?.filter(event => new Date(event.date) > new Date()).length || 0
      };
    }
  });

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero2.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />

      <div className="relative container mx-auto px-4 text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-playfair text-white drop-shadow-lg animate-fade-up">
          Upcoming Fashion Events
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto animate-fade-up delay-100 font-montserrat">
          Discover Medellín's Most Exclusive Fashion Experiences
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-8 animate-fade-up delay-200">
          <div className="flex items-center gap-2 text-white">
            <Calendar className="w-6 h-6 text-fashionista-pink" />
            <span className="text-2xl font-montserrat">{stats?.upcomingEvents || 0}</span>
            <span className="text-gray-300">Upcoming Events</span>
          </div>

          <div className="flex items-center gap-2 text-white">
            <MapPin className="w-6 h-6 text-fashionista-pink" />
            <span className="text-2xl font-montserrat">{stats?.locations || 0}</span>
            <span className="text-gray-300">Locations</span>
          </div>

          <div className="flex items-center gap-2 text-white">
            <Users className="w-6 h-6 text-fashionista-pink" />
            <span className="text-2xl font-montserrat">{stats?.totalEvents || 0}</span>
            <span className="text-gray-300">Total Events</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsHero;