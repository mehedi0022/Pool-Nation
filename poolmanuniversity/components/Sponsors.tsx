"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const logo = [
  { name: "AquaStar", url: "/soponser/AquaStar.jpeg" },
  { name: "Bluerayxl", url: "/soponser/Bluerayxl.jpg" },
  { name: "Hayward", url: "/soponser/Hayward.jpg" },
  { name: "HPSG", url: "/soponser/HPSG.webp" },
  { name: "logoSPPA", url: "/soponser/logoSPPA-min.jpg" },
  { name: "Natural", url: "/soponser/Natural.jpg" },
  { name: "pool brain", url: "/soponser/pool-brain.webp" },
  { name: "pool side tech", url: "/soponser/pool-side-tech.webp" },
  { name: "Reypak", url: "/soponser/Reypak.webp" },
];

const Sponsors = () => {
  const plugin = React.useRef(Autoplay({ stopOnInteraction: true }));

  return (
    <div className="container mx-auto px-10 flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl font-bold mt-4">Official Sponsors</h1>
      <div>
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-1">
            {logo.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/4 lg:basis-1/6 mt-4"
              >
                <div className="p-1">
                  <Card className="p-0">
                    <CardContent className="flex aspect-auto items-center justify-center p-0">
                      <Image
                        className="w-full shadow rounded-lg"
                        src={item.url}
                        alt={item.name}
                        width={100}
                        height={100}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Sponsors;
