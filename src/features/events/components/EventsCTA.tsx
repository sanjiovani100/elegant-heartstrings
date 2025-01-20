import { useState } from "react";
import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

interface EventCTAProps {
  className?: string;
}

const EventCTA = ({ className }: EventCTAProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-fashionista-red/20" />
      
      <Card className="relative max-w-4xl mx-auto border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden group animate-fade-up">
        <div className="absolute inset-0 bg-gradient-to-r from-fashionista-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative p-8 md:p-12 space-y-6">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-playfair text-white">
              Ready to Create Your Fashion Event?
            </h2>
            <p className="text-lg text-gray-300 font-inter max-w-2xl">
              Transform your vision into reality. Join us in creating unforgettable fashion experiences that captivate and inspire.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg"
                  variant="gradient"
                  className="group/btn text-white shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <Plus className="w-5 h-5 mr-2 transition-transform group-hover/btn:rotate-90" />
                  Create New Event
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black/95 border-white/10 text-white">
                <DialogHeader>
                  <DialogTitle className="font-playfair text-2xl">Create New Event</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Fill out the details below to create your fashion event.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  {/* Event creation form will be implemented here */}
                  <p className="text-gray-300">Event creation form coming soon...</p>
                </div>
              </DialogContent>
            </Dialog>

            <Button 
              variant="outline" 
              size="lg"
              className="border-fashionista-pink text-fashionista-pink hover:bg-fashionista-pink hover:text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default EventCTA;