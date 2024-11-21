import { Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-light">DATES</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-black">
              Shop
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Contact
            </a>
            <button onClick={() => setCartOpen(!cartOpen)}>
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700">
              Shop
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700">
              About
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
