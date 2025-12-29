import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="bg-[#F7F7FB] border-t border-gray-200 dark:bg-[#0a0118] dark:border-gray-700">
      <div className="container mx-auto px-5">
        <div className="max-w-260 mx-auto mb-10 -mt-10 md:-mt-20">
          <div className="bg-linear-to-b from-[#F6F5FA] to-white dark:bg-linear-to-t dark:from-[#0a0118] dark:to-[#2b2338] border px-5 py-5 rounded-2xl shadow">
            <h1 className="text-3xl font-bold text-center">Our Sponsors</h1>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-5">
              <Image
                src="/img/logo/AquaStar2.png"
                alt="Sponsors"
                width={160}
                height={60}
                className="border rounded-md"
              />
              <Image
                src="/img/logo/AquaStar2.png"
                alt="Sponsors"
                width={160}
                height={60}
                className="border rounded-md"
              />
              <Image
                src="/img/logo/AquaStar2.png"
                alt="Sponsors"
                width={160}
                height={60}
                className="border rounded-md"
              />
              <Image
                src="/img/logo/AquaStar2.png"
                alt="Sponsors"
                width={160}
                height={60}
                className="border rounded-md"
              />

              <Image
                src="/img/logo/AquaStar2.png"
                alt="Sponsors"
                width={160}
                height={60}
                className="border rounded-md"
              />
              <Image
                src="/img/logo/AquaStar2.png"
                alt="Sponsors"
                width={160}
                height={60}
                className="border rounded-md"
              />
              <Image
                src="/img/logo/AquaStar2.png"
                alt="Sponsors"
                width={160}
                height={60}
                className="border rounded-md"
              />
              <Image
                src="/img/logo/AquaStar2.png"
                alt="Sponsors"
                width={160}
                height={60}
                className="border rounded-md"
              />
              <Image
                src="/img/logo/AquaStar2.png"
                alt="Sponsors"
                width={160}
                height={60}
                className="border rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-10 mb-10">
          <div className="basis-[40%]">
            <Image
              src="/logo.png"
              alt="logo"
              width={244}
              height={57}
              className="mb-3"
            />
            <p>
              The only Awards dedicated to the pool service and repair industry.
              Our goal is to recognize companies, products, and individuals in
              various categories that are chosen by the Pool Pros for the Pool
              Pros in our industry.
            </p>
          </div>

          <div className="basis-[15%] flex flex-col">
            <h1 className="font-semibold text-xl uppercase mb-5">Company</h1>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="basis-[15%] flex flex-col">
            <h1 className="font-semibold text-xl uppercase mb-5">Support</h1>
            <ul>
              <li>Help Center</li>
              <li>Safety Center</li>
              <li>Community Guidelines</li>
              <li>Feedback</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div className="basis-[30%] flex flex-col">
            <div className="dark:bg-gray-900/90 bg-[#FAF8FF] border shadow rounded-xl h-full p-6">
              <h6 className="text-xl font-bold">
                Don’t Miss the Monthly Spotlight
              </h6>
              <p>
                Join our mailing list and receive a free Spotlight update every
                month—straight to your inbox.
              </p>
              <div className="flex w-full items-center gap-2 mt-4">
                <form action="" className="flex w-full gap-2.5">
                  <Input
                    className="w-full z-50"
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                  <Button
                    type="submit"
                    variant="outline"
                    className="cursor-pointer z-50"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-linear-to-r from-[#f8f7f7] dark:from-[#0a0118] dark:via-[#2b2338] via-[#dddddd] dark:to-[#0a0118] to-[#f8f7f7] "></div>

        <div className="flex justify-center md:justify-between gap-5 md:gap-10 py-5 flex-wrap text-sm text-center md:text-left md:flex-nowrap">
          <div>
            <p>
              Copyright© {new Date().getFullYear()}, All rights reserved.
              Powered by Pool Nation
            </p>
          </div>

          <div className="flex gap-2">
            <p>Contact Us</p>
            <p>support@poolnation.com</p>
          </div>

          <div className="flex gap-2">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
