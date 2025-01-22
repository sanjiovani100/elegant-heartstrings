import { Link } from "react-router-dom";
import { Users, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TranslatedContent } from "@/components/content/TranslatedContent";

const NavDropdowns = () => {
  return (
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
  );
};

export default NavDropdowns;