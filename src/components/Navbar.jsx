import { useState } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import NestedDropdown from "./NestedDropdown";

const menuData = [
  { label: "About", href: "/Aboutme" },
  {
    label: "Leadership",
    href: "#leadership",
    subItems: [
      { label: "Founder's journey", href: "/Founderjourney" },
      { label: "Ceo strategy", href: "/Ceostrategy" },
    ],
  },
  { label: "Professional Roles", href: "/ProfessionalRoles" },
  { label: "Case studies", href: "/casestudy" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [openmenu, setopenmenu] = useState(false);

  return (
    <nav
      className="z-50 h-16 flex max-w-7xl items-center border-amber-950 border-2 justify-between
        pt-2 pb-2 lg:px-8 absolute top-12 w-[calc(100%-2rem)]  
        bg-gradient-to-r from-smoky_black/85 via-rosewood/85 to-smoky_black/85 
        animate-gradient rounded-full backdrop-blur-xs px-8"
    >
      {/* Logo */}
      <div className="flex lg:flex-1">
        <Link
          to="/"
          className="text-xl font-bold text-primary-600 flex items-center"
        >
          <span className="z-10 text-white">
            <span className="text-purple-950">My </span>Portfolio
          </span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex z-50">
        <NestedDropdown
          data={menuData}
          css1="flex space-x-3 text-sm font-semibold text-white/80"
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="hidden sm:flex md:hidden">
        <button
          className="text-white z-50"
          onClick={() => setopenmenu(!openmenu)}
        >
          {openmenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 right-0 h-full w-64 bg-smoky_black/95 
              shadow-lg p-6 z-40 md:hidden transition-transform duration-3000 ease-in-out 
              ${openmenu ? "translate-x-0" : "translate-x-full "}`}
      >
        <NestedDropdown
          data={menuData}
          css1="flex flex-col space-y-6 text-lg font-medium text-white"
        />
      </div>
    </nav>
  );
}
