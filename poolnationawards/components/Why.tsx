import Image from "next/image";
import why from "../assets/data/why.json";

const Why = () => {
  return (
    <div className="bg-[#0F0520]">
      <div className="container mx-auto px-5 py-10 md:py-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Why Should You Attend?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {why.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl p-3 mb-2.5 md:mb-8 hover:border-blue-400 transition duration-200"
            >
              <div className="bg-linear-to-t from-[#ece4e4] dark:from-[#0a0118] to-[#afdfeb] dark:to-[#2b2338] p-4 rounded-xl h-full">
                <div className="flex justify-start items-end gap-5 mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="border p-2 rounded-md bg-white shadow mt-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                </div>
                <p className="text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
