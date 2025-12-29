import afterParty from "@/assets/data/AfterParty.json";
import Image from "next/image";
import { Button } from "./ui/button";

const AfterParty = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col md:flex-row gap-10 px-5 py-10 md:py-20">
        <div className="basis-[70%]">
          <h1 className="text-3xl font-bold mb-4">{afterParty.title}</h1>
          <p className="">{afterParty.description}</p>
          <p className="mt-4">
            Come enjoy great company, lively conversation, and unforgettable
            moments with fellow pool pros and industry leaders. Let’s raise a
            glass to the best in the business — brought to you by HASA!
          </p>

          <div className="mt-1 flex flex-col gap-1 items-end">
            <p className="text-text-secondary font-semibold text-xs">
              Hosted by: {afterParty.host}
            </p>
          </div>

          <div className="h-px bg-linear-to-r from-[#f8f7f7] dark:from-[#0a0118] dark:via-[#2b2338] via-[#dddddd] dark:to-[#0a0118] to-[#f8f7f7] "></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 py-4">
            {afterParty.images.map((image, index) => (
              <div
                key={index}
                className="relative w-full aspect-16/10 overflow-hidden rounded-xl"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="h-px bg-linear-to-r from-[#f8f7f7] dark:from-[#0a0118] dark:via-[#2b2338] via-[#dddddd] dark:to-[#0a0118] to-[#f8f7f7] "></div>
        </div>

        <div className="basis-[30%]">
          <div className="bg-linear-to-t from-[#ece4e4] dark:from-[#0a0118] to-[#afdfeb] dark:to-[#2b2338] p-8 rounded-lg border  shadow-md">
            <h2 className="text-3xl font-bold mb-2">Platinum Sponsor</h2>
            <Image
              src="/img/afterparty/HASA.png"
              alt="HASA Logo"
              width={200}
              height={100}
              className="mb-4"
            />
            <p>
              <strong>Date:</strong> {afterParty.date}
            </p>
            <p>
              <strong>Time:</strong> {afterParty.time}
            </p>
            <p>
              <strong>Location:</strong> {afterParty.location.name},{" "}
              {afterParty.location.address}
            </p>

            <Button className="w-full mt-6 cursor-pointer" variant="outline">
              Book Your Spot Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterParty;
