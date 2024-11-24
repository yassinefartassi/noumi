import { Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="NOUM🌴" className="h-10 w-auto object-contain" />
          <div className="text-2xl font-bold text-gray-800">NOUMIE</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#nosProuits"
            className="text-gray-700 hover:text-black transition"
          >
            Shop
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-black transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-black transition"
          >
            Contact
          </a>
          <button>
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-black transition" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="absolute top-full left-0 w-full bg-white shadow-md z-40"
            role="menu"
          >
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#nosProuits"
                className="text-gray-700 hover:text-black"
                role="menuitem"
              >
                Shop
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-black"
                role="menuitem"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-black"
                role="menuitem"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
