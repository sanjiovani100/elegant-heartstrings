import { Event } from "@/types/events";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingSectionProps {
  event: Event;
}

export const PricingSection = ({ event }: PricingSectionProps) => {
  const tiers = [
    {
      name: "General Admission",
      price: 149,
      description: "Experience the glamour of Valentine's Gala",
      features: [
        "Access to all fashion shows",
        "Welcome drink",
        "General seating",
        "Event program"
      ],
      isPopular: false
    },
    {
      name: "VIP Experience",
      price: 299,
      description: "Elevate your evening with exclusive benefits",
      features: [
        "Premium front-row seating",
        "Unlimited premium drinks",
        "VIP lounge access",
        "Meet & Greet with designers",
        "Professional photo session",
        "Exclusive gift bag"
      ],
      isPopular: true
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat text-white mb-4">
            Choose Your Experience
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Select the perfect ticket package for an unforgettable Valentine's celebration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white/5 rounded-xl p-8 border ${
                tier.isPopular ? 'border-[#800000]' : 'border-gray-800'
              } hover:scale-105 transition-transform duration-300`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#800000] text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-montserrat text-white mb-2">
                  {tier.name}
                </h3>
                <div className="text-4xl font-bold text-white mb-2">
                  ${tier.price}
                </div>
                <p className="text-gray-400">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-[#FFC1C1] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  tier.isPopular
                    ? 'bg-[#800000] hover:bg-[#800000]/90'
                    : 'bg-white/10 hover:bg-white/20'
                } text-white`}
              >
                Select {tier.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};