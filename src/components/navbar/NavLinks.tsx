import { Link } from "react-router-dom";
import { TranslatedContent } from "@/components/content/TranslatedContent";

const NavLinks = () => {
  return (
    <div className="hidden md:flex space-x-8">
      <Link to="/events" className="nav-link text-[#F0F0F0] hover:text-white text-lg">
        <TranslatedContent translations={[]} contentKey="nav.events" defaultValue="Events" />
      </Link>
      <Link to="/tickets" className="nav-link text-[#F0F0F0] hover:text-white text-lg">
        <TranslatedContent translations={[]} contentKey="nav.tickets" defaultValue="Tickets" />
      </Link>
      <a href="#about" className="nav-link text-[#F0F0F0] hover:text-white text-lg">
        <TranslatedContent translations={[]} contentKey="nav.about" defaultValue="About" />
      </a>
      <a href="#contact" className="nav-link text-[#F0F0F0] hover:text-white text-lg">
        <TranslatedContent translations={[]} contentKey="nav.contact" defaultValue="Contact" />
      </a>
    </div>
  );
};

export default NavLinks;