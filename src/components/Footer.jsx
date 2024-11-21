const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-light mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-light mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-light mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-light mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-600">
          <p>&copy; 2024 DATES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
