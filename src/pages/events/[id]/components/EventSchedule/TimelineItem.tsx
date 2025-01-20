interface TimelineItemProps {
  time: string;
  event: string;
  description: string;
  isLast?: boolean;
}

export const TimelineItem = ({ time, event, description, isLast }: TimelineItemProps) => {
  return (
    <div className={`relative pl-8 ${!isLast ? 'pb-8 border-l border-fashionista-pink' : ''}`}>
      {/* Timeline Dot */}
      <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-fashionista-pink" />
      
      {/* Content */}
      <div className="glass-card p-6 hover-scale">
        <span className="text-fashionista-pink font-semibold">
          {time}
        </span>
        <h3 className="text-xl text-white mt-2 font-montserrat">
          {event}
        </h3>
        <p className="text-gray-300 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};