import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  const heroSlides = [
    {
      title: "Premium Medjool Dates",
      description: "Handpicked from the finest orchards",
      background: "bg-[#8B4513]",
      buttonText: "Shop Now",
    },
    {
      title: "Organic Ajwa Dates",
      description: "Sustainably sourced, naturally sweet",
      background: "bg-[#A0522D]",
      buttonText: "Explore Collection",
    },
    {
      title: "Rare Deglet Noor",
      description: "Exquisite taste, limited stock",
      background: "bg-[#D2691E]",
      buttonText: "Order Today",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="h-[600px] w-full"
    >
      {heroSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className={`flex items-center justify-center h-full text-white text-center ${slide.background}`}
          >
            <div className="max-w-2xl px-4">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl mb-6">{slide.description}</p>
              <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
