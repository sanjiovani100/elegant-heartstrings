import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import { useUserRole } from "@/hooks/use-user-role";

import NavLogo from "./navbar/NavLogo";
import NavLinks from "./navbar/NavLinks";
import NavDropdowns from "./navbar/NavDropdowns";
import AuthButtons from "./navbar/AuthButtons";
import MobileMenu from "./navbar/MobileMenu";
import LanguageSwitcher from "./navbar/LanguageSwitcher";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { role } = useUserRole();

  const isSponsorsApplyPage = location.pathname === "/sponsors/apply";

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

  const getNavbarBackground = () => {
    if (isSponsorsApplyPage) {
      return 'bg-black/90 backdrop-blur-sm';
    }
    return isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent';
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${getNavbarBackground()} h-[var(--navbar-height)]`}
      style={{ top: 0 }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <NavLogo />
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <NavDropdowns />
            <LanguageSwitcher />
          </div>
          <div className="flex items-center space-x-4">
            <AuthButtons user={user} onSignOut={handleSignOut} />
            <MobileMenu 
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              role={role}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;