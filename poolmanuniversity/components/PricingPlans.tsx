import React from "react";
import CustomButton from "./ui/CustomButton";
import pricing from "@/assets/data/pricing.json";
import { BadgeCheck } from "lucide-react";
import { Button } from "./ui/button";

const PricingPlans = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col items-center justify-center my-10">
        <CustomButton text="Pricing Plans" />
        <h1>Choose The Plans That Suits You!</h1>

        <div className="flex gap-3 border p-2 mt-6 rounded-xl ">
          <Button>Monthly</Button>
          <Button>Yearly</Button>
        </div>
      </div>

      <div className="w-6xl mx-auto grid grid-cols-3 gap-10">
        {pricing.map((plans, index) => (
          <div
            key={index}
            className="border dark:bg-gray-900/90 bg-[#FAF8FF] shadow-md p-6 rounded-xl flex flex-col justify-between"
          >
            <div>
              <h2 className="my-2">{plans.title}</h2>
              <h1 className="my-2">
                ${plans.price_per_month}
                <span className="text-xl">/Month</span>
              </h1>

              <h3 className="my-4">{plans.description}</h3>
              <hr className="my-3.5" />
              <div className="flex flex-col gap-1">
                {plans.features.map((feature, index) => (
                  <h4 key={index} className="flex gap-1.5">
                    <BadgeCheck /> {feature}
                  </h4>
                ))}
              </div>
            </div>

            <div>
              <Button className="w-full mt-6" asChild>
                <a href={plans.purchase_link}>Register Now!</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
