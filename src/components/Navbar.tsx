import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Check and set initial auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of your account.",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Error signing out",
        description: "There was a problem signing you out.",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="group px-3">
            <img
              src="/lovable-uploads/196663b0-0dd0-4f0e-a715-b7ce52470ba9.png"
              alt="Fashionistas Logo - High-Fashion Event Branding"
              className="w-[120px] md:w-[140px] h-auto transition-transform duration-300 group-hover:scale-105 hover:filter hover:brightness-125"
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/events" className="nav-link text-[#F0F0F0] hover:text-white text-lg">Events</Link>
            <Link to="/tickets" className="nav-link text-[#F0F0F0] hover:text-white text-lg">Tickets</Link>
            <a href="#about" className="nav-link text-[#F0F0F0] hover:text-white text-lg">About</a>
            <a href="#contact" className="nav-link text-[#F0F0F0] hover:text-white text-lg">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/profile">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Profile
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button className="bg-fashionista-red hover:bg-fashionista-red/90 text-white">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;