import { Event } from "@/types/events";

interface EventScheduleProps {
  event: Event;
}

export const EventSchedule = ({ event }: EventScheduleProps) => {
  const schedule = [
    {
      time: event.schedule_timeline?.doors_open || "7:00 PM",
      event: "Doors Open",
      description: "Welcome reception and registration"
    },
    {
      time: event.schedule_timeline?.main_event || "8:00 PM",
      event: "Main Event",
      description: "Valentine's Gala celebration begins"
    },
    ...(event.schedule_timeline?.intervals || []).map(interval => ({
      time: interval.start_time,
      event: "Special Performance",
      description: interval.description
    })),
    {
      time: event.schedule_timeline?.closing_time || "11:00 PM",
      event: "Event Conclusion",
      description: "Farewell and final celebrations"
    }
  ];

  return (
    <section className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
          Event Schedule
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div 
                key={index}
                className="relative pl-8 pb-8 border-l border-fashionista-pink last:pb-0"
              >
                <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-fashionista-pink" />
                <div className="glass-card p-6">
                  <span className="text-fashionista-pink font-semibold">
                    {item.time}
                  </span>
                  <h3 className="text-xl text-white mt-2 font-montserrat">
                    {item.event}
                  </h3>
                  <p className="text-gray-300 mt-2">
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