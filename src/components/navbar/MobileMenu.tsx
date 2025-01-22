import { Link } from "react-router-dom";
import { Menu, X, Users, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  role?: string;
}

const MobileMenu = ({ isOpen, onToggle, role }: MobileMenuProps) => {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <>
      <button
        className="md:hidden text-white p-2"
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center pt-20 space-y-6">
          <Link to="/events" className="nav-link text-[#F0F0F0] hover:text-white text-lg">Events</Link>
          <Link to="/tickets" className="nav-link text-[#F0F0F0] hover:text-white text-lg">Tickets</Link>
          
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

          <div className="flex items-center space-x-2 text-[#F0F0F0]">
            <Globe className="w-5 h-5" />
            <button
              className="px-3 py-1 hover:text-white transition-colors"
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <span>|</span>
            <button
              className="px-3 py-1 hover:text-white transition-colors"
              onClick={() => setLanguage('es')}
            >
              ES
            </button>
          </div>

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
    </>
  );
};

export default MobileMenu;