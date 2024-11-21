import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  Facebook,
  Instagram,
  Menu,
  Phone,
  ShoppingCart,
  X,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "./assets/noumi1.jpeg";
import image2 from "./assets/noumi2.jpeg";
import logo from "./assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="NOUM🌴" className="h-10 w-auto object-contain" />
          <div className="text-2xl font-bold text-gray-800">NOUMI</div>
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

// Hero Section Component
const HeroSection = () => {
  const slides = [
    {
      title: "Premium Dates",
      description: "Sourced with care",
      backgroundImage:
        "https://img.freepik.com/photos-gratuite/dattes-jaunes-seches-beton-autour-feuilles-vertes_114579-25223.jpg?t=st=1732227353~exp=1732230953~hmac=3dc7b1327770a9455cabc1a519301635dfa11fcb26c2047fb53dd0c33bf4dca0&w=1380",
      textColor: "text-white",
    },
    {
      title: "Organic Selection",
      description: "Nature's finest",
      backgroundImage:
        "https://media.istockphoto.com/id/516816754/photo/raw-organic-medjool-dates.jpg?b=1&s=612x612&w=0&k=20&c=bxg6UD0jzL1B7jkVoroYAMB6XKSXK5at7GYwkenO4sM=",
      textColor: "text-white",
    },
  ];

  return (
    <div className="pt-16">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-[70vh] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex items-center justify-center h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
              }}
            >
              <div
                className={`max-w-2xl px-4 text-center ${slide.textColor} bg-black/50 p-8 rounded-md`}
              >
                <h2 className="text-4xl md:text-6xl font-light mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 font-light">
                  {slide.description}
                </p>
                <button className="bg-white text-black px-8 py-3 rounded-none hover:bg-gray-300 transition">
                  Nos Produits
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const FeaturedProducts = () => {
  const products = [
    {
      name: "Medjool Select",
      price: "$24.99",
      description: "Premium grade, 7 pieces sachet",
      image:
        "https://img.freepik.com/photos-gratuite/dattes-jaunes-seches-beton-autour-feuilles-vertes_114579-25223.jpg?t=st=1732227353~exp=1732230953~hmac=3dc7b1327770a9455cabc1a519301635dfa11fcb26c2047fb53dd0c33bf4dca0&w=1380", // Replace with the correct image URL
    },
    {
      name: "Medjool Select",
      price: "$24.99",
      description: "Premium grade, 1kg box",
      image:
        "https://media.istockphoto.com/id/516816754/photo/raw-organic-medjool-dates.jpg?b=1&s=612x612&w=0&k=20&c=bxg6UD0jzL1B7jkVoroYAMB6XKSXK5at7GYwkenO4sM=", // Replace with the correct image URL
    },
    {
      name: "Medjool Select",
      price: "$24.99",
      description: "Premium grade, 500g box",
      image:
        "https://img.freepik.com/photos-gratuite/dattes-jaunes-seches-beton-autour-feuilles-vertes_114579-25223.jpg?t=st=1732227353~exp=1732230953~hmac=3dc7b1327770a9455cabc1a519301635dfa11fcb26c2047fb53dd0c33bf4dca0&w=1380", // Replace with the correct image URL
    },
    {
      name: "Medjool Select",
      price: "$14.99",
      description: "downgraded grade, 7 pieces sachet",
      image:
        "https://media.istockphoto.com/id/516816754/photo/raw-organic-medjool-dates.jpg?b=1&s=612x612&w=0&k=20&c=bxg6UD0jzL1B7jkVoroYAMB6XKSXK5at7GYwkenO4sM=", // Replace with the correct image URL
    },
    {
      name: "Medjool Select",
      price: "$14.99",
      description: "downgraded grade, 1kg box",
      image:
        "https://img.freepik.com/photos-gratuite/dattes-jaunes-seches-beton-autour-feuilles-vertes_114579-25223.jpg?t=st=1732227353~exp=1732230953~hmac=3dc7b1327770a9455cabc1a519301635dfa11fcb26c2047fb53dd0c33bf4dca0&w=1380", // Replace with the correct image URL
    },
    {
      name: "Medjool Select",
      price: "$14.99",
      description: "downgraded grade, 500g box",
      image:
        "https://media.istockphoto.com/id/516816754/photo/raw-organic-medjool-dates.jpg?b=1&s=612x612&w=0&k=20&c=bxg6UD0jzL1B7jkVoroYAMB6XKSXK5at7GYwkenO4sM=", // Replace with the correct image URL
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center" id="nosProuits">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="group border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
          >
            {/* Product Image */}
            <div className="aspect-square mb-4 rounded overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Product Details */}
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <p className="text-lg font-semibold text-gray-900">
              {product.price}
            </p>
            <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
              Acheter via whatssApp
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-square bg-gray-200 rounded">
          <div className="aspect-square bg-gray-200 rounded overflow-hidden">
            <img
              src={logo}
              alt="Our Story Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            We source the finest dates from sustainable farms, ensuring premium
            quality and exceptional taste in every bite.
          </p>
          <button className="px-8 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "These are the best dates I've ever had! The quality is unmatched, and they taste amazing.",
      name: "Sarah A.",
      role: "Food Enthusiast",
      rating: 5,
    },
    {
      quote:
        "I love how these dates are sustainably sourced. A healthy and ethical choice for my family.",
      name: "James K.",
      role: "Nutritionist",
      rating: 4,
    },
    {
      quote:
        "Noumidia dates are perfect for every occasion. They’ve become a staple in my kitchen.",
      name: "Emma R.",
      role: "Chef",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 !== 0; // Check for half-star
    const totalStars = 5;

    return Array.from({ length: totalStars }, (_, i) => {
      if (i < fullStars) {
        // Render full star
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.919 1.514 8.272L12 18.902l-7.45 4.595 1.514-8.272L0 9.306l8.332-1.151z" />
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        // Render half star
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.919 1.514 8.272L12 18.902l-7.45 4.595 1.514-8.272L0 9.306l8.332-1.151z" />
            <path
              d="M12 .587l-7.45 15.5 1.514 8.272L12 18.902V.587z"
              className="text-gray-300"
            />
          </svg>
        );
      } else {
        // Render empty star
        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.919 1.514 8.272L12 18.902l-7.45 4.595 1.514-8.272L0 9.306l8.332-1.151z" />
          </svg>
        );
      }
    });
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to receive updates and exclusive offers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

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

const App = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
