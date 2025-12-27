import ticket from "@/assets/data/ticket.json";
import { CircleCheck, CircleX } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden py-20">
      <video
        src="/pool-nation-awards-2025.mp4"
        autoPlay
        loop
        muted
        className="absolute w-full min-h-full max-w-none -z-10"
      ></video>

      <div className="absolute w-full min-h-full max-w-none -z-5 bg-linear-to-t from-[#000000] dark:from-[#0A0118] from-0% to-[#0000000] opacity-100 "></div>

      <div className="flex justify-center gap-20 items-center">
        <div>
          <button className="text-white py-1 px-4 rounded-full border">
            Welcome to The
          </button>
          <h1 className="text-6xl text-white font-bold my-4">
            Pool Nation® Awards {new Date().getFullYear()}
          </h1>
          <p className="text-white text-xl">
            A Nation of Pool Pros ™ <br /> Recognizing Dedication, Skill, and
            Leadership in the Pool Industry
          </p>
          <div className="mt-5 flex gap-5">
            <Button size="lg" variant="default">
              Nominate Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        <div className="max-w-100 border bg-linear-to-t from-[#ece4e4] dark:from-[#0a0118] to-[#afdfeb] dark:to-[#2b2338] backdrop-blur-md px-5 py-5 rounded-lg">
          <h2 className="text-4xl font-bold my-4">{ticket.title}</h2>
          <p className="mb-4">{ticket.description}</p>
          <ul>
            {ticket.features.map((feature, index) => (
              <li key={index} className="mb-2 pb-1">
                {feature.enabled ? (
                  <CircleCheck className="inline-block mr-2 text-2xl text-green-600" />
                ) : (
                  <CircleX className="inline-block mr-2 text-2xl text-red-600" />
                )}
                {feature.name}
              </li>
            ))}
          </ul>
          <del>
            <span className="text-sm">{ticket.price}</span>
          </del>{" "}
          <span className="text-5xl font-bold">{ticket.offer_price}</span>{" "}
          <span className="text-sm">{ticket.currency}</span>
          <Button className="w-full mt-6" variant="outline">
            Get Ticket Now
          </Button>
        </div>
      </div>
    </div>
  );
};
