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
    {
      title: "Organic Selection",
      description: "Nature's finest",
      backgroundImage:
        "https://fr.le360.ma/resizer/v2/23JXIOWTHRAX7EMU34FY6P7HCU.jpg?auth=abadae4ab2476d2f4e90f6e9ee71a3580e682f4de473788ab27cbf2d9da049ae&smart=true&width=1216&height=684",
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
