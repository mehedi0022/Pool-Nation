"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useState } from "react";

import galleryImage from "@/assets/data/galleryImages.json";
import Image from "next/image";

const PictureGallery = () => {
  const [activeYear, setActiveYear] = useState("2025");
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center my-5">
          Picture Gallery
        </h2>
        <p className="text-center mb-10">Previous Year Picture.</p>
        <div className="max-w-6xl mx-auto mb-10 px-5">
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            freeMode={true}
            modules={[FreeMode]}
            className="w-full"
            breakpoints={{
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {["2026", "2025", "2024", "2023", "2022", "2021"].map((year) => (
              <SwiperSlide key={year}>
                <div
                  onClick={() => setActiveYear(year)}
                  className={`px-6 py-2.5 border rounded-md cursor-pointer text-base font-semibold ${
                    activeYear === year
                      ? "bg-linear-to-t from-[#483B5E] dark:from-[#0a0118] to-[#1F0349] dark:to-[#2b2338] text-white transition-all duration-300"
                      : "hover:text-white hover:bg-linear-to-t from-[#483B5E] dark:from-[#0a0118] to-[#1F0349] dark:to-[#2b2338]"
                  }`}
                >
                  <h3 className="text-center">{year}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center items-center pb-10">
          {galleryImage
            .filter((item) => item.year === activeYear)
            .map((item) => (
              <div key={item.id} className="w-full max-w-4xl">
                {/* Title */}
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-lg text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Slider */}
                <Swiper
                  modules={[EffectCoverflow, Autoplay]}
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={3}
                  spaceBetween={-60}
                  loop={true}
                  autoplay={{
                    delay: 1500, // ✅ Auto-play speed
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, // optional (nice UX)
                  }}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1.5,
                    slideShadows: false,
                  }}
                  className="w-full"
                >
                  {item.thumbnail.map((thumb, index) => (
                    <SwiperSlide key={index} className="w-75 md:w-95">
                      <Image
                        src={thumb.url}
                        alt={thumb.alt}
                        width={400}
                        height={400}
                        className="rounded-xl shadow-md object-cover w-full h-100"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PictureGallery;
