import { Menu, ShoppingCart, X } from "lucide-react";

import { useState } from "react";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="NOUMIE" className="h-10 w-auto object-contain" />
          <div className="text-2xl font-bold text-gray-800">NOUMIE</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-700 hover:text-black transition">
            Accueil
          </a>
          <a
            href="#nosProuits"
            className="text-gray-700 hover:text-black transition"
          >
            Nos produits
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-black transition"
          >
            À propos de nous
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-black transition"
          >
            Contactez-nous
          </a>
          <button aria-label="Panier">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-black transition" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
          aria-label="Ouvrir/Fermer le menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40"
            role="menu"
          >
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#"
                className="text-gray-700 hover:text-black"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </a>
              <a
                href="#nosProuits"
                className="text-gray-700 hover:text-black"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                Nos produits
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-black"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                À propos de nous
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-black"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                Contactez-nous
              </a>
              <button
                aria-label="Panier"
                className="text-left text-gray-700 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="w-6 h-6" />
                  <span>Panier</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
