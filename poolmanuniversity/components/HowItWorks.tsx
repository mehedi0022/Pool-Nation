import React from "react";
import CustomButton from "./ui/CustomButton";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="bg-[#ffffff] dark:bg-gray-900/90 py-10">
      <div className="container mx-auto px-10">
        <div className="flex flex-col justify-center items-center">
          <CustomButton text="How It Works?" />
          <h1>Manage Everything For You!</h1>
        </div>

        <div className="relative grid grid-cols-3 gap-10 my-10 py-5">
          <Image
            src="/howItWorks.png"
            alt="Work Process"
            fill
            className="absolute object-contain"
          />
          <div className="flex flex-col gap-2.5 justify-start items-center px-5 min-h-[180px] max-w-[300px] mx-auto">
            <CustomButton text="Step 1" />
            <h2>Choose Your Package</h2>
            <h3 className="text-center">
              Explore and select the perfect plan tailored to your needs
            </h3>
          </div>
          <div className="flex flex-col gap-2.5 justify-end items-center px-5 min-h-[180px] max-w-[300px] mx-auto">
            <CustomButton text="Step 2" />
            <h2>Create Account</h2>
            <h3 className="text-center">
              Sign up quickly to unlock exclusive features
            </h3>
          </div>
          <div className="flex flex-col gap-2.5 justify-start items-center px-5 min-h-[180px] max-w-[300px] mx-auto">
            <CustomButton text="Step 3" />
            <h2>Install App & Enjoy</h2>
            <h3 className="text-center">
              Download the app and start your journey effortlessly!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
