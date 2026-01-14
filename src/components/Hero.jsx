'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import '../app/globals.css'; 

export default function Hero() {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
  ];

  return (
    <div className="relative  w-full mx-auto h-[80vh]  overflow-hidden">
      
      {/* Background Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        effect="fade"
        className="w-full h-full z-0"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Center text */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
        <div className="animate-fade-up">
          <h1
            className="text-3xl md:text-5xl font-bold mb-3"
            style={{ color: "#CE8946" }}
          >
            Smart Tools for a Smarter Kitchen
          </h1>

          <p
            className="text-base md:text-lg mb-6 max-w-xl mx-auto"
            style={{ color: "#CE8946" }}
          >
            Discover premium kitchen tools designed to make cooking easier, faster and better.
          </p>

          <a
            href="/items"
            className="inline-block px-7 py-3 rounded-lg text-base md:text-lg font-semibold transition hover:opacity-90"
            style={{
              backgroundColor: "#CE8946",
              color: "#ffffff",
            }}
          >
            Explore Products
          </a>
        </div>
      </div>

    </div>
  );
}
