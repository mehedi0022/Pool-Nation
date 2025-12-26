"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useState } from "react";

import winner from "@/assets/data/winner.json";
import Image from "next/image";

const PreviousYearWinner = () => {
  const [activeYear, setActiveYear] = useState("2025");
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center my-5">
          Previous Year Winners
        </h2>
        <p className="text-center mb-10">
          Select a year to view the winners. If no winners are displayed, it
          means there were no awards given that year.
        </p>
        <div className="relative">
          <Swiper
            slidesPerView={6.5}
            spaceBetween={20}
            freeMode={true}
            modules={[FreeMode]}
            className="w-full"
            breakpoints={{
              480: { slidesPerView: 3.5 },
              768: { slidesPerView: 4.5 },
              1024: { slidesPerView: 5.5 },
              1280: { slidesPerView: 5.5 },
              1536: { slidesPerView: 6.5 },
            }}
          >
            {["2026", "2025", "2024", "2023", "2022", "2021", "2020"].map(
              (year) => (
                <SwiperSlide key={year}>
                  <div
                    onClick={() => setActiveYear(year)}
                    className={`px-6 py-2.5 border rounded-md cursor-pointer hover:bg-linear-to-t from-[#ffffff] dark:from-[#0a0118] to-[#eef1e8] dark:to-[#2b2338] transition-all duration-300 ${
                      activeYear === year
                        ? "bg-linear-to-t from-[#ffffff] dark:from-[#0a0118] to-[#eef1e8] dark:to-[#2b2338]  border"
                        : "border hover:bg-card hover:border-secondary"
                    }`}
                  >
                    <h3 className="text-center">{year}</h3>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-20">
        {winner.filter((item) => item.year === parseInt(activeYear)).length ===
          0 && (
          <p className="text-center col-span-4">
            No winners available for {activeYear}
          </p>
        )}
        {winner
          .filter((item) => item.year === parseInt(activeYear))
          .map((item) => (
            <div
              key={item.id}
              className="border border-border-primary rounded-2xl overflow-hidden"
            >
              <div className="bg-linear-to-t from-[#ffffff] dark:from-[#0a0118] to-[#eef1e8] dark:to-[#2b2338] px-5 py-4">
                <h3 className=" text-xl font-bold">{item.name}</h3>
                <p className=" text-lg">{item.category}</p>
              </div>
              <Image
                src={item.image}
                alt={item.name}
                width={1066}
                height={1066}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PreviousYearWinner;
