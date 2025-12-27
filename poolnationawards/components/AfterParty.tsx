import afterParty from "@/assets/data/AfterParty.json";
import Image from "next/image";

const AfterParty = () => {
  return (
    <div>
      <div className="container mx-auto  flex flex-row gap-10">
        <div className="basis-[70%]">
          <h1 className="text-3xl font-bold">{afterParty.title}</h1>
          <p className="">{afterParty.description}</p>

          <div className="mt-1 flex flex-col gap-1 items-end">
            <p className="text-text-secondary font-semibold text-xs">
              Hosted by: {afterParty.host}
            </p>
          </div>

          <div className="h-px bg-linear-to-r from-[#f8f7f7] dark:from-[#0a0118] dark:via-[#2b2338] via-[#dddddd] dark:to-[#0a0118] to-[#f8f7f7] "></div>

          <div className="grid grid-cols-5 gap-4 my-3">
            {afterParty.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={1920}
                  height={1080}
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          <div className="h-px bg-linear-to-r from-[#f8f7f7] dark:from-[#0a0118] dark:via-[#2b2338] via-[#dddddd] dark:to-[#0a0118] to-[#f8f7f7] "></div>
        </div>

        <div className="basis-[30%]">
          <div className="bg-linear-to-t from-[#483B5E] dark:from-[#0a0118] to-[#1F0349] dark:to-[#2b2338] p-4 rounded-lg border  shadow-md">
            <h2 className="text-xl font-semibold mb-2">Event Details</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterParty;
