import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  const slides = [
    {
      title: "Premium Dates",
      description: "Sélectionné avec soin",
      backgroundImage:
        "https://ffcuisine.fr/wp-content/uploads/2024/09/1726214894_comment-conserver-les-dattes-sans-les-abimer.jpg",

      textColor: "text-white",
    },
    {
      title: "Selection Organic",
      description: "Brise Pure",
      backgroundImage:
        "https://medias.reussir.fr/fruits-legumes/2023-06/img_2130.jpg",
      textColor: "text-white",
    },
    {
      title: "Sélection Bio",
      description: "Le meilleur de la nature",
      backgroundImage:
        "https://cache.marieclaire.fr/data/photo/w1000_ci/58/dattes.jpg",

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
                <a
                  href="#nosProuits"
                  className="bg-white text-black px-8 py-3 rounded-none hover:bg-gray-300 transition"
                >
                  Nos Produits
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
