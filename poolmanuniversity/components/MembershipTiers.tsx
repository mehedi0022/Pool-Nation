import { CircleCheck, CircleX } from "lucide-react";

import membership from "@/assets/data/membership.json";
import { Button } from "./ui/button";

const MembershipTiers = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-5 mt-6 mb-6">
      <div className="flex gap-4">
        {membership.map((membership_package, index) => (
          <div key={index} className="border p-4 rounded-2xl shadow">
            <h4>{membership_package.title}</h4>
            <h1>${membership_package.price_per_month}/Month</h1>
            <p>{membership_package.description}</p>
            <hr className="my-4" />
            <ul className="space-y-1.5">
              {membership_package.features?.map((feature, index) => (
                <li
                  key={index}
                  className="flex justify-start items-center gap-2.5"
                >
                  <CircleCheck size={20} className="text-green-600" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>

            {membership_package.features_not_available.length > 0 && (
              <ul className="space-y-1.5 mt-1.5">
                {membership_package.features_not_available?.map(
                  (feature, index) => (
                    <li
                      key={index}
                      className="flex justify-start items-center gap-2.5 opacity-65"
                    >
                      <CircleX size={20} className="text-red-600" />
                      <p>
                        <del>{feature}</del>
                      </p>
                    </li>
                  )
                )}
              </ul>
            )}

            <Button className="w-full cursor-pointer mt-4">
              <a href="http://google.com">Join Now</a>
            </Button>
          </div>
        ))}
      </div>

      <div>
        <h4>Membership Tiers</h4>
        <h2>Ready to Transform Your Pool Business?</h2>
        <p>
          Join the fastest-growing community of pool professionals mastering
          business, finance, and leadership. Unlock exclusive training,
          mentorship, and rewards designed to help you grow faster than ever.
        </p>
        <p>
          Whether you’re building your foundation or ready to scale, Pool Nation
          has a membership designed to help you grow, profit, and thrive.
        </p>

        <h3>Why Join Pool Nation?</h3>
        <ul>
          <li>Proven business systems that drive results</li>
          <li>Real mentorship from industry leaders</li>
          <li>A supportive community built for your success</li>
        </ul>

        <h4>
          Your growth starts here — pick your plan and begin your journey.
        </h4>
      </div>
    </div>
  );
};

export default MembershipTiers;
