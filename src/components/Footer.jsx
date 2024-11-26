import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12" id="footer">
      <div className="max-w-7xl mx-auto text-center text-gray-600 mb-4">
        <p>&copy; 2024 NOUMIDIA. All rights reserved.</p>
      </div>
      <div className="flex justify-center space-x-6 text-gray-600">
        <a href="https://www.instagram.com/noum.iedattes/profilecard/?igsh=cnBqeGl1NDl2M3Ez">
          <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-800" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61568993290586&mibextid=ZbWKwL">
          <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-800" />
        </a>
        <a href="tel:+212637123821">
          <Phone className="w-6 h-6 cursor-pointer hover:text-gray-800" />
        </a>
        <a href="mailto:noumiedattes@gmail.com">
          <Mail />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
