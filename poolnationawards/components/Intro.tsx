import Image from "next/image";
import intro from "@/assets/data/intro.json";

const Intro = () => {
  return (
    <div className="container mx-auto px-5 py-10 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5 md:gap-20 items-center max-w-7xl mx-auto">
        <div className="relative p-2 border border-border-primary rounded-2xl">
          <Image
            src={intro.image}
            alt="Intro"
            width={500}
            height={580}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src="/mobile-logo.png"
            alt="Intro"
            width={500}
            height={500}
            className="absolute top-1 right-1 w-24 h-24 md:w-40 md:h-40 "
          />
        </div>
        <div className="my-8 px-4">
          <h2 className="text-base md:text-xl font-medium uppercase">
            {intro.subtitle}
          </h2>
          <h1 className="text-2xl md:text-4xl font-bold text-text-primary">
            {intro.title}
          </h1>
          <p className="mt-4 text-base text-text-secondary">
            {intro.description}
          </p>
          <div className="mt-4"></div>
          <div className="float-end text-end">
            <h2 className="text-base md:text-xl font-semibold uppercase">
              {intro.Host}
            </h2>
            <p className="text-text-secondary font-semibold text-xs">
              {intro.Crew}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
