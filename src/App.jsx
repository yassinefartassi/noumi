import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts ";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

// Hero Section Component

const App = () => {
  return (
    <div className=" font-sans text-gray-800">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
