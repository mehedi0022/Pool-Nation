import { CheckCheck, CircleCheck, CircleX } from "lucide-react";
import membership from "@/assets/data/membership.json";
import { Button } from "./ui/button";

const MembershipTiers = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-5 mt-20 mb-6">
      <div className="flex gap-4">
        {membership.map((membership_package, index) => (
          <div
            key={index}
            className="border p-4 rounded-2xl shadow dark:bg-gray-900/90 bg-[#FAF8FF]"
          >
            <h2>{membership_package.title}</h2>
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

            <Button className="w-full cursor-pointer mt-4" asChild>
              <a
                href={membership_package.purchase_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Now
              </a>
            </Button>
          </div>
        ))}
      </div>

      <div>
        <h2 className="mb-4">Membership Tiers</h2>
        <h1 className="mb-4">Ready to Transform Your Pool Business?</h1>
        <p className="mb-4">
          Join the fastest-growing community of pool professionals mastering
          business, finance, and leadership. Unlock exclusive training,
          mentorship, and rewards designed to help you grow faster than ever.
        </p>
        <p className="mb-4">
          Whether you’re building your foundation or ready to scale, Pool Nation
          has a membership designed to help you grow, profit, and thrive.
        </p>

        <h2 className="mb-4">Why Join Pool Nation?</h2>
        <ul className="ml-4 mb-4">
          <li className="flex gap-0.5 justify-start items-center">
            <CheckCheck size={20} /> Proven business systems that drive results
          </li>
          <li className="flex gap-0.5 justify-start items-center">
            <CheckCheck size={20} />
            Real mentorship from industry leaders
          </li>
          <li className="flex gap-0.5 justify-start items-center">
            <CheckCheck size={20} />A supportive community built for your
            success
          </li>
        </ul>

        <h2 className="">
          Your growth starts here — pick your plan and begin your journey.
        </h2>
      </div>
    </div>
  );
};

export default MembershipTiers;
