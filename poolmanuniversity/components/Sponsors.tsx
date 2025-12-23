"use client";
import { motion } from "motion/react";
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
  return (
    <div className="container mx-auto px10 flex flex-col justify-center items-center mt-6">
      <h1 className="text-center text-3xl font-bold mt-4">Official Sponsors</h1>
      <div className="flex gap-4 overflow-x-hidden sponserGreadient">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 gap-4"
        >
          {logo.map((item, index) => (
            <Image
              key={index}
              src={item.url}
              alt={item.name}
              width={150}
              height={100}
              className="rounded-xl border shadow-md my-4"
            />
          ))}
        </motion.div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 gap-4"
        >
          {logo.map((item, index) => (
            <Image
              key={index}
              src={item.url}
              alt={item.name}
              width={150}
              height={100}
              className="rounded-xl border shadow-md my-4"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;
