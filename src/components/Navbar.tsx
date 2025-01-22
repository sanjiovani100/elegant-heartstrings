import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import { useUserRole } from "@/hooks/use-user-role";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslatedContent } from "@/components/content/TranslatedContent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Users, Menu, X, Globe } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { role } = useUserRole();
  const { currentLanguage, setLanguage } = useLanguage();

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
          <Link to="/" className="group px-3">
            <img
              src="/lovable-uploads/196663b0-0dd0-4f0e-a715-b7ce52470ba9.png"
              alt="Fashionistas Logo"
              className="w-[120px] md:w-[140px] h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/events" className="nav-link text-[#F0F0F0] hover:text-white text-lg">
              <TranslatedContent translations={[]} contentKey="nav.events" defaultValue="Events" />
            </Link>
            <Link to="/tickets" className="nav-link text-[#F0F0F0] hover:text-white text-lg">
              <TranslatedContent translations={[]} contentKey="nav.tickets" defaultValue="Tickets" />
            </Link>
            
            {/* Partners Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link text-[#F0F0F0] hover:text-white text-lg inline-flex items-center">
                <Users className="w-5 h-5 mr-1" />
                <TranslatedContent translations={[]} contentKey="nav.partners" defaultValue="Partners" />
                <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/90 border border-white/10">
                <DropdownMenuItem className="focus:bg-white/10">
                  <Link to="/sponsors" className="text-white w-full">
                    <TranslatedContent translations={[]} contentKey="nav.sponsors" defaultValue="Sponsors" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-white/10">
                  <Link to="/designer" className="text-white w-full">
                    <TranslatedContent translations={[]} contentKey="nav.designers" defaultValue="Designers" />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-white/10">
                  <Link to="/models" className="text-white w-full">
                    <TranslatedContent translations={[]} contentKey="nav.models" defaultValue="Models" />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#about" className="nav-link text-[#F0F0F0] hover:text-white text-lg">
              <TranslatedContent translations={[]} contentKey="nav.about" defaultValue="About" />
            </a>
            <a href="#contact" className="nav-link text-[#F0F0F0] hover:text-white text-lg">
              <TranslatedContent translations={[]} contentKey="nav.contact" defaultValue="Contact" />
            </a>
            {role === "admin" && (
              <>
                <Link to="/admin/roles" className="nav-link text-[#F0F0F0] hover:text-white text-lg">
                  <TranslatedContent translations={[]} contentKey="nav.manageRoles" defaultValue="Manage Roles" />
                </Link>
                <Link to="/admin/events/create" className="nav-link text-[#F0F0F0] hover:text-white text-lg">
                  <TranslatedContent translations={[]} contentKey="nav.createEvent" defaultValue="Create Event" />
                </Link>
              </>
            )}
          </div>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center px-3 py-2 text-[#F0F0F0] hover:text-white transition-colors">
              <Globe className="w-5 h-5 mr-2" />
              <span className="uppercase">{currentLanguage}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black/90 border border-white/10">
              <DropdownMenuItem 
                className="focus:bg-white/10 text-white"
                onClick={() => setLanguage('en')}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="focus:bg-white/10 text-white"
                onClick={() => setLanguage('es')}
              >
                Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Navigation */}
          <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col items-center pt-20 space-y-6">
            <Link to="/events" className="nav-link text-[#F0F0F0] hover:text-white text-lg">Events</Link>
            <Link to="/tickets" className="nav-link text-[#F0F0F0] hover:text-white text-lg">Tickets</Link>
            
            {/* Partners Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link text-[#F0F0F0] hover:text-white text-lg inline-flex items-center">
                <Users className="w-5 h-5 mr-1" />
                Partners
                <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/90 border border-white/10">
                <DropdownMenuItem className="focus:bg-white/10">
                  <Link to="/sponsors" className="text-white w-full">Sponsors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-white/10">
                  <Link to="/designer" className="text-white w-full">Designers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-white/10">
                  <Link to="/models" className="text-white w-full">Models</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#about" className="nav-link text-[#F0F0F0] hover:text-white text-lg">About</a>
            <a href="#contact" className="nav-link text-[#F0F0F0] hover:text-white text-lg">Contact</a>
            {role === "admin" && (
              <>
                <Link to="/admin/roles" className="nav-link text-[#F0F0F0] hover:text-white text-lg">
                  Manage Roles
                </Link>
                <Link to="/admin/events/create" className="nav-link text-[#F0F0F0] hover:text-white text-lg">
                  Create Event
                </Link>
              </>
            )}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/profile">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    <TranslatedContent translations={[]} contentKey="nav.profile" defaultValue="Profile" />
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                  onClick={handleSignOut}
                >
                  <TranslatedContent translations={[]} contentKey="nav.signOut" defaultValue="Sign Out" />
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="gradient" className="text-white">
                  <TranslatedContent translations={[]} contentKey="nav.signIn" defaultValue="Sign In" />
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