import CustomButton from "./ui/CustomButton";
import Image from "next/image";
import { Button } from "./ui/button";
import features from "@/assets/data/whyJoinUs.json";

const WhyJoinUs = () => {
  return (
    <>
      <div className="bg-[#ffffff] dark:bg-gray-900/90 py-10">
        <div className="container mx-auto px-10 flex flex-col md:flex-row gap-5 md:gap-10 mt-10 md:mt-20">
          <div className="flex flex-col items-end basis-[40%]">
            <CustomButton text="Pool Pros" />
            <h3 className="my-2">Why Join Pool Pro!</h3>
            <p className="text-sm md:text-base text-end">
              Pool Man University’s web platform and app offer a seamless way
              for business owners to enhance their team’s skills. Add your
              employees, assign relevant courses tailored to their roles, and
              monitor their progress through interactive quizzes.
            </p>
            <div></div>
            <Button className="mt-6">Join Now</Button>
          </div>

          <div className="relative basis-[20%] w-full flex items-center justify-center">
            {/* Background image */}
            <Image
              src="/why-join-us-bg.jpg"
              alt="Background"
              fill
              className="object-cover rounded-xl"
              priority
            />

            {/* Main subject image */}
            <Image
              src="/Edgar-De-min.png"
              alt="Feature"
              width={200}
              height={100}
              className="overflow-hidden z-10"
            />
          </div>

          <div className="basis-[40%]">
            <CustomButton text="Company" />
            <h3 className="my-2">Why Join Pool Pro!</h3>
            <p className="text-sm md:text-base text-start">
              Pool Man University’s web platform and app offer a seamless way
              for business owners to enhance their team’s skills. Add your
              employees, assign relevant courses tailored to their roles, and
              monitor their progress through interactive quizzes.
            </p>

            <Button className="mt-6">Join Now</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-10 mt-10">
        <div className="flex flex-col items-center justify-center my-10">
          <CustomButton text="Why Join With Us" />
          <h1 className="text-center text-sm font-bold">
            Manage Everything For You!
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mt-10 md:mt-20 content-center">
          <div>
            <div className="flex flex-col gap-6">
              {features.slice(0, 4).map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-3 justify-center items-center dark:bg-gray-900/90 bg-[#FAF8FF] py-2 px-4 border shadow rounded-md"
                >
                  <div>
                    <Image
                      src={feature.icon}
                      width={60}
                      height={60}
                      alt={feature.title}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="relative w-full flex items-center justify-center">
              {/* Background image */}
              <Image
                src="/features-mobile-bg.png"
                alt="Background"
                fill
                className="object-contain"
                priority
              />

              {/* Main subject image */}
              <Image
                src="/features-mobile.png"
                alt="Feature"
                width={340}
                height={100}
                className="relative z-10"
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {features.slice(4, 8).map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-3 justify-center items-center dark:bg-gray-900/90 bg-[#FAF8FF] py-2 px-4 border shadow rounded-md"
                >
                  <div>
                    <Image
                      src={feature.icon}
                      width={60}
                      height={60}
                      alt={feature.title}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyJoinUs;
