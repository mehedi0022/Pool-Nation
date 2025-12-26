import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="bg-[#F7F7FB] border-t border-gray-200 dark:bg-[#0a0118] dark:border-gray-700">
      <div className="container mx-auto">
        <div className="max-w-260 mx-auto mb-10 -mt-20">
          <div className="bg-linear-to-b from-[#F6F5FA] to-white dark:bg-linear-to-t dark:from-[#0a0118] dark:to-[#2b2338] border px-5 py-10 rounded-2xl shadow">
            <h1 className="text-3xl font-bold text-center">Our Sponsors</h1>

            <div className="flex flex-wrap justify-center gap-4 mt-5">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">
          <div>
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
            <div className="mt-5">
              <ul className="flex gap-5">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-semibold text-xl uppercase mb-5">Company</h1>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h1 className="font-semibold text-xl uppercase mb-5">Support</h1>
            <ul>
              <li>Help Center</li>
              <li>Safety Center</li>
              <li>Community Guidelines</li>
              <li>Feedback</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h1 className="font-semibold text-xl uppercase mb-5">Subscribe</h1>
            <p>Join our newsletter for the latest updates.</p>
            <form action="" className="mt-3">
              <div className="flex w-full max-w-sm items-center gap-2">
                <Input type="email" placeholder="Email" required />
                <Button type="submit" variant="outline">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="h-px bg-linear-to-r from-[#f8f7f7] dark:from-[#0a0118] dark:via-[#2b2338] via-[#dddddd] dark:to-[#0a0118] to-[#f8f7f7] "></div>
        <div className="flex justify-between gap-10 py-5 flex-wrap text-sm">
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
