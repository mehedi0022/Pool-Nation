import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-12 ">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Empowering Pool Business Owners
        </h1>
        <p className="text-lg md:text-2xl text-center mb-12">
          Join our community to access resources, training, and support to grow
          your pool business.
        </p>
      </div>
      <div className="flex justify-center items-end">
        <Image
          src="/image/John.png"
          alt="Hero Image"
          width={360}
          height={620}
          className="-mr-25"
        />
        <Image
          src="/image/Edgar-De-Jesus.png"
          alt="Hero Image"
          width={360}
          height={620}
          className="z-50"
        />
        <Image
          src="/image/Jack-jj.png"
          alt="Hero Image"
          width={360}
          height={620}
          className="-ml-25"
        />
      </div>
    </div>
  );
};

export default Hero;
