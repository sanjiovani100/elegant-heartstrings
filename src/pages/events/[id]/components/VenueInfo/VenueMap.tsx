interface VenueMapProps {
  location: string;
}

export const VenueMap = ({ location }: VenueMapProps) => {
  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden">
      <img
        src="/hero3.jpg"
        alt={`${location} venue`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-montserrat text-white mb-2">{location}</h3>
      </div>
    </div>
  );
};