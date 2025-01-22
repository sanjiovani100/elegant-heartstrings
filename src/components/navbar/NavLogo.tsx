import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/" className="group px-3">
      <img
        src="/lovable-uploads/196663b0-0dd0-4f0e-a715-b7ce52470ba9.png"
        alt="Fashionistas Logo"
        className="w-[120px] md:w-[140px] h-auto transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
};

export default NavLogo;