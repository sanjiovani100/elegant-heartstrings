import { Event } from "@/types/events";
import { Clock, Wine, Music, Camera, Star } from "lucide-react";

interface ScheduleTimelineProps {
  event: Event;
}

export const ScheduleTimeline = ({ event }: ScheduleTimelineProps) => {
  const schedule = [
    {
      time: "7:00 PM",
      title: "Welcome Reception",
      description: "Arrival and champagne welcome",
      icon: Wine,
    },
    {
      time: "8:00 PM",
      title: "Main Event Begins",
      description: "Fashion showcase and entertainment",
      icon: Star,
    },
    {
      time: "9:00 PM",
      title: "Live Entertainment",
      description: "Musical performances and dancing",
      icon: Music,
    },
    {
      time: "10:00 PM",
      title: "Photo Session",
      description: "Professional photography session",
      icon: Camera,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
          Event Schedule
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {schedule.map((item, index) => (
              <div 
                key={index}
                className="relative pl-8 pb-8 border-l border-[#800000] last:pb-0 last:border-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-[#800000]" />
                
                {/* Content */}
                <div className="bg-white/5 p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3 text-[#FFC1C1] mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white mb-2">
                    <item.icon className="w-5 h-5" />
                    <h3 className="text-xl font-montserrat">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 ml-8">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};