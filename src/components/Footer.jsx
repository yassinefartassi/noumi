import { Facebook, Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto text-center text-gray-600 mb-4">
        <p>&copy; 2024 NOUMIDIA. All rights reserved.</p>
      </div>
      <div className="flex justify-center space-x-6 text-gray-600">
        <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-800" />
        <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-800" />
        <Phone className="w-6 h-6 cursor-pointer hover:text-gray-800" />
      </div>
    </footer>
  );
};
export default Footer;
