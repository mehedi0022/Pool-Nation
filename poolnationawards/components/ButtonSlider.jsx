"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useState } from "react";

const ButtonSlider = ({ year }) => {
  const [activeYear, setActiveYear] = useState(null);
  return (
    <div className="flex justify-center items-center gap-5">
      <Swiper
        slidesPerView={2.5}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        className="w-full"
        breakpoints={{
          480: { slidesPerView: 3.5 },
          768: { slidesPerView: 4.5 },
          1024: { slidesPerView: 5.5 },
          1280: { slidesPerView: 6.5 },
          1536: { slidesPerView: 8.5 },
        }}
      >
        <SwiperSlide className="flex justify-center">
          <div
            onClick={() => setActiveYear(year)}
            className={`px-6 py-2.5 border rounded-md cursor-pointer transition ${
              activeYear === year
                ? "bg-primary text-white border-primary"
                : "border-border hover:bg-card hover:border-secondary"
            }`}
          >
            <h3 className="text-center">{year}</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ButtonSlider;
