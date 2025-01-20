import { Event } from "@/types/events";
import { TimelineItem } from "./TimelineItem";

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
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-montserrat text-white text-center mb-12">
          Event Schedule
        </h2>
        <div className="max-w-3xl mx-auto">
          {schedule.map((item, index) => (
            <TimelineItem 
              key={index}
              time={item.time}
              event={item.event}
              description={item.description}
              isLast={index === schedule.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};