import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import CustomButton from "./ui/CustomButton";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto px-10 py-16 grid md:grid-cols-2 gap-8 bg-[url('/hero-bg.jpg')] dark:bg-[url('/dark-bg.jpg')] bg-cover bg-center rounded-2xl mt-6">
        <div className="flex flex-col justify-center">
          <CustomButton text="The only platform" />
          <h2 className="text-6xl font-bold mb-4 capitalize">
            Dedicated to elevating through Education
          </h2>
          <p className="mt-4 text-base">
            Pool Man University’s web platform and app offer a seamless way for
            business owners to enhance their team’s skills. Add your employees,
            assign relevant courses tailored to their roles, and monitor their
            progress through interactive quizzes.
          </p>

          <Button className="w-fit mt-6" size="lg">
            Get Started
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/hero-image.png"}
            alt="Hero Image"
            width={500}
            height={400}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
