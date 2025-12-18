import edgar from "@/public/Edgar-De-min.png";
import CustomButton from "./ui/CustomButton";
import Image from "next/image";
import { Button } from "./ui/button";

const WhyJoinUs = () => {
  return (
    <div className="container mx-auto flex gap-10">
      <div className="flex flex-col items-end basis-[40%]">
        <CustomButton text="Pool Pros" />
        <h2>Why Join Pool Pro!</h2>
        <p className="text-end">
          Pool Man University’s web platform and app offer a seamless way for
          business owners to enhance their team’s skills. Add your employees,
          assign relevant courses tailored to their roles, and monitor their
          progress through interactive quizzes.
        </p>
        <Button>Join Now</Button>
      </div>

      <div className="flex justify-center basis-[20%] bg-[url('/why-join-us-bg.jpg')] bg-top max-h-[420px]">
        <Image src={edgar} alt="Edgar De Jesus" className="object-top-left" />
      </div>

      <div className="basis-[40%]">
        <CustomButton text="Company" />
        <h2>Why Join Pool Pro!</h2>
        <p>
          Pool Man University’s web platform and app offer a seamless way for
          business owners to enhance their team’s skills. Add your employees,
          assign relevant courses tailored to their roles, and monitor their
          progress through interactive quizzes.
        </p>

        <Button>Join Now</Button>
      </div>
    </div>
  );
};

export default WhyJoinUs;
