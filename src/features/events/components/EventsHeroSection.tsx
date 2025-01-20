import React from "react";

const EventsHeroSection = () => {
  return (
    <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url("/hero1.jpg")' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-playfair text-white mb-6 animate-fade-up">
            Upcoming Fashion Events
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-up delay-100">
            Join us for Medellín's most exclusive fashion experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsHeroSection;